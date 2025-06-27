// ============ Render Hotspots =============
const FONT_SIZE = 16; // Base font size for calculations
const REFERENCE_WIDTH = 2560; // Reference background div width
const REFERENCE_HEIGHT = 1600; // Reference background div height
const IMAGE_ASPECT_RATIO = 1920 / 1084;


// HÀM MỚI: Tính toán kích thước và vị trí thực của ảnh nền
function getVisibleImageDimensions(container) {
  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;
  const containerAspectRatio = containerWidth / containerHeight;

  let imageWidth, imageHeight, offsetX, offsetY;

  if (containerAspectRatio > IMAGE_ASPECT_RATIO) {
    // Container rộng hơn ảnh -> Chiều cao quyết định kích thước
    // Ảnh sẽ được căn giữa theo chiều ngang
    imageHeight = containerHeight;
    imageWidth = imageHeight * IMAGE_ASPECT_RATIO;
    offsetX = (containerWidth - imageWidth) / 2;
    offsetY = 0;
  } else {
    // Container cao hơn ảnh -> Chiều rộng quyết định kích thước
    // Ảnh sẽ được căn giữa theo chiều dọc
    imageWidth = containerWidth;
    imageHeight = imageWidth / IMAGE_ASPECT_RATIO;
    offsetX = 0;
    offsetY = (containerHeight - imageHeight) / 2;
  }

  return {
    width: imageWidth,
    height: imageHeight,
    offsetX: offsetX,
    offsetY: offsetY,
  };
}

// Calculate scale factors based on current background div vs reference background div
function getScaleFactors() {
  const bg = document.getElementById("background");
  if (!bg) {
    return { scaleX: 1, scaleY: 1, uniformScale: 1 };
  }

  // Sử dụng hàm mới để lấy kích thước ảnh thật
  const imageRect = getVisibleImageDimensions(bg);
  const currentWidth = imageRect.width;
  const currentHeight = imageRect.height;

  // Tính toán scale dựa trên kích thước tham chiếu
  const scaleX = currentWidth / REFERENCE_WIDTH;
  const scaleY = currentHeight / REFERENCE_HEIGHT;

  console.log(`Visible Image Scale Factors - X: ${scaleX}, Y: ${scaleY}`);

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

  // SỬ DỤNG HÀM MỚI để lấy kích thước và offset của ảnh thật
  const imageRect = getVisibleImageDimensions(bg);
  const scales = getScaleFactors();

  // Scale kích thước card dựa trên kích thước ảnh thật
  const baseCardWidth = imageRect.width * 0.08;
  const baseCardHeight = imageRect.height * 0.04;
  const baseIconSize = baseCardHeight * 0.6;
  const scaledFontSize = FONT_SIZE * scales.uniformScale;

  hotspotData.forEach((h, i) => {
    const btn = document.createElement("button");
    btn.className = "hotspot";
    
    // Check if hotspot is disabled
    if (h.isDisabled) {
      btn.classList.add('disabled');
      btn.style.pointerEvents = 'none';
      btn.style.cursor = 'default';
      btn.setAttribute("tabindex", "-1");
    } else {
      btn.classList.add('highlight-pulse');
      btn.setAttribute("tabindex", "0");
      btn.onclick = () => openModal(h);
    }

    // TÍNH TOÁN VỊ TRÍ MỚI DỰA TRÊN KÍCH THƯỚC VÀ OFFSET CỦA ẢNH THẬT
    // Tọa độ (h.x, h.y) là theo tỷ lệ (0 đến 1)
    const posX = imageRect.offsetX + (h.x * imageRect.width);
    const posY = imageRect.offsetY + (h.y * imageRect.height);

    // Vị trí tuyệt đối bằng pixel
    btn.style.position = "absolute";
    // Chúng ta không dùng % nữa, mà dùng pixel tính toán được
    btn.style.left = `${posX}px`;
    btn.style.top = `${posY}px`;
    btn.style.transform = "translate(-50%, -50%)"; // Vẫn giữ để căn tâm hotspot
    btn.style.zIndex = "10";

    // Kích thước co giãn
    btn.style.width = baseCardWidth + "px";
    btn.style.height = baseCardHeight + "px";
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.padding = "0";
    btn.style.cursor = "pointer";

    // Phần còn lại của việc tạo card không thay đổi
    const card = document.createElement("div");
    card.className = "alert-card";
    card.style.width = "100%";
    card.style.height = "100%";
    card.style.fontSize = scaledFontSize + "px";

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

    const content = document.createElement("div");
    if (h.label === 'Fall Detection SOS' || h.label === 'Equipment Inspection' || h.label === 'Manrider Occupants ID' || h.label === 'Personnel Safety Tracking' || h.label === 'Safety Inspections' || h.label === 'Refuge Chamber' || h.label === 'Leadership Tools')
      content.style.color = "white"
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

    card.appendChild(iconBox);
    card.appendChild(content);

    btn.appendChild(card);
    bg.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hotspot').forEach(btn => {
    btn.addEventListener('click', function () {
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

// Add click handlers for new buttons
document.getElementById("contact-us-btn").onclick = () => {
  const contactData = {
    label: "Contact Us",
    isContactUs: true,
    qrImage: "assets/images/qr-code-dallas.png"
  };
  openModal(contactData);
};

document.getElementById("info-pack-btn").onclick = () => {
  window.open("https://www.dropbox.com/scl/fi/x49iax4maggucd1on5akx/iottag_TotalSafety.pdf?rlkey=yoaio0sbpfkbw1meqn51m8sfi&e=1&st=k1m3dky2&dl=0", "_blank");
};

function renderHamburgerMenuList() {
  const list = document.getElementById("hamburger-menu-list");
  list.innerHTML = "";

  // Render regular hotspot items (filtered)
  hotspotData
    .filter(h => h.label !== "Segment Erector Safe Zone") // Filter out Segment Erector Safe Zone
    .forEach((h, idx) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = h.label;
    
    // Check if hotspot is disabled
    if (h.isDisabled) {
      a.style.opacity = "0.6";
      a.style.pointerEvents = "none";
      a.style.cursor = "default";
      a.classList.add("disabled");
    } else {
      a.onclick = function (e) {
        e.preventDefault();
        // Open modal for the clicked item
        openModal(h);
        // Close the hamburger menu
        toggleHamburger(false);
      };
    }
    
    li.appendChild(a);
    list.appendChild(li);
  });
}

// ============ Modal Logic =============
let currentMedias = [];
let currentMediaIndex = 0;

function openModal(data) {
  // Check if this is Contact Us modal
  const popupDesc = document.getElementById("popup-desc");

  if (data.isContactUs) {
    currentMedias = [];
    currentMediaIndex = 0;
    
    document.getElementById("modal").classList.add("show");
    document.getElementById("modal-overlay").style.display = "block";
    document.getElementById("popup-title").textContent = data.label || "";
    document.getElementById("popup-desc").innerText = "Scan the QR code to get in touch with us";
    
    // Show QR code image
    const wrapper = document.getElementById("media-wrapper");
    wrapper.innerHTML = "";
    wrapper.style.background = "transparent"; // Remove dark background for QR code

    // Show QR code image
    popupDesc.style.textAlign = "center"; // Remove dark background for QR code
    
    const img = document.createElement("img");
    img.src = data.qrImage;
    img.alt = "Contact QR Code";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";
    img.style.borderRadius = "8px";
    wrapper.appendChild(img);
    
    // Clear thumbnails for contact us
    document.getElementById('media-thumbnails').innerHTML = "";
    return;
  } else {
    // Show QR code image
    popupDesc.style.textAlign = "left"; // Remove dark background for QR code
  }
  
  // Original modal logic for regular items
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

  // Reset background for regular modals
  const wrapper = document.getElementById("media-wrapper");
  wrapper.style.background = "#222";

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
    setTimeout(() => { video.load(); video.play().catch(() => { }); }, 50);
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
    thumbBtn.title = currentMedias[i].name || `Media ${i + 1}`;

    let thumbImg = currentMedias[i].thumbImg;
    const imgEl = document.createElement('img');
    imgEl.src = thumbImg;
    imgEl.alt = currentMedias[i].name || `Media ${i + 1}`;
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

// ============ Splash Popup Functionality =============
let currentSlide = 0;
const splashSlides = [
  'assets/images/splash/first-screen.png',
  'assets/images/splash/second-screen.png'
];

// Show splash popup on page load
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader and show splash
  hideLoader();
  showWelcomeMessage();
});

function showSplash() {
  const splashOverlay = document.getElementById('splash-overlay');
  if (splashOverlay) {
    splashOverlay.classList.remove('hidden');
    currentSlide = 0;
    updateSplashContent();
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleSplashKeyDown);
    
    // Focus on the modal for accessibility
    const splashModal = splashOverlay.querySelector('.splash-modal');
    if (splashModal) {
      splashModal.focus();
    }
  }
}

function closeSplash() {
  const splashOverlay = document.getElementById('splash-overlay');
  if (splashOverlay) {
    splashOverlay.classList.add('hidden');
    
    // Remove keyboard navigation
    document.removeEventListener('keydown', handleSplashKeyDown);
    
    // Show welcome message after splash closes
    setTimeout(() => {
      showWelcomeMessage();
    }, 300);
  }
}

function goToNextSlide() {
  if (currentSlide < splashSlides.length - 1) {
    currentSlide++;
    updateSplashContent();
  } else {
    // If on last slide and "Close" button is clicked
    closeSplash();
  }
}

function goToPreviousSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSplashContent();
  }
}

function updateSplashContent() {
  const splashImage = document.getElementById('splash-image');
  const backBtn = document.getElementById('splash-back-btn');
  const nextBtn = document.getElementById('splash-next-btn');
  
  if (splashImage) {
    splashImage.src = splashSlides[currentSlide];
  }
  
  // Update back button state
  if (backBtn) {
    backBtn.disabled = currentSlide === 0;
  }
  
  // Update next button text and style
  if (nextBtn) {
    if (currentSlide === splashSlides.length - 1) {
      nextBtn.textContent = 'Close';
      nextBtn.classList.add('close-btn');
    } else {
      nextBtn.textContent = 'Next';
      nextBtn.classList.remove('close-btn');
    }
  }
}

function showWelcomeMessage() {
  const welcomeAlert = document.getElementById('welcome-alert');
  if (welcomeAlert) {
    // 1. A short delay before showing the alert for a smoother feel
    setTimeout(() => {
      welcomeAlert.classList.add('show');
    }, 500); // 0.5 second delay

    // 2. Hide the alert after a few seconds
    setTimeout(() => {
      welcomeAlert.classList.remove('show');
    }, 6000); // Alert is visible for 5.5 seconds (6000 - 500)
  }
}

// ============ Loader Functions ============
function hideLoader() {
  const loader = document.getElementById('loader-overlay');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
}

// ============ On Load ============
window.onload = function () {
  renderHotspots();
  renderHamburgerMenuList();
  // Loader and splash are now handled by DOMContentLoaded event
};

// Add window resize event listener to re-render hotspots when screen size changes
window.addEventListener('resize', function () {
  renderHotspots();
});

function handleSplashKeyDown(event) {
  switch(event.key) {
    case 'ArrowRight':
    case 'Enter':
    case ' ': // Spacebar
      event.preventDefault();
      goToNextSlide();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      if (currentSlide > 0) {
        goToPreviousSlide();
      }
      break;
    case 'Escape':
      event.preventDefault();
      closeSplash();
      break;
  }
}
