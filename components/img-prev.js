class ImagePreview extends HTMLElement {
  constructor() {
    super()

    const input = document.createElement('input')
    input.setAttribute('type', 'file')

    const img = document.createElement('img')
    img.setAttribute('style', 'max-width: 100%; max-height: 100%;')

    input.addEventListener('change', () => {
      const reader = new FileReader()

      reader.addEventListener('load', () => {
        img.setAttribute('src', reader.result)
      })

      reader.readAsDataURL(input.files[0])
    })

    this.appendChild(input)
    this.appendChild(img)
  }
}

customElements.define('image-preview', ImagePreview)
