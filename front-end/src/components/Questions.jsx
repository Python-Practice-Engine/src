import React from 'react';
import '../style/style.css';
import QuestionsTable from './QuestionsTable';
import QuestionsCollapse from './QuestionsCollapse';

const Questions = () => {
    return (
        <div>
            {/* <div className="q-table">
                <QuestionsTable />
            </div> */}
            <QuestionsCollapse />
        </div>
    );
};


export default Questions;
