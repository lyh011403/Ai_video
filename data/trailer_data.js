/**
 * 官方概念前導片 (Concept Teaser) 專屬數據庫
 * 12 鏡頭 · 75 秒 · 四幕式純視覺 0 對白
 * 採用雙層解耦架構 (Two-Layer Architecture)：
 * - 資料庫度量 (Metadata): 嚴格記錄 178cm, 80cm, 100米, 12米, 30米等物理參數，保證跨系統連續性
 * - 生圖提示詞 (Prompts): 採用視覺相對參照錨定 (Visual Relational Anchoring)，徹底剔除 178cm/12mm/25mm 等微觀數字，防止 AI 文字印染洩漏與注意力稀釋
 * 遵循 GPT / DALL-E 3 原生自然語言生圖架構，100% 杜絕 CLI 標籤與粉色大象否定詞
 */

const trailerData = {
  "id": "trailer_official",
  "title": "官方前導概念片 (Official Concept Teaser · Visual Relativity Edition)",
  "subtitle": "75秒四幕式 · 12鏡頭 · 視覺參照錨定生圖 · 嚴格物理尺寸標定 · 純視覺0對白",
  "specs": {
    "runtime": "75s",
    "shotsCount": 12,
    "aspectRatio": "16:9 (3840×2160)",
    "frameRate": "24fps",
    "colorScience": "ACEScg / DCI-P3",
    "cinematography": "Cinematic Macro, Monumental Scale, Inverted Basilica, Weapon-Cam & Parabolic Arc",
    "scaleStandards": "雙層架構：後台嚴格物理尺寸 (Metadata) + 前端視覺參照錨定 (Visual Relative Anchoring)"
  },
  "shots": [
    {
      "id": "S01",
      "act": "第 1 幕：凡人算力與風雪起點",
      "type": "ECU (電影級微距特寫)",
      "dur": "3.5s",
      "cam": "固定微距淺景深 (Static Macro Shallow Focus)",
      "metrics": {
        "scale": "微觀手部局部 1:1",
        "char": "陸遠 (26歲 / 178cm)",
        "prop": "工程塑料計算機 (按鍵長寬 12mm)",
        "freq": "4Hz 機械撞擊頻率"
      },
      "desc": "微觀微距：陸遠（26歲/178cm）蒼白修長、指節微結白霜的食指，以每秒 4 次（4Hz）極高頻率精準敲擊工程塑料計算機按鍵。按鍵物理回彈帶動微觀懸浮灰塵與冰晶震顫，背景光學虛化，液晶屏幽綠冷光倒映在疲憊青黑眼眶中。",
      "body": "Extreme macro close-up with shallow depth of field: Slender frostbitten pale fingers of a lean young Asian tactical dispatcher rapidly clicking worn plastic numeric keys on a compact desktop calculator on a scratched industrial steel desk. The mechanical rebound of the buttons stirs airborne micro-dust motes and tiny floating ice crystals illuminated by a cool overhead tungsten cone light. In the soft-focus background, the faintly glowing green LCD display flickers with dense mathematical formulas, authentic skin subsurface scattering, realistic matte plastic textures, moody chiaroscuro lighting",
      "prompt": "A cinematic widescreen 16:9 extreme macro close-up with shallow depth of field: Slender frostbitten pale fingers of a lean young Asian tactical dispatcher rapidly clicking worn plastic numeric keys on a compact desktop calculator on a scratched industrial steel desk. The mechanical rebound of the buttons stirs airborne micro-dust motes and tiny floating ice crystals illuminated by a cool overhead tungsten cone light. In the soft-focus background, the faintly glowing green LCD display flickers with dense mathematical formulas. Authentic skin subsurface scattering, realistic matte plastic textures, moody chiaroscuro lighting, zero text.",
      "audio": "塑料計算機按鍵清脆急促的「嗒、嗒、嗒」物理回彈脆響 (4Hz)，遠處柴油發電機低沉底噪",
      "sfx": "塑料計算機按鍵清脆急促的「嗒、嗒、嗒」物理回彈脆響 (4Hz)，遠處柴油發電機低沉底噪"
    },
    {
      "id": "S02",
      "act": "第 1 幕：凡人算力與風雪起點",
      "type": "MS (緩慢前推聚焦)",
      "dur": "4.5s",
      "cam": "沉穩緩慢前推 (Slow Deliberate Push-in)",
      "metrics": {
        "scale": "人體中景 (腰部以上)",
        "char": "陸遠 (26歲 / 178cm / 消瘦體態)",
        "prop": "0.5mm 滾花金屬繪圖鉛筆 + A5 黑皮筆記本",
        "light": "頂部 4Hz 猩紅緊急警報光"
      },
      "desc": "推鏡聚焦：陸遠右手緊握 0.5mm 滾花金屬自動鉛筆，在黑皮筆記本的泛黃方格紙上飛速刻畫受力向量圖與拋物線。筆尖施力過猛刺破紙張纖維；調度大廳長條日光燈電壓驟降爆閃，整片空間驟然轉為 4Hz 血色緊急警報照明，如血刃割過蒼白病容。",
      "body": "Medium shot with a slow deliberate push-in: A lean young Asian male dispatcher intensely sketching structural force vectors and parabolic calculus with a knurled silver mechanical drafting pencil into a worn black leather notebook. The fine graphite tip snaps into the textured paper surface under heavy pressure. Overhead industrial fluorescent fixtures flicker violently before bathing the cluttered concrete dispatch office in harsh blood-red emergency alarm lighting, casting dramatic crimson slashes across his angular cheekbones and exhausted dark eyes, rich filmic contrast, realistic paper texture",
      "prompt": "A cinematic widescreen 16:9 medium shot with a slow deliberate push-in: A lean young Asian male dispatcher intensely sketching structural force vectors and parabolic calculus with a knurled silver mechanical drafting pencil into a worn black leather notebook. The fine graphite tip snaps into the textured paper surface under heavy pressure. Overhead industrial fluorescent fixtures flicker violently before bathing the cluttered concrete dispatch office in harsh blood-red emergency alarm lighting, casting dramatic crimson slashes across his angular cheekbones and exhausted dark eyes. Rich filmic contrast, realistic paper texture, zero text.",
      "audio": "石墨筆尖劃破紙張沙沙刺耳聲，日光燈管電壓爆裂滋滋聲，4Hz 紅色警報急促蜂鳴",
      "sfx": "石墨筆尖劃破紙張沙沙刺耳聲，日光燈管電壓爆裂滋滋聲，4Hz 紅色警報急促蜂鳴"
    },
    {
      "id": "S03",
      "act": "第 1 幕：凡人算力與風雪起點",
      "type": "ELS (史詩大氣慢速後拉)",
      "dur": "5.5s",
      "cam": "大範圍平穩慢速後拉 (Epic Slow Pull-Back Establishing)",
      "metrics": {
        "scale": "大地理極遠景 (數公里荒原)",
        "building": "永達物流轉運大廳 (挑高 8 米 / 鋼結構寬 60 米)",
        "temp": "-40°C 暴風雪",
        "env": "漫天黑雪廢土"
      },
      "desc": "大氣後拉：攝影機平穩穿過挑高 8 米調度大廳結霜破裂的窗戶向外拉升，展現零下 40℃ 漫天黑雪狂暴的末日荒原。寬達 60 米的永達物流轉運大廳如同一座鋼鐵孤島佇立在無邊風雪黑夜中，幾束微弱的黃色叉車警示燈在雪霧中搖曳，天地廣袤而死寂。",
      "body": "Epic wide establishing shot with a smooth slow pull-back: The camera recedes through a jagged frost-encrusted window pane out into the howling sub-zero dark snow blizzard. The massive industrial logistics warehouse stands as a solitary iron citadel in the middle of a vast frozen post-apocalyptic wasteland under swirling black storm clouds. Dim amber hazard rotating beacons on snowbound forklifts pierce faintly through the freezing whiteout fog, monolithic architectural scale, desaturated cold color palette, realistic atmospheric haze",
      "prompt": "A cinematic widescreen 16:9 epic wide establishing shot with a smooth slow pull-back: The camera recedes through a jagged frost-encrusted window pane out into the howling sub-zero dark snow blizzard. The massive industrial logistics warehouse stands as a solitary iron citadel in the middle of a vast frozen post-apocalyptic wasteland under swirling black storm clouds. Dim amber hazard rotating beacons on snowbound forklifts pierce faintly through the freezing whiteout fog. Monolithic architectural scale, desaturated cold color palette, realistic atmospheric haze, zero text.",
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
        "physics": "180° 重力逆轉 (向天空垂直墜落)"
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
        "armor": "六角透光幾何玄冰甲板 (單塊厚度 1.2 米)"
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
      "type": "WS (倒懸神殿王座緩慢仰推)",
      "dur": "6.0s",
      "cam": "倒懸殿堂中軸仰角慢推 (Inverted Throne Slow Cinematic Push)",
      "metrics": {
        "scale": "神祇帝王尺度 (神尊高 12 米 / 雙龍長 30 米 / 長鉞 20 米)",
        "entity": "執鉞刑殺·蓐收古尊 (高 12 米 / 半袒白玉神肌)",
        "dragons": "身後兩側盤旋伴生黑金巨龍 (長 30 米 / 龍首肩後怒視)",
        "weapon": "機關齒輪處刑長鉞 (長 20 米 / 暗金神紋)",
        "prop": "左耳黑蛇銜黃銅因果天平 (天平臂長 1.5 米)",
        "env": "倒懸天刑殿王座 (背景倒垂玄武岩方尖碑)"
      },
      "desc": "【蓐收古尊全新神相 · 君王威嚴】：空間重力倒轉，高達 12 米的【執鉞刑殺·蓐收古尊】端正屹立於倒垂王座階梯之上！身後兩側長達 30 米的黑金巨龍破空盤旋怒視，半袒露健壯白玉神肌軀幹與古典垂眸玉面散發神聖威嚴；左耳黑蛇銜咬 1.5 米黃銅因果天平，右手持 20 米機關齒輪長鉞斜立，倒垂黑石方尖碑襯托絕對君王威壓。",
      "body": "Dignified low-angle wide shot with a smooth slow push-in: The colossal celestial executioner god Ru Shou stands in sovereign imperial authority atop the steps of an inverted cosmic execution basilica where ceiling and floor are flipped. Towering over the dais, the god is flanked symmetrically by dual massive coiled dark-gold dragons erupting from behind his back, their fierce serpentine heads hovering defensively behind his left and right shoulders with gleaming metallic scales. The god features a powerful muscular semi-nude torso sculpted of flawless polished white marble, draped below the waist in layered archaic dark bronze ceremonial robes. His head is adorned with an immaculate serene oriental jade mask with downcast gaze and empty pitch-black eye hollows, haloed by a radiant metallic celestial wheel ring. A coiled black serpent winds around his neck and emerges at his left ear to suspend a balanced brass scale from its jaws. In his right hand he grips a towering mechanical gear-driven bronze execution poleaxe planted against the stone floor. Monolithic inverted basalt obelisks in background, volumetric chiaroscuro lighting, sovereign godhead majesty",
      "prompt": "A cinematic widescreen 16:9 dignified low-angle wide shot with a smooth slow push-in: The colossal celestial executioner god Ru Shou stands in sovereign imperial authority atop the steps of an inverted cosmic execution basilica where ceiling and floor are flipped. Towering over the dais, the god is flanked symmetrically by dual massive coiled dark-gold dragons erupting from behind his back, their fierce serpentine heads hovering defensively behind his left and right shoulders with gleaming metallic scales. The god features a powerful muscular semi-nude torso sculpted of flawless polished white marble, draped below the waist in layered archaic dark bronze ceremonial robes. His head is adorned with an immaculate serene oriental jade mask with downcast gaze and empty pitch-black eye hollows, haloed by a radiant metallic celestial wheel ring. A coiled black serpent winds around his neck and emerges at his left ear to suspend a balanced brass scale from its jaws. In his right hand he grips a towering mechanical gear-driven bronze execution poleaxe planted against the stone floor. Monolithic inverted basalt obelisks in background, volumetric chiaroscuro lighting, sovereign godhead majesty, sharp focus, zero text.",
      "audio": "空間引力共振低頻重音，30米黑金伴生雙龍低沉金屬龍吟，天平齒輪咬合聲，20米鉞刀劃破空間尖銳音頻",
      "sfx": "空間引力共振低頻重音，30米黑金伴生雙龍低沉金屬龍吟，天平齒輪咬合聲，20米鉞刀劃破空間尖銳音頻"
    },
    {
      "id": "S07",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "WS (地熱裂隙低視角震撼仰拍)",
      "dur": "5.0s",
      "cam": "地熱裂隙低角度定點仰視 (Low-Angle Magma Rift WS)",
      "metrics": {
        "scale": "神獸與地質尺度 · 力量碰撞 (神獸高 8 米長 14 米 / 黑鐵神球直徑 2.2 米)",
        "entity": "太古辟邪·燭荒古尊 (形態一：高 8 米、長 14 米 / 玄武岩饕餮甲)",
        "prop": "純黑鐵地熱律法神球 (直徑 2.2 米 / 重 43 噸)",
        "magma": "熔岩火柱噴湧高達 100 米"
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
      "cam": "扳手前端第一人稱鎖定 (Wrench-Mounted Weapon-Cam Impact)",
      "metrics": {
        "scale": "武器第一人稱近身交鋒 (80cm 扳手 vs 8米巨獸爪)",
        "char": "周鐵 (45歲 / 185cm / 108kg / 粗獷重工體魄)",
        "weapon": "80cm 重型鉻釩鋼管子扳手 (鏡頭固定於前端鉗口)",
        "armor": "小臂粗生鐵螺栓護臂 (厚 25mm)"
      },
      "desc": "【特種機位 · 武器第一人稱】：鏡頭直接安裝在 80cm 鉻釩鋼重管子扳手前端鉗口！跟隨周鐵（45歲/185cm/108kg）雙臂 25mm 厚生鐵護臂狂暴上架，視野中黑紅太古神爪遮天蔽日砸下！「鐺————！」火星如熔岩暴雨般直接糊滿鏡頭，伴隨合金柄崩斷脆鳴，鏡頭隨斷扳手殘片在空中劇烈翻滾！",
      "body": "First-person weapon-mounted camera shot: The camera is affixed directly to the forward steel jaw of a heavy industrial pipe wrench. Through the foreground view of the scarred steel tool, a hulking heavy laborer thrusts upward with his bolted raw cast-iron vambraced forearms to intercept the titanic descending molten stone claw of a colossal guardian beast. At the point of impact, a blinding shower of white-orange friction sparks completely engulfs the lens. As the steel wrench shaft fractures under violent kinetic stress, the camera tumbles and spins through the smoke-filled air. Visceral physical impact, authentic metal stress failure, intense action cinematography",
      "prompt": "A cinematic widescreen 16:9 first-person weapon-mounted camera shot: The camera is affixed directly to the forward steel jaw of a heavy industrial pipe wrench. Through the foreground view of the scarred steel tool, a hulking heavy laborer thrusts upward with his bolted raw cast-iron vambraced forearms to intercept the titanic descending molten stone claw of a colossal guardian beast. At the point of impact, a blinding shower of white-orange friction sparks completely engulfs the lens. As the steel wrench shaft fractures under violent kinetic stress, the camera tumbles and spins through the smoke-filled air. Visceral physical impact, authentic metal stress failure, intense action cinematography, zero text.",
      "audio": "80cm重扳手與生鐵護臂硬架巨響「鐺————！」，合金柄崩斷脆鳴「咔嚓！」，火星噴濺劈啪聲",
      "sfx": "80cm重扳手與生鐵護臂硬架巨響「鐺————！」，合金柄崩斷脆鳴「咔嚓！」，火星噴濺劈啪聲"
    },
    {
      "id": "S09",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "MCU (高速工匠側拍特寫)",
      "dur": "4.5s",
      "cam": "側拍高速追焦 (High-Speed Action Profile MCU)",
      "metrics": {
        "scale": "人體中近景 · 局部工匠特寫",
        "char": "徐昂 (38歲 / 175cm / 定向爆破工程師)",
        "gear": "右手黑石棉防燙裹手 + 琥珀色防風鏡",
        "weapon": "高壓液態氮 (-196°C) + 黃銅拉火環引信 (環徑 30mm)",
        "physics": "熱應力馬氏體冷脆蛛網裂紋 (2000°C玄武岩對撞-196°C液氮)"
      },
      "desc": "工匠爆破：大光圈側拍特寫徐昂（38歲/175cm）滿是煤灰燙傷的剛毅臉龐與防風鏡反光。他牙齒死死咬住 30mm 黃銅引信拉火環猛力一扯，零下 196°C 液氮高壓噴管零距離撞擊神尊 2000°C 玄武岩神甲！白熾氣霧與馬氏體冷脆蛛網裂紋在鏡頭前連鎖炸裂，冰火對撞炸出深藍冷光。",
      "body": "High-speed action profile shot: Tight medium close-up of a weathered demolition engineer, his face caked in soot and grime, amber protective goggles reflecting searing lava flares. His jaw clenches with fierce resolve as his teeth violently rip a brass detonator pull-fuse ring. At point-blank range, a heavy industrial dispenser blasts an intense jet of sub-zero liquid nitrogen vapor directly against the glowing molten basalt armor of the beast. Violent thermal shock fractures erupt into branching cyan crystalline cracks across the brittle stone shell amidst billowing clouds of freezing white cryo-vapor. Masterful lighting contrast, razor-sharp textures",
      "prompt": "A cinematic widescreen 16:9 high-speed action profile shot: Tight medium close-up of a weathered demolition engineer, his face caked in soot and grime, amber protective goggles reflecting searing lava flares. His jaw clenches with fierce resolve as his teeth violently rip a brass detonator pull-fuse ring. At point-blank range, a heavy industrial dispenser blasts an intense jet of sub-zero liquid nitrogen vapor directly against the glowing molten basalt armor of the beast. Violent thermal shock fractures erupt into branching cyan crystalline cracks across the brittle stone shell amidst billowing clouds of freezing white cryo-vapor. Masterful lighting contrast, razor-sharp textures, zero text.",
      "audio": "黃銅引信齒輪咬合脆響，-196°C 液氮高壓噴射尖鳴，2000°C 神甲熱應力急脆爆裂「砰啪啪！」",
      "sfx": "黃銅引信齒輪咬合脆響，-196°C 液氮高壓噴射尖鳴，2000°C 神甲熱應力急脆爆裂「砰啪啪！」"
    },
    {
      "id": "S10",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "MS (三人多維流體運鏡)",
      "dur": "5.5s",
      "cam": "流暢戰術協同跟隨 (Fluid Tactical Multi-Tracker)",
      "metrics": {
        "scale": "三人戰術群像中景 (立體空間分佈)",
        "chars": "林小滿 (19歲/162cm)、宋嵐 (29歲/168cm)、姜淮 (32歲/180cm)",
        "props": "鈦合金冰刀 + 直徑 50mm 古董銀懷錶 (心靈護盾) + 金色布林合約羊皮紙"
      },
      "desc": "戰術走廊：流暢鏡頭動態貫通三人防線——左側林小滿（162cm）鈦合金冰刀在結霜鋼架滑移切出折角火星；中景宋嵐（168cm）按住直徑 50mm 古董銀懷錶展開六角幽藍心靈偏轉護盾彈開精神衝擊；右側姜淮（180cm）滿臉鮮血將金色布林合約拍碎撕裂神域重力，三維力學通道瞬間鎖定神核！",
      "body": "Dynamic ensemble tracking shot: The camera fluidly pans across a coordinated three-person mortal battle line amidst suspended cathedral debris. On the left, an agile young female scout carves a sharp evasive turn on titanium figure skate blades, showering ice sparks. In the center, an intellectual female analyst clicks an antique silver pocket watch open, projecting a glowing hexagonal cyan psionic barrier that deflects distortion shockwaves. On the right, a bloodied corporate lawyer slams an intricate parchment of golden glowing Boolean logic contracts against a steel girder, unraveling gravitational anomaly lines. Rich atmospheric depth, cinematic volumetric smoke, flawless action staging",
      "prompt": "A cinematic widescreen 16:9 dynamic ensemble tracking shot: The camera fluidly pans across a coordinated three-person mortal battle line amidst suspended cathedral debris. On the left, an agile young female scout carves a sharp evasive turn on titanium figure skate blades, showering ice sparks. In the center, an intellectual female analyst clicks an antique silver pocket watch open, projecting a glowing hexagonal cyan psionic barrier that deflects distortion shockwaves. On the right, a bloodied corporate lawyer slams an intricate parchment of golden glowing Boolean logic contracts against a steel girder, unraveling gravitational anomaly lines. Rich atmospheric depth, cinematic volumetric smoke, flawless action staging, zero text.",
      "audio": "鈦合金冰刀切擦冰層尖嘯，滑索鋼纜呼嘯，50mm 懷錶心靈護盾偏折震波音，合約符文撕裂聲",
      "sfx": "鈦合金冰刀切擦冰層尖嘯，滑索鋼纜呼嘯，50mm 懷錶心靈護盾偏折震波音，合約符文撕裂聲"
    },
    {
      "id": "S11",
      "act": "第 3 幕：初火小隊硬核反擊",
      "type": "FS->CU (拋物線極速追隨下衝)",
      "dur": "6.0s",
      "cam": "拋物線主觀下衝追隨 (Apex Parabolic Tracking Arc)",
      "metrics": {
        "scale": "動態全景推至極限特寫 (178cm 人類刺入 1米神核)",
        "char": "陸遠 (26歲 / 178cm / 右臂完全紫金晶格化)",
        "weapon": "周鐵折斷的半截鉻釩鋼管子扳手 (斷刃長 40cm)",
        "target": "燭荒神尊胸膛開裂處白熾奇點神核 (直徑 1 米 / 2500°C)"
      },
      "desc": "【高潮爆點 · 拋物線下衝】：陸遠（178cm）右臂紫金晶格完全爆發蔓延，沿精算力學拋物線頂點踏空躍出！攝影機自全景高速大弧線追隨下衝——陸遠雙手高舉周鐵帶血的 40cm 斷鋼扳手，紫金晶臂全力下壓，如鋼釘般狠狠貫穿燭荒神尊胸膛開裂的直徑 1 米 2500°C 白熾神核！刺目金芒與超新星金色光環席捲全場！",
      "body": "High-speed tracking arc shot from wide to close-up: A young tactical dispatcher leaps from the apex of a calculated trajectory across shattered floating stone tiers, his entire right arm and shoulder fully encased in glowing geometric violet-gold crystal facets. The camera plunges downward in a dynamic arc following his descent as he grips the jagged, bloody severed head of a broken heavy steel pipe wrench with both hands, driving it like an iron spike directly into the incandescent glowing white-hot singularity core exposed inside the cracked chest of the colossal stone beast. Blinding golden energy discharges and expanding radial shockwaves erupt outward. Visceral climax of deicide, crisp debris physics, epic motion clarity",
      "prompt": "A cinematic widescreen 16:9 high-speed tracking arc shot from wide to close-up: A young tactical dispatcher leaps from the apex of a calculated trajectory across shattered floating stone tiers, his entire right arm and shoulder fully encased in glowing geometric violet-gold crystal facets. The camera plunges downward in a dynamic arc following his descent as he grips the jagged, bloody severed head of a broken heavy steel pipe wrench with both hands, driving it like an iron spike directly into the incandescent glowing white-hot singularity core exposed inside the cracked chest of the colossal stone beast. Blinding golden energy discharges and expanding radial shockwaves erupt outward. Visceral climax of deicide, crisp debris physics, epic motion clarity, zero text.",
      "audio": "斷鋼扳手貫穿直徑1米神核金屬撕裂爆鳴，神軀崩解超新星衝擊波，晶體爆發刺耳音爆",
      "sfx": "斷鋼扳手貫穿直徑1米神核金屬撕裂爆鳴，神軀崩解超新星衝擊波，晶體爆發刺耳音爆"
    },
    {
      "id": "S12",
      "act": "第 4 幕：戰場死寂與契約定格",
      "type": "ECU (極限微距安靜定格)",
      "dur": "6.5s",
      "cam": "極致死寂定格收束 (Static Macro Deicide Freeze)",
      "metrics": {
        "scale": "面部極限微距 (五官局部 1:1)",
        "char": "陸遠 (26歲 / 178cm / 蒼白冷峻面部)",
        "prop": "0.5mm 滾花金屬自動鉛筆",
        "cosmos": "萬蝕方尖碑 (高 1000 米 / 水銀之海)"
      },
      "desc": "【終局收束 · 動態驟停】：狂暴風雪與爆炸金芒驟然收束，天地陷入絕對死寂。鏡頭極限微距凝視陸遠（178cm）血痕斑斑的蒼白臉龐與深陷青黑的冰冷眼眸。右手大拇指輕輕按動 0.5mm 金屬自動鉛筆頂部——「咔噠」。一滴深紅鮮血自筆尖滴落在方格紙公式末端。畫面瞬間切入純黑，冷軋鋼金屬片名破冰定格：《門扉背後：凡人的弒神契約》。",
      "body": "Extreme macro close-up in absolute static quietness: All dynamic violence ceases abruptly into dead silence. The camera is locked motionless on the pale, blood-streaked face of a young Asian man, his dark exhausted eyes completely calm. His thumb gently clicks the top button of a tarnished knurled silver mechanical pencil. A single droplet of dark crimson blood falls from the steel pencil tip onto the final calculus formula in his worn notebook in restored stillness. Sudden instantaneous cut to pure black, followed by the monolithic cold-rolled steel title logo shattering through frozen iron: 'BEHIND THE DOORS: THE MORTAL'S GOD-SLAYING CONTRACT'. Haunting poetic deicide resolution, pristine photographic stillness",
      "prompt": "A cinematic widescreen 16:9 extreme macro close-up in absolute static quietness: All dynamic violence ceases abruptly into dead silence. The camera is locked motionless on the pale, blood-streaked face of a young Asian man, his dark exhausted eyes completely calm. His thumb gently clicks the top button of a tarnished knurled silver mechanical pencil. A single droplet of dark crimson blood falls from the steel pencil tip onto the final calculus formula in his worn notebook in restored stillness. Sudden instantaneous cut to pure black, followed by the monolithic cold-rolled steel title logo shattering through frozen iron: 'BEHIND THE DOORS: THE MORTAL'S GOD-SLAYING CONTRACT'. Haunting poetic deicide resolution, pristine photographic stillness, zero text overlays.",
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
