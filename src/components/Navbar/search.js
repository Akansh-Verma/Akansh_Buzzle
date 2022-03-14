import './styles.css';

const SearchBar = () => (
  
    <form className="d-flex" action="/" method="get">
        
        <input className="searchbar"
            type="search"
            id="header-search"
            placeholder="Search "
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    
);

export default SearchBar