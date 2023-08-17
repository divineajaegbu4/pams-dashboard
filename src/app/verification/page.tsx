"use client"
import React, { useEffect, useState } from 'react';
import { Avatar, Text } from '@chakra-ui/react';
import Moment from 'react-moment';


import { GetUsers } from '@/lib/getUsers';
import { Header } from '@/app/component/Header/header';
import {GetVerificationData} from '@/app/component/GetVerificationData/GetVerificationData'
import { TCell, TableColumn, TRowOriginal } from '../../../type';





const Prospects =  () => {
    const [initialData, setInitialData] = useState<TRowOriginal[] | null>([]);

    const COLUMNS: TableColumn[] = [
        {
            accessorKey: "avatar",
            header: "",
            cell: (cell: TCell) => {
                const prospectName = cell.row.original.name;
                const apiAvatar= "/next.svg"
                return <Avatar name={prospectName} src={apiAvatar}/>
            }
        },

        {
            accessorKey: "prospects",
            header: "Prospects",
            cell: (cell: TCell) => {
                const prospectsFullName = cell.row.original.name;
                return (
                  <Text textTransform="capitalize">
                      {!prospectsFullName ? "N/A": prospectsFullName}
                  </Text>
                )
            }
        },

        {
            accessorKey: "prospects_id",
            header: "Prospects ID",
            cell: (cell: TCell) => {
                const prospectsId = cell.row.original.username;
                return <Text>{prospectsId}</Text>

            }
        },

        {
            accessorKey: "date",
            header: "Date",
            cell: (cell: TCell) => {
                const date = cell.row.original.address.zipcode;
                return <Moment format="YYYY/MM/DD">{date}</Moment>;

            }
        },

        {
            accessorKey: "phone_number",
            header: "Phone Number",
            cell: (cell: TCell) => {
                const phoneNumber = cell.row.original.phone;
                return <Text>{phoneNumber}</Text>

            }
        },

        {
            accessorKey: "location",
            header: "Location",
            cell: (cell: TCell) => {
                const location = cell.row.original.address.city;
                return <Text>{location}</Text>

            }
        },

        {
            accessorKey: "status",
            header: "Status",
            cell: (cell: TCell) => {
                const status = cell.row.original.address.suite;
                return <Text>{status}</Text>

            }
        }
    ];


    useEffect(() => {
        GetUsers().then(data => {
            setInitialData(data);
        });
    }, [initialData])


    useEffect(() => {
        console.log("data", initialData)
    }, [initialData]);

    if (!initialData) {
        return <div>Loading...</div>; // or any loading spinner
    }



    return (
        <>
            <Header />
            <div>Prospects</div>
            <GetVerificationData 
              initialVerificationData={initialData}
              tableColumns={COLUMNS}
              noDataText="No user is found!"
            />
        </>
    );
};

export default Prospects;


