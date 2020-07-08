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

    // TODO: add error messages
    return (
        <form onSubmit={login}>
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

            <button type="submit" name="submit">Login</button>
            <button type="button" onClick={register}>Register</button>
        </form>
    );
};