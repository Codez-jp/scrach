import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Counter from './components/Counter';


const App: React.FC = () => {
    return (
        <Counter />
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}

export default App;