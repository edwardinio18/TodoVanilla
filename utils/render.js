import Component from "../components/generic/Component/Component.js";

export function render(component, container) {
  if (component.getAttribute("hidden") !== null) {
    return;
  }

  if (component instanceof Component && typeof component.render === "function") {
    component.element = component.render();
    container.appendChild(component.element);
  } else {
    console.error("Component does not have a render method", component);
  }
}