import React from 'react'
import styles from "../styles/FamilySite.module.css"

function FamilySite() {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <li>대학</li>
                <li>대학원</li>
                <li>교육/연구/산학</li>
                <li>행정/부속기관</li>
                <li>기타</li>
            </div>
        </div>
    )
}

export default FamilySite
