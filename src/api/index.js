import axios from "axios";

/*API to request professor detail*/
export const ApiProfessorsList = async () => {
    try{
        const res = await axios.get("/api/professors_list");
        return res.data.results;
    } catch (e){
        if(e != null){
            console.log(JSON.stringify(e));
            return null;
        }
        throw e;
    }
};

/*API to request professor detail*/
export const ApiProfessor = async (professorId) => {
    try{
        const res = await axios.get("/api/professors/"+professorId);
        return res.data;
    } catch (e){
        switch (e.message){
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
    try{
        const img = await axios.get("/api/professor_image/" + professorId)
        return img;
    } catch (e){
        switch (e.message){
            case "Request failed with status code 404":
                return "Image Not Found";
            default:
                break;
        }
        throw e;
    }
};

/*API to register new users*/
export const ApiRegister = async (name, surname, email, password, university, type, externalId) =>{
    try{
        const res = await axios.post("/api/register", {name, surname, email, password, university});
        console.log(JSON.stringify(res));
        return res;
    } catch (e) {
        console.log(JSON.stringify(e));
        if(e.message === "Request failed with status code 400"){
            return "400";
        }
        if(e.message === "Request failed with status code 303"){
            return "303";
        }
        throw e;
    }
}

/*API to login users*/
export const ApiLogin = async (email, password) => {
    try{
        /*withCredentials: true è per i cookies*/
        const res = await axios.post("/api/user_login", {email, password}, {withCredentials: true});
        return res.data;
    } catch (e) {
        console.log(JSON.stringify(e));
        if(e.message === "Request failed with status code 406"){
            return null;
        }
        else if(e.message === "Request failed with status code 400"){
            return null;
        }
        throw e;

    }
}

/*API to send user's email*/
export const ApiMail = async (email) => {
    try{
        const res = await axios.post("/api/email", {email})

    } catch (e) {
        throw e;
    }

};

/*API to send user's email*/
export const ApiReviews = async (corso_id, professor_id, num) => {
    try{
        const res = await axios.get("/api/reviews", { params: { corso_id, professor_id, num } });
        return res.data.results;
    } catch (e) {
        if(e.message === "Request failed with status code 400"){
            return null;
        }
        throw e;
    }

};

export default {ApiProfessor, ApiMail, ApiRegister, ApiLogin};