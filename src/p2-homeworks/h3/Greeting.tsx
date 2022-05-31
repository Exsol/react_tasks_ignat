import React from 'react'
import s from './Greeting.module.css'
import {errorInputType} from './GreetingContainer';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void // need to fix any
    addUser: (e: Array<string>) => void // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const setNameCallbackHandler = (e: React.FormEvent<HTMLInputElement>) => {
        error = "";
        setNameCallback(e.currentTarget.value)
    }
    const addUserHandler = () => {
        addUser([name])
    }
    const onKeyPressHandler = () => {
        // if( e.key == 'Enter' ){
        //     if (name.trim() !== '') {
        //         addUser([name])
        //     }else{
        //         addUser([''])
        //     }
        // }
        if (name.trim() !== '') {
            addUser([name])
        }else{
            addUser([''])
        }

    }
    const inputClass = error ? s.error : s.input // need to fix with (?:)

    return (
        <div>
            {/*<input value={name} onKeyPress={onKeyPressHandler} onChange={setNameCallbackHandler} className={s.input +" " +inputClass}/>*/}
            <SuperInputText
                value={name}
                onChangeText={setNameCallback}
                onEnter={onKeyPressHandler}
                error={error}
                spanClassName={s.testSpanError}

            />
            {/*<span>{error}</span>*/}
            <button className={s.btn} onClick={addUserHandler}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
