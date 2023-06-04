import About from "./pages/About";
import Home from "./pages/Home";
import Lorem from "./pages/Lorem";
import NotFound from "./pages/NotFound";

const routes = {
  404: new NotFound(),
  "#/": new Home(),
  "#/about": new About(),
  "#/lorem": new Lorem(),
};

let goToLoremBtn;

export const renderPage = async () => {
  const path = window.location.hash;

  const selectedPage = routes[path] ?? routes[404];
  selectedPage.render();

  if (path !== "#/" && goToLoremBtn) {
    goToLoremBtn.removeEventListener("click", goToLorem);
  }

  goToLoremBtn = document.querySelector(".go-to-lorem") ?? null;

  if (goToLoremBtn) {
    goToLoremBtn.addEventListener("click", goToLorem);
  }
};

function goToLorem() {
  window.location.hash = "#/lorem";
}
