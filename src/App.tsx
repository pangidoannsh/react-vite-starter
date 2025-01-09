import { ConfigProvider } from 'antd';
import './styles/app.css'
import './styles/antdCustom.css'
import { lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { antdTheme } from './config/AntdTheme';

const HomePage = lazy(() => import('./pages/HomePage'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
