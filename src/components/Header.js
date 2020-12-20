import React, { useState } from 'react'
import styles from "../styles/Header.module.css"
import { CgProfile, CgSearch, CgMenu } from "react-icons/cg"
import HamburgerMenu from "react-hamburger-menu"
import {Navbar, SearchBar, Profile} from "./index.js"
import logo from '../images/small_logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

// const useStyles = makeStyles({
//     root: {
//         width: 100,
//         height: 40,
//     }
// })
function Header() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const [anchorEl, setAnchorEl] =  useState(null);
    const [login, setLogin] = useState(false);

    // const classes = useStyles()

    const menuClick = () => {
        setOpen(!open)
    }
    const searchClick = () => {
        setSearch(!search)
    }
    const profileClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const profileClose = () => {
        setAnchorEl(null)
    }
    const profileOpen = Boolean(anchorEl)
    const id = profileOpen ? 'profilePop' : undefined

    const loginClick = () => {
        setLogin(!login)
    }
    return (
        <div className={styles.wrapper}>
            {search ? 
            <>
            <SearchBar close={searchClick}/>
            </> :
            <>
                <div className={styles.bar}>
                    <div className={styles.container}>
                        <a className={styles.logoBox} href="/" >
                            <img src={logo} />
                        </a>
                        <div className={styles.menuContainer}>
                            <div onClick = {profileClick} className={styles.menuItem}>
                                <CgProfile size={24} color={ login ? "#c10547" : "#7c7c7c"}/>
                            </div>
                            <Popover
                                // classes = {{
                                //     root: classes.root
                                // }}
                                id={id}
                                open={profileOpen}
                                anchorEl={anchorEl}
                                onClose={profileClose}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                            >
                                <Profile 
                                loginClick={loginClick} 
                                isLogin={login}/>
                            </Popover>
                            <div className={styles.menuItem}
                                onClick = {searchClick}>
                                    <CgSearch size={24}/>
                            </div>
                            <div className={styles.menuItem}>
                            < HamburgerMenu
                                isOpen={open}
                                menuClicked={menuClick}
                                width={20}
                                height={16}
                                color={"#7c7c7c"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
            
            {open ? <Navbar/> : null}
            
        </div>
            
    )
}

export default Header
