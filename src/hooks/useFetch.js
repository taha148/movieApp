import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, BASE_API } from "../constant";

export const useFetch = (nameAPI, pageNumber = 1) => {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState({});
    const [error, setError] = useState("");
    useEffect(() => {
        if (!nameAPI || pageNumber > 3) return;

        const fetchData = async () => {
            try {
                const responsePromise = await axios.get(`${BASE_API}${nameAPI}${API_KEY}&page=${pageNumber}`);
                if (pageNumber == 1) {
                    setLoading(true);
                    setResponse(responsePromise?.data)
                } else {
                    setResponse({ ...responsePromise?.data, page: responsePromise?.data?.page, results: [...(response?.results || []), ...responsePromise?.data?.results] })
                }
                setLoading(false);
            }
            catch (err) {
                setLoading(false);
                setError(err)
            }

        };

        fetchData();
    }, [nameAPI, pageNumber]);

    return { loading, response, error };
};


export const useFetchGenre = () => {
    const [genre, setGenre] = useState({});
    const [errorGenre, setErrorGenre] = useState("");

    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list${API_KEY}&language=en-US`);
                setGenre(response?.data);
            }
            catch (err) {
                setErrorGenre(err)
            }

        };

        fetchData();
    }, []);

    return { genre, errorGenre };
};


export const useFetchFullDataByID = (id) => {
    const [loadingFullDetail, setLoadingFullDetaile] = useState(true);
    const [fullDetail, setFullDetail] = useState([]);
    useEffect(() => {
        const urlsByID = [
            axios.get(`${BASE_API}${id}${API_KEY}&language=en-US`),
            axios.get(`${BASE_API}${id}/credits${API_KEY}&language=en-US`),
        ];

        allSettledPromises(urlsByID).then(res => setFullDetail(res))
    }, [id])

    return { loadingFullDetail, fullDetail };


}


export const allSettledPromises = (promises) => {

    return Promise.all(promises.map(promise => promise
        .then(value => {
            return { status: 'resolve', data: value.data }
        })
        .catch(reason => ({ status: 'rejected', reason }))
    ));
}