import '../styles/global.scss';
import { StrictMode } from "react";
import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { configureAppStore } from "../redux/store/configure-store";

const store = configureAppStore()
function MyApp({ Component, pageProps }: AppProps) {
  return ( <Provider store={store}>
    <ConfigProvider autoInsertSpaceInButton={false}>
      <StrictMode>
        <Component {...pageProps} />
      </StrictMode>
    </ConfigProvider>
  </Provider>)
}

export default MyApp
