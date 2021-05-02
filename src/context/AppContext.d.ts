import type React from "react";

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
    data: string;
    refresh: (data: string) => void;
}

export interface IProfessorListElem {
    professor_id: number;
    name: string;
    surname: string;
    university: string[];
}

export declare const AppContext: React.Context<{
    professorList: IProfessorListElem[];
    user: IUser;
    professor: IProfessor;
}>;
