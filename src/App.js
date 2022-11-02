
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ComboTraderForm from './Pages/ComboTraderForm';
import ComboTrader from './Pages/ComboTrader';
import Eprocurement from './Pages/Eprocurement';
import EprocurementForm from './Pages/EprocurementForm';
import YieldMax from './Pages/YieldMax';
import AboutUs from './Pages/AboutUs';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBg8FsOdTqtB5do0W571T6LLGzxFja2Fzw",
    authDomain: "combo-trader.firebaseapp.com",
    projectId: "combo-trader",
    storageBucket: "combo-trader.appspot.com",
    messagingSenderId: "14861079385",
    appId: "1:14861079385:web:f51dbfa0309027fc0e7248",
    measurementId: "G-KRNTQBJPE9"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home db={db} />} />
        <Route path="/combo-trader" element={<ComboTrader db={db} />} />
        <Route path="/yield-max" element={<YieldMax db={db} />} />
        <Route path="/about-us" element={<AboutUs db={db} />} />
        <Route path="/e-procure" element={<Eprocurement db={db} />} />
        <Route path='/contact_us' element={<ContactUs db={db} />} />
        <Route path='/combo-trader/work_with_us' element={<ComboTraderForm db={db} />} />
        <Route path='/e-procure/form' element={<EprocurementForm db={db} />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
