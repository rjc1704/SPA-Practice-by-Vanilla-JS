import { renderPage } from "./router";

// 1. hash 값에 따른 페이지를 렌더링한다.
renderPage();
window.addEventListener("hashchange", renderPage);

// 2. 사이드바에서 페이지이동 버튼을 클릭 시 해당 페이지를 렌더링한다.
const sidebar = document.querySelector(".sidebar");
sidebar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target === sidebar) return;

  window.location.hash = event.target.hash;
});
