import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/pages/home";
import Header from "./components/header/header";
import Detail from "./components/pages/detail";
import DataProvider from "./context/context";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
