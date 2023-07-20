"use client";

import Image from 'next/image'
import React, {useEffect, useState} from "react";
import {Header} from "@/app/component/Header/header";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { DatesRangeInput } from "semantic-ui-calendar-react";
import Select from "react-select";
import axios, {AxiosResponse} from "axios";
import {config} from "@/app/component/config";
import {getAllCities} from "@/lib/getAllCities";
import {PipelineDistribution} from "@/app/component/PipelineDistribution/PipelineDistribution";
import {ProspectsHeader} from "@/app/component/ProspectsHeader/ProspectsHeader"
import {ProspectsTableHeader} from "@/app/component/ProspectTableHeader/ProspectsTableHeader"
import Link from "next/link";
// import provider from "data/data-provider";

interface Option {
    value: string;
    label: string;
}

export default  function Home() {
    const [start_end_date_query, setStartEndDate_query] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [inputValue, setInputValue] = useState("");
    const [locationOptions, setLocationOptions] = useState<Option[]>([]);
    const [cityId, setCityId] = useState("");
    const [showTodayReport, toggleShowTodayReport] = useState(false);




    const handleInputChange = (e: any): void => {
        let obj = { value: e.value, label: e.label };
        // console.log(obj)
        if (e) {
            setCityId(e.value);
        } else {
            setCityId("");
        }
    };



    useEffect((): void => {
        axios.get('https://countriesnow.space/api/v0.1/countries/population/cities')
            .then(function(response) {
                if (response.status === 200) {
                    const res = response?.data?.data;

                    const cities = res?.map((city:Cities)=>({
                        value: city?.city,
                        label: city?.city
                    })) as Option[]
                    setLocationOptions(cities);
                } else {
                    throw new Error('Request failed');
                }
            })
            .catch(function(error) {
                console.error(error);
                // Handle any errors that occurred during the request
            });

    }, []);


console.log("location", locationOptions)



  return (
    <>
      <Header/>
        <section className={"p-[30px] pr-[50px] pl-[50px]"}>
        <main className={"flex justify-between"}>
            <div className="flex items-center gap-2 font-sans-serif">
              <Image src="/upload-document--v1.png" alt="uploaded-document" width={30} height={30}/>
              <small className="text-2 font-bold">
                Upload CSV
              </small>
            </div>

        <div className={'flex w-[480px] justify-between'}>
            <div className="flex items-center">
                <FaCalendarAlt className="absolute z-10 left-[70%] text-gray-500 text-sm" />
                <DatePicker
                    selected={selectedDate}
                    onChange={(date:Date) => setSelectedDate(date)}
                    placeholderText="Start Date - End Date"
                    dateFormat="dd/MM/yyyy"
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none placeholder-gray-500::placeholder text-xs font-normal w-50 max-w-[9rem]  h-10 cursor-pointer"
                />
           </div>
            <Select
                options={locationOptions}
                className="w-50 max-w-[9rem] mr-1 ml-1 placeholder-gray-500::placeholder text-xs"
                classNamePrefix="react-select"
                // isDisabled={isDisabled}
                // isLoading={isLoading}
                isSearchable={false}
                name="location"
                placeholder="Set Location"
                value={locationOptions.find((option: Option): boolean => option.value === cityId)} // Set the value based on cityId
                onChange={(selectedOption) => setCityId(selectedOption?.value || "")}
            />

            <div
                className={`
                 w-[50%] max-w-[9rem] rounded-[5px] bg-gray-200 h-[2.5rem] relative p-[10px] flex justify-start
                items-center transition-all ease-in-out duration-300 cursor-pointer   ${showTodayReport ? `justify-end transition-all ease-in-out duration-0.3 bg-blue-200`: ""}`}

                onClick={() => toggleShowTodayReport(!showTodayReport)}
            >
                <div className={`absolute right-[5%] h-[70%] w-[2.5rem] transition-all ease-in-out duration-0.3 rounded-[5px] bg-white ${showTodayReport ? "justify-end absolute left-[5%] transition-all ease-in-out duration-0.3":""}`}></div>
                <div className="toggle-button-text">
                    {!showTodayReport ? "OVERALL" : "TODAY"}
                </div>
            </div>
        </div>
        </main>
            <div>
                <PipelineDistribution/>
            </div>
        </section>


        <br/>
        <div className="relative z-100 top-[150px]">
            <ProspectsHeader />
        </div>
</>
  )
}

