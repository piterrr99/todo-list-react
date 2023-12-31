import { useEffect, useState } from "react"

export const useFetch = (url, counter = 0) => {

    const [state, setState] = useState({data: null, loading: true, error: null})    

    useEffect(()=>{
        
        setState({
            loading: true,
            error: null,
            data: null
        });
                    
        fetch(url)
            .then( resp=>resp.json() )
            .then(data=>{                    
                setState({
                    loading: false,
                    error: null,
                    data
                });                            
            });
        
    }, [url, counter])

    
    return state;

}
