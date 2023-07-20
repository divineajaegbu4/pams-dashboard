import axios from "axios";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Header} from "@/app/component/Header/header";
import {getSpecificBackgrounds, getSpecificImages} from "@/app/component/Conditions/conditions"
import Pie from "@/app/component/Cards/AnimatedSVG"
import {DashboardContent} from '@/app/component/Content/Content';


export const PipelineDistribution = () => {
    const [users, setUsers] = useState<Users[]>([])
    const getUsers = ()=> {
        try{
            axios.get<Users[]>("https://jsonplaceholder.typicode.com/users")
                .then((res):void=> {

                    const getNames: Users[] = res?.data;
                    setUsers(getNames)
                })

        }catch (err) {
            console.log(err)
        }

    }

   useEffect(()=>{
       getUsers()
   }, [users])

    const pipelineAwaiting = [
        {name: "Activated", count: 298, id: 1},
        {name: "Awaiting Vehicle Pickup", count: 10, id: 2},
        {name: "Awaiting Activation", count: 51, id: 3}
    ]

    const activationContent = (
        <>
            {pipelineAwaiting?.map((activation)=> {
                const getImages: string  = getSpecificImages(activation?.id)
                const getBackgrounds: string = getSpecificBackgrounds(activation?.id)
                return (
                    <div key={activation?.id} className={`${getBackgrounds}  content-hover content-border content-padding content-font content-width`}>
                        <strong>{activation?.count}</strong>
                        <br/>
                        <br/>
                        <span>{activation?.name}</span>
                        <div className={"content-position"}>
                            {getImages ? <Image src={getImages} alt={"First image"} width={30} height={30}/> : null}
                        </div>
                    </div>
                )
            })}

        </>

    )


    const churnDistributionData = [
        {name: "Not Interested", count: 3, id: 1},
        {name: "Failed", count: 59, id: 2},
    ]

    const churnDistributionContent = (

        <>
            {churnDistributionData?.map((churnData)=>{

                const getImages: string  = getSpecificImages(churnData?.id)
                const getBackgrounds: string = getSpecificBackgrounds(churnData?.id)
                return (
                    <>
                        <div key={churnData?.id} className={`${getBackgrounds} content-hover content-border content-padding content-font content-width`}>
                            <strong>{churnData?.count}</strong>
                            <br/>
                            <br/>
                            <span>{churnData?.name}</span>
                            <div className={"content-position"}>
                                {getImages ? <Image src={getImages} alt={"First image"} width={30} height={30}/> : null}
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )



    return (
        <>
        <section className={"flex transform  translate-y-20 gap-[20px]"}>
        <main className={"bg-white w-[680px] pt-16 pb-16 pl-[1.5rem] pr-[3.3rem] rounded-[5px] border-[1px] border-solid border-blue-100 "}>
           <strong className={"relative  -top-[35px] text-[15px] font-montserrat text-black"}>Application in Pipeline Distribution</strong>
            <article>
            <div className={"relative z-100 grid grid-cols-2x100 gap-x-[50px] gap-y-[20px]"}>
                <DashboardContent users={users} imgs={getSpecificImages} bgImgs={getSpecificBackgrounds} />
            </div>
            </article>
        </main>

            <section className="flex w-[700px] flex-wrap gap-x-[20px]">
            <main className={"bg-white w-[300px] h-[450px] pt-5 pb-16 pl-[1.5rem] rounded-[5px] border-[1px] border-solid border-blue-100"}>
                <p className={"text-[13px] font-mono"}>Conversion Rate</p>
                <br/>
                <article>
                    <div>
                        {/*<Pie*/}
                        {/*    // data={dataChart}*/}
                        {/*    width={170}*/}
                        {/*    height={170}*/}
                        {/*    innerRadius={45}*/}
                        {/*    outerRadius={85}*/}
                        {/*/>*/}
                        <Image src={"/track.b1b802d1 (1).svg"} alt={"track"} width={150} height={150} className={"ml-[2.5rem]"}/>
                        <br/>
                        <nav>
                            <ul className={"flex w-[300px] flex-wrap gap-x-2 font-bold "}>
                                <li><small>Activation Rate: <span>1:00%</span></small></li>
                                <li><small>Pause Rate: <span>1:00%</span></small></li>
                                <li><small>Churn Rate: <span>1:00%</span></small></li>
                            </ul>
                        </nav>
                    </div>
                </article>
            </main>

            <main>

                <div className="flex flex-col gap-[1.1rem]">
                    {activationContent}
                </div>
            </main>


            <main className="bg-white p-[30px] gap-4 w-[620px] h-[50vh] relative z-100  content-border">
                <strong className="ml-2"><small>Churn Distribution</small></strong>
                <article className="flex justify-around gap-[20px] transform translate-y-[30px]">
                {churnDistributionContent}
                </article>
            </main>
            </section>
        </section>

        </>
    )
}
