import {useEffect, useState} from 'react';
import {ApiProfessorsList} from "../api";

const useProfessorsList = () => {
    const [state, setState] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if(state == null){
            setProfessorsList();
        }
    }, []);

    const setProfessorsList = async () => {
        setLoading(true);
        const professorsList = await ApiProfessorsList();

        setState(professorsList);
        setLoading(false);
    };
    return [state, isLoading];
};

export default useProfessorsList;