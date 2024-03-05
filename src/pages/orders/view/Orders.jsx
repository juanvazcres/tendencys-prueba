//import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OrdersPresenter from '../presenter/OrdersPresenter';
import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material';
const Orders = props => {
  const ordersPresenter = new OrdersPresenter();
  const navigate = useNavigate();

  const goTo = location => {
    navigate(location)
  };

  const getAllOrders = async () => {
    try {
      const response = await ordersPresenter.getAllOrders()
      setData(response.orders)
    } catch (error) {
      //
    }
  }

  const [data, setData] = useState([])

  useEffect(() => {
    getAllOrders();
  }, [])

  return <div>
    <div>
      <Button onClick={() => goTo(-1)} variant="text"><ArrowBack /> Regresar</Button>
    </div>
    {data.map((item, index) => <div key={index}>{JSON.stringify(item)}</div>)}
  </div>;
}

Orders.propTypes = {}

export default Orders

