// test_health.js - 全站雙端（根目錄主入口 + 子目錄總控台）健康檢測與防退行回歸測試套件
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('====================================================');
console.log('  門扉背後：凡人的弒神契約 · 全站分鏡防退行健康檢測  ');
console.log('====================================================\n');

// 1. 檢查核心檔案是否存在
const requiredFiles = [
  'index.html',
  'dashboard/index.html',
  'dashboard/debug_script.js',
  'data/trailer_data.js',
  'data/assets_data.js',
  'data/chapters/ch01_data.js'
];

requiredFiles.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error(`[FAIL] 缺失必要核心檔案: ${f}`);
    process.exit(1);
  }
});
console.log('[PASS] 必要核心檔案完整存在。\n');

// 2. 測試資料庫載入
const trailerData = require('./data/trailer_data.js');
if (!trailerData || !trailerData.shots || trailerData.shots.length !== 12) {
  console.error('[FAIL] trailerData 載入異常或鏡頭數不為 12');
  process.exit(1);
}
console.log(`[PASS] trailerData 載入成功，共 ${trailerData.shots.length} 鏡頭，含 SVG 與調度數據。\n`);

// 3. 測試雙端 (dashboard/index.html 與 根目錄 index.html)
const targets = [
  { name: '旗艦總控台 (dashboard/index.html)', file: 'dashboard/index.html' },
  { name: '根目錄主工作台 (index.html)', file: 'index.html' }
];

targets.forEach(target => {
  console.log(`>>> 開始檢驗目標: ${target.name}`);
  let renderedCardsHtml = '';

  const sandbox = {
    window: {},
    document: {
      getElementById: (id) => ({
        id: id,
        innerHTML: '',
        innerText: '',
        textContent: '',
        style: {},
        classList: { add: () => {}, remove: () => {}, toggle: () => {} },
        appendChild: () => {},
        querySelectorAll: () => [],
        set innerHTML(val) {
          if (id === 'shot-cards-container') {
            renderedCardsHtml = val;
          }
        }
      }),
      querySelectorAll: () => [],
      addEventListener: () => {}
    },
    navigator: {},
    console: console
  };
  sandbox.window = sandbox;
  sandbox.window.trailerData = trailerData;

  const context = vm.createContext(sandbox);

  // 預載依賴資料庫
  ['data/assets_data.js', 'data/trailer_data.js', 'data/chapters/ch01_data.js'].forEach(s => {
    const code = fs.readFileSync(s, 'utf8');
    vm.runInContext(code, context);
  });

  // 執行主程式碼
  const html = fs.readFileSync(target.file, 'utf8');
  const scriptStart = html.indexOf('<script>');
  const scriptEnd = html.lastIndexOf('</script>');
  const innerJs = html.substring(scriptStart + 8, scriptEnd);

  try {
    vm.runInContext(innerJs, context);
    console.log(`  [PASS] 主腳本解析無語法錯誤。`);
  } catch (err) {
    console.error(`  [FAIL] ${target.name} 語法或載入崩潰:`, err);
    process.exit(1);
  }

  // 測試前導概念片 (ch_teaser)
  try {
    renderedCardsHtml = '';
    context.switchChapter('ch_teaser');
    if (renderedCardsHtml.length > 5000 && renderedCardsHtml.includes('shot-card') && renderedCardsHtml.includes('<svg')) {
      console.log(`  [PASS] 前導概念片 (ch_teaser) 渲染成功！卡片 HTML: ${renderedCardsHtml.length} 字元，含 SVG 線框圖。`);
    } else {
      console.error(`  [FAIL] ${target.name} 前導概念片渲染異常！`);
      process.exit(1);
    }
  } catch (err) {
    console.error(`  [FAIL] ${target.name} switchChapter(ch_teaser) 崩潰:`, err);
    process.exit(1);
  }

  // 測試常規章節 (ch01)
  try {
    renderedCardsHtml = '';
    context.switchChapter('ch01');
    if (renderedCardsHtml.length > 5000 && renderedCardsHtml.includes('shot-card')) {
      console.log(`  [PASS] 第 01 章 (ch01) 渲染成功！卡片 HTML: ${renderedCardsHtml.length} 字元。`);
    } else {
      console.error(`  [FAIL] ${target.name} 第 01 章渲染異常！`);
      process.exit(1);
    }
  } catch (err) {
    console.error(`  [FAIL] ${target.name} switchChapter(ch01) 崩潰:`, err);
    process.exit(1);
  }

  // 測試格式切換
  try {
    context.switchPromptFormat('subject');
    context.switchPromptFormat('at_picture');
    console.log(`  [PASS] 提示詞格式雙向切換無誤。\n`);
  } catch (err) {
    console.error(`  [FAIL] ${target.name} switchPromptFormat 崩潰:`, err);
    process.exit(1);
  }
});

console.log('====================================================');
console.log('  [ALL PASSED] 雙端工作台 100% 健康運行，杜絕白屏！  ');
console.log('====================================================');
