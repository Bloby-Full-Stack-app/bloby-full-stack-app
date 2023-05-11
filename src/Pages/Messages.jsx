import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import Contacts from "../components/Chat/Contacts";
import ChatContainer from "../components/Chat/ChatContainer";
import { getUsers } from "../api/endpoints/auth";

export default function Messages() {
    const navigate = useNavigate();
    const socket = useRef();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('_auth_state'))) {
            navigate("/login");
        } else {
            setCurrentUser(
                JSON.parse(
                    localStorage.getItem('_auth_state')
                )
            );
        }

        const fetchUsers = async () => {
            const res = await axios(getUsers());
            setContacts(res.data.users)
        };

        fetchUsers();
    }, []);
    useEffect(() => {
        if (currentUser) {
            socket.current = io(host);
            socket.current.emit("add-user", currentUser._id);
        }
    }, [currentUser]);

    const handleChatChange = (chat) => {
        setCurrentChat(chat);
    };
    return (
        <>
        <main className="main">
            <Container>
                <div className="container" style={{ margin: '0px', padding: '0px'}}>
                    <Contacts contacts={contacts} changeChat={handleChatChange} />
                    {currentChat === undefined ? (
                        ''
                    ) : (
                        <ChatContainer currentChat={currentChat} socket={socket} />
                    )}
                </div>
            </Container>
            </main>
        </>
    );
}

const Container = styled.div`
  gap: 1rem;
  align-items: center;
  .container {
    height: 82vh;
    width: 85vw;
    display: grid;
    grid-template-columns: 20% 80%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 20% 80%;
    }
  }
`;
