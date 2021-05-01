import { useCallback, useState } from "react";
import { ApiProfessor, ApiProfessorImage } from "../api";

const useProfessor = () => {
    const [professor, setProfessor] = useState(null);
    const [professorImg, setProfessorImg] = useState(null);

    const refresh = useCallback(
        async (professorId) => {
            setProfessor(null);
            setProfessorImg(null);
            
            if (!professorId) return;
        
            const [professorData, imgData] = await Promise.all([ApiProfessor(professorId), ApiProfessorImage(professorId)])
            if (professorData === "No professor") return;
        
            setProfessor(professorData);
            setProfessorImg(imgData);
        },
        [],
    )

    return [professor, professorImg, refresh];
};

export default useProfessor;
