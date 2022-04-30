import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './redux';
import routes from './router/routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            />
          ))}
          <Route
            path="*"
            element={<Navigate to="/configure" replace />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

