import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

function CMSNav() {
    return (
        <Nav>
            <NavItem>
                <NavLink
                    active
                    href="#">
                    Products
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    Reviews
                </NavLink>
            </NavItem>

        </Nav>
    )
}

export default CMSNav