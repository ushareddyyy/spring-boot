import { useEffect, useState } from "react";
import "./Watches.css";
import axios from "axios";

const Watches = () => {
    const [watches, setWatches] = useState([]);

    const get_watches = async () => {
        try {
            const res = await axios.get("http://localhost:7070/watches");
            setWatches(res.data);
        } catch (error) {
            console.error("Error fetching watches:", error);
        }
    };

    useEffect(() => {
        get_watches();
    }, []);

    return (
        <div className="parent">
            {watches.map((element, index) => (
                <div className="child" key={index}>
                    <img src={element.pimage} alt={element.pname || "Watch Image"} />
                    <h2><i className="fa fa-rupee-sign"></i> {element.pcost}</h2>
                    <p>{element.qty}</p>
                </div>
            ))}
        </div>
    );
};

export default Watches;
