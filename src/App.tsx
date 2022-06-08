import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom'

import { Main } from 'pages'

import { WrapperStyled } from './App.style'

const App = () => (
  <Router>
    <WrapperStyled>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Navigate replace to="/items" />} path="/" />
        <Route element={<Navigate replace to="/items" />} path="*" />
      </Routes>
    </WrapperStyled>
  </Router>

)

export default App
