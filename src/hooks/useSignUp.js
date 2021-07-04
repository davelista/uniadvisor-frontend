import { useCallback, useState } from "react";
import { ApiRegister } from "../api";

const useSignUp = () => {
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState(null);

    const signup = useCallback(async (data) => {
        setSending(true);
        const { res } = await ApiRegister(data);
        setResult(res);
    }, []);

    return [signup, sending, result];
};

export default useSignUp;
