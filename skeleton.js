const skeleton = document.querySelector(".loadings");
skeleton.innerHTML = `
<div class="skeleton">
  <div class="info">
    <div class="info-nama sedang"></div>
    <div class="info-pesan">
      <div class="info-pesan-bar sedang"></div>
      <div class="info-pesan-bar mini"></div>
    </div>
  </div>
</div>
<div class="skeleton pendek">
  <div class="info">
    <div class="info-nama"></div>
    <div class="info-pesan">
      <div class="info-pesan-bar"></div>
    </div>
  </div>
</div>
<div class="skeleton">
  <div class="info">
    <div class="info-nama sedang"></div>
    <div class="info-pesan">
      <div class="info-pesan-bar"></div>
      <div class="info-pesan-bar sedang"></div>
    </div>
  </div>
</div>
<div class="skeleton">
  <div class="info">
    <div class="info-nama"></div>
    <div class="info-pesan">
      <div class="info-pesan-bar sedang"></div>
      <div class="info-pesan-bar mini"></div>
    </div>
  </div>
</div>
<div class="loading-area">
  <span></span>
</div>
`;

const loadingArea = document.querySelector(".loading-area");
setTimeout(() => {
  loadingArea.style.opacity = "0";
}, 2000);
setTimeout(() => {
  loadingArea.style.opacity = "1";
}, 3000);
