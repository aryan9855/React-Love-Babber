import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";
import { BrowserRouter as BrowerRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(

  <BrowerRouter>
  <AppContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppContextProvider>
  </BrowerRouter>
  
);
