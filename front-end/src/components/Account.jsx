// import React, { createContext } from 'react';
import { createContext } from 'react';
// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
// import UserPool from '../UserPool';

const AccountContext = createContext();

// const Account = (props) => {
//   const authenticate = async (Username, Password) => new Promise((resolve, reject) => {
//     const user = new CognitoUser({
//       Username,
//       Pool: UserPool,
//     });
//     const authDetails = new AuthenticationDetails({
//       Username,
//       Password,
//     });
//     user.authenticateUser(authDetails, {
//       onSuccess: (data) => {
//         console.log('onSuccess:', data);
//         resolve(data);
//       },
//       onFailure: (err) => {
//         console.error('onFailure', err);
//         reject(err);
//       },
//       newPasswordRequired: (data) => {
//         console.log('newPasswordRequired:', data);
//         resolve(data);
//       },
//     });
//   });

//   return (
//     <AccountContext.Provider value={{ authenticate }}>
//       {props.children}
//     </AccountContext.Provider>
//   );
// };

// export { Account, AccountContext };
export default AccountContext;
// export Account;
