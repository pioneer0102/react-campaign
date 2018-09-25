// prod.js - production keys here

module.exports = {
  googleClientID:
    "997294811117-bo15qtnt0hbf3jttk1q3m7b78lan0633.apps.googleusercontent.com",
  googleClientSecret: "K-n6fIutkGqjVc0-CVOX3Uao",
  mongoURI:
    "mongodb://admin-mjgattas:2hTVrm6szH23Akw@ds113853.mlab.com:13853/react-campaign-app-prod",
  cookieKey: "fasdlkfjmnmnvvxiefwjfdlsafdsafcccc"
};

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
