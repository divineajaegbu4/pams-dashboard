// import { dehydrate, Hydrate } from '@tanstack/react-query'
// import getQueryClient from '@/app/getQueryClient'
// import { GetUsers } from '@/lib/getUsers';
// import {GetVerificationServerData} from '@/app/component/GetVerificationData/GetVerificationServerData'
//
//
//
// export default async function HydratedPosts() {
//     const queryClient = getQueryClient()
//     await queryClient.prefetchQuery(['users'], GetUsers)
//     const dehydratedState = dehydrate(queryClient)
//
//     return (
//         <Hydrate state={dehydratedState}>
//             <GetVerificationServerData />
//         </Hydrate>
//     )
// }
