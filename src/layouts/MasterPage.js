import React from 'react';
import { NavBar } from "../components/NavBar/NavBar.js";
import { Footer } from "../components/Footer/Footer.js";

import './MasterPage.scss';

const MasterPage = ({ component }) => {
    return (
        <>
            <NavBar />
            <main>
                {component}
            </main>
            <Footer />
        </>
    );
};

export { MasterPage };