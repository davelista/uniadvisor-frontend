import { useCallback, useState } from "react";
import { ApiRegister, ApiRegisterResponse } from "../api";

const useSignUp = () => {
    const [sending, setSending] = useState(false);
    const [requiresConfirm, setRequiresConfirm] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState(false);

    const signup = useCallback(async (data) => {
        setSending(true);
        const { res } = await ApiRegister(data);
        if (res === ApiRegisterResponse.OK) setRequiresConfirm(true);
        else if (res === ApiRegisterResponse.ALREADY_REGISTERED) setRegistered(true);
        else setError(true);
    }, []);

    return [signup, sending, requiresConfirm, registered, error];
};

export default useSignUp;
