import {useState} from "react";
import Constants from "../Constants/Constants";

const useDate= () => {
    const [isLoading, setLoading] = useState(false)

    const GetDateFromServer = async () => {
        try {
            setLoading(true)
            const data = await fetch(Constants.fetchUrl);
            if (data.ok) {
                const result = await data.json();
                return result;
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
        return undefined
    }

    return {
        GetDateFromServer,
        isLoading
    }
}

export default useDate;