import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import About from './components/About';
import Dishes from './components/Dishes';
import Mission from './components/Mission';
import Expertise from './components/Expertise';
import Review from './components/Review';
import Contact from './components/Contact';
import Home from './components/Home';

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: '/dishes', element: <Dishes />  },
    { path: '/about', element: <About />  },
    { path: '/mission', element: <Mission />  },
    { path: '/expertise', element: <Expertise />  },
    { path: '/review', element: <Review />  },
    { path: '/contact', element: <Contact />  },
  ]
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
