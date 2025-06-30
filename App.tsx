
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-black text-white antialiased">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Location />
            </main>
            <Footer />
        </div>
    );
};

export default App;
