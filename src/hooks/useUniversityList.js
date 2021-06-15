import {useEffect, useState} from 'react';
import {ApiUniversitiesList} from "../api";

const useUniversityList = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        if(state == null){
            setUniversitiesList();
        }
    }, []);

    const setUniversitiesList = async () => {
        const professorsList = await ApiUniversitiesList();

        setState(professorsList);
    };
    return state;
};

export default useUniversityList;