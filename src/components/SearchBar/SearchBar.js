import React, {useState} from 'react';
import './SearchBar.css'
import SearchBarResult from "./SearchBarResult";

function SearchBar(props) {
    const {professorsList, isHome} = props;
    const [search, setSearch] = useState('');
    const handleChange = event => {
        setSearch(event.target.value);
    };

    if(professorsList != null) {
        const filteredListLower = professorsList
            .filter(listItem => listItem.name.toLowerCase().includes(search.toLowerCase()) ||
                listItem.surname.toLowerCase().includes(search.toLowerCase()));
        let professorDetails;

        if (filteredListLower.length > 0) {
            if(isHome === false){
                professorDetails = (
                    <React.Fragment>
                        <div>
                            {
                                filteredListLower
                                    .slice(0, 1)
                                    .map((x) => {
                                        return <SearchBarResult key={x.id} professor={x} />
                                    })
                            }
                        </div>
                    </React.Fragment>
                )
            } else {
                professorDetails = (
                    <React.Fragment>
                        <div>
                            {
                                filteredListLower
                                    .slice(0, 3)
                                    .map((x) => {
                                        return <SearchBarResult key={x.professor_id} professor={x} />
                                    })
                            }
                        </div>
                    </React.Fragment>
                )
            }
        } else {
            professorDetails = (
                <div className={"result"}>Non ci sono professori con questo nome</div>)
        }
        return (
            <>
                <div>
                    <input className={!isHome ? "search-input" : "search-navbar-input"}
                           type="text"
                           value={search}
                           autoCapitalize="none"
                           placeholder={"Cerca un professore..."}
                           onChange={handleChange}
                    />
                    <div className={'search-bar'}>
                        {
                            search ? professorDetails : null
                        }
                    </div>


                </div>

            </>
        );
    } else {
        return (
            <div> Loading ... </div>
        );
    }





}

export default SearchBar;

