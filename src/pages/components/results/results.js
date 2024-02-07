import { html, component } from 'haunted';
import { useShoppingList } from '../../../context/shoppingListContext';

const Results = ({ searchData }) => {
  const { dispatch } = useShoppingList();

  const handleAddToCart = (drink) => {
    // Dispatch the CLEAR_CART action to clear the shopping list
    console.log('Drink added to cart:', drink);

    dispatch({ type: 'ADD_TO_CART', drink });

  };

  return html`
    <div class="results-container">
      ${searchData && searchData.length > 0
      ? searchData.map((drink) => html`
            <div class="drink-item">
              <div class="image-container">
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
              </div>
              <div class="description-container">
                <h3>${drink.strDrink}</h3>
                <p>${drink.strInstructions}</p>
              </div>
              <button @click=${() => handleAddToCart(drink)} class="button">
                Add
              </button>
            </div>
          `)
      : html`<p>No results found.</p>`
    }
    </div>
  `;
};

customElements.define('results-element', component(Results));