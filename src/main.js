import { renderPage } from "./router.js";

renderPage();
window.addEventListener("hashchange", renderPage);
