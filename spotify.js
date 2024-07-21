const authEndpoint="https://accounts.google.com/o/oauth2/auth"
const clientID='PLldRXoeaXPNm2wL1iy2fBMc55c1T8ZLhp';
const redirectUrl="http://localhost:3000/";
const scopes=["https://www.googleapis.com/auth/drive"];
    export const loginEndpoint=`${authEndpoint}?cliend_id=${clientID}&redirect_url=${redirectUrl}$scope=${scopes.join("%20")}&response_type=token`;
   







     /*AIzaSyDkujHMbdWEU9fIwffx1F3vuoo3DVF9O7s*/