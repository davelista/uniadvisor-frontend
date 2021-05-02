import { useEffect, useState } from "react";
import { ApiReviews } from "../api";

const useProfessorReviews = (course_id, professor_id, num = 1) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ApiReviews(course_id, professor_id, num).then((data) => setReviews(data));
    }, [course_id, professor_id, num]);

    return reviews;
};

export default useProfessorReviews;
