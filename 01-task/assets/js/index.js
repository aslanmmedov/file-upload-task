let inpImage = document.querySelector("#input-image");
let removeAll = document.querySelector(".remove");
let tBody = document.querySelector("tbody");


inpImage.addEventListener("change", function (event) {
    let images = event.target.files;
    if (images.length > 0) {
        for (let image of images) {
            // console.log(image)
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = function () {

                let trElem = document.createElement("tr");
                // console.log(trElem)  
                trElem.innerHTML = `
                <td class = "aa"><img src="${reader.result}" alt="" class = "image-name"></td>
                    <td>${image.name}</td>
                    <td>${image.size}</td>
                    <td><button class="delete btn btn-danger" data-id = "${image.name}">Delete</button></td>
            `
                tBody.appendChild(trElem);
                let btn = document.querySelectorAll(".delete");
                btn.forEach((item) => {
                    item.addEventListener("click", function () {
                        item.closest("tr").remove();
                    })
                })


            }

        }


    }

})