import Page from "./Page.js";

class Home extends Page {
  constructor() {
    super();
    this.htmlString = `
        <div class="page-container">
            <h1 style="align-self: center">Home</h1>
            <p>
                이 웹사이트는 바닐라 자바스크립트로 만든 아주 단순한 수준의 SPA (Single Page Application) 입니다.
            </p>
            <p>
                하나의 Document Page를 다운로드 받아 렌더링한 이후로 사용자 인터랙션에 따라 동적으로 일부 Element의 내용만을 변경합니다.
                새로운 Document Page를 추가로 다운로드 받지 않기 때문에 새로고침없이 페이지가 이동되는 효과를 느낄 수 있습니다.
            </p>
            <button class="go-to-lorem">Go to Lorem Page</button>
        </div>
              `;
  }
}
export default Home;
