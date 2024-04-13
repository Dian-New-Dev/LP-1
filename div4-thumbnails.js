const images = document.querySelectorAll('.office-pic');
const modalOuter = document.querySelector('.modal-outer');
const modal = document.querySelector('.modal');
const modalImagemAmpliada = document.querySelector('.modal-imagem-ampliada');
const modalThumbnail = document.querySelector('.modal-thumbnail');

for (let i = 0; i < images.length; i++ ) {
    images[i].addEventListener('click', function() {
        mostrarImagemAmpliada(images[i])
    })
}

function mostrarImagemAmpliada(imagemClicada) {
    imagemClicada.classList.add('imagem-clicada');
    abrirModal();
    anexarImagemNoModal();

}

function abrirModal() {
    modalOuter.style.display = 'flex';
    criarUI();
}

function anexarImagemNoModal() {
    for (let i = 0; i < images.length; i++) {
        const clonedImage = images[i].cloneNode(true);
        modalThumbnail.appendChild(clonedImage);
        clonedImage.setAttribute('id', [i])
        clonedImage.addEventListener('click', function (){
            clicarThumbnail(clonedImage);
        clonedImage.classList.remove('office-pic');
        })
        if (images[i].classList.contains('imagem-clicada')) {
            //destacar na barra de rolagem
            const clonedImageBig = images[i].cloneNode(true);
            modalImagemAmpliada.appendChild(clonedImageBig);
            clonedImage.classList.add('selected-thumbnail');
        } else {
            clonedImage.classList.add('unselected-thumbnail');
        }
    }

}

function criarUI() {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.className = 'botao-fechar-modal'
    modalImagemAmpliada.appendChild(closeButton);
    closeButton.addEventListener('click', function() {
        fecharModal();
    })
}

function fecharModal() {
    modalOuter.style.display = 'none';
    modalImagemAmpliada.innerHTML = '';
    modalThumbnail.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('imagem-clicada')
        images[i].classList.remove('selected-thumbnail')
        images[i].classList.remove('unselected-thumbnail')
    }
}

function clicarThumbnail(thumbnailClicada) {
    console.log(thumbnailClicada)
    const thumbnailsArray = [];
    for (let i = 0; i < 3; i++) {
        const thumbnails = document.getElementById(i);
        thumbnailsArray.push(thumbnails);
    }
    for (let i = 0; i < 3; i++) {
        if (thumbnailsArray[i] === thumbnailClicada) {
            const selectedImage = thumbnailsArray[i].cloneNode(true);
            selectedImage.classList.remove('unselected-thumbnail');
            selectedImage.classList.add('selected-thumbnail');
            modalImagemAmpliada.innerHTML = '';
            criarUI();
            modalImagemAmpliada.appendChild(selectedImage);
        } else {
            thumbnailsArray[i].classList.remove('selected-thumbnail');
            thumbnailsArray[i].classList.add('unselected-thumbnail');
        }
    }
        
        
        
        
    //     if (unselected[i] === thumbnailClicada) {
    //         unselected[i].classList.remove('unselected-thumbnail');
    //         unselected[i].classList.add('selected-thumbnail');
    //         modalImagemAmpliada.innerHTML = '';
    //         modalImagemAmpliada.appendChild(unselected[i]);
    //     } else {
    //         unselected[i].classList.remove('selected-thumbnail');
    //         unselected[i].classList.add('unselected-thumbnail');
    //     }
     }



