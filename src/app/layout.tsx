import './globals.css';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import { Hydrate } from '@tanstack/react-query';

import { Providers } from '@/app/providers';
import GetProviders from '@/app/getProviders'

const inter = Inter({ subsets: ['latin'] });


interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html className={inter.className}>
           <body>
           <Hydrate state={null}>
               <Providers>
                   <GetProviders>{children}</GetProviders>
               </Providers>
           </Hydrate>

           </body>
        </html>
    );
};

export default RootLayout;
