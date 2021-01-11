import React, {useState, useEffect} from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import {
    Card,
} from 'antd';
import Skulpt from './Skulpt';
import TestCases from './TestCases';
import QuestionContent from './QuestionContent';
import TutorialContent from './TutorialContent';
import Axios from 'axios';

import '../style/style.css';

  const tabList = [
    {
      key: 'question',
      tab: 'Question',
    },
    {
      key: 'tutorial',
      tab: 'Tutorial',
    },
  ];
  
//   const contentList = {
//     question: <QuestionContent 
//     title="Addition Calculator" 
//     tags="Functions"
//     description="
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
//     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
//     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
//     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
//     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
//     est laborum." />,
//     tutorial: <TutorialContent 
//     title="Functions" 
//     tags="Functions"
//     description={
//         [
//             `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
//             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
//             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
//             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
//             est laborum.`, 
//             `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
//             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
//             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
//             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
//             est laborum.`, 
//         ]
//     }
//     />,
//   };
  class IDE extends React.Component  {
    state = {
        key: 'question',
        question: {},
      };
    
      onTabChange = (key, type) => {
        this.setState({ [type]: key });
      };

    componentDidMount(){
        Axios.get(`http://localhost:3001/questions/1`).then((response)=> {
            // console.log(response.data[0]);
            this.setState({question: response.data[0]});
            // console.log(this.state.question);
            // this.state.question = response.data[0];
            console.log(this.state.question)
        });
    } 
    
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="6">
                            <Card
                            style={{ width: '100%' }}
                            tabList={tabList}
                            activeTabKey={this.state.key}
                            onTabChange={key => {
                            this.onTabChange(key, 'key');
                            }}
                            > 
                                {/* {contentList[this.state.key]} */}
                                <QuestionContent 
                                question={this.state.question} />
                                {/* <QuestionContent 
                                title={"Addition Calculator"} 
                                tags="Functions"
                                description="
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                                est laborum." /> */}
                            </Card>
                            <TestCases></TestCases>
                        </Col>
                        <Col md="6">
                            <Skulpt></Skulpt>   
                        </Col>
                    </Row> 
                    
                </Container>
            </div>
        );
    }
};

export default IDE;
