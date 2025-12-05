import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userRoutes } from "./routes/UserRoutes";
import { adminRoutes } from "./routes/AdminRoutes";

// PUBLIC_INTERFACE
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {userRoutes}
        {adminRoutes}
        <Route path="*" element={<div className="p-6">Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
