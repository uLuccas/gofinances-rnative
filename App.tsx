import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import themes from './src/global/styles/themes';
import Dashboard from './src/components/Dashboard/Dashboard';

export function App() {
  return (
    <ThemeProvider theme={themes}>
      <Dashboard />
    </ThemeProvider>
  );
}
