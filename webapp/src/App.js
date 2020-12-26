import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer } from "./components";
import { Home, Product, Cart } from './screens';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/" component={Home} exact />
          <Route path="/product/:productId" component={Product} />
          <Route path="/cart" component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
