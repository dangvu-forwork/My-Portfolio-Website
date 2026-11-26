import { useEffect, useState } from "react";
import "./components.css"

export default function(){
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())   
        }, 1000)

        return () => clearInterval(timer)
    }, []) // the [] is here because this component can probably be destroyed

    const formattedTime = time.toLocaleTimeString("en-US", { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true,
    });

    return (
        <div id="clock">
            <p>{formattedTime}</p>
        </div>
    );
}