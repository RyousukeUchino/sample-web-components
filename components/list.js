class List extends HTMLElement {
  constructor() {
    super()

    const url = this.getAttribute('src')
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const list = document.createElement('ul')

        data.forEach((item) => {
          const listItem = document.createElement('li')
          listItem.textContent = item.title + ': ' + item.value
          list.appendChild(listItem)
        })

        this.appendChild(list)
      })
      .catch((error) => console.error('Error:', error))
  }
}

customElements.define('list-component', List)
