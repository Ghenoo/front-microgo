import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
