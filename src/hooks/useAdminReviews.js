import { useEffect, useState } from "react";
import {ApiAdminReviews, ApiReviews, ApiUserReviews} from "../api";

const useAdminReviews = (email, num = 1) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ApiAdminReviews(email, num).then((data) => setReviews(data));
    }, [email, num]);

    return reviews;
};

export default useAdminReviews;
