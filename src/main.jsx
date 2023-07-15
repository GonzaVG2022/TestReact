import React from 'react'
import  ReactDOM from 'react-dom/client'
import './styles.css'//styles globales
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp
            value= {10}
        />
       {/* <FirstApp
        title='Hola soy Flavio'
       /> */}

    </React.StrictMode>
)