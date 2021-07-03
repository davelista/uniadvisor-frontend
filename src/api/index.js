import axios from "axios";
import ApiResponse from "./ApiResponse";

/*API to request professor detail*/
export const ApiProfessorsList = async () => {
    try {
        const res = await axios.get("/api/professors_list");
        return res.data.results;
    } catch (e) {
        if (e != null) {
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

/*API to register new users*/
export const ApiRegisterResponse = new ApiResponse("OK", "ALREADY_REGISTERED", "FAILED");
export const ApiRegister = async (data) => {
    return axios
        .post("/api/register", data)
        .then((res) => {
            switch (res.status) {
                case 201:
                    return { res: ApiRegisterResponse.OK };
                case 202:
                    return { res: ApiRegisterResponse.ALREADY_REGISTERED };
                default:
                    return { res: ApiRegisterResponse.OK };
            }
        })
        .catch((err) => {
            const { status } = err.response;
            switch (status) {
                case 303:
                    return { res: ApiRegisterResponse.OK };
                case 400:
                    return { res: ApiRegisterResponse.FAILED };
                default:
                    return { res: ApiRegisterResponse.FAILED };
            }
        });
};

/*API to login users*/
export const ApiLoginResponse = new ApiResponse("OK", "REQUIRES_CONFIRM", "INVALID_CREDENTIALS", "MISSING_USER", "UNAUTH");
/**
 * Login
 * @param {{email: string; password: string; login_type: string; remember_me: boolean}} data
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

export const ApiLogoutResponse = new ApiResponse("OK", "FAILED");
export const ApiLogout = async () => {
    return axios
        .post("/api/user_logout", {}, { withCredentials: true })
        .then(() => ({ res: ApiLogoutResponse.OK }))
        .catch(() => ({
            res: ApiLogoutResponse.FAILED,
        }));
};

export const ApiAddProfessorReviewResponse = new ApiResponse("OK", "FAILED");
export const ApiAddProfessorReview = async (data) => {
    return axios
        .post("/api/new_review", data)
        .then(() => ({
            res: ApiAddProfessorReviewResponse.OK,
        }))
        .catch(() => ({
            res: ApiAddProfessorReviewResponse.FAILED,
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

/*API to see professor's reviews*/
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

/*API to see user's review*/
export const ApiUserReviews = async (user_email, num) => {
    try {
        const res = await axios.get("/api/reviews_user", { params: { user_email, num } });
        return res.data.results;
    } catch (e) {
        throw e;
    }
};

/*API to admin's page to approve or decline the reviews */
export const ApiAdminReviews = async (user_email, num) => {
    try {
        const res = await axios.get("/api/admin", { params: { user_email, num } });
        return res.data.results;
    } catch (e) {
        throw e;
    }
};

/*API to change reviews status*/
export const ApiChangeStatus = async (user_email, review_id, status) => {
    try{
        const res = await axios.post("/api/admin/change_status", null, {params: {user_email, review_id, status}});
        return res.data;
    } catch (e) {
        throw e;
    }
}

/*API to universities list*/
export const ApiUniversitiesList = async () => {
    try {
        const res = await axios.get("/api/universities_list");
        return res.data;
    } catch (e) {
        throw e;
    }
};

/*API to change logged user password */
export const ApiChangePasswordResponse = new ApiResponse("OK", "FAILED");
export const ApiChangePassword = async (data) => {
    return axios
        .post("/api/change_password", data)
        .then(() => ({ res: ApiChangePasswordResponse.OK }))
        .catch(() => ({
            res: ApiChangePasswordResponse.FAILED,
        }));
};

/*API to download user's data*/
export const ApiDownloadUserDataResponse = new ApiResponse("OK", "FAILED");
export const ApiDownloadUserData = async () => {
    return axios
        .get("/api/download_user_data")
        .then((res) => ({
            res: ApiDownloadUserDataResponse.OK,
            data: res.data,
        }))
        .catch(() => ({ res: ApiDownloadUserDataResponse.FAILED, data: null }));
};

/* API to delete user */
export const ApiDeleteUserResponse = new ApiResponse("OK", "FAILED");
export const ApiDeleteUser = async () => {
    return axios
        .get("/api/eliminate_user")
        .then(() => ({
            res: ApiDeleteUserResponse.OK,
        }))
        .catch(() => ({
            res: ApiDeleteUserResponse.FAILED,
        }));
};

export const ApiForgotPasswordResponse = new ApiResponse("OK", "FAILED", "MISSING_USER", "REQUIRES_CONFIRM");
export const ApiForgotPassword = async (data) => {
    return axios
        .post("/api/forgot_password", data)
        .then(() => ({
            res: ApiForgotPasswordResponse.OK,
        }))
        .catch((err) => {
            const { status } = err.response;
            switch (status) {
                case 400:
                    return { res: ApiLoginResponse.FAILED };
                case 409:
                    return { res: ApiLoginResponse.MISSING_USER };
                case 303:
                    return { res: ApiLoginResponse.REQUIRES_CONFIRM };
                default:
                    return { res: ApiLoginResponse.FAILED };
            }
        });
};

export const ApiResetPasswordResponse = new ApiResponse("OK", "FAILED");
export const ApiResetPassword = async (data) => {
    return axios
        .post("/api/reset_password", data)
        .then(() => ({
            res: ApiForgotPasswordResponse.OK,
        }))
        .catch(() => ({
            res: ApiResetPasswordResponse.FAILED,
        }));
};

export default {
    ApiProfessor,
    ApiMail,
    ApiRegister,
    ApiLogin,
    ApiLogout,
    ApiUniversitiesList,
    ApiDownloadUserData,
    ApiDeleteUser,
    ApiForgotPassword,
    ApiResetPassword,
    ApiUserReviews,
    ApiAdminReviews,
    ApiChangeStatus,
};
