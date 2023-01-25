const apiLink = "https://api.openweathermap.org/data/2.5/forecast?id=4273837&appid=c05ae40fa4c4b20533290cb41473890c";

fetch(apiLink)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayData(data)
  })

  function displayData(data){
    
  }