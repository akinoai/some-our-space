document.getElementById('box-add-image').addEventListener('click', showMenu);
document.getElementById('close-menu').addEventListener('click', closeMenu);
document.getElementById('open-Explorer-button').addEventListener('click', openExplorer);
document.getElementById('fileInput').addEventListener('change', showPreviewImage);
const openExplorerbutton = document.getElementById('open-Explorer-button');
const previewImage = document.getElementById('preview-image');

function showMenu() {
    let element = document.getElementById('shadow');
    element.style.display = 'block';
    previewImage.style.display = 'none';
    openExplorerbutton.style.display = 'block';
}

function closeMenu() {
    let element = document.getElementById('shadow');
    element.style.display = 'none';
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
            previewImage.style.display = 'block';
            openExplorerbutton.style.display = 'none';
        };

        reader.readAsDataURL(file); // Читаем файл как Data URL для отображения
    } else {
        console.log('Пожалуйста, выберите изображение.');
    }
}