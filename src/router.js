import about from "./pages/About.js";
import home from "./pages/Home.js";
import lorem from "./pages/Lorem.js";
import notFound from "./pages/NotFound.js";

const route = (event) => {
  event.preventDefault();
  window.location.hash = event.target.hash;
};
window.route = route;

const routes = {
  404: notFound(),
  "/": home(),
  about: about(),
  lorem: lorem(),
};

const handleLocation = async () => {
  let path = window.location.hash.replace("#", ""); //#about -> about

  // "http://example.com/"가 아니라 도메인 뒤에 / 없이 "http://example.com" 으로 나오는 경우
  if (path.length == 0) {
    path = "/";
  }
  // const route = routes[path] || routes[404];

  // const html = await fetch(route).then((data) => data.text());
  const html = routes[path] || routes[404];

  document.getElementById("root").innerHTML = html;
};

const GoToLorem = () => {
  window.location.hash = "#lorem";
};
window.GoToLorem = GoToLorem;

// hash url 변경 시 처리
window.addEventListener("hashchange", handleLocation);

// 첫 랜딩 또는 새로고침 시 처리
document.addEventListener("DOMContentLoaded", handleLocation);
