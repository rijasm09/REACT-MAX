import ReactDOM from 'react-dom/client';

import './index.css';
// if it is a css file we have to add .css
import App from './App';
// if it is js file or third party module we dont have to add .js 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
