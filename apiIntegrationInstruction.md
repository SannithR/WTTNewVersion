use fetch to implement api integration and call the endpoint apiUrl = 'https://tabletennisapitest.azurewebsites.net/Players/GetPlayers'; 
and take api key from .env file. use the get method along with  headers: {
          "ApiKey": apiKey,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }, also add api timeout 5mins. 



