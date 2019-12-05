const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    console.log('It worked! Returned coordinates:', coords);

    fetchISSFlyOverTimes(coords, (error, data) => {
      if (error) {
        console.log("It didnt' work!", error);
        return;
      }
      console.log("It worked! ISS Flyover times:", data);
    });
  });
});

