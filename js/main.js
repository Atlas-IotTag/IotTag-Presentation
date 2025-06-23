// ============ Render Hotspots =============
function renderHotspots() {
  const bg = document.getElementById("background");
  bg.innerHTML = ""; // Clear old
  const bgRect = bg.getBoundingClientRect();
  hotspotData.forEach((h, i) => {
    const btn = document.createElement("button");
    btn.className = "hotspot";
    btn.setAttribute("tabindex", "0");
    btn.onclick = () => openModal(h);

    // Position hotspot
    const x = h.x * bgRect.width;
    const y = h.y * bgRect.height;
    btn.style.position = "absolute";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;

    // Responsive size
    const size = Math.max(18, Math.min(44, bgRect.width * 0.027));
    btn.style.width = btn.style.height = size + "px";

    if (h.isSpecial) btn.classList.add("red");

    // Icon
    const img = document.createElement('img');
    img.src = 'assets/images/tap.png';
    img.alt = 'Tap';
    img.style.width = img.style.height = "70%";
    btn.appendChild(img);

    bg.appendChild(btn);
  });
}
window.addEventListener('resize', renderHotspots);

// ============ Hamburger Menu =============
function toggleHamburger(forceOpen) {
  const menu = document.getElementById("hamburger-menu");
  if (forceOpen === true) menu.classList.add("open");
  else if (forceOpen === false) menu.classList.remove("open");
  else menu.classList.toggle("open");
}
document.getElementById("hamburger-btn").onclick = () => toggleHamburger();

function renderHamburgerMenuList() {
  const list = document.getElementById("hamburger-menu-list");
  list.innerHTML = "";
  hotspotData.forEach((h, idx) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = h.label;
    a.onclick = function(e) {
      e.preventDefault();
      document.querySelectorAll('.hotspot').forEach(btn => btn.classList.remove("active"));
      list.querySelectorAll('a').forEach(el => el.classList.remove("active"));
      document.querySelectorAll('.hotspot')[idx].classList.add("active");
      document.querySelectorAll('.hotspot')[idx].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
      a.classList.add("active");
      toggleHamburger(false);
    };
    li.appendChild(a);
    list.appendChild(li);
  });
}

// ============ Highlight All =============
function highlightAllHotspots() {
  document.querySelectorAll('.hotspot').forEach(btn => {
    btn.classList.add('highlight-pulse');
    setTimeout(() => btn.classList.remove('highlight-pulse'), 2400);
  });
}

// ============ Modal Logic =============
// ============ Modal Logic =============
let currentMedias = [];
let currentMediaIndex = 0;

function openModal(data) {
  // Chỉ lấy các media có url là file .mp4
  if (Array.isArray(data.medias) && data.medias.length) {
    currentMedias = data.medias.filter(m => {
      if (!m.url) return false;
      const url = m.url.split("?")[0].toLowerCase();
      return url.endsWith(".mp4");
    });
  } else {
    currentMedias = [];
  }
  currentMediaIndex = 0;

  document.getElementById("modal").classList.add("show");
  document.getElementById("modal-overlay").style.display = "block";
  document.getElementById("popup-title").textContent = data.label || "";

  if (currentMedias.length > 0 && currentMedias[0].desc) {
    document.getElementById("popup-desc").innerText = currentMedias[0].desc;
  } else {
    document.getElementById("popup-desc").innerText = "";
  }

  showMediaAtIndex(0);
  renderMediaThumbnails();
}

function showMediaAtIndex(idx) {
  currentMediaIndex = idx;
  const wrapper = document.getElementById("media-wrapper");
  wrapper.innerHTML = "";

  if (!currentMedias.length) {
    wrapper.innerHTML = "<div style='color:gray;padding:2em 0;text-align:center;'>No media available</div>";
    document.getElementById("popup-desc").innerText = "";
    return;
  }

  document.getElementById("popup-desc").innerText = currentMedias[idx].desc || "";

  const fileUrl = currentMedias[idx].url;
  let ext = (fileUrl.split('.').pop() || '').toLowerCase();

  // ONLY PLAY .mp4
  if (ext === "mp4") {
    const video = document.createElement("video");
    video.controls = true;
    video.loop = true; 
    video.poster = currentMedias[idx].thumbImg;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.borderRadius = "8px";
    const source = document.createElement("source");
    source.src = fileUrl;
    source.type = `video/mp4`;
    video.appendChild(source);
    wrapper.appendChild(video);
    setTimeout(() => { video.load(); video.play().catch(()=>{}); }, 50);
  } else {
    wrapper.innerHTML = "<div style='color:gray;padding:2em 0;text-align:center;'>Cannot preview this file. Only MP4 format is supported.</div>";
  }
}

function renderMediaThumbnails() {
  const thumbContainer = document.getElementById('media-thumbnails');
  thumbContainer.innerHTML = ""; // Clear before render

  if (!currentMedias || currentMedias.length <= 1) return;

  for (let i = 0; i < currentMedias.length; ++i) {
    const thumbBtn = document.createElement('button');
    thumbBtn.type = "button";
    thumbBtn.className = "media-thumbnail-btn" + (currentMediaIndex === i ? " active" : "");
    thumbBtn.title = currentMedias[i].name || `Media ${i+1}`;

    let thumbImg = currentMedias[i].thumbImg;
    const imgEl = document.createElement('img');
    imgEl.src = thumbImg;
    imgEl.alt = currentMedias[i].name || `Media ${i+1}`;
    imgEl.className = "media-thumb-img";
    thumbBtn.appendChild(imgEl);

    // Caption
    if (currentMedias[i].desc) {
      const cap = document.createElement('div');
      cap.textContent = currentMedias[i].name;
      cap.className = "media-thumb-caption";
      thumbBtn.appendChild(cap);
    }

    thumbBtn.onclick = (e) => {
      showMediaAtIndex(i);
      renderMediaThumbnails();
    };

    thumbContainer.appendChild(thumbBtn);
  }
}

// Đóng modal và clear
function closeModal() {
  document.getElementById("modal").classList.remove("show");
  document.getElementById("modal-overlay").style.display = "none";
  document.getElementById("media-wrapper").innerHTML = "";
  currentMedias = [];
  currentMediaIndex = 0;
}

// ============= Fullscreen Button =============
function toggleFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  } else {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
  }
}
document.addEventListener("fullscreenchange", switchFSIcon, false);
document.addEventListener("webkitfullscreenchange", switchFSIcon, false);
document.addEventListener("mozfullscreenchange", switchFSIcon, false);
document.addEventListener("MSFullscreenChange", switchFSIcon, false);

function switchFSIcon() {
  const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
  const icon = document.getElementById('fullscreen-icon');
  if (!icon) return;
  if (isFull) {
    icon.innerHTML = `<img src="assets/images/collapse.png" alt="Exit Fullscreen">`;
  } else {
    icon.innerHTML = `<img src="assets/images/expand.png" alt="Fullscreen">`;
  }
}

// ============= On Load ============
window.onload = function() {
  renderHotspots();
  renderHamburgerMenuList();
};
