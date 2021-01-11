import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {PublicRoute, ProtectedRoute} from './navigation';
import { Header, Footer } from "./components";
import { Home, Product, Cart, Login, Signup, Profile } from './screens';
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, CART_ROUTE, PRODUCT_ROUTE, PROFILE} from './navigation/routes';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
        <Switch>
          <PublicRoute 
            exact path={LOGIN_ROUTE}
            render={({ ...props }) => (<Login {...props} />)} />
          <PublicRoute 
            exact path={SIGNUP_ROUTE}
            render={({ ...props }) => (<Signup {...props} />)} />

          <PublicRoute 
            exact path={HOME_ROUTE}
            render={({ ...props }) => (<Home {...props} />)} />
          
          <PublicRoute 
            exact path={PRODUCT_ROUTE}
            render={({ ...props }) => (<Product {...props} />)} />
         
          <ProtectedRoute path={CART_ROUTE}>
            <Cart />
          </ProtectedRoute>
          <ProtectedRoute path={PROFILE}>
            <Profile />
          </ProtectedRoute>
          
      </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
