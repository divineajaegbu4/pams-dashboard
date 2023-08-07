"use client"

import { useQuery } from 'react-query';

import { GetUsers } from '@/lib/getUsers';

interface VerificationData {
    initialVerificationData: Users
}

export const GetVerificationData: React.FC<VerificationData> = ({initialVerificationData}) => {
    const { data} = useQuery({
        queryKey: ['users'],
        queryFn: GetUsers,
        initialData: initialVerificationData,
    })

    console.log("usersData", data)

    return (

        <p>Hello</p>
    )
}
