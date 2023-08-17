"use client"

import {useMemo} from "react";
import { useQuery } from 'react-query';
 import {
     useReactTable,
     getCoreRowModel,
     getPaginationRowModel,
     getFilteredRowModel,
     getSortedRowModel
} from '@tanstack/react-table';

import { GetUsers } from '@/lib/getUsers';
import { Users, TableColumn, TRowOriginal } from '../../../../type';

interface VerificationData {
    initialVerificationData: TRowOriginal[],
    tableColumns: TableColumn[],
    noDataText: string
}

export const GetVerificationData: React.FC<VerificationData> = (props) => {
    const {initialVerificationData, tableColumns, noDataText} = props;

    const data: TRowOriginal[] = useMemo(() => initialVerificationData, [initialVerificationData]);
    const columns: TableColumn[] = useMemo(() => tableColumns, [tableColumns]);

    const tableInstance = useReactTable({
         columns,
         data,
         getCoreRowModel: getCoreRowModel(),
         getPaginationRowModel: getPaginationRowModel(),
         getSortedRowModel: getSortedRowModel(), //order doesn't matter anymore!
         // etc.
    });

    console.log("test", tableInstance.getHeaderGroups());


    return (

        <p>Hello</p>
    )
}
