import { useEffect, useState } from "react";
import {ApiReviews, ApiUserReviews} from "../api";

const useUserReviews = (email, num = 1) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ApiUserReviews(email, num).then((data) => setReviews(data));
    }, [email, num]);

    return reviews;
};

export default useUserReviews;
