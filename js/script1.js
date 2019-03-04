window.onload = function () {
	
		let type = 'session';
		

		
	 		fetch('./php/login.php', {method:"POST", headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, body: "type=" + type })  
		  .then(  
		    function(response) {  
		      if (response.status !== 200) {  
		        console.log('Looks like there was a problem. Status Code: ' +  
		          response.status);  
		        return;  
		      }

		      // Examine the text in the response  
		      response.json().then(function(data) {  
		       
		        	console.log(data);
		        	// document.location.href = 'cabinet.html'; 

		       
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });
		
	

	


}	