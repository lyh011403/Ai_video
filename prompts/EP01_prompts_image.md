# 《門扉背後：凡人的弒神契約》第一集（EP01）AI 靜態分鏡與圖像優化提示詞庫
## 嚴格整合 LIRA 圖像優化系統與外科手術式編輯規範 (CHANGE / PRESERVE EXACTLY)

本文件依據 LIRA 圖像優化與外科手術式編輯體系構建，涵蓋建立靜畫、特寫鏡頭、以及跨狀態微調（如常態轉失溫凍傷）的精確控制。

---

## LIRA 外科手術式圖像編輯標準模板 (LIRA Surgical Edit Template)

```markdown
Edit this image: [One-sentence clear objective].

CHANGE:
- [Specify ONLY the exact element to modify, e.g., Add crystalline white frost accumulation to eyelashes].
- [Shift color/texture of target micro-region].

PRESERVE EXACTLY:
- Exact facial bone structure, eye shape, iris color, and identity of @CHARACTER.
- Exact clothing weaves, reflective stripe placement, and hardware.
- Exact camera angle, FOV, focal plane, and depth of field.
- Exact background architecture, perspective, and lighting vector.

ONLY CHANGE: [Reiterate single modification]. Everything else remains 100% identical and locked.
```

---



## 全域消光防油膩與消除亮點光標準規範 (Anti-Oily & Anti-Specular Protocol)

為防止 AI 圖像生成模型過度運算鏡面反射、產生塑膠蠟像油膩感或刺眼反光噪點，全劇所有靜態生圖提示詞均嚴格對齊以下消光準則：
- **正向消光約束 (Positive Modifiers)**: `matte skin texture, dry skin, non-greasy complexion, diffuse ambient lighting, natural soft shadows, cinematic 35mm film grain, muted specular reflection, powdery dust particles`
- **全域負向封鎖 (Universal Negative Tokens)**: `--no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights, excessive specular reflection`
- **渲染引擎禁詞 (Blacklisted Render Prompts)**: 嚴禁使用 `sweaty`, `octane render`, `subsurface scattering`, `ray-traced PBR lighting`, `ultra-detailed skin texture` 等容易激發高光油膜的污染詞。

---

## 鏡頭生圖提示詞 (Shot by Shot Prompts)

### S01 - 計算機極限按壓
- **繁體中文描述**：極致微距特寫，一隻骨節分明、修長蒼白帶有薄繭的成年男性食指，以極快頻率按壓灰白色塑料計算機的「＝」按鍵。背景是堆滿發黃物流單據的金屬桌面。
- **Midjourney / Flux 提示詞**：
```text
Extreme macro close-up shot of an adult male hand with slender pale knuckles and faint calluses aggressively pressing the buttons of an old worn grey plastic calculator, cracked LCD screen, dusty metal desk surface covered in paper logistics forms, dim fluorescent lighting, cold industrial realism, matte skin texture, natural pores, shallow depth of field, 8k --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S02 - 調度台前精算
- **繁體中文描述**：中景，26歲男子陸遠坐在昏暗嘈雜的調度台前，眼眶深陷青黑，神情極度冷酷專注。他右手握著銀色金屬自動鉛筆，在硬皮黑色筆記本上繪製精密力學公式與拋物線。背景中物流大廳燈火慘白、人影慌亂。
- **Midjourney / Flux 提示詞**：
```text
Medium shot of a 26-year-old Asian logistics dispatcher (Lu Yuan), pale tired face with severe dark eye bags, sharp analytical eyes, wearing a dark blue padded work uniform, holding a matte silver mechanical pencil drawing precise geometric force vectors and calculus formulas in a worn black leather notebook, busy warehouse dispatch room in blurred background with flickering pale lights, industrial anime realism, cinematic composition, moody --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S03 - 雙人對峙（組長與陸遠）
- **繁體中文描述**：雙人中景，憤怒焦躁的搬運組長滿頭大汗一掌重拍在金屬桌面上；桌子另一側，陸遠身形未動，眼神如冰刀般直視組長，神色毫無波瀾。
- **Midjourney / Flux 提示詞**：
```text
Cinematic two-shot, an enraged heavy-set warehouse foreman slamming his dry calloused hand onto a cold steel table shouting aggressively, while on the opposite side the calm 26-year-old dispatcher (Lu Yuan) looks up with icy piercing eyes, scattering paper sheets, cold industrial dispatch room background with diffuse fluorescent light, dry weathered skin, natural pores, matte skin texture, powdery dust particles, dark suspense thriller aesthetic, 35mm film grain, muted dynamic range --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights, gritty overlay, sandpaper texture, speckled skin
```

---

### S04 - 責任承諾書與冰冷眼神
- **繁體中文描述**：特寫，陸遠修長的手指將一份印有《特殊天氣超載運輸安全責任承諾書》的表格推向鏡頭邊緣，他的面容隱沒在陰影中，眼神冰冷如終端。
- **Midjourney / Flux 提示詞**：
```text
Close-up shot of dispatcher Lu Yuan pushing an official safety liability document across the steel desk towards the camera, his face partially in dramatic shadow, resolute and uncompromising expression, worn black leather notebook next to his hand, high micro-contrast, cold blue and charcoal color palette --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S05 - 瞳孔拉近與記憶旋渦
- **繁體中文描述**：大特寫，直視陸遠深黑色的瞳孔，瞳孔表面映照出暴風雪呼嘯的混亂光影，畫面邊緣產生暗角與扭曲。
- **Midjourney / Flux 提示詞**：
```text
Extreme macro close-up of a human eye pupil, bloodshot sclera, the deep black pupil reflecting a raging violent blizzard and headlights of a snowbound truck, cinematic chromatic aberration, psychological thriller aesthetic, sharp focus on iris fibers, 8k --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S06 - 雪夜悲劇閃回（冰雕同事）
- **繁體中文描述**：全景，零下25度的雪崩荒野中，一輛被冰雪半埋的重型貨車駕駛室內，兩名同事已凍結成晶瑩冰雕，車門保溫棉上留有抓撓的血指印，絕望淒涼。
- **Midjourney / Flux 提示詞**：
```text
Cinematic full shot, interior of a snow-buried truck cabin in a pitch-black sub-zero blizzard, two frozen corpses covered in thick white frost and icicles, bloody scratch marks frozen on the door insulation, desolate tragedy, pale moonlight and distant snowstorm glow, heartbreaking atmospheric lighting, ultra-detailed --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S07 - 地下冷庫電子溫度計
- **繁體中文描述**：特寫，地下冷庫門側壁掛的電子溫度計發出猩紅色的液晶光芒，數值顯示 `-18.5°C`，金屬表面佈滿凝結的鋒利冰刺與冷凝水珠。
- **Midjourney / Flux 提示詞**：
```text
Close-up shot of an industrial digital thermometer on a frozen metal wall, glowing crimson LED digits displaying "-18.5°C", sharp frost needles and frozen condensation droplets covering the steel casing, dark cold blue ambient environment, sharp macro focus, moody realism --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S08 - 深入四號冷凍庫
- **繁體中文描述**：全景，陸遠手持散發黃光的手電筒，走在縱深百米的地下深度冷凍庫中。兩側是高達5米的巨大鋼製貨架，懸掛著尖銳如刀的霜花，濃重白霧在光束中翻滾。
- **Midjourney / Flux 提示詞**：
```text
Cinematic full shot from behind, Lu Yuan holding a yellow beam flashlight walking down the aisle of an expansive subterranean cold storage warehouse, massive 5-meter galvanized steel racks on both sides dripping with dagger-like frost stalactites, dense volumetric freezing fog, yellow light cone piercing the darkness, eerie silence --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S09 - 防爆門轟然閉合
- **繁體中文描述**：中景，厚達數十公分的鍍鋅鋼板防爆保溫門猛然合死，金屬門框撞擊激起一圈白霜煙塵，紅色逃生連桿重重扣死。
- **Midjourney / Flux 提示詞**：
```text
Dynamic medium shot of a massive 20cm-thick galvanized steel freezer blast door slamming shut aggressively, shockwave dislodging a cloud of white frost dust, heavy mechanical locking latch snapping into place, emergency red lever freezing shut, industrial horror, motion blur, dramatic angle --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S10 - 絕望砸門與卡死連桿
- **繁體中文描述**：特寫，陸遠雙手用盡全力扳動紅色緊急逃生連桿，連桿被冰霜卡死紋絲不動；他用肩膀撞擊厚重的金屬門板，神情焦急。
- **Midjourney / Flux 提示詞**：
```text
Close-up action shot of Lu Yuan desperately pulling the frozen red emergency escape lever with both hands, thick frost jamming the mechanical hinge, his shoulder slamming into the frosted steel blast door, panic and determination in his pale face, breath vapor clouding the air --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S11 - 手電筒熄滅與純粹黑暗
- **繁體中文描述**：特寫，金屬手電筒摔在結冰的混凝土地面上，黃色光束劇烈閃爍兩下後徹底熄滅，四周陷入窒息的漆黑。
- **Midjourney / Flux 提示詞**：
```text
Low angle close-up shot of a rugged metal flashlight lying on an icy concrete floor, faint dying yellow light flickering into darkness, battery frosted over, pitch-black shadow encroaching from all sides, high contrast, suspenseful horror aesthetic --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S12 - 失溫幻覺與反常脫衣
- **繁體中文描述**：中景，陸遠蜷縮在冰冷刺骨的金屬牆角，身體因深度失溫已停止發抖。在幻覺中，虛幻的金黃色陽光灑在他身上，他眼神渙散地伸手解開工作服領扣。
- **Midjourney / Flux 提示詞**：
```text
Cinematic medium shot, Lu Yuan curled up against the frozen steel wall in the corner of the dark freezer, hypothermia paradoxical undressing, numb trembling fingers trying to unbutton his collar, unfocused glassy eyes seeing hallucinated warm golden sunlight amidst the freezing gloom, hauntingly tragic --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S13 - 咬破舌尖的求生執念
- **繁體中文描述**：大特寫，陸遠狠狠咬破自己的舌尖，鮮血從嘴角溢出，疼痛讓他渙散的瞳孔重新聚焦出野獸般的求生意志。他右手死死抓緊胸前的黑色筆記本。
- **Midjourney / Flux 提示詞**：
```text
Extreme close-up of Lu Yuan's face, dark blood trickling from the corner of his cracked lips as he bites his tongue to regain consciousness, eyes blazing with fierce survival willpower, one hand desperately clutching the black leather notebook pressed against his chest, dark cinematic psychological anime --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights, gritty overlay, sandpaper texture, speckled skin
```

---

### S14 - 空間碎裂與青銅重鐵門扉降臨
- **繁體中文描述**：宏大全景，冷庫的鋼板與空間如同鏡面般崩裂破碎！虛空裂隙中，高達數十米的古老青銅與玄鐵重門巍峨屹立，覆蓋暗紫血跡與巨大齒輪鏈條，震撼人心。
- **Midjourney / Flux 提示詞**：
```text
Epic establishing wide shot, the physical warehouse walls shattering like glass into cosmic void, revealing a monumental ancient door made of oxidized bronze and black iron, 30 meters tall, covered in cosmic gears, chains, and dried dark purple bloodstains, looming ominously in the dimensional rift, cosmic horror scale, god-tier fantasy art, 8k --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S15 - 凡人之手印向神明之門
- **繁體中文描述**：特寫，陸遠凍得紫黑的手掌，重重按在布滿繁複幾何齒輪雕刻與青銅鏽蝕的巨大鐵門之上。
- **Midjourney / Flux 提示詞**：
```text
Close-up shot of a human hand with purplish frostbitten skin pressing firmly against the colossal rusted bronze gate, ancient geometric clockwork carvings and dried purple ichor beneath his fingers, subtle golden and blue particle embers rising upon contact, symbolic mortal defiance, 8k --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S16 - 門縫開啟與黑風吞噬
- **繁體中文描述**：遠景，青銅重門裂開一條縫隙，墨黑色的暴風雪與極寒死氣化作風暴海嘯，將陸遠渺小的身軀瞬間吞噬進無底深淵。
- **Midjourney / Flux 提示詞**：
```text
Wide dynamic shot, the giant bronze door cracking open a few inches, releasing a catastrophic torrent of pitch-black blizzard winds and ethereal blue mist, sweeping up the tiny silhouette of Lu Yuan into the abyssal void, epic scale, dynamic motion lines, dark fantasy cinematic --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S17 - 墜入凍土與吐出冰血
- **繁體中文描述**：中景低角度，陸遠重重摔在極寒廢墟堅硬如鐵的凍土碎石上，張口噴出一口夾雜冰碴的紫黑濃血，血液落地瞬間凍結為紫紅血晶。
- **Midjourney / Flux 提示詞**：
```text
Low angle medium shot, Lu Yuan crashing onto frozen permafrost and concrete rubble, spitting out a mouthful of dark blood with ice shards, blood droplets instantly crystallizing into violet ice beads on the frozen ground, sub-zero -28°C atmosphere, heavy breath fog, visceral survival grit --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S18 - 極寒都市廢墟全景
- **繁體中文描述**：極遠景鳥瞰，鉛灰色暴風雪天幕下，無數百米高、覆蓋黑曜石堅冰的半塌金屬摩天樓林立，陸遠渺小的身影趴在廣袤無邊的死寂冰原廢墟中央。
- **Midjourney / Flux 提示詞**：
```text
Extreme wide establishing shot, vast post-apocalyptic megalopolis ruins under an oppressive lead-gray storm sky, hundreds of half-collapsed black metal skyscrapers encrusted in thick obsidian black ice, raging blizzard winds, tiny lone figure of Lu Yuan on the frozen wasteland, immense scale, desolate beauty --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S19 - 凍僵手指記錄第一行算式
- **繁體中文描述**：俯瞰特寫，陸遠發紫發僵的手指握著自動鉛筆，在黑皮筆記本上寫下：「極寒廢墟：-25°C。體力 20%。首要目標：15分鐘內尋獲掩體。」筆記本封面隱隱閃爍微光。
- **Midjourney / Flux 提示詞**：
```text
Top-down macro close-up shot of Lu Yuan's stiff frostbitten hand writing precise survival notes and formulas with a silver mechanical pencil in a worn black leather notebook, page reading Chinese survival calculations, faint magical amber glow radiating from the leather binding, snowflake melting on the paper, ultra-detailed --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```

---

### S20 - 廢墟陰影中的冰霜怪異
- **繁體中文描述**：特寫轉暗黑，廢墟石縫中亮起兩團幽藍冷火，金屬機械與凍骨拼合的節肢生物在暗處蠕動；陸遠緊貼防暴牆狹縫，屏息凝視陰影，神情緊繃。
- **Midjourney / Flux 提示詞**：
```text
Dramatic split-focus shot, in the foreground Lu Yuan presses his back tightly against a cracked metal blast wall in narrow crevice holding his breath, while in the shadowed background 50 meters away, two sinister glowing blue fires ignite from a mechanical frost creature made of bones and jagged metal, suspenseful horror climax --ar 16:9 --v 6.1 --style raw --no oily skin, greasy sheen, sweaty gloss, plastic skin, wax figure, specular hot spots, white glitter specks, lens flare, glossy highlights, 3d render shine, blown-out highlights
```
