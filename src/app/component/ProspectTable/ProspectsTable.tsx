import React, {useEffect, useState} from "react";
import axios from "axios";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import Image from "next/image";

import {imageData} from "@/app/component/ProspectsImages/images";
import {inputs} from "@/app/component/ProspectInputs/input"


export const ProspectsTable = () => {

    const [prospects, setProspects] = useState<Users[]>([])
    const prospectsHandler = ()=> {
        try{
            axios.get<Users[]>("https://jsonplaceholder.typicode.com/users")
                .then((res):void=> {

                    const getProspectsData: Users[] = res?.data;
                    setProspects(getProspectsData)
                })

        }catch (err) {
            console.log(err)
        }

    }

    useEffect(()=>{
        prospectsHandler()
    }, []);


    const mapProspectsData = (prospects: Users[], callback: (prospect: Users) => any) => {
        return prospects.map(callback);
    };


    const prospectsHeaderData: ProspectsHeader[] = prospects
        ? [
            {
                header: "Prospect detail",
                data: mapProspectsData(prospects, (prospect: Users) => prospect?.name),
                isCheckbox: inputs.map((input: Checkbox)=> input), // Add isCheckbox property for the checkbox
                id: 1,
            },
            {
                header: "Phone",
                data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.zipcode),
                id: 2
            },
            {
                header: "Interest",
                data: imageData.map((img: Images) => img),
                id: 3,
            },
            {
                header: "Agent Code",
                data: mapProspectsData(prospects, (prospect: Users) => prospect?.username),
                id: 4
            },
            {
                header: "Entry Channel",
                data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.street),
                id: 5
            },
            {
                header: "Created At", data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.geo?.lat),
                id: 6
            },
            {
                header: "Updated At", data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.geo?.lng),
                id: 7
            },
            {
                header: "Status", data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.suite),
                id: 8
            },
        ]
        : [];


    const ProspectsBodyContentItem: React.FC<ProspectsHeaderContentItemProps> = ({ prospectsHeader }) => {
        const renderImages = (images: Images[]) => images.map(image =>
            <Image key={image.id} src={image.img} alt="bike" width={40} height={40} className="-mt-[7px]" />
        );

        const renderInputs = (inputChecked: Checkbox[]) => inputChecked?.map((input)=> (
            <div className="relative right-[25%] -top-[800px] ">
                <input type={input?.isChecked} />
            </div>
        ))

        const renderUsers = (users: Users[]) => users.map((user, index) =>
            <p key={index} className="prospect-data-names">
                {user.toString()}
            </p>
        );

        const renderData = () => {
            if (Array.isArray(prospectsHeader.data)) {
                if (prospectsHeader.id === 3) {
                    return renderImages(prospectsHeader.data as Images[]);
                } else {
                    return renderUsers(prospectsHeader.data as Users[]);
                }
            }

            return  prospectsHeader.data;
        }

        const renderInput = () => {
            return renderInputs(prospectsHeader.isCheckbox as Checkbox[])
        }

        return (
            <div className="relative mt-[70px] flex flex-col justify-center gap-[58px]">
                {/*{prospectsHeader?.isCheckbox && <input type="checkbox" />}*/}
                {renderData()}
                {renderInput()}

            </div>
        );
    };

    const prospectsHeaderContent = (
        <>
            {prospectsHeaderData?.map((prospectsHeader: ProspectsHeader) => {
                return (
                    <div key={prospectsHeader?.id} className="w-[100%]">
                        <div>
                            <p>{prospectsHeader?.header}</p>
                        </div>
                        <ProspectsBodyContentItem prospectsHeader={prospectsHeader} />
                    </div>
                );
            })}
        </>
    );


    return (
        <section>
        <main className="prospects-header-background">
        <div className="prospects-header-table">
            {prospectsHeaderContent}
        </div>
        </main>

        </section>
    )
}
