var storedCredentials ={};

function saveCredentials  (username, password){
    storedCredentials = {username: username, password: password};
}

function getStoredCredentials(){
    return storedCredentials;
}
