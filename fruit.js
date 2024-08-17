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

                    let carouselid = document.getElementById('carouselid');
                    console.log ("carouselid",carouselid);

                    let datacontainer1 = document.getElementById('datacontainerdiv1');
                    console.log ("datacontainer1",datacontainer1)

                    let datacontainer2 = document.getElementById('datacontainerdiv2');
                    console.log ("datacontainer2",datacontainer2)

                    let datacontainerdiv3 = document.getElementById('datacontainerdiv3datacontainerdiv3');
                    console.log ("datacontainerdiv3",datacontainerdiv3)


                    let rows = '';
                    let rows1 = '';
                    let rows2 = '';
                    let rows3 = '';

                    for (i=0 ; i < datas.length-16 ; i++){
                        rows = rows + `
                       
                        
                       
                        <div class="carousel-item ${i === 0 ? 'active' : ''} ">
                        <div class="d-flex lh-md">
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
                        
                        
                     `
                     
                        
                         
                    }

                    
                    for (i = 4; i < datas.length - 12; i++){
                      rows1 = rows1 + `
                      
                     <div id = "datacontainer1" class ="shadow p-3 mb-5 bg-body rounded lh-lg">
                     <div id = "imageid1" class="text-center" ><img src ="${datas[i].image} "class = "carouselimg1"></div>
                     <div id = "titleid1" class = "mt-5">${datas[i].title}</div>
                     <div id = "categoryid1">${datas[i].category}</div>
                     <div id = "ratingid1">Rating : ${datas[i].rating.rate}</div>
                     </div>
                      
                      
                      `
                    }

                    for (i = 8; i < datas.length - 8; i++){
                        rows2 = rows2 + `
                        
                       <div id = "datacontainer2" class ="shadow p-3 mb-5 bg-body rounded lh-lg">
                       <div id = "imageid2" class="text-center" ><img src ="${datas[i].image} "class = "carouselimg1"></div>
                        <div id = "titleid2" class = "mt-5">${datas[i].title}</div>
                          <div id = "categoryid2">${datas[i].category}</div>
                          <div id = "ratingid2">Rating : ${datas[i].rating.rate}</div>
                       </div>
                        
                        
                        `
                      }

                      for (i = 12; i < datas.length - 4; i++){
                        rows3 = rows3 + `
                        
                       <div id = "datacontainer2" class ="shadow p-3 mb-5 bg-body rounded lh-lg">
                       <div id = "imageid2" class="text-center" ><img src ="${datas[i].image} "class = "carouselimg1"></div>
                        <div id = "titleid2" class = "mt-5">${datas[i].title}</div>
                          <div id = "categoryid2">${datas[i].category}</div>
                          <div id = "ratingid2">Rating : ${datas[i].rating.rate}</div>
                       </div>
                        
                        
                        `
                      }



                    console.log(rows);
                     
                    carouselid.innerHTML = rows;
                    datacontainer1.innerHTML = rows1;
                    datacontainer2.innerHTML = rows2;
                    datacontainer3.innerHTML = rows3;


                   

                }

            }
        }

    }




}