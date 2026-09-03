import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import { Login, Cadastro, RecuperarSenha } from './pages/AuthPages'
import Home from './pages/Home'
import Mapa from './pages/Mapa'
import Pontuacao from './pages/Pontuacao'
import Ranking from './pages/Ranking'
import Historico from './pages/Historico'
import './App.css'

export default function App() {
  return <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/recuperar-senha" element={<RecuperarSenha />} />
    <Route element={<AppLayout />}>
      <Route path="/inicio" element={<Home />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/pontuacao" element={<Pontuacao />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/historico" element={<Historico />} />
    </Route>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
}
