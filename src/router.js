import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Lorem from "./pages/Lorem.js";
import NotFound from "./pages/NotFound.js";

// hashed path: Page
const routes = {
  "#/": new Home(),
  "#/about": new About(),
  "#/lorem": new Lorem(),
  404: new NotFound(),
};

let goToLoremBtn;

/**
 * 현재 Fragment(#)에 에 해당하는 페이지를 렌더링합니다.
 * 특정 페이지에 이벤트리스너를 할당할 경우, 다른 페이지 이동 시 이벤트리스너를 제거해야 합니다.
 * @function
 */
export const renderPage = async () => {
  const path = window.location.hash || "#/";
  const selectedPage = routes[path] ?? routes[404];
  selectedPage.render();

  if (path === "#/") {
    goToLoremBtn = document.querySelector(".go-to-lorem");
    goToLoremBtn.addEventListener("click", goToLorem);
  }

  if (path !== "#/" && goToLoremBtn) {
    goToLoremBtn.removeEventListener("click", goToLorem);
    goToLoremBtn = null;
  }
};

function goToLorem() {
  window.location.hash = "#/lorem";
}
