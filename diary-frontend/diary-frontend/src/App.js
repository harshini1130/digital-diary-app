import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NewEntry from "./pages/NewEntry";
import EditEntry from "./pages/EditEntry";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/new" element={<NewEntry/>} />
<Route path="/edit/:id" element={<EditEntry/>} />

</Routes>

</BrowserRouter>

);

}

export default App;