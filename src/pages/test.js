import { html, component, useState, useContext, createContext } from "haunted";

const ThemeContext = createContext({ theme: "dark" });

customElements.define("theme-provider", ThemeContext.Provider);
customElements.define("theme-consumer", ThemeContext.Consumer);

function Consumer() {
  const context = useContext(ThemeContext);
  console.log(context);
  return context;
}

customElements.define("my-consumer", component(Consumer));

function App() {
  const [theme, setTheme] = useState({ theme: "" });

  //   return html`
  //     <select value=${theme} @change=${(event) => setTheme(event.target.value)}>
  //       <option value="dark">Dark</option>
  //       <option value="light">Light</option>
  //     </select>

  //     <theme-provider .value=${{ theme }}>
  //       <!-- creates context with inverted theme -->
  //       <theme-provider .value=${theme === "dark" ? "light" : "dark"}>
  //         <theme-consumer
  //           .render=${(value) => html`<h1>${value}</h1>`}
  //         ></theme-consumer>
  //       </theme-provider>
  //     </theme-provider>
  //   `;

  //Use the consumer component and
  return html` <theme-provider .value=${{ theme }}>
    <my-consumer></my-consumer>
    <theme-consumer
      .render=${(value) => setTheme({ theme: value })}
    ></theme-consumer>
  </theme-provider>`;
}

// customElements.define("use-context", component(App));

