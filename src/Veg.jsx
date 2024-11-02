
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./Store";

function Veg() {
    const dispatch = useDispatch();
    const vegProducts = useSelector(state => state.products.veg);
    const cartItems = useSelector(state => state.cart.items);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
 
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const items = vegProducts.map((product, index) => {
        const cartItem = cartItems.find(item => item.name === product.name);
        const quantity = cartItem ? cartItem.quantity : 0;
        return (
            <div className="card" key={index}>
                <img src={product.image} alt={product.name} className="card-img" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                    <p className="card-text">Quantity:   <button onClick={() => handleAddToCart(product)} className="btnp" disabled={quantity <1}>+</button>{quantity}  <button onClick={() => handleRemoveFromCart(product)} className="btnm">-</button></p>
                    <button onClick={() => handleAddToCart(product)} className="btnadd"  disabled={quantity >=1}>Add to Cart</button> 
          
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <h1>This is Veg Page</h1>
            <div className="flex-container">
                {items}
            </div>
            <CartSummary />
        </div>
    );
}

function CartSummary() {
    const cartItems = useSelector(state => state.cart.items);
    
    if (cartItems.length === 0) {
        return <p>Cart is empty</p>;
    }

    return (
        <>
            <h2>Cart Summary</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Veg;
