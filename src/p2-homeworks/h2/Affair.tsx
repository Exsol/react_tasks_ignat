import React from 'react'
import s from "./Affair.module.css"
import {AffairTypeArray} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать

    affair: AffairTypeArray // need to fix any
    deleteAffairCallback: (s:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.row}>
            <div>{props.affair._id}</div>
            <div>{props.affair.name}</div>
            <div>{props.affair.priority}</div>
            {/*<button onClick={deleteCallback}>X</button>*/}
            <SuperButton red onClick={deleteCallback}>X</SuperButton>


        </div>
    )
}

export default Affair
