import styled from 'styled-components';
import React from "react";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contacts/Contact";
import {Footer} from "./layout/footer/Footer";
import {AboutMe} from "./layout/sections/about/AboutMe";
import {Testimony} from "./layout/sections/testimony/Testimony";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

