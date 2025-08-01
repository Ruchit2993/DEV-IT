$(document).ready(function(){
    // let bodyhtml = $("body").html();
    // console.log(bodyhtml);
    // let bodyhtmlh3 = $("body h3").html();
    // console.log(bodyhtmlh3);
    // let boxhtml = $("#box").html();
    // console.log(boxhtml);
    
    // let bodytext = $("body").text();
    // console.log(bodytext);
    // let bodyh3text = $("body h3").text();
    // console.log(bodyh3text);
    // let boxtext = $("#box").text();
    // console.log(boxtext);
    
    // let bodyattr = $("body").attr("class");
    // console.log(bodyattr);
    // let bodyh3attr = $("body h3").attr("class");
    // console.log(bodyh3attr);
    // let boxattr = $("#box").attr("class");
    // console.log(boxattr);

    $("#divBtn").click(function (e) { 
        $("#box h3").text("New Value");
        $("#box h3").attr("class","border border-danger");
        $("#box p").html("New <strong> Value</strong>");
        
    });

    $("#sForm").submit(function (e) { 
        e.preventDefault();
        // let sNameVal = $("#sName").val();
        // let sDepartmentVal = $("#sDpartment").val();
        // let sSelectVal = $("#sSelect").val();
        // alert("This is your name : " + sNameVal + " and your department is : "+ sDepartmentVal + " This is your City : " + sSelectVal)
    
    });
    $("#sName").val("This done by .val()")
    $("#sDpartment").val("This done by .val()")

    $("#addbtn").click(function(){
        $("#box2").addClass("bg-success")
    });
    $("#rembtn").click(function(){
        $("#box2").removeClass("bg-success")
    });
    $("#tglbtn").click(function(){
        $("#box2").toggleClass("bg-success-subtle")
    });

    $("#appbtn").click(function(){
        $("#box3").append("<h4> This is done by the .append() </h4>");
    });
    $("#prebtn").click(function(){
        $("#box3").prepend("<h4> This is done by the .prepend() </h4>");
    });
    $("#appbtn2").click(function(){
        $("ul").append("<li> Item 5</li>");
    });
    $("#prebtn2").click(function(){
        $("ul").prepend("<li> Item 1</li>");
    });
    $("#wrapbtn").click(function(){
        // console.log("hit")
        $("#box3 h3").wrap('<div class="border border-danger"></div>');
    });
    $("#unwrapbtn").click(function(){
        $("#box3 h3").unwrap();
    });

    $("#aftbtn").click(function(){
        $("#box5").after("<h5> This id Done by the .after() </h5>")
    });
    $("#befbtn").click(function(){
        $("#box5").before("<h5> This id Done by the .before() </h5>")
    });

    $("#emptbtn").click(function(){
        $("#box5-5 h3").empty();
    });
    $("#remvbtn").click(function(){
        $("#box5-5").remove();
    });



});