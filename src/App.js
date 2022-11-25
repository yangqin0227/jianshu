import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";
import { Routes ,Route,Link,HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import ITpage from "./pages/itpage";
import Vippage from "./pages/vippage";
import Download from "./pages/download";

function App() {
  return (
    <Provider store={store}>
      <div>
      <HashRouter>
          <Header />
        
          
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/download" element={<Download/>}/>
            <Route path="/vip" element={<Vippage/>}/>
            <Route path="/it" element={<ITpage/>}/>

          </Routes>
          
        
          
        </HashRouter>
        

      </div>
      
    </Provider>
  );
}

export default App;
