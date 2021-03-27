import React from 'react';
import TabBarProvider from '../contexts/TabBarProvider';
import ThemeProvider from '../contexts/ThemeProvider';
import {AuthUserProvider} from '../contexts/AuthUserProvider';
import Routes from './Routes';

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <ThemeProvider>
      <TabBarProvider>
        <AuthUserProvider>
          <Routes />
        </AuthUserProvider>
      </TabBarProvider>
    </ThemeProvider>
  );
}
