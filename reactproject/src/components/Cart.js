import items from '../db_prod.json'
import { useState } from 'react'
import { useNavigate} from "react-router-dom";
export function Cart(props){

    let navigate = useNavigate();

    return (<center>
        <h2>Current Items in Cart</h2>
        <table border="2" width="600">
        <tr>
            <th>Product Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Quantity</th>
            <th></th>
        </tr>

        {props.resultArray}
    </table>

<h2>Total Amount ${props.totalAmount}</h2>

<button className="proceedbtn" onClick={() => navigate("/viewcart", { state: { totalAmount: props.totalAmount } })}>Click to Proceed</button>

    </center>
    )
}
export default Cart