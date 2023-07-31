import React from "react";
import Image from "next/image";

import {StatusBackgrounds} from "@/app/component/StatusBackgrounds/StatusBackgrounds"


type ProspectList = {
    prospect_list: Users,
}

export const ProspectListItem:React.FC<ProspectList> = ({prospect_list}) => {

    let interestIcon;
    let bikeIcon: React.JSX.Element = <Image src="/Bike.cdf2cb3e.svg" alt="bike" width={40} height={40}/>
    let carIcon: React.JSX.Element = <Image src="/car.a08141c0.svg" alt="car" width={40} height={40}/>


    switch(prospect_list?.id) {
        case 1:
            interestIcon = bikeIcon
            break;
        case 2:
            interestIcon = bikeIcon
            break;
        case 3:
            interestIcon = carIcon
            break;
        case 4:
            interestIcon = bikeIcon
            break;
        case 5:
            interestIcon = bikeIcon
            break;
        case 6:
            interestIcon = carIcon
            break;
        case 7:
            interestIcon = bikeIcon
            break;
        case 8:
            interestIcon =  carIcon
            break;
        case 9:
            interestIcon = carIcon
            break;
        case 10:
            interestIcon =  bikeIcon
            break;
        default:
            break;

    }

    const bg = StatusBackgrounds(prospect_list?.address?.suite)

    return (
        <tr key={prospect_list?.id} className="single_agent_tab">
           <td className="single_agent_tab_section_agent">
               <input type="checkbox" className="checkbox"/>
               <div className="single_agent_tab_section_group">
                   <div className="single_agent_tab_section_name">
                       {prospect_list?.name}
                   </div>
                   <div className="single_agent_tab_section_city">{prospect_list?.address?.city}</div>
               </div>
           </td>

            <td className="single_agent_tab_section">
                {prospect_list?.address?.zipcode}
            </td>

            <td className="interestIcon single_agent_tab_section">
                {interestIcon || "---"}
            </td>

            <td className="single_agent_tab_section">
                {prospect_list?.username}
            </td>

            <td className="single_agent_tab_section">
                {prospect_list?.address?.street}
            </td>

            <td className="single_agent_tab_section">
                {prospect_list?.address?.geo?.lat}
            </td>

            <td className="single_agent_tab_section">
                {prospect_list?.address?.geo?.lng}
            </td>

            <td className="single_agent_tab_section">
                <div className={` single_agent_tab_section_status`} style={bg}>
                {prospect_list?.address?.suite}
                </div>
            </td>

        </tr>
    )
}
