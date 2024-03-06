//import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OrdersPresenter from '../presenter/OrdersPresenter';
import { DataGrid } from '@mui/x-data-grid';
import BackButton from '../../../components/back-button/view/BackButton';

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
    localStorage.removeItem('selectedOrder');
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Orden', width: 100 },
  ];

  const onRowClick = (params) => {
    localStorage.setItem('selectedOrder', JSON.stringify(params.row))
    goTo('' + params.row.id)
  }

  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <BackButton />
    <div style={{ height: 'fit-content', width: 'fit-content' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        onRowClick={onRowClick}
      />
    </div>
  </div>;
}

Orders.propTypes = {}

export default Orders

