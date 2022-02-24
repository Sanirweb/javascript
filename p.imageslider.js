let image_array = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg']

let array_length = image_array.length

let i = 0

let set = setInterval(slider_func, 10000)

//slider_func -> function call
//5000 - > 5seconds

function slider_func() {
    i++
    i = i % array_length

    //i=0%5=0
    //i=1%5=1
    //i=2%5=2
    //i=3%5=3
    //i=4%5=4


    document.querySelector('img').src = `images/${image_array[i]}`
}

function next() {
    i++
    i = i % array_length

    document.querySelector('img').src = `images/${image_array[i]}`

}
let j = 4

function prev() {


    j--
    if (j > 0) {


        document.querySelector('img').src = `images/${image_array[j]}`
    }

    else{
        j = array_length-1
    }

}



