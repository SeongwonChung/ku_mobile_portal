import React from 'react'
import styles from "../styles/Notice.module.css"
import { MdKeyboardArrowRight } from "react-icons/md"
function Notice({title, contents}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.category}>{title}</span>
                <a className={styles.seeAll}>
                    <span>전체보기</span>
                    <MdKeyboardArrowRight color="#c10547"/>
                </a>
            </div>
            <div className={styles.contents}>
                { contents.map (content => (
                    <li className={styles.contentItem} key={content.title}>
                        <div className={styles.contentRow}>
                            <span className={styles.contentTitle}>{content.title}</span>
                            <span className={styles.contentDate}>{content.date}</span>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Notice
