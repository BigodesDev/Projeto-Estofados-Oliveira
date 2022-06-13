import React from "react";

import { BrowserRouter as Router, 
    Routes, 
    Route,
  } from "react-router-dom";

import PagesContatos from "../pages/Contatos/PageContato";
import PagesIndex from '../pages/Home/PageHome';
import PagesSobre from '../pages/Sobre/PageSobre';
import PagesSofas from '../pages/Sofas/PageSofas';
import PagesProdutos from '../pages/Produtos/PageProdutos';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesIndex/>} />
        <Route path="/contato" element={<PagesContatos/>} />
        <Route path="/sobre" element={<PagesSobre/>} />
        <Route path="/sofa" element={<PagesSofas/>} />
        <Route path="/produtos" element={<PagesProdutos/>} />
      </Routes>
    </Router>
  );
};

export default Root;