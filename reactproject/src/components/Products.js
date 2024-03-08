import { dataService_prod } from "../services/dataService_Product";
import product from '../db_prod.json'

import './prod.css'

function Products(){
   
    let resultArray = product.prods.map(item => (
 
        <div class="container-product">
            <div className="row mt-4">
            <div class="col-md-3 col-sm-6 col-xs-12">
                    <div className="card" style={{ height: 500, width: 370 }}>
                        <img className="card-img-top" src={item.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text"><strong>${item.price}</strong></p>
                            <p className="card-text">{item.category}</p>
                            <p className="card-text">{item.date}</p>
                            <p className="card-text">{item.desc}</p>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    ));
 
    return (
        <>
            {resultArray}
        </>
    );
}

export default Products;