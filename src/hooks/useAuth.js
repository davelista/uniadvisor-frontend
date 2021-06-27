import { useCallback, useState } from "react";
import { ApiChangePassword, ApiChangePasswordResponse, ApiDeleteUser, ApiDeleteUserResponse, ApiLogin, ApiLoginResponse, ApiLogout, ApiLogoutResponse, ApiValidateSession, ApiValidateSessionResponse } from "../api";

const useAuth = () => {
    const [auth, setAuth] = useState("UNAUTH");
    const [user, setUser] = useState(null);

    const login = useCallback(
        async (opts) => {
            if (auth === "OK") console.error("User already logged in. Logout is required before login.");

            setAuth("VALIDATING");
            const { res, data } = await ApiLogin(opts);
            if (res === ApiLoginResponse.OK) setUser(data);
            setAuth(res);
        },
        [auth]
    );

    const validateSession = useCallback(async () => {
        if (auth === "OK") return;

        setAuth("VALIDATING");
        const { res, data } = await ApiValidateSession();
        if (res === ApiValidateSessionResponse.OK) setUser(data);
        setAuth(res);
    }, [auth]);

    const logout = useCallback(async () => {
        if (auth !== "OK") return;
        const { res } = await ApiLogout();
        if (res === ApiLogoutResponse.OK) {
            setAuth("UNAUTH");
            setUser(null);
        }
    }, [auth]);

    const changePassword = useCallback(async (data) => {
        if (auth !== "OK") return;
        const { res } = await ApiChangePassword(data);
        if (res === ApiChangePasswordResponse.OK) return true;
        return false;
    }, [auth])
    
    const deleteUser = useCallback(async () => {
        if (auth !== "OK") return;
        const { res } = await ApiDeleteUser();
        if (res === ApiDeleteUserResponse.FAILED) return false;
        setAuth("UNAUTH");
        setUser(null);
        return true;
    }, [auth]);

    return [auth, user, login, validateSession, logout, changePassword, deleteUser];
};

export default useAuth;
