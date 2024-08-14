{
    {
        window.onload = function loaddata() {
            let xhr = new XMLHttpRequest();
            console.log("xhr : ", xhr);
    
            xhr.open('get', 'https://fakestoreapi.com/products');
    
    
            xhr.send()
    
    
            xhr.onreadystatechange = function () {
                console.log("readystate : ", xhr.readyState);
    
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    if (xhr.status === 200) {
    
                        let response = xhr.response;
                        console.log("response : ", response)
                        console.log("type of response : ", typeof (response))
    
    
                        let datas = JSON.parse(response)
                        console.log("datas : ", datas);
                        console.log(typeof(datas))
    
                        let title = document.getElementsByClassName('title');
                        let description = document.getElementsByClassName('description');
                        let rating = document.getElementsByClassName('rating');
                        let category = document.getElementsByClassName('category');
                        let image = document.getElementsByClassName('image');
                        let readmore = document.getElementById('readmore');
                        let price = document.getElementsByClassName('price');
               
                       
               
                    
                    for (i = 0; i< title.length && i < datas.length; i++){
                        title[i].innerHTML = (datas[i].title)
                    }
                    for (i = 0; i< description.length && i < datas.length; i++){
                        description[i].innerHTML = (datas[i].description)
                    }
                    for (i = 0; i< rating.length && i < datas.length; i++){
                        rating[i].innerHTML = (datas[i].rating.count)
                    }
                    for (i = 0; i< image.length && i < datas.length; i++){
                        image[i].src = (datas[i].image)
                        console.log("imge",image)
                    }
                    for (i = 0; i< category.length && i < datas.length; i++){
                        category[i].innerHTML = (datas[i].category)
                    }
                    
                     //seconddiv
                     for (i = 0; i< readmore.length && i < datas.length; i++){
                        readmore[i].innerHTML = (datas[i].readmore)
                    }
                     console.log("readmore",readmore)

                     for (i = 0; i< price.length && i < datas.length; i++){
                        price[i].innerHTML = (datas[i].price)
                        
                    }
                     
                    console.log("nnn",price)

                    }
    
                }
            }
        }
    }
}