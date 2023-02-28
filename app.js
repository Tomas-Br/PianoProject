var notePlayed = ''

const keys = document.querySelectorAll('.key')


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})


function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    console.log(key.dataset.note)
    notePlayed = key.dataset.note
    showNote()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}


$(".white-key").hover(function () {
    $(this).css("background-color", "#3ccabe");
}, function () {
    $(this).css("background-color", "#fff");
});

$(".black-key").hover(function () {
    $(this).css("background-color", "#302d2d");
}, function () {
    $(this).css("background-color", "#000");
});


function showNote() {
    document.getElementById('notePressed').innerHTML = notePlayed
    console.log(document.getElementsByClassName('notePressed'))


}





