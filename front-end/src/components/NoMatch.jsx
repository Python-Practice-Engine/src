import React from 'react';
import { Result, Button } from 'antd';
import {
  useHistory,
} from 'react-router-dom';

// for invalid url
function NoMatch() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={(
          <Button type="primary" onClick={handleClick}>Back</Button>
        )}
      />
    </div>
  );
}

export default NoMatch;
