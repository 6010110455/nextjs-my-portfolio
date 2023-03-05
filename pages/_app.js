import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
