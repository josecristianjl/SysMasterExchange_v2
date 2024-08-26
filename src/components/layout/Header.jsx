import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Header.css';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export const Header = ({ onSidebar, sidebarOpen }) => {
    const [isAuthenticated] = useState(true);
    const [menuAnchor, setMenuAnchor] = useState(null);

    const handleMenu = (event) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setMenuAnchor(null);
    };

    const navigation = [
        { name: 'Mi perfil', href: '#' },
        { name: 'Cerrar sesión', href: '#' },
    ]

    return (
        <div className='header-container'>
            <AppBar position='static'>
                <Toolbar>

                    {/* Botón del Sidebar */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className="sidebar-button"
                        onClick={onSidebar} // Controla la apertura/cierre del Sidebar
                    >
                        {sidebarOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
                    </IconButton>

                    {/* Contenedor del Usuario */}
                    {isAuthenticated && (
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            className="user-container"
                            onClick={handleMenu}
                        >
                            <AccountCircle />
                            <p className='user-name'>Cristian Jiménez</p>
                        </IconButton>
                    )}

                    {/* Menú desplegable */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={menuAnchor}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(menuAnchor)}
                        onClose={handleClose}
                    >
                        {navigation.map((item, index) => (
                            <MenuItem
                                key={index}
                                onClick={handleClose}
                                component="a"
                                href={item.href}
                                className='user-settings'
                            >
                                {item.name}
                            </MenuItem>
                        ))}
                    </Menu>

                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    onSidebar: PropTypes.func,
    sidebarOpen: PropTypes.bool
}
