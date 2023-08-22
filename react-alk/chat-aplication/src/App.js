/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { createContext, useContext, useReducer, useState } from "react";
import { BrowserRouter, Link, Redirect, Route } from "react-router-dom";

const Section = styled.section`
  background-color: #000;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
`;

const HyperLink = styled.span`
  display: block;
  margin-top: 30px;
  text-align: center;
`;

const Home = () => {
  const { state, dispatch } = useContext(ReduxStoreContext);

  const handleNameChange = (event) => {
    dispatch({ type: ACTIONS.SET_NAME, payload: event.target.value });
  };

  return (
    <Section>
      <Box>
        <label>Name:</label>
        <input value={state.name} onChange={handleNameChange} />
        <Link to="/chat">
          <HyperLink
            css={css`
              color: red;
            `}
          >
            Przejdź dalej
          </HyperLink>
        </Link>
      </Box>
    </Section>
  );
};

const Chat = () => {
  const { state, dispatch } = useContext(ReduxStoreContext);
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSendClick = (event) => {
    dispatch({
      type: ACTIONS.ADD_MESSAGE,
      payload: { authorId: state.name, text },
    });
    setText("");
  };

  if (state.name === "") {
    return <Redirect to="/" />;
  } else {
    return (
      <Section>
        <Box
          css={css`
            width: 400px;
          `}
        >
          <div>Name: {state.name}</div>
          <div>
            <input
              value={text}
              onChange={handleTextChange}
              placeholder="Your message"
            />
            <button onClick={handleSendClick}>send</button>
          </div>
          <ul>
            {state.messages.map((message, index) => (
              <li key={index}>
                <b>{message.authorId}:</b>
                {message.text}
              </li>
            ))}
          </ul>
        </Box>
      </Section>
    );
  }
};

// stan poczatkowy
const initialState = {
  name: "",
  messages: [
    // { authorId: "Wojtek", text: "Wiadomość 1" },
    // { authorId: "Wojtek", text: "Wiadomość 2" },
  ],
};

// definiujemy dostepne typy akcji
const ACTIONS = {
  ADD_MESSAGE: "ADD_MESSAGE",
  SET_NAME: "SET_NAME",
};

// definiujemy reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

    case ACTIONS.SET_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

// definiujemy globalny context dla Redux Store
const ReduxStoreContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ReduxStoreContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
        </BrowserRouter>
      </ReduxStoreContext.Provider>
    </div>
  );
};

export default App;
