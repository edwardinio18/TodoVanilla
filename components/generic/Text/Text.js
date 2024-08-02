import Component from "../Component/Component.js";

class Text extends Component {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({
        mode: "open",
      });
    }
  }

  static get observedAttributes() {
    return [
      "type",
      "id",
      "class",
      "content",
    ];
  }

  attributeChangedCallback() {
    this.updateContent();
  }

  addStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/components/generic/Text/Text.css";
    this.shadowRoot.appendChild(link);
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = "";

    this.addStyles();
    this.updateContent();
  }

  updateContent() {
    const renderedElement = this.render();
    if (renderedElement) {
      this.shadowRoot.appendChild(renderedElement);
    }
  }

  render() {
    const type = this.getAttribute("type") || "p";
    const textElement = document.createElement(type);
    textElement.textContent = this.getAttribute("content") || "";

    const id = this.getAttribute("id");
    if (id) {
      textElement.id = id;
    }

    const className = this.getAttribute("class");
    if (className) {
      textElement.className = className;
    }

    return textElement;
  }
}

export default Text;