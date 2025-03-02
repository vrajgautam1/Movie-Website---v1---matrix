// const axios = require("axios");

// const API_ENDPOINT = "https://api.ipgeolocation.io/ipgeo";
// const API_KEY = "c351f0a9383e4366934db13832bbf3a4"; // Replace with your actual API key

// const detectCountry = async (req, res, next) => {
//   try {
//     console.log("Middleware executed!");

//     // Get client IP from headers or request
//     const clientIP =
//       req.headers["x-forwarded-for"] || req.connection.remoteAddress;

//     console.log("Client IP detected:", clientIP);

//     if (!clientIP) {
//       console.log("IP address not available");
//       req.country = "Unknown";
//       return next();
//     }

//     // Fetch country based on IP
//     const response = await axios.get(API_ENDPOINT, {
//       params: { apiKey: API_KEY, ip: clientIP },
//     });

//     if (response.data && response.data.country_name) {
//       req.country = response.data.country_name;
//       console.log(`Country detected: ${req.country}`);
//     } else {
//       console.log("Could not detect country from API response");
//       req.country = "Unknown";
//     }
//   } catch (error) {
//     console.error("Error fetching geolocation data:", error);
//     req.country = "Unknown"; // Default if API fails
//   }

//   next();
// };

module.exports = detectCountry;
