import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material';

const BackButton = props => {
    const navigate = useNavigate();

    const goTo = location => {
        navigate(location)
    };
    return (
        <div style={{ width: '100%' }}>
            <Button onClick={() => goTo(-1)} variant="text"><ArrowBack /> Regresar</Button>
        </div>
    )
}

export default BackButton