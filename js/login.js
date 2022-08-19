function login() {
    const form = document.getElementById('form');
    form.addEventListener('submit', (evento) => {
        evento.preventDefault(); 

        const data = new FormData(form);

        var ecorreo = data.get('correo');
        var econtra = data.get('contraseña');

        if (ecorreo == '') {
            document.getElementById("icorreo").innerHTML = "El correo electrónico ingresado es incorrecto!";
            } else if (econtra == '')  {
                document.getElementById("icontra").innerHTML = "La contraseña ingresada es incorrecta!";
            } else {
                window.location.href = "home.html";
            }
        }
    
    )};