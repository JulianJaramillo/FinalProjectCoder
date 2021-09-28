import React from 'react'
import logo from './Book.gif';
import './HomeView.css';

export const HomeView = () => {
    return (
        <div className="HomeView">
        <header className="HomeView-header">
          <h1>My bookends Web</h1>
          <img src={logo} className="HomeView-logo" alt="logo" />
          <p>
            Welcome to your favorite digital book store
          </p>
        </header>
      </div>
    )
}
