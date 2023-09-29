import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { ClerkProvider } from "@clerk/nextjs";
// import { ChakraProvider } from '@chakra-ui/react'
import { SaasProvider } from '@saas-ui/react'



const MyApp: AppType = ({ Component, pageProps }) => {
  

  return (
    <ClerkProvider {...pageProps}>
      <SaasProvider>
      <Component {...pageProps} />
      </SaasProvider>
    </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);
