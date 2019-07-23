import React from 'react';
import '../../pages/CatholicResources';
import './style.css';
function ImgCard(props) {
    return (
        <div>
            <div className="row">
                <div className="col s6 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={props.image} alt='person'></img>
                            <span className="card-title">{props.name}</span>
                        </div>
                        <div className="card-content">
                            <ul>
                                <li>{props.textp1}</li>
                                <li>{props.textp2}</li>
                                <li> The website for more is: <a href={props.url}>{props.company}</a></li>
                            </ul>
                        </div>
                        <div className="card-action">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgCard;