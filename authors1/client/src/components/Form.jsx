import React from 'react';

const Form = props => {
    
    return(
        <div>
                <form onSubmit={props.onSubmitHandler}>
                    <label>Name:</label><br/>
                    <input type="text" name="name" onChange={props.onChangeHandler} value={props.form.name}/><br/>
                    {
                        props.error.name?
                            <span className="text-danger">{props.error.name.message}</span>
                            :""
                    }
                    <br/><br/>
                    <a href="/" className="btn btn-info">Cancel</a>&nbsp;&nbsp;&nbsp;
                    <button type="submit" value="Submit" className="btn btn-info">Submit</button>
                </form>
        </div>
    )
}

export default Form;