import React from 'react';
import { AppRoutes } from "@/routes"
import { AppContextProvider } from '@/context';

function App() {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
}

export default App;
