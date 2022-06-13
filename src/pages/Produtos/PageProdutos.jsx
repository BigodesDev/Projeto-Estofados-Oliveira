import React from 'react';
import ProdutosCabeceiras from '../../Components/Produtos/Cabeceiras/ProdutosCabeceirasApi';
import ProdutosPoltronas from '../../Components/Produtos/Poltronas/ProdutosPoltronasApi';
import ProdutosPuffs from '../../Components/Produtos/Puffs/ProdutosPuffsApi';

function PagesProdutos () {
    return(
        <div>
            <ProdutosCabeceiras/>
            <ProdutosPoltronas/>
            <ProdutosPuffs/>
        </div>
    )
}

export default PagesProdutos;