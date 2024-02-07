import { html, component } from 'haunted';
import { useShoppingList } from '../../../context/shoppingListContext';

const ShoppingList = () => {
  const { state } = useShoppingList();

  const renderIngeridents = () => {
    return state.selectedDrinks.reduce((ingredients, drink) => {
      for (const [key, value] of Object.entries(drink)) {
        if (key.startsWith('strIngredient')) {
          ingredients.push(value);
        }
      }
      return ingredients;
    }, []);
  };

  const handleClearCart = () => {
    console.log('Drink removed from the cart:', drink);
    useShoppingList().dispatch({ type: 'CLEAR_CART' });
  };

  return html`
    <div class= "shopping-list">
      <h2>Shopping List</h2>
      <ul>
        ${renderIngeridents().map(item => html`<li>${item}</li>`)}
      </ul>
      <button @click=${handleClearCart} > Clear Cart</button >
    </div>
  `;
};

customElements.define('shopping-element', component(ShoppingList));