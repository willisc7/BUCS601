import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MapContainer from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MapContainer />, document.getElementById('root'));
registerServiceWorker();
