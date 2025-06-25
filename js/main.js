// ============ Render Hotspots =============
const FONT_SIZE = 16; // Base font size for calculations
const REFERENCE_WIDTH = 2560; // Reference background div width
const REFERENCE_HEIGHT = 1600; // Reference background div height

// Calculate scale factors based on current background div vs reference background div
function getScaleFactors() {
  const bg = document.getElementById("background");
  if (!bg) {
    return { scaleX: 1, scaleY: 1, uniformScale: 1 };
  }

  const bgRect = bg.getBoundingClientRect();
  const currentWidth = bgRect.width;
  const currentHeight = bgRect.height;
  
  const scaleX = currentWidth / REFERENCE_WIDTH;
  const scaleY = currentHeight / REFERENCE_HEIGHT;

  console.log(`Background Scale Factors - X: ${scaleX}, Y: ${scaleY}`);
  
  // Use the smaller scale to maintain aspect ratio
  const uniformScale = Math.min(scaleX, scaleY);
  
  return {
    scaleX,
    scaleY,
    uniformScale
  };
}

function renderHotspots() {
  const bg = document.getElementById("background");
  bg.innerHTML = "";
  const bgRect = bg.getBoundingClientRect();

  const scales = getScaleFactors();
  
  // Scale base dimensions
  const baseCardWidth = bgRect.width * 0.08;  
  const baseCardHeight = bgRect.height * 0.04;
  const baseIconSize = baseCardHeight * 0.6;
  const scaledFontSize = FONT_SIZE * scales.uniformScale;

  hotspotData.forEach((h, i) => {
    const btn = document.createElement("button");
    btn.className = "hotspot";
    btn.setAttribute("tabindex", "0");
    btn.onclick = () => openModal(h);
    
    // Calculate scaled position - no need for getDynamicPosition anymore
    const scaledX = h.x;
    const scaledY = h.y;
    
    // Use position absolute with percentage and transform for center positioning
    btn.style.position = "absolute";
    btn.style.left = `${scaledX * 100}%`;
    btn.style.top = `${scaledY * 100}%`;
    btn.style.transform = "translate(-50%, -50%)";
    btn.style.transformOrigin = "left center";
    btn.style.zIndex = "10";

    // Responsive size
    btn.style.width = baseCardWidth + "px";
    btn.style.height = baseCardHeight + "px";
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.padding = "0";
    btn.style.cursor = "pointer";

    // Card container
    const card = document.createElement("div");
    card.className = "alert-card";
    card.style.width = "100%";
    card.style.height = "100%";
    card.style.fontSize = scaledFontSize + "px";

    // Icon box
    const iconBox = document.createElement("div");
    iconBox.className = "alert-icon-box";
    iconBox.style.width = baseCardHeight + "px";
    iconBox.style.height = "100%";
    iconBox.style.display = "flex";
    iconBox.style.alignItems = "center";
    iconBox.style.justifyContent = "center";
    iconBox.style.background = "#249ad8";

    const img = document.createElement('img');
    img.src = h.icon;
    img.alt = "icon";
    img.style.width = img.style.height = baseIconSize + "px";
    img.style.objectFit = "contain";
    iconBox.appendChild(img);

    // Text content
    const content = document.createElement("div");
    content.className = "alert-content";
    content.style.flex = "1";
    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.justifyContent = "center";
    content.style.textAlign = "center";
    content.style.fontWeight = "600";
    content.style.overflowWrap = "break-word";
    content.style.whiteSpace = "normal";
    content.style.wordBreak = "break-word";
    content.style.padding = `0px ${10 * scales.uniformScale}px`;
    content.textContent = h.label || "";

    // Card structure: icon left, text right
    card.appendChild(iconBox);
    card.appendChild(content);

    btn.appendChild(card);
    bg.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hotspot').forEach(btn => {
    btn.addEventListener('click', function() {
      btn.setAttribute('data-state', 'clicked');
    });
  });
});

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
let currentMedias = [];
let currentMediaIndex = 0;

function openModal(data) {
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

// Add window resize event listener to re-render hotspots when screen size changes
window.addEventListener('resize', function() {
  renderHotspots();
});
