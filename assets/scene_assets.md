# 《門扉背後：凡人的弒神契約》場景空間與 GEO 註冊庫 (Scene & GEO Master Registry)
## 整合 3/4 深度視角、GEO SPATIAL LAYOUT 純空間文字地圖與 1.0 秒建立鏡頭標準

---

## 場景核心三大空間法則

1. **3/4 深度幾何基準（3/4 Depth Perspective）**：所有場景資產均採用 3/4 俯瞰或透視縱深角度建檔，嚴禁扁平正視圖，確保跨視角旋轉時空間不崩解。
2. **GEO SPATIAL LAYOUT 文字地圖（Locked Spatial Text Map）**：同一場景內的所有鏡頭必須逐字包含該場景的 GEO 地圖，鎖定錨點公尺數、單一光源與 180 度攝影機軸線。
3. **1.0 秒建立鏡頭（1-Second Spatial Anchor）**：場景開頭或切鏡首秒，第一幀即包含所有主體與地標，禁止空鏡開場。

---

## 1. 場景 01：極寒物流調度大廳 (Dispatch Hall)
- **資產標籤**：@loc_dispatch_hall
- **空間特徵**：裸露水泥橫樑、柴油叉車通道、頻閃白光日光燈、金屬調度長桌、寫滿調度公式的黑板。

### 鎖定空間地圖 (Locked GEO SPATIAL LAYOUT)
`	ext
GEO SPATIAL LAYOUT (LOC_DISPATCH_HALL - LOCKED ACROSS ALL HALL SHOTS):
- Center Anchor: Heavy industrial metal dispatch desk, cluttered with paperwork, mechanical pencils, and cracked electronic calculator.
- Spatial Left Landmark: Open warehouse bay doors 12 meters to screen-left, showing drifting snow flurries and amber forklift beacon lights.
- Spatial Right Landmark: Large frosted window and blackboard covered in chalk equations, 4 meters to screen-right.
- Background Depth: Concrete pillar row extending 20 meters deep into cold blue shadow.
- 180-Degree Line: Camera remains strictly on the East side of the dispatch desk; crossing the axis to the West wall is prohibited.
- Single Light Vector: Overhead flickering cool-white industrial fluorescent strip directly above desk, casting sharp downward shadows; secondary warm amber hazard light flashing from deep left background.
`

---

## 2. 場景 02：地下四號深凍冷庫 (Deep Storage Vault 04)
- **資產標籤**：@loc_freezer_vault
- **空間特徵**：20cm 厚重鍍鋅鋼防爆門、高聳金屬格柵貨架、-18.5°C 冰霜凝結、紅色 LED 壁掛溫度計、金屬逃生緊急連桿。

### 鎖定空間地圖 (Locked GEO SPATIAL LAYOUT)
`	ext
GEO SPATIAL LAYOUT (LOC_FREEZER_VAULT - LOCKED ACROSS ALL VAULT SHOTS):
- Center Anchor: Central 2.5-meter wide concrete walkway flanked by towering 6-meter galvanized steel storage racks covered in thick frost.
- Spatial Left Landmark: Heavy 20cm-thick airtight blast door with red mechanical emergency latch bar, 6 meters to screen-left.
- Spatial Right Landmark: Wall-mounted digital thermometer glowing bright crimson LED '-18.5°C' with hanging ice stalactites, 3 meters to screen-right.
- Background Depth: Dark freezing mist swallowing walkway depth at 15 meters.
- 180-Degree Line: Camera stays strictly on the corridor axis looking toward blast door or deep into racks; never crossing to opposite rack interior.
- Single Light Vector: Narrow warm yellow cone from Lu Yuan's flashlight as sole active key light; static crimson point light from wall thermometer; deep freezing cyan ambient undertone.
`

---

## 3. 場景 03：深淵邊界・青銅重鐵門降臨場 (Abyss Bronze Gate Threshold)
- **資產標籤**：@loc_bronze_gate
- **空間特徵**：空間碎裂如黑曜石鏡面、數十米高巍峨青銅古門、精密弒神齒輪咬合、門縫溢出深黑狂風與暗金神性符文。

### 鎖定空間地圖 (Locked GEO SPATIAL LAYOUT)
`	ext
GEO SPATIAL LAYOUT (LOC_BRONZE_GATE - LOCKED ACROSS ALL GATE SHOTS):
- Center Anchor: Massive 30-meter high archaic bronze monolith gate, covered in moving interlocking cogs and glowing gold runic engravings.
- Spatial Left Landmark: Shattered spatial boundary fragments floating like black glass shards, 8 meters to screen-left.
- Spatial Right Landmark: Ground fracture spitting freezing cyan cold fire, 6 meters to screen-right.
- Scale Anchor: Human characters stand at base of gate, reaching only 1/15th of the threshold height; camera framing cannot encompass full gate top and ground simultaneously without extreme tilt.
- 180-Degree Line: Camera strictly remains on the human approach side (South hemisphere), facing North toward the towering gate.
- Single Light Vector: Volumetric golden and cyan god rays bursting through the 20cm crack between the bronze doors, creating intense backlight silhouettes for all foreground subjects.
`
