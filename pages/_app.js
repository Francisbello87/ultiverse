import CustomCursor from "@/components/cursor";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor/>
      <Component {...pageProps} />
    </>
  );
}
