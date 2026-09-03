# 《門扉背後：凡人的弒神契約》角色極限動態表情研究規格 (High-Contrast Expression Matrix)

本文件解決 AI 生成表情研究時「五官變化過小、千篇一律撲克臉」的問題。
透過引入 **FACS 面部微表情解剖學**、**極端嘴型與牙齒結構**、**眼球瞳孔縮放** 與 **頭部微角度傾斜**，打造五組辨識度極高、情緒跨度極大的表情矩陣。

---

## 一、 表情差異化提示詞工程法則 (5 大維度)

| 表情編號 | 情緒名稱 | 眼神與眉弓 (Eyes & Brows) | 嘴型與牙齒 (Mouth & Teeth) | 面部肌肉與頭部角度 | 視覺特徵 |
|---|---|---|---|---|---|
| **01** | **極限疲憊 / 虛弱** | 雙眼無神下垂、重度青黑眼袋、眼神渙散 | 嘴唇微張乾裂、下顎微垂放鬆 | 頭部微垂 5 度、面部肌肉鬆弛 | 憔悴死寂 |
| **02** | **超頻算力 / 狂熱精算** | 瞳孔劇烈收縮成針尖、眼球血絲密布、眉頭緊鎖下壓 | 嘴角扯出冷酷神經質的微笑 (Grim Smirk) | 額頭青筋微凸、下巴微抬、眼神銳利如尺規 | 智性狂態 |
| **03** | **肉體劇痛 / 咬舌瀕死** | 雙眉痛苦劇烈扭曲、單眼死閉、另一眼充血暴突 | 下顎死命咬合、牙齒咬碎舌尖、鮮血湧出嘴角 | 頸部青筋暴起、面部肌肉強烈抽搐 | 慘烈生存 |
| **04** | **深淵恐慌 / 精神震驚** | 雙眼極度圓睜 (Wide-Eyed)、瞳孔劇烈震顫、眼裂拉大 | 下巴猛烈下掉、大張嘴倒抽冷氣 (Gasping) | 雙眉高高挑起、面色慘白如紙、汗水冷凝 | 靈魂戰慄 |
| **05** | **凡人弒神 / 決死怒吼** | 眉弓猛烈壓低、雙眼燃燒決死怒火、眼神死鎖上方 | 嘴部完全大張暴怒咆哮 (Furious Open-Mouth Roar)、露整排牙齒與舌頭 | 鼻翼張大、面部肌肉全面緊繃拉扯、唾沫飛濺 | 意志爆發 |

---

## 二、 陸遠（男主角）極限反差表情提示詞模組

```text
[Middle Section - High-Contrast Expression Studies]: A horizontal grid of 5 dramatically different emotional headshots with distinct facial anatomy and mouth shapes:
1. Exhausted Despair: Unfocused drooping eyes with heavy dark eye bags, slack jaw, dry cracked lips slightly parted, head tilted down.
2. Maniacal Hyper-Calculation: Needle-sharp constricted pupils with intense bloodshot veins, furrowed brow pressed low, a chilling cold smirk at corner of mouth, razor-sharp intellectual intensity.
3. Visceral Agony & Self-Harm: One eye squeezed shut in excruciating pain while the other bulges, jaws clamped brutally tight biting his own tongue, thick dark blood streaming from lips and chin, neck tendons straining.
4. Traumatic Horror Shock: Extremely wide dilated eyes tearing open with terror, eyebrows raised high in disbelief, jaw dropped open in an audible silent gasp, ghostly pale skin.
5. Defiant Mortal Battle Roar: Wide open mouth furious roar showing bared upper and lower teeth and tongue, flared nostrils, fiery fierce glare locked upward, facial muscles heavily strained in desperate defiance.
```

---

## 三、 周鐵（前衛 / 塔吊老工人）極限反差表情提示詞模組

```text
[Middle Section - High-Contrast Expression Studies]: A horizontal grid of 5 dramatically different emotional headshots:
1. Stoic Weathered Neutral: Heavy hooded eyelids, relaxed jaw clamping an unlit bent cigarette, deep forehead wrinkles.
2. Defensive Roar: Giant open-mouthed bellowing war cry, bared weathered teeth, wide furious eyes, neck muscles bulging like steel cables.
3. Crushing Bone-Break Agony: Teeth ground together hard enough to shatter, grimacing sneer pulling lips back, eyes squinting in agony from multiple broken ribs, cold sweat beads.
4. Protective Warmth: Soft crinkling laugh lines around eyes, gentle crooked smile around cigarette, reassuring fatherly gaze.
5. Dying Breath Resolution: Pale graying skin, half-closed glassy eyes, blood trickling from nose, calm fearless smirk facing death.
```

---

## 四、 宋嵐（戰術醫療 / 心理治療師）極限反差表情提示詞模組

```text
[Middle Section - High-Contrast Expression Studies]: A horizontal grid of 5 dramatically different emotional headshots:
1. Clinical Neutral: Calm composed analytical gaze behind thin glasses, level eyebrows, closed neutral lips.
2. True-Sight Blue Glow: Left pupil dilated and emitting eerie geometric sapphire crystal light, right eye squinting in analytical focus, slight parted breath.
3. Sanity Collapse Terror: Glasses cracked across left lens, pupils trembling erratically with extreme psychological horror, hands grasping temples, mouth gasping.
4. Empathetic Soothing: Soft gentle eyes filled with sorrow and compassion, gentle reassuring closed-mouth smile, warm head tilt.
5. Seven-Bleeding Sacrifice: Blood weeping from nostrils, ears, and under glasses frame, jaw clenched in absolute stubborn will to shield comrades' minds.
```

---

## 五、 林小滿（狹縫偵查 / 方向之眼）極限反差表情提示詞模組

```text
[Middle Section - High-Contrast Expression Studies]: A horizontal grid of 5 dramatically different emotional headshots:
1. Vigilant Scout: Sharp squinting eyes scanning horizon, tightly closed lips, head turned 15 degrees listening.
2. Frostbite Whimper: Teeth violently chattering, lips turned purplish blue and shivering, eyes teary from sub-zero freezing pain.
3. Abyss Jump Adrenaline: Wide excited eyes filled with wild thrill, grin shouting into howling wind, hair whipping wildly.
4. Petrified Silence: Wide horrified eyes locked forward, one gloved hand clamped over own mouth to suppress any sound above 45dB.
5. Fierce Determination: Scowling brow, teeth bared in an aggressive snarl, nose wrinkled in stubborn defiance.
```

---

## 六、 徐昂（後勤工程 / 爆破專家）極限反差表情提示詞模組

```text
[Middle Section - High-Contrast Expression Studies]: A horizontal grid of 5 dramatically different emotional headshots:
1. Stoic Veteran Demolitionist: Deep furrowed brow, stern unblinking dark eyes measuring blast distance, tight flat mouth, scarred cheek immobile.
2. 150°C Steam Burn Shock: Eyes bulging with extreme agonizing heat shock, jaw clenched brutally tight with teeth bared in an animalistic grimace, neck veins strained.
3. Flashback Remorse: Drooping sorrowful eyes filled with haunting guilt looking downward, trembling lips, hollow defeated expression.
4. Cold Demolition Focus: Amber goggles over eyes, calm analytical half-squint, lips clamped around wire pin, complete absence of fear.
5. Heroic Breaching Roar: Mouth wide open shouting technical coordinates over deafening explosion noise, bared teeth, fierce determined glare.
```

---

## 七、 姜淮（合約解析 / 邏輯顧問）極限反差表情提示詞模組

```text
[Middle Section - High-Contrast Expression Studies]: A horizontal grid of 5 dramatically different emotional headshots:
1. Corporate Cold Smirk: Asymmetrical confident smirk at left corner of mouth, piercing analytical eyes behind frameless glasses, calm condescending tilt of chin.
2. Predatory Cross-Examination: Eyes narrowed into razor-sharp slits, intense laser focus, thin lips parted firing rapid logical questions.
3. Eardrum Rupture Agony: Eyes tightly shut in excruciating cranial pain, fresh dark blood streaming from both ears down jawline, mouth grimacing in agony.
4. Rule Loophole Triumph: Wide ecstatic intellectual glare, gold fountain pen raised, teeth bared in a fierce triumphant grin exposing divine paradox.
5. Soul Salvation Awe: Glasses askew, wide moist vulnerable eyes witnessing comrades risking life to catch him over the abyss, trembling parted lips in total disbelief.
```
