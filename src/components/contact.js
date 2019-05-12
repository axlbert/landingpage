import React, {Component} from 'react'
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Alex Langer</h2>
                        <img 
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="avatar"
                        className="avatar-img"
                        style={{height: '250px'}}
                    />

                    <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>Kevin chicken pancetta andouille porchetta capicola fatback brisket venison
                         burgdoggen jowl tri-tip. Ham porchetta sirloin ground round pig hamburger 
                         filet mignon buffalo salami drumstick beef alcatra cow meatloaf. 
                         Drumstick capicola brisket salami, pork biltong 
                         beef short loin sirloin pancetta meatloaf tenderloin. 
                         Tail tongue corned beef shankle burgdoggen ham kevin, 
                         pig pastrami pancetta rump tenderloin sausage short ribs.</p>
                    
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    +49 1256 22425 22   
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    alex@schmiede.one  
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    acla
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;