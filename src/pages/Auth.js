import React from 'react';
import { useAppState } from '../AppState';

const Auth = (props) => {

    const type = props.match.params.form
    const [formData, setFormData] = React.useState({
        username: "",
        password: ""
    })

    const [userData, setUserData] = React.useState(null);

    const {state, dispatch} = useAppState();

    // state;

    React.useEffect(() => {
        if (userData) {
            const {token, user} = userData
            dispatch({type: "auth", payload: {token, username: user.username}})
            window.localStorage.setItem("auth", JSON.stringify({token, username: user.username}))
            props.history.push("/posts")
        }
    }, [userData]);

    const actions = {
        signup: () => {
            return fetch(state.url + "/users", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }).then((response) => response.json());
        },
          login: () => {
            return fetch(state.url + "/login", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }).then((response) => response.json());
        },
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        actions[type]().then((data) => {
            setUserData(data)
        })
    }

    return (
        <div className="container" id="authpage" style={{textAlign: "center"}}>
                <form className="six columns authform" onSubmit={handleSubmit}>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <input type="submit" value={type} />
                </form>
        </div>
    )
}

export default Auth;