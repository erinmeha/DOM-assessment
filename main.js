const parentElement = document.querySelector('body')

const buttonElement = document.createElement('button')
parentElement.append(buttonElement)
buttonElement.append("Remove")

buttonElement.addEventListener("click", function () {
    mainElement.remove()
    // console.log('button clicked')
})

// Main
const mainElement = document.createElement('main')
parentElement.append(mainElement)

const image = document.createElement('img')
mainElement.append(image)
image.src = "C:/Users/ermeh/Downloads/dachshund.jpg"
image.className = "image"

const anchor = document.createElement('a')
mainElement.append(anchor)
anchor.href = "https://dogtime.com/dog-breeds/dachshund"
anchor.className = "a"
anchor.append("https://dogtime.com/dog-breeds/dachshund")