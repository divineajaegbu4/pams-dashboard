import React, {useEffect, useState} from "react";
import { useSpring, animated } from "react-spring";

import {LoadingProspect} from "@/app/component/LoadingProspect/LoadingProspect"
import {ProspectListItem} from "@/app/component/ProspectListItem/ProspectListItem"

type ProspectData = {
    prospect_data: Users[],
    isLoading: boolean
}

type ProspectHeader = {
    header: string ,
    id: number
}


export const ProspectsTable:React.FC<ProspectData> = ({prospect_data, isLoading}) => {

    let prospect_list_data: Users[] = prospect_data || [];

    console.log("-----", prospect_data)

    const fade = useSpring({
        from: {
            opacity: 0,
            marginTop: "6rem"
        },
        to: {
            opacity: 1,
            marginTop: "0rem"
        }
    });



    let prospect_list = null;

    if(isLoading) {
        prospect_list = <LoadingProspect/>
    }else if (prospect_list_data?.length !== 0 && !isLoading) {
        prospect_list = prospect_list_data?.map((prospect_list: Users)=> (
            <ProspectListItem
               prospect_list={prospect_list}
            />
        ))
    }else if(prospect_list_data?.length === 0 && !isLoading) {
        prospect_list = (
            <tr>
                <td>Nothing to see here</td>
            </tr>
        );
    }

    const prospectHeaderData: ProspectHeader[] = [
        {header: "Prospect detail", id: 1},
        {header: "Phone", id: 2},
        {header: "Interest", id: 3},
        {header: "Agent Code", id: 4},
        {header: "Entry Channel", id: 5},
        {header: "Created At", id: 6},
        {header: "Updated At", id: 7},
        {header: "Status", id: 8},
    ]

    const prospectHeaderContent = (
        <>
            {prospectHeaderData?.map((prospectHeaderData: ProspectHeader)=> {
                const classSelector: string = `${
                    prospectHeaderData?.header === "Prospect detail" ? "agent_list_header--text agent" : "agent_list_header--text"
                }`
                return (
                  <>
                    <th
                        key={prospectHeaderData?.id}
                        colSpan={1}
                        className={classSelector}>
                        {prospectHeaderData?.header}
                    </th>
                  </>
                )
            })}
        </>
    )

    return (
        <animated.div style={fade} className="prospect_list">
            <table
                className="agent_list_body_container"
                cellPadding="5"
                cellSpacing="0"
            >

                <thead>
                  <tr className="agent_list_header">
                      {prospectHeaderContent}
                  </tr>
                </thead>


                <tbody>
                    {prospect_list}
                </tbody>

            </table>
        </animated.div>
    )

}

