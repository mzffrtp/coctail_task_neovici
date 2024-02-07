
import { html } from 'lit-html';
import { component, useEffect, useState } from 'haunted';
import './components/search/search.js';
import './components/results/results.js';
import './components/shopping-list/shoppingList.js';
import './components/toast/toast.js';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);

  const fetchSearchData = (searchTerm) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchData(data.drinks || []))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchSearchData('');
  }, []);

  const handleSearch = () => {
    fetchSearchData(searchTerm);
    setSearchTerm('')
  };

  return html`
    <div>
      <div>
      <input type="text" id="searchPage" name="searchPage" .value=${searchTerm} @input=${(e) => setSearchTerm(e.target.value)} />
      <button @click=${handleSearch} part="button">Search</button>
     
      
      </div>
      <div>
        <results-element .searchData=${searchData}></results-element>
        <shopping-element></shopping-element>
        <toast-element></toast-element>
      </div>
    
    </div>
  `;
};

customElements.define('page-element', component(Page));