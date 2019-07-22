import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ImgCard from '../components/ImgCard';
import apps from '../apps';
import { Row } from '../components/Grid';
import './style.css'
class CatholicApps extends Component {
constructor(props){
    super(props)
    this.state={
            apps: apps
    }
    
}
    render() {
        return(
<div>
    <Header />
    <Navbar />
    <h1>Catholic Resources</h1>
    <Row>
        <div className='cath-cards'>
            {this.state.apps.map(cathapps => (
    <ImgCard
        name={cathapps.name}
        image={cathapps.img} 
        url={cathapps.url}
        company={cathapps.company} />
        ))}
        </div>
        </Row> 
</div>
        );
    }
}


export default CatholicApps;
