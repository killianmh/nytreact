import React from "react";

const Search = ({ children }) => (
    <div className="card">
        <h5 className="card-header text-center">
            Search
        </h5>
        <div className="card-body">
            {children}
        </div>
    </div>
);

export default Search;