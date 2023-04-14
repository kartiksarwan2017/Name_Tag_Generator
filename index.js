const name = document.getElementById("name");
const tagsContainer = document.querySelector('.tags');

const addName = () => {

    if(name.value === ""){
        return null;
    }
    
    const tag = document.createElement("div");

    // we are adding class attribut to each div to apply css to it
    tag.setAttribute("class", "tag");

    tag.innerText = `Hey, I am ${name.value}`;

    tagsContainer.append(tag);

};