import React, { useState, useEffect } from "react";

const Clock = () => {
    const [dateTime, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const currentTime = dateTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        hour12: true
    });

    const currentDate = 
        dateTime.toLocaleDateString(undefined, {
            weekday: 'short',
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
    });


    return (
        <> 
        <div className="header">
            <h1>Digital Clock</h1>
        </div>

        <div className="clock">
            <p className="date">{currentDate}</p>
            <p className="time">{currentTime}</p>
        </div>
        </>
    );
}

export default Clock;