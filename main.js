var name_of_the_student = [];
function submit(){
    var display_student_array = [];
    for (var k = 1; k<=4; k++){
        var name = document.getElementById("name_of_the_student_"+k).value;
        console.log(name);
        name_of_the_student.push(name);
    }
    console.log(name_of_the_student);
    var length= name_of_the_student.length;
    console.log(length);
    for (var d= 0; d< length; d++){
        display_student_array.push("<h4> NAME- "+ name_of_the_student [d]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var removecommas = display_student_array.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("sort_button").style.display="inline-block";
    document.getElementById("submit_button").style.display="none";
}
function sorting(){
    name_of_the_student.sort();
    console.log(name_of_the_student);
    var display_sorting= [];
    var length= name_of_the_student.length;
    console.log(length);
    for (var d= 0; d< length; d++){
        display_sorting.push("<h4> NAME- "+ name_of_the_student [d]+"</h4>");
        console.log(display_sorting);
    }
    console.log(display_sorting);
    var removecommas = display_sorting.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("display_name_with_commas").style.display="none";
}