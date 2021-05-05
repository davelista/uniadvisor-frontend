import React, { useMemo } from "react";
import useProfessor from "../hooks/useProfessor";
import useAuth from "../hooks/useAuth";
import useProfessorsList from "../hooks/useProfessorsList";

const defaultContext = {
    professorsList: null,
    user: {
        data: null,
        refresh: (data) => {},
    },
    professor: {
        data: null,
        // image: null,
        refresh: (idProfessor) => {},
    },
};

export const AppContext = React.createContext(defaultContext);

export function useAppContext() {
    const professorsList = useProfessorsList();
    const [professor, refreshProfessor] = useProfessor();
    const [user, login] = useAuth();

    return useMemo(
        () => ({
            professorsList,
            user: {
                data: user,
                login,
            },
            professor: {
                data: professor,
                refresh: refreshProfessor,
            },
        }),
        [professorsList, professor, refreshProfessor, user, login]
    );
}
