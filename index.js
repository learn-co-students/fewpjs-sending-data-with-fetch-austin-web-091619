// Add your code here

function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email})
    }
return fetch("http://localhost:3000/users", configObj)
.then(function(response) {
    return response.json()
    })
    .then(function(x){document.body.append(x.id)})
    .catch(function(error) {
        debugger
        document.body.append(error.message)
        alert(error);
        console.log(error.message)})
}
