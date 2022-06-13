import React from 'react';
import SofasRetratil from '../../Components/Sofas/Retratil/RetratilApi';
import SofasLugares from '../../Components/Sofas/2-3-Lugares/2-3-LugaresApi';
import SofasCanto from '../../Components/Sofas/Canto/CantoApi';
import SofasChaise from '../../Components/Sofas/Chaise/ChaiseApi';

function PagesSofas () {
    return(
        <div>
            <SofasRetratil/>
            <SofasLugares/>
            <SofasCanto/>
            <SofasChaise/>
        </div>
    )
}

export default PagesSofas