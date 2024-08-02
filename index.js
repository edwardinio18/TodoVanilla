import Form from "./components/generic/Form/Form.js";
import Container from "./components/generic/Container/Container.js";
import Text from "./components/generic/Text/Text.js";

window.onload = function () {
  const renderApp = () => {
    const body = document.body;

    const appContainer = document.getElementById("app");

    const title = document.createElement("text-component");
    title.setAttribute("content", "~ Todo List ~");
    title.setAttribute("type", "h1");
    title.setAttribute("id", "title");

    appContainer.appendChild(title);

    const addFormContainer = document.createElement("container-component");
    addFormContainer.setAttribute("id", "add_form_container");

    const addForm = document.createElement("form-component");
    addForm.setAttribute("id", "add_form");
    addForm.setAttribute("onsubmit", "handleAdd");

    addFormContainer.appendChild(addForm);

    appContainer.appendChild(addFormContainer);

    body.innerHTML = "";
    body.appendChild(appContainer);
  };

  renderApp();
};