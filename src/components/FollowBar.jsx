import {useState, useEffect} from 'react'

const FollowBar = (props) => {

    const userId = localStorage.getItem('userId')
    // console.log(userId)
    const token = localStorage.getItem('token')

    const [userData, setUserData] = useState(null)
    const [thisUser, setThisUser] = useState(null)

    const getUsers = async () => {
        const response = await fetch(`${props.URL}auth`, {
            method: 'get'
        })
        const data = await response.json()
        return data
    }

    const getThisUser = async () => {
        const response = await fetch(`${props.URL}auth/${userId}`, {
            method: 'get'
        })
        const data = await response.json()
        return data
    }

    // const notFollowed = async () => {
    //     const id = props.username.userId
    //     const response = await fetch(`${props.URL}auth/${id}`, {method: "get"})
    //     const data = await response.json()
    //     const allUsers = await getUsers()
    //     return await allUsers.filter((x)=>{
    //         return !data.follows.includes(x)
    //     })
    // }

    // const followed = async () => {
    //     const id = props.username.userId
    //     const response = await fetch(`${props.URL}auth/${id}`, {method: "get"})
    //     const data = await response.json()
    //     const allUsers = await getUsers()
    //     return await allUsers.filter((x)=>{
    //         data.follows.includes(x)
    //     })
    // }

    const follow = async (id) => {
        await fetch(`${props.URL}tweet/follow/${userId}/${id}`, {method: 'put'})
    }

    const unfollow = async (id) => {
        await fetch(`${props.URL}tweet/unfollow/${userId}/${id}`, {method: 'put'})
    }


    useEffect(()=>{
        getUsers().then((data)=>setUserData(data))
        getThisUser().then((data)=>setThisUser(data))
    }, [])

    // const followData = followed()
    // const unfollowedData = notFollowed()
  const allData = userData
    if (!token) {
      return <h1>Please Log in</h1>;
    } else if (allData && thisUser) {
      return (
        <div className="follow-bar">
          <h2 className="all-users">Users:</h2>
          {allData.map((x) => {
            if (thisUser.follows.includes(x._id)) {
              return (
                <div>
                  <h4 className="all-username">{x.username}</h4>
                  <button
                    className="all-button"
                    key={x._id}
                    onClick={(event) => {
                      event.preventDefault();
                      unfollow(x._id);
                      event.currentTarget.innerHTML = "Unfollowed!";
                    }}
                  >
                    Unfollow
                  </button>
                </div>
              );
            }
            return (
              <div>
                <h4>{x.username}</h4>
                <button
                  className="all-button"
                  key={x._id}
                  onClick={(event) => {
                    event.preventDefault();
                    follow(x._id);
                    event.currentTarget.innerHTML = "Followed!";
                  }}
                >
                  Follow
                </button>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  
}

export default FollowBar