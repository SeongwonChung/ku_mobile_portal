import React from 'react'
import styles from '../styles/Navbar.module.css'
function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <li>
                    <a>메일</a>
                </li>
                <li>
                    <a>등록/장학</a>
                </li>
                <li>
                    <a>수업</a>
                </li>
                <li>
                    <a>학적/졸업</a>
                </li>
                <li>
                    <a>정보생활</a>
                </li>
                <li>
                    <a>게시판</a>
                </li>
                <li>
                    <a>커뮤니티</a>
                </li>
                <li>
                    <a>지식관리</a>
                </li>
                <li>
                    <a>연구포털</a>
                </li>
            </div>
        </div>
    )
}

export default Navbar
