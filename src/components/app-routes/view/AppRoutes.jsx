
//import PropTypes from 'prop-types'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
const AppRoutes = props => {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route
                    key={`route_${path}`}
                    path={path}
                    element={
                        <Component key={`route_${path}_component`} />
                    }
                />
            ))}
            <Route path="*" element={<div>404</div>} />
        </Routes>
    )
}

AppRoutes.propTypes = {}

export default AppRoutes