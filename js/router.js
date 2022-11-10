const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/about": "/pages/about.html",
  "/lorem": "/pages/lorem.html",
};

const handleLocation = async () => {
  const path = window.location.pathname; // browser routing을 사용할 경우 이렇게.
  if (path === "index.html") path = "/";
  //   let path = window.location.hash.replace("#", "");

  // if the path length is 0, set it to primary page route
  if (path.length == 0) {
    path = "/";
  }
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

const GoToLorem = () => {
  window.history.pushState({}, "", "/lorem");
  handleLocation();
};

window.onpopstate = handleLocation; // 뒤로가기도 hashchange 이벤트 감지에 포함되어 동작함.
// window.route = route;

// window.addEventListener("hashchange", handleLocation);

document.addEventListener("DOMContentLoaded", function () {
  handleLocation();
});
