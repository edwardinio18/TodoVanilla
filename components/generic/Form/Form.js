// import { Component } from "../Component/Component.js";
// import { render } from "../../../utils/render.js";
//
// class Form extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//
//     if (this.props.onSubmit) {
//       const formData = new FormData(e.target);
//       const data = {};
//
//       formData.forEach((value, key) => {
//         data[key] = value;
//       });
//
//       for (const key in data) {
//         if (data[key].trim() === "") {
//           alert("Please fill in all fields");
//           return;
//         }
//       }
//
//       this.props.onSubmit(data);
//     }
//   };
//
//   render() {
//     const form = document.createElement("form");
//     form.id = this.props.id;
//     form.className = this.props.className || "";
//     form.addEventListener("submit", this.handleSubmit);
//
//     if (this.props.children && Array.isArray(this.props.children)) {
//       this.props.children.forEach(child => {
//         if (child instanceof Component) {
//           render(child, form);
//         } else if (child instanceof HTMLElement) {
//           form.appendChild(child);
//         } else {
//           const textNode = document.createTextNode(child);
//           form.appendChild(textNode);
//         }
//       });
//     }
//
//     return form;
//   }
// }
//
// export { Form };