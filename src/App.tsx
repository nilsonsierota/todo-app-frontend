import { GlobalStyles, Theme } from 'themes';
import { TodoRoutes } from 'routes';

export function App() {
  return (
    <Theme>
      <GlobalStyles />
      <TodoRoutes />
    </Theme>
  );
}
