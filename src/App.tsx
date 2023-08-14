import { Route, Routes } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import FormValidation from "./FormValidation";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gray-900 font-Poppins flex h-screen justify-center mt-50">
            <SearchFilter />
          </div>
        }
      />
      <Route
        path="/form-validation"
        element={
          <div className="bg-gray-900 font-Poppins flex h-screen justify-center mt-50">
            <FormValidation />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
