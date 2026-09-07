# AI 影視與漫劇可攜式架構站 (AI Film Production Portable Framework)

本架構站為獨立、可跨電腦攜帶的工業級 AI 漫劇與影視製作範本系統。
透過將「UI 表現層（HTML/CSS/JS）」與「劇情資料庫（JSON）」徹底解耦，解決在不同電腦或新專案中重複硬編碼輸出萬行 HTML 導致的模型中斷與語法損壞問題。

---

## 目錄結構

```text
AI影視架構站/
├── README.md                     # 本操作手冊與跨電腦移植 SOP
├── PROD_SYSTEM_RULE.md           # 核心工程規範 (資產優先、三視圖、GEO空間、TTS參數)
├── schema/
│   └── project_data_schema.json  # 標準資料字典 (約束 AI 輸出的 JSON 格式)
└── template/                     # 通用總控台 Web UI (純前端 SPA)
    ├── index.html                # 總控台入口 (雙擊即開，支援深色模式與各分頁)
    ├── css/
    │   └── dashboard.css         # 暗黑科技工業級樣式表
    ├── js/
    │   └── dashboard_engine.js   # 動態渲染引擎 (分鏡表、風格混合器、複製提示詞)
    └── data/
        ├── project_data.json     # 專案資料檔 (標準 JSON 格式)
        └── project_data.js       # 本地離線載入包裝 (確保 file:// 雙擊不受 CORS 阻擋)
```

---

## 跨電腦移植與使用 SOP

當你在另一台新電腦、或要啟動全新的小說/劇本專案時，依照以下步驟操作：

### 步驟 1：複製架構站
將 `AI影視架構站/` 資料夾整包複製到新電腦或新專案工作目錄下。

### 步驟 2：提供文本與提示詞給 AI
將你的小說、劇本或分鏡構想貼給 AI（無論使用 Antigravity、Claude Code、Cursor 或 Web 端的 Claude / ChatGPT），並附上以下標準指令：

> **AI 提示詞範本（一鍵複製）：**
> ```text
> 你是一位工業級 AI 影視製作導演。請依據隨附的 [PROD_SYSTEM_RULE.md] 規範與 [schema/project_data_schema.json] 資料格式，分析我提供的劇本/小說文本：
> 1. 提取核心角色，輸出完整 Bible 看板 Prompt、三視圖隔離 Prompt、三色盤與三段式聲音參數。
> 2. 提取主要場景，建立鎖定軸線的 GEO SPATIAL LAYOUT 文字地圖與基準 Prompt。
> 3. 將劇情切分為分鏡鏡頭，產出符合 Seedance / Kling 標準的視覺 Prompt、運鏡機位、畫面動作與台詞配音。
> 4. 最後將所有資料完整輸出為標準 JSON 格式（符合 project_data_schema.json）。
> 
> 【小說/劇本文本如下】：
> （此處貼上你的小說、大綱或劇本文本）
> ```

### 步驟 3：將 AI 產出的資料放入模板
有兩種極簡方式載入新資料：

- **方式 A（免重開，直接瀏覽器載入）**：
  1. 雙擊打開 `template/index.html`。
  2. 點擊右上角「匯入 / 切換專案 JSON」按鈕。
  3. 直接上傳 AI 輸出的 `.json` 檔案，或將 JSON 代碼貼入文字框後點擊「確認載入」。
  4. 頁面將立即無縫渲染出全新的角色看板、場景地圖與分鏡提示詞庫！

- **方式 B（固化為專案預設檔）**：
  1. 將 AI 輸出的內容覆蓋存入 `template/data/project_data.json`。
  2. 同步更新 `template/data/project_data.js`（在開頭加上 `window.PROJECT_DATA = `，結尾加上 `;`）。
  3. 任何電腦上直接雙擊 `template/index.html` 即可開箱預覽。

---

## 核心優勢

1. **零程式碼污染**：新專案只需生成輕量的純資料 JSON，不再需要 AI 生成數萬行 HTML/CSS，杜絕標籤缺失與樣式崩潰。
2. **多風格動態融合**：總控台內建「視覺風格混合器（Style Drawer）」，點擊賽璐珞日漫、暗黑史詩、賽博龐克等風格時，所有分鏡提示詞會自動融合該風格前綴，複製即可直接送入 Midjourney / Flux / Kling / Seedance 產出。
3. **離線雙擊即用**：內建 `project_data.js` 載入機制，不強制要求 Node.js 或 Python 本地伺服器，在任何無網路或離線電腦上雙擊 `index.html` 均可正常運作。
