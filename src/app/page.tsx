"use client";

import Image from 'next/image'
import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Link from 'next/link'
import {Header} from "@/app/component/Header/header";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Home() {
    const [startDate, setStartDate] = useState(new Date())

  return (
    <main>
      <Header/>
        <section>
            <div className="flex items-center gap-2 font-sans-serif">
              <Image src="/upload-document--v1.png" alt="uploaded-document" width={30} height={30}/>
              <small className="text-2 font-bold">
                Upload CSV
              </small>
            </div>

            <div>
                {/*<DatePicker*/}
                {/*    selected={startDate}*/}
                {/*    onChange={(date:any) => setStartDate(date)}*/}
                {/*    placeholderText="Start Date - End Date"*/}
                {/*/>*/}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
            </div>

        </section>
    </main>
  )
}
