"use client"

import React from 'react'
import {useSpring} from "react-spring";
import {
    Avatar,
    Box,
    Text,
    HStack,
    Input,
    InputGroup,
    Select,
    InputLeftElement,
    Flex
} from "@chakra-ui/react";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
    UseQueryResult,
    isServer,
} from '@tanstack/react-query'
import Image from "next/image";
import Moment from "react-moment";


import {GetUsers} from "@/lib/getUsers";

import {Header} from "@/app/component/Header/header";

interface  TableCell {
    (data: { cell: {row: {original: {name: string, username: string, address:{city: string, zipcode: string, suite: string}, phone: string, avatarSrc: string}}}}) => JSX.Element;
}

interface TableColumn {
    accessorKey: string,
    header: string,
    cell: TableCell

}

const COLUMNS: TableColumn[] = [
    {
        accessorKey: "avatar",
        header: "",
        cell: ({cell}) => {
            const prospectName = cell.row.original.name;
            const apiAvatar= "/next.svg"
            return <Avatar name={prospectName} src={apiAvatar}/>
        }
    },

    {
        accessorKey: "prospects",
        header: "Prospects",
        cell: ({cell}) => {
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
        cell: ({cell}) => {
            const prospectsId = cell.row.original.username;
            return <Text>{prospectsId}</Text>

        }
    },

    {
        accessorKey: "date",
        header: "Date",
        cell: ({cell}) => {
            const date = cell.row.original.address.zipcode;
            return <Moment format="YYYY/MM/DD">{date}</Moment>;

        }
    },

    {
        accessorKey: "phone_number",
        header: "Phone Number",
        cell: ({cell}) => {
            const phoneNumber = cell.row.original.phone;
            return <Text>{phoneNumber}</Text>

        }
    },

    {
        accessorKey: "location",
        header: "Location",
        cell: ({cell}) => {
            const location = cell.row.original.address.city;
            return <Text>{location}</Text>

        }
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({cell}) => {
            const status = cell.row.original.address.suite;
            return <Text>{status}</Text>

        }
    }
];

export default function Prospects() {
    const fade = useSpring({
        from: {
            opacity: 0,
            marginTop: "3rem"
        },
        to: {
            opacity: 1,
            marginTop: "0rem"
        }
    });

    const queryKey: string[] = ['users'];

    const { data, isLoading, error } = useQuery(queryKey, GetUsers, {
        enabled: typeof window !== 'undefined',
    });

    console.log("users", data)

  return (

       <>
        <Header/>
        <div>Prospects</div>
      </>
  )
}
