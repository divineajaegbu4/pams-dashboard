// pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import RootLayout from "@/app/layout"; // Adjust the path based on your folder structure

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </RootLayout>
    );
}

export default MyApp;
