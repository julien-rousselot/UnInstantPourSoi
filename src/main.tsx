import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './component/App/App.tsx'
import './reset.scss'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
