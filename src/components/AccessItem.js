import React from 'react'
import styles from "../styles/AccessItem.module.css"

function AccessItem({icon, name, className}) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {icon}
            </div>
            <span className={styles.name}>
                {name}
            </span>
        </div>
    )
}

export default AccessItem
