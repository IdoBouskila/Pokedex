import { useEffect, useState } from "react";
import { callAPI } from "../api";

export const useTypes = () => {
    const [types, setTypes] = useState( [] );
    const [isLoading, setIsLoading] = useState( true )

    useEffect((prev) => {
        setIsLoading(true);

        callAPI('type')
        .then(data => {
            setTypes(data.results);
            setIsLoading(false);
        })
    }, []);
    

    return [
        types,
        isLoading,
    ]
    
}

