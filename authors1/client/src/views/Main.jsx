import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const Main = props => {
    const [authors, setAuthors] = useState();
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data.authors))
    }, [])

    const removeAuthor = _id => {
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
            .then(res => setUpdate(!update))
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h4>< a href="/new">Add an author</ a></h4>
            <h4 className="text-success">We have quotes by:</h4>
            <table className="table table-bordered">
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                {
                    authors ?
                    authors.map((auth, i) => {
                        return <tr>
                            <td className="text-success">{auth.name}</td>
                            <td><a href={`http://localhost:3000/edit/${auth._id}`} className="btn btn-warning">Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => removeAuthor(auth._id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    }) : ""
                }
            </table>
        </div>
    )
}

export default Main;