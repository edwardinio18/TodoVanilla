import Component from "../Component/Component.js";
import { render } from "../../../utils/render.js";

class Container extends Component {
  constructor() {
    super();
  }

  addStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/components/generic/Container/Container.css";
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
    const container = document.createElement("div");
    const id = this.getAttribute("id");
    if (id) {
      container.id = id;
    }

    const className = this.getAttribute("class");
    if (className) {
      container.className = className;
    }

    const children = Array.from(this.children);
    for (const child of children) {
      if (child instanceof Component) {
        render(child, container);
      } else {
        container.appendChild(child);
      }
    }

    return container;
  }
}

customElements.define("container-component", Container);

export default Container;