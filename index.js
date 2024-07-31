import { Button } from "./components/generic/Button/Button.js";
import { Text } from "./components/generic/Text/Text.js";
import { Container } from "./components/generic/Container/Container.js";
import { Form } from "./components/generic/Form/Form.js";
import { FormField } from "./components/generic/FormField/FormField.js";
import { TodoItem } from "./components/generic/TodoItem/TodoItem.js";
import { TodoRepository } from "./repositories/TodoRepository.js";
import { render } from "./utils/render.js";

window.onload = function () {
  const body = document.getElementsByTagName("body")[0];

  const todoRepository = new TodoRepository();

  const handleAdd = (todo) => {
    todoRepository.add(todo);
    renderApp();
  };

  const handleRemove = (id) => {
    todoRepository.remove(id);
    renderApp();
  };

  const handleEdit = (id, description) => {
    todoRepository.edit(id, description);
    renderApp();
  };

  const renderApp = () => {
    const appContainer = new Container({
      id: "app",
      children: [
        new Text({
          id: "title",
          type: "h1",
          content: "~ Todo List ~",
        }),
        new Container({
          id: "add_form_container",
          children: [
            new Form({
              id: "add_form",
              onSubmit: handleAdd,
              children: [
                new Container({
                  id: "form_field_container",
                  className: "form_field_container",
                  children: [
                    new Text({
                      type: "label",
                      for_input: "add_input",
                      content: "Task",
                      className: "input_label",
                    }),
                    new FormField({
                      id: "add_input",
                      name: "description",
                      className: "form_field",
                    }),
                  ],
                }),
                new Button({
                  type: "submit",
                  name: "add_todo_button",
                  id: "add_todo_button",
                  label: "Add todo",
                  className: "form_submit_button",
                }),
              ],
            }),
          ],
        }),
        new Container({
          id: "todo_list",
          children: todoRepository.getAll().map(todo => new TodoItem({
            todo,
            onRemove: handleRemove,
            onEdit: handleEdit,
          })),
          hidden: todoRepository.getAll().length === 0,
        }),
      ],
    });

    body.innerHTML = "";
    render(appContainer, body);
  };

  renderApp();
};