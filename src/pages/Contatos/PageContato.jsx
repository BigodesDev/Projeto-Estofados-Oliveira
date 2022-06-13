import React from 'react';
import Contatos from '../../../src/Components/Contato/Fundoimg/Contatos';
import CorpoContato from '../../Components/Contato/CorpoContato/Corpo';
import ParteDebaixoCorpo from '../../Components/Contato/ParteDebaixoCorpo/CorpoBaixo';

const PageContatos = () => {
    return (
        <div>
        <Contatos/>
        <CorpoContato/>
        <ParteDebaixoCorpo/> 
        </div>
     );
}
 
export default PageContatos;