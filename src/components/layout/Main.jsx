import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Main = () => {
    const styles = {
        backgroundColor: '#CDD8C8',
        height: '100vh',
      };
    return (
        <div style={styles}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;