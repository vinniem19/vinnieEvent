import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ImgCard from '../components/ImgCard';
import resources from '../resources';
import { Row } from '../components/Grid';
import './style.css'
class CatholicResources extends Component {
constructor(props){
    super(props)
    this.state={
            resources:resources
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
            {this.state.resources.map(cr => (
    <ImgCard
        name={cr.name}
        image={cr.img} 
        url={cr.url}
        company={cr.company} 
        textp1={cr.text1}
        textp2={cr.text2}/>
        ))}
        </div>
        </Row> 
</div>
        );
    }
}


export default CatholicResources;
