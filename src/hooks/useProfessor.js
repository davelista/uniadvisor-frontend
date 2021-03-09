import {useEffect, useState} from 'react';
import {ApiProfessor} from "../api";

const useProfessor = (endpoint) => {
    const [state, setState] = useState();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setProfessor();
    }, [endpoint]);

    const setProfessor = async () => {
        setLoading(true);
        const professorEndpoint = endpoint ? endpoint : undefined
        if (professorEndpoint != null) {
            const selectedProfessor = await ApiProfessor(professorEndpoint);
            setState(selectedProfessor);
            setLoading(false);
        }

    };
    return [state, isLoading, setProfessor];
};

export default useProfessor;