class Component extends HTMLElement {
  constructor() {
    super();
    
    if (!this.shadowRoot) {
      this.attachShadow({
        mode: "open",
      });
    }
  }

  addStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/components/generic/Component/Component.css";
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
    // To be implemented by subclasses
  }
}

export default Component;