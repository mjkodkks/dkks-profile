import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  RecoilRoot,
} from 'recoil';
import RecoilizeDebugger from "../store/RecoilizeDebugger";

function MyApp({ Component, pageProps }: AppProps) {
  return <RecoilRoot><RecoilizeDebugger /><Component {...pageProps} /></RecoilRoot>
}
export default MyApp
