import axios from "axios";
import ApiResponse from "./ApiResponse";

/*API to request professor detail*/
export const ApiProfessorsList = async () => {
    try {
        const res = await axios.get("/api/professors_list");
        return res.data.results;
    } catch (e) {
        if (e != null) {
            console.log(JSON.stringify(e));
            return null;
        }
        throw e;
    }
};

/*API to request professor detail*/
export const ApiProfessor = async (professorId) => {
    try {
        const res = await axios.get("/api/professors/" + professorId);
        return res.data;
    } catch (e) {
        switch (e.message) {
            case "Request failed with status code 400":
                return "No professor";
            case "Request failed with status code 500":
                return "Internal error";
            default:
                return "Error";
        }
        throw e;
    }
};

/*API to request professor image*/
export const ApiProfessorImage = async (professorId) => {
    try {
        const img = await axios.get("/api/professor_image/" + professorId);
        return img;
    } catch (e) {
        switch (e.message) {
            case "Request failed with status code 404":
                return "Image Not Found";
            default:
                break;
        }
        throw e;
    }
};

/*API to register new users*/
/*export const ApiRegisterResponse = new ApiResponse(
    "OK",
    "ALREADY_REGISTER",
    "CONFIRM_EMAIL",
    "INVALID_CREDENTIAL"
);*/

/**
 * Register
 * @param {{name: string; surname: string; email: string; password: string; university: string;}} data
 * @returns {{void}}
 */

/*export const ApiRegister = async (data) => {
    return axios
        .post("/api/register", data)
        .then((res) => res ({
            res: ApiRegisterResponse.OK,
            data: res.data,
    }))
        .catch((err) => {
            const { status } = err.response;
            switch ( status ){
                case 202:
                    return { res: ApiRegisterResponse.ALREADY_REGISTER, data: null};
                case 303:
                    return { res: ApiRegisterResponse.CONFIRM_EMAIL, data: null};
                default:
                    return { res: ApiRegisterResponse.INVALID_CREDENTIAL, data: null}
            }
        })
}*/

export const ApiRegister = async (name, surname, email, password, university, type, externalId) => {
    try {
        const res = await axios.post("/api/register", { name, surname, email, password, university });
        console.log(JSON.stringify(res));
        return res;
    } catch (e) {
        console.log(JSON.stringify(e));
        if (e.message === "Request failed with status code 400") {
            return "400";
        }
        if (e.message === "Request failed with status code 303") {
            return "303";
        }
        throw e;
    }
};

/*API to login users*/
export const ApiLoginResponse = new ApiResponse(
    "OK",
    "REQUIRES_CONFIRM",
    "INVALID_CREDENTIALS",
    "MISSING_USER",
    "UNAUTH"
);
/**
 * Login
 * @param {{email: string; password: string; remember_me: boolean}} data
 * @returns {{void}}
 */
export const ApiLogin = async (data) => {
    return axios
        .post("/api/user_login", data, { withCredentials: true })
        .then((res) => ({
            res: ApiLoginResponse.OK,
            data: res.data,
        }))
        .catch((err) => {
            const { status } = err.response;
            switch (status) {
                case 406:
                    return { res: ApiLoginResponse.MISSING_USER, data: null };
                case 400:
                    return { res: ApiLoginResponse.REQUIRES_CONFIRM, data: null };
                default:
                    return { res: ApiLoginResponse.INVALID_CREDENTIALS, data: null };
            }
        });
};

export const ApiValidateSessionResponse = new ApiResponse("OK", "UNAUTH");
export const ApiValidateSession = async () => {
    return axios
        .get("/api/test_cookies", { withCredentials: true })
        .then((res) => ({
            res: ApiValidateSessionResponse.OK,
            data: res.data,
        }))
        .catch(() => ({
            res: ApiValidateSessionResponse.UNAUTH,
            data: null,
        }));
};

/*API to send user's email*/
export const ApiMail = async (email) => {
    try {
        const res = await axios.post("/api/email", { email });
    } catch (e) {
        throw e;
    }
};

/*API to send user's email*/
export const ApiReviews = async (corso_id, professor_id, num) => {
    try {
        const res = await axios.get("/api/reviews_course", { params: { corso_id, professor_id, num } });
        return res.data.results;
    } catch (e) {
        if (e.message === "Request failed with status code 400") {
            return null;
        }
        throw e;
    }
};

/*API to universities list*/
export const ApiUniversitiesList = async () => {
    try{
        const res = await axios.get("/api/universities_list");
        return res.data;
    } catch (e) {
        throw e;
    }

}

export default { ApiProfessor, ApiMail, ApiRegister, ApiLogin, ApiUniversitiesList };
