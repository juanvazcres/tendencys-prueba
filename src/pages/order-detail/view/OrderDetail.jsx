//import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import BackButton from '../../../components/back-button/view/BackButton'
//import { useParams, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const OrderDetail = props => {
    const [selectedOrder, setSelectedOrder] = useState({ items: [] });

    useEffect(() => {
        let currentOrder = localStorage.getItem('selectedOrder');
        if (currentOrder) {
            currentOrder = JSON.parse(localStorage.getItem('selectedOrder'));
            setSelectedOrder(currentOrder)
        }
    }, []);
    const columns = [
        { field: 'sku', headerName: 'SKU', width: 150 },
        { field: 'name', headerName: 'Descripción', width: 250 },
        { field: 'quantity', headerName: 'Unidades', width: 150 },
        { field: 'price', headerName: 'Precio unitario', width: 150 },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <BackButton />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="subtitle1" gutterBottom>Detalle de orden de compra</Typography>
                <Typography variant="subtitle2" gutterBottom>{selectedOrder.number}</Typography>
                <div style={{ height: 'fit-content', width: 'fit-content' }}>
                    <DataGrid
                        rows={selectedOrder.items}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        hideFooter={true}
                        disableColumnFilter={true}
                        disableColumnMenu={true}
                        disableColumnSelector={true}
                        disableRowSelectionOnClick={true}
                    />
                </div>
            </div>
        </div>
    )
}

OrderDetail.propTypes = {}

export default OrderDetail