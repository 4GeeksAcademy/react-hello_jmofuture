import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';
import cardsData from './cardsData'; 

const Home = () => {
    return (
        <div id="main-content" className="d-flex flex-column min-vh-100">
            <Navbar />
                <Jumbotron />
            <div className="container my-4 d-flex justify-content-center align-items-center flex-wrap">
                <div className="row justify-content-center">
                    {cardsData.map((card, index) => (
                        <div className="col-md-3 mb-3 d-flex justify-content-center" key={index}>
                            <Card 
                                title={card.title} 
                                description={card.description} 
                                imageUrl={card.imageUrl} 
                                url={card.url} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
