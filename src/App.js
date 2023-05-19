import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-moment';
Chart.register(...registerables);

function App() {
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;
