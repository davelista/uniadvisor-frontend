import React, { useMemo } from "react";
import useProfessor from "../hooks/useProfessor";
import useAuth from "../hooks/useAuth";
import useProfessorsList from "../hooks/useProfessorsList";

const defaultContext = {
    professorsList: null,
    user: {
        data: null,
        login: () => {},
        validateSession: () => {},
        refresh: () => {},
    },
    professor: {
        data: null,
        // image: null,
        refresh: () => {},
    },
};

export const AppContext = React.createContext(defaultContext);

export function useAppContext() {
    const professorsList = useProfessorsList();
    const [professor, refreshProfessor] = useProfessor();
    const [auth, user, login, validateSession] = useAuth();

    return useMemo(
        () => ({
            professorsList,
            user: {
                auth,
                data: user,
                login,
                validateSession,
            },
            professor: {
                data: professor,
                refresh: refreshProfessor,
            },
        }),
        [professorsList, professor, refreshProfessor, user, login, validateSession, auth]
    );
}
