import Page from "./Page.js";

class NotFound extends Page {
  constructor() {
    super();
    this.htmlString = `
        <div style="text-align: center">
            <h1>404 Not Found</h1>
            <p>존재하지 않는 페이지입니다!!</p>
        </div>
        `;
  }
}

export default NotFound;
