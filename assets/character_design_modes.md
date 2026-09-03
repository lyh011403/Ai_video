# 《門扉背後：凡人的弒神契約》角色雙模式設計提示詞規格書（大師概念與防雜色升級版）

本文件定義角色設計的兩種輸出規格，並全面導入 [`assets/global_character_concept_engine.md`](file:///d:/Desktop/AI漫劇/assets/global_character_concept_engine.md) 之全球大師概念哲學與限量三色約束：
- **模式一（三視圖模式 / 16:9）**：專注於全身正視、側視、背視與淺灰背景，供 ControlNet、LoRA 訓練與模型姿態鎖定使用。
- **模式二（9:16 綜合概念設定看板 / Character Bible Board）**：參照專業遊戲/影視工業級設定集版型，單圖內整合三視圖、表情矩陣、服裝裝備拆解、三色盤、世界觀場景與角色語錄。

---

## 模式一：純三視圖設計規格 (Mode 1: 16:9 Turnaround Sheet)

### 人物角色三欄標準規格
- **Left panel**: 正面全身視圖（Full-length front view with complete visible head in neutral stance）
- **Middle panel**: 背面全身視圖（Rear full-body view）
- **Right panel**: 3/4 視角高清面部特寫（High-resolution 3/4 angle facial portrait）

### 怪物與領主 BOSS 16:9 不對稱版型規格 (40:40:20 Asymmetric Layout)
- **Left main panel (寬幅 40% 空間)**：正面全身遠景（Front full-body view in wide-angle framing, generous 15% negative space margins on all sides, all limbs/wings/claws fully visible within frame boundary, zero limb clipping）。
- **Middle main panel (寬幅 40% 空間)**：側面全身遠景（Lateral side profile view showing complete head-to-tail silhouette, dorsal structures, and articulated joint mechanics with ample safety margins）。
- **Right compact panel (緊湊 20% 空間)**：**怪異面部/頭部/口器超高清微距特寫（Focused high-resolution close-up macro portrait of monstrous head, molten maw, or sensory core）**。

### 提示詞公式
```text
Studio creature concept sheet, clean 16:9 widescreen asymmetric three-panel layout on flat neutral mid-gray (#808080) background:
- Left main panel (wide 40% framing): Front full-body view of [Creature], zoomed-out camera with generous negative space on all sides, all limbs/wings/claws fully visible within the panel, zero limb clipping, full stance.
- Middle main panel (wide 40% framing): Lateral side profile view showing full body from head to rear, dorsal structures with wide safety margins.
- Right compact panel (20% width): Focused high-resolution close-up macro portrait of the head, maw, and sensory nodes.
Directional soft neutral studio lighting, even exposure, authentic micro-textures. Pure clean composition, no text, zero border touching, 100% identity consistency, --ar 16:9 --v 6.1 --style raw
```

---

## 模式二：9:16 綜合概念設定看板規格 (Mode 2: 9:16 Character Bible Board)

### 版面結構規劃
1. **頂部區 (Header & Turnaround)**：
   - 角色名稱、代號、身分、侵蝕度數值、職能標籤。
   - 角色立繪與三視圖（正/側/背）。
2. **中部區 (Expressions & Color Palette)**：
   - 5 種核心表情變化（中性 Neutral / 極限精算 Calculating / 劇痛咬牙 Grimacing / 警戒 Alert / 理智邊緣 Desperate）。
   - 嚴格限量三色調色盤（含 Hex 色塊與佔比標註）。
3. **下部區 (Costume & Gear Breakdown)**：
   - 服裝分層拆解（大師剪裁結構、耐磨材質、功能口袋）。
   - 核心裝備與道具特寫（具備真實物理磨損與工業結構）。
4. **底部區 (Worldview & Voicelines)**：
   - 微縮世界觀概念插圖（極寒廢墟/冷庫/青銅門）。
   - 角色核心語錄。

---

## 核心角色 9:16 綜合設定看板提示詞庫 (Midjourney / Flux)

### 1. 陸遠（Lu Yuan）- 9:16 綜合設定看板
- **大師概念**：【G10 宮崎駿】生活功能主義 + 【G8 新川洋司】非對稱戰術結晶外骨骼
- **色彩約束（C1）**：炭黑 `#1E293B` (60%) + 生麻白 `#E2E8F0` (30%) + 唯一點綴暗紫金結晶色 `#7C3AED` (10%)

#### 提示詞 (Copyable Prompt)
```text
Official game character design bible sheet, UI infographic character board, 9:16 vertical layout, comprehensive character concept presentation sheet on clean light grey background (#E2E8F0).

[Top Section - Turnaround & Profile]: 26-year-old Asian male logistics dispatcher (Lu Yuan), lean wiry 178cm build, tired eyes with dark circles. Three full-body turnaround views (front, side, back) in worn dark blue-grey padded logistics parka with faded matte reflective strips and dark charcoal cargo pants. Character name "LU YUAN / 精算師", profile bio text block, erosion index meter.

[Middle Section - Expressions & Palette]: Grid of 5 close-up headshot expression studies: 1. Neutral exhausted, 2. Intense calculation with bloodshot eyes, 3. Grimacing biting tongue with lip bleeding, 4. Cold sharp alert, 5. High-pressure mental focus. Strict 3-color swatch palette row: Base Charcoal (#1E293B, 60%), Secondary Linen Grey (#E2E8F0, 30%), Single Accent Purple-Gold Crystal (#7C3AED, 10%).

[Lower Middle Section - Costume & Equipment Breakdown]: Isolated detailed item cutouts:
- Outerwear (Miyazaki functional wear): Heavily worn padded canvas logistics parka with mended seams and oil stains.
- Right Arm Mutation (Shinkawa biomechanical aesthetic): Forearm manifesting geometric dark purple-gold crystal veins breaking through skin, functional tension cables.
- Signature Gear: Battered black leather notebook with hand-written calculus formulas, matte silver mechanical pencil, cracked LCD calculator, and a severed cast-iron wrench tied with frayed canvas strap.

[Bottom Section - Lore & Quotes]: Cinematic rectangular inset of a frozen megalopolis blizzard, quote banner: "凡人的血肉會殘缺，但凡人的契約永不熄滅".

Graphic design presentation, clean UI layout, sharp technical linework, neutral diffuse studio lighting, matte textures, zero plastic specular shine, zero colored rim light --ar 9:16 --v 6.1 --style raw
```

---

### 2. 周鐵（Zhou Tie）- 9:16 綜合設定看板
- **大師概念**：【G4 Ian McQue】柴油重工業勞動磨損 + 【G9 三浦建太郎】冷鍛重壓與肌肉張力
- **色彩約束（C4）**：瀝青黑 `#1C1917` (50%) + 工業黃褐 `#78350F` (40%) + 唯一警示芥末黃 `#D97706` (10%)

#### 提示詞 (Copyable Prompt)
```text
Official game character design bible sheet, UI infographic character board, 9:16 vertical layout, comprehensive character concept presentation sheet on clean light grey background (#E2E8F0).

[Top Section - Turnaround & Profile]: 45-year-old rugged male tower crane operator (Zhou Tie), massive 185cm muscular heavyweight build, square weathered jaw. Three full-body turnaround views (front, side, back) in heavy mustard-yellow canvas work coat with oil smears and reinforced dark brown work trousers. Character name "ZHOU TIE / 守護之盾", health and physical stamina meters.

[Middle Section - Expressions & Palette]: Grid of 5 expression headshots: 1. Rugged stoic calm with unlit bent cigarette, 2. Roaring defensive fury, 3. Gritting teeth enduring immense physical pressure, 4. Gentle protective smile, 5. Focused solemn gaze. Strict 3-color palette row: Base Asphalt Black (#1C1917, 50%), Secondary Work Leather Brown (#78350F, 40%), Single Accent Muted Mustard Yellow (#D97706, 10%).

[Lower Middle Section - Costume & Gear Breakdown]: Isolated detailed item cutouts:
- Heavy Coat (Ian McQue dieselpunk labor wear): Thick canvas coat with welded seam patches, heavy grease stains, and industrial tool loops.
- Hands & Gloves: Battered thick split-leather work gloves with brass rivet reinforcement.
- Signature Weapon (Miura cold-forged brutalism): Massive 45cm heavy cast steel adjustable wrench with polished jaws and heavy impact dents.
- Trauma Detail: Deep heat-scars across upper back and scarred left earlobe.

[Bottom Section - Lore & Quotes]: Small cinematic landscape inset of an industrial crane ruin in blizzard, quote: "在老子的工地上，沒有塔吊能砸死人".

Graphic design presentation, clean UI layout, crisp lineart, neutral diffuse lighting, matte canvas textures, zero lens flare, zero colorful light contamination --ar 9:16 --v 6.1 --style raw
```

---

### 3. 宋嵐（Song Lan）- 9:16 綜合設定看板
- **大師概念**：【G7 Rick Owens】暗黑解構懸垂風衣 + 【A4 吉田明彥】冷冽優雅儀式感
- **色彩約束（C3）**：墨綠黑 `#064E3B` (60%) + 象牙白 `#D1D5DB` (30%) + 唯一深淵藍 `#2563EB` (10%)

#### 提示詞 (Copyable Prompt)
```text
Official game character design bible sheet, UI infographic character board, 9:16 vertical layout, comprehensive character concept presentation sheet on clean light grey background (#E2E8F0).

[Top Section - Turnaround & Profile]: 28-year-old Asian female clinical psychologist (Song Lan), slender 168cm upright posture, cold composed expression. Three full-body turnaround views (front, side, back) in asymmetrical dark forest green tailored trench coat over beige ribbed high-neck knitwear. Character name "SONG LAN / 心理治療師", sanity and resonance gauges.

[Middle Section - Expressions & Palette]: Grid of 5 expression headshots: 1. Calm analytical neutral behind glasses, 2. Empathetic soothing gaze, 3. Shock with shattered glasses lens, 4. Piercing observation with glowing blue geometric left iris, 5. Exhausted resolute focus. Strict 3-color palette row: Base Forest Black-Green (#064E3B, 60%), Secondary Ivory Ribbed Knit (#D1D5DB, 30%), Single Accent Deep Abyss Blue (#2563EB, 10%).

[Lower Middle Section - Costume & Gear Breakdown]: Isolated detailed item cutouts:
- Outerwear (Rick Owens draping silhouette): Asymmetrical high-collar tailored weatherproof trench coat with structured sharp shoulders.
- Knitwear: High-collar dense wool ribbed sweater.
- Signature Props: Vintage mechanical pocket watch with exposed escapement wheel, thin wireframe glasses, matte dark grey medical cross-body satchel.
- Ocular Mutation: Left iris displaying permanent blue geometric crystal mesh.

[Bottom Section - Lore & Quotes]: Cinematic inset of a clinical therapy room shattering into cosmic void, quote: "理智是凡人面對深淵最後的盾牌".

Graphic design presentation, clean UI layout, sharp technical lines, neutral diffuse studio lighting, zero digital bloom, zero specular gloss --ar 9:16 --v 6.1 --style raw
```

---

### 4. 林小滿（Lin Xiaoman）- 9:16 綜合設定看板
- **大師概念**：【A8 貞本義行】極簡機能剪影 + 【G2 Moebius】流暢防風幾何裝備
- **色彩約束（C4）**：暗炭灰 `#18181B` (60%) + 岩石灰 `#71717A` (30%) + 唯一點綴極地警戒橙 `#EA580C` (10%)

#### 提示詞 (Copyable Prompt)
```text
Official game character design bible sheet, UI infographic character board, 9:16 vertical layout, comprehensive character concept presentation sheet on clean light grey background (#E2E8F0).

[Top Section - Turnaround & Profile]: 20-year-old Asian female scout and survivalist (Lin Xiaoman), agile wiry 160cm athletic build. Three full-body turnaround views (front, side, back) in technical charcoal mountaineering jacket with muted orange shoulder yoke panels and reinforced climbing pants. Character name "LIN XIAOMAN / 偵查先鋒", perception meters.

[Middle Section - Expressions & Palette]: Grid of 5 expression headshots: 1. Alert sharp neutral, 2. Fierce determined battle focus, 3. Painful grimace from frostbite, 4. Relieved warm smile, 5. Wide-eyed shock in abyss. Strict 3-color palette row: Base Dark Charcoal (#18181B, 60%), Secondary Slate Grey (#71717A, 30%), Single Accent Arctic Safety Orange (#EA580C, 10%).

[Lower Middle Section - Costume & Gear Breakdown]: Isolated detailed item cutouts:
- Technical Wear (Sadamoto functional ergonomics): Sleek articulated windproof hardshell jacket and reinforced climbing leggings.
- Footwear: Lightweight rugged crampon-compatible mountaineering boots.
- Signature Equipment: Brass magnetic pocket compass on braided paracord, silver survival whistle, forged climbing carabiners.
- Trauma Detail: Frostbitten fingertips wrapped in matte medical tape.

[Bottom Section - Lore & Quotes]: Cinematic inset of a narrow icy canyon crevice in darkness, quote: "只要指南針還能轉，就一定有走得出的路".

Graphic design presentation, clean UI layout, crisp lineart, neutral diffuse lighting, matte fabric textures, zero plastic shine, zero rim light glare --ar 9:16 --v 6.1 --style raw
```
