import Component from "../Component/Component.js";

class Text extends Component {
  constructor() {
    super();
  }

  addStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/components/generic/Text/Text.css";
    this.shadowRoot.appendChild(link);
  }

  connectedCallback() {
    this.addStyles();
    const renderedElement = this.render();
    if (renderedElement) {
      this.shadowRoot.appendChild(renderedElement);
    }
  }

  render() {
    const type = this.getAttribute("type") || "p";
    const htmlFor = this.getAttribute("htmlFor");

    const text = document.createElement(type);
    const id = this.getAttribute("id");
    if (id) {
      text.id = id;
    }

    const className = this.getAttribute("class");
    if (className) {
      text.className = className;
    }

    text.textContent = this.textContent;

    if (type === "label" && htmlFor) {
      text.htmlFor = htmlFor;
    }

    return text;
  }
}

customElements.define("text-component", Text);

export default Text;