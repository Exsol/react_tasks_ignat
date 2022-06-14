import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';


//тут можно было бы вынести в отдельный компонент и запамить что бы избавиться от повторения,
//но в задаче вроде такого не стояло, так что пускай будет так)

function Header() {
    const [isShown, setIsShown] = useState<boolean>(false);
    return (
        <div className={s.menu} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} >
            {isShown &&  (
            <div>
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.defaultLink} to={PATH.PRE_JUNIOR}>Pre Junior</NavLink>
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.defaultLink} to={PATH.JUNIOR}> Junior</NavLink>
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.defaultLink} to={PATH.JUNIOR_PLUS}>Junior PLUS</NavLink>
            </div>
            ) || (<SuperButton className={s.activeLink}>Show menu</SuperButton>)}

        </div>
    )
}

export default Header
