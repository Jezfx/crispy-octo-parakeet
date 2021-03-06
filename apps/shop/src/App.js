import { ThemeProvider } from '@mui/material/styles';
import { ModalProvider } from '@allplants/shop/hooks/useModal';
import { BasketProvider } from '@allplants/shop/hooks/useBasket';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Shop from './pages/Shop';
import KitchenSink from './pages/KitchenSink';
import Gifting from './pages/Gifting';
import Typography from './pages/Typography';

import defaultTheme from './styles/themes/default';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <BasketProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/gifting" element={<Gifting />} />
              <Route path="/typeography" element={<Typography />} />
              <Route path="/kitchen-sink" element={<KitchenSink />} />
            </Routes>
          </Router>
        </BasketProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
