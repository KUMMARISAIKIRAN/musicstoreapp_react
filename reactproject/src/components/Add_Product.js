import { useState } from "react";
import { dataService_prod } from "../services/dataService_Product";


function Prodlist() {
    const [prodArray, setProdArray] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")

    function getProdClick() {

        dataService_prod.getAllProducts().then(resData => {

            setProdArray(resData.data);
        });

    }

    function addProdClick() {
        let prodObj = {}
        prodObj.id = id
        prodObj.name = name
        prodObj.price = price
        prodObj.category = category
        prodObj.date = date
        prodObj.desc = desc
        prodObj.image = image

        dataService_prod.addProduct(prodObj).then(resData => {
            alert("New Prod Added to server");
            clearFields();
        });
    }

    function clearFields() {
        setId("")
        setName("")
        setPrice("")
        setCategory("")
        setDate("")
        setDesc("")
        setImage("")
    }


    function deleteClick(id) {
        dataService_prod.deletePro(id).then(resData => {
            getProdClick();
        });
    }

    function selectProdClick(id) {
        dataService_prod.getProdById(id).then(resData => {
            let prodObj = resData.data;
            setId(prodObj.id);
            setName(prodObj.name);
            setPrice(prodObj.price)
            setCategory(prodObj.category)
            setDate(prodObj.data)
            setDesc(prodObj.desc)
            setImage(prodObj.image)
        });

    }


    function updateProdClick() {
        let prodObj = {}
        prodObj.id = id
        prodObj.name = name
        prodObj.price = price
        prodObj.category = category
        prodObj.date = date
        prodObj.desc = desc
        prodObj.image = image

        dataService_prod.updateProd(id, prodObj).then(resData => {
            getProdClick();
            clearFields();
        });
    }

    let resultArray = prodArray.map(item => {
        return <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>{item.desc}</td>
            <td><img width="40px" src={item.image}></img></td>


            <td><a><img width="40px" src="./images/dl.png" onClick={() => deleteClick(item.id)} /></a>
                <a><img width="40px" onClick={() => selectProdClick(item.id)} src="./images/sl.png" /></a></td>
        </tr>
    });

    return (
        <>

            <div style={
                {
                    backgroundImage: "url('./images/addproducts.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // if you want it fixed to viewport
                    backgroundRepeat: 'repeat-x',
                   // Adjust height as needed
                }
            }

            >
                
                <center>
                    Product Id <input placeholder="Product Id" type="text" value={id} onChange={(e) => setId(e.target.value)} /><br /><br />
                    Product Name <input placeholder="Product Name" type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                    Product Price <input placeholder="Product Price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} /><br /><br />
                    Product Category <input placeholder="Product Category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} /><br /><br />
                    Release Date <input placeholder="Release Date" type="text" value={date} onChange={(e) => setDate(e.target.value)} /><br /><br />
                    Description <input placeholder="Description" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} /><br /><br />
                    Image Url <input placeholder="Image Url" type="text" value={image} onChange={(e) => setImage(e.target.value)} /><br /><br />
                    <input type="button" value="Get Products" onClick={getProdClick} />
                    <input type="button" value="Add Product" onClick={addProdClick} />
                    <input type="button" value="Update Product" onClick={updateProdClick} /><br></br><br></br><br></br>
                    <table border="2" width="1200">
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Category</th>
                            <th>Release Date</th>
                            <th>Description</th>
                            <th>Image</th>

                            <th></th>
                        </tr>
                        {resultArray}
                    </table>
                </center>

            </div>
        </>
    )
}

export default Prodlist;