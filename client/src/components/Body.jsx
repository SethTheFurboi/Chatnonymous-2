import React from "react";
import { useNavigate } from "react-router-dom";

function Body({ messages, typingStatus, lastMessageRef }) {
    const navigate = useNavigate();

    const handleLeaveChat = () => {
        localStorage.removeItem("userName");
        navigate("/");
        window.location.reload();
    };

    return (
        <>
            <header className="chatMainHeader">
                <p>Chat Anonymosly</p>
                <button className="leaveChatBtn" onClick={handleLeaveChat}>
                    LEAVE CHAT
                </button>
            </header>

            <div className="messageContainer">
                {messages.map((message) =>
                    message.name === localStorage.getItem("userName") ? (
                        <div className="messageChats" key={message.id}>
                            <p className="senderName">You</p>
                            <div className="messageSender">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="messageChats" key={message.id}>
                            <p>{message.name}</p>
                            <div className="messageRecipient">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    )
                )}

                <div className="messageStatus">
                    <p>{typingStatus}</p>
                </div>
                <div ref={lastMessageRef} />
            </div>
        </>
    );
}

export default Body;
