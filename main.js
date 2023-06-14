nameOfTheStudentArray = [];

function submit()
{
    //var name_1 = document.getElementById("nameOfTheStudent1").value;
    //var name_2 = document.getElementById("nameOfTheStudent2").value;
    //var name_3 = document.getElementById("nameOfTheStudent3").value;
    //var name_4 = document.getElementById("nameOfTheStudent4").value;

    //nameOfTheStudentArray.push(name_1);
    //nameOfTheStudentArray.push(name_2);
    //nameOfTheStudentArray.push(name_3);
    //nameOfTheStudentArray.push(name_4);

    //console.log(nameOfTheStudentArray);

    //document.getElementById("displayName").innerHTML = nameOfTheStudentArray;

    var displayStudentArray = [];

    for (var j = 1; j <=4; j++)
    {
        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
        console.log(nameOfTheStudent);
        nameOfTheStudentArray.push(nameOfTheStudent);
    }

        console.log(nameOfTheStudentArray);

        var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.lenght;
        console.log(lenghtOfNameOfStudentsArray);

        for(var k = 0; k < lenghtOfNameOfStudentsArray; k++)
        {
            displayStudentArray.push("<h4>Name" - + nameOfTheStudentArray[k] + "</h4>");
            console.log(displayStudentArray);
        }

        console.log(displayStudentArray);
        document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

        var removeCommas = displayStudentArray.join(" ");
        console.log(removeCommas);
        document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;

        document.getElementById("submitButton").style.display = "none";
        document.getElementById("sortButton").style.display = "inline-block";
        }

        function sorting()
        {
            nameOfTheStudentArray.sort();
            console.log(nameOfTheStudentArray);

            var displayStudentArraySorting = [];

            var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
            console.log(lenghtOfNameOfStudentsArray);

            for (var k = 0; k <lenghtOfNameOfStudentsArray; k++)
            {
                displayStudentArraySorting.push("<h4>Nome - " + nameOfTheStudentArray[k] +"</h4>");
                console.log(displayStudentArraySorting);
            }

            var removeCommas = displayStudentArraySorting.join(" ");
            console.log(removeCommas);

            document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
        }
