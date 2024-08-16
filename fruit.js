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
                    console.log ("datacontainer",datacontainer)

                    let rows = ''

                    for (i=0 ; i < datas.length ; i++){
                        rows = rows + `
                        <div id="maindiv">
                        <div id = "titleid">${datas[i].title}</div>
                        <div>${datas[i].description}</div>
                        <div>${datas[i].category}</div>
                        <div>${datas[i].price}</div>
                        <div>${datas[i].rating.rate}</div>
                        </div>
                        
                        `
                    }
                    console.log(rows);
                     
                    datacontainer.innerHTML = rows;


                   

                }

            }
        }

    }




}