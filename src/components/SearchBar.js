import React from 'react'
import styles from "../styles/Searchbar.module.css"
import {CgSearch, CgCloseR} from "react-icons/cg"
import {SearchField} from "./index.js"

function SearchBar({close}) {
    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                {/* <input className={styles.searchInput} placeholder="검색어를 입력하세요."></input> */}
                <SearchField/>
                <div className={styles.control}>
                    <div>
                        <CgSearch size={24} color={"#C10547"}/>
                    </div>
                    <div onClick={close}>
                    <CgCloseR size={24} color={"#7c7c7c"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
