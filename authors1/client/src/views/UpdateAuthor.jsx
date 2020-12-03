import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdateAuthor = props => {
    const [form, setForm] = useState({
        name: "",
    })
    const [error, setError] =useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => setForm(res.data.author))
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`, form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                } else {
                    navigate("/")
                }
            })
    }
    return(
        <div>
        <h4><a href="/">Home</a></h4>
        <h4 className="text-success">Edit this author:</h4>
        <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}

export default UpdateAuthor;