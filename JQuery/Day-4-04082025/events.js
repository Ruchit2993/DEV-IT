    $(document).ready(function () {
    
    // 1. Create a dropdown menu with 3-5 options (e.g., colors or cities).
    //  - Use the .change() event to show an alert with the selected value.
    $("#sSelect").change(function (e1) {
        alert("This " + $(this).val() + " is Selected !")
    });

    // 2. Design a button that shows an alert only once, no matter how many times it is clicked.
    //  - (Hint: Use the .one() method)
    $("#otc").one("click", function () {
        alert("This btn is only clicked Once !")
    });

    // 3. Add three mouse events (mouseenter, mouseleave, click) to a square box (<div>).
    //  - On hover, change the color.
    //  - On mouse leave, revert the color.
    //  - On click, show an alert.
    $("#box3")
    .mouseenter(function () {   
        $(this).css("background-color", "red");
    })
    .mouseleave(function () {
        $(this).css("background-color", "blue");
    })
    .click(function () {
        alert("Box was clicked!");
    });
    
    // 4. Create 3 dynamic buttons using jQuery (append them to a container).
    //  - Use event delegation to handle click events on those buttons.
    //  - (Hint: Use .on() with a static parent element)
    for (let i = 1; i <= 3; i++) {
            $("#btns").append(
                `<button class="btn btn-danger" data-id="${i}">Button ${i}</button>     `
            );
        }

        // Event delegation using .on()
        $("#btns").on("click", ".btn-danger", function () {
            alert("You clicked: " + $(this).text());
        });
    

    // 5. Create a link (<a>) that opens Google, but use event.preventDefault() to stop the redirection.
    //  - Show an alert saying “Link blocked!” instead.
    $("#deft").click(function (e) {
        e.preventDefault();
        let a = e.isDefaultPrevented();
        $("#deft").html(a);
        alert("Link Blocked!")
    });

    // $("#box6").on("click dblclick mouseover mouseout", function(event){
    //     $("h5").html("Event: " + event.type)
    // }) 
    $("#box6").on("mouseover mouseout mousedown click dblclick", function (event) {
        $("#mouse").html("Event: " + event.type + " : " + event.which);
    });
    $("#ipbox").on("keydown", function (event2) {
        $("#board").html(event2.type + " : " + event2.which);
    });
    $("#box6").on("click", function (event3) {
        $("#evtar").html("Target Element: " + event3.target.nodeName);
    });
    // $("div").each(function(i){
    //     $(this).on("click",{value : i},function(event4){
    //         alert(event4.data.value)
    //     })
    // });

});

