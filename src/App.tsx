import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Secured } from './Secured';

export const App = () => (
  <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/secured" element={<Secured />} />
      </Routes>
    </div>
  </BrowserRouter>
);
