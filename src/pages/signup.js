import React from "react";
import { GlobalCtx }  from "../App"

const Signup = (props) => {

 

    const [form, setForm ] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    return (
    <div className="form">
        <form>
            <input type="text" name="username" value={form.username} onChange={handleChange}/>
            <input type="password" name="password" value={form.username} onChange={handleChange}/>
            <input type="submit" value="signup"/>
        </form>
    </div>
    );
}

export default Signup;
