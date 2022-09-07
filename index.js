const display = () => {
    console.log("Displaying list....")
    if(localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
    }

    //Add the item in the table and display it
    let tableBody = document.getElementById("tableBody")
    let str = ""
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button type="submit" class="btn btn-sm btn-primary" onclick="deleteItem(${index})">Delete</button></td>
        </tr>
        `
    });
    tableBody.innerHTML = str
}

display();

const addItem = () => {
    console.log("Updating list....")
    let tit = document.getElementById("title").value
    let desc = document.getElementById("description").value
    if(localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([tit, desc])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 

    display();
}

const deleteItem = (itemIndex) => {
    console.log("Delete", itemIndex)
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr)

    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    display();
}


let add = document.getElementById("add")
add.addEventListener("click", addItem)

