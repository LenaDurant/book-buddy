import {useState, useEffect } from 'react'
const Products = ({setOneProducts}) => {
    const [productList, setProductList] =useState([]);
    useEffect(() => {
        const getallProducts = async() => {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
            const responseJson = await response.json();
            const allProducts = responseJson.books;
            setProductList(allProducts);
        }
        getallProducts();
    }, []);
    return (
    <>
        <h2>Products</h2>
        
      <ul>
        {
         productList.map((oneProduct) => {
            return <li key={oneProduct.id}><a href={`/products/${oneProduct.id}`}>{oneProduct.title}</a><a href={`/products/${oneProduct.id}`}><img src={oneProduct.coverimage}/></a></li>
            {
                token ? <button>Buy Now</button> : null
            }
            })
        }
      </ul>
      
     
    </>  
    )
}
export default Products;
