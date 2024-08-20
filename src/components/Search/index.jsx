import { useState } from "react";
import { SearchIcon } from "../Icons/icons";
import "./search.css";

function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        // Giả sử bạn có một hàm fetchResults để lấy kết quả tìm kiếm từ server
        if (value) {
            // Fetch results từ server hoặc mock data
            const mockResults = [
                {
                    id: 1,
                    image: "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-dac-nhan-tam.jpg",
                    name: "Sản phẩm 1",
                    author: "Tác giả A",
                    link: "/product/1",
                },
                {
                    id: 2,
                    image: "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-nha-gia-kim.jpg",
                    name: "Sản phẩm 2",
                    author: "Tác giả B",
                    link: "/product/2",
                },

                // Thêm các sản phẩm khác
            ];
            const limitedResults = mockResults.slice(0, 10);
            setResults(limitedResults);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="search-container">
            <SearchIcon className="search-icon" />
            <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                value={query}
                onChange={handleInputChange}
            />
            {results.length > 0 && (
                <div className="search-results">
                    {results.map((result) => (
                        <a
                            key={result.id}
                            href={result.link}
                            className="search-result-item"
                        >
                            <img
                                src={result.image}
                                alt={result.name}
                                className="result-image"
                            />
                            <div className="result-info">
                                <p className="result-name">{result.name}</p>
                                <p className="result-author">{result.author}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
