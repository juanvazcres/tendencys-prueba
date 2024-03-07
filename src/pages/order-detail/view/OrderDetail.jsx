import React, { useEffect, useState } from 'react'
import BackButton from '../../../components/back-button/view/BackButton'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const OrderDetail = props => {
    const [selectedOrder, setSelectedOrder] = useState({ items: [] });
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Open form dialog
                    </Button>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        console.log(formJson);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default OrderDetail


/* 
Saludo
Mi nombre
Que estudié y en dónde y hace cuanto


*/