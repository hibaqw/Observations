import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import SocietyPaper from './Routes/SocietyPaper'
import reportWebVitals from './reportWebVitals';
import { SelectProvider } from './Providers/SelectProvider';
import { TextAreaProvider } from './Providers/TextAreaProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/society-paper",
    element: <SocietyPaper/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextAreaProvider>
    <SelectProvider>
    <RouterProvider router={router} />
    </SelectProvider>
    </TextAreaProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
