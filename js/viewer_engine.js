/**
 * Universal Cinematic Workbench Viewer Engine v2.0
 * 零文本、純渲染、高容錯獨立展示引擎
 * 支援多頁式工作台、章節數據動態載入、Prompt 一鍵複製與聲學 Foley 標籤
 */

// 剪貼簿複製
function copyToClipboard(text, btnElement, successMsg) {
  if (!navigator.clipboard) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg || "已複製到剪貼簿！");
    } catch (err) {
      showToast("複製失敗，請手動複製");
    }
    document.body.removeChild(textArea);
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg || "已複製到剪貼簿！");
    if (btnElement) {
      const origText = btnElement.innerText;
      btnElement.innerText = "COPIED!";
      btnElement.classList.add("btn-copied");
      setTimeout(() => {
        btnElement.innerText = origText;
        btnElement.classList.remove("btn-copied");
      }, 1500);
    }
  }).catch(() => {
    showToast("複製失敗，請手動複製");
  });
}

// 懸浮 Toast 提示
function showToast(msg) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.style.cssText = "position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: #0f172a; color: #38bdf8; border: 1px solid #0284c7; padding: 10px 24px; border-radius: 8px; font-size: 13px; font-weight: bold; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.8); pointer-events: none; transition: opacity 0.3s ease; font-family: monospace;";
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.style.opacity = "1";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = "0";
  }, 2200);
}

// 渲染頂部全域導航列
function renderGlobalHeader(activeKey) {
  const header = document.getElementById("global-header");
  if (!header) return;
  header.innerHTML = `
    <div class="header-inner">
      <div class="brand">
        <span class="brand-title">門扉背後：凡人的弒神契約</span>
        <span class="brand-badge">CINEMATIC AI PIPELINE</span>
      </div>
      <nav class="nav-links">
        <a href="index.html" class="nav-item ${activeKey === 'portal' ? 'active' : ''}">中樞門戶</a>
        <a href="workbench_episodes.html" class="nav-item ${activeKey === 'episodes' ? 'active' : ''}">第 1 ~ 10 章分鏡</a>
        <a href="workbench_trailer.html" class="nav-item ${activeKey === 'trailer' ? 'active' : ''}">概念前導片 (12鏡)</a>
        <a href="workbench_assets.html" class="nav-item ${activeKey === 'assets' ? 'active' : ''}">全案核心資產總庫</a>
        <a href="dashboard/index.html" class="nav-item ${activeKey === 'dashboard' ? 'active' : ''}">旗艦總控台</a>
      </nav>
      <div class="header-actions">
        <span class="status-indicator">STANDALONE DECOUPLED V2.0</span>
      </div>
    </div>
  `;
}

// 渲染分鏡鏡頭卡片
function renderShotCard(shot, index) {
  return `
    <div class="shot-card" id="shot-${shot.id}">
      <div class="shot-header">
        <div class="shot-meta">
          <span class="shot-id">${shot.id}</span>
          <span class="shot-type">${shot.type}</span>
          <span class="shot-dur">${shot.dur}</span>
          <span class="shot-cam">${shot.cam || '標準機位'}</span>
        </div>
        <button class="btn-copy-shot" onclick="copyToClipboard(decodeURIComponent(this.getAttribute('data-prompt')), this, '已複製第 ${shot.id} 鏡 Prompt！')" data-prompt="${encodeURIComponent(shot.prompt || shot.body || '')}">複製 PROMPT</button>
      </div>
      <div class="shot-body">
        <div class="shot-desc-label">畫面構圖與視覺調度：</div>
        <div class="shot-desc">${shot.desc || shot.visual || ''}</div>
        <div class="prompt-box">
          <div class="prompt-label">CINEDANCE V4 提示詞約束：</div>
          <pre class="prompt-text">${shot.prompt || shot.body || ''}</pre>
        </div>
        ${shot.audio ? `
          <div class="audio-box">
            <span class="audio-label">FOLEY & 對白：</span>
            <span class="audio-content">${shot.audio}</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}
