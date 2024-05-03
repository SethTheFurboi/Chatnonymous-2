import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import socketIO from "socket.io-client";


const socket = socketIO.connect("http://localhost:4000")
const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home socket={socket} />}
                        ></Route>
                        <Route
                            path="/chat"
                            element={<Page socket={socket} />}
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
