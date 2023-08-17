import './globals.css';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';

import { Providers } from '@/app/providers';

const inter = Inter({ subsets: ['latin'] });


interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html className={inter.className}>
           <body>
               <Providers>
                   {children}
               </Providers>
           </body>
        </html>
    );
};

export default RootLayout;
