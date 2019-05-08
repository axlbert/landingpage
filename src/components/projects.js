import React, {Component} from 'react'
import {Tab, Tabs } from 'react-mdl'

class Projects extends Component {
    /*class has a state so we use a constructor */

    constructor(props) {
        super(props);
        this.state = {activeTab :0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0 ) {
            return (
                <div><h1>hey ho</h1></div>
            )
        } else if (this.state.activeTab === 1 ){
            return (
                <div>angular stuff</div>
            )
        }
        else if (this.state.activeTab === 2 ){
            return (
                <div>html dingens</div>
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

                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;