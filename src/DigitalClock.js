import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div style={styles.clockContainer}>
            <h1 style={styles.timeText}>
                {time.toLocaleTimeString()}
            </h1>
        </div>
    );
};

const styles = {
    clockContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    },
    timeText: {
        fontSize: '48px',
    },
};

export default DigitalClock;