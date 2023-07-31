import axios from "axios";
import {useState, useEffect} from "react";

import {ProspectsTable} from "@/app/component/ProspectTable/ProspectsTable"

export const ProspectIntegration = ()=> {

    const [prospects, setProspects] = useState<Users[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const prospectsHandler = ()=> {
        setIsLoading(false)
        try{
            axios.get<Users[]>("https://jsonplaceholder.typicode.com/users")
                .then((res):void=> {

                    const getProspectsData: Users[] = res?.data;
                    setProspects(getProspectsData)
                })

        }catch (err) {
            console.log(err)
        }


    };



    useEffect(()=>{
        prospectsHandler()
    }, []);


    return (
        <ProspectsTable prospect_data={prospects} isLoading={isLoading}/>
    )
}
