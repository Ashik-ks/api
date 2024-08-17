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
                    console.log(typeof (datas))

                    let datacontainer = document.getElementById('datacontainer');
                    console.log ("datacontainer",datacontainer);
                    let datacontainer1 = document.getElementById('datacontainerdiv1');
                    console.log ("datacontainer1",datacontainer1)

                    let rows = ''
                    let rows1 = ''

                    for (i=0 ; i < datas.length - 19 ; i++){
                        rows = rows + `
                       
                        <div class = "container mt-5 lh-lg mb-5 " id="maindiv">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active ">
                        <div class="d-flex ">
                        <div class="div1">
                        <div id = "titleid">${datas[i].title}</div>
                        <div id = "descriptionid">${datas[i].description.slice(0,150)+"..."}</div>
                        <div id = "categoryid">${datas[i].category}</div>
                        <div id = "ratingid">Rating : ${datas[i].rating.rate}</div>
                        </div>
                        <div class="div2">
                        <div id = "imageid" ><img src ="${datas[i].image} "class = "carouselimg"></div>
                        
                        </div>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <div class="d-flex">
                        <div class="div1">
                        <div id = "titleid">${datas[i+1].title}</div>
                        <div id = "descriptionid">${datas[i+1].description.slice(0,150)+"..."}</div>
                        <div id = "categoryid">${datas[i+1].category}</div>
                        <div id = "ratingid">Rating : ${datas[i+1].rating.rate}</div>
                        </div>
                        <div class="div2">
                        <div id = "imageid" ><img src ="${datas[i+1].image} "class = "carouselimg"></div>
                        
                        </div>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <div class="d-flex">
                        <div class="div1">
                        <div id = "titleid">${datas[i+2].title}</div>
                        <div id = "descriptionid">${datas[i+2].description.slice(0,150)+"..."}</div>
                        <div id = "categoryid">${datas[i+2].category}</div>
                        <div id = "ratingid">Rating : ${datas[i+2].rating.rate}</div>
                        </div>
                        <div class="div2">
                        <div id = "imageid" ><img src ="${datas[i+2].image} "class = "carouselimg"></div>
                        
                        </div>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <div class="d-flex">
                        <div class="div1">
                        <div id = "titleid">${datas[i+3].title}</div>
                        <div id = "descriptionid">${datas[i+3].description.slice(0,150)+"..."}</div>
                        <div id = "categoryid">${datas[i+3].category}</div>
                        <div id = "ratingid">Rating : ${datas[i+3].rating.rate}</div>
                        </div>
                        <div class="div2">
                        <div id = "imageid" ><img src ="${datas[i+3].image} "class = "carouselimg"></div>
                        
                        </div>
                        </div>
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                        </div>
                     
                       <div class="container mt-5"> <div class="jwellery mt-5 mb-5">Jewellery section</div></div>
                          `
                    }

                    
                    for (i = 4; i < datas.length - 12; i++){
                      rows1 = rows1 + `
                     <div id = "datacontainer1" class ="shadow p-3 mb-5 bg-body rounded lh-lg">
                     <div id = "imageid2" class="text-center" ><img src ="${datas[i].image} "class = "carouselimg1"></div>
                      <div id = "titleid2" class = "mt-5">${datas[i].title}</div>
                        <div id = "categoryid2">${datas[i].category}</div>
                        <div id = "ratingid2">Rating : ${datas[i].rating.rate}</div>
                     </div>
                      
                      
                      `
                    }



                    console.log(rows);
                     
                    datacontainer.innerHTML = rows;
                    datacontainer1.innerHTML = rows1;


                   

                }

            }
        }

    }




}