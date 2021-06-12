import React from 'react'

export default function Member({info,}) {
    const { name, email, role } = info;

    return (
        <div className='teamMember'>
            <h1>{name}</h1>
            <h2>Email: {email}</h2>
            <h2>Role: {role}</h2>
        </div>
    )
}
