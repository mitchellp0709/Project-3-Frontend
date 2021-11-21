import {useState, useEffect} from 'react'

const Wall = (props) => {
    
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const [tweets, setTweets] = useState({})

    const getTweets = async ()  => {
        const response = await fetch(`${props.URL}tweet/${userId}`, {method: 'get'})
        const data = await response.json()
        return data
    }

    const handleLoad = async () => {
        const newState = {...tweets}
        newState.data = await getTweets()
        newState.data.sort((a,b)=>{
            if (a<b){
                return -1
            }
            if (a>b){
                return 1
            }
            if (a===b){
                return 0
            }
        })
        setTweets(newState)
        console.log(newState)
    }

    useEffect(()=>{
        handleLoad()
    }, [])

    if (!token){
        return <></>
    }
    else if (!tweets.data){
        return <h1>Loading Tweets...</h1>
    } else {
        return <div>
            {tweets.data.map((x)=>{
                if (x.length){
                    return x.map((y)=>{
                        return <div className='tweet'>
                            <h2>{y.username}</h2>
                            <p>{y.content}</p>
                        </div>
                    })
                }
            })}
        </div>
    }
}

export default Wall