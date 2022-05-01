import {
  Routes,
  Route,
} from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from '../pages/Home';
import Quotes from '../pages/Quotes';
import Calculator from '../pages/Calculator';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/calculator" exact element={<Calculator />} />
        <Route path="/quote" exact element={<Quotes />} />
        <Route index path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
