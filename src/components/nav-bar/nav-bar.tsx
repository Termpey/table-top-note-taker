import { FunctionComponent, useState } from "react";

import './nav-bar.scss';

interface NavBarProps {
    openNoteListMenu: Function
}

export const NavBar: FunctionComponent<NavBarProps> = ({openNoteListMenu}) => {
    const[hamburgerActive, setHamburgerActive] = useState(false);

    const toggleSidebarMenu = () => {
        setHamburgerActive(!hamburgerActive);
        openNoteListMenu(!hamburgerActive);
    }

    return (
        <div className="topnav">
            <div className='container' onClick={() => {toggleSidebarMenu()}}>
                <div className={hamburgerActive ? "change bar-top" : "bar-top"}/>
                <div className={hamburgerActive ? "change bar-mid" : "bar-mid"}/>
                <div className={hamburgerActive ? "change bar-bot" : "bar-bot"}/>
            </div>
        </div>
    );
}