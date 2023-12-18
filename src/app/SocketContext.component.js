import {createContext, useContext, useEffect, useRef, useState} from "react";
import io from "socket.io-client";

export const useSocket = () => useContext(SocketContext);

export const SocketContext = createContext(null);

export const SocketProvider = ({children}) => {
    const socket = useRef(null);
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (socket.current) return
        console.log("Attempting to connect to server")

        socket.current = io('ws://localhost:3001');
        socket.current.on('connect', () => {
            console.log("Connected to server")
            setTimeout(() => {
                setReady(true)
            }, 500)
        })
    }, [])

    if (!ready) {
        return <>Connecting to server...</>
    }

    return <SocketContext.Provider value={socket.current}>
        {children}
    </SocketContext.Provider>;
};