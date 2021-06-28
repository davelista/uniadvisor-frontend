import { useCallback, useState } from "react";
import { ApiResetPassword } from "../api";

export const useResetPassword = () => {
    const [result, setResult] = useState(null);

    const request = useCallback(async (data) => {
        const { res } = await ApiResetPassword(data);
        setResult(res);
    }, []);

    return [request, result];
};
