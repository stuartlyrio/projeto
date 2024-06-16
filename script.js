function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //if(html.classList.contains('light')) {
     //   html.classList.remove('light')
    //} else {
      //  html.classList.add('light')
    //}
   

    //pegar a tag img
    const img =document.querySelector("#profile img")
    // substituir img
    if(html.classList.contains("light")){
    //se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/assets/Avatar-light.png")}
    else {
    //se tiver sem light mode, manter imagem normal
    
        img.setAttribute("src", "./assets/assets/Avatarfilipe.png")
    }
    //substituir a imagm
    }