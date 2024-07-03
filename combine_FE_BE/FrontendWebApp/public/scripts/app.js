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

     //DOM Manipulation
     
    console.log("Button is clicked..");
}