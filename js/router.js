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

  // "http://example.com/"가 아니라 도메인 뒤에 / 없이 "http://example.com" 으로 나오는 경우
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

// hash url 변경 시 처리
window.addEventListener("hashchange", handleLocation);

// 첫 랜딩 또는 새로고침 시 처리
document.addEventListener("DOMContentLoaded", function () {
  handleLocation();
});
