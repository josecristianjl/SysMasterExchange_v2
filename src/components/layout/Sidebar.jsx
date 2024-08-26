import PropTypes from 'prop-types';
import '../../styles/Sidebar.css'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import SellIcon from '@mui/icons-material/Sell';

export const Sidebar = ({ sidebarOpen }) => {

    const navigation = [
        { name: 'Inicio', href: '#', icon: <HomeIcon /> },
        { name: 'Compra', href: '#', icon: <PaidIcon /> },
        { name: 'Venta', href: '#', icon: <SellIcon /> },
    ]

    return (
        <Box className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>

            {/* Title */}
            <p>Master Exchange</p>
            <hr className='divider-line' />

            {/* Modulos */}
            <List>
                {navigation.map((modules) => (
                    <ListItem key={modules.name} disablePadding>
                        <ListItemButton
                            component="a"
                            href={modules.href}
                        >
                            <ListItemIcon className='icons-modules'>
                                {modules.icon}
                            </ListItemIcon>
                            <ListItemText className='modules-name'>
                                {modules.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );
};

Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool
}
