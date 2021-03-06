import { Provider } from "react-redux";
import Navigator from "./src/navigators";

import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
