let btn = document.getElementById('addbtn');
seenote();
btn.addEventListener('click', function(e) {
    let txt = document.getElementById('addtxt');
    let title = document.getElementById('addtitle');

    let R = localStorage.getItem('R');
    //console.log(R)
    if (R == null) {
        newObj = [];
    } else {
        newObj = JSON.parse(R);
    }
    let myObj = {
        title: title.value,
        txt: txt.value
    }
    newObj.push(myObj);
    localStorage.setItem('R', JSON.stringify(newObj));
    txt.value = " ";
    title.value = " ";

    seenote();

});

function seenote() {
    let R = localStorage.getItem('R');
    //console.log(R)
    if (R == null) {
        newObj = [];
    } else {
        newObj = JSON.parse(R);
    }

    html = " ";
    newObj.forEach(function(element, index) {

        html += `  <div class="notecard card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title} </h5>
            <hr>
            <p class="card-text">${element.txt}</p>
            <button href="#" id=${index} onclick='D(this.id)' class="btn btn-primary">DELETE</button>
        </div>
    </div>`

    });
    let allnote = document.getElementById('allnote');
    if (html != 0) {
        allnote.innerHTML = html;
    } else {
        allnote.innerHTML = 'Enter your Notes : )'
    }

}

function D(index) {
    let R = localStorage.getItem('R');
    //console.log(R)
    if (R == null) {
        newObj = [];
    } else {
        newObj = JSON.parse(R);
    }
    newObj.splice(index, 1);

    localStorage.setItem('R', JSON.stringify(newObj));
    seenote();
}

let search = document.getElementById('searchtxt');
search.addEventListener('input', () => {

    let input = search.value;
    console.log(input);
    let notecard = document.getElementsByClassName('notecard');

    Array.from(notecard).forEach(element => {
        let cardtxt = element.getElementsByTagName('h5')[0].innerText;
        console.log(cardtxt);
        if (cardtxt.includes(input)) {
            element.style.disply = "block";
            console.log('block');
        } else {
            element.style.disply = "none";
            console.log('block');
        }
    });
});