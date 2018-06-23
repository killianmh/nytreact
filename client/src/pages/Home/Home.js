import React, { Component } from "react";
import { Col, Container, Row } from "../../components/Grid";
import Search from "../../components/Search";
import { Input, FormBtn} from "../../components/Form";
import API from "../../utils/API";

class Home extends Component {
    state = {
        results: [],
        search: {
            topic: "",
            startYear: "",
            // endYear: ""
        }

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            search: {
                [name]: value
            }
        })
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

        if(this.state.search.topic === "poop"){
            console.log("poopy!")
        }
        
        // if(this.state.search.topic !== ""){
        //     console.log("poopy")
        //     API.searchForArticles({topic: this.state.search.topic, startYear: this.state.search.startYear, endYear: this.state.search.endYear})
        //     .then(res => this.setState({
        //         results: res.data
        //         }))
        //     .catch(err => console.log(err));
        // }
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md">
                    <Search>
                        <form>
                            <label htmlFor="topic">Topic</label>
                            <Input 
                                value={this.state.search.topic}
                                onChange={this.handleInputChange}
                                name="topic"
                                placeholder="Topic (required)"
                            />
                            <label htmlFor="startYear">Start Year</label>
                            <Input 
                                value={this.state.search.startYear}
                                onChange={this.handleInputChange}
                                name="startYear"
                                placeholder="Start Year"
                            />
                            <label htmlFor="endYear">End Year</label>
                            <Input 
                                value={this.state.search.endYear}
                                onChange={this.handleInputChange}
                                name="endYear"
                                placeholder="End Year"
                            />
                            <FormBtn onClick={this.handleFormSubmit}></FormBtn>
                        </form>
                    </Search>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;