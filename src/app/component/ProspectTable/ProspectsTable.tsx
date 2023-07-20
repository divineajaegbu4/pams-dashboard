import React, {useEffect, useState} from "react";
import axios from "axios";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import Image from "next/image";

import {imageData} from "@/app/component/ProspectsImages/images"


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
                isCheckbox: true, // Add isCheckbox property for the checkbox
                id: 1,
            },
            {
                header: "Phone",
                data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.zipcode),
                // isCheckbox: true,
                id: 2
            },
            {
                header: "Interest",
                data: imageData.map((img: Images) => img),
                // isCheckbox: true,
                id: 3,
            },
            {
                header: "Agent Code",
                data: mapProspectsData(prospects, (prospect: Users) => prospect?.username),
                // isCheckbox: true,
                id: 4
            },
            {
                header: "Entry Channel",
                data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.street),
                // isCheckbox: true,
                id: 5
            },
            {
                header: "Created At", data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.geo?.lat),
                // isCheckbox: true,
                id: 6
            },
            {
                header: "Updated At", data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.geo?.lng),
                // isCheckbox: true,
                id: 7
            },
            {
                header: "Status", data: mapProspectsData(prospects, (prospect: Users) => prospect?.address?.suite),
                // isCheckbox: true,
                id: 8
            },
        ]
        : [];



    // const ProspectsHeaderContentItem: React.FC<{ prospectsHeader: ProspectsHeader }> = ({ prospectsHeader }) => {
    //     return (
    //         <div className="relative mt-[70px] flex flex-col justify-center gap-[70px]">
    //             {prospectsHeader?.isCheckbox ? <input type="checkbox"/>:""}
    //             {prospectsHeader.id === 3 ? (
    //                 (prospectsHeader.data as Images[]).map((image: Images) => (
    //                     <Image key={image.id} src={image.img} alt="bike" width={40} height={40} className="-mt-[7px]" />
    //                 ))
    //             ) : (
    //                 Array.isArray(prospectsHeader.data) ? (
    //                     (prospectsHeader.data as Users[]).map((user: Users, index: number) => (
    //                         <p key={index} className="prospect-data-names">
    //                             {user.toString()}
    //                          </p>
    //                     ))
    //                 ) : (
    //                     <>
    //                         {prospectsHeader.data}
    //                     </>
    //                 )
    //             )}
    //         </div>
    //
    //     );
    // };

    const ProspectsBodyContentItem: React.FC<ProspectsHeaderContentItemProps> = ({ prospectsHeader }) => {
        const renderImages = (images: Images[]) => images.map(image =>
            <Image key={image.id} src={image.img} alt="bike" width={40} height={40} className="-mt-[7px]" />
        );

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

        return (
            <div className="relative mt-[70px]  justify-center gap-[70px]">
                {
                    prospectsHeader?.isCheckbox && (
                        <div>
                            <input type="checkbox" />
                        </div>
                    )
                }
                {renderData()}
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
