const themeToggle= document.getElementById('theme-toggle');
const body =document.body;

const savedTheme= localStorage.getItem('research-theme');
if(savedTheme === 'lamp') {
    body.setAttribute('data-theme','lamp');
    themeToggle.textContent ='Toggle daylight';
}

themeToggle.addEventListener('click',() =>{
    constlamp= body.getAttribute('data-theme')==='lamp';
    if (islamp){
        body.removeAttribute('data-theme');
        localStorage.setItem('research-theme','day');
        themeToggle.textContent.textContent='Toggle  Lamp light';
    }else{
        body.setAttribute('data-theme','lamp');
        localStorage.setItem('research-theme','lamp');
        themeToggle.textContent.textContent='Toggle   Daylight';
    }
});


    const copyBtn = document.getElementById('copy-email');
    const copyStatus = document.getElementById('copy-status');

        copyBtn.addEventListener('click',async () =>{
            const email =copyBtn.getAttribute('data-email');
        try{
            await navigator.clipboard.writeText(email);
            copyStatus.textContent=' Address transcribed to notebook';
            setTimeout(() =>copyStatus.textContent='',3000);
        } catch (err){
            copyStatus.textContent='Manual transcription required';
        } 
    });

            document.querySelector('.version').innerHTML=
            `v0.1.0  Last entry:Aug 31,2026  Printed on GitHub Pages`;
