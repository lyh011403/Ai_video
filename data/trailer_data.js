/**
 * 官方概念前導片 (Concept Teaser) 專屬數據庫
 * 12 鏡頭 · 75 秒 · 四幕式純視覺 0 對白
 * 採用「空間定向錨點與剛體幾何封裝 (Spatial Orientation & Rigid Body Anchoring Framework)」：
 * - 明確相機機位與視線向量 (45-degree overhead, 35-degree side-angle, 90-degree profile, perpendicular straight-on)
 * - 物品基準面剛性吸附 (flatly seated on desk, upright parallel to camera)
 * - 剛體連體封裝 (single unified rigid chassis: keypad and screen integrated in one housing)
 * - 雙層解耦架構：後台嚴格保留 178cm, 80cm, 100米等度量，生圖 Prompt 採用視覺相對參照錨定防止文字洩漏
 * 遵循 GPT / DALL-E 3 原生自然語言生圖架構，100% 杜絕 CLI 標籤與粉色大象否定詞
 */

const trailerData = {
  "id": "trailer_official",
  "title": "官方前導概念片 (Official Concept Teaser · Spatial Orientation & Rigid Anchoring Edition)",
  "subtitle": "75秒四幕式 · 12鏡頭 · 空間定向錨點 · 剛體幾何封裝 · 純視覺0對白 · 電影級視聽語言",
  "specs": {
    "runtime": "75s",
    "shotsCount": 12,
    "aspectRatio": "16:9 (3840×2160)",
    "frameRate": "24fps",
    "colorScience": "ACEScg / DCI-P3",
    "cinematography": "Spatial Orientation Locked, Rigid Body Chassis Anchored, Macro & Monumental Scale",
    "scaleStandards": "雙層架構：後台嚴格物理尺寸 (Metadata) + 前端空間定向幾何錨定 (Spatial Rigid Anchoring)"
  },
  "shots": [
    {
      "id": "S01",
      "act": "第 1 幕：凡人算力與風雪起點",
      "type": "ECU (電影級微距特寫)",
      "dur": "3.5s",
      "cam": "45度俯角正對微距 (45-Degree Overhead Straight-on Macro)",
      "metrics": {
        "scale": "微觀手部局部 1:1",
        "char": "陸遠 (26歲 / 178cm)",
        "prop": "工程塑料計算機 (按鍵長寬 12mm)",
        "freq": "4Hz 機械撞擊頻率",
        "spatialRig": "45度俯視機位 + 桌面平放剛體封裝 (鍵盤下半部 / 傾斜螢幕上半部同體)"
      },
      "desc": "微觀微距：相機以 45 度俯角正對調度台，工程塑料計算機平整貼死在磨損鋼製調度桌上。計算機為單一剛體外殼：下半部數字鍵盤正對相機，陸遠（26歲/178cm）蒼白修長的食指以每秒 4 次高頻精準垂直敲擊；上半部一體式傾斜綠色液晶螢幕微弱閃爍。按鍵物理回彈帶動微觀懸浮灰塵與冰晶震顫，背景光學虛化。",
      "body": "Extreme macro close-up with shallow depth of field: The camera is positioned at a close 45-degree overhead high-angle, looking down straight-on at a compact industrial desktop calculator resting flatly seated on a scratched cold steel desk. The calculator's front face is oriented upright and parallel to the viewer, featuring a single unified rigid plastic chassis: the lower half features worn plastic numeric keys being rapidly clicked at 4Hz by the slender frostbitten fingers of a lean young Asian tactical dispatcher, while the upper half houses an integrated angled green LCD screen displaying dense glowing mathematical formulas in soft focus. The mechanical rebound of the buttons stirs airborne micro-dust motes and floating ice crystals under cool overhead tungsten spotlighting, authentic skin subsurface scattering, realistic matte plastic textures, moody chiaroscuro lighting",
      "prompt": "A cinematic widescreen 16:9 extreme macro close-up with shallow depth of field: The camera is positioned at a close 45-degree overhead high-angle, looking down straight-on at a compact industrial desktop calculator resting flatly seated on a scratched cold steel desk. The calculator's front face is oriented upright and parallel to the viewer, featuring a single unified rigid plastic chassis: the lower half features worn plastic numeric keys being rapidly clicked at 4Hz by the slender frostbitten fingers of a lean young Asian tactical dispatcher, while the upper half houses an integrated angled green LCD screen displaying dense glowing mathematical formulas in soft focus. The mechanical rebound of the buttons stirs airborne micro-dust motes and floating ice crystals under cool overhead tungsten spotlighting. Authentic skin subsurface scattering, realistic matte plastic textures, moody chiaroscuro lighting, zero text.",
      "audio": "塑料計算機按鍵清脆急促的「嗒、嗒、嗒」物理回彈脆響 (4Hz)，遠處柴油發電機低沉底噪",
      "sfx": "塑料計算機按鍵清脆急促的「嗒、嗒、嗒」物理回彈脆響 (4Hz)，遠處柴油發電機低沉底噪"
    },
    {
      "id": "S02",
      "act": "第 1 幕：凡人算力與風雪起點",
      "type": "MS (緩慢前推聚焦)",
      "dur": "4.5s",
      "cam": "35度側俯推鏡 (35-Degree Side-Angle Push-in)",
      "metrics": {
        "scale": "人體中景 (腰部以上)",
        "char": "陸遠 (26歲 / 178cm / 消瘦體態)",
        "prop": "0.5mm 滾花金屬繪圖鉛筆 + A5 黑皮筆記本",
        "light": "頂部 4Hz 猩紅緊急警報光",
        "spatialRig": "35度側俯視角 + 筆記本平鋪桌面 + 鉛筆60度剛性握持軸線"
      },
      "desc": "推鏡聚焦：相機以 35 度側俯視角聚焦手部與紙面交會點。黑皮筆記本平整攤開鋪在調度桌面上，陸遠右手以標準 60 度繪圖角度緊握 0.5mm 滾花金屬自動鉛筆，在泛黃方格紙上飛速刻畫受力向量圖與拋物線。筆尖垂直施力刺破紙張纖維；頂部長條日光燈爆閃轉為 4Hz 血色緊急警報照明，血光如刀鋒割過蒼白病容。",
      "body": "Medium shot with a slow deliberate push-in: The camera is positioned at a low 35-degree side-angle close view, focused straight-on where hand, pencil, and notebook meet. A worn black leather notebook rests flatly seated open on the concrete desk surface. A lean young Asian male dispatcher firmly grips a knurled silver mechanical drafting pencil at a precise 60-degree drafting angle, sketching structural force vectors and parabolic calculus into the paper. The fine graphite tip firmly indents and snaps into the textured fibrous paper under heavy downward pressure. Overhead industrial fluorescent fixtures flicker violently before bathing the cluttered dispatch office in harsh blood-red emergency alarm lighting, casting dramatic crimson slashes across his angular cheekbones and exhausted dark eyes, rich filmic contrast, realistic paper texture",
      "prompt": "A cinematic widescreen 16:9 medium shot with a slow deliberate push-in: The camera is positioned at a low 35-degree side-angle close view, focused straight-on where hand, pencil, and notebook meet. A worn black leather notebook rests flatly seated open on the concrete desk surface. A lean young Asian male dispatcher firmly grips a knurled silver mechanical drafting pencil at a precise 60-degree drafting angle, sketching structural force vectors and parabolic calculus into the paper. The fine graphite tip firmly indents and snaps into the textured fibrous paper under heavy downward pressure. Overhead industrial fluorescent fixtures flicker violently before bathing the cluttered dispatch office in harsh blood-red emergency alarm lighting, casting dramatic crimson slashes across his angular cheekbones and exhausted dark eyes. Rich filmic contrast, realistic paper texture, zero text.",
      "audio": "石墨筆尖劃破紙張沙沙刺耳聲，日光燈管電壓爆裂滋滋聲，4Hz 紅色警報急促蜂鳴",
      "sfx": "石墨筆尖劃破紙張沙沙刺耳聲，日光燈管電壓爆裂滋滋聲，4Hz 紅色警報急促蜂鳴"
    },
    {
      "id": "S03",
      "act": "第 1 幕：凡人算力與風雪起點",
      "type": "ELS (史詩大氣慢速後拉)",
      "dur": "5.5s",
      "cam": "水平後拉大景深 (Horizontal Pull-Back Wide Establishing)",
      "metrics": {
        "scale": "大地理極遠景 (數公里荒原)",
        "building": "永達物流轉運大廳 (挑高 8 米 / 鋼結構寬 60 米)",
        "temp": "-40°C 暴風雪",
        "spatialRig": "水平後拉軸線 + 視平線三分法構圖 + 孤島地標鎖定"
      },
      "desc": "大氣後拉：攝影機沿水平視平線平穩穿過挑高 8 米調度大廳結霜破裂的窗戶向外拉升，展現零下 40℃ 漫天黑雪狂暴的末日荒原。寬達 60 米的永達物流轉運大廳如同一座鋼鐵孤島佇立在無邊風雪黑夜中，幾束微弱的黃色叉車警示燈在雪霧中搖曳，天地廣袤而死寂。",
      "body": "Epic wide establishing shot with a smooth slow pull-back: The camera recedes along a horizontal eye-level axis through a jagged frost-encrusted window pane out into the howling sub-zero dark snow blizzard. The massive industrial logistics warehouse stands as a solitary iron citadel in the middle of a vast frozen post-apocalyptic wasteland under swirling black storm clouds. Dim amber hazard rotating beacons on snowbound forklifts pierce faintly through the freezing whiteout fog, monolithic architectural scale, desaturated cold color palette, realistic atmospheric haze",
      "prompt": "A cinematic widescreen 16:9 epic wide establishing shot with a smooth slow pull-back: The camera recedes along a horizontal eye-level axis through a jagged frost-encrusted window pane out into the howling sub-zero dark snow blizzard. The massive industrial logistics warehouse stands as a solitary iron citadel in the middle of a vast frozen post-apocalyptic wasteland under swirling black storm clouds. Dim amber hazard rotating beacons on snowbound forklifts pierce faintly through the freezing whiteout fog. Monolithic architectural scale, desaturated cold color palette, realistic atmospheric haze, zero text.",
      "audio": "極寒狂暴的黑雪風雪呼嘯聲 (-40°C)，重工業鋼架結構在強風下的金屬扭曲呻吟",
      "sfx": "極寒狂暴的黑雪風雪呼嘯聲 (-40°C)，重工業鋼架結構在強風下的金屬扭曲呻吟"
    },
    {
      "id": "S04",
      "act": "第 2 幕：神門降臨與巨物威壓",
      "type": "ELS (180°滾轉重力倒懸穿梭)",
      "dur": "7.5s",
      "cam": "穿梭機仰角滾轉穿插 (FPV Barrel Roll & Gravity Inversion Ascent)",
      "metrics": {
        "scale": "神話巨構景觀 · 三重視覺錨定 (100米神門 vs 人類剪影 vs 飄浮重卡)",
        "entity": "太古青銅巨門 (高 100 米 / 寬 45 米)",
        "props": "數十輛重型物流半掛卡車 (每輛長 16 米 / 重 40 噸)",
        "spatialRig": "前景人類剪影 + 中景升天卡車群 + 遠景地平線百米青銅巨門"
      },
      "desc": "【核心保留Cut · 特殊穿梭奇觀】：漫天黑雪荒原上高達 100 米的太古青銅巨門拔地而起碎裂，180 度重力倒懸激發！穿梭機貼地掠過陸遠（178cm）身側，隨即旋轉 180 度倒置跟隨倒懸重力，高速穿梭於向天空垂直墜落的數十輛 16 米長重型卡車與崩裂鋼架縫隙之間，100 米巨門裂開萬丈熾白神光！",
      "body": "Gravity-inversion FPV tracking shot with a smooth 180-degree barrel roll: On the distant horizon, a colossal archaic bronze divine gate, towering like a monumental 100-meter skyscraper, violently fractures and erupts from the frozen earth, unleashing blinding 6500K celestial radiance and thick volumetric god rays. In extreme scale contrast, the tiny lone silhouette of a mortal dispatcher stands dwarfed on the cracked permafrost in foreground. Inverted gravity sends massive heavy semi-trucks and tangled industrial steel girders falling upward into the swirling dark storm clouds. Anti-gravity dust motes and black snow crystals spiral upward, epic cosmic scale, authentic weathered green bronze patina",
      "prompt": "A cinematic widescreen 16:9 gravity-inversion FPV tracking shot with a smooth 180-degree barrel roll: On the distant horizon, a colossal archaic bronze divine gate, towering like a monumental 100-meter skyscraper, violently fractures and erupts from the frozen earth, unleashing blinding 6500K celestial radiance and thick volumetric god rays. In extreme scale contrast, the tiny lone silhouette of a mortal dispatcher stands dwarfed on the cracked permafrost in foreground. Inverted gravity sends massive heavy semi-trucks and tangled industrial steel girders falling upward into the swirling dark storm clouds. Anti-gravity dust motes and black snow crystals spiral upward. Epic cosmic scale, authentic weathered green bronze patina, pristine cinematic lighting, zero text.",
      "audio": "重力剪切引發的大氣真空爆鳴，100米青銅巨門咬合撼天雷鳴，數十輛鋼鐵重卡倒懸騰空呼嘯",
      "sfx": "重力剪切引發的大氣真空爆鳴，100米青銅巨門咬合撼天雷鳴，數十輛鋼鐵重卡倒懸騰空呼嘯"
    },
    {
      "id": "S05",
      "act": "第 2 幕：神門降臨與巨物威壓",
      "type": "WS (史詩巨構低角度大仰拍)",
      "dur": "6.5s",
      "cam": "地面低角度緩慢前推 (Epic Low-Angle Monumental WS)",
      "metrics": {
        "scale": "泰坦山嶽尺度 (長 100 米 / 高 60 米)",
        "entity": "寒冬巨擘·霜海行者 (四足冰川巨獸：長 100 米、高 60 米)",
        "acoustics": "16Hz 次聲波衝擊環 (同心圓直徑 200 米)",
        "spatialRig": "貼地仰角機位 + 柱狀巨足垂直落點 + 肩部角峰對稱排列"
      },
      "desc": "泰坦威壓：攝影機置於凍土極低視角緩慢推進，長達 100 米、高達 60 米的四足冰川巨獸【霜海行者】自暴風雪深處踏出萬噸巨步踩碎萬載凍土。單塊厚達 1.2 米的六角透光冰晶重甲覆蓋全身，雙肩兩座蜂窩中空角峰高頻震顫，擴散出一圈圈直徑達 200 米的肉眼可見白色 16Hz 次聲波衝擊環，遠方整座冰川山脈瞬間連鎖粉碎！",
      "body": "Monumental low-angle wide shot with a slow forward creep: A colossal quadrupedal glacial titan Frost Colossus, massive as a moving mountain ridge, strides through the apocalyptic blizzard. Its colossal columnar pillar legs crush the frozen permafrost into powder with geological force. Translucent blue hexagonal ice armor plates cover its titanic frame. From twin hollow honeycomb acoustic horn spires rising high on its shoulders, concentric visible white infrasonic shockwave rings blast outward across the landscape, shattering distant mountain glaciers in catastrophic chain reactions. Overwhelming titanic scale, deep cinematic depth of field, photorealistic crystalline textures",
      "prompt": "A cinematic widescreen 16:9 monumental low-angle wide shot with a slow forward creep: A colossal quadrupedal glacial titan Frost Colossus, massive as a moving mountain ridge, strides through the apocalyptic blizzard. Its colossal columnar pillar legs crush the frozen permafrost into powder with geological force. Translucent blue hexagonal ice armor plates cover its titanic frame. From twin hollow honeycomb acoustic horn spires rising high on its shoulders, concentric visible white infrasonic shockwave rings blast outward across the landscape, shattering distant mountain glaciers in catastrophic chain reactions. Overwhelming titanic scale, deep cinematic depth of field, photorealistic crystalline textures, zero text.",
      "audio": "百米巨獸四足踏碎凍土的地震轟鳴，16Hz 次聲波震顫胸腔的低頻壓迫，冰川山脈坍塌連鎖巨響",
      "sfx": "百米巨獸四足踏碎凍土的地震轟鳴，16Hz 次聲波震顫胸腔的低頻壓迫，冰川山脈坍塌連鎖巨響"
    },
    {
          "id": "S06",
          "act": "第 2 幕：神門降臨與巨物威壓",
          "type": "WS (倒懸王座5°微弧推進·雙龍探首)",
          "dur": "6.0s",
          "cam": "5°平滑微弧軌道推進 (Subtle 5-Degree Arc Orbit Push-in)",
          "metrics": {
                "scale": "神祇帝王尺度 (神尊高 12 米 / 雙龍長 30 米 / 長鉞 20 米)",
                "entity": "執鉞刑殺·蓐收古尊 (高 12 米 / 半袒白玉神肌蓄勢微動)",
                "dragons": "身後 30 米黑金伴生雙龍 (龍首向前探出 / 龍鱗開合低吼)",
                "weapon": "20 米機關長鉞 (齒輪咬合 / 前景視差側滑)",
                "spatialRig": "5°微弧視差推進(禁止Z軸翻滾) + 前景長鉞向左側滑虛化 + 中景神軀微抬眼 + 背景雙龍向前探首"
          },
          "desc": "【蓐收古尊與伴生雙龍 · 5°微弧立體視差】：空間重力倒轉，攝影機以 0.15x 慢速沿中軸劃出 5 度極微小弧線向前推進，鏡頭光軸牢固鎖定神尊玉面（嚴禁自轉翻滾）。前景 20 米機關長鉞產生向左側滑的立體視差虛化；中景 12 米高【執鉞刑殺·蓐收古尊】古典玉面微抬 5 度，眼窩亮起暗金微光，白玉胸肌隨神性呼吸起伏，右手長鉞微沉激發齒輪自轉；背景 30 米黑金雙龍向前探出猙獰龍首俯視鏡頭，龍鱗如魚鰓開合收緊，喉間暗金低吼，極具動態透視與君王壓迫感。",
          "body": "Dignified low-angle wide shot with a smooth 5-degree subtle curved arc push-in, strictly zero camera roll: Inside an inverted cosmic basilica where floor and ceiling are inverted, the camera glides along a gentle 5-degree orbital arc forward while keeping its optical axis locked straight on the god's face. The foreground bronze mechanical poleaxe smoothly shifts laterally with rich optical parallax and creamy bokeh. Tack-sharp focus locks on the midground: the colossal 12-meter celestial executioner god Ru Shou subtly awakens, his carved white marble torso expanding in deep monumental breathing, his classical jade visage tilting upward 5 degrees revealing faint pinprick gold glints within hollow eyes, his back gear ring accelerating in counter-rotation. In the background, twin 30-meter coiled black-gold dragons dynamically emerge from the shadows, their massive horned heads creeping forward and angling downward over his shoulders, dark metallic armor scales bristling as their jaws part in a low metallic hiss. Volumetric chiaroscuro lighting, visceral orbital parallax tension, sovereign godhead menace",
          "prompt": "A cinematic widescreen 16:9 dignified shot with a smooth 5-degree subtle curved arc push-in, strictly zero camera roll, shallow depth of field: Inside an inverted cosmic execution basilica where floor and ceiling are flipped, the camera glides along a gentle 5-degree orbital arc forward. Foreground edge shows the blurred bronze mechanical poleaxe shifting laterally with pronounced optical parallax. Midground center is tack-sharp focused on the 12-meter celestial executioner god Ru Shou subtly awakening: his flawless pure white jade marble torso expands in powerful deep breathing, his classical jade visage tilts slowly upward revealing glowing golden pinpricks in hollow sockets, while his ornate back gear halo begins counter-rotating with soft sparks. Flanking him from the atmospheric background shadows, dual titanic 30-meter black-gold dragons slowly lean their massive horned heads forward over his shoulders, dark metallic scales bristling along their coiling bodies as they loom downward in lethal tension. Volumetric chiaroscuro lighting, visceral orbital parallax, cinematic photorealism, zero text.",
          "audio": "雙龍金屬龍吟低吼，黑金龍鱗緊繃開合摩擦聲，20米長鉞齒輪咬合沉悶重音，空間引力共振低頻轟鳴",
          "sfx": "雙龍金屬龍吟低吼，黑金龍鱗緊繃開合摩擦聲，20米長鉞齒輪咬合沉悶重音，空間引力共振低頻轟鳴"
    },
    {
      "id": "S07",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "WS (地熱裂隙低視角震撼仰拍)",
      "dur": "5.0s",
      "cam": "地熱裂隙低角度定點仰視 (Low-Angle Magma Rift WS)",
      "metrics": {
        "scale": "神獸與地質尺度 (神獸高 8 米長 14 米 / 黑鐵神球直徑 2.2 米)",
        "entity": "太古辟邪·燭荒古尊 (形態一：高 8 米、長 14 米 / 玄武岩饕餮甲)",
        "spatialRig": "低機位仰視玄武岩峭壁 + 前爪重壓神球垂直觸地線 + 兩側百米岩漿噴泉"
      },
      "desc": "熔岩巨獸：低機位仰視地下熔爐裂谷，高 8 米、長 14 米的太古辟邪神獅【燭荒古尊】周身冷鍛青銅饕餮神甲覆蓋，傲然立於沸騰玄武岩峭壁。神獅暴怒右前爪踏碎直徑 2.2 米的地熱黑鐵神球，地底噴湧數道高達 100 米的金色岩漿火柱，將千度熔爐照耀如白晝！",
      "body": "Powerful low-angle wide shot: The colossal archaic guardian stone lion god Zhu Huang perches proudly on jagged basalt cliffs inside a subterranean magma abyss, clad in heavy cold-forged dark bronze taotie armor. Its incandescent molten mane flows like liquid gold. The gigantic beast slams its heavy stone right claw down onto a massive solid black-iron sphere resting on the rock floor, crushing it into fragments and triggering towering golden lava geysers erupting from surrounding chasms into the high cavern ceiling. Dramatic fire illumination, intense thermal atmosphere, visceral raw mythic power",
      "prompt": "A cinematic widescreen 16:9 powerful low-angle wide shot: The colossal archaic guardian stone lion god Zhu Huang perches proudly on jagged basalt cliffs inside a subterranean magma abyss, clad in heavy cold-forged dark bronze taotie armor. Its incandescent molten mane flows like liquid gold. The gigantic beast slams its heavy stone right claw down onto a massive solid black-iron sphere resting on the rock floor, crushing it into fragments and triggering towering golden lava geysers erupting from surrounding chasms into the high cavern ceiling. Dramatic fire illumination, intense thermal atmosphere, visceral raw mythic power, zero text.",
      "audio": "8米神獅震撼地核的沉重咆哮，2.2米黑鐵神球受壓變形的金屬悶響，100米岩漿狂暴噴發烈焰呼嘯",
      "sfx": "8米神獅震撼地核的沉重咆哮，2.2米黑鐵神球受壓變形的金屬悶響，100米岩漿狂暴噴發烈焰呼嘯"
    },
    {
      "id": "S08",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "MS (武器第一人稱撞擊視角)",
      "dur": "5.0s",
      "cam": "扳手鉗口剛性鎖定機位 (Rigid-Mounted Wrench Jaw POV)",
      "metrics": {
        "scale": "武器第一人稱近身交鋒 (80cm 扳手 vs 8米巨獸爪)",
        "char": "周鐵 (45歲 / 185cm / 108kg / 粗獷重工體魄)",
        "weapon": "80cm 重型鉻釩鋼管子扳手 (鏡頭剛性鎖定於前端鉗口)",
        "spatialRig": "相機固定於扳手前鉗口軸線 + 周鐵雙手剛性握柄 + 垂直迎擊神爪力線"
      },
      "desc": "【特種機位 · 武器第一人稱】：鏡頭剛性安裝在 80cm 鉻釩鋼重管子扳手前端鉗口軸線上！前景中帶齒鋼鉗口鎖定在畫面正中，周鐵（45歲/185cm/108kg）雙手緊握合金手柄，雙臂 25mm 厚生鐵護臂狂暴上架，視野中黑紅太古神爪遮天蔽日砸下！「鐺————！」火星如熔岩暴雨般直接糊滿鏡頭，伴隨合金柄崩斷脆鳴，鏡頭隨斷扳手殘片在空中劇烈翻滾！",
      "body": "First-person weapon-mounted camera shot: The camera is rigid-mounted directly onto the forward steel jaw of an 80cm heavy industrial pipe wrench, looking straight outward along the tool's axis. Through the immediate foreground view of the scarred steel teeth locked in frame, a hulking heavy laborer thrusts upward with his bolted raw cast-iron vambraced forearms to intercept the titanic descending molten stone claw of a colossal guardian beast. At the point of impact, a blinding shower of white-orange friction sparks completely engulfs the lens. As the steel wrench shaft fractures under violent kinetic stress, the camera tumbles and spins through the smoke-filled air. Visceral physical impact, authentic metal stress failure, intense action cinematography",
      "prompt": "A cinematic widescreen 16:9 first-person weapon-mounted camera shot: The camera is rigid-mounted directly onto the forward steel jaw of an 80cm heavy industrial pipe wrench, looking straight outward along the tool's axis. Through the immediate foreground view of the scarred steel teeth locked in frame, a hulking heavy laborer thrusts upward with his bolted raw cast-iron vambraced forearms to intercept the titanic descending molten stone claw of a colossal guardian beast. At the point of impact, a blinding shower of white-orange friction sparks completely engulfs the lens. As the steel wrench shaft fractures under violent kinetic stress, the camera tumbles and spins through the smoke-filled air. Visceral physical impact, authentic metal stress failure, intense action cinematography, zero text.",
      "audio": "80cm重扳手與生鐵護臂硬架巨響「鐺————！」，合金柄崩斷脆鳴「咔嚓！」，火星噴濺劈啪聲",
      "sfx": "80cm重扳手與生鐵護臂硬架巨響「鐺————！」，合金柄崩斷脆鳴「咔嚓！」，火星噴濺劈啪聲"
    },
    {
      "id": "S09",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "MCU (高速工匠側拍特寫)",
      "dur": "4.5s",
      "cam": "90度正側面高速追焦 (90-Degree Locked Profile Close-up)",
      "metrics": {
        "scale": "人體中近景 · 局部工匠特寫",
        "char": "徐昂 (38歲 / 175cm / 定向爆破工程師)",
        "weapon": "高壓液態氮 (-196°C) + 30mm 黃銅拉火環引信",
        "spatialRig": "90度正側面鎖定相機 + 牙齒咬住引信緊繃受力線 + 噴管水平正對神甲"
      },
      "desc": "工匠爆破：相機以 90 度正側面水平鎖定特寫。徐昂（38歲/175cm）滿是煤灰燙傷的剛毅側臉固定在畫面中央，牙齒死死咬住 30mm 黃銅引信拉火環猛力向後扯成直線緊繃！前景中高壓液氮噴管口水平正對神甲零距離噴射，零下 196°C 白熾低溫氣霧狂暴急凍 2000°C 玄武岩神甲，馬氏體冷脆蛛網裂紋在鏡頭前連鎖炸裂，冰火對撞炸出深藍冷光。",
      "body": "High-speed action profile shot with a locked 90-degree lateral camera angle: Tight medium close-up of a weathered demolition engineer, his face caked in soot and grime, amber protective goggles reflecting searing lava flares. His soot-stained jaw clenches with fierce resolve as his teeth violently rip a brass detonator pull-fuse ring in rigid mechanical tension. In the immediate foreground, a heavy industrial dispenser nozzle is aimed horizontally straight-on, blasting an intense jet of sub-zero liquid nitrogen vapor directly against the glowing molten basalt armor of the beast at point-blank range. Violent thermal shock fractures erupt into branching cyan crystalline cracks across the brittle stone shell amidst billowing clouds of freezing white cryo-vapor. Masterful lighting contrast, razor-sharp textures",
      "prompt": "A cinematic widescreen 16:9 high-speed action profile shot with a locked 90-degree lateral camera angle: Tight medium close-up of a weathered demolition engineer, his face caked in soot and grime, amber protective goggles reflecting searing lava flares. His soot-stained jaw clenches with fierce resolve as his teeth violently rip a brass detonator pull-fuse ring in rigid mechanical tension. In the immediate foreground, a heavy industrial dispenser nozzle is aimed horizontally straight-on, blasting an intense jet of sub-zero liquid nitrogen vapor directly against the glowing molten basalt armor of the beast at point-blank range. Violent thermal shock fractures erupt into branching cyan crystalline cracks across the brittle stone shell amidst billowing clouds of freezing white cryo-vapor. Masterful lighting contrast, razor-sharp textures, zero text.",
      "audio": "黃銅引信齒輪咬合脆響，-196°C 液氮高壓噴射尖鳴，2000°C 神甲熱應力急脆爆裂「砰啪啪！」",
      "sfx": "黃銅引信齒輪咬合脆響，-196°C 液氮高壓噴射尖鳴，2000°C 神甲熱應力急脆爆裂「砰啪啪！」"
    },
    {
      "id": "S10",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "MS (三人多維流體運鏡)",
      "dur": "5.5s",
      "cam": "三人橫向流體協同運鏡 (Horizontal Trinity Tracking Arc)",
      "metrics": {
        "scale": "三人戰術群像中景 (立體空間分佈)",
        "chars": "林小滿 (19歲/162cm)、宋嵐 (29歲/168cm)、姜淮 (32歲/180cm)",
        "spatialRig": "左側冰刀接觸面折角火星 + 中央懷錶水平托握90度雙蓋展開 + 右側合約垂直拍擊"
      },
      "desc": "戰術走廊：流暢鏡頭動態橫向貫通三人防線——左側林小滿（162cm）鈦合金冰刀在結霜鋼架滑移切出折角火星；中景宋嵐（168cm）掌心水平托住直徑 50mm 古董銀懷錶，圓形雙蓋 90 度展開，精準機芯正對鏡頭展開六角幽藍心靈偏轉護盾；右側姜淮（180cm）滿臉鮮血將金色布林合約垂直拍碎在鋼架上撕裂神域重力，三維力學通道瞬間鎖定神核！",
      "body": "Dynamic ensemble tracking shot: The camera fluidly pans across a coordinated three-person mortal battle line amidst suspended cathedral debris. On the left, an agile young female scout carves a sharp evasive turn on titanium figure skate blades, showering ice sparks. In the center, an intellectual female analyst holds an antique silver pocket watch flatly seated in her palm with its circular casing hinged open 90 degrees, projecting a flat geometric hexagonal cyan psionic barrier that deflects distortion shockwaves. On the right, a bloodied corporate lawyer slams an intricate parchment of golden glowing Boolean logic contracts vertically against a steel girder, unraveling gravitational anomaly lines. Rich atmospheric depth, cinematic volumetric smoke, flawless action staging",
      "prompt": "A cinematic widescreen 16:9 dynamic ensemble tracking shot: The camera fluidly pans across a coordinated three-person mortal battle line amidst suspended cathedral debris. On the left, an agile young female scout carves a sharp evasive turn on titanium figure skate blades, showering ice sparks. In the center, an intellectual female analyst holds an antique silver pocket watch flatly seated in her palm with its circular casing hinged open 90 degrees, projecting a flat geometric hexagonal cyan psionic barrier that deflects distortion shockwaves. On the right, a bloodied corporate lawyer slams an intricate parchment of golden glowing Boolean logic contracts vertically against a steel girder, unraveling gravitational anomaly lines. Rich atmospheric depth, cinematic volumetric smoke, flawless action staging, zero text.",
      "audio": "鈦合金冰刀切擦冰層尖嘯，滑索鋼纜呼嘯，50mm 懷錶心靈護盾偏折震波音，合約符文撕裂聲",
      "sfx": "鈦合金冰刀切擦冰層尖嘯，滑索鋼纜呼嘯，50mm 懷錶心靈護盾偏折震波音，合約符文撕裂聲"
    },
    {
      "id": "S11",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "FS->CU (拋物線極速追隨下衝)",
      "dur": "6.0s",
      "cam": "過肩俯衝下壓微距 (Over-the-Shoulder Diving Thrust Macro)",
      "metrics": {
        "scale": "動態全景推至極限特寫 (178cm 人類刺入 1米神核)",
        "char": "陸遠 (26歲 / 178cm / 右臂完全紫金晶格化)",
        "weapon": "周鐵折斷的半截鉻釩鋼管子扳手 (斷刃長 40cm)",
        "spatialRig": "過肩主觀視角 + 斷扳手垂直剛性下衝力線 + 正中貫穿神核"
      },
      "desc": "【高潮爆點 · 拋物線下衝】：攝影機採過肩俯衝視角緊隨陸遠。陸遠右臂紫金晶格完全爆發蔓延，沿精算力學拋物線頂點踏空躍出！雙手牢牢握死周鐵折斷的 40cm 鉻釩鋼斷管子扳手，齒牙鋒利斷口沿剛性垂直力線全力下壓，如鋼釘般直接貫穿燭荒神尊胸膛開裂處暴露的直徑 1 米白熾地熱神核！刺目金芒與超新星金色光環席捲全場！",
      "body": "High-speed tracking arc shot from wide to close-up with an over-the-shoulder diving angle: A young tactical dispatcher leaps from the apex of a calculated trajectory across shattered floating stone tiers, his entire right arm and shoulder fully encased in glowing geometric violet-gold crystal facets. His hands grip the jagged, bloody severed head of a broken heavy steel pipe wrench with unyielding rigidity, driving its fractured steel teeth in a direct vertical thrust line straight down into the incandescent glowing white-hot singularity core exposed inside the cracked chest of the colossal stone beast. Blinding golden energy discharges and expanding radial shockwaves erupt outward. Visceral climax of deicide, crisp debris physics, epic motion clarity",
      "prompt": "A cinematic widescreen 16:9 high-speed tracking arc shot from wide to close-up with an over-the-shoulder diving angle: A young tactical dispatcher leaps from the apex of a calculated trajectory across shattered floating stone tiers, his entire right arm and shoulder fully encased in glowing geometric violet-gold crystal facets. His hands grip the jagged, bloody severed head of a broken heavy steel pipe wrench with unyielding rigidity, driving its fractured steel teeth in a direct vertical thrust line straight down into the incandescent glowing white-hot singularity core exposed inside the cracked chest of the colossal stone beast. Blinding golden energy discharges and expanding radial shockwaves erupt outward. Visceral climax of deicide, crisp debris physics, epic motion clarity, zero text.",
      "audio": "斷鋼扳手貫穿直徑1米神核金屬撕裂爆鳴，神軀崩解超新星衝擊波，晶體爆發刺耳音爆",
      "sfx": "斷鋼扳手貫穿直徑1米神核金屬撕裂爆鳴，神軀崩解超新星衝擊波，晶體爆發刺耳音爆"
    },
    {
      "id": "S12",
      "act": "第 4 幕：戰場死寂與契約定格",
      "type": "ECU (極限微距安靜定格)",
      "dur": "6.5s",
      "cam": "垂直正向極限微距 (Perpendicular Straight-on Extreme Macro)",
      "metrics": {
        "scale": "面部與筆尖極限微距 (五官局部 1:1)",
        "char": "陸遠 (26歲 / 178cm / 蒼白冷峻面部)",
        "prop": "0.5mm 滾花金屬自動鉛筆",
        "spatialRig": "垂直水平機位 + 鉛筆直立於紙面微距 + 大拇指按壓機械按鍵剛性軸線"
      },
      "desc": "【終局收束 · 動態驟停】：狂暴風雪與爆炸金芒驟然收束，天地陷入絕對死寂。相機以垂直水平正向機位極限微距鎖定：0.5mm 滾花金屬自動鉛筆直立懸於方格筆記本公式上方，陸遠血痕斑斑的蒼白臉龐倒映在金屬筆身。右手大拇指沿鉛筆中軸剛性垂直按壓頂部按鈕——「咔噠」。一滴深紅鮮血自筆尖垂直滴落在公式末端。畫面瞬間切入純黑，冷軋鋼金屬片名破冰定格：《門扉背後：凡人的弒神契約》。",
      "body": "Extreme macro close-up in absolute static quietness with a locked perpendicular straight-on camera angle: All dynamic violence ceases abruptly into dead silence. The camera is locked motionless on the pale, blood-streaked face of a young Asian man, his dark exhausted eyes completely calm. In razor-sharp foreground focus, a tarnished knurled silver mechanical pencil is oriented upright perpendicular to the paper page, its fine steel tip hovering millimeters above the final calculus equation in his worn notebook. A thumb firmly depresses the top metal button with a physical click, releasing a single droplet of dark crimson blood falling straight down from the pencil tip onto the paper in restored stillness. Sudden instantaneous cut to pure black, followed by the monolithic cold-rolled steel title logo shattering through frozen iron: 'BEHIND THE DOORS: THE MORTAL'S GOD-SLAYING CONTRACT'. Haunting poetic deicide resolution, pristine photographic stillness",
      "prompt": "A cinematic widescreen 16:9 extreme macro close-up in absolute static quietness with a locked perpendicular straight-on camera angle: All dynamic violence ceases abruptly into dead silence. The camera is locked motionless on the pale, blood-streaked face of a young Asian man, his dark exhausted eyes completely calm. In razor-sharp foreground focus, a tarnished knurled silver mechanical pencil is oriented upright perpendicular to the paper page, its fine steel tip hovering millimeters above the final calculus equation in his worn notebook. A thumb firmly depresses the top metal button with a physical click, releasing a single droplet of dark crimson blood falling straight down from the pencil tip onto the paper in restored stillness. Sudden instantaneous cut to pure black, followed by the monolithic cold-rolled steel title logo shattering through frozen iron: 'BEHIND THE DOORS: THE MORTAL'S GOD-SLAYING CONTRACT'. Haunting poetic deicide resolution, pristine photographic stillness, zero text overlays.",
      "audio": "0.5mm 自動鉛筆「咔噠」機械脆響，單滴鮮血落紙微響，瞬切死寂，片名破冰巨響",
      "sfx": "0.5mm 自動鉛筆「咔噠」機械脆響，單滴鮮血落紙微響，瞬切死寂，片名破冰巨響"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.trailerData = trailerData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = trailerData;
}
