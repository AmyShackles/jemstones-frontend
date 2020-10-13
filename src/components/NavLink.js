import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
    <Link
    {...props}
    getProps={({ isCurrent }) => {
        return {
            style: {
                color: isCurrent && 'black',
                backgroundColor: isCurrent && 'white',
                fontWeight: isCurrent && 'bold'
            }
        }
    }}
    />
)

export { NavLink }