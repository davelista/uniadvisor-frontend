import {useEffect, useState} from 'react';
import {ApiProfessor, ApiProfessorImage} from "../api";

const useProfessor = (ProfessorId) => {
    const [state, setState] = useState();
    const [professorImg, setProfessorImg] = useState();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setProfessor();
    }, [ProfessorId]);

    const setProfessor = async () => {
        const professorId = ProfessorId ? ProfessorId : undefined;
        if (professorId) {
            setLoading(true);
            const selectedProfessor = await ApiProfessor(professorId);
            if(selectedProfessor === "No professor"){
                setState(null);
            } else {
                const img = await ApiProfessorImage(professorId);
                setState(selectedProfessor);
                setProfessorImg(img);
                setLoading(false);
            }
        }

    };
    return [state, professorImg, isLoading, setProfessor];
};

export default useProfessor;