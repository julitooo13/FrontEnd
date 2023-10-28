$("#btnSuma").on('click', () => {
    var data = {
        n1: $("#Suma1").val(),
        n2: $("#Suma2").val()
    }

    $.ajax({
        url: `https://localhost:7218/Suma?n1=${data.n1}&n2=${data.n2}`,
        type: "POST",
        data: data,
        ContentType: "application/json",
        success: (response) => {

            if (!isNaN(data.n1) && !isNaN(data.n2)) {
                // Realiza la suma
                var resultado = response;

                // Muestra el resultado en el <span>
                if ($("#Rsuma").hasClass("text-danger")) {
                    $("#Rsuma").removeClass("text-danger")
                }
                $("#Rsuma").text(resultado);

            } else {
                // En caso de que los valores no sean números válidos
                $("#Rsuma").addClass("text-danger");
                $("#Rsuma").text("Por favor, ingrese valores numéricos válidos.");
            }
        }
    });

});

$("#btnPro").on('click', ()=>{
    var data = {
        n1: $("#pro1").val(),
        n2: $("#pro2").val()
    }

    $.ajax({
        url: `https://localhost:7218/Promedio?n1=${data.n1}&n2=${data.n2}`,
        type: "POST",
        data: data,
        ContentType: "application/json",
        success: (response) => {

            if (!isNaN(data.n1) && !isNaN(data.n2)) {
                // Realiza la suma
                var resultado = response;

                // Muestra el resultado en el <span>
                if ($("#Rpro").hasClass("text-danger")) {
                    $("#Rpro").removeClass("text-danger")
                }
                $("#Rpro").text(resultado);

            } else {
                // En caso de que los valores no sean números válidos
                $("#Rpro").addClass("text-danger");
                $("#Rpro").text("Por favor, ingrese valores numéricos válidos.");
            }
        }
    });
})


$("#btnTri").on('click', ()=>{
    var data = {
        n1: $("#Tri1").val(),
        n2: $("#Tri2").val()
    }

    $.ajax({
        url: `https://localhost:7218/EncontrarHipotenusa?cateto1=${data.n1}&cateto2=${data.n2}`,
        type: "POST",
        data: data,
        ContentType: "application/json",
        success: (response) => {

            if (!isNaN(data.n1) && !isNaN(data.n2)) {
                // Realiza la suma
                var resultado = response;

                // Muestra el resultado en el <span>
                if ($("#RTri").hasClass("text-danger")) {
                    $("#RTri").removeClass("text-danger")
                }
                $("#RTri").text(resultado);

            } else {
                // En caso de que los valores no sean números válidos
                $("#RTri").addClass("text-danger");
                $("#RTri").text("Por favor, ingrese valores numéricos válidos.");
            }
        }
    });
})

$("#btnCat").on('click', ()=>{
    var data = {
        n1: $("#Cat1").val(),
        n2: $("#Cat2").val()
    }

    $.ajax({
        url: `https://localhost:7218/EncontrarCatetoFaltante?catetoConocido=${data.n1}&hipotenusa=${data.n2}`,
        type: "POST",
        data: data,
        ContentType: "application/json",
        success: (response) => {

            if (!isNaN(data.n1) && !isNaN(data.n2)) {
                // Realiza la suma
                var resultado = response;

                // Muestra el resultado en el <span>
                if ($("#RCat").hasClass("text-danger")) {
                    $("#RCat").removeClass("text-danger")
                }
                $("#RCat").text(resultado);

            } else {
                // En caso de que los valores no sean números válidos
                $("#RCat").addClass("text-danger");
                $("#RCat").text("Por favor, ingrese valores numéricos válidos.");
            }
        }
    });
})

$("#btnAre").on('click', ()=>{
    var data = {
        n1: $("#Are1").val(),
        n2: $("#Are2").val()
    }

    $.ajax({
        url: `https://localhost:7218/CalcularAreaTriangulo?baseTriangulo=${data.n1}&alturaTriangulo=${data.n2}`,
        type: "POST",
        data: data,
        ContentType: "application/json",
        success: (response) => {

            if (!isNaN(data.n1) && !isNaN(data.n2)) {
                // Realiza la suma
                var resultado = response;

                // Muestra el resultado en el <span>
                if ($("#RAre").hasClass("text-danger")) {
                    $("#RAre").removeClass("text-danger")
                }
                $("#RAre").text(resultado);

            } else {
                // En caso de que los valores no sean números válidos
                $("#RAre").addClass("text-danger");
                $("#RAre").text("Por favor, ingrese valores numéricos válidos.");
            }
        }
    });
})