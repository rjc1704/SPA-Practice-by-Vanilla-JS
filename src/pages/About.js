import Page from "./Page.js";

class About extends Page {
  constructor() {
    super();
    this.htmlString = `
        <div class="page-container align-center">
            <h1>About</h1>
            <h2> 배워가면 좋을 점</h2>
            
            <ul>
                <li>Hashed Routing 적용</li>
                <li>JS 번들러 Parcel 적용</li>
                <li>이벤트리스너의 추가와 제거</li>
                <li>class 를 이용한 렌더링 로직 캡슐화</li>
            </ul>
        </div>
        `;
  }
}
export default About;
