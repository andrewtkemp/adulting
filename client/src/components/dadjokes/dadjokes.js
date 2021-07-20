//  start of jokes 
function dadjokes() {
    fetch("https://dad-jokes.p.rapidapi.com/random/joke/png", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
  }
    then(response => response.json())
  .then(data => {
      console.log(data);
  
      // populating Id jokes with inside conslog 
      $("#dadjokes").text(data.value);
  })
  .catch(error => {
      console.log(error);
  })
  
  
  displayBookmarks();
  
  // calling display jokes
  dadjokes();

