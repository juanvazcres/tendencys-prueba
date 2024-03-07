import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Dashboard.css';
import Carrito from './img/Carrito.svg'
const Dashboard = props => {
    const navigate = useNavigate();

    const goTo = location => {
        navigate(location)
    };

    return (
        <div className='Dashboard'>
            <img src={Carrito} alt="..." className='Main-Img' />
            <Button variant="contained" onClick={() => goTo('orders')}>Ir a Ordenes</Button>
        </div>
    )
}

export default Dashboard