import { html, render } from "lit-html";
import { useState, component, useEffect } from "haunted";
import "./pages/page.js";
import "./context/shoppingListContext.js";

const App = () => {
  return html`
    <use-context>
      <page-element></page-element>
    </use-context>
  `;
};

customElements.define("app-element", component(App));