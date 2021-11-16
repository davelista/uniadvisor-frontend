import React, {useRef, useState} from "react";
import "./SearchBar.css";
import SearchBarResult from "./SearchBarResult";

function SearchBar(props) {
    const { professorsList, isHome } = props;
    const [search, setSearch] = useState("");
    const [newProfessorsList, setNewProfessorsList] = useState([]);
    const [cursor, setCursor] = useState(null);

    professorsList.map((x, i) => {
        newProfessorsList[i] = x;
        newProfessorsList[i].completeName = x.name + " " + x.surname;
        newProfessorsList[i].inverseName = x.surname + " " + x.name;
    })


    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 38) {
            if(cursor > 0){
                setCursor( cursor - 1)
            } else {
                setCursor(2);
            }
        } else if (event.keyCode === 40) {
            if( cursor < 2 || cursor == null){
                setCursor( cursor + 1)
            } else {
                setCursor(0)
            }
        } else if (event.keyCode === 13 && cursor !== null) {
            console.log("Click!");
        }
    }

  /*  const handleEnter = (event) => {

    }*/

    if (newProfessorsList != null) {
        const filteredListLower = newProfessorsList.filter(
            (listItem) => listItem.completeName.toLowerCase().includes(search.toLowerCase()) || listItem.inverseName.toLowerCase().includes(search.toLowerCase())

        );
        let professorDetails;

        if (filteredListLower.length > 0) {
            if (isHome === false) {
                professorDetails = (
                    <React.Fragment>
                        <div >
                            {filteredListLower.slice(0, 1).map((x) => {
                                return <SearchBarResult key={x.professor_id} professor={x} onClick={() => setSearch("")} />;
                            })}
                        </div>
                    </React.Fragment>
                );
            } else {
                professorDetails = (
                    <React.Fragment>
                        <div >
                            {filteredListLower.slice(0, 3).map((x, i) => {
                                return <SearchBarResult  hover={cursor === i} key={x.professor_id} professor={x} onClick={() => {
                                    setSearch("");
                                }} />;
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
                <div onKeyDown={handleKeyDown}>

                    <input
                        className={search ? "search-input-active" : "search-input"}
                        type="text"
                        value={search}
                        autoCapitalize="none"
                        placeholder={"Cerca un professore..."}
                        onChange={handleChange}

                    />
                    {search ? <div className={"search-bar"} onKeyDown={handleKeyDown}>{professorDetails}</div> : null}
                </div>
            </>
        );
    } else {
        return <div> Loading ... </div>;
    }
}

export default SearchBar;
