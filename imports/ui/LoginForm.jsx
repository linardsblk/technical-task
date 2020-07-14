import React, { useState } from 'react';

export default function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const login = (e) => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    }

    const register = (e) => {
        e.preventDefault();

        Accounts.createUser({
            username: username,
            password: password
        });
    }

    return (
        <form onSubmit={login} className="pure-form-stacked">
            <label htmlFor="username">Username</label>

            <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                required

                onChange={(e) => setUsername(e.currentTarget.value)}
            />

            <label htmlFor="password">Password</label>

            <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                required

                onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <button type="submit" name="submit" className="pure-button pure-button-primary">Login</button>
            <button type="button" onClick={register} className="pure-button pure-button-secondary">Register</button>
        </form>
    );
};