import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { I18nContext } from './i18n';
import LanguageSelect from './components/LanguageSelect';
import About from "./components/About/About";
const App = () => {
  const { translate } = useContext(I18nContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LanguageSelect />
        <p>{translate('edit_and_save')}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate('learn_react')}
        </a>
        <p>Please open the {translate('main-menu', 'title')}</p>
      </header>
      <About />
    </div>
  );
};

export default App;