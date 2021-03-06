import { useParams,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../components/Header"




const EditProfile = (props) => {
  
  const navigate = useNavigate()
  const params = useParams()
  const username = localStorage.username;

  const [editForm, setEditForm] = useState({
  
    profilePic: "",
    coverPic:""
  })



  const updateUser = async (user) => {
    await fetch(`${props.URL}auth/${localStorage.userId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    getUser()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateUser(editForm)
    navigate (`/user/${localStorage.username}`)
  }


  const handleChange = (event) => {
    const newState = { ...editForm }
    newState[event.target.name] = event.target.value
    setEditForm(newState)
  }


  const form = (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        value={editForm.profilePic}
        name="profilePic"
        placeholder="Profile Picture Link"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.coverPic}
        name="coverPic"
        placeholder="Cover Picture Link"
        onChange={handleChange}
      />
      <input type="submit" value="Edit Profile"/>
    </form>
  );

  const getUser = async () => {
    const response = await fetch(`${props.URL}tweet/oneUser/${username}`)
    const data = await response.json()
    // const newState = { ...editForm }
    // newState.data = await data
    setEditForm(data.user[0])
    console.log (editForm)
  }
  useEffect(() => { getUser() }, [])
  



if(username!==params.id){
  return<>
  <Header/>
   <h1>Nice try! This isn't yourpage to edit!</h1>
   </>
} else

if (editForm) {
    return (
      <>
        <Header />
        <div className="edit-all">
          <h1>Edit Profile</h1>
          {/* <div className="edit-form">{form}</div> */}
          {form}
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>
  }

    return <>
    </>;

}




export default EditProfile