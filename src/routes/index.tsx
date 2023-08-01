import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import { Sidebar } from '../components/dashboard/Sidebar';
import { Painel } from '../components/dashboard/Painel';
import { Menu } from '../components/dashboard/Menu';

export default function Router() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/" element={<Painel />} />
        </Routes>
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}
