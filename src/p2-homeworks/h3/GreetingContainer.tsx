import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';
import {v1} from 'uuid';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (e: string, _id: string) => void // need to fix any
}
export type errorInputType= boolean | null | "";

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (name: string) => { // need to fix any
        setError('')
        setName(name) // need to fix
    }
    const addUser = () => {
        if (name.trim() !== '') {
            setError('')
            addUserCallback(name.trim(), v1())
            setName('');
            alert(`Hello ${name} !!`) // need to fix
        } else {
            setError("Имя должно содержать символы")
            alert("Имя должно содержать символы")
        }

    }


    let totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
