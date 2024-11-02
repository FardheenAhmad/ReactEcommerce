import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PurchaseHistory from "./PurchaseHistory";
import Cart from "./Cart";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import "./app.css";
import GoogleLogin from "./GoogleLogin";
function App()

{
  return(
    <>

<BrowserRouter>
<nav><Link to="/">Home </Link>
<Link to="/veg">Veg</Link>
<Link to="/nonveg">NonVeg 🍗</Link>
<Link to="/cart">Cart</Link>
<Link to="/purchasehistory">PurchaseHistory</Link>
<Link to="/aboutus">AboutUs</Link>
<Link to="/contactus">ConactUs</Link>
</nav>
<div className="container mt-4">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/veg" element={<Veg/>} />
<Route path="/nonveg" element={<NonVeg/>} />
<Route path="/purchasehistory" element={<PurchaseHistory/>} />
<Route path="/cart" element={<Cart/>}/>
<Route path="/contactus" element={<ContactUs/>} />
<Route path="/aboutus" element={<AboutUs/>} />
</Routes>
</div>

</BrowserRouter>
    


    </>
  );
} 
export default App;
