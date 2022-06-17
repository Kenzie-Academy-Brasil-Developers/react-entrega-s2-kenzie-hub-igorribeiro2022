import Routes from "./Routes";
import GlobalStyle from "./Styles/global";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
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
