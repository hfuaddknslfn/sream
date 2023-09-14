import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Nino/pages2/Login/Login";
import { UserAuthContextProvider } from "./Nino/context2/userAuthContext";
import { DrawerContextProvider } from "./Nino/context2/drawerContext";
import ProtectedRoute from "./Nino/components2/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Chat from "./Nino/pages2/Chat/Chat";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <DrawerContextProvider>
                  <Chat />
                </DrawerContextProvider>
              </ProtectedRoute>
            }
          />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
        <Toaster />
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
