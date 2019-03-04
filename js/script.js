window.onload = function () {
	let login = document.querySelector('.btn-login');
	login.onclick = function(){
		let name = document.querySelector('#login');
		let pass = document.querySelector('#pass');
		let type = 'login';
		name.onfocus = function(){
			name.classList.remove('wrong-login');
			name.value='';
			document.querySelector('#wrong-login').innerHTML='';
		}
		pass.onfocus = function(){
			pass.classList.remove('wrong-login');
			pass.value='';
			document.querySelector('#wrong-login').innerHTML='';
		}
		
	 		fetch('./php/login.php', {method:"POST", headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, body: "type=" + type + "&name=" + encodeURIComponent(name.value) + "&pass=" + encodeURIComponent(pass.value)})  
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
		        	document.location.href = 'cabinet.html'; 

		       
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });
		
	};

	


}	