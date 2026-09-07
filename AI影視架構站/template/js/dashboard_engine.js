/**
 * 通用 AI 影視與漫劇全流程總控台 - 核心渲染引擎
 * Universal AI Film & Comic-Drama Dashboard Engine
 */

let projectData = null;
let currentEpIndex = 0;
let currentStyleKey = "default";
let currentStylePrefix = "";

// 內建主流視覺風格字典 (可透過 project_data.json 自定義擴充)
const defaultStylePresets = {
  "pure-2d-anime": {
    name: "純 2D 賽璐珞日漫",
    category: "anime",
    prefix: "Pure 2D Japanese anime cel animation style, crisp line art, distinct cel-shading, vibrant cinematic aesthetic, keyframe anime still, Ufotable and MAPPA quality, expressive dynamic contours, no 3D CGI look, highly aesthetic 2D illustration --ar 16:9 --style raw",
    description: "極致日系手繪賽璐珞線條與高對比色塊"
  },
  "dark-fantasy-realism": {
    name: "黑魂暗黑史詩寫實",
    category: "cinematic",
    prefix: "Dark fantasy cinematic realism, gritty textures, cold desaturated color palette, atmospheric volumetric fog, directional harsh key light, cinematic 8k film still, ARRI Alexa LF, 35mm anamorphic lens, raw authentic cinematography --ar 16:9 --style raw",
    description: "高維尺度壓制、冷峻顆粒感與真實電影光學"
  },
  "cyberpunk-neon": {
    name: "賽博龐克高反差霓虹",
    category: "cinematic",
    prefix: "Cyberpunk dystopian cinematic film still, dense holographic neon glare, wet asphalt reflections, volumetric steam, anamorphic lens flare, Blade Runner 2049 aesthetic, high contrast dark lighting --ar 16:9 --style raw",
    description: "濕漉瀝青反光、高彩度霓虹與體積霧"
  },
  "chinese-ink-xianxia": {
    name: "國風水墨仙俠史詩",
    category: "traditional",
    prefix: "Traditional Chinese ink wash painting aesthetic blended with modern cinematic realism, ethereal flowing silk, misty towering peaks, restrained monochrome palette with vermilion accents, poetic epic atmosphere --ar 16:9 --style raw",
    description: "東方水墨留白、飄逸長卷與朱紅點綴"
  }
};

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  initProjectData();
  setupEventListeners();
});

// 資料載入流程 (支援 window.PROJECT_DATA 或 fetch)
function initProjectData() {
  if (window.PROJECT_DATA && typeof window.PROJECT_DATA === "object") {
    loadData(window.PROJECT_DATA);
  } else {
    // 嘗試 fetch 本地 json (若在 local server 下)
    fetch("data/project_data.json")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => loadData(data))
      .catch(err => {
        console.warn("無法自動透過 fetch 載入 project_data.json，可能為本地 file:// 協議。請使用頂部載入按鈕或確認 project_data.js 已引入。", err);
      });
  }
}

// 核心載入並驅動渲染
function loadData(data) {
  projectData = data;
  
  // 設定風格
  const presets = Object.assign({}, defaultStylePresets, projectData.style_presets || {});
  projectData._styles = presets;
  
  const defaultKey = projectData.project_meta?.default_style || "pure-2d-anime";
  currentStyleKey = presets[defaultKey] ? defaultKey : Object.keys(presets)[0];
  currentStylePrefix = presets[currentStyleKey]?.prefix || "";

  renderHeader();
  renderStyleDrawer();
  renderOverview();
  renderEpisodesBar();
  renderProductionPane();
  renderCharactersPane();
  renderEnvironmentsPane();
}

// 頂部 Header 資訊渲染
function renderHeader() {
  const meta = projectData.project_meta || {};
  document.getElementById("project-title").innerText = meta.title || "AI 漫劇總控台";
  document.getElementById("project-subtitle").innerText = meta.subtitle || "工業級全流程製作系統";
  document.getElementById("project-genre").innerText = meta.genre || "未定";
  document.getElementById("current-style-name").innerText = projectData._styles[currentStyleKey]?.name || "預設風格";
}

// 風格抽屜渲染
function renderStyleDrawer() {
  const container = document.getElementById("style-grid-container");
  if (!container) return;
  container.innerHTML = "";

  Object.entries(projectData._styles).forEach(([key, item]) => {
    const card = document.createElement("div");
    card.className = `style-card ${key === currentStyleKey ? "active" : ""}`;
    card.onclick = () => selectStyle(key);
    card.innerHTML = `
      <div class="style-card-name">${item.name}</div>
      <div class="style-card-desc">${item.description || ""}</div>
    `;
    container.appendChild(card);
  });
}

// 風格切換
function selectStyle(styleKey) {
  currentStyleKey = styleKey;
  currentStylePrefix = projectData._styles[styleKey]?.prefix || "";
  renderHeader();
  renderStyleDrawer();
  renderProductionPane(); // 重新渲染分鏡中的動態 Prompt
  showToast(`已切換為：${projectData._styles[styleKey]?.name}`);
}

// 專案總覽 (Overview Pane)
function renderOverview() {
  const meta = projectData.project_meta || {};
  const container = document.getElementById("overview-content");
  if (!container) return;

  const totalShots = (projectData.episodes || []).reduce((acc, ep) => acc + (ep.shots ? ep.shots.length : 0), 0);
  const totalChars = (projectData.characters || []).length;
  const totalEnvs = (projectData.environments || []).length;

  container.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 24px;">
      <div class="shot-card">
        <div class="field-label">作品總集數</div>
        <div style="font-size: 24px; font-weight: 700; color: var(--accent-sky);">${projectData.episodes?.length || 0} 集</div>
      </div>
      <div class="shot-card">
        <div class="field-label">已建檔分鏡總數</div>
        <div style="font-size: 24px; font-weight: 700; color: var(--accent-emerald);">${totalShots} 鏡頭</div>
      </div>
      <div class="shot-card">
        <div class="field-label">角色資產庫</div>
        <div style="font-size: 24px; font-weight: 700; color: var(--accent-purple);">${totalChars} 位</div>
      </div>
      <div class="shot-card">
        <div class="field-label">場景空間資產</div>
        <div style="font-size: 24px; font-weight: 700; color: var(--accent-bronze);">${totalEnvs} 個</div>
      </div>
    </div>

    <div class="shot-card">
      <div class="field-label" style="margin-bottom: 6px;">故事大綱與企劃核心 (Logline)</div>
      <div class="field-value" style="font-size: 14px; line-height: 1.8;">
        ${meta.logline || "尚未填寫故事大綱。"}
      </div>
    </div>
  `;
}

// 集數切換工具列
function renderEpisodesBar() {
  const container = document.getElementById("episodes-buttons");
  if (!container) return;
  container.innerHTML = "";

  (projectData.episodes || []).forEach((ep, idx) => {
    const btn = document.createElement("button");
    btn.className = `ep-btn ${idx === currentEpIndex ? "active" : ""}`;
    btn.innerText = `第 ${ep.ep_num || (idx + 1)} 集 · ${ep.title || "未命名"}`;
    btn.onclick = () => {
      currentEpIndex = idx;
      renderEpisodesBar();
      renderProductionPane();
    };
    container.appendChild(btn);
  });
}

// 製作工作台 (Production Pane: 分鏡與劇本)
function renderProductionPane() {
  const ep = (projectData.episodes || [])[currentEpIndex];
  const shotsContainer = document.getElementById("shots-list-container");
  const scriptContainer = document.getElementById("screenplay-container");

  if (!ep) {
    if (shotsContainer) shotsContainer.innerHTML = `<div style="color: var(--text-muted);">無集數資料</div>`;
    return;
  }

  // 劇本文字
  if (scriptContainer) {
    scriptContainer.innerHTML = `
      <div class="shot-card">
        <div class="field-label" style="margin-bottom: 8px;">第 ${ep.ep_num} 集劇本文本：${ep.title}</div>
        <div style="white-space: pre-wrap; font-size: 13.5px; line-height: 1.8; color: #cbd5e1;">${ep.screenplay || "此集尚未填寫劇本。"}</div>
      </div>
    `;
  }

  // 分鏡卡片
  if (shotsContainer) {
    shotsContainer.innerHTML = "";
    (ep.shots || []).forEach(shot => {
      // 動態組合風格前綴
      const fullPrompt = currentStylePrefix ? `${currentStylePrefix}, ${shot.prompt}` : shot.prompt;
      
      const card = document.createElement("div");
      card.className = "shot-card";
      card.innerHTML = `
        <div class="shot-header">
          <div class="shot-meta">
            <span class="badge badge-shot">${shot.shot_num || "鏡頭"}</span>
            <span class="badge badge-primary">${shot.camera || "鏡頭機位"}</span>
            ${(shot.characters || []).map(c => `<span class="badge badge-purple">${c}</span>`).join("")}
          </div>
          <button class="btn-copy" onclick="copyText('${escapeForAttr(fullPrompt)}')">複製視覺 Prompt</button>
        </div>

        <div class="shot-body">
          <div class="shot-field">
            <div class="field-label">畫面物理動作與阻力調度</div>
            <div class="field-value">${shot.action || ""}</div>
          </div>

          ${shot.dialogue ? `
          <div class="shot-field">
            <div class="field-label">台詞與表演情緒</div>
            <div class="field-value" style="color: #38bdf8; font-weight: 500;">「${shot.dialogue}」</div>
          </div>` : ""}

          <div class="shot-field">
            <div class="field-label">影像/影片生成提示詞 (已融合當前視覺風格)</div>
            <div class="prompt-box">${fullPrompt}</div>
          </div>

          ${shot.voice_prompt ? `
          <div class="shot-field">
            <div class="field-label">TTS 聲學配音提示詞 & 參數</div>
            <div class="prompt-box" style="border-color: rgba(168, 85, 247, 0.3); color: #d8b4fe;">${shot.voice_prompt} ${shot.audio_params ? `[${shot.audio_params}]` : ""}</div>
          </div>` : ""}
        </div>
      `;
      shotsContainer.appendChild(card);
    });
  }
}

// 角色看板 (Characters Pane)
function renderCharactersPane() {
  const bibleContainer = document.getElementById("characters-bible-container");
  const turnaroundContainer = document.getElementById("characters-turnaround-container");
  const voiceContainer = document.getElementById("characters-voice-container");

  const characters = projectData.characters || [];

  if (bibleContainer) {
    bibleContainer.innerHTML = characters.map(c => `
      <div class="bible-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:16px; color:#fff;">${c.name} <span style="font-size:12px; color:var(--text-secondary);">(${c.role})</span></h3>
          <span class="badge badge-bronze">${c.archetype || "核心角色"}</span>
        </div>

        <div>
          <div class="field-label">三色盤錨定 (60-30-10)</div>
          <div class="palette-bar">
            ${(c.color_palette || []).map(color => `<div class="palette-swatch" style="background:${color};" title="${color}"></div>`).join("")}
          </div>
        </div>

        <div>
          <div class="field-label">主表演行為檔案 (Master Acting Profile)</div>
          <div style="font-size:12px; color:#cbd5e1; line-height:1.5; margin-top:4px;">${c.master_profile || "尚未建立"}</div>
        </div>

        <div>
          <div class="field-label" style="display:flex; justify-content:space-between; align-items:center;">
            <span>設定看板提示詞 (Bible Sheet)</span>
            <button class="btn-copy" onclick="copyText('${escapeForAttr(c.bible_prompt)}')">複製</button>
          </div>
          <div class="prompt-box" style="margin-top:4px;">${c.bible_prompt}</div>
        </div>
      </div>
    `).join("");
  }

  if (turnaroundContainer) {
    turnaroundContainer.innerHTML = characters.map(c => `
      <div class="bible-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:15px; color:#fff;">${c.name} · 三視圖隔離規格</h3>
          <button class="btn-copy" onclick="copyText('${escapeForAttr(c.turnaround_prompt || c.bible_prompt)}')">複製三視圖 Prompt</button>
        </div>
        <div class="prompt-box" style="margin-top:6px;">${c.turnaround_prompt || c.bible_prompt}</div>
      </div>
    `).join("");
  }

  if (voiceContainer) {
    voiceContainer.innerHTML = characters.map(c => {
      const v = c.voice || {};
      return `
        <div class="bible-card">
          <h3 style="font-size:15px; color:#fff; margin-bottom:6px;">${c.name} · 聲音固定字典與參數</h3>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:8px; margin-bottom:10px;">
            <div style="background:#070b12; padding:8px; border-radius:4px; font-size:11px;">
              <span style="color:var(--text-muted);">CFG:</span> <b style="color:#38bdf8;">${v.cfg || 2.5}</b>
            </div>
            <div style="background:#070b12; padding:8px; border-radius:4px; font-size:11px;">
              <span style="color:var(--text-muted);">Temperature:</span> <b style="color:#38bdf8;">${v.temperature || 0.65}</b>
            </div>
            <div style="background:#070b12; padding:8px; border-radius:4px; font-size:11px;">
              <span style="color:var(--text-muted);">Steps:</span> <b style="color:#38bdf8;">${v.steps || 32}</b>
            </div>
          </div>
          <div class="field-label">聲學設計公式 (音色 / 風格 / 基調)</div>
          <div class="prompt-box" style="color:#e2e8f0; margin-top:4px;">
1. 音色: ${v.timbre || "標準清晰"}\n2. 風格: ${v.style || "語速穩定"}\n3. 基調: ${v.emotion || "冷靜沉穩"}
          </div>
        </div>
      `;
    }).join("");
  }
}

// 場景環境看板 (Environments Pane)
function renderEnvironmentsPane() {
  const container = document.getElementById("environments-list-container");
  if (!container) return;

  const envs = projectData.environments || [];
  container.innerHTML = envs.map(env => `
    <div class="bible-card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="font-size:16px; color:#fff;">${env.name}</h3>
        <span class="badge badge-emerald">${env.category || "主要場景"}</span>
      </div>

      <div>
        <div class="field-label">GEO SPATIAL LAYOUT (空間幾何錨定地圖)</div>
        <div class="prompt-box" style="border-color: rgba(16, 185, 129, 0.3); color: #a7f3d0; margin-top:4px;">${env.geo_layout}</div>
      </div>

      <div>
        <div class="field-label" style="display:flex; justify-content:space-between; align-items:center;">
          <span>場景基準圖提示詞</span>
          <button class="btn-copy" onclick="copyText('${escapeForAttr(env.prompt)}')">複製</button>
        </div>
        <div class="prompt-box" style="margin-top:4px;">${env.prompt}</div>
      </div>
    </div>
  `).join("");
}

// 監聽器配置 (標籤頁切換、風格抽屜、資料導入彈窗)
function setupEventListeners() {
  // 主分頁切換
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".main-tab-pane").forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const targetPane = document.getElementById(`pane-${targetId}`);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // 子分頁切換
  document.querySelectorAll(".sub-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".main-tab-pane");
      parent.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
      parent.querySelectorAll(".sub-tab-pane").forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetSubId = btn.getAttribute("data-subtab");
      const targetSubPane = document.getElementById(`subpane-${targetSubId}`);
      if (targetSubPane) targetSubPane.classList.add("active");
    });
  });

  // 風格抽屜切換
  const drawerBtn = document.getElementById("toggle-style-drawer");
  const drawer = document.getElementById("style-drawer");
  if (drawerBtn && drawer) {
    drawerBtn.addEventListener("click", () => {
      drawer.classList.toggle("open");
    });
  }

  // 關閉風格抽屜
  const closeDrawerBtn = document.getElementById("close-style-drawer");
  if (closeDrawerBtn && drawer) {
    closeDrawerBtn.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  }

  // 匯入資料彈窗
  const importBtn = document.getElementById("btn-open-import");
  const modal = document.getElementById("import-modal");
  const closeModal = document.getElementById("btn-close-modal");
  const confirmImport = document.getElementById("btn-confirm-import");
  const fileInput = document.getElementById("json-file-input");

  if (importBtn && modal) {
    importBtn.addEventListener("click", () => modal.classList.add("open"));
  }
  if (closeModal && modal) {
    closeModal.addEventListener("click", () => modal.classList.remove("open"));
  }

  // 檔案選取直接讀取
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          loadData(parsed);
          modal.classList.remove("open");
          showToast("專案資料載入成功！");
        } catch (err) {
          alert("JSON 格式錯誤：" + err.message);
        }
      };
      reader.readAsText(file);
    });
  }

  // 貼上 JSON 文本載入
  if (confirmImport && modal) {
    confirmImport.addEventListener("click", () => {
      const text = document.getElementById("import-json-text").value.trim();
      if (!text) return;
      try {
        const parsed = JSON.parse(text);
        loadData(parsed);
        modal.classList.remove("open");
        showToast("專案資料載入成功！");
      } catch (err) {
        alert("JSON 格式錯誤：" + err.message);
      }
    });
  }
}

// 輔助工具：複製提示詞與 Toast 通知
function copyText(text) {
  if (!navigator.clipboard) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showToast();
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  }).catch(err => {
    console.error("複製失敗：", err);
  });
}

function showToast(msg = "提示詞已複製至剪貼簿！") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function escapeForAttr(str) {
  if (!str) return "";
  return str.replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/\n/g, "\\n");
}
