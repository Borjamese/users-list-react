import React, { useState, useEffect } from 'react';
//import './App.css';
import FetchUsers from './components/UsersGrid';

function App() {
  return (
    <div>
      <FetchUsers />
    </div>
  );
}

export default React.memo(App);
