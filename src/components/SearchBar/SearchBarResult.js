import React from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

const SearchBarResult = (props) => {
    const { professor, onClick } = props;
    const professorId = professor.professor_id ? professor.professor_id : 1;

    return (
        <>
            <div className={"result-container"}>
                <Link to={`/professors/${professorId}`} onClick={onClick}>
                    <div className={"search-bar-result"}>
                        <div style={{ fontWeight: "600" }}>
                            {professor.name} {professor.surname}
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
