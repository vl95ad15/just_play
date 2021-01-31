import './SearchBar.css';

function SearchBar() {
  return(
    <div className="Search_Block">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </div>
  )
}

export default SearchBar;
