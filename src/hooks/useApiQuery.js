
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useApiQuery = (url = "") => {
    const fetchApiData = async() => {
        const responce = await axios.get(process.env.REACT_APP_BASE_URL + url);
        return responce.data
     }
    
    const { isPending, isLoading, isError, data, error } = useQuery({
        queryKey: [url],
        queryFn : fetchApiData,
        staleTime: 10 * 1000,
    });

  return { isPending, isError, data, error, isLoading }
}

export default useApiQuery;
