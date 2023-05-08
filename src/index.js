import react from 'react'
import reactDOM from 'react-dom/client'
import App from "./app"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

// const header= <h1>this is my header</h1>
// reactDOM.render(header,document.getElementById('root'))


const root= reactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)