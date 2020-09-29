document.addEventListener("DOMContentLoaded", function () {
  let email = document.querySelector(".form__user");
  let pass = document.querySelector(".form__pass");
  let button = document.querySelector(".form__button");
  console.log(pass.textContent)

//

  button.addEventListener("click", function () {
    if (email.textContent !== "") {
      document.querySelector(".form__user--error").style.opacity = "0";
      console.log(hello)
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
            localStorage.setItem("token", data.token);
          } else {
          }
        })
        .catch((err) => console.log(err));
    } else {
        document.querySelector(".form__user--error").innerHTML = "Username cannot be blank"
        document.querySelector(".form__user--error").style.opacity = "1";
        console.log(email.textContent)
    };
    if (pass.textContent !== "") {
        document.querySelector(".form__pass--error").style.opacity = "0";
    } else {
        document.querySelector(".form__pass--error").innerHTML = "Password cannot be blank"
        document.querySelector(".form__pass--error").style.opacity = "1";
    };
  });
});
