fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const publicIP = data.ip;
    console.log("Public IP Address:", publicIP);
  })
  .catch(error => {
    console.error("Error:", error);
  });