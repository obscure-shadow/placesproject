// Create an application that displays 10 cities you have visited from a database (stored in local storage)
// Details for each city
// a. City name
// b. Year you visited
// c. Image of city
// d. List of top 5 attractions

// places database creation
const placesDB = {}

//places table in db
placesDB.place = []

//add places to table in db
placesDB.place.push(
    {
        name: "Asheville NC", 
        year: "2017",
        img:"https://cdn.theatlantic.com/assets/media/img/mt/2015/04/AshevilleScene/lead_960_540.jpg?1522840787",
        attractions:["Builtmore"," Wicked Weed Brewery"," Blue Ridge Parkway"," Deerfields"," Laughing Seed"],
        country:"USA"
    },
    {
        name: "Frankenmouth Mi",
        year: "2017",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Covered_bridge_entrance%2C_Frankenmuth%2C_Michigan%2C_2015-01-11.jpg/1024px-Covered_bridge_entrance%2C_Frankenmuth%2C_Michigan%2C_2015-01-11.jpg",
        attractions:["Grandmas House"," Year-round Christmas Store"," Prost"," Main Street Tavern"," The Bus Stop"],
        country:"USA"
    },
    {

        name: "Atlanta GA" ,
        year:"2016",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bridge_over_lake_clara_meer.JPG/1280px-Bridge_over_lake_clara_meer.JPG",
        attractions:["Piedmont Park"," Inman Park"," The Tabernacle"," Millenium Gate"," Having your car window smashed"],
        country:"USA"
    },
    {

        name: "Denver CO",
        year:"2013",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Red_Rocks_Amphitheater.JPG/1024px-Red_Rocks_Amphitheater.JPG",
        attractions:[" Red Rocks Ampitheater"," Denver Arts Center"," Mountians"," Broadsterdam"],
        country:"USA"
    },
    {

        name: "Pensacola FL" ,
        year:"2010",
        img:"http://3.bp.blogspot.com/--a8pNxgQKpI/Vpqjog5MBkI/AAAAAAAAFLo/SPFjpSqBvdg/s640/Pensacola%2BBeach%2BFishing%2BPier.JPG",
        attractions:[" Pensacola Beach"," Sluggos"," Pawn shops"," Sun Baked Tourists"," swampy forest"],
        country:"USA"
    },
    {

        name: "Cincinatti OH",
        year:"2017",
        img:"https://media-cdn.tripadvisor.com/media/photo-o/05/b8/ed/44/glenn-hartong.jpg",
        attractions:["Zoo"," Spring Grove Cemetary"," Art Museum"," Krohn Conservatory"," Cathedral Basillica of Assumtion"],
        country:"USA"
    },
    {

        name: "New york city, NY",
        year:"2010",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/1024px-Statue_of_Liberty%2C_NY.jpg",
        attractions:["Smells like Garbage"," Tiny Apartments"," No public Bathrooms"," Traffic Jams"," Statue of Liberty"],
        country:"USA"
    },
    {

        name: "Detroit MI",
        year:"2016",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/James_Scott_Fountain_-_Detroit_skyline.jpg/220px-James_Scott_Fountain_-_Detroit_skyline.jpg",
        attractions:["Empty Houses"," Ste. Anne de Détroit", " Michigan Central Station "," Renaissance Center"," Belle Isle Park"],
        country:"USA"
    },
    {

        name: "Chicago, IL",
        year:"2016",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chicago_skyline%2C_viewed_from_John_Hancock_Center.jpg/500px-Chicago_skyline%2C_viewed_from_John_Hancock_Center.jpg",
        attractions:["Grant Park"," Chicago Theatre"," Field Museum"," Willis Tower"," the 'L'",],
        country:"USA"
    },
    {

        name: "Kansas City, MO",
        year:"2017",
        img:"https://upload.wikimedia.org/wikipedia/commons/3/34/Bartle_Hall_Sky_Stations_Kansas_City_MO.jpg",
        attractions:[" KC Speedway"," Royals Stadium"," Bartol Hall"," Power and Lights District"," West Bottoms"],
        country:"USA"
    }
)
//save db to local storage
localStorage.setItem("placesDB", JSON.stringify(placesDB))