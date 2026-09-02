import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RecuperarSenha from './pages/RecuperarSenha';
import Mapa from './pages/Mapa';
import Perfil from './pages/Perfil';
import Seguranca from './pages/Seguranca';
import Pontuacao from './pages/Pontuacao';
import Ranking from './pages/Ranking';
import Historico from './pages/Historico';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/pontuacao" element={<Pontuacao />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/historico" element={<Historico />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
