import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let { productId } = useParams();

    const [oneProduct, setOneProduct] = useState([]);
    useEffect(() => {
       getProductDetails(productId);
    }, []);

    const getProductDetails = async(productId) => {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${productId}`);
        const oneProduct = await response.json();
        setOneProduct(oneProduct.book);
     
    }
    return (
    <>
        <h2>{oneProduct.title}</h2>
        <h3>{oneProduct.author}</h3>
        
        <h4>{oneProduct.description}</h4>
        <img src={oneProduct.coverimage}/>
        
    </>  
    )
}
export default ProductDetails;