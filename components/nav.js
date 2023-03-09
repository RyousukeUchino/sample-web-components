class Navigation extends HTMLElement {
  constructor() {
    super()
    // テンプレートリテラルでテンプレートを定義(バッククォート ( ` ) で区切られたリテラルの事)
    const template = `
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      `
    // 
    this.innerHTML = template
  }
}

// <navigation-component>として登録
customElements.define('navigation-component', Navigation)
