import {useEffect, useState} from 'react';
import {ApiProfessor, ApiProfessorImage} from "../api";

const useProfessor = (endpoint) => {
    const [state, setState] = useState();
    const [professorImg, setProfessorImg] = useState();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setProfessor();
    }, [endpoint]);

    const setProfessor = async () => {
        setLoading(true);
        const professorEndpoint = endpoint ? endpoint : undefined
        if (professorEndpoint != null) {
            const selectedProfessor = await ApiProfessor(professorEndpoint);
            const imgProfessor = await ApiProfessorImage(professorEndpoint);
            setState(selectedProfessor);
            setProfessorImg(imgProfessor);
            setLoading(false);
        }

    };
    return [state, professorImg, isLoading, setProfessor];
};

export default useProfessor;