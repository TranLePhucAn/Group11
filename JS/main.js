
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

 
const main = $("#main")
const main_container = $(".main-container")
const navtabs = $$(".navtab")

navtabs.forEach((tab, index)=>
{
    tab.addEventListener('click', function()
    {
        $('.navtab.active').classList.remove('active')
        this.classList.add('active')

        if(index===0)
        {
            main.replaceChildren()
        }
        if(index===1)
        {
            main.replaceChildren()
            renderAbout()
        }
        if(index===2)
        {
            main.replaceChildren()
        }
        if(index===3)
        {
            main.replaceChildren()
        }
    })
})



const renderAbout = ()=>
{
    main.appendChild(infoMember())
}


const infoMember = ()=>
{
    const member_container = document.createElement('div')

    member_container.classList.add('member-container')

    member_container.appendChild(member("Nguyễn Thành Phát", "https://via.placeholder.com/150", "Lập trình viên", "Front-end dev", "gmail.com"))
    member_container.appendChild(member("Nguyễn Thành Phát", "https://via.placeholder.com/150", "Lập trình viên", "Front-end dev"))
    member_container.appendChild(member("Nguyễn Thành Phát", "https://via.placeholder.com/150", "Lập trình viên", "Front-end dev"))
    member_container.appendChild(member("Nguyễn Thành Phát", "https://via.placeholder.com/150", "Lập trình viên", "Front-end dev"))
    member_container.appendChild(member("Nguyễn Thành Phát", "https://via.placeholder.com/150", "Lập trình viên", "Front-end dev"))

    return member_container
}

const member = (name, imgLink, role, position, mail="")=>
{
    const mem = document.createElement('div')
    mem.classList.add('member-box')
    mem.innerHTML = 
    `
         <div class="img-container">
            <img src="${imgLink}" alt="Avatar" class="avatar" />
        </div>
        <div class="member-info">
            <h3 class="member-name">${name}</h3>
            <p class="member-role">${role}</p>
            <p class="member-position">${position}</p>
            <p class="member-mail">${mail}</p>
        </div>
        <button>Contact</button>
    `
    return mem
}



renderAbout()