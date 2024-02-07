import {
  html,
  component,
  createContext,
  useReducer,
  useContext,
} from "haunted";

const initialState = {
  selectedDrinks: [],
  showToaster: false,
};
const ShoppingListContext = createContext();

const shoppingListReducer = (state, action) => {


  switch (action.type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART state before:", state);
      return {
        ...state,
        selectedDrinks: [...state.selectedDrinks, action.drink],
        showToaster: true,
      };
    case "CLEAR_CART":
      return { ...state, selectedDrinks: [] };
    default:
      return state;
  }
};

export const AppContext = ({ children }) => {

  const [state, dispatch] = useReducer(shoppingListReducer, initialState);

  return html`
    <shopping-list-provider .value=${{ state, dispatch }}>
      ${children}
    </shopping-list-provider>
  `;
};

customElements.define("shopping-list-provider", ShoppingListContext.Provider);
customElements.define("use-context", component(AppContext));

export const useShoppingList = () => {
  const { state, dispatch } = useContext(ShoppingListContext);

  if (!state) {
    throw new Error(
      "useShoppingList must be used within a ShoppingListProvider"
    );
  }
  console.log("useShoppingList state:", state);
  return { state, dispatch };
};