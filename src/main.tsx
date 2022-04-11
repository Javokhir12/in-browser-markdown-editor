import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';

ReactDOM.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>,
  document.getElementById('root')
);
