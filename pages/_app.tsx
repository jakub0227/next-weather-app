import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Layout } from "../hoc/Layout/Layout";
import theme from "../hoc/Layout/Theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
