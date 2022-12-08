import React from "react";
import Overlay from './Overlay';
import PageLoader from './PageLoader';
import Navbar from './Navbar';
import HomeComponent from './HomeComponent';
import Sidebar from './Sidebar';
import GoogleFontLoader from 'react-google-font-loader'

class MainComponent extends React.Component{
    render(){
        return <React.Fragment>
            <GoogleFontLoader
            fonts={[
                {
                font: 'Roboto',
                weights: [400, '700'],
                }

            ]}
            subsets={['latin','cyrillic-ext']}
            />      
            <GoogleFontLoader
            fonts={[
                {
                font: 'Material+Icons',
                }

            ]}
            />      
            <Overlay/>
            <Navbar/>
            <Sidebar/>
            <HomeComponent/>
        </React.Fragment>;
    }
}

export default MainComponent;