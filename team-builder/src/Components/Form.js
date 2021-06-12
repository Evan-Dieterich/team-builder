import React from 'react';

export default function Form({addMember, formData, setFormData}) {

    const changeHandler = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <form onSubmit = {addMember}>

                <label htmlFor="name">Name</label>
                <input onChange = {changeHandler} value = {formData.name} type="text" placeholder="Name" name="name" />
                <br />

                <label htmlFor="email">E-mail</label>
                <input onChange = {changeHandler} value = {formData.email} type ="text" placeholder='E-mail' name="email" />
                <br />

                <label htmlFor='role'>Role: </label>
                <select id="role" onChange={changeHandler} >
                    <option value="">select role</option>
                    <option value="Backend">Backend Engineer</option>
                    <option value="FrontEnd">Front End Engineer</option>
                    <option value="Design">Web Designer</option>
                </select><br />

                <button >Add Member!</button>

            </form>
        </div>
    )
}