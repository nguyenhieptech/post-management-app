import { RoutingProvider } from './routing-provider';
import { StoreProvider } from './store-provider';
import { ThemeProvider } from './theme-provider';
import { ToasterProvider } from './toaster-provider';

export function AppProvider() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RoutingProvider />
        <ToasterProvider />
      </ThemeProvider>
    </StoreProvider>
  );
}
