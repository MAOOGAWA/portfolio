// 要素が存在する場合のみ実行する関数
document.addEventListener("DOMContentLoaded", () => {

  // --- 1. ハンバーガーメニュー (エラー防止付き) ---
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }


  // --- 2. スクロールフェード (ページ読み込み時にも実行) ---
  const fadeElements = document.querySelectorAll(".fade");

  const fadeIn = () => {
    fadeElements.forEach(el => {
      const pos = el.getBoundingClientRect().top;
      const scroll = window.innerHeight;
      if (pos < scroll - 100) {
        el.classList.add("show");
      }
    });
  };

  // スクロール時だけでなく、ページを開いた瞬間にもチェック
  window.addEventListener("scroll", fadeIn);
  fadeIn(); 


  // --- 3. タブ切り替え (PC/SP切り替え用) ---
  const tabs = document.querySelectorAll(".preview-switch button");
  const previews = document.querySelectorAll(".preview");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      // ボタンのactive付け替え
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // プレビュー画像の切り替え
      previews.forEach(p => {
        p.classList.remove("active");
        if (p.classList.contains(target)) {
          p.classList.add("active");
        }
      });
    });
  });


  // --- 4. スムーススクロール (エラー防止付き) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href !== "") {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });

});