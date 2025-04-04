document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');

    for (const file of files) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            gallery.appendChild(img);            
        }
    reader.readAsDataURL(file);
    } 
});

const dropArea = document.getElementById('dropArea');

dropArea.addEventListener('dragover', function(event){
    event.preventDefault();
});

dropArea.addEventListener('drop', function(event){
    event.preventDefault();

    const files = event.dataTransfer.files;
    const gallery = document.getElementById('gallery');

    for (const file of files) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            gallery.appendChild(img);            
        }
        reader.readAsDataURL(file);
     }
});

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log("Ubicacion encontrada:");
        console.log("Latitud: " + position.coords.latitude);
        console.log("Longitud: " + position.coords.longitude);
        });
        
}else{
    console.log("Ubicacion no encontrada");
}
