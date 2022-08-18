import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AppThemeProvider } from "../shared/contexts/ThemeContext";

import HomePage from "../pages/home/Home";
import Laboratorios from "../pages/laboratorios/Laboratorios";
import LaboratoriosDetails from "../pages/laboratorios/LaboratorioDetails";

import Projetos from "../pages/projetos/Projetos";
import ProjetosDetails from "../pages/projetos/ProjetosDetails";
import HomeAdmin from "../pages/HomeAdmin/HomeAdmin";

import LoginPage from "../pages/login/Login";

import { AuthProvider } from "../shared/contexts/AuthProvider";
import { ProtectedLayout } from "../shared/components/ProtectedLayout/ProtectedLayout";

export const AppRoutes = () => {
  return (
    <AuthProvider>
    <AppThemeProvider>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/projetos" element={<Projetos />} />
            
            <Route path="/projetosDetalis/:id" element={<ProjetosDetails />} />

            <Route path="/laboratorios" element={<Laboratorios />} />

            <Route
              path="/laboratorioDetalis/:id"
              element={<LaboratoriosDetails />}
            />
            <Route path="/login" element={<LoginPage />} />
           
            <Route path="/homeAdmin" element={
              <ProtectedLayout>
                <HomeAdmin/>
              </ProtectedLayout>
            }/>
             
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </BrowserRouter>
     
    </AppThemeProvider>
    </AuthProvider>
  );
};
