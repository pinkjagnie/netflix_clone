import {BrowserRouter, Route, Routes} from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Netflix />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/player' element={<Player />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
