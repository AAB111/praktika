btnHamb = document.querySelector('.hamburger')
hideAside = false
btnHamb.addEventListener('click',(event) => {
    if (hideAside){
        btnHamb.style.margin = '0 0 0 15px'
        aside = document.querySelector('aside')
        nav_title = aside.querySelector('.nav-title')
        nav_title.querySelector('.logo').style.display = 'flex'
        nav_title.querySelectorAll('a').forEach(a => {
            a.style.display = 'block'
        });
        nav_aside = aside.querySelector('.nav-aside')
        nav_aside.querySelectorAll('a p').forEach(p => {
            p.style.display = 'block'
        })
        nav_aside.querySelectorAll('a div').forEach(div => {
            div.style.margin = '0 15px 0 0'
        })
        nav_aside.querySelectorAll('li').forEach(li => {
            li.style.justifyContent = 'left'
        })
        hideAside = false
    }
    else{
        btnHamb.style.margin = '0'
        aside = document.querySelector('aside')
        nav_title = aside.querySelector('.nav-title')
        nav_title.querySelector('.logo').style.display = 'none'
        nav_title.querySelectorAll('a').forEach(a => {
            a.style.display = 'none'
        });
        nav_aside = aside.querySelector('.nav-aside')
        nav_aside.querySelectorAll('a p').forEach(p => {
            p.style.display = 'none'
        })
        nav_aside.querySelectorAll('a div').forEach(div => {
            div.style.margin = '0'
        })
        nav_aside.querySelectorAll('li').forEach(li => {
            li.style.justifyContent = 'center'
        })
        hideAside = true
    }

})