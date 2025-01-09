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
const GraphPage = lazy(() => import('./pages/GraphPage'));
const InternetSpeedTestPage = lazy(() => import('./pages/speedTest/InternetPage'));
const VpnSpeedTestPage = lazy(() => import('./pages/speedTest/VpnPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/graph",
    element: <GraphPage />,
  },
  {
    path: "/speed-test/internet",
    element: <InternetSpeedTestPage />,
  },
  {
    path: "/speed-test/vpn",
    element: <VpnSpeedTestPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
