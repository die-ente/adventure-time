"use client"
import React, {useContext, useEffect, useRef, useState} from "react";
import style from "./chatpage.module.css";
import {SocketContext} from "@/app/SocketContext.component";
import styled from "@emotion/styled";

const RequestContainer = styled.div`
`;

const GmPage = () => {
    const socket = useContext(SocketContext);
    const [chat, setChat] = useState([]);
    const ready = useRef(false);

    useEffect(() => {
        if (!socket || ready.current) return;
        ready.current = true;

        console.log("GM JOINED");
        socket.emit("i_am_the_gm");

        socket.on("receive_msg", (data) => {
            console.log("RECEIVED", data);
            setChat((pre) => [...pre, data]);
        });
    }, []);


    return (
        <div className={style.chat_div}>
            <div className={style.chat_border}>
                <div>
                    {chat.map(({roomId, user, msg, time}, key) => (
                        <div
                            key={key}
                            className={style.chatProfileLeft}
                        >
                            <span
                                className={style.chatProfileSpan}
                                style={{textAlign: "left"}}
                            >
                                {user.charAt(0)}
                            </span>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <h3>
                                    {msg}
                                </h3>
                                <sub>
                                    {time}
                                </sub>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <RequestContainer>
                <form>
                    <input
                        type="text"
                        placeholder="Request"
                    />
                </form>
            </RequestContainer>
        </div>
    );
};

export default GmPage;