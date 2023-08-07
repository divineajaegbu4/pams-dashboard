// 'use client'
//
// import React, { ReactNode, useState } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//
// interface RootLayoutProps {
//     children: ReactNode;
// }
//
// const GetProviders: React.FC<RootLayoutProps> = ({children}) => {
// const queryClient: QueryClient = new QueryClient();
//
//     return (
//         <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     );
// }
//
// export default GetProviders;

'use client';

import React, { ReactNode, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface RootLayoutProps {
    children: ReactNode;
}

const GetProviders: React.FC<RootLayoutProps> = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

export default GetProviders;

