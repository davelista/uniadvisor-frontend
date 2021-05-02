export interface IReview {
    anno_accademico: string;
    anonimo: boolean;
    chiarezza_spiegazione_prof: number;
    corpo: string;
    correzione_compiti_prof: number;
    corso_id: number;
    data_creazione: string;
    difficolta_argomenti_corso: number;
    difficolta_esame_corso: number;
    disponibilita_prof: number;
    id: number;
    interesse_argomenti_corso: number;
    lo_consiglieresti_corso: number;
    materiale_didattico_prof: number;
    professor_id: number;
    stato: string;
    titolo: string;
    user_id: number;
    voto: string;
}

export default function useProfessorReviews (course_id: number, professor_id: number, num: number): IReview[];
