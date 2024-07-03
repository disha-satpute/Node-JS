//Using DOM inbuilt Function

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
     //DOM Manipulation
                var pro = document.getElementById("productList");
                for (var i=0;i<data.length;i++){
              const node=document.createElement("li");
              const textnode =document.createTextNode(data[i].name);
              node.appendChild(textnode);
              pro.appendChild(node);

            }

        })
     })

    console.log("Button is clicked..");
}