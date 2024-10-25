let all = document.querySelectorAll('.flex-col');
all.forEach(main => {
    let icon = main.querySelector('.icon');
    let answer = main.querySelector('.answer');
    main.addEventListener('click', () =>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})
// faq question js code end