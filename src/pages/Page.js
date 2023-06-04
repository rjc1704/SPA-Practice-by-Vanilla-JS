class Page {
  constructor() {
    this.htmlString = "";
  }
  render() {
    document.getElementById("root").innerHTML = this.htmlString;
  }
}

export default Page;
