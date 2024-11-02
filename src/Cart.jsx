import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./Store";
import { useState } from "react";

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [discount, setDiscount] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const [error, setError] = useState("");

    const discountCodes = {
        Sonu10: 10,
        Sonu20: 20,
        Sonu30: 30
    };

    const handleIncrement = (item) => {
        dispatch(addToCart(item));
    };

    const handleDecrement = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart({ ...item, quantity: item.quantity }));
    };

    const applyCoupon = () => {
        const discountPercentage = discountCodes[couponCode];
        if (discountPercentage) {
            setDiscount(discountPercentage);
            setError(""); // this seterror will Clear any previous errors
        } else {
            setError("Invalid coupon code");
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedPrice = totalPrice * (1 - discount / 100);

    return (
        <>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                                <button onClick={() => handleIncrement(item)}>+</button>
                                <button onClick={() => handleDecrement(item)} disabled={item.quantity === 1}>-</button>
                                <button onClick={() => handleRemove(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Original Price: ${totalPrice.toFixed(2)}</h3>
                    <h3>Total Price after Discount: ${discountedPrice.toFixed(2)}</h3>

                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter coupon code" 
                            value={couponCode} 
                            onChange={(e) => setCouponCode(e.target.value)} 
                        />
                        <button onClick={applyCoupon}>Apply Coupon</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <div>
                        {discount > 0 && <p>Discount Applied: {discount}%</p>}
                    </div>
                </>
            )}
        </>
    );
}

export default Cart;
