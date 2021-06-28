import React from "react"
import './SearchBar.css'
import {Link} from "react-router-dom";

const SearchBarResult = (props) => {
    const {professor} = props;
    const professorId = professor.professor_id ? professor.professor_id  : 1;

    return (
        <>
            <div className={"result-container"}>
                <Link to={`/professors/${professorId}`}>
                    <div className={"search-bar-result"}>
                        {professor.name} {professor.surname} {professor.university.map((x) => <div>{x}</div>)}
                    </div>
                </Link>
            </div>
        </>
    )
};

export default SearchBarResult;