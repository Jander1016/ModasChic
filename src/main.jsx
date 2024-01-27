import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './context/productContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductProvider>
        <App />
    </ProductProvider>
)
