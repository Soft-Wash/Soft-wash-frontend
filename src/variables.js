export const user_nav_items = [
  {name:"User Profile", path:"/users/profile", icon:null},
  {name:"Wallets/Transaction History", path:"/users/transactions", icon:null},
  {name:"User Activity", path:"/users/activity", icon:null},
  {name:"Connected Accounts", path:"/users/connected_accounts", icon:null},
  {name:"Wallet Links", path:"/users/wallet_links", icon:null},
];


export const BASE_URL = process.env.REACT_APP_IS_PRODUCTION === 'true'
? process.env.REACT_APP_BASE_URL_PROD
: process.env.REACT_APP_BASE_URL_DEV;
;