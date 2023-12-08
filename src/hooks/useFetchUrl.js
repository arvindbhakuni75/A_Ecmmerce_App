import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchUrl = (url = "") => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const responce = await axios.get(process.env.REACT_APP_BASE_URL + url);
                setData(responce?.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUrl()
    }, [url])

  return { data, loading, error }
}

export default useFetchUrl;