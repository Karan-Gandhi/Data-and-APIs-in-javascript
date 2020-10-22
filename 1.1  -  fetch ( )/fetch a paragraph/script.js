console.log("about to fetch a paragraph");

getParagraph()
.then (response => {
    console.log("yay");
})
.catch (responce => {
    console.log("error");
});

async function getParagraph()
{
    const response = await fetch('paragraph.txt');
    const text = await response.text();
    document.getElementById('paragraph').textContent = text;
}
