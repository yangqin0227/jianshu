import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header />
      {/* <BrowserRouter>
        <Route path="/" c></Route>
      
      </BrowserRouter> */}
    </Provider>
  );
}

export default App;
