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
  
  const contentList = {
    question: <QuestionContent 
    title="Addition Calculator" 
    tags="Functions"
    description="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
    est laborum." />,
    tutorial: <TutorialContent 
    title="Functions" 
    tags="Functions"
    description={
        [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
            est laborum.`, 
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
            est laborum.`, 
        ]
    }
    />,
  };

// const IDE = () => {
//     const [question, setQuestion] = useState({});
//     const [id, setID] = useState(0);

//     useEffect(() => {
//         // const { id } = this.props.match.params
//         // Axios.get(`http://localhost:3001/questions/${id}`).then((response)=> {
//         Axios.get(`http://localhost:3001/questions/1`).then((response)=> {
//             console.log(response.data[0]);
//             // setPosts
//             // props.title=response.data[0].name;
//             // props.tags=response.data[0].tags;
//             // props.difficulty=response.data[0].difficulty;
//             // props.description=response.data[0].description;
//         });
//     }, []);


//     return (
//         <div>
//             {/* <Row gutter={32} style={{margin: "1% 5% 0 5%" }}>
//                 <Col span={6} className="gutter-row">
//                     <div className="question-col"> */}
//                         {/* {questions.map(question => (
//                             <Question 
//                                 title={question.name}
//                                 tags={question.tags}
//                                 difficulty={question.difficulty}
//                                 description={question.description}
//                             />
//                         ))} */}
//                         <div>{question.name}</div>
//                         {/* <Question 
//                             title="Addition Calculator" 
//                             tags="Functions" difficulty="Easy" 
//                             description="Write a function which takes two parameters, adds them together, and returns the result"
//                         /> */}
//                     {/* </div>
//                 </Col>
//                 <Col span={18} className="gutter-row">
//                         <Row gutter={16} >
//                             <Skulpt ></Skulpt>    
//                         </Row>
//                         <Row gutter={16}>
//                             <List
//                                 style={{width:'100%', "margin-top": "1%"}}
//                                 header={<h4>Test Cases</h4>}
//                                 size="large"
//                                 bordered
//                                 dataSource={data}
//                                 renderItem={item => <List.Item>
//                                                         {item}
//                                                         <span className="float-right"><Badge status="success" text="Passed" /></span>
//                                                     </List.Item>}
//                             />
//                         </Row>         
//                 </Col>
//             </Row> */}
//         </div>
//     );
  class IDE extends React.Component  {
    state = {
        key: 'question',
      };
    
      onTabChange = (key, type) => {
        this.setState({ [type]: key });
      };
    
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
                                {contentList[this.state.key]}
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
