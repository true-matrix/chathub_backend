const dotenv = require("dotenv"); 
dotenv.config({ path: "./.env.sample" }); 
const config = { 
    development: { 
      port: 3001, 
      DATABASE: 'mongodb+srv://rajeshtruematrix:uEFXSzX69p7ZA3x9@cluster0.g4vcjek.mongodb.net', 
      // Other development-specific configurations 
    }, 
    production: { 
      port: process.env.PORT || 3001, 
      DATABASE: process.env.MONGODB_URI || 'mongodb+srv://rajeshtruematrix:uEFXSzX69p7ZA3x9@cluster0.g4vcjek.mongodb.net', 
      // Other production-specific configurations 
    }, 
  }; 
   
  module.exports = process.env.NODE_ENV === 'production' ? config.production : config.development;