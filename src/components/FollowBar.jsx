const FollowBar = (props) => {
    const getUsers = async () => {
        const response = await fetch(`${props.URL}/auth`, {
            method: 'get'
        })
        const data = await response.json()
        return data
    }

    const notFollowed = async () => {
        const id = localStorage.getItem('user_id')
        const response = await fetch(`${props.URL}auth/${id}`, {method: "get"})
        const data = await response.json()
        return getUsers().filter((x)=>{
            !data.follows.includes(x)
        })
    }

    const followed = async () => {
        const id = localStorage.getItem('user_id')
        const response = await fetch(`${props.URL}auth/${id}`, {method: "get"})
        const data = await response.json()
        return getUsers().filter((x)=>{
            data.follows.includes(x)
        })
    }

    const handleFollow = async (id) => {
        event.preventDefault()
        const userId = localStorage.getItem('user_id')
        await fetch(`${props.URL}tweet/follow/${userId}/${id}`, {method: 'post'})
    }

    const handleUnfollow = async (id) => {
        event.preventDefault()
        const userId = localStorage.getItem('user_id')
        await fetch(`${props.URL}tweet/unfollow/${userId}/${id}`, {method: 'post'})
    }

    return <div className='follow-bar'>
        {followed().map((x) => {
            return <div>
            <h4>{x.username}</h4>
            <button onClick={()=>{handleUnfollow(x._id)}}>Unfollow</button>
            </div>
        })}
        {notFollowed().map((x) => {
            return <div>
            <h4>{x.username}</h4>
            <button onClick={()=>{handleFollow(x._id)}}>Follow</button>
            </div>
        })}
    </div>
}

export default FollowBar