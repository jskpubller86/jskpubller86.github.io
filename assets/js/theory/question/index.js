window.onload = ()=>{
    const answers = document.getElementsByClassName('answer');
    Array.prototype.forEach.call(answers, (el)=>{
        const button = el.getElementsByTagName('button')[0];
        const p = el.getElementsByTagName('p')[0];
        
        button.onclick = ()=>{
            if(p.style.display == 'block'){
                p.style.display = 'none';
            } else {
                p.style.display = 'block';
            }
            
        }
    })
}