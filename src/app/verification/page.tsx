"use client"
import React, { useEffect, useState } from 'react';
import { Avatar, Text } from '@chakra-ui/react';
import Moment from 'react-moment';
import { Hydrate } from '@tanstack/react-query';


import { GetUsers } from '@/lib/getUsers';
import { Header } from '@/app/component/Header/header';
import {GetVerificationData} from '@/app/component/GetVerificationData/GetVerificationData'

type Address = { city: string; zipcode: string; suite: string };
type TRowOriginal = {
    name: string;
    username: string;
    address: Address;
    phone: string;
    avatarSrc: string;
};

type TRow = {
    original: TRowOriginal;
};

type TCell = {
    row: TRow;
};

type TableData = {
    cell: TCell;
};

interface TableCell {
    data: TableData;
}

interface TableColumn {
    accessorKey: string;
    header: string;
    cell(tableData: TCell): React.JSX.Element;
}

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


const Prospects =  () => {
    const [initialData, setInitialData] = useState<Users | null>(null);

    useEffect(() => {
        GetUsers().then(data => {
            setInitialData(data);
        });
    }, [])

    if (!initialData) {
        return <div>Loading...</div>; // or any loading spinner
    }

    return (
        <Hydrate state={initialData}>
            <Header />
            <div>Prospects</div>
            <GetVerificationData initialVerificationData={initialData}/>
        </Hydrate>
    );
};

export default Prospects;


