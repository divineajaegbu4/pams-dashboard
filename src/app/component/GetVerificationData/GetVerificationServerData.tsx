'use client'

import { useQuery } from '@tanstack/react-query'
import { GetUsers } from '@/lib/getUsers';




export function GetVerificationServerData() {
    const { data: users1, isLoading: loading1, error: error1 } = useQuery<Users[]>({ queryKey: ['users'], queryFn: GetUsers });
    const { data: users2, isLoading: loading2, error: error2 } = useQuery<Users[]>({ queryKey: ['users-2'], queryFn: GetUsers2 });

    return (
        <div>
            {loading1 || loading2 ? (
                'Loading...'
            ) : error1 || error2 ? (
                'An error occurred'
            ) : users2 ? (
                users2.map((user: Users) => (
                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                    </div>
                ))
            ) : null}
        </div>
    );
}
