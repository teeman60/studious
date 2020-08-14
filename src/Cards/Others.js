import React, { Component } from 'react';
import img2 from '../Assets/set_goals.jpg'
import img3 from '../Assets/forum_discussions.png'
import img4 from '../Assets/skills.jpg'


import Card from './Cards'

class Others extends Component {
    render() { 
        return ( 
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4}/>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default Others;