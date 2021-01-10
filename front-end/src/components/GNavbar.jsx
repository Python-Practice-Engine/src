import React , { useState } from 'react';
import { 
    Menu,
    Typography
} from 'antd';
import '../style/style.css';
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
import {
  NavLink
} from 'reactstrap';
const { Title } = Typography;
class GNavbar extends React.Component {
    
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
        
    render() {
        const { current } = this.state;
        return (
            <div>
                <HashRouter>
                    <div className="header">
                        <NavLink tag={Link} to="/LandingPage">
                            <Title style={{color: '#1890ff'}}>Python Practice Engine</Title>
                        </NavLink>
                    </div>
                    <Menu 
                        style={{textAlign: 'center'}} 
                        onClick={this.handleClick} 
                        selectedKeys={[current]} 
                        mode="horizontal"
                    >      
                            {/* <Menu.Item key="Home">
                                <NavLink tag={Link} to="/LandingPage">
                                    Home
                                </NavLink>
                            </Menu.Item> */}
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
                        <Route path="/LandingPage" component={LandingPage}/>
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

export default GNavbar;
