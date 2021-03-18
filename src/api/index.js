import axios from "axios";

export const ApiProfessor = async (professorEndpoint) => {
    try{
        const res = await axios.get("/api/professors/"+professorEndpoint);
        return res.data;
    } catch (e){
        throw e;
    }
};

export const ApiProfessorImage = async (professorEndpoint) => {
    try{
        const img = await axios.get("/api/professor_image/" + professorEndpoint)
        return img;
    } catch (e){
        console.log(JSON.stringify(e));
        if(e.message === "Request failed with status code 404"){
            return "Not Found Image";
        }
        throw e;
    }
};

export const ApiMail = async (email) => {
    try{
        const res = await axios.post("/api/email", {email})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });

        //return res.data;
    } catch (e) {
        throw e;
    }

};

export const ApiRegister = async (name, surname, email, password, university) =>{
    try{
        const res = await axios.post("/api/register", {name, surname, email, password, university})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });

        return res;
    } catch (e) {
        throw e;
    }
}

export const ApiLogin = async (email, password) => {
    try{
        /*withCredentials: true è per i cookies*/
        return await axios.post("/api/user_login", {email, password}, {withCredentials: true});

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

export default {ApiProfessor, ApiProfessorImage, ApiMail, ApiRegister, ApiLogin};