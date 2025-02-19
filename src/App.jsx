import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import CommonLayout from "./layout/CommonLayout";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
   <Routes>
      <Route element={<CommonLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Route>

      <Route path="*" element={<PageNotFound />}/>
   </Routes>
  );
}

export default App
