import React from 'react';
import { 
    Menu,
    Typography,
} from 'antd';
import {
    NavLink
  } from 'reactstrap';

import IDE from './IDE';
import LandingPage from './LandingPage';
import Tutorials from './Tutorials';
import Questions from './Questions';
import ConceptGraph from './ConceptGraph';


import {
    Route,
    Link,
    HashRouter,
    Redirect
  } from "react-router-dom";

import '../style/style.css';

const { Title } = Typography;

class Outline extends React.Component {
    
    state = {
        current: 'home',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
        
    render() {
        const { current } = this.state;
        return (
            <div className="navBar" >
                <HashRouter>
                    <div className="header">
                        {/* <NavLink tag={Link} to="/Home" key="home"> */}
                            <Title style={{color: '#1890ff', marginBottom: "0", paddingBottom: "0"}}>Python Practice Engine</Title>
                        {/* </NavLink> */}
                    </div>
                    <Menu 
                        onClick={this.handleClick} 
                        selectedKeys={[current]} 
                        mode="horizontal"   
                        style={{marginBottom: "2%", textAlign: "center", marginTop: "0", paddingTop: "0"}}
                    >      
                            <Menu.Item key="home">
                                <NavLink tag={Link} to="/Home">
                                        Home
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="questions">
                                <NavLink tag={Link} to="/Questions">
                                        Questions
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="tutorials">
                                <NavLink tag={Link} to="/Tutorials">
                                    Tutorials
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="ide">
                                <NavLink tag={Link} to="/IDE">
                                    Practice Engine
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="graph">
                                <NavLink tag={Link} to="/ConceptGraph">
                                    Concept Graph
                                </NavLink>
                            </Menu.Item>
                    </Menu>
                    <div className="content">
                        <Route path="/Home" component={LandingPage}/>
                        <Route path="/IDE" component={IDE} />
                        <Route path="/Tutorials" component={Tutorials} />
                        <Route path="/Questions" component={Questions} />
                        <Route path="/ConceptGraph" component={ConceptGraph} />
                        <Route exact path="/">
                            <Redirect to='/LandingPage' />
                        </Route>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Outline;
