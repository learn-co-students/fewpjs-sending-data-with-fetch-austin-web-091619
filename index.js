
//     let submitData = {
//         name: "Joelle",
//         email: "joelle@joelle.joelle"
//     };

//     let submitData = {
//         method: "POST",
//         headers: {
//             "Content-Type": "appliocation/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(formData)
//     };

// fetch("http://localhost:3000/users", submitData)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         document.body.innerHTML = object["id"];
//     })
//     .catch(function(error) {
//         document.body.innerHTML = error.message;
//     });


function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }
