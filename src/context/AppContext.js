import React, { useMemo } from "react";
import useProfessor from "../hooks/useProfessor";
import useAuth from "../hooks/useAuth";
import useProfessorsList from "../hooks/useProfessorsList";
import useUniversityList from "../hooks/useUniversityList";

// const defaultContext = {
//     professorsList: null,
//     universitiesList: null,
//     user: {
//         data: null,
//         login: () => {},
//         validateSession: () => {},
//         refresh: () => {},
//     },
//     professor: {
//         data: null,
//         // image: null,
//         refresh: () => {},
//     },
// };

export const AppContext = React.createContext({});

export function useAppContext() {
    const professorsList = useProfessorsList();
    const universitiesList = useUniversityList();
    const [professor, refreshProfessor] = useProfessor();
    const [auth, user, login, validateSession, logout, changePassword, deleteUser] = useAuth();

    return useMemo(
        () => ({
            professorsList,
            universitiesList,
            user: {
                auth,
                data: user,
                login,
                validateSession,
                logout,
                changePassword,
                deleteUser,
            },
            professor: {
                data: professor,
                refresh: refreshProfessor,
            },
        }),
        [professorsList, universitiesList, professor, refreshProfessor, user, login, validateSession, auth, logout, changePassword]
    );
}
