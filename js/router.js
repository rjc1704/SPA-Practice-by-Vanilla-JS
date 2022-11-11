const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.location.hash = event.target.hash;
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  about: "/pages/about.html",
  lorem: "/pages/lorem.html",
};

const handleLocation = async () => {
  //   const path = window.location.pathname; // browser routing을 사용할 경우 이렇게.
  //     if (path === "index.html") path = "/";
  let path = window.location.hash.replace("#", "");

  // if the path length is 0, set it to primary page route
  if (path.length == 0) {
    path = "/";
  }
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());

  document.getElementById("main-page").innerHTML = html;
};

const GoToLorem = () => {
  window.location.hash = "#lorem";
};

// window.route = route; // js 파일을 쪼개어 module로 사용할 때 변수나 함수를 전역화할 필요 있음

window.addEventListener("hashchange", handleLocation);

document.addEventListener("DOMContentLoaded", function () {
  handleLocation();
});
