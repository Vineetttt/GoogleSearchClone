import React ,{useState, useEffect} from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "552e3dc7258ef49ee";
const URL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDf_RvFZ4_e5X4LiftxlJVtsFAr4fBkrGs&cx=552e3dc7258ef49ee&q=tesla"
const useGoogleSearch = (term) =>{
    const [data, setData] = useState(null);

    useEffect(() =>{
        const fetchData = async() =>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    },[term])

    return { data };
};

export default useGoogleSearch;
