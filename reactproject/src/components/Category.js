import React from 'react';
import product from '../db_prod.json';
import './usercss.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Cart from './Cart';
import { dataService_cart } from '../services/dataService_cart';
import items from '../db_prod.json'

function Category() {


    const [itemsArray, setItemsArray] = useState([]);
    const [cartArray, setCartArray] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [showCart, setShowCart] = useState(false);
    const [total, setTotal] = useState(0)

function getTotal(){
    setTotal(0);
    let totalAmount = 0;
    itemsArray.forEach(item => {
        totalAmount += item.price * item.quantity;
    });
    setTotal(totalAmount);
    console.log(total)
}

    const dispatch = useDispatch();
    function getItemClick() {
        
        dataService_cart.getAllItems().then(resData => 
            {
               setCartArray(resData.data);
            });

    }

    function addItemClick()
    {
        let cartObj = {}
        cartObj.id=id
        cartObj.name = name
        cartObj.price = price
        cartObj.category = category
    
        cartObj.image=image
        cartObj.quantity=quantity
        dataService_cart.addItems(cartObj).then(resData =>
            {
                alert("Item has been Added to Cart");
                setQuantity(1);
            }); 
    }

    function  deleteClick(id)
    {
       dataService_cart.deleteItem(id).then(resData => 
        {
            getItemClick(); 
            getTotal();            
        });
    }

    let itemCount = useSelector((state) => state.itemCount);

    function add_click() {
        dispatch({ type: "AddToCart" });
    }

    function remove_click() {
        dispatch({ type: "RemoveFromCart" });

    }

    function addToCart(id,name, price, category, image,quantity) {
        let tempArray = [...itemsArray];
        let item = {}
        item.id=id
        item.name = name
        item.price = price
        item.category = category
        item.image = image
        item.quantity = quantity;
        tempArray.push(item);
        setItemsArray(tempArray);
    }
    function setContent(id,n, p, c, i,q) {
        setId(id);
        setName(n);
        setPrice(p)
        setCategory(c);
        setImage(i);
        setQuantity(q)
    }
    function add(id,n, p, c, i,q) {
        add_click();
        addToCart(id,n, p, c, i,q);
        addItemClick();
    }

    function remove(id){
        remove_click();
        deleteClick(id);
    }

    


    let resultArray = items.cartitems.map(item => {
        return <><tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td><img style={{ height: 100, width: 100 }} src={item.image} /></td>
            <td>{item.quantity}</td> 
            <td><button onClick={()=>{remove(item.id)}} className="buttonatc">Remove From Cart</button></td>
        </tr>
     
    
        </>
    });
    const renderCards = (category) => {
        return product.prods
            .filter(item => item.category === category)
            .map(item => (
                <div key={item.name} className="col-md-3 col-sm-6 col-xs-12">
                    <div className="card" style={{ height: 530, width: 370 }}>
                        <img className="card-img-top" src={item.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text"><strong>${item.price}</strong></p>
                            <p className="card-text">{item.category}</p>
                            <p className="card-text">{item.date}</p>
                            <p className="card-text">{item.desc}</p>
                            <label for="cars">Quantity</label>
                            <select id="quan"  onChange={(e) => setContent(item.id,item.name, item.price, item.category, item.image,e.target.value)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                            <button className="buttonatc" onClick={() => { add(item.id,item.name, item.price, item.category, item.image,quantity); }}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            ));
    };


    return (
        <>
        <center>            <h1>Total Items in Cart :{itemCount}</h1>

            <button onClick={() => setShowCart(!showCart)}>Show Cart</button>
            <button onClick={getTotal}>Total Amount</button>
            {showCart && <Cart resultArray={resultArray} totalAmount={total}/>}
            </center>

            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <h1 style={{ backgroundColor: 'lightblue' }}>Classic Hits</h1>
                        <div className="row" style={{ overflowX: 'auto' }}>
                            {renderCards("Classic")}
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <h1 style={{ backgroundColor: 'lightgreen' }}>POP 90s</h1>
                        <div className="row" style={{ overflowX: 'auto' }}>
                            {renderCards("POP 90s")}
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <h1 style={{ backgroundColor: 'lightpink' }}>Magical Melodies</h1>
                        <div className="row" style={{ overflowX: 'auto' }}>
                            {renderCards("Melodies")}
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <h1 style={{ backgroundColor: 'lightyellow' }}>Mixed Tunes</h1>
                        <div className="row" style={{ overflowX: 'auto' }}>
                            {renderCards("Mixed")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Category;
