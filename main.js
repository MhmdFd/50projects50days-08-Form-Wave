const label = document.querySelectorAll('label');

label.forEach((label) => {
    label.innerHTML = label.innerText.split('')
    .map((a,inx) => `<span style='transition-duration :${200 + (inx * 70)}ms;'>${a}</span>`)
    .join('')
    console.log(label.innerHTML
        
        )
})