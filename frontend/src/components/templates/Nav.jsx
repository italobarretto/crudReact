import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar (NavItem) */}
            <NavItem href="/" icon="home" titulo="Início"/>
            <NavItem href="/users" icon="users" titulo="Usuários"/>
        </nav>
    </aside>