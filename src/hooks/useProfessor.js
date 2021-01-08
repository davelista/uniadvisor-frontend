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
            console.log("endpoint = " + professorEndpoint);
            const selectedProfessor = await ApiProfessor(professorEndpoint);
            console.log("answer new stringify" + JSON.stringify(selectedProfessor));
            setState(selectedProfessor);
            setLoading(false);
        }

    };
    if (state != null) {
        console.log("ho settato il json con; ", state)
    }
    return [state, isLoading, setProfessor];
};

export default useProfessor;