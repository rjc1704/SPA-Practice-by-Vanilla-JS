import Page from "./Page";

class NotFound extends Page {
  constructor() {
    super();
    this.htmlString = `
        <div style="text-align: center">
            <h1>404 Not Found</h1>
            <p>Oh no! It looks like the page you're trying to get to is missing!</p>
        </div>
        `;
  }
}

export default NotFound;
