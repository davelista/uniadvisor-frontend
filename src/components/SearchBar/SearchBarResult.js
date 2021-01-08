import React from "react"
import './SearchBar.css'
import {Link} from "react-router-dom";

const SearchBarResult = (props) => {
    const {professor} = props;
    const endpoint = professor.endpoint ? professor.endpoint : null;
    if (endpoint != null) {
        return (
            <>
                <div className={"result-container"}>
                    <Link to={`/professors/${professor.endpoint}`}>
                        <div className={"search-bar-result"}>
                            {professor.name}
                        </div>
                    </Link>
                </div>
            </>
        )
    }
};

export default SearchBarResult;