for(let i=0; i<1; i++){
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo';
    
    // Создаем элемент img
    const img = document.createElement('img');
    img.src = './photos/22/17.09.22(3).JPG'; // Укажите правильный путь к изображению
    img.alt = '17.09.22';
    
    // Создаем элемент div с классом "caption"
    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption';
    captionDiv.textContent = '17.09.22';
    
    // Добавляем img и captionDiv в photoDiv
    photoDiv.appendChild(img);
    photoDiv.appendChild(captionDiv);

    document
    .getElementById('container')
    .appendChild(photoDiv);
}


