import './App.css';
import AppRoutes from './components/app-routes/view/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/view/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ marginTop: '80px' }}>
        <Router>
          <AppRoutes />
        </Router>
      </main>
      <footer> </footer>
    </div>
  );
}

export default App;
