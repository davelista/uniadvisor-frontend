import {useEffect, useState} from 'react';
import {ApiProfessorsList} from "../api";

const useProfessorsList = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        if(state == null){
            setProfessorsList();
        }
    }, []);

    const setProfessorsList = async () => {
        const professorsList = await ApiProfessorsList();

        setState(professorsList);
    };
    return state;
};

export default useProfessorsList;