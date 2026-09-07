# 《門扉背後：凡人的弒神契約》材質純度隔離與防砂礫油光工程規範
## (Material Semantic Integrity & Anti-Grain Protocol v1.0)

> **核心目標**：杜絕 AI 圖像生成中常見的「表面塑膠油膩感」、「異常刺眼高光斑點」與「全身鋪滿粗糙砂礫網狀碎裂紋（Over-textured Gritty Noise）」。
> **適用引擎**：Midjourney v6.1 / FLUX.1 [dev] / Stable Diffusion XL / ComfyUI

---

### 一、核心病因診斷與技術機理

在提示詞工程中，經常出現「期望畫面具有電影粗獷感，結果生成出全身起雞皮疙瘩、衣服淋油、白玉神軀長滿砂礫黑斑」的現象，其根本原因為：

1. **語意實體化污染（Gritty Semantic Misinterpretation）**：
   - 「Gritty」在影視風格中指「冷硬、粗獷、殘酷的氛圍」，但在擴散模型（Diffusion Model）的潛空間中，它被高度偏向物理材質的**「沙礫狀、砂質的、磨砂玻璃般粗糙」**。
   - 當與「Rich」（豐富的、密集的）結合時，`rich gritty textures` 會強制模型在畫面的**每一個像素表面**（角色皮膚、羽絨服面料、拋光金屬、甚至是光滑大理石）密集鋪上一層不規則的砂粒與網狀凹坑。
2. **局部高頻反射激發油膩感（Micro-Specular Hot Spots）**：
   - 密密麻麻的凹凸砂粒在頂光與環境光下，會產生無數微觀的鏡面反射高光點（Specular Highlights）。
   - 結合漫反射缺失，人眼與模型會將這些反光噪點誤算為「液態黏稠油脂、汗水油膜、塑料高光」，導致嚴重的「AI 油膩感」。
3. **前置權重壓制負向約束（Prompt Weight Dominance）**：
   - 當 `rich gritty textures` 位於提示詞開頭（具有最優先解析權重），即使在後續指定了 `smooth unblemished marble` 或在負向加入 ``，正面高權重指令仍會壓制負向排除，導致語意矛盾與邊緣崩潰。

---

### 二、三項絕對鐵律 (The 3 Hard Rules)

1. **【鐵律一】嚴禁在全域風格前綴中使用任何粗糙紋理詞**
   - 嚴格禁止在開頭或通用前綴出現：`rich gritty textures`, `gritty textures`, `coarse surface`, `ultra-detailed micro texture`。
   - 全域風格前綴只能定義：鏡頭光學、大氣光影、電影色彩與畫面整體解析度（如 `atmospheric volumetric lighting, fine-grain photographic detail, clear material definitions, cinematic color grading`）。

2. **【鐵律二】實體級材質精確隔離（Material Scoping Principle）**
   - **粗糙材質下放至單一主體**：若某一物件確實需要粗糙（如生鐵護臂、水泥地坪、凍土），必須精確綁定至該物件名詞：
     - 正確：`weathered cast-iron bracers with rough industrial forge texture`, `frozen concrete rubble with coarse dust`
     - 錯誤：在開頭寫 `rich gritty textures`，導致角色臉龐與衣服全部變成砂礫。
   - **平滑材質獨立加固防護**：凡涉及大理石、玉石、皮膚、乾爽布料，必須主動聲明平滑與無暇：
     - 白玉/大理石：`seamless monolithic polished white nephrite marble, smooth unblemished surface, zero surface cracks, zero stone grain`
     - 角色皮膚：`matte skin texture, dry skin, natural pores, non-greasy complexion, zero micro-grain`

3. **【鐵律三】全域負向封鎖防禦網（Universal Anti-Grain Negative Tokens）**
   - 所有鏡頭生成指令必須常態化掛載消光去砂負向詞組：
     ``

---

### 三、標準詞彙替換矩陣 (Token Replacement Matrix)

| 原始污染詞彙 (容易出油/生砂) | 替代方案 (保持高清但不粗糙) | 適用領域 |
| :--- | :--- | :--- |
| `rich gritty textures` | `fine-grain photographic detail, clear material definitions` | 全域通用風格前綴 |
| `dark gritty thriller aesthetic` | `dark suspense thriller aesthetic` | 氛圍與電影調性 |
| `dark gritty anime cinematic` | `dark cinematic psychological anime` | 動漫鏡頭風格 |
| `sweaty` (滿頭大汗) | `dry weathered skin, natural pores` 或 `powdery cold sweat beads` (僅特定特寫) | 人物面部與手部 |
| `octane render / ray-traced PBR` | `theatrical 3D anime cinema aesthetic, matte textured surfaces, diffuse illumination` | 渲染品質 |
| `subsurface scattering (SSS)` | `diffuse ambient lighting, natural soft shadows` | 皮膚光影 |
| `fractured stone chassis` (易引發全身裂紋) | `monolithic polished stone chassis, architectural clean lines` | 神祇與巨構實體 |

---

### 四、標準實戰案例

#### 案例 1：重裝工人對峙（防手背與衣服噴灑黏油與沙礫）
- **規範 Prompt**：
  ```text
  Cinematic two-shot, an enraged heavy-set warehouse foreman slamming his dry calloused hand onto a cold steel table shouting aggressively, while on the opposite side the calm 26-year-old dispatcher (Lu Yuan) looks up with icy piercing eyes, scattering paper sheets, cold industrial dispatch room background with diffuse fluorescent light, dry weathered skin, natural pores, matte skin texture, powdery dust particles, dark suspense thriller aesthetic, 35mm film grain, muted dynamic range  --v 6.1 --style raw 
  ```

#### 案例 2：神祇角色·蓐收古尊（防白玉神軀與面具被侵蝕出網狀碎石斑）
- **規範 Prompt**：
  ```text
  (Masterpiece, dark anime 3D cinematic aesthetic:1.2), atmospheric volumetric lighting, fine-grain photographic detail, clear material definitions, dramatic low-angle hero shot of towering 12-meter celestial inquisitor god (Ru Shou), seamless monolithic polished Parthenon white marble torso with smooth unblemished skin and zero cracks, serene carved white jade executioner mask, contrasting with mutated dark bronze vertebral armor on right shoulder anchoring a monumental 18-meter solid bronze halberd with sleek polished mirror-like heavy blade, directional soft neutral lighting, authentic milky white nephrite marble and dark forged bronze metallurgy, broad clean surfaces, 8k resolution  --v 6.1 --style raw 
  ```

---

### 五、防退行稽核清單 (Anti-Regression Checklist)

每次撰寫或修改新鏡頭 Prompt 前，必須核對：
- [ ] 開頭是否含有 `rich gritty textures`？如有，立即刪除。
- [ ] 描寫人物緊張時是否使用了 `sweaty`？如有，改為 `dry weathered` 或配合消光約束。
- [ ] 神聖、白玉或光滑物件是否明確聲明了 `unblemished, seamless, zero cracks`？
- [ ] 結尾是否完整掛載 `` 負向遮蔽組？
- [ ] 是否開啟 `--style raw` 以抑制 Midjourney 內建過度高光？


---

## 三、 GPT (DALL·E 3 / GPT-4o) 自然語言生圖防退行鐵律

1. **零 CLI 標籤鐵律 (Zero Midjourney Tags)**：
   - 嚴禁在提示詞中出現 ``、`--v 6.1`、`--style raw`、`--stylize`。寬銀幕比例一律以開頭自然語言 `A cinematic widescreen 16:9 shot...` 宣告。

2. **根除「粉色大象」否定詞反噬 (Negation Blindness)**：
   - GPT 不支援負向提示詞。任何寫入提示詞的否定句或標籤（例如 ``）都會被神經網絡注意力機制直接抓取為正向特徵，反噬生成密集的金屬鐵籠與網格！
   - 必須 100% 轉為**「正向肯定式材質定義」**：
     - 正確範例：`solid monolithic forged structure, expansive seamless planes, smooth uninterrupted marble contours, monolithic cast iron bracer`。

3. **三面板三視圖架構 (Three-Panel Prose Turnaround)**：
   - 採用段落排版結構明晰定義：`The image features three distinct views arranged side-by-side on a flat solid neutral mid-gray background (#808080): - Left panel: ... - Middle panel: ... - Right panel: ...`。
