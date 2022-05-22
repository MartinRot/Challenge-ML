import { useEffect, useState } from "react";
import { apiService } from "../services/api";

export function useFetch({ url }){
    const [ data, setData ] = useState()

    async function fetch(){
        const response = await apiService.get(url)        
        
        setData(response.data)
    }

    useEffect( () => {
        fetch()
    }, [ url ])

    return { data, fetch }
}
