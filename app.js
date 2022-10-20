const cols = document.querySelectorAll('.col')

function generateRandomColors(){



const hexCodes = '0123456789ABCDDEF'

    for(let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]   
    }
}
return '#' + color

function setRandomColors() {
    cols.forEach(col => {
        console.log(col)

        col.style.background = generateRandomColors
    })
}
setRandomColors()