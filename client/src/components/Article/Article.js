import React, { Component } from 'react';
import { Col, Container, Row } from "../../components/Grid";

class Article extends Component {
    render (){
        return(
            <div>
                {/* Create a row for the saved article; include a button which when you click, it runs delete api call in Home.js to delete record from database */}
                <Row>
                    <Col size="md"><div>{this.props.title}</div> </Col>
                    <Col size="md"><div>{this.props.date}</div> </Col>
                    <Col size="sm"><button><a href={this.props.url}>Visit</a></button></Col>
                    <Col size="sm"><button>Save</button></Col>
                </Row>
            </div>
            
            

            
        )
    }
}

export default Article;