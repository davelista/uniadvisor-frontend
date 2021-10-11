import React, { useState } from "react";
import "./SearchBar.css";
import SearchBarResult from "./SearchBarResult";

function SearchBar(props) {
    const { professorsList, isHome } = props;
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };


    if (professorsList != null) {
        const filteredListLower = professorsList.filter(
            (listItem) => listItem.name.toLowerCase().includes(search.toLowerCase()) || listItem.surname.toLowerCase().includes(search.toLowerCase())
        );
        let professorDetails;

        if (filteredListLower.length > 0) {
            if (isHome === false) {
                professorDetails = (
                    <React.Fragment>
                        <div>
                            {filteredListLower.slice(0, 1).map((x) => {
                                return <SearchBarResult key={x.professor_id} professor={x} onClick={() => setSearch("")} />;
                            })}
                        </div>
                    </React.Fragment>
                );
            } else {
                professorDetails = (
                    <React.Fragment>
                        <div>
                            {filteredListLower.slice(0, 3).map((x) => {
                                return <SearchBarResult key={x.professor_id} professor={x} onClick={() => setSearch("")} />;
                            })}
                        </div>
                    </React.Fragment>
                );
            }
        } else {
            professorDetails = (
                <div className={"result-container"}>
                    <div className={"search-bar-result"}>Non ci sono professori con questo nome :(</div>
                </div>
            );
        }
        return (
            <>
                <div>

                    <input
                        className={search ? "search-input-active" : "search-input"}
                        type="text"
                        value={search}
                        autoCapitalize="none"
                        placeholder={"Cerca un professore..."}
                        onChange={handleChange}
                    />
                    {search ? <div className={"search-bar"}>{professorDetails}</div> : null}
                </div>
            </>
        );
    } else {
        return <div> Loading ... </div>;
    }
}

export default SearchBar;
