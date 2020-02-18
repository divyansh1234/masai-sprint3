
$(document).ready(function () {
    if (localStorage.flipkart != undefined) {
        console.log("flipkart key is present.!")
    }
    else {
        let obj = {
            array: []
        }
        localStorage.setItem("flipkart", JSON.stringify(obj))
        console.log("flipkart key is created .!")
    }
    $("#form").hide();

    $("#add").click(function () {
        $("#form").show();
    });


    $('#submit').click(function (e) //on clicking button this is called
    {
        e.preventDefault();



        var Image = $('#Image').val().trim();//taking values
        var Product = $('#Product').val().trim();
        var Price = $('#Price').val().trim();
        var Category = $('#Category').val();
        if (Image == "" || Product == "" || Price == "")//checkikng if input feilds are empty or not
        {
            alert("please fill all the feilds")
        }
        else {
            let user = new User(Image, Product, Price, Category);//calling object constructor everytime button is clicked
            // Data.push(user);//pushing into global array Data
            // updateData(Data)
            let getData = JSON.parse(localStorage.getItem("flipkart"))
            getData.array.push(user)
            localStorage.setItem("flipkart", JSON.stringify(getData))
            console.log(user)
            alert("New Product Data Created")
            $('input').val('');
            let getData2 = JSON.parse(localStorage.getItem("flipkart"))
            let Data = getData2.array
            createCard(Data); //calling createTable function
            $("#form").hide()
            console.log(Data)
        }
    })

    function User(img, pro, price, cat) //object constructor
    {
        this.Image = img;
        this.Product = pro;
        this.Price = price;
        this.Category = cat;

    }
    var getData2 = JSON.parse(localStorage.getItem("flipkart"))
    var Data = getData2.array

    function createCard(array) {
        console.log(array)
        $("#cardsDiv").html("")
        array.forEach(obj => {
            let card = `<div class="card col-lg-1 col-md-4 col-sm-8 m-1 ml-5 text-center border">
                    <img src="${obj.Image}" height="170px" class="card-img-top">
                    <div class="card-body text-dark">
                        <h5 class="card-title font-weight-bold"> ${obj.Product}</h5>
                        <p class="card-subtitle mb-2 text-success">${obj.Price}</p>
                        <p  class="card-text text-muted "> ${obj.Category}</p>
                    </div>
                </div>`


            $("#cardsDiv").append(card)


        });
    }
    $('#showData').click(function () {
        let arr=Data
        createCard(arr)
        $("#showDiv").show();

    })

    $('#sort').click(function () {
        let arr = Data.sort(function (a, b) {
            return a.Price - b.Price;
        });
        createCard(arr)
    })
    $('#reverse').click(function () {
        let arr = Data.reverse(function (a, b) {
            return a.Price - b.Price;
        });
        createCard(arr)
    })
    $("#searchBtn").click(function () {
        let Product = $('#searchCat').val()
        let arr = Data.filter(function (val) {
            return val.Category == Product
        })
        createCard(arr)
    })
    $('#Electronic').click(function () {
        let arr = Data.filter(function (val) {
            return val.Category == "electronic"
        })
        createCard(arr)
    })
    $('#Tv').click(function () {
        let arr = Data.filter(function (val) {
            return val.Category == "tv"
        })
        createCard(arr)
    })
    $('#Men').click(function () {
        let arr = Data.filter(function (val) {
            return val.Category == "men"
        })
        createCard(arr)
    })
    $('#Women').click(function () {
        let arr = Data.filter(function (val) {
            return val.Category == "women"
        })
        createCard(arr)
    })
    $('#Baby').click(function () {
        let arr = Data.filter(function (val) {
            return val.Category == "baby"
        })
        createCard(arr)
    })
    $('#Home').click(function () {
        let arr = Data.filter(function (val) {
            return val.Category == "home"
        })
        createCard(arr)
    })
    $('#Sports').click(function () {
        let arr = Data.filter(function (val) {
            return val.Category == "sports"
        })
        createCard(arr)
    })

});

