import React, {useState} from 'react'
import {InertiaLink} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";

const Home = (props) => {
    const {messages, errors} = props
    const [message, setMessage] = useState('')

    const onSubmitHandle = event => {
        event.preventDefault();
        Inertia.post('message', {
            text: message
        })
        setMessage('')
    }

    const onValueChange = event => {
      setMessage(event.target.value)
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-blue-800'>
                {messages.map((message, index) => (
                    <div key={index} className="ml-3 bg-white p-4 rounded shadow">
                        <p className="text-sm font-medium text-gray-900">{message.text}</p>
                    </div>
                ))}
                <form action="#" onSubmit={onSubmitHandle}>
                    <input type="text" value={message} onChange={onValueChange}/>
                    <button className='text-white p-3'>Submit</button>
                    {errors.text ? <p className='text-white'>{errors.text}</p> : ''}

                </form>

                <InertiaLink href='about'>Goto About Page</InertiaLink>
            </div>
        </div>

    )
}

export default Home