import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Projects />
            <Anout />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;