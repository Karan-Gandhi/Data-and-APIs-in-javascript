console.log('about to fetch data');
            
loadImage()
.then (response => {
    console.log("yay");
}).catch (error => {
    console.log("error!");
});

async function loadImage()
{
    const response = await fetch('test-img.jpg');
    const blob = await response.blob();
    document.getElementById('image').src = URL.createObjectURL(blob);
}