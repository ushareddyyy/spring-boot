
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "./Cart.css";
import { useEffect } from "react";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();
    
    const totalPrice = cart.reduce((acc, item) => acc + item.pcost * item.quantity, 0);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handlePayment = () => {
        const options = {
            key: "rzp_live_0CAWJFt3q8oaUX", // Replace with your Razorpay key
            amount: totalPrice * 100, // Razorpay requires amount in paise
            currency: "INR",
            name: "ExcelR",
            description: "Order Payment",
            handler: function (response) {
                
                generateInvoice(response.razorpay_payment_id);
                //sendWhatsAppMessage(response.razorpay_payment_id);
                navigate("/dashboard");
            },
            prefill: {
                name: "Mallareddy University",
                email: "mruh@mallareddyuniversity.ac.in",
                contact: "123456789"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const generateInvoice = (paymentId) => {
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.text("Order Invoice", 70, 20);
        
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`Payment ID: ${paymentId}`, 20, 30);
        doc.text("Customer Details:", 20, 40);
        doc.text("Name: Mallareddy University", 20, 50);
        doc.text("Email: mruh@mallareddyuniversity.ac.in", 20, 60);
        doc.text("Phone: 123456789", 20, 70);
        
        doc.setFontSize(14);
        doc.text("Items Purchased:", 20, 85);
        
        let y = 95;
        cart.forEach((item, index) => {
            doc.text(`${index + 1}. ${item.pname} - ₹${item.pcost} x ${item.quantity}`, 20, y);
            y += 10;
        });
        
        doc.setFontSize(14);
        doc.text(`Total Amount: ₹${totalPrice}`, 20, y + 10);
        doc.text("Thank you for shopping with us!", 20, y + 20);
        
        doc.save("Invoice.pdf");
    };

    const sendWhatsAppMessage = async (paymentId) => {
        const phoneNumber = "9030001847"; // Customer's WhatsApp number in international format (without +)
        const accessToken = "your_facebook_whatsapp_api_token"; // Replace with your API token
        const message = `Thank you for your order! Your payment (ID: ${paymentId}) of ₹${totalPrice} was successful. Your invoice is ready.`;
    
        const url = "https://graph.facebook.com/v15.0/your_whatsapp_business_number/messages"; // Replace with your API endpoint
    
        const payload = {
            messaging_product: "whatsapp",
            to: phoneNumber,
            type: "text",
            text: { body: message }
        };
    
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
    
            const data = await response.json();
            console.log("WhatsApp message sent successfully:", data);
        } catch (error) {
            console.error("Error sending WhatsApp message:", error);
        }
    };

    return (
        <div className="cart-container">
            <button className="back-button cart-back" onClick={() => navigate(-1)}>← Back</button>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.uniqueKey} className="cart-item">
                            <img src={item.pimage} alt={item.pname} />
                            <div>
                                <h3>{item.pname}</h3>
                                <p>Type: {item.type}</p>
                                <p>Price: ₹{item.pcost}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item.uniqueKey)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ₹{totalPrice}</h3>
                    <button className="pay-button" style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", borderRadius: "5px", fontSize: "16px", border: "none", cursor: "pointer" }} onClick={handlePayment}>
                        Proceed to Pay
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
