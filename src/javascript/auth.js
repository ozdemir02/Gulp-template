document.addEventListener("DOMContentLoaded", function () {

  let email = document.querySelector(".form__user");
  let pass = document.querySelector(".form__pass");
  let button = document.querySelector(".form__button");

  button.addEventListener("click", function() {
    fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          method: "POST",
          email: email.value,
          password: pass.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
            // localStorage.getItem("token")
            if (data.token !== undefined) {
                localStorage.setItem('token', data.token);
            } else {
                
            }
        })
        .catch((err) => console.log(err));
  })
});
