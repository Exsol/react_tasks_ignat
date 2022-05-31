import React from 'react'
import Affair from './Affair'
import {AffairType, AffairTypeArray, FilterType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: any
    deleteAffairCallback: (_id: number)=> void
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairTypeArray) => (

        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { return props.setFilter('all') }
    const setHigh = () => { return props.setFilter('high')}
    const setMiddle = () => { return props.setFilter('middle')}
    const setLow = () => { return props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}
            <SuperButton onClick={setAll}>All</SuperButton>
            <SuperButton onClick={setHigh}>High</SuperButton>
            <SuperButton onClick={setMiddle}>Middle</SuperButton>
            <SuperButton onClick={setLow}>Low</SuperButton>
            {/*<button onClick={setAll}>All</button>*/}
            {/*<button onClick={setHigh}>High</button>*/}
            {/*<button onClick={setMiddle}>Middle</button>*/}
            {/*<button onClick={setLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
