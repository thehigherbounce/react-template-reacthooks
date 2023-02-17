import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
