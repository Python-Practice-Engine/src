// setting values to amazon cognito to connect to created instance
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_5f9YTZ0Nb',
  ClientId: '27oqhcgfjq6h829h4a10vtfojl',
};

export default new CognitoUserPool(poolData);
