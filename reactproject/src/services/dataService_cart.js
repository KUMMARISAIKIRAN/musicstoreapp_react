import axios from "axios";

export let dataService_cart={
    getAllItems,
    addItems,
    deleteItem,
};

let url="http://localhost:4000/cartitems/"

function getAllItems(){
    console.log(url)
    return axios.get(url);

}
function addItems(prodObj){
    return axios.post(url,prodObj);
}

function deleteItem(id){
    return axios.delete(url+id);
}
