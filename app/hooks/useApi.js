import { useState } from 'react';

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState();


    const request = async (...args) => {
        setLoading(true);
        const res = await apiFunc(...args)
        setLoading(false);

        if (!res.ok) return setError(true);

        setError(false);
        setData(res.data);
    }
    return { data, error, loading, request }
}