
var form = document.getElementById("github-form");


form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    var search = document.getElementById("search").value;

    fetch(`https://api.github.com/search/users?q=${search}`)
        .then(response => response.json())
        .then(parsed => addToList(parsed));

})

var test = {};
var next = "";
var li = document.createElement("li");
var ul = document.getElementById("user-list");

function addToList(users){
    test = users['items'];
    for(var i = 0; i < test.length; i++){
        
        next = test[i].login;
        document.createElement("li")(document.createTextNode(next));
        ul.appendChild(li);

        
    }
}

/*function addToList(users){
    
    for(var i = 0; i < users[login].length; i++){
        
        var next = users["login"[i]];
        document.getElementById("user-list").appendChild(next);

    }

}
*/