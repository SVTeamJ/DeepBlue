import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import '@/reset.scss';
function App() {
  const elem = useRoutes(routes);
  return <div>{elem}</div>;
}

export default App;
