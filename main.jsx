// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import LoginForm from './logn.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <LoginForm/>
//   </StrictMode>,
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import LoginForm from './login'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>,
)

