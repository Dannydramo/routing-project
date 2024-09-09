import React from 'react';
import { navigationData } from './route';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <Navigation navigation={navigationData} />
        </div>
    );
};

export default App;
