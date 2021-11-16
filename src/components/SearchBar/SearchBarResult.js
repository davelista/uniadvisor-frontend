import React, {useState} from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

const SearchBarResult = (props) => {
    const { professor, onClick, hover, onKeyPress } = props;
    const professorId = professor.professor_id ? professor.professor_id : 1;

    return (
        <>
            <div className={"result-container"}>
                <Link to={`/professors/${professorId}`} onClick={onClick} >
                    <div className={!hover ? "search-bar-result" : "search-bar-result-hover"}>
                        <div style={{ fontWeight: "600" }}>
                            {professor.completeName}
                        </div>{" "}
                        {professor.university.map((x) => (
                            <div>{x}</div>
                        ))}
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SearchBarResult;
