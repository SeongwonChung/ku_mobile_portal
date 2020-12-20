import React, {useState} from 'react'
import styles from "../styles/Footer.module.css"
import { IoIosArrowDropup } from "react-icons/io"
import FamilySite from './FamilySite'

function Footer() {
    const [open, setOpen] = useState(false)
    const onClick = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.container}>
            {open ? <FamilySite/> : null}
            <div className = {styles.familySite} onClick={onClick} >
                <div className = {styles.familySite_text}>
                <span>관련사이트</span> 
                <IoIosArrowDropup size={20}/>
                </div>
            </div>
            <div className={styles.footer}>
                <p className={styles.contact}>
                    <span className={styles.seoul}>[서울]</span>02841 서울특별시 성북구 안암로 고려대학교 TEL.02-3290-1114
                </p>
                <p className={styles.contact}>
                    <span className={styles.sejong}>[세종]</span> 30019 세종특별자치시 세종로 고려대학교 세종캠퍼스 TEL.044-860-1114
                </p>
                <div className={styles.copyright}>
                    <span>
                    2020-2 PSYC493 final project
                    SeongwonChung 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
