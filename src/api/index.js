import axios from "axios";

export const ApiProfessor = async (professorEndpoint) => {
    try{
        const res = await axios.get("/api/professors/"+professorEndpoint);
        return res.data;
    } catch (e){
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

        //return res.data;
    } catch (e) {
        throw e;
    }
}

export const ApiLogin = async (email, password) => {
    try{
        const res = await axios.post("/api/login", {email, password}, { withCredentials: true })/*withCredentials: true è per i cookies*/
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
}

export default {ApiProfessor, ApiMail, ApiRegister};