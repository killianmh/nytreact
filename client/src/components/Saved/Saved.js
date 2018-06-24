import React from "react";

const Saved = ({ children }) => (
    <div className="card">
        <h5 className="card-header text-center">
            Saved Articles
        </h5>
        <div className="card-body">
            {children}
        </div>
    </div>
);

export default Saved;