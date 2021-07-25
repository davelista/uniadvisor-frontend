import React from "react";

export interface IProfessor {
    data: {
        id: number;
        email: string;
        nome: string;
        cognome: string;
        foto: string;
        university: {
            name: string;
            dipartimento: string;
            contratto: string;
        }[];
        metrics: {
            chiarezza_spiegazione: number;
            materiale_didattico: number;
            disponibilita: number;
            correzione_compiti: number;
            overall: number;
        };
        corsi: {
            id: number;
            name: string;
            school: string;
            cfu: number;
            school_year: number;
            language: string;
            ssd: string;
            semester: string;
            description: string;
            num_reviews: number;
            metrics: {
                interesse_argomenti: number;
                difficolta_argomenti: number;
                difficolta_esame: number;
                lo_consiglieresti: number;
                overall: number;
            };
        }[];
    };
    // image: {};
    refresh: (id: number) => Promise<void>;
}

export interface IUser {
    auth: "OK" | "UNAUTH" | "VALIDATING" | "REQUIRES_CONFIRM" | "INVALID_CREDENTIALS" | "MISSING_USER";
    data: {
        email: string;
        name: string;
        surname: string;
        uniadvisor: string;
        university: string;
    };
    login: (data: { email: string; password: string; rememberMe: boolean }) => Promise<void>;
    validateSession: () => Promise<void>;
    logout: () => Promise<void>;
    changePassword: (data: { email: string; old_password: string; new_password: string }) => Promise<bool>;
    deleteUser: () => Promise<bool>;
}

export interface IProfessorListElem {
    professor_id: number;
    name: string;
    surname: string;
    university: string[];
}

interface IAppContext {
    professorList: IProfessorListElem[];
    user: IUser;
    professor: IProfessor;
}

export declare const AppContext: React.Context<IAppContext>;

export declare const useAppContext: () => IAppContext;
