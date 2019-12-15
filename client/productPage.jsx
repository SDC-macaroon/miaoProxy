import React from 'react';
import ReactDOM from 'react-dom';
import ColourPreview from '../philipService/client/productPage/components/ColourPreview';
import {} from '../johnService/client/src/index';
import {} from '../javService/client/src/index';
import './fillerComponents/Header';
import './styles.css';

const [,, productId] = window.location.pathname.split('/');

ReactDOM.render(<ColourPreview productId={productId} />, document.getElementById('philipApp'));
// No ReactDOM.render() call required for John's component
// No ReactDOM.render() call required for Jav's component
