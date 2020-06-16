const body = document.querySelector("body")

let button = document.createElement("button")
button.append("Remove")

let main = document.createElement("main")

let img = document.createElement("img")
img.className = "image"
img.src = "./img/img1.jpg"
let a = document.createElement("a")
a.append("Link to SOMETHING")
a.className = "link"
a.href = "https://open.spotify.com/playlist/1FTjOX0txW10W9GDxT1pSZ?si=2XCKNIo6SkGGqS8FEM0m-Q"

main.appendChild(img)
main.appendChild(a)

document.body.prepend(main)
document.body.prepend(button)

button.addEventListener("click", () => {
    main.remove()
})