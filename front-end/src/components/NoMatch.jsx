import React from 'react';
import { Result, Button } from 'antd';
import {
  Link,
  NavLink,
} from 'react-router-dom';

const NoMatch = () => (
  <div>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={(
        <NavLink
          tag={Link}
          to="/IDE/1"
        >
          <Button type="primary">Back Home</Button>
        </NavLink>
      )}
    />
  </div>
);

export default NoMatch;
