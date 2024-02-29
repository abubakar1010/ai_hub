const parent = document.getElementById('parent')

const getData = async () => {

    const response = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await response.json()
    displayData(data.data)
}

getData()

const displayData = (data) => {
    const aiArray = data.tools

    aiArray.forEach(element => {
        console.log(element);
    });
}
