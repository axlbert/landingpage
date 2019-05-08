import React, {Component} from 'react'
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, Button, IconButton } from 'react-mdl'

class Projects extends Component {
    /*class has a state so we use a constructor */

    constructor(props) {
        super(props);
        this.state = {activeTab :0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0 ) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{color: 'black', height: '176px', 
                    background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover' }}>
                    React Project #1
                    </CardTitle>
                    <CardText>
                        Lorem ipsum amet dolor 
                    </CardText>
                    <CardActions border>
                        <Button colored >Github</Button>
                        <Button colored >Live Demo</Button>
                        
                    </CardActions>
                    <CardMenu style={{color: 'ffff'}}>
                        <IconButton name="share">Share</IconButton>
                    </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', 
                    background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover' }}>
                    React Project #2
                    </CardTitle>
                    <CardText>
                        li la lu 
                    </CardText>
                    <CardActions border>
                        <Button colored >Github</Button>
                        <Button colored >Live Demo</Button>
                        
                    </CardActions>
                    <CardMenu style={{color: 'ffff'}}>
                        <IconButton name="share">Share</IconButton>
                    </CardMenu>
                    </Card>
                    </div>
            )
        } else if (this.state.activeTab === 1 ){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', 
                    background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover' }}>
                    JavaScript Project #1
                    </CardTitle>
                    <CardText>
                        Lorem ipsum amet dolor 
                    </CardText>
                    <CardActions border>
                        <Button colored >Github</Button>
                        <Button colored >Live Demo</Button>
                        
                    </CardActions>
                    <CardMenu style={{color: 'ffff'}}>
                        <IconButton name="share">Share</IconButton>
                    </CardMenu>
                    </Card>
            )
        }
        else if (this.state.activeTab === 2 ){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', 
                    background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover' }}>
                    HTML Project #1
                    </CardTitle>
                    <CardText>
                        Lorem ipsum amet dolor 
                    </CardText>
                    <CardActions border>
                        <Button colored >Github</Button>
                        <Button colored >Live Demo</Button>
                        
                    </CardActions>
                    <CardMenu style={{color: 'ffff'}}>
                        <IconButton name="share">Share</IconButton>
                    </CardMenu>
                    </Card>
            )
        }
    }
   
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Html</Tab>
                </Tabs>

                
                    <Grid >
                    <Cell col={12}>
                        <div className="content">
                        {this.toggleCategories()}
                        </div>
                    </Cell>
                    </Grid>
                    
               
            </div>
        )
    }
}

export default Projects;