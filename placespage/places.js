// Display your trips on the Dom, styled in cards. 
// City name should appear above the image, in a larger font size, with all other details below the image
// Filter the cards based on specific year visited, or all cities
// Style each card with a different background color, colored by continent 

// add places class

const placesdbRef = document.querySelector("#places")

//generate DOM HTML 

const placesgen = () => {
    
    // Create a block element that will hold three student components
    let row = document.createElement("div")
    row.className = "placerow "
    
    /*
    Iterate over the array of students in the database that was
    retrieved from localStorage in database.js
    */
   placesDB.place.forEach(
       (location) => {
           //add a row of div for the places
           placesdbRef.appendChild(row)
           row = document.createElement("div")
           row.className = "placerow "
           
           //put each place in a span
           
           const placeSection = document.createElement("span")
           placeSection.classList = "place "
           
           // Apply different class based on country
           //(North America = green, South America = blue, Asia = purple, 
           //Antarctica = yellow, Europe = orange, Africa = red, Australia = brown)
           
            placeSection.classList += `${location.country} `
            

            // h2 child component of section contains name of location
            const placeName = document.createElement("h2")
            placeName.classList = "place__name "
            placeName.textContent = location.name
            placeSection.appendChild(placeName)

            // img child, contains image of location
            const placeImage = document.createElement("img")
            placeImage.classList= "place__image "
            placeImage.src = location.img 
            placeSection.appendChild(placeImage)

            // p child component of section, contains year visited
            const placeYear = document.createElement("p")
            placeYear.classList = "place__year "
            placeYear.textContent = location.year
            placeSection.appendChild(placeYear)

            // p child component of section, contains 5 attractions
            const placeAttractions = document.createElement("p")
            placeAttractions.classList = "place__attractions "
            placeAttractions.textContent = location.attractions
            placeSection.appendChild(placeAttractions)

            // Append HTML representation of student to the DOM
            row.appendChild(placeSection)
        }
        
    )
}

placesgen()
