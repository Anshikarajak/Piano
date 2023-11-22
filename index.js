const pianokeys= document.querySelectorAll('.key')

function playsound(newurl){
    new Audio(newurl).play()
}

pianokeys.forEach((pianokey,i)=>{
    const newurl ='24/key' +(i+0) +'.mp3'
    pianokey.addEventListener('click',()=> playsound(newurl))
})