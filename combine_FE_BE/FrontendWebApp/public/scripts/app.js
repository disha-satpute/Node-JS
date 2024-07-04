// Using Document.getElementById

//client side JS code

var fetchData=()=>{
    // alert("button Clicked..");
    let url="http://localhost:6060/api/products";

    //use ajax mechanism to fetch data from rest api

    //It is inbuilt function of Jquery lib
     $.ajax({
        dataType:"json",
        url:url,
        success:(data=>{
                console.log(data);
                let strData=JSON.stringify(data);
               // alert(strData);
                let para1 = document.getElementById("para");
                para1.textContent = strData;
        })
     })


    console.log("Button is clicked..");
}

var fetchProductDetails=()=>{
    let apierr;
    let result;
    fetch("//localhost:6060/api/products/id",{
        header:{
            "content-type":"application/json"
        }
  })
  .then(async response =>{
    if(response.ok){
        apierr=false;
        result=await response.json();
        console.log(result);
    }else{
        apierr=true;
    }
  })
  .catch(()=>(apierr=true));
}

var onLogin=()=>{

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let credential ={};

    credential.email=email;
    credential.pass=pass;

    let loginurl ="http://localhost:6060/api/login";
    $.ajax({
        url:loginurl,
        type:"POST",
        data :credential,
        success:(data,status)=>{
            console.log("successfull..");
            console.log(status);
                console.log(data);

                localStorage.setItem("receivedToken",data);
        }
     })
}
/*
var fetchOrders=()=>{

    let apierr;
    let result;

    let token=  localStorage.getItem("receivedToken");
    fetch("http://localhost:6060/api/orders",{
        headers:{
            "content-type":"application/json",
            Authorization:token
        }
  })
  .then(async response =>{
    if(response.ok){
        apierr=false;
        result=await response.json();
        console.log(result);

      var order = document.getElementById("orderlist");
        for (var i=0;i<result.length;i++)
            {
*/

var fetchOrders=()=>{
    let result;
    let apiError;
    let token = localStorage.getItem("receivedToken");
    console.log(token);

    fetch("http://localhost:6060/api/orders", {
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    })
       .then(async (response) => {
         if (response.ok) {
           apiError = false;
           result = await response.json();
           console.log(result);

            //DOM tree Manipulation Code at Client Side
        let productList = document.getElementById("orderlist");
        // create dynammic table with all data of url
        const row = document.createElement("tr");
        const col1 = document.createElement("th");
        const col2 = document.createElement("th");
        const col3 = document.createElement("th");
        const col4 = document.createElement("th");

        const id = document.createTextNode("Order ID");
        const date = document.createTextNode("Order Name");
        const price = document.createTextNode("order Price");
        const status = document.createTextNode("order status");

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        col1.appendChild(id);
        col2.appendChild(date);
        col3.appendChild(price);
        col4.appendChild(status);

        productList.appendChild(row);

        // access th data and display in form of table by creating elemwnt
        for (var i = 0; i < result.length; i++) {
          const row = document.createElement("tr");
          const col1 = document.createElement("td");
          const col2 = document.createElement("td");
          const col3 = document.createElement("td");
          const col4 = document.createElement("td");
  
          const id = document.createTextNode(result[i].id);
          const date = document.createTextNode(result[i].date);
          const price = document.createTextNode(result[i].total);
          const status = document.createTextNode(result[i].status);
  
          row.appendChild(col1);
          row.appendChild(col2);
          row.appendChild(col3);
          row.appendChild(col4);

          col1.appendChild(id);
          col2.appendChild(date);
          col3.appendChild(price);
          col4.appendChild(status);

          productList.appendChild(row);

        }
         } else {
           apiError = true;
         }
       })
       .catch(() => {
         apiError = true;
       });
    }