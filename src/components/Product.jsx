import React from 'react';

export default ({ sku , product }) => {
    console.log(sku);

    //console.log(sku[0].images)
    //console.log(product);
    return (<article className="card">
          <header className="bg-blue-800 p-6 text-center">
            <div className="flex text-left">
                <div className="flex-1">
                    {
                        (sku && sku.length  >= 0 && sku[0].images ) &&
                        <img src={sku[0].images} /> 
                    }
                </div>
            </div>
          </header>
     </article>)
}


