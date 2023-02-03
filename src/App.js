import "./App.css";

import Header from "./Header";
import Sidbar from "./Sidbar";
import Products from "./Products";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Carts from "./Carts";
import { useDataLayerValue } from "./MockData/DataLayer/DataLayer";
import RegisterPage from "./component/RegisterPage";
import { useEffect, useState } from "react";
import Login from "./component/Login";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase";
import PaymentPage from "./PaymentPage";
function App() {
  const [isLoggedUser, setLoggedUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setLoggedUser(true);
      } else {
        setLoggedUser(false);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
            <>
            <Route path="/" element={<Login />} />
              <Route
              exact
                path="/home"
                element={
                  <div className="app_header">
                    <Header />
                    <div className="app_body">
                      <Sidbar />
                      <Products />
                    </div>
                  </div>
                }
              />
              <Route path="/checkout" element={<Carts />} />
              <Route path="/payment" element={<PaymentPage />} />
             
            </>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
