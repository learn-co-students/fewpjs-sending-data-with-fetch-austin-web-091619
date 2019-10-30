// Add your code here
function submitData(userName, userEmail){
    const targetUrl = "http://localhost:3000/users";
    const userObject = {
        name: userName,
        email: userEmail
    }
    const headers ={
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    const configObject = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(userObject)
    } 

    return fetch(targetUrl,configObject)
        .then(response =>  response.json() )
        .then( function(respObj){
            const p = document.createElement("p");
            p.innerText = respObj.id;
            p.id = respObj.id;
            document.body.appendChild(p);
        })
        .catch(function(error){
            const p = document.createElement("p");
            p.id = error.message;
            document.body.appendChild(p);
        })
        
}