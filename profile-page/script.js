console.log("page loaded...");

var count = 2;

var countElement = document.querySelector(".badge");

function hide() {
    document.querySelector('.card-list-item').remove();
    count--;
    countElement.innerText= count;

}

function changeName(){
    document.querySelector(".card-body h1").innerText =('Shantel Williams');
}
