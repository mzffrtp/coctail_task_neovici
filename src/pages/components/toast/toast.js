import { html, render } from "lit-html";
import { useState, component, useEffect } from "haunted";

const Toast = ({ showToast, message }) => {
  return showToast ? html` <div>${message}</div> ` : null;
};

customElements.define("toast-element", component(Toast));

