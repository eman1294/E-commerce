import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Header from './components/header/Header.jsx';
import Products from './components/products/Products.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/registor/Register.jsx';
import Cat from './components/categories/Cat.jsx';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import CatProduct from './components/catproduct/CatProduct';
import Details from './components/details/Details';
import { useEffect, useState, CSSProperties } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import ProtectedRouter from './components/protection/ProtectedRouter';
import GridLoader from "react-spinners/GridLoader";

//loader
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
  paddingTop:"250px"
};
//
function App() {
  //loader
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false) }, 4000)
  }, [])

  //
  let [user_data, set_user_data] = useState(null);
  let navigate = useNavigate();

  function getUserData() {
    let decoded = jwtDecode(localStorage.getItem("userData"));
    set_user_data(decoded);
    console.log(decoded);

  }
  function logout() {
    localStorage.removeItem("userData");
    set_user_data(null);
    navigate('/login');

  }
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      getUserData();
    }
  }, [])
  return (

    < div className="App bg-dark text-white" >
      {
        loading ? <>
          <GridLoader
            loading={loading}
            color='yellow'
            size={30}
            aria-label="GridLoader"
            data-testid="loader"
            cssOverride={override}


          />

        </>

          :
          <>
            <Navbar userd={user_data} logout={logout} />

            <Routes>
              <Route element={<ProtectedRouter />}>
                <Route path='home' element={<Cat />}></Route>
                <Route path='products' element={<Products />}> </Route>
                <Route path='/category/:catName' element={<CatProduct />}></Route>
                <Route path='/product/:id' element={<Details />}></Route>
              </Route>
              <Route path='/' element={<Header />}></Route>
              <Route path='login' element={<Login getUserData={getUserData} />}></Route>
              <Route path='register' element={<Register />}></Route>
            </Routes>

            <Footer />
          </>
      }

    </div >
  );
}

export default App;
