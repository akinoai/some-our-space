document.getElementById('box-add-image').addEventListener('click', showMenu);
document.getElementById('close-menu').addEventListener('click', closeMenu);
document.getElementById('submit-photo').addEventListener('click', closeMenu);
document.getElementById('submit-photo').addEventListener('click', createMemory);
document.getElementById('open-Explorer-button').addEventListener('click', openExplorer);
document.getElementById('fileInput').addEventListener('change', showPreviewImage);

const openExplorerbutton = document.getElementById('open-Explorer-button');
const previewImage = document.getElementById('preview-image');
const contentWrapper = document.getElementById('content-wrapper');
const dateField = document.getElementById('date-field');
const captionField = document.getElementById('caption-field');


function showMenu() {
    let element = document.getElementById('shadow');
    element.style.display = 'block';
    contentWrapper.style.display = 'none';
    openExplorerbutton.style.display = 'block'; 
}

function closeMenu() {
    let element = document.getElementById('shadow');
    element.style.display = 'none';
    captionField.value = "";
}

function openExplorer() {
    document.getElementById('fileInput').click();
}

function showPreviewImage(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function(e) {
            previewImage.src = e.target.result;
            contentWrapper.style.display = 'flex';
            previewImage.style.display = 'flex';
            openExplorerbutton.style.display = 'none';

        };

        reader.readAsDataURL(file); // Читаем файл как Data URL для отображения
    } else {
        console.log('Пожалуйста, выберите изображение.');
    }
}

function createMemory() {
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo';
    
    // Создаем элемент img
    const img = document.createElement('img');
    img.src = previewImage.src; // Укажите правильный путь к изображению
    img.alt = '17.09.22';
    
    // Создаем элемент div с классом "caption"
    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption';

    const dateParts = dateField.value.split("-");
    const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
    captionDiv.textContent = formattedDate;
    
    // Добавляем img и captionDiv в photoDiv
    photoDiv.appendChild(img);
    photoDiv.appendChild(captionDiv);

    document
    .getElementById('container')
    .appendChild(photoDiv);
}