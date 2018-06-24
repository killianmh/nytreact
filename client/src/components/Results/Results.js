import React from "react";

const Results = ({ children }) => (
    <div className="card">
        <h5 className="card-header text-center">
            Results
        </h5>
        <div className="card-body">
            {children}
        </div>
    </div>
);

export default Results;