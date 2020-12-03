import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewAuthor = props => {
    const [form, setForm] = useState({
        name: "",
    })
    const [error, setError] =useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", form)
        .then(res => {
            if(res.data.error){
                console.log(res.data.error.errors)
                setError(res.data.error.errors)
            } else {
                console.log("Yesss It works!")
                navigate("/")
            }
        })
        .catch(console.log("Something went wrong...Sad Face"));
    }
    return(
        <div>
        <h4><a href="/">Home</a></h4>
        <h4 className="text-success">Add a new author:</h4>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}

export default NewAuthor;