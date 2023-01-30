function cambiar(imagen) {
    let img = document.querySelector('img');
    let titulo = document.querySelector('#titulo');
    img.style.width="50%";

    switch (imagen) {
        case 1:
            img.src = "./img/img1.jpg";
            titulo.style.color="red";
            break;
        case 2:
            img.src = "./img/img2.jpg";
            titulo.style.color="green";
            break;

        case 3:
            img.src = "./img/img3.jpeg";
            titulo.style.color="blue";
            break;
        default:
            alert(imagen);
    }

}