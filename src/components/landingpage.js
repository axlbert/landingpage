import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%' , margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Frontend Developer</h1>
                    
                    <hr/>
                    <p>HTML/CSS Material-UI JavaScript React</p>

                    <div className="social-links">

                         {/*linkedin */}  
                        <a
                            href="http://google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"/>
                        </a>
                         {/*github */}  
                         <a
                            href="http://google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <i
                            className="fa fa-github-square"
                            aria-hidden="true"/>
                        </a>
                    </div>
                    </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;