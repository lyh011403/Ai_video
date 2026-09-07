/**
 * 全案核心前製生產資產數據庫 (Universal Production Assets Database)
 * 涵蓋角色去頭表、Descriptor、五階本命神兵、領主怪物與純場景底板
 * 專為 GPT / DALL-E 3 自然語言生圖架構設計，落實正向材質固化、無縫大塊面與 16:9 寬銀幕構圖
 */

const assetsMasterData = {
  characters: [
    {
      id: "char_luyuan",
      name: "陸遠 (Lu Yuan)",
      role: "戰術調度 / 動態算力中樞 (隊長)",
      badge: "PROTO-01",
      specs: "26歲，178cm，物流調度員。患有幾何強迫症與事故PTSD，右臂嵌合紫金空間結晶面，雙眼青黑深陷，視神經超頻灼傷充血。",
      descriptor: "26-year-old Asian male tactical dispatcher, lean 178cm posture, extremely pale exhausted complexion with deep dark purple eye hollows and bloodshot sclera, sharp cold analytical gaze, wearing worn utilitarian dark blue logistics insulated zip jacket over dark gray thermal waffle shirt, charcoal industrial ripstop cargo pants, heavy steel-toed logistics boots. Right forearm seamlessly embedded with smooth geometric violet-gold spatial crystal facets under skin.",
      prompt: "A professional widescreen 16:9 studio character reference sheet, presented on a flat solid neutral mid-gray background (#808080) with soft, uniform diffuse studio lighting. The image features three distinct views arranged side by side:\n- Left panel: High-resolution 3/4 facial portrait of a 26-year-old Asian male tactical dispatcher, gaunt bone structure, exhausted pale skin, deep dark eye circles, bloodshot dark eyes with tiny razor-sharp catchlights, chapped lips, dry messy black hair.\n- Middle panel: Full-body front view of a lean male figure wearing a dark blue logistics zip jacket and charcoal industrial cargo pants, completely headless with the neck cleanly cut at the collar line, showing realistic fabric seams, utilitarian brass zipper, and rugged boots.\n- Right panel: Full-body rear view showing his back posture, jacket shoulder seams, utility tool loops, and right wrist showing smooth violet-gold crystalline skin facets.\nAll clothing and skin surfaces feature natural matte textures, realistic tactile cloth weave, and delicate skin subsurface scattering. Clean monolithic composition, free of surface clutter or extraneous line patterns, zero text, zero watermarks."
    },
    {
      id: "char_zhoutie",
      name: "周鐵 (Zhou Tie)",
      role: "肉身重裝 / 先鋒壁壘",
      badge: "PROTO-02",
      specs: "45歲，185cm，108kg。前高空塔吊操作工。左耳完全失聰撕裂傷痕，沉默如開山岩石，右臂生鐵護臂，雙臂骨裂傷痕累積。",
      descriptor: "45-year-old weathered Asian male veteran crane operator, hulking 185cm muscular heavyweight build, square chiseled jaw with rough salt-and-pepper stubble, distinct jagged tear scar across mangled left earlobe, weathered rock-like sunburnt skin. Wearing heavy mustard-yellow industrial canvas jacket covered in dark grease smudges, right forearm secured by a raw cast-iron bolted bracer, charcoal canvas work trousers, heavy steel toe cap work boots. Unlit crumpled cigarette behind right ear.",
      prompt: "A professional widescreen 16:9 studio character reference sheet, presented on a flat solid neutral mid-gray background (#808080) with soft, uniform diffuse studio lighting. The image features three distinct views arranged side by side:\n- Left panel: High-resolution 3/4 facial portrait of a 45-year-old weathered Asian crane operator, deep crow's feet, heavy brow, severe jawline, mangled scar tissue on left ear, tired but unshakable dark eyes with realistic corneal highlights.\n- Middle panel: Full-body front view of a colossal muscular heavyweight worker wearing a grease-stained mustard-yellow canvas jacket, completely headless with the neck cleanly cut at the collar, thick forearms exposed with a bolted cast-iron bracer on his right arm, holding an 80cm solid steel pipe wrench at rest.\n- Right panel: Full-body rear view showing his massive trapezius and back silhouette, heavy jacket wrinkles, and a tool belt with a hammer loop and steel carabiners.\nAll materials are rendered with tactile canvas weave, solid cast-iron weight, and realistic weathered skin pores, with smooth uninterrupted planes and zero extraneous line patterns. Clean presentation, zero text, zero watermarks."
    },
    {
      id: "char_xuang",
      name: "徐昂 (Xu Ang)",
      role: "工程爆破 / 物質改裝 / 陷阱大師",
      badge: "PROTO-03",
      specs: "38歲，175cm。前礦山定向爆破工程師。性格暴躁狂熱，右下巴至頸部高溫蒸氣燙傷疤，右臂纏繞發黑防燙石棉帶，神經性脫水乾嘔。",
      descriptor: "38-year-old Asian male mining demolition engineer, wiry muscular 175cm build, fierce bloodhound gaze with thermal burn scars running down right jawline to neck. Amber-tinted industrial impact goggles pushed up on soot-stained forehead. Wearing olive drab multi-pocket tactical demolition vest over coarse gray thermal canvas shirt, thick blackened asbestos heat-insulating wraps wound tightly around right forearm and fingers, heavy field utility pants with brass wire spools and detonator pouches.",
      prompt: "A professional widescreen 16:9 studio character reference sheet, presented on a flat solid neutral mid-gray background (#808080) with soft, uniform diffuse studio lighting. The image features three distinct views arranged side by side:\n- Left panel: High-resolution 3/4 facial portrait of a 38-year-old demolition engineer, jagged burn scar on right jaw, soot smudges on cheekbones, fierce determined bloodshot eyes behind pushed-up amber goggles, clenched jaw.\n- Middle panel: Full-body front view of an agile demolitionist wearing a multi-pocket olive tactical vest loaded with copper coils and blasting caps, completely headless with the neck cleanly cut at the collar line, both hands wrapped in charred asbestos tape holding dual-lead wires.\n- Right panel: Full-body rear view showing tactical harness back-plate, heavy cordura loops, spool holder, and reinforced knee pads.\nAll fabrics and equipment are defined with authentic rough canvas, matte charred asbestos textures, and solid brass fittings, with clean uninterrupted contours. Clean presentation, zero text, zero watermarks."
    },
    {
      id: "char_linxiaoman",
      name: "林小滿 (Lin Xiaoman)",
      role: "高敏偵查 / 空間瞬步 / 終極薪火傳承者",
      badge: "PROTO-04",
      specs: "19歲，162cm。極地搜救員、荒野獵人後裔。狼尾黑色短髮，眼神如獵鷹敏銳。右手裝配簡易航空鋁合金指骨外骨骼，高維瞬步時前庭受損耳流血。",
      descriptor: "19-year-old agile Asian female extreme wilderness scout, athletic 162cm lean build, messy black wolf-cut hair with frosted bangs, razor-sharp amber-hazel predator eyes, smudge of grease under right eye. Wearing black and rescue-orange technical seam-sealed hardshell mountaineering jacket, reinforced tactical climbing trousers, lightweight alpine approach boots. Right hand fitted with an articulated matte-silver aircraft-aluminum finger-splint exoskeleton, left hand holding an antique brass field compass.",
      prompt: "A professional widescreen 16:9 studio character reference sheet, presented on a flat solid neutral mid-gray background (#808080) with soft, uniform diffuse studio lighting. The image features three distinct views arranged side by side:\n- Left panel: High-resolution 3/4 facial portrait of a 19-year-old agile female scout, sharp facial planes, focused falcon gaze with clean eye highlights, subtle frost needles on eyelashes, firm neutral mouth.\n- Middle panel: Full-body front view of an athletic young woman in a high-contrast orange-black technical hardshell jacket, completely headless with the neck cleanly cut at the collar line, right hand displaying an articulated aluminum finger exoskeleton holding a titanium blade in reverse grip.\n- Right panel: Full-body rear view showing a tapered athletic back silhouette, climbing harness with quickdraws, and a waterproof backpack mount.\nSurfaces feature authentic ripstop technical nylon, sleek brushed aircraft-grade aluminum, and natural matte skin texture, clean and seamless throughout. Clean presentation, zero text, zero watermarks."
    },
    {
      id: "char_songlan",
      name: "宋嵐 (Song Lan)",
      role: "精神心靈 / 靈魂網路 / 生命修復",
      badge: "PROTO-05",
      specs: "29歲，168cm。前神經心理學臨床專家。氣質清冷知性，金絲半框眼鏡微裂，左眼瞳孔覆蓋永久性幽藍幾何結晶薄膜（真視晶瞳）。手托雙蓋精密銀懷錶。",
      descriptor: "29-year-old elegant Asian female neuropsychologist, slender 168cm posture, calm intellectual countenance, dark hair pinned in a neat low bun. Thin gold-rimmed glasses with a hairline crack across left lens, through which a subtle geometric sapphire crystalline membrane is visible over her left pupil. Wearing tailored deep forest-green wool coat over charcoal fine-knit turtleneck, dark tailored trousers, leather ankle boots. Left hand delicately holding antique double-cover silver mechanical pocket watch.",
      prompt: "A professional widescreen 16:9 studio character reference sheet, presented on a flat solid neutral mid-gray background (#808080) with soft, uniform diffuse studio lighting. The image features three distinct views arranged side by side:\n- Left panel: High-resolution 3/4 facial portrait of a 29-year-old intellectual female psychologist, refined bone structure, gold wire glasses with cracked left lens, left pupil showing subtle sapphire crystal facet patterns, calm perceptive dark right eye.\n- Middle panel: Full-body front view of a slender woman in a tailored dark green wool coat over a black turtleneck, completely headless with the neck cut cleanly at the collar, holding an open silver mechanical pocket watch with exposed gear train.\n- Right panel: Full-body rear view showing structured shoulder pads, tailored coat vent, and an elegant professional silhouette.\nRendered with realistic wool cloth weave, polished solid silver reflection, and delicate porcelain skin subsurface scattering, pristine and unblemished. Clean presentation, zero text, zero watermarks."
    },
    {
      id: "char_jianghuai",
      name: "姜淮 (Jiang Huai)",
      role: "因果審判 / 規則破解 / 邏輯合約 (智囊)",
      badge: "PROTO-06",
      specs: "32歲，180cm。前國際跨境併購資深合夥律師。深灰三件套西裝，無框眼鏡，左耳微型助聽器（因果言靈震裂鼓膜）。手提鈦合金法匣，持18K金尖法務筆。",
      descriptor: "32-year-old Asian male corporate merger attorney, sharp commanding 180cm build, impeccably groomed slicked-back hair, rimless rectangular glasses, austere cynical expression. Wearing bespoke charcoal grey three-piece wool suit with subtle pinstripes, white dress shirt with dried dark bloodstains around collar, loosened silk tie. Left ear fitted with antique brass acoustic hearing aid piece. Right hand gripping heavy matte titanium legal briefcase, left hand holding 18k gold-nib fountain pen.",
      prompt: "A professional widescreen 16:9 studio character reference sheet, presented on a flat solid neutral mid-gray background (#808080) with soft, uniform diffuse studio lighting. The image features three distinct views arranged side by side:\n- Left panel: High-resolution 3/4 facial portrait of a 32-year-old cynical corporate lawyer, razor-sharp cheekbones, rimless glasses reflecting analytical light, subtle blood trickling from left earlobe into collar, cold sardonic half-smirk.\n- Middle panel: Full-body front view of a tall athletic attorney in a bespoke charcoal three-piece suit, completely headless with the neck cut cleanly at the starched collar line, right hand carrying a heavy industrial titanium briefcase with geometric latch.\n- Right panel: Full-body rear view showing tailored suit jacket seams, crisp trousers drape, and formal leather dress shoes.\nAll surfaces feature refined pinstripe wool micro-texture, solid brushed titanium finish, and crisp tailored contours, completely free of surface distortion or unwanted lines. Clean presentation, zero text, zero watermarks."
    }
  ],
  bosses: [
    {
      id: "boss_zhuhuang",
      name: "太古辟邪 · 燭荒古尊 (Ancient Bixie Zhu Huang)",
      tier: "第 1 卷終極領主",
      specs: "【形態一：玄武沉睡 · 鎮界金猊態】8米高四足低伏整石金字塔剪影，消光黑玄武岩饕餮石甲完全閉鎖；【形態二：地心熔爐過載 · 六肢逆行解限態】10米高六肢直立戰鬥巨獸，外甲碎裂褪去，背負15米日蝕刀翼光輪，胸前徹底外露2500°C白熾奇點神核。",
      weakness: "【形態一】：引導重踏後背脊散熱孔0.08秒洩壓窗口；【形態二】：2500°C外露白熾神核遭遇-196°C液氮急凍引發熱應力馬氏體冷脆，凡人力學拋物線貫穿刺殺。",
      drops: "【太古地熱奇點神核】(神兵T2晉升核心催化劑)、【辟邪裂解冷鍛神骨】",
      descriptor: "Colossal 8-meter oriental mythic guardian stone lion god (Phase 1: Guardian Stance), low four-legged predatory feline stance, monolithic matte-black basalt stone body completely sealed, square archaic jaw with carved Taotie relief masks, eyes shut in solemn meditative sleep, chiseled geometric cloud-thunder mane plates flowing along massive neck, massive stone paws pressing heavily onto a 2.2-meter solid black-iron sphere, zero flames, cold monumental weight.",
      prompt: "A cinematic widescreen 16:9 creature turnaround reference sheet of a colossal 8-meter oriental mythic guardian stone lion god (Zhu Huang: Phase 1 Dormant), displayed on a solid neutral mid-gray background (#808080) with directional soft neutral studio lighting. Three distinct views arranged side-by-side:\n- Left panel: Front full-body view of the colossal stone lion god in a low four-legged feline posture, solemn square archaic jaw with carved Taotie bronze reliefs, eyes closed in deep meditative sleep, massive stone paws pressing heavily onto a cracked 2.2-meter solid black-iron sphere.\n- Middle panel: Lateral side profile view showing seamless monolithic basalt torso plates, chiseled cloud-thunder mane, sealed dorsal thermal exhaust slits, and heavy muscular hind legs.\n- Right panel: Macro close-up portrait of the carved stone head, archaic forehead seal glyph, chiseled fangs, and razor-sharp clean edges.\nSurfaces are defined by authentic weathered black basalt stone, solid oxidized bronze patina, and monolithic unsegmented stone planes, completely continuous and solid without any cage or grid patterns. Clean presentation, zero text, zero watermarks.",
      phases: [
        {
          phase: 1,
          phaseName: "形態一：玄武沉睡 · 鎮界金猊態",
          silhouette: "8米高、14米長四足低伏整石金字塔剪影，消光黑玄武岩饕餮石甲完全閉鎖，神態肅穆冷酷",
          specs: "四足低伏重甲雄渾姿態，玄武岩整石軀體完全閉合，神態肅穆冷酷，背部12道散熱閥閉鎖，右爪萬噸重力踏壓2.2米黑鐵神球。",
          descriptor: "Colossal 8-meter oriental mythic guardian stone lion god (Phase 1: Guardian Stance), low four-legged predatory feline stance, monolithic matte-black basalt stone body completely sealed, square archaic jaw with carved Taotie relief masks, eyes shut in solemn meditative sleep, chiseled geometric cloud-thunder mane plates flowing along massive neck, massive stone paws pressing heavily onto a 2.2-meter solid black-iron sphere, zero flames, cold monumental weight.",
          actionSignature: "四足原地重踏引發地脈次聲波、黑鐵神球引力重壓、被動高溫熱浪力場。",
          weakness: "神軀外部為均勻玄武岩高強度防禦，唯有在引導其釋放地熱重擊後，背部散熱閥短暫開啟洩壓的 0.08 秒窗口可進行微觀應力干擾。",
          drops: "【太古辟邪封印石片】",
          prompt: "A cinematic widescreen 16:9 creature turnaround reference sheet of a colossal 8-meter oriental mythic guardian stone lion god (Zhu Huang: Phase 1 Dormant), displayed on a solid neutral mid-gray background (#808080) with directional soft neutral studio lighting. Three distinct views arranged side-by-side:\n- Left panel: Front full-body view of the colossal stone lion god in a low four-legged feline posture, solemn square archaic jaw with carved Taotie bronze reliefs, eyes closed in deep meditative sleep, massive stone paws pressing heavily onto a cracked 2.2-meter solid black-iron sphere.\n- Middle panel: Lateral side profile view showing seamless monolithic basalt torso plates, chiseled cloud-thunder mane, sealed dorsal thermal exhaust slits, and heavy muscular hind legs.\n- Right panel: Macro close-up portrait of the carved stone head, archaic forehead seal glyph, chiseled fangs, and razor-sharp clean edges.\nSurfaces are defined by authentic weathered black basalt stone, solid oxidized bronze patina, and monolithic unsegmented stone planes, completely continuous and solid without any cage or grid patterns. Clean presentation, zero text, zero watermarks."
        },
        {
          phase: 2,
          phaseName: "形態二：地心熔爐過載 · 六肢逆行解限態",
          silhouette: "10米高前傾壓迫直立/六肢半人半獸剪影，40%玄武岩外甲爆裂褪去，背負15米日蝕日晷刀翼光輪，胸腔大開外露1米白熾奇點神核",
          specs: "外層玄武岩石甲受熱應力劇烈爆裂褪去！神軀撕裂拔高為10米高前傾壓迫六肢戰鬥巨獸。背脊刺穿展開15米青銅日晷刀翼，右前肢熔鑄為4.5米赤金熔岩處刑重臂，左肢撕裂為雙重骨刃副爪，胸腔大開徹底外露2500°C白熾奇點神核與旋轉齒輪絞盤。",
          descriptor: "Colossal 10-meter biomechanical mythic titan (Phase 2: Overclock Aberration), terrifying asymmetric hexapod bipedal hybrid stance, 40% outer basalt shell shattered revealing glowing magma muscle sinews underneath, dorsal spine erupting into a 15-meter circular solar-dial blade ring, massive right arm transformed into an elongated 4.5-meter molten iron execution maul, left torso sprouting dual articulated bone claws, chest armor split wide open to expose a pulsing 1-meter blinding white-hot geothermal singularity core with exposed bronze gear train, extreme kinetic ferocity.",
          actionSignature: "六肢音爆貼地狂暴衝殺、單臂熔岩拍擊撕裂空間、背部日蝕刃輪旋轉全場因果切割、胸前奇點白熾熱射線直線融穿萬噸鋼樑。",
          weakness: "外露的 2500°C 白熾神核遭遇極低溫急凍（徐昂 -196°C 液氮）時產生致命熱應力馬氏體冷脆，陸遠精算拋物線引導破甲神兵（周鐵斷扳手）貫穿刺殺。",
          drops: "【太古地熱奇點神核】(神兵 T2 晉升核心催化劑)、【辟邪裂解冷鍛神骨】",
          prompt: "A cinematic widescreen 16:9 combat concept sheet of a 10-meter biomechanical mythic titan (Zhu Huang: Phase 2 Unleashed), displayed on a solid neutral mid-gray background (#808080) with directional dramatic key lighting. Three distinct views arranged side-by-side:\n- Left panel: Full-body three-quarter combat view of the asymmetric hexapod titan leaning forward in predatory charge, massive molten iron right arm dragging across ground, spinal 15-meter solid bronze sundial blade ring deployed, chest plates split open exposing a blinding 2500°C white-hot singularity core with churning mechanical clockwork gears.\n- Middle panel: Rear dorsal view displaying ruptured spinal columns, deployed kinetic exhaust vents jetting superheated steam, and articulated bone claw mechanics.\n- Right panel: Macro high-speed close-up of the exposed chest singularity core, molten celestial gold ichor pumping through fractured bronze hydraulic pipes, and sharp mechanical stress cracks.\nRendered with authentic matte obsidian stone, incandescent thermal glow, and heavy solid forged bronze metallurgy, featuring expansive clean surfaces and massive physical weight. Clean presentation, zero text, zero watermarks."
        }
      ]
    },
    {
      id: "boss_rushou",
      name: "執鉞刑殺 · 蓐收古尊 (God of Execution Ru Shou)",
      tier: "第 2 卷主審判長",
      specs: "【形態一：白玉垂眸 · 律法主審態】12米高至高刑殺神尊。身後兩側盤旋伴生雙頭黑金巨龍（護法式神，黑金龍軀自後背延展，兩顆威嚴龍首分別於左右兩肩後方盤旋怒視）；本體為半袒露健壯希臘白玉神肌軀幹，腰覆繁複青銅下裳與垂帶；面容為精緻東方古典垂眸清冷玉面神相，雙目為深邃黑洞眼眶，頭頂懸浮神聖金屬光背輪環；左耳穿掛黑蛇盤頸，蛇首銜咬純金屬因果天平；右手握持20米機關齒輪傳動處刑長鉞，鉞柄嵌合金屬法輪與轉軸齒輪，鉞刃散發暗金古樸蝕刻神紋；【形態二：深淵刑決 · 倒懸千手黑血異化態】180°倒懸浮空，白玉面具縱向粉碎裂解露出虛空黑洞複眼，背部長出六柄青銅節肢處刑巨刃，右手化為三日月雙頭鉞。",
      weakness: "【形態一】：左耳黑血巨蛇受創時天平失衡，區域絕對法理暫時失效；【形態二】：裂解面部虛空黑洞中心存在0.1秒冷卻油回流期，左耳三頭狂蟒斷首時天平失衡。",
      drops: "【深核青銅神經齒輪組件】、【因果冷卻油】、【三日月斬首古鉞殘片】",
      descriptor: "Colossal 12-meter celestial executioner god (Ru Shou: Phase 1 Sovereign Law Stance), towering majestic divine presence. Flanked by dual colossal dark-gold dragons coiling from behind his back, their fierce draconic heads hovering defensively behind his left and right shoulders. Powerful semi-nude torso sculpted from flawless polished Parthenon white marble with clean athletic anatomy, draped below the waist in layered archaic dark bronze ceremonial robes and hanging sashes with metallic bells. Head adorned with an immaculate serene oriental jade mask with calm downcast gaze and empty pitch-black eye hollows, haloed by a radiant metallic celestial wheel ring. A coiled black serpent winds around his neck, emerging at his left earlobe to suspend a golden brass balance scale from its jaws. Right hand vertically grips a massive 20-meter mechanical gear-driven bronze execution poleaxe, the shaft integrated with mechanical clockwork gears and revolving dharma wheels, broad heavy blade adorned with ancient etched glyphs. Supreme impassive divine authority.",
      prompt: "A professional widescreen 16:9 studio character reference sheet of a colossal 12-meter celestial executioner god (Ru Shou: Phase 1 Sovereign Law Stance), presented on a flat solid neutral mid-gray background (#808080) with directional soft neutral studio lighting. Three distinct views arranged side-by-side:\n- Left panel: Full-body front view showing the imposing celestial god in an upright authoritative stance, flanked by dual colossal dark-gold coiled dragons rising from behind his back with dragon heads hovering behind his shoulders. Muscular semi-nude white marble torso, intricate bronze lower robes, head haloed by a circular metallic ring, black serpent at his left ear holding a hanging brass scale, right hand gripping a 20-meter mechanical gear-driven bronze execution poleaxe standing upright.\n- Middle panel: Lateral side profile view displaying the coiled body of the guardian dragon, the clean muscular curve of his marble back, hanging ceremonial vestments, and the mechanical gear nexus of the execution poleaxe.\n- Right panel: Macro close-up portrait of the serene oriental white jade executioner face, showing calm downcast features, deep pitch-black eye depressions, black serpent coiled at the left ear biting the chain of the brass balance scale, and delicate carved hairline details.\nSurfaces are rendered with authentic polished white marble, patinated archaic bronze metallurgy, dark iridescent dragon scales, and solid mechanical clockwork gears, with smooth monolithic contours and clean uninterrupted planes. Pristine presentation, zero text, zero watermarks.",
      phases: [
        {
          phase: 1,
          phaseName: "形態一：白玉垂眸 · 律法主審態",
          silhouette: "12米高神聖威嚴直立剪影，身後兩側盤旋伴生黑金雙龍護法，半袒露白玉神肌與青銅下裳垂帶",
          specs: "12米高至高刑殺神尊。身後兩側盤旋伴生雙頭黑金巨龍（護法式神，黑金龍軀自後背延展，兩顆威嚴龍首分別於左右兩肩後方盤旋怒視）；本體為半袒露健壯希臘白玉神肌軀幹，腰覆繁複青銅下裳與垂帶；面容為精緻東方古典垂眸清冷玉面神相，雙目為深邃黑洞眼眶，頭頂懸浮神聖金屬光背輪環；左耳穿掛黑蛇盤頸，蛇首銜咬純金屬因果天平；右手握持20米機關齒輪傳動處刑長鉞，鉞柄嵌合金屬法輪與轉軸齒輪，鉞刃散發暗金古樸蝕刻神紋。",
          descriptor: "Colossal 12-meter celestial executioner god (Ru Shou: Phase 1 Sovereign Law Stance), towering majestic divine presence. Flanked by dual colossal dark-gold dragons coiling from behind his back, their fierce draconic heads hovering defensively behind his left and right shoulders. Powerful semi-nude torso sculpted from flawless polished Parthenon white marble with clean athletic anatomy, draped below the waist in layered archaic dark bronze ceremonial robes and hanging sashes with metallic bells. Head adorned with an immaculate serene oriental jade mask with calm downcast gaze and empty pitch-black eye hollows, haloed by a radiant metallic celestial wheel ring. A coiled black serpent winds around his neck, emerging at his left earlobe to suspend a golden brass balance scale from its jaws. Right hand vertically grips a massive 20-meter mechanical gear-driven bronze execution poleaxe, the shaft integrated with mechanical clockwork gears and revolving dharma wheels, broad heavy blade adorned with ancient etched glyphs. Supreme impassive divine authority.",
          actionSignature: "空間絕對定格、重力方向重置、因果律言靈宣判。",
          weakness: "左耳黑血巨蛇受創時天平失衡，區域絕對法理暫時失效；頸椎後方因果冷卻油管道遭受撞擊軟化。",
          drops: "【白玉律法殘片】",
          prompt: "A professional widescreen 16:9 studio character reference sheet of a colossal 12-meter celestial executioner god (Ru Shou: Phase 1 Sovereign Law Stance), presented on a flat solid neutral mid-gray background (#808080) with directional soft neutral studio lighting. Three distinct views arranged side-by-side:\n- Left panel: Full-body front view showing the imposing celestial god in an upright authoritative stance, flanked by dual colossal dark-gold coiled dragons rising from behind his back with dragon heads hovering behind his shoulders. Muscular semi-nude white marble torso, intricate bronze lower robes, head haloed by a circular metallic ring, black serpent at his left ear holding a hanging brass scale, right hand gripping a 20-meter mechanical gear-driven bronze execution poleaxe standing upright.\n- Middle panel: Lateral side profile view displaying the coiled body of the guardian dragon, the clean muscular curve of his marble back, hanging ceremonial vestments, and the mechanical gear nexus of the execution poleaxe.\n- Right panel: Macro close-up portrait of the serene oriental white jade executioner face, showing calm downcast features, deep pitch-black eye depressions, black serpent coiled at the left ear biting the chain of the brass balance scale, and delicate carved hairline details.\nSurfaces are rendered with authentic polished white marble, patinated archaic bronze metallurgy, dark iridescent dragon scales, and solid mechanical clockwork gears, with smooth monolithic contours and clean uninterrupted planes. Pristine presentation, zero text, zero watermarks."
        },
        {
          phase: 2,
          phaseName: "形態二：深淵刑決 · 倒懸千手黑血異化態",
          silhouette: "180°倒懸浮空剪影，白玉面具裂解三瓣露出虛空黑洞複眼，背脊暴長六柄節肢青銅處刑巨刃，數萬根血色神經纜線如暴雨垂落",
          specs: "白玉面具縱向粉碎裂解成三瓣，面部露出旋轉的虛空黑洞與無數黃金律法複眼！法袍爆碎，自頸椎兩側刺穿暴長六根節肢處刑巨刃，右手與鉞刀熔焊為三日月斬首刃，左耳巨蛇異化為三頭狂蟒傾瀉因果黑血。",
          descriptor: "12-meter inverted cosmic executioner titan (Phase 2: Inverted Aberration), suspended upside-down 180 degrees in mid-air, white marble face mask shattered into three fragments revealing an inner swirling black hole void studded with golden mechanical eyes, steel robes shredded, spine erupting into six solid bronze execution scythe limbs with sleek polished edges, right arm fused directly with a double-ended crescent execution blade with sleek polished edge, left ear serpent mutated into a three-headed black-blood hydra with overturned brass scales spilling dark fluid, thousands of scarlet neural cables trailing into ground, terrifying cosmic horror.",
          actionSignature: "超維倒懸瞬移、空間重力撕裂、千手刑刃連續音爆處決、黑血潮汐吞噬。",
          weakness: "裂解的面部虛空黑洞中心存在 0.1 秒的冷卻油回流期；左耳三頭巨蛇斷首時因果天平徹底失衡。",
          drops: "【深核青銅神經齒輪組件】、【因果冷卻油】、【三日月斬首古鉞殘片】",
          prompt: "A cinematic widescreen 16:9 creature combat sheet of an inverted 12-meter celestial executioner titan (Ru Shou: Phase 2 Unleashed), displayed on a solid neutral mid-gray background (#808080) with directional dramatic studio lighting. Three distinct views arranged side-by-side:\n- Left panel: Full-body combat view of the executioner titan floating upside-down 180 degrees, six solid bronze execution scythe limbs with sleek polished edges spread wide like predatory mantis blades, shattered marble mask revealing an inner black-hole abyss with golden ocular lenses, right arm fused directly into a double-crescent bronze blade.\n- Middle panel: Rear view displaying the exposed mechanical spinal winch, hydraulic black-oil pistons, and dangling scarlet neural cables.\n- Right panel: Macro close-up of the shattered marble face, black void singularity swirling behind stone shards, and a three-headed hydra serpent hissing near the fractured jaw.\nDefined by authentic cracked smooth marble, dark hydraulic fluid, and solid cold-rolled steel metallurgy, with expansive polished blade surfaces and stark chiaroscuro contrast. Clean presentation, zero text, zero watermarks."
        }
      ]
    },
    {
      id: "boss_colossus",
      name: "寒冬巨擘 · 霜海行者 (Frostbound Colossus)",
      tier: "第 1 卷門扉守衛 / 先鋒巨怪",
      specs: "【形態一：冰川沉眠 · 萬載四足巡行態】百米長四足冰川山脊剪影，六角透光幾何冰晶重甲，肩部聲學角峰閉合；【形態二：聲學共振超頻 · 直立崩裂暴怒態】外層60%冰甲崩解，雙足直立拔高至130米，前肢化為破城冰錘，十二對聲學共振角峰全開釋放16Hz實體衝擊波。",
      weakness: "【形態一】：四足步態極慢，關節冰晶受周鐵生鐵重擊產生剪切脆裂；【形態二】：直立時胸腔正中央暴露1.5米深藍微觀冰核，遭受定向爆破易引發連鎖崩解。",
      drops: "【零度次聲波共振角峰】、【萬載高密度玄冰核心】",
      descriptor: "100-meter quadrupedal glacial titan (Phase 1: Glacial Monolith), mountain-like low stance moving on four massive columnar ice pillars, body covered in monolithic translucent hexagonal blue ice armor, closed acoustic resonance horns folded along shoulders like dormant mountain peaks, ancient frost fog trailing behind, immense physical mass, solemn primordial colossus.",
      prompt: "A cinematic widescreen 16:9 creature turnaround reference sheet of a 100-meter glacial titan (Frostbound Colossus: Phase 1 Monolith), displayed on a solid neutral mid-gray background (#808080) with directional crisp studio lighting. Three distinct views arranged side-by-side:\n- Left panel: Front full-body view of the 100-meter glacial titan in a low quadrupedal stance on columnar ice legs, monolithic translucent blue hexagonal ice plates, closed shoulder acoustic horn spires, and a solemn ancient presence.\n- Middle panel: Lateral side profile displaying a low mountain-ridge silhouette, natural glacial crevasse seams, and sealed acoustic vents.\n- Right panel: Macro close-up of the head, featuring a smooth crystalline ice mask with deep frozen fissures and sub-zero vapor breath.\nRendered with authentic dense glacial ice, dark bedrock slate, and sub-zero frost textures, highlighting broad uninterrupted ice planes and monumental geological mass. Clean presentation, zero text, zero watermarks.",
      phases: [
        {
          phase: 1,
          phaseName: "形態一：冰川沉眠 · 萬載四足巡行態",
          silhouette: "百米長、六十米高四足冰川山脊剪影，透光幾何六角冰甲完全包裹",
          specs: "四足如萬載冰川山脊的巨型泰坦，全身覆蓋六角幾何透光冰晶重甲，肩部中空聲學共振角峰呈閉合休眠狀，每一步踏地引發5級地震。",
          descriptor: "100-meter quadrupedal glacial titan (Phase 1: Glacial Monolith), mountain-like low stance moving on four massive columnar ice pillars, body covered in monolithic translucent hexagonal blue ice armor, closed acoustic resonance horns folded along shoulders like dormant mountain peaks, ancient frost fog trailing behind, immense physical mass, solemn primordial colossus.",
          actionSignature: "四足重步踏碎凍土、低速絕對質量碾壓、被動絕對零度寒流。",
          weakness: "移動極度緩慢，四足關節冰晶在遭遇周鐵生鐵重擊時產生剪切應力裂紋。",
          drops: "【萬載凍土碎石】",
          prompt: "A cinematic widescreen 16:9 creature turnaround reference sheet of a 100-meter glacial titan (Frostbound Colossus: Phase 1 Monolith), displayed on a solid neutral mid-gray background (#808080) with directional crisp studio lighting. Three distinct views arranged side-by-side:\n- Left panel: Front full-body view of the 100-meter glacial titan in a low quadrupedal stance on columnar ice legs, monolithic translucent blue hexagonal ice plates, closed shoulder acoustic horn spires, and a solemn ancient presence.\n- Middle panel: Lateral side profile displaying a low mountain-ridge silhouette, natural glacial crevasse seams, and sealed acoustic vents.\n- Right panel: Macro close-up of the head, featuring a smooth crystalline ice mask with deep frozen fissures and sub-zero vapor breath.\nRendered with authentic dense glacial ice, dark bedrock slate, and sub-zero frost textures, highlighting broad uninterrupted ice planes and monumental geological mass. Clean presentation, zero text, zero watermarks."
        },
        {
          phase: 2,
          phaseName: "形態二：聲學共振超頻 · 直立崩裂暴怒態",
          silhouette: "130米高雙足直立毀滅剪影，60%外層冰甲崩解，前肢異化為雙重破城冰錘，背部展開十二對蜂窩聲學共振角峰",
          specs: "外層60%冰川外甲崩解坍塌！雙足直立拔高至130米！前肢化為兩柄黑鐵岩芯與超低溫冰核構成的十米破城巨錘，肩背十二對聲學共振角峰如刺猬全開，釋放實體化16Hz次聲波衝擊環。",
          descriptor: "130-meter bipedal cataclysmic titan (Phase 2: Resonance Overclock), roaring bipedal stance standing tall on two hind legs, 60% outer glacial armor shed to reveal dark metallic bedrock skeleton underneath, forelimbs mutated into dual massive glacial impact mauls, twelve pairs of hollow resonance horn spires fully deployed along shoulders emitting visible concentric acoustic shockwaves, blinding blizzard vortex swirling around torso.",
          actionSignature: "雙足站立巨錘砸地引發百米冰刺地裂、角峰聲學集束定向衝擊波粉碎凡人內臟、引力冰雹暴。",
          weakness: "直立時胸腔正中央暴露的深藍色微觀冰核（直徑 1.5 米），在周鐵重型破甲或徐昂定向爆破下極易引發連鎖共振崩解。",
          drops: "【零度次聲波共振角峰】、【萬載高密度玄冰核心】",
          prompt: "A cinematic widescreen 16:9 combat turnaround reference sheet of a 130-meter bipedal ice colossus (Frostbound Colossus: Phase 2 Overclock), displayed on a solid neutral mid-gray background (#808080) with directional crisp studio lighting. Three distinct views arranged side-by-side:\n- Left panel: Full-body combat view of the 130-meter bipedal colossus standing upright, massive glacial sledgehammer arms raised to strike, twelve acoustic horn spires on shoulders vibrating violently with visible circular white shockwave rings, and a glowing deep blue exposed ice core in the chest.\n- Middle panel: Lateral side profile showing an upright skeletal spinal ridge, reinforced hind leg pistons, and streamlined aerodynamic ice vents.\n- Right panel: Macro close-up of the deploying acoustic horn spire array, geometric crystalline honeycomb chambers, and freezing vapor jets.\nAll surfaces feature dense translucent blue glacial ice, dark bedrock skeleton, and crisp specular ice facets, completely solid and streamlined throughout. Clean presentation, zero text, zero watermarks."
        }
      ]
    }
  ],
  environments: [
    {
      id: "env_dispatch_hub",
      name: "永達物流調度大廳 (Logistics Dispatch Hub)",
      specs: "挑高8米工業鋼結構大廳，頂部頻閃慘白日光燈，斑駁水泥柱，窗外黑雪暴風呼嘯，柴油發電機黑煙籠罩。",
      prompt: "A cinematic widescreen 16:9 establishing shot of an empty industrial logistics dispatch hall at midnight during a violent blizzard. The interior features exposed structural steel roof trusses, flickering cold white fluorescent tube lights casting harsh long shadows across the smooth concrete floor, dirty frosted panoramic windows rattling against the howling snowstorm, diesel exhaust smudges on the walls, and worn steel desks with unplugged CRT monitors. Photorealistic cinematic composition, authentic industrial textures, volumetric atmospheric dust, filmic color grading, zero people, zero text."
    },
    {
      id: "env_cold_storage",
      name: "地下四號深度冷凍庫 (Sub-Zero Storage Vault 4)",
      specs: "密閉20cm鍍鋅鋼保溫庫房，高5米重型貨架如鋼鐵峽谷，頂部冷凝管線結滿白霜冰刺，溫度計顯示-18.5°C。",
      prompt: "A cinematic widescreen 16:9 interior shot of a colossal abandoned underground industrial cold storage vault. Towering five-meter steel storage racks coated in thick jagged white frost form narrow steel canyons, overhead industrial ammonia cooling pipes drip ice stalactites, a heavy galvanized steel blast door is bolted shut, and the empty concrete floor is frozen solid. An eerie sub-zero atmospheric blue haze fills the space, with photorealistic optical depth, crisp sub-zero frost textures, volumetric chill fog, zero people, zero text."
    },
    {
      id: "env_mercury_sea",
      name: "水銀之海與萬蝕方尖碑 (Mercury Sea & All-Corrosion Obelisk)",
      specs: "高維安全中繼站。鏡面般冰冷流動的液態水銀海面，中央矗立千米黑金巨刃方尖碑，億萬行暗紅代碼流淌奔流。",
      prompt: "A cinematic widescreen 16:9 extreme wide shot of a cosmic safe sanctuary dimension. An infinite, silent mirror-like liquid mercury sea stretches under a pitch-black starry void without waves. In the center rises a towering one-kilometer-tall monolithic black obelisk resembling a colossal inverted blade, with millions of pulsating crimson calculation code glyphs cascading down its obsidian metal surface, casting surreal specular reflections across the liquid mercury water. Grand minimalist monumental scale, pristine optical clarity, zero people, zero text."
    },
    {
      id: "env_mirror_abyss",
      name: "私人維度【鏡淵界室】(Mirror Abyss Personal Chamber)",
      specs: "水銀海下方獨立摺疊空間。流動暗銀鏡面地板，六角折疊幾何光膜牆面，懸浮全息物理常數沙盤，極簡虛空庇護所。",
      prompt: "A cinematic widescreen 16:9 interior shot of a futuristic folded pocket dimension chamber. The floor is a seamless sheet of dark reflective liquid silver, the walls are composed of folding geometric crystalline light planes, and floating holographic physics simulation diagrams and mathematical equations drift in mid-air. Pristine minimalist void architecture illuminated by soft cool diffuse silver light, balanced contrast, spacious breathing room, zero people, zero text."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.assetsMasterData = assetsMasterData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = assetsMasterData;
}
