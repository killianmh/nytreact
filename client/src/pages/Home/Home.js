import React, { Component } from "react";
import { Col, Container, Row } from "../../components/Grid";
import Search from "../../components/Search";
import Results from "../../components/Results";
import Article from "../../components/Article";
import Saved from "../../components/Saved";
import { Input, FormBtn} from "../../components/Form";
import API from "../../utils/API";

class Home extends Component {
    state = {
        results: [],
        topic: "",
        startYear: "",
        endYear: "",
        dbArticles: []
    };

    componentDidMount () {
        API.fetchDBArticles()
        .then(res => {
            console.log(res)
            //Save fetched articles to state
        })
    }

    //Write a method that sends a delete request to the articles database; pass this function in as a property in the Saved Articles component below

    //Write a method that sends a save request to the articles database. accept article info as arguments

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
                [name]: value

        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        let topic = this.state.topic.trim();
        let startYear = this.state.startYear.trim();
        let endYear = this.state.endYear.trim();
        if(topic){
            console.log("poop" + topic)
            API.searchForArticles({
                topic: topic,
                startYear: startYear,
                endYear: endYear
            })
            .then(res => {
                console.log(res)
                console.log(res.data.response.docs)
                let slicedRes = res.data.response.docs.slice(0,5)
                this.setState({
                    results: slicedRes
                })
                console.log(this.state);
            }).catch(err => console.log(err))
        }
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col size="md">
                    <Search>
                        <form>
                            <label htmlFor="topic">Topic</label>
                            <Input 
                                value={this.state.topic}
                                onChange={this.handleInputChange}
                                name="topic"
                                placeholder="Topic (required)"
                            />
                            <label htmlFor="startYear">Start Year</label>
                            <Input 
                                value={this.state.startYear}
                                onChange={this.handleInputChange}
                                name="startYear"
                                placeholder="Start Year"
                            />
                            <label htmlFor="endYear">End Year</label>
                            <Input 
                                value={this.state.endYear}
                                onChange={this.handleInputChange}
                                name="endYear"
                                placeholder="End Year"
                            />
                            <FormBtn onClick={this.handleFormSubmit}></FormBtn>
                        </form>
                    </Search>
                    </Col>
                </Row>
                <Row>
                    <Col size="md">
                    <Results>
                        {/* Also pass in save function as a property to save article to mongo database */}
                        {this.state.results.map(result => (
                                <Article title={result.headline.main} date={result.pub_date} url={result.web_url}></Article>
                        ))}
                    </Results>
                    </Col>
                </Row>
                <Row>
                    <Col size="md">
                    <Saved>
                        {/* For each item in this.state.results, map to an Article component passing in delete function as a property */}
                        {/* {this.state.results.map(result => (
                                <Article title={result.headline.main} date={result.pub_date} url={result.web_url}></Article>
                        ))} */}
                    </Saved>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;