import { html } from "lit-html";
import { component } from "haunted";

const Search = ({ handleSearch, searchData }) => {
  const handleSearchInput = () => {
    // Trigger the search action with the current search term
    const searchInput = document.getElementById("search");
    console.log("🚀 ~ handleSearchInput ~ searchInput:", searchInput);
    const searchTerm = searchInput.value;
    console.log("🚀 ~ handleSearchInput ~ searchTerm:", searchTerm);
    handleSearch(searchTerm);
  };

  const handleSearchText = (e) => {
    // Update the search term in real-time
    handleSearch(e.target.value);
  };

  return html`
    <div>
      <input
        type="text"
        id="search"
        name="search"
        .value=${searchData}
        @input=${handleSearchText}
      />
      <button @click=${handleSearch} part="button">Search</button>
    </div>
  `;
};

customElements.define("search-element", component(Search));

