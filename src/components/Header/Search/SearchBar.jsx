import './SearchBar.css';

function SearchBar() {
  return(
    <div className="SearchBlock">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </div>
  )
}

export default SearchBar;
