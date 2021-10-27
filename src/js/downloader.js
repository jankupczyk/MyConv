let Btn = document.getElementById('btn-convert');
let URLinput = document.querySelector('.input-converter');
let select = document.querySelector('.file-format');
let serverURL = 'http://localhost:3000/index.html';

Btn.addEventListener('click', () => {
    if (!URLinput.value) {
        alert('Please provide valid YouTube URL!');
    } else {
        if (select.value == 'mp3') {
            downloadMp3(URLinput.value);
        } else if (select.value == 'mp4') {
            downloadMp4(URLinput.value);
        }
    }
});

async function downloadMp3(query) {
    const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
    if (res.status == 200) {
        var a = document.createElement('a');
        a.href = `${serverURL}/downloadmp3?url=${query}`;
        a.setAttribute('download', '');
        a.click();
    } else if (res.status == 400) {
        alert("Invalid url address!");
    }
}

async function downloadMp4(query) {
    const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
    if (res.status == 200) {
        var a = document.createElement('a');
        a.href = `${serverURL}/downloadmp4?url=${query}`;
        a.setAttribute('download', '');
        a.click();
    } else if (res.status == 400) {
        alert("Invalid url address!");
    }
}