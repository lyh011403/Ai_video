# 通用 AI 漫劇與影視全流程工程體系規範
## Universal AI Film & Comic-Drama Production Pipeline Specification

> 本規範為跨電腦、跨專案的可攜式標準。任何 AI Assistant（如 Antigravity, Claude Code, Cursor 或網頁端大模型）讀取本規範後，即可將使用者提供的原始小說、劇本或分鏡構想，標準化解析為工業級規格，並輸出為 `project_data.json`。

---

## 核心公理與設計哲學

1. **資產優先（Asset-First）**：在角色、場景與關鍵道具未完成標準化建檔與壓力測試前，嚴禁直接生成分鏡鏡頭。
2. **空間幾何鎖定（GEO Spatial Layout）**：模型不具備鏡頭間的空間記憶。所有鏡頭必須依賴統一、固定且客觀的空間幾何地圖（GEO）來錨定位置與軸線。
3. **行為代替情緒（Acting by Behavior）**：表演是在壓力下爭奪目標的物理行為，而非情緒形容詞。嚴禁用「憤怒、悲傷」等抽象詞彙，必須轉化為肌肉、呼吸、視線、身體重心與手上工作。
4. **狀態分離（State Separation）**：人物的受傷、換裝、淋雨、武器狀態等，一律拆分為獨立資產（如 `@char_base`, `@char_wet`, `@char_dmg`），禁止在單一描述中混合多種狀態。
5. **風格與結構解耦（Decoupled Style Architecture）**：將場景物理、空間調度與人物行為作為不變的「核心骨架」，將風格預設（Style Prefix）與光學外觀作為可替換的「渲染層」。

---

## 模組一：角色工程標準（Character Engineering）

### 1.1 角色看板與三視圖隔離標準（Bible & Turnaround Standard）
- **獨立分區與邊界隔離**：全身立繪與特寫、道具拆解區必須有明確的幾何邊界或均勻灰底留白，杜絕圖層重疊。
- **三欄完整構成**：
  - 左欄：完整正面全身立繪（錨定頭身比與頸肩結構）。
  - 中欄：完整背面全身立繪（背部裝甲、反光帶、後腦髮型）。
  - 右欄：獨立胸像中近景（Bust Shot，保留 Headroom，提供 3/4 視角眼神光與面部結構）。
- **限量三色盤原則（60-30-10 Rule）**：基底主色 60% + 結構輔色 30% + 唯一點綴色 10%，杜絕隨機色彩溢出。
- **去風格化中性漫射光**：使用中性灰背景（#D4D4D8）、均勻漫射光，嚴禁預先烘焙彩色輪廓光或鏡頭光暈。

### 1.2 角色主表演檔案（Master Acting Profile）
每個核心角色必須建立 150–220 字英文主表演檔案：
```text
Act in the manner of [CHARACTER_NAME]. [Age, physical build, posture, and weight distribution—body as documentation of life history]. [Core psychological engine—why the body behaves this way]. Voice Profile: [Pitch/timbre, regional accent, cadence, and exact breakdown of how the voice fractures under extreme stress]. Signature physical habits and tics: [Default idle habit and trigger; stress habit and trigger; masking behavior and exact condition under which the facade cracks]. Locomotion: [Named gait style, detailing weight, foot strike, torso lean, arm swing, and head stability]. BUT, when [emotional/physical trigger], [precise shift in posture, gaze velocity, and facial micro-tensions]. [Single softening object/entity].
```

### 1.3 聲音固定字典與聲學參數規範（VoxCPM Acoustic Formula）
配音必須遵循連續聲學 TTS 規範，拒絕無效的文學修辭或百分比小數點：
```text
1. 音色描繪 (Timbre & Vocal Texture): [明確語言口音(如台灣國語/Standard Mandarin), 年齡性別, 聲部音高, 胸腔/咽喉共鳴質地, 錄音室乾聲環境].
2. 說話風格 (Speaking Style & Cadence): [語速感受(沉穩/偏快), 斷句俐落度, 咬字發音力度, 呼吸進出氣感].
3. 情緒基調 (Emotional Baseline & Persona): [純聽覺情緒表現(壓抑冰冷/剛硬耐痛/溫和安撫), 聲學威脅/壓迫/緊繃感].
```
- 常規參數：`cfg`: 2.2 - 3.0, `temperature`: 0.60 - 0.75, `steps`: 28 - 36。

---

## 模組二：場景與空間幾何系統（GEO Spatial Layout）

所有同場景連續鏡頭必須逐字繼承相同的空間文字地圖：
```text
GEO SPATIAL LAYOUT (LOCKED ACROSS ALL SHOTS IN SCENE):
- Center Anchor: [中央核心地標物描述]
- Spatial Left Landmark: [左側地標物與中央距離]
- Spatial Right Landmark: [右側地標物與中央距離]
- Background Depth: [背景深度邊界]
- 180-Degree Line: Camera remains strictly on the [South/North/East/West] side; crossing the axis is prohibited.
- Single Light Vector: 主光源方向與投射陰影路徑。
```

---

## 模組三：鏡頭分鏡與提示詞工程（Shotlist & Video Prompts）

每個鏡頭包含以下結構化要素：
1. **鏡頭編號**（如 `S01`, `S02`）。
2. **景別與運鏡**（如 `Wide Shot, Slow Forward Dolly`, `Extreme Close-up, Handheld`）。
3. **畫面動作與物理阻力**（明確肢體發力、重心轉移、環境阻力）。
4. **角色對白與表演微表情**。
5. **影像/影片生成提示詞（Prompt）**：
   - 包含角色資產錨定標籤（如 `@char_main`）。
   - 包含場景 GEO 地圖。
   - 包含動態物理描述。
6. **聲學配音提示詞與參數**。

---

## 模組四：AI 解析生成 SOP（Script-to-JSON Pipeline）

當使用者提供劇本或小說時，AI 應依照以下步驟輸出資料：
1. **解析作品 Metadata**（片名、類型、預設視覺風格）。
2. **提取登場角色並生成 Bible 數據**（主色盤、主表演檔案、聲學字典、三視圖 Prompt）。
3. **提取出場景並鎖定 GEO 空間地圖**。
4. **依劇情劃分場次與分鏡鏡頭**，產出 Seedance/Kling 格式提示詞。
5. **封裝為標準 JSON** 寫入 `project_data.json` 或 `project_data.js`。
