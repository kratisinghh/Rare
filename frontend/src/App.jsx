import {BrowserRouter,Routes,Route} from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";

const App = () => {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<UserLayout />}>
         {/* user Layout */}
       </Route>
     <Route>{/* admin Layout */}</Route>
    </Routes>
   </BrowserRouter>
 );
};
export default App;