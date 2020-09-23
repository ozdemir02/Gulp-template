let apiUrl = "http://night-club-api.herokuapp.com/";

fetch(apiUrl)
  .then((res) => res.json())
  .then((assetId) => {
    fetch(`${apiUrl}gallery-photos`)
      .then((res) => res.json())
      .then((gallery) => {
          console.log(assetId)
        assetId.forEach((element) => {
          gallery.forEach((Gasset) => {
            if (Gasset.asset == element.id) {
            
            } else {
            }
          });
        });
      })
      .catch((error) => console.log(error));
});

