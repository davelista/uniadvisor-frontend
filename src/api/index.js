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

        return res.data;
    } catch (e) {
        throw e;
    }


};

export default {ApiProfessor, ApiMail};