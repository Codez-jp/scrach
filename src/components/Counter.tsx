import React, { useState } from 'react';
import Button from '@mui/material/Button';


const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count + 2);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Click
            </Button>
            <div>Clicked {count}</div>
        </div>
    );
};

export default Counter;