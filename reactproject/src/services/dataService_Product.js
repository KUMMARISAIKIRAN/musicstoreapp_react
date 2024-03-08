import axios from "axios";

export let dataService_prod={
    getAllProducts,
    addProduct,
    deletePro,
    getProdById,
    updateProd
};

let url="http://localhost:4000/prods/"

function getAllProducts(){
   
    return axios.get(url);

}
function addProduct(prodObj){
    return axios.post(url,prodObj);
}

function deletePro(id){
    return axios.delete(url+id);
}
function getProdById(id){
 return axios.get(url+id);
}
function updateProd(id,prodObj){
    return axios.put(url+id,prodObj);
}