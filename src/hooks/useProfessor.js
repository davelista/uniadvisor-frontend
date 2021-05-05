import { useCallback, useState } from "react";
import { ApiProfessor } from "../api";

const useProfessor = () => {
    const [professor, setProfessor] = useState(null);

    const refresh = useCallback(
        async (professorId) => {
            setProfessor(null);
            
            if (!professorId) return;

            const data = await ApiProfessor(professorId);
            if (data === "No professor") return;

            setProfessor(data);
        },
        [],
    )

    return [professor, refresh];
};

export default useProfessor;
