import {useState} from 'react'
import { useNavigate } from "react-router-dom";



const Login = (props) => {

    const navigate = useNavigate()
    
    const blank = {
        username: "",
        password: "",
    }


    const [form, setForm ] = useState(blank)


    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

     const handleSubmit = (event) => {
         event.preventDefault()
         const {username, password} = form
         props.getUsername(username)


         fetch(`${props.URL}auth/login` , {
             method: "post" ,
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({username, password})
         })
         .then(response => response.json())
         .then(data => {
             console.log(data)
            props.getToken(data)
             setForm(blank)
             navigate("/")
            
         })
         

        }


    return (
    <div className="form">

        <form onSubmit={handleSubmit} className="form-data">
            <input className="username" type="text" name="username" value={form.username} placeholder="Username" onChange={handleChange}/>
            <input className="password" type="password" name="password" value={form.password} placeholder= "Password" onChange={handleChange}/>

            <input type="submit" value="Login"/>
        </form>
    </div>
    );
}

export default Login;