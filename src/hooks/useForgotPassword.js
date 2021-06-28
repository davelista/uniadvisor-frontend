import { useCallback, useState } from "react";
import { ApiForgotPassword } from "../api";

const useForgotPassword = () => {
    const [result, setResult] = useState(null);

    const request = useCallback(async (data) => {
        const { res } = await ApiForgotPassword(data);
        setResult(res);
    }, []);

    return [request, result];
};

export default useForgotPassword;
