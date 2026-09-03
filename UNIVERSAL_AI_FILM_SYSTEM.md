# 通用 AI 漫劇與影視工業級全流程工程體系規範
## Universal AI Film & Comic-Drama Production Pipeline Specification

> 本規範由長篇 AI 影視實踐（Hell Grind）、提示詞導演系統（CineDance V4）、圖像優化系統（LIRA）與角色行為表演系統（Acting System）深度提煉重構而成。
> 本體系將「底層空間幾何、物理定律、角色行為與鏡頭調度」與「視覺風格渲染」徹底解耦，適用於寫實電影、日系動漫、美式漫畫、國風仙俠、賽博龐克等任何風格的 AI 影視與漫劇專案。

---

## 核心公理與設計哲學

1. **資產優先（Asset-First）**：在角色、場景與關鍵道具未完成標準化建檔與壓力測試前，嚴禁直接生成分鏡鏡頭。
2. **空間幾何鎖定（GEO Spatial Layout）**：模型不具備鏡頭間的空間記憶。所有鏡頭必須依賴統一、固定且客觀的空間幾何地圖（GEO）來錨定位置與軸線。
3. **行為代替情緒（Acting by Behavior）**：表演是在壓力下爭奪目標的物理行為，而非情緒形容詞。嚴禁用「憤怒、悲傷」等抽象詞彙，必須轉化為肌肉、呼吸、視線、身體重心與手上工作。
4. **狀態分離（State Separation）**：人物的受傷、換裝、淋雨、武器狀態等，一律拆分為獨立資產（如 @char_base、@char_wet、@char_dmg），禁止在單一描述中混合多種狀態。
5. **單一變數外科手術式迭代（Single-Variable Surgical Iteration）**：鏡頭修改必須遵循「一次只改一行」原則；若迭代 10–15 次仍未成立，必須簡化鏡頭（拆鏡、刪減動作或更換機位），而非堆疊形容詞。
6. **風格與結構解耦（Decoupled Style Architecture）**：將場景物理、空間調度與人物行為作為不變的「核心骨架」，將風格預設（Style Prefix）與光學外觀作為可替換的「渲染層」。

---

## 模組一：角色工程系統（Universal Character Engineering）

### 1.1 標準角色看板與三視圖隔離規範（Bible Sheet Isolation Standard）
為防止模型在特徵提取時產生「圖層重疊、特徵混染、面部比例塌陷與雜色污染」，角色設定看板必須遵循以下四大工業標準：
- **獨立分區與邊界隔離（Isolated Bounding Frames）**：
  - 全身三視圖與局部特寫、道具拆解區必須有明確的幾何邊界或均勻灰底留白，嚴禁特寫圖層邊緣（如衣領、髮絲）覆蓋或侵入全身立繪空間。
- **三欄完整構成（含完整頭身比）**：
  - 左欄：**完整正面全身立繪**（必須包含完整頭部與清晰面部輪廓，以錨定頭身比與頸肩結構）。
  - 中欄：**完整背面全身立繪**（提供背部裝甲、反光帶、收納包與後腦髮型）。
  - 右欄：**獨立胸像中近景（Bust Shot）**（從胸口至頭頂，上方保留頭頂留白 Headroom，提供 3/4 視角高解析度眼神光與微表情事實源）。
- **限量三色盤原則（Strict 60-30-10 Rule）**：
  - 角色設定圖中常駐專屬三色條（基底主色 60% + 結構輔色 30% + 唯一點綴色 10%），杜絕隨機色彩溢出與光污染。
- **去風格化中性漫射光（Neutral Diffuse Lighting）**：
  - 使用乾淨中性灰背景（#D4D4D8 或 #E2E8F0）、均勻漫射光、真實物理材質（Matte textures）。
  - 嚴禁烘焙彩色輪廓光（Rim Light）、鏡頭光暈（Lens Flare）或局部高光，確保資產可乾淨遷移至任何後續分鏡。

### 1.2 角色主表演檔案（Master Acting Profile）
每個核心角色必須建立一份 150–220 字的英文主表演檔案，作為行為與動作的唯一事實源（單一連續段落）：

`	ext
[ACTING BLUEPRINT TEMPLATE]
Act in the manner of [CHARACTER_NAME]. [Age, physical build, posture, and weight distribution—body as documentation of life history]. [Core psychological engine—why the body behaves this way]. Voice Profile: [Pitch/timbre, regional accent, cadence, and exact breakdown of how the voice fractures under extreme stress]. Signature physical habits and tics: [Default idle habit and trigger; stress habit and trigger; masking behavior and exact condition under which the facade cracks]. Locomotion: [Named gait style, detailing weight, foot strike, torso lean, arm swing, and head stability]. BUT, when [emotional/physical trigger], [precise shift in posture, gaze velocity, and facial micro-tensions]. [Single softening object/entity].
`

#### 關鍵規則：
- **身體重心與步態**：明確重心地點（如「重心落在腳跟、胸口微沉」）並為步態命名（如「重裝拳手步」、「警覺巡行步」）。
- **面具與裂口（Facade & Crack）**：必須包含「平時的防禦外殼」以及「在何種精確觸發下瞬間崩塌」（例如平時保持冷靜假笑，但看見特定物品時下顎瞬間咬緊）。
- **眼睛生命（Ocular Life）**：嚴禁死盯。必須定義微眼跳（Micro-saccades）、分階段眨眼（慢眨、連續快眨、重置眨眼）以及「眼睛永遠比頭部早 0.3 秒抵達目標」。

### 1.3 聲音固定字典與聲學參數規範（VoxCPM Three-Pillar Voice Design & Parameter Matrix）
長篇或多鏡頭對白中，聲音必須維持絕對一致。嚴禁使用包含自定義偽標籤的 LLM 格式與抽象文學修辭，必須遵循連續聲學 TTS 的「去抽象聲學落地四大鐵律」與「三段式核心設計規範」，在有台詞時逐字填入音訊 Voice Prompt 欄位：

```text
[THREE-PILLAR CONCRETE ACOUSTIC FORMULA]
1. 音色描繪 (Timbre & Vocal Texture): [明確語言口音(如台灣國語/Standard Mandarin), 年齡性別, 聲部音高, 胸腔/咽喉共鳴質地, 錄音室乾聲環境].
2. 說話風格 (Speaking Style & Cadence): [語速感受(沉穩/偏快), 斷句俐落度, 咬字發音力度, 呼吸進出氣感].
3. 情緒基調 (Emotional Baseline & Persona): [純聽覺情緒表現(壓抑冰冷/剛硬耐痛/溫和安撫), 聲學威脅/壓迫/緊繃感].
```

#### 聲學提示詞防抽象四大鐵律（Acoustic-First Grounding Rules）：
1. **精準鎖定口音發音**：指明具體語言/口音（如「台灣國語（普通話），發音標準」），嚴禁使用「東亞青年」等寬泛標籤，避免潛空間抽樣漂移至粵語或日韓語。
2. **剔除無效小數點數值量化**：嚴禁使用「0.25秒微停頓、0.90x、70%共鳴」，模型無物理時鐘，會誤觸長休止符或引發聲學互斥；必須轉化為「語速沉穩，斷句俐落乾脆」、「胸腔共鳴強，聲線緊繃冷峻」等物理聲學感知詞。
3. **剔除小說設定與文學修辭**：嚴禁使用「壓抑PTSD、幾何計算為防禦、40年老煙民」，無聲學對應權重；必須轉化為「情緒壓抑冰冷，毫無起伏，帶有威脅感」、「濃重煙嗓粗糙沙啞，帶有咬牙耐痛意志」等直接聽覺特徵。
4. **純淨連續聲學文本**：輸出純自然語言英文/繁中單一段落，零偽代碼，零方括號標籤。

#### 標準參數調校配置（Parameter Preset Matrix）：
- `cfg`（引導強度）：一般角色 2.2 - 3.0；神祇/非人聲 1.8 - 2.0（防低頻破音）。
- `temperature`（溫度）：冷靜/理性角色 0.60 - 0.70；重創/狂暴角色 0.80 - 0.92。
- `steps`（步數）：常規角色 28 - 36 步；神祇/大空間殘響 40 - 48 步。
- `sway`（時間調度）：負值（-0.1 至 -0.5）強化微觀細節與發音清脆度；正值（0.0 至 0.4）強化宏觀結構與深層空間殘響。

---

## 模組二：場景與空間定位系統（GEO Spatial & Environment System）

### 2.1 3/4 深度場景資產與空間錨點
- **拒絕正面扁平視角**：場景基準圖必須採用 3/4 視角或具備透視縱深的廣角，提供模型可讀取的深度資訊。
- **空間錨點（Anchor Objects）**：每個場景必須具備 1–2 個核心地標物（如中央石柱、燃燒車輛、金屬控制台、特定門檻），所有人物調度皆以錨點的公尺距離描述。

### 2.2 GEO SPATIAL LAYOUT（純空間地圖規範）
在同一場景的所有連續鏡頭中，必須**逐字複製**相同的空間文字地圖，嚴禁在鏡頭之間更動座標：

`	ext
GEO SPATIAL LAYOUT (LOCKED ACROSS ALL SHOTS IN SCENE):
- Center Anchor: [Description of central landmark, e.g., Circular stone dais under overhead direct fixture].
- Spatial Left Landmark: [Object/Entrance description and distance from center].
- Spatial Right Landmark: [Object/Obstacle description and distance from center].
- Background Depth: [Terminal wall or horizon line at X meters depth].
- 180-Degree Line: Camera remains strictly on the [South/North/East/West] side; crossing the axis is prohibited.
- Single Light Vector: Dominant key light originates exclusively from [Direction and elevation, e.g., High North overhead skylight], casting shadows toward [Direction].
`

### 2.3 每場戲 1.0 秒建立錨定機制（Anchor Second）
在多鏡頭切換或場景開頭，前 1.0 秒作為空間與人物位置的「錨定拍」：
- 第一幀即包含所有必需角色與地標物，位置完全鎖定。
- 人物在此 1 秒內不做大幅位移，僅維持微呼吸或承接上一鏡的尾音，讓模型建立穩定的空間辨識。

### 2.4 反打與換機位工程路徑
- **路徑 A（圖像修復法）**：使用局部編輯工具（如 Nano Banana Pro / GPT Image 2），在提示詞中明確重構幾何關係（如「原視角中右側的控制台，在反打視角中必須嚴格位於畫面左側」）。
- **路徑 B（視頻穿行擷取法）**：先生成一段慢速穿行空場視頻，擷取所需反打角度的高解析度截圖，修復光影後作為新的子場景參考資產。

---

## 模組三：鏡頭與光學導演系統（Universal Cinematography & Optics）

### 3.1 視場角決策樹（FOV Decision Tree）
AI 視頻模型對「對角視場角（Diagonal FOV）+ 實體距離 + 可見光學特徵」的響應遠高於抽象的鏡頭毫米數與光圈數值。

| 視場角 (FOV) | 鏡頭類型 | 實體機位距離 | 適用情境 | 核心光學特徵詞 |
|---|---|---|---|---|
| **107°** | 矯正型超廣角 | 0.5–0.8 公尺 | 大型場景地理、極致壓迫感 | 直線保持筆直無魚眼彎曲、近景體積巨大、邊緣縱深極大展開 |
| **84°** | 經典廣角 | 1.0–1.5 公尺 | 沉浸式環境動作、身體性對抗 | 前景身軀自然放大、背景空間深度清晰可讀、環境延伸至邊緣 |
| **47°** | 標準自然鏡頭 | 3.0–5.0 公尺 | 自然紀錄、對白交互、經典敘事 | 人眼自然透視、無透視畸變、比例扎實、背景景深舒適可讀 |
| **29°** | 短望遠人像 | 4.0–6.0 公尺 | 角色中景、對白肖像、細節特寫 | 望遠鏡頭拉近而非機位貼近、柔和奶油散景、主體與背景銳利分離 |
| **18°** | 經典望遠特寫 | 6.0–8.0 公尺 | 緊張情緒、微表情、心理壓迫 | 強烈空間壓縮感、背景壓平貼近人物、極薄焦平面、主體邊緣銳利 |
| **8°** | 超望遠觀察 | 20.0–25.0 公尺 | 遠距窺視、狙擊視角、孤立感 | 背景融化為色塊、必須包含模糊前景遮擋（佔畫面 30%-40%） |

### 3.2 防焦段漂移詞庫（Lens Lock Dictionaries）
- **望遠鏡頭鎖定詞**：Extreme background compression, creamy bokeh, razor-thin focal plane, subject sharply isolated, distance achieved through optical reach not camera proximity, blurred foreground framing elements.
- **廣角鏡頭鎖定詞**：Deep focus throughout, rectilinear geometry with straight architectural lines, extended spatial volume, physical camera proximity, environment fully encompassing the subject, no telephoto bokeh compression.

### 3.3 運鏡物理與手持呼吸感
- 嚴禁用「Dramatic camera movement」、「Crazy shake」等空泛詞。
- 明確定義攝影師物理行為：Organic handheld with subtle operator breathing and micro-settling, slight weight shift compensation, no mechanical gimbal float, no digital jitter.

### 3.4 光影優先級鎖定
- **單一主光原則**：每場戲僅允許一個主光源與一個主陰影方向，嚴禁出現多重矛盾光源。
- **背光與陰影側拍攝（Shooting into the Shadow Side）**：將攝影機置於主體陰影側，依靠邊緣光（Rim Light）與輪廓光勾勒主體，臉部保留自然暗部層次，杜絕平坦正面光。

---

## 模組四：表演與分鏡編排系統（Universal Acting & Shot Blocking）

### 4.1 表演五支柱落地標準
每場戲的分鏡與動作必須落實五大戲劇支柱：
1. **目標（Objective）**：指向對手的具體動詞（如「迫使對方退後」、「奪取控制台」）。
2. **障礙與代價（Obstacle & Stakes）**：具體的物理或心理阻礙，以及若失敗將失去什麼。
3. **策略（Tactics）**：當前採用的手段（如挑釁、施壓、防禦、假裝示弱）；策略切換必須成為視覺事件。
4. **節拍（Beats）**：每次節拍轉換必須在停頓、姿態改變、速度變化或視線轉移中明確可見。
5. **潛台詞（Subtext）**：角色嘴上說的與實際追求的分離，透過肢體小動作洩漏。

### 4.2 傾聽與反應法則（Listening & Reaction）
- **半句反應**：對方的動作或台詞尚未結束時，聽者的微表情與身體姿態已經開始反應。
- **手上工作（Business）**：角色在對白時必須有具體的物理動作（擦拭武器、整理零件、倒水、握緊刀柄）；當重大台詞出現時，**「手上動作突然停滯」**即為最強戲劇重音。

### 4.3 動作按秒切片規範（Action Timing & Micro-Beats）
提示詞中的動作必須精確到秒級區間（如 0.0–2.0s, 2.0–5.0s, 5.0–8.0s），且每個區間內嚴禁塞入互相矛盾的動作指令。

### 4.4 對白與音訊約束（Audio-Only Discipline）
- **台詞唯一性**：台詞僅允許出現在 AUDIO 欄位並用雙引號標註，動作欄位嚴禁出現口語對白。
- **純環境音效（Sound Effects Only）**：生成階段一律標註 No background music, no score, no subtitles。配樂屬於後期剪輯工序，生成時自帶音樂會破壞剪輯點。

---

## 模組五：全風格通用提示詞引擎骨架（Universal Prompt Engine Skeletons）

### 5.1 視頻生成標準剛性骨架（Universal Video Prompt Skeleton）

`markdown
SCENE CONTEXT:
[Exact number of characters, e.g., Exactly 2 characters: @CHAR_A and @CHAR_B—no duplicate characters]. [Time of day, environment context]. [One concise sentence of core action]. Single continuous take of [Duration, e.g., 8] seconds, real-time speed, no cuts.

ACTIVE REFERENCES:
- @CHAR_A: Role reference. [Age, build, current physical damage/status, key visible costume anchor, props in hand]. 100% match reference.
- @CHAR_B: Role reference. [Age, build, current physical status, props in hand]. 100% match reference.
- @LOC_REF: Location reference. Extract architectural volume, surface texture, and spatial mood only. Do not inherit framing, camera angle, or color grading.

GEO SPATIAL LAYOUT:
[Paste locked spatial text map of the environment].

FIRST FRAME AND SPATIAL BLOCKING:
First visible frame already establishes full spatial context. @CHAR_A is positioned at [Exact location relative to anchor], facing [Direction/Target]. @CHAR_B is positioned at [Exact location], facing @CHAR_A. Camera is locked at [Camera position on axis]. No empty establishing frames.

OPTICS & CAMERA:
[Exact FOV, e.g., 47-degree diagonal FOV, standard lens perspective]. Camera positioned at [Eye/Chest/Hip] level, [Distance in meters] from primary subject. [Camera movement: e.g., Subtle breathing handheld with micro-stabilization on actor's weight shift; no digital wobble, no unmotivated pans].

ACTION TIMING:
- 0.0–2.0s: [Opening micro-beat: Initial state, eye contact established, physical tension held].
- 2.0–5.0s: [Primary physical action: Weight transfer, precise movement toward/away from landmark, object interaction].
- 5.0–8.0s: [Resolution or escalation beat: Reaction, line delivery, lingering momentum].

PHYSICS & MATERIALITY:
[True physical weight, inertia, drag, ground contact friction, fabric secondary motion, liquid viscosity/fluid dynamics, no floating assets].

LIGHTING & EXPOSURE:
[Single dominant light vector and direction]. Camera is positioned on the shadow side of subjects. High-contrast edge rim lighting, deep textured shadow pockets on faces, visible moist specular highlights in eyes. No flat frontal illumination, no studio beauty lighting.

AUDIO & DIALOGUE:
On-set ambient sounds only: [Specific environmental foley: e.g., Low mechanical drone, gravel footsteps, wind flutter].
[CHARACTER_NAME] Voice Blueprint: [Paste Voice Blueprint]. [CHARACTER_NAME] speaks at [Timestamp]: "[Exact dialogue line in quotes]". All other characters remain completely silent with closed lips. No music, no subtitles.

CHARACTER ACTING (BEHAVIORAL):
- @CHAR_A: [Objective and tactic]. [Subtle eye saccades, stepped blinking (one slow blink followed by focused lock), visible chest breathing]. [Hand business and physical status].
- @CHAR_B: [Reaction beat, listening posture, status dynamic in body language].

STYLE & TECHNICAL LOCK:
[Insert Chosen Style Preset Block from Module 6]. High fidelity, 24fps smooth organic motion, zero artifacting, zero ghosting.
`

---

### 5.2 圖像外科手術式編輯模板（LIRA Surgical Edit Template）

`markdown
Edit this image: [One-sentence clear objective].

CHANGE:
[Specify ONLY the exact element to modify, e.g., Add a deep diagonal scar across the left cheek, with dry coagulated blood edges].

PRESERVE EXACTLY:
- Exact facial anatomy, facial structure, skin pores, and identity of @CHAR_A.
- Exact clothing textures, folds, and accessories.
- Exact camera angle, lens perspective, focal plane, and depth of field.
- Exact background architecture, lighting vector, shadow placements, and color grading.

ONLY CHANGE: [Reiterate single modification]. Everything else remains 100% identical and locked.
`

---

## 模組六：跨風格渲染器矩陣（Cross-Style Rendering Matrix）

底層的「空間幾何、角色行為、視場角光學與物理規律」維持通用不變；只需在提示詞末尾切換對應的風格渲染技術塊（Style Technical Block）：

### 6.1 寫實電影風格（Photorealistic Cinema / IMAX 35mm）
`	ext
STYLE PRESET: 8K IMAX Film Aesthetic. True photorealism, authentic 35mm Kodak Vision3 500T film grain texture, soft cinematic roll-off. Natural physical optics with 180-degree shutter motion blur. Pore-level skin micro-textures, authentic peach fuzz, asymmetric skin imperfections, capillary flush, subsurface scattering matching local light. Not 3D render, not CGI, not videogame cutscene.
`

### 6.2 日系頂級動漫 / 熱血漫劇風格（High-End Japanese Anime / Dynamic Cel-Shading）
`	ext
STYLE PRESET: Premium Cinematic Anime Feature Film Aesthetic. High-end theatrical 2D animation style with sophisticated multi-layered digital compositing (Ufotable/MAPPA feature film fidelity). Crisp hand-drawn line art with variable ink weight, expressive cel-shading with soft airbrushed ambient occlusion. Dynamic cinematic lighting with volumetric rim highlights and atmospheric glow. Authentic anime color palette (60:30:10 ratio), cinematic 24fps hand-animated motion cadence. Not 3D CGI, not western cartoon.
`

### 6.3 美式圖像小說 / 賽博龐克黑色風格（Graphic Novel / Cyberpunk Neo-Noir）
`	ext
STYLE PRESET: Dark Graphic Novel Neo-Noir Aesthetic. Bold ink-washed line definition, deep pitch-black shadow blocks with high-contrast chiaroscuro lighting. Saturated neon edge highlights (cyan, magenta, amber) cutting through dense industrial haze. Gritty cinematic texture, textured halftone micro-dot shading in midtones. Intense atmospheric density with rain streaks, lens flare flaring across anamorphic horizontal lines. Not flat vector, not 3D plastic.
`

### 6.4 東方玄幻 / 新國風水墨武俠風格（Xianxia / Eastern Ink-Wash Cinematic）
`	ext
STYLE PRESET: Cinematic Eastern Fantasy Aesthetic. Blend of high-realism oriental fantasy and subtle traditional ink-wash atmosphere. Flowing fabric physics with delicate silk textures, atmospheric mountain mist, soft volumetric sunlight filtering through bamboo/clouds. Elegant subdued color harmony dominated by jade, ink-black, aged gold, and cinnabar red accents. Cinematic theatrical framing, ethereal elegance combined with grounded martial arts weight.
`

### 6.5 韓漫條漫 / 現代高張力劇情風格（Webtoon High-Impact Drama）
`	ext
STYLE PRESET: Premium Webtoon Drama Visual Aesthetic. Ultra-clean, razor-sharp digital line art with high-density facial detail. Polished layered digital coloring, intense emotional eye reflections with sharp specular stars and emotional gradient depths. Dramatic lighting contrast designed for vertical narrative impact. Vibrant contemporary color palette with refined shadow gradients. Crisp, modern, highly expressive storytelling aesthetic.
`

---

## 模組七：生產 SOP、迭代原則與故障診斷（Production SOP & Diagnostics）

### 7.1 4-D 生產工作流（4-D Pipeline）
1. **Deconstruct（拆解）**：僅提取當前鏡頭必需的人物、標籤、地標與動作，清除所有非當前鏡頭的上下文與過期標籤。
2. **Diagnose（診斷）**：在撰寫提示詞前，預先診斷常見故障（第一幀是否為空、焦段是否漂移、光線是否平坦、人物是否會瞬移或多頭）。
3. **Develop（開發）**：依據剛性骨架，依序組裝空間地圖、第一幀鎖定、光學、動作時間、物理、光影與角色表演。
4. **Deliver（交付）**：輸出純淨、可直接投入模型執行的英文提示詞，不夾帶非必要的雜訊。

### 7.2 十至十五次簡化法則（The Rule of Simplification）
- 當一個鏡頭經過 10–15 次外科手術式微調後仍無法成功生成：
  - **立即停止修改修飾詞**。
  - **拆分鏡頭**：將複雜動作拆為兩個單一動作鏡頭。
  - **簡化動作**：刪除過載的肢體動作，聚焦於單一核心事件。
  - **更換角度**：將全景改為特寫插鏡，或切換為 3/4 側視角。

### 7.3 壞鏡頭與壞表演診斷矩陣（Diagnostic & Troubleshooting Matrix）

| 故障現象 | 核心根因 | 具體工程解法 |
|---|---|---|
| **第一幀為空 / 角色延遲出現** | 模型自主生成無效建立鏡頭 | 在第一幀鎖定中聲明：First visible frame already establishes all characters in place; no empty establishing shot. |
| **鏡頭切換後人物瞬移 / 交換位置** | 模型缺乏空間記憶 | 在提示詞開頭逐字置入鎖定的 GEO SPATIAL LAYOUT，並聲明攝影機位於 180 度軸線哪一側。 |
| **面部崩壞 / 換了一張臉** | 全景時模型從低解析度全身圖取臉 | 角色表全身圖實施「去頭處理」；提示詞強制加入 @CHAR 100% match reference. |
| **畫面死板 / 假人死盯（Dead Eyes）** | 缺少眼球微運動指令 | 加入眼球微跳與三段式眨眼：Micro-saccades, stepped blinking (one slow blink, then focused lock), moist specular highlights. |
| **情緒浮誇 / 做臉（Overacting）** | 提示詞寫了抽象情緒形容詞 | 刪除所有「憤怒、悲傷」詞彙，改寫具體肌肉行為：Jaw clenches and releases, nostrils flare slightly, heavy chest rise. |
| **光影變平 / 塑料感（Flat CGI Look）** | 模型預設正面補光 | 加入光影鎖定：Camera positioned strictly on shadow side; expose for silhouette and rim light; no flat frontal lighting. |
| **背景焦段漂移（廣角變長焦或相反）** | 未明確約束視場角與物理特徵 | 標註精確 FOV（如 84-degree FOV），並加入廣角/長焦專屬物理特徵詞庫（如 Rectilinear straight lines, deep focus throughout）。 |
| **人物出現多餘肢體 / 角色複製** | 未鎖定場景精確人數 | 於 SCENE CONTEXT 首句寫死：Exactly 2 characters: @CHAR_A and @CHAR_B—no duplicate characters, no extra crowd. |
| **巨大怪物/巨人被縮小成普通人類尺寸** | 缺乏畫面實體尺度參照物 | 提示詞必須包含尺度錨點：Titan is 30m tall; human @CHAR_A only reaches the titan's ankle; framing cannot contain both feet and head simultaneously. |
| **對白與嘴型混亂 / 自行加詞** | 對白與動作混合撰寫 | 對白僅寫於 AUDIO 欄位並加雙引號；未說話者標註 Remain silent with lips closed；環境音下壓 3dB。 |

---

## 模組六：雙軌渲染切換機制（3D 寫實質感 vs 純 2D 賽璐珞手繪）

本體系支援在同一套空間幾何（GEO）與三欄去頭角色表（Headless Layout）基礎上，一鍵無縫切換 3D 與 2D 雙軌渲染方案：

### 方案 A：暗黑寫實 3D 二次元（當前預設 · 3D 厚重立體質感）
- **核心特徵**：MAPPA 劇場版影棚打光、微觀毛孔肌理、金屬與織物實體厚重感、3D 空間體積陰影。
- **提示詞後綴**：`MAPPA studio cinematic lighting, dramatic chiaroscuro, cold industrial color palette, highly detailed character concept art, sharp cel-shaded lines, subtle 35mm film grain, 8k --ar 16:9 --v 6.1 --style raw`

### 方案 B：純 2D 賽璐珞日漫（純手繪扁平線條版）
- **核心特徵**：Kyoto Animation / WIT Studio 純手繪風格、乾淨銳利 2D 描邊、二段式賽璐珞平塗陰影、手繪眼神光，完全排除 3D 渲染與擬真雜質。
- **提示詞後綴**：`clean crisp 2D anime lineart, flat 2-tone cel shading, expressive anime key visual, hand-drawn anime aesthetic, Kyoto Animation and WIT Studio 2D quality, bold graphic outlines, 8k --ar 16:9 --v 6.1 --no 3D, CGI, photorealistic, realistic skin, 3D render, claymation`

---

## 模組七：端到端多模態影片提示詞工程標準（Seedance 2.0 / Multi-Subject Markup）

本模組專為當前最新一代支援原生多主體綁定、音訊對白驅動口型（Audio-Driven Lip-Sync）與時序分鏡生成的端到端多模態影視模型（如 Seedance 2.0 / Kling 原生音視頻版）制定標準語法。

### 7.1 五層標準架構骨架 (Five-Layer Structural Schema)

1. **主體資產與參照圖顯式綁定 (`<Subject>` & `<Picture>`)**：
   - 透過 XML 標籤明確指定主體在參照圖中的方位與視覺常數，例如：`<Subject1> Lu Yuan 是 <Picture 1> 畫面左側男性，保留參考圖面部特徵、黑色短髮、深藍物流工作服...`。
2. **永久聲學語音鎖定 (`Permanent Voice Blueprint`)**：
   - 明確聲明：`<Subject1>，S1 永遠是說話人。S1 始終使用一種固定的聲音：[年齡、音域、音色、語速、收音衰減、情緒語調、禁止腔調清單]`。
3. **空間調度與 180 度軸線鎖定 (`Spatial Blocking & Axis`)**：
   - 描述人物左右站位、對峙朝向、彼此間距、中後景環境地標與視線軸線（Eye-line Axis）。
4. **時序分鏡與原生對白標記 (`[Shot 1-N]` & `<d>[Chinese]...`)**：
   - 每個鏡頭標註景別、運鏡、物理動作與微表情。
   - 對白統一使用標準發音語法：`<Subject X> (SX) says: <d>[Chinese]台詞文字</d>`。
5. **負向過濾與字音分離硬約束 (`Negative Constraints & Mandatory Directives`)**：
   - 結尾統一追加標準程式碼區塊，明確禁止畫面出現字幕文字，並保留純淨現場環境音與人聲。

### 7.2 標準可複製模板 (Production Prompt Template)

```text
<Subject1> [角色A名稱] 是 <Picture 1> 畫面左側[性別]，保留參考圖中的面部特徵、髮型、服裝材質、身材比例以及整體外貌。
<Subject1>，S1 永遠是說話人。S1 始終使用一種固定的聲音：[年齡]歲[性別]，[音域]，音色[音色描述]，常態語速[語速]、音量[音量]，句尾[收尾特徵]；[情境語氣]。禁止[排除腔調]。

<Subject2> [角色B名稱] 是 <Picture 1/2> 畫面右側[性別]，保留參考圖特徵...
<Subject2>，S2 永遠是說話人。S2 始終使用一種固定的聲音：...

<Subject3> 是 [場景名稱與光影氛圍]。

人物站位：[角色A] 站在畫面左側，身體朝向 [角色B]；[角色B] 站在畫面右側... 兩人隔著 [距離] 對視，[地標物] 位於中後景。保持兩人的左右關係與視線軸線，環境中只有 [環境音效]。

[Shot 1]
[景別與運鏡]。[主體動作與微表情]：
<Subject X> (SX) says:
<d>[Chinese]台詞內容</d>

[Shot 2]
[景別與運鏡]。[主體動作與微表情]：
<Subject Y> (SY) says:
<d>[Chinese]台詞內容</d>

【禁止項】
文字/UI/水印/Logo/角標/可讀文字/真實UI/畫面英文字母

【強制聲明】
無背景音樂,僅保留環境音與人聲和音效;畫面禁字幕/文字/水印/Logo;禁止可讀文字(指畫面字幕文字,不含人聲台詞)
```

### 7.3 物理擬音與 Foley 音效硬隔離協議 (Foley SFX Strictly to Action/Ambiance)

- **核心定義**：計算機按鍵聲「嗒、嗒、嗒」、拍桌「砰！」、金屬扳手敲擊、齒輪咬合、衣服摩擦、碎石冰渣踩踏、急促心跳聲等物理擬音（Foley SFX）與環境音，**絕對禁止使用 `<d>` 說話標籤**。
- **標準寫法**：物理擬音必須直接以自然語言寫在鏡頭的動作描述（Action）與環境音效（Ambiance）中。
  - 正確範例：`Lu Yuan 正面中近景。Lu Yuan 手指以高頻率敲擊塑料計算機按鍵「嗒、嗒、嗒」，面無表情冷酷回應：<Subject 1> (S1) says:\n<d>[Chinese]發不了。</d>`
  - 錯誤範例：`<Subject 1> (S1) says:\n<d>[Chinese]嗒、嗒、嗒</d>`（此寫法會導致模型計算嘴巴發出「嗒嗒嗒」的唇形動畫，屬於嚴重生成事故）。

### 7.4 無口型鏡頭禁止對白標籤協議 (No Dialogue for Non-Speaking Shots)

- **核心定義**：凡是畫面內沒有人物張嘴開口說話的鏡頭（如：大特寫手指敲按鍵、特寫液晶螢幕跳動數字、全景空鏡、手電筒滾動、防爆門合死、摔跌在地上沒說話等）：
  - **嚴禁出現 `<Subject X> says: <d>...</d>` 或 `@圖片X 說話：<d>...</d>` 區塊**。
  - 該鏡頭必須標註為 **「無人物對白」**，僅保留景別、機位、主體物理動作與環境音效。
  - 杜絕模型在微距手部或空鏡頭中強行觸發唇形神經網絡計算。

### 7.5 單鏡多模態按需動態宣告協議 (Dynamic Context-Aware Subject Scoping)

- **核心定義**：單鏡頭提示詞（Single Shot Prompt）嚴禁無差別塞入全劇集所有角色與聲學藍圖。
- **執行鐵律**：
  1. **主體按需載入**：僅在當前分鏡描述中「實際登場/同框」的角色，才在頭部宣告 `<Subject>` 與專屬語音/生物發聲藍圖。
  2. **非同框實體剔除**：若當前分鏡為純主角操作（如 S01 手部微距、S02 螢幕特寫、S07 男主近景），**一律徹底剔除 `@圖片2`（組長/怪物）的資產與聲學宣告**。
  3. **音訊雜音阻斷**：避免模型因讀取到未出場角色的暴怒吼叫或怪物咆哮聲學設定，在純微距或單人鏡頭中產生無效的呼吸雜音、低頻咆哮與背景聲軌干擾。
