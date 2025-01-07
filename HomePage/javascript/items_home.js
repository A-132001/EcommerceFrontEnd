fetch('./javascript/items.json')
         .then(response => response.json())
         .then(data => {
            console.log(data)
         })
         .catch(e => console.log(e))