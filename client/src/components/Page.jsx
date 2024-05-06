import { useEffect, useState, useRef } from "react";
import Bar from "./Bar";
import Body from "./Body";
import Footer from "./Footer";

function Page(socket) {
    const [messages, setMessages] = useState([]);
    const [typingStatus, setTypingStatus] = useState("");
    const lastMessageRef = useRef(null);
    console.log(socket);
    useEffect(() => {
        socket.on("messageResponse", (data) =>
            setMessages([...messages, data])
        );
    }, [socket, messages]);

    useEffect(() => {
        socket.on("typingResponse", (data) => setTypingStatus(data));
    }, [socket]);

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chat">
            <Bar socket={socket} />
            <div className="chat__main">
                <Body
                    messages={messages}
                    typingStatus={typingStatus}
                    lastMessageRef={lastMessageRef}
                />
                <Footer socket={socket} />
            </div>
        </div>
    );
}

export default Page;
