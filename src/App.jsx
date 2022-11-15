import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddEvent from "./components/AddEvent";
import ListEvent from "./components/ListEvent";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Register from "./components/Register";
import DetailEvent from "./components/DetailEvent";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event" element={<ListEvent />} />
            <Route path="/detail/:id" element={<DetailEvent />}/>
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Routes>
      </div>
   );
}

export default App;
