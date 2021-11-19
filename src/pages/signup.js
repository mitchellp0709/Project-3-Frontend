import React from "react";
import { useNavigate } from "react-router-dom";


const Signup = (props) => {

    const navigate = useNavigate()
    
    const blank = {
        username: "",
        password: "",
    }


    const [form, setForm ] = React.useState(blank)


    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

     const handleSubmit = (event) => {
         event.preventDefault()
         const {username, password} = form


         fetch(`${props.URL}auth/signup` , {
             method: "post" ,
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({username, password})
         })
         .then(response => response.json())
         .then(data => {
             console.log(data)
             setForm(blank)
            
         })
         navigate("/login")

        }


    return (
    <div className="form">

        <form onSubmit={handleSubmit} className="form-data">
            <input className="username" type="text" name="username" value={form.username} placeholder= "Username" onChange={handleChange}/>
            <input className="password" type="password" name="password" value={form.password} placeholder="Password" onChange={handleChange}/>

            <input type="submit" value="Signup"/>
        </form>
    </div>
    );
}

export default Signup;
