import React from 'react';
import Scene from './components/scene/SceneComponent';
import HeaderComponent from './components/header/HeaderComponent';
import { Container, Row } from 'reactstrap';

const App = () => {
    return (
        <div>
            <HeaderComponent />
            <Scene />
        </div>
    );
};

export default App;