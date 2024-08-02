import Component from "../Component/Component.js";

class Form extends Component {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({
        mode: "open",
      });
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static get observedAttributes() {
    return [
      "id",
      "class",
      "onsubmit",
    ];
  }

  attributeChangedCallback() {
    this.updateContent();
  }

  addStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/components/generic/Form/Form.css";
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

  handleSubmit(e) {
    e.preventDefault();

    const onSubmit = this.getAttribute("onsubmit");
    if (onSubmit && typeof window[onSubmit] === "function") {
      const formData = new FormData(e.target);
      const data = {};

      formData.forEach((value, key) => {
        data[key] = value;
      });

      for (const key in data) {
        if (data[key].trim() === "") {
          alert("Please fill in all fields");
          return;
        }
      }

      window[onSubmit](data);
    }
  }

  render() {
    const form = document.createElement("form");

    const id = this.getAttribute("id");
    if (id) {
      form.id = id;
    }

    const className = this.getAttribute("class");
    if (className) {
      form.className = className;
    }

    form.addEventListener("submit", this.handleSubmit);

    Array.from(this.childNodes).forEach(child => {
      form.appendChild(child.cloneNode(true));
    });

    this.innerHTML = "";

    return form;
  }
}

export default Form;