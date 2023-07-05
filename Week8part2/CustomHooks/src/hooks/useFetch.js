import { useState } from "react";
import { useEffect } from "react";
import { useFetch } from "react";

function useFetch(url) {
    // it will tell us if we have to laod..., of the data is received, or if there was an eroor
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data from API");
                }
                const result = await response.json();
                setData(result);
                setIsLoading(false);
            } catch(error) {
                setError(error);
                setIsLoading(false);

            }
        }
        fetchData();
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;

// Promises
    // Three statesin promise ? Pending State, Fulfilled, Rejected

//1.) Then Catch block
// fetch('url'). then((response) => setData(response)).catch(error) => setError(error))


//2.) Async AAwait (ES7)
// tyr to wrap the code below in a try and catch blcok
// const response = await fetch('url')