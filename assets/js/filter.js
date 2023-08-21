// execute the function and show all columns
filter_selection("all")
function filter_selection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // add the "show" class (display:block) to the filtered elements
    // and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        remove_class(x[i], "show");
        if (x[i].className.indexOf(c) > -1) add_class(x[i], "show");
    }
}

// show filtered elements
function add_class(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// hide elements that are not selected
function remove_class(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter_content");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
