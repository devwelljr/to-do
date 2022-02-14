import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <ListPage /> } />
    </Routes>
  );
}

export default App;
