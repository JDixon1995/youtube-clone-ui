import './App.css';
import { useState } from 'react'
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from './components/Menu'

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {

const [ darkMode, setDarkMode ] = useState(true)

  return (
  <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
  <BrowserRouter>
    <Container>
      <Menu />
      <Main>
        <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={'/'} />
                  <Route path="signin" element={'/'} />
                  <Route path="video">
                  <Route path=":id" element={'/'} />
                  </Route>
                </Route>
              </Routes>
          </Wrapper>
      </Main>
    </Container>
  </BrowserRouter>
</ThemeProvider>
  );
}

export default App;
