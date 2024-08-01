// import { Component } from "../Component/Component.js";
// import { FormField } from "../FormField/FormField.js";
// import { Button } from "../Button/Button.js";
// import { Form } from "../Form/Form.js";
// import { Container } from "../Container/Container.js";
//
// class TodoItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isEditing: false,
//       editDescription: this.props.todo.description,
//     };
//   }
//
//   handleRemove = () => {
//     this.props.onRemove(this.props.todo.id);
//   };
//
//   handleEdit = () => {
//     this.setState({
//       isEditing: true,
//     });
//   };
//
//   handleSave = (todo) => {
//     this.props.onEdit(this.props.todo.id, todo.description);
//     this.setState({
//       isEditing: false,
//     });
//   };
//
//   handleChange = (event) => {
//     this.setState({
//       editDescription: event.target.value,
//     });
//   };
//
//   handleCancel = () => {
//     this.setState({
//       isEditing: false,
//       editDescription: this.props.todo.description,
//     });
//   };
//
//   render() {
//     const {todo} = this.props;
//     const {
//             isEditing,
//             editDescription,
//           } = this.state;
//
//     const item = document.createElement("li");
//     item.id = "todo_item_" + todo.id;
//     item.className = this.props.className || "";
//
//     const content = document.createElement("span");
//     content.className = "list_item_content";
//
//     if (isEditing) {
//       const form = new Form({
//         id: "edit_form_" + todo.id,
//         onSubmit: this.handleSave,
//         children: [
//           new FormField({
//             type: "text",
//             value: editDescription,
//             name: "description",
//             className: "form_field",
//             id: "edit_input_" + todo.id,
//             onchange: this.handleChange,
//           }),
//           new Container({
//             id: "edit_form_buttons_" + todo.id,
//             className: "list_item_buttons_container",
//             children: [
//               new Button({
//                 type: "submit",
//                 id: "save_button_" + todo.id,
//                 label: "Save",
//                 className: "list_item_button",
//               }),
//               new Button({
//                 label: "Cancel",
//                 id: "cancel_button_" + todo.id,
//                 className: "list_item_button",
//                 onclick: this.handleCancel,
//               }),
//             ],
//           }),
//         ],
//       });
//
//       item.appendChild(form.render());
//     } else {
//       content.textContent = todo.id + ". " + todo.description;
//
//       const editButton = new Button({
//         label: "Edit",
//         className: "list_item_button",
//         onclick: this.handleEdit,
//       }).render();
//
//       const removeButton = new Button({
//         label: "Remove",
//         className: "list_item_button",
//         onclick: this.handleRemove,
//       }).render();
//
//       const buttonsContainer = document.createElement("div");
//       buttonsContainer.className = "list_item_buttons_container";
//
//       buttonsContainer.appendChild(editButton);
//       buttonsContainer.appendChild(removeButton);
//
//       item.appendChild(content);
//       item.appendChild(buttonsContainer);
//     }
//
//     return item;
//   }
// }
//
// export { TodoItem };