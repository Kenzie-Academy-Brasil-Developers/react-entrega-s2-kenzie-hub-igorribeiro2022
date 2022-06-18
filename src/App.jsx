import Routes from "./Routes";
import GlobalStyle from "./Styles/global";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from "react";

function App() {
  const [user, setUser] = useState({})
  return (
    <>
      <GlobalStyle />
      <Routes user={user} setUser={setUser} />
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
