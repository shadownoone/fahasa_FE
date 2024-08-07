import { SearchIcon } from "../Icons/icons";
import "./search.css";

function Search() {
    return (
        <div className="search-container">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search..." className="search-bar" />
        </div>
    );
}

export default Search;
