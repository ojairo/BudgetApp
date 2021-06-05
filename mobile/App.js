import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor='transparent'
      />
      <Routes/>
    </>
  );
}
