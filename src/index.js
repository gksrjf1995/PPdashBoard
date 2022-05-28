import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFac1pJW3xLeUx0RWFbb19wflFBal9VVAciSV9jS3xTc0drWH9aeHBQTmFeUQ==')



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

