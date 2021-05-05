import { useCallback, useState } from "react";
import { ApiLogin } from "../api";

const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = useCallback(async (email, password) => {
        setUser(null); // TODO: sign-out

        if (!email || !password) return false;

        const data = await ApiLogin(email, password);
        if (data === null) return false;

        setUser(data);
        return true;
    }, []);

    return [user, login];
};

export default useAuth;
