import { Component } from "../components/generic/Component/Component.js";

export function render(component, container) {
  if (!(component instanceof Component)) {
    throw new Error("component must be an instance of Component");
  }

  if (component.props.hidden) {
    return;
  }

  component.element = component.render();
  container.appendChild(component.element);
}