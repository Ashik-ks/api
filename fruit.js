{

    function loaddata() {
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

                    let carouselid = document.getElementById('carouselidd');
                    console.log ("carouselid",carouselid);

                    let datacontainer1 = document.getElementById('datacontainerdiv1');
                    console.log ("datacontainer1",datacontainer1);

                    let datacontainer2 = document.getElementById('datacontainerdiv2');
                    console.log ("datacontainer2",datacontainer2)

                    let datacontainer3 = document.getElementById('datacontainerdiv3');
                    console.log ("datacontainerdiv3",datacontainer3)


                    let rows = '';
                    let rows1 = '';
                    let rows2 = '';
                    let rows3 = '';

                    let arr1=["men's clothing","jewelery","electronics","women's clothing"]
                    
                    for(i=0 ; i < datas.length ; i++){
                      for(j=0; j< arr1.length-3;j++){
                        if(datas[i].category === arr1[0]){
                          rows = rows + `
                          <div class="carousel-item ${i === 0 ? 'active' : ''} ">
                          <div class="d-flex lh-md">
                          <div class="div1">
                          <div id = "titleid">${datas[i].title}</div>
                          <div id = "descriptionid">${datas[i].description.slice(0,150)+"..."}</div>
                          <div id = "categoryid">${datas[i].category}</div>
                          <div id = "ratingid">Rating : ${datas[i].rating.rate}</div>
                          <div id="btnid" class = "text-center"><button onclick="handleClick(${datas[i].id})">Details</button></div>
                          </div>
                          <div class="div2">
                          <div id = "imageid" ><img src ="${datas[i].image} "class = "carouselimg"></div>
                     
                          </div>
                          </div>
                          </div>
                          `
                        }
                        
                        if(datas[i].category === arr1[1]){
                          rows1 = rows1 + `
                          <div id = "datacontainer1" class ="shadow p-3 mb-5 bg-body rounded lh-lg">
                     <div id = "imageid1" class="text-center" ><img src ="${datas[i].image} "class = "carouselimg1"></div>
                     <div id = "titleid1" class = "mt-5">${datas[i].title}</div>
                     <div id = "categoryid1">${datas[i].category}</div>
                     <div id = "ratingid1">Rating : ${datas[i].rating.rate}</div>
                     <div id="btnid" class = "text-center"><button onclick="handleClick(${datas[i].id})">Details</button></div>
                     </div>
                          `
                        }

                        if(datas[i].category === arr1[2]){
                          rows2 = rows2 + `
                          <div id = "datacontainer2" class ="shadow p-3 mb-5 bg-body rounded lh-lg">
                       <div id = "imageid2" class="text-center" ><img src ="${datas[i].image} "class = "carouselimg1"></div>
                        <div id = "titleid2" class = "mt-5">${datas[i].title}</div>
                          <div id = "categoryid2">${datas[i].category}</div>
                          <div id = "ratingid2">Rating : ${datas[i].rating.rate}</div>
                         <div id="btnid" class = "text-center"><button onclick="handleClick(${datas[i].id})">Details</button></div>
                       </div>
                       `
                        }

                        if(datas[i].category === arr1[3]){
                          rows3 = rows3 + `
                          <div id = "datacontainer2" class ="shadow p-3 mb-5 bg-body rounded lh-lg">
                       <div id = "imageid2" class="text-center" ><img src ="${datas[i].image} "class = "carouselimg1"></div>
                        <div id = "titleid2" class = "mt-5">${datas[i].title}</div>
                          <div id = "categoryid2">${datas[i].category}</div>
                          <div id = "ratingid2">Rating : ${datas[i].rating.rate}</div>
                         <div id="btnid" class = "text-center"><button onclick="handleClick(${datas[i].id})">Details</button></div>
                          
                       </div>
                       `
                        }
                        carouselid.innerHTML = rows;
                        console.log("rows : ",rows);
                        datacontainer1.innerHTML = rows1;
                        datacontainer2.innerHTML = rows2;
                        datacontainer3.innerHTML = rows3;
                      }
                      

                    }
                    
                }
            }
        }
    }

      
    function  handleClick(id){
      console.log("button clicked");
      console.log("button clicked id :",id)
      window.location.href =`view.html?id=${id}`
      return;
    }
    
    
    
    function loadedproducts() {
      console.log("loading....")
    
        let location = window.location;
        console.log("location", location);
    
        let querystring = location.search;
        console.log("querystring", querystring);
    
    
        let urlParams = new URLSearchParams(querystring);
        console.log("url", urlParams);
    
        let id = urlParams.get("id");
        console.log("id ", id);
    
        let xhr = new XMLHttpRequest();
    
        xhr.open("get", `https://fakestoreapi.com/products/${id} `)
    
        xhr.send();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              console.log("status:", xhr.status);
    
              if (xhr.status === 200) {
                  console.log("success");
    
                  let userData = xhr.response;
                  console.log("userData:",userData);
    
                  let parsed_userData = JSON.parse (userData);
                  console.log("parsed_userData",parsed_userData);
    
    
                  let load = document.getElementById('loadeditems');
                  console.log("load",load);
                  let load1 = document.getElementById('loadeditems1');
                  let load2 = document.getElementById('loadeditems2');
                  let load3 = document.getElementById('loadeditems3');
                  let load4 = document.getElementById('loadeditems4');
                  let load5 = document.getElementById('loadeditems5');
                  let load6 = document.getElementById('loadeditemsimg');
                  
                  
    
    
                  // load.value =.title;
                      load6.innerHTML = `<img src = "${parsed_userData.image}" style="width : 400px; height: 400px;">`;
                      load.innerHTML = `Title - ${parsed_userData.title}`; 
                      load1.innerHTML = parsed_userData.description; 
                      load2.innerHTML =`category - ${parsed_userData.category}`; 
                      load3.innerHTML = `price - ${parsed_userData.price}`; 
                      load4.innerHTML = `rating - ${parsed_userData.rating}`; 
                     
                     
    
                  
                      console.log("Element with id 'loadeditems' not found");
                  
    
              }else{
                  alert("failed to load")
              }
              
              
           }
        }
    }

}
  
  






   
                     