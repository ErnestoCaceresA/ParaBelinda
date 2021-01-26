// ANIMACIONES SECCION2
window.addEventListener('scroll', function(){
    let animacionImagen1 = document.getElementById('imagenSeccion2');
    let animacionContent = document.getElementById('animacionContent')

    let PosicionObj1 = animacionImagen1.getBoundingClientRect().top;
    console.log(PosicionObj1)
    let tamanoDePantalla = window.innerHeight/1.1; //tomar el tamano de la pantalla para hacerlo responsive y en todos haga la animacion donde es

    if(PosicionObj1 < tamanoDePantalla){
        animacionImagen1.style.animation = 'animacionImagenSeccion2 4s ease-out ';
        animacionContent.style.animation = 'animacionContent 3s ease';
    }
})
