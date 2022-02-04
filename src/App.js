import './App.css';
import React from 'react';
import LayoutContainer from './components/layouts/Layout';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <LayoutContainer />
    </Router>
  );
}

export default App;
