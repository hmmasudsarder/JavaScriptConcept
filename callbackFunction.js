function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
      console.log("Data fetched.");
      callback(); // Callback function is executed
    }, 2000);
  }
  
  function processData() {
    console.log("Processing data...");
  }
  
  fetchData(processData); // Passing processData as the callback functionjJ