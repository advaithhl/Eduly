import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router';
import { Header } from '../Header';
import { WebSocketProvider } from '../../contexts';

export function MessageLayout() {
  return (
    <WebSocketProvider>
      <AppShell
        header={{ height: { base: 48, sm: 60 } }}
        padding={0}
        styles={() => ({
          main: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
          },
        })}
      >
        <Header />
        <AppShell.Main style={{ flexGrow: 1 }}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </WebSocketProvider>
  );
}
