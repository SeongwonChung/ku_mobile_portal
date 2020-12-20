import React from 'react'
import styles from "../styles/AccessContainer.module.css"
import { AccessItem } from "./index.js"
import {MdMailOutline} from "react-icons/md"
import {ImLab} from "react-icons/im"
import {IoLibraryOutline, IoPrintOutline, IoReceiptOutline} from "react-icons/io5"
import { AiOutlineFileSearch } from "react-icons/ai"
import { CgMouse } from "react-icons/cg"
import { RiHandCoinLine } from "react-icons/ri"

function AccessContainer() {
    return (
        <div className={styles.container}>
            <AccessItem className="item" name="메일" icon={<MdMailOutline size={60}/>}/>
            <AccessItem className="item" name="연구포털" icon={<ImLab size={60}/>}/>
            <AccessItem className="item" name="도서관" icon={<IoLibraryOutline size={60}/>}/>
            <AccessItem className="item" name="제증명" icon={<IoPrintOutline size={60}/>}/>
            <AccessItem className="item" name="등록금고지서" icon={<IoReceiptOutline size={60}/>}/>
            <AccessItem className="item" name="성적조회" icon={<AiOutlineFileSearch size={60}/>}/>
            <AccessItem className="item" name="수강신청" icon={<CgMouse size={60}/>}/>
            <AccessItem className="item" name="장학금신청" icon={<RiHandCoinLine size={60}/>}/>
        </div>
    )
}

export default AccessContainer
