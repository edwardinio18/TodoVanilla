import Component from "../Component/Component.js";

class Container extends Component {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({
        mode: "open",
      });
    }
  }

  connectedCallback() {
    this.updateContent();
  }

  attributeChangedCallback() {
    this.updateContent();
  }

  updateContent() {
    this.shadowRoot.innerHTML = "";
    const renderedElement = this.render();
    if (renderedElement) {
      this.shadowRoot.appendChild(renderedElement);
    }
  }

  render() {
    const type = this.getAttribute("type") || "div";
    const container = document.createElement(type);

    Array.from(this.childNodes).forEach(child => {
      container.appendChild(child.cloneNode(true));
    });

    this.innerHTML = "";

    return container;
  }
}

export default Container;