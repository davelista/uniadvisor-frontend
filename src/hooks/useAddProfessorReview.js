import { useCallback, useState } from "react";
import { ApiAddProfessorReview, ApiAddProfessorReviewResponse } from "../api";

const useAddProfessorReview = () => {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const send = useCallback(async (data) => {
        setSending(true);
        const { res } = await ApiAddProfessorReview(data);
        if (res === ApiAddProfessorReviewResponse.OK) setSent(true);
        else setError(true);
    }, []);

    return [send, sending, sent, error];
};

export default useAddProfessorReview;
