import Navbar from "./Navbar";
import Main from "./Main";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Main />
    </Provider>
  );
}

export default App;
