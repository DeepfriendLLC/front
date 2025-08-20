"use client";

import { useEffect, useState } from "react";
import { LoginAPI } from "./login-api/login-api";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
    const router = useRouter();

    const [cookies, setCookie] = useCookies(['jwt']);

    const [email, setEmail] = useState<string>(``);
    const [password, setPassword] = useState<string>(``);

    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        const jwt = cookies.jwt;
        //if (jwt && jwt !== '') router.push(`/dashboard`);
    }, []);

    useEffect(() => {
        if (email !== '' && password !== '' && !ready) setReady(true);
        else if (ready && (email === '' || password === '')) setReady(false);
    }, [email, password]);

    const login = async () => {
        if (email === '' || password === '') return;

        const { jwt } = await LoginAPI(email, password);

        if(!jwt) return;

        setCookie('jwt', jwt);
        router.push(`/dashboard`);

        console.log("AQUI LOGIN", jwt);
    };

    return (
        <div className="login-wrapper">
            <div className="login-card text-white">
                <h1 className="home-properties-1-title text-center">
                    Login
                </h1>
                <input
                    type="text"
                    className="login-input"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className={ready ? "login-button" : "login-button-disabled"} disabled={!ready} onClick={login}>
                    Enter
                </button>
            </div>
        </div>
    );
}
