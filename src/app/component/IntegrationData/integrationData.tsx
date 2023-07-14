// import React, {useEffect, useState} from "react";
// import Select from "react-select";
// import {getAllCities} from "@/lib/getAllCities";
//
// export async function IntegrateData(locationOptions:string[], setLocationOptions: (options: string[]) => void): Promise<void> {
//     const cityData: Promise<Cities[]> = getAllCities();
//
//     const getCityData:Cities[] = await  cityData;
//
//
//     const getCityDataContent = (): void =>{
//
//         const getCity: string[] = getCityData?.map((city: Cities)=> city?.city?.toLowerCase());
//
//         setLocationOptions(getCity);
//
//     }
//
//
//     return (
//         <>
//             <Select
//                 options={locationOptions}
//                 className="basic-selector"
//                 classNamePrefix="react-select"
//                 // isDisabled={isDisabled}
//                 // isLoading={isLoading}
//                 isSearchable={false}
//                 name="location"
//                 placeholder="Set Location"
//                 value={inputValue}
//                 onChange={handleInputChange}
//             />
//         </>
//     )
//
//
// }
