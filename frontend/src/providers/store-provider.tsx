import store from '@/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export function StoreProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
