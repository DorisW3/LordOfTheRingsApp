import GlobalStyle from "../styles";
import { volumes } from "@/lib/data";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
