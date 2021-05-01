import React, { useMemo, useState } from "react";
import useProfessor from "../hooks/useProfessor";
import useProfessorsList from "../hooks/useProfessorsList";

const defaultContext = {
    professorsList: null,
    user: {
        data: null,
        refresh: (data) => {},
    },
    professor: {
        data: null,
        image: null,
        refresh: (idProfessor) => {},
    },
};

export const AppContext = React.createContext(defaultContext);

export function useAppContext() {
    const professorsList = useProfessorsList();
    const [professor, professorImg, refreshProfessor] = useProfessor();
    const [user, setUser] = useState(null);

    return useMemo(
        () => ({
            professorsList,
            user: {
                data: user,
                refresh: setUser,
            },
            professor: {
                data: professor,
                image: professorImg,
                refresh: refreshProfessor,
            },
        }),
        [professorsList, professor, professorImg, refreshProfessor, user]
    );
}
