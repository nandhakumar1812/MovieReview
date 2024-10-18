
var inputName = document.getElementById("movieNameInput")

var inputDescription = document.getElementById("descriptionInput")

var submitButton = document.getElementById("submitButton")

var movieName , description;

var movieContainer = document.getElementById("movieDataContainer")

var divContainer = document.createElement("div")

divContainer.setAttribute("class", "movie-slide")

let statement_1 , statement_2;

var nameTodos = []

let descriptionTodos = []

// let dictArray = []

// let dict = {
//     "movieName" : statement_1,
//     "review" : statement_2
// }

// array.push(dict)

window.onload = () => {

    nameTodos = JSON.parse(localStorage.getItem("nameTodos")) || []

    descriptionTodos = JSON.parse(localStorage.getItem("descriptionTodos")) || []

    for (todo in nameTodos){
        addnameTodo(nameTodos[todo])
        adddescriptionTodo(descriptionTodos[todo])
    }  

}

submitButton.addEventListener("click" , (event) => {

    event.preventDefault();  

    movieName = inputName.value

    description = inputDescription.value

    if (movieName === "" || description === ""){

        alert("Kindly fill the input tags!")

    }

    else{        

        statement_1 = "Movie Name : " + movieName

        nameTodos.push(statement_1)

        localStorage.setItem("nameTodos" , JSON.stringify(nameTodos))

        statement_2 = "Review : " + description

        descriptionTodos.push(statement_2)

        localStorage.setItem("descriptionTodos" , JSON.stringify(descriptionTodos))

        addnameTodo(statement_1)

        adddescriptionTodo(statement_2)

        inputName.value = ""

        inputDescription.value = ""
        
    }
    
})

function addnameTodo(todo){

    var titleTag = document.createElement("h3")

    titleTag.textContent = todo

    divContainer.appendChild(titleTag)

    movieContainer.appendChild(divContainer)

}

function adddescriptionTodo(todo){

    var descriptionTag = document.createElement("p")

    descriptionTag.textContent = todo

    divContainer.appendChild(descriptionTag)

    movieContainer.appendChild(divContainer)

}

console.log(nameTodos);

