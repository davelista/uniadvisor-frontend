import {useEffect, useState} from 'react';
import {ApiProfessor} from "../api";

const useProfessor = (ProfessorId) => {
    const [state, setState] = useState();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if(ProfessorId){
            setProfessor();
        } else {
            setState(null);
        }

    }, [ProfessorId]);

    const setProfessor = async () => {
        const professorId = ProfessorId ? ProfessorId : undefined;
        if (professorId) {
            setLoading(true);
            const professor = await ApiProfessor(professorId);
            setState(professor);
            setLoading(false);
        }

    };
    return [state, isLoading, setProfessor];
};

export default useProfessor;