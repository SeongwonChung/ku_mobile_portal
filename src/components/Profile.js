import React from 'react'
import styles from "../styles/Profile.module.css"
function Profile({loginClick, isLogin}) {
    return (
        <div className = {styles.container}>
            {isLogin? 
            <div className={styles.item}>
                (2016130404)
            </div> : undefined   
        }
            <div onClick = {loginClick} className = {styles.item}>{ isLogin ? "로그아웃" : "로그인"}</div>
            <div className = {styles.item}>언어/language</div>
            <div className = {styles.item}>정보설정</div>
        </div>
    )
}

export default Profile
