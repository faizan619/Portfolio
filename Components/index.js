const urlCopy = ()=>{
    var url = window.location.href;
    navigator.clipboard.writeText(url);
    
    var text = "Copied"
    const clip = document.querySelector(".sharingLink");
    clip.innerHTML = text;
    button.classList.add("copied");
    setTimeout(() => {
        button.classList.remove("copied");
    },3000)
}

// gsap.from(".HeaderSection",{
//     y:10,
//     duration:1,
// })

const time = gsap.timeline();

gsap.from(".HeaderSection",{
    opacity:0,
})
gsap.to(".HeaderSection",{
    opacity:0,
})

gsap.to(".HeaderSection",{
    opacity:1,
    scrollTrigger:{
        scrub:true,
        trigger:".HeaderSection",
        start:'top -10%',
        end:'bottom 2%',
    }
})


    time.to(".userPhoto",{
        y:-25,
    })
    .from(".UserName",{
        opacity:0,
        scale:.5,
        duration:2,
    })
    .from(".UserInfo",{
        y:20,
        repeat:-1,
        yoyo:true,
    })