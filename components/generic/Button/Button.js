import { Component } from "../Component/Component.js";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.onclick) {
      this.props.onclick();
    }
  };

  render() {
    const button = document.createElement("button");

    button.id = this.props.id;
    button.textContent = this.props.label;
    button.addEventListener("click", this.handleClick);
    button.className = this.props.className || "";

    return button;
  }
}

export { Button };