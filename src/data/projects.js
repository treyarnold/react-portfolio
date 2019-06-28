const projects = [
  {
    id: 1,
    title: "Yelp Camp",
    tech: ["Node", "Express", "MongoDB", "Heroku", "Bootstrap", "CSS",
      "HTML", "JavaScript"],
    desc: `This RESTful app is built with a MEN stack. It includes authorization,
      comments, and dynamically created content. This project uses bootstrap 4. It's small, but
      one of my favorite parts of this project is how the card-deck is used on the campgrounds show page.
      The breakpoints for the number of cards per row dynamically changes with screen size and the number
      of database entries.`,
    display: true,
    deployed: "https://campbnb.herokuapp.com/",
    repo: "https://github.com/treyarnold/yelp_camp",
  },
  {
    id: 2,
    title: "AIS Inventory",
    tech: ["Node", "Express", "MySql", "DynamSoft Scanner", "Heroku", "CSS", "HTML"],
    desc: `Bar Inventory system. This app has a database with multiple tables (Users, Current 
      Inventory, Drinks, Usage) with the focus being to easily and quickly complete an inventory. 
      Also, we have manager and POS views. When a drink is entered its liqour contents will be 
      decreased from inventory. The scanner view uses the camera that scans a UPC barcode to scan 
      inventory in. All content is created dynamically`,
    display: true,
    deployed: "https://glacial-temple-22211.herokuapp.com/",
    repo: "https://github.com/treyarnold/ais-inventory"
  },
  {
    id: 3,
    title: "This Site",
    tech: ["Node", "React", "CSS", "HTML"],
    desc: `This was a fun site to make.  I wanted to give everything a simple looking UI, but with 
      a good UX and dynamically rendered content.  If you love it, or have 
      suggestions, please let me know!`,
    display: true,
    deployed: null,
    repo: "https://github.com/treyarnold/react-portfolio"
  },
  {
    id: 4,
    title: "Texas Hold'em",
    tech: ["C#", "Unity", "FireBase", "CSS", "HTML", "JavaScript"],
    desc: `I was in charge of the front-end for 
      this project.  This is a great example of how quickly I can pick topics up.  From start to finish, we had 
      2 weeks to present our project.  I had never used C#, Unity, created audio clips nor created pixel art before.
      I took the first week just learning C# and Unity and the 2nd week creating the UI and assets.`,
    display: true,
    deployed: "https://treyarnold.github.io/poker-face/",
    repo: "https://github.com/treyarnold/poker-face"
  },
  {
    id: 5,
    title: "Potter Words",
    tech: ["CSS", "HTML", "JavaScript"],
    desc: `A word guessing game done in the theme of Harry Potter. Custom Font loaded in css and all js
    done with vanilla js. The game is organized as an object with anonymous functions.`,
    display: true,
    deployed: "https://treyarnold.github.io/potterWords/",
    repo: "https://github.com/treyarnold/potterWords"
  },
  {
    id: 6,
    title: "Counter Attack",
    tech: ["CSS", "HTML", "jQuery", "Bootstrap"],
    desc: `A combat game written with jQuery and bootstrap. Game is created as an object. There are 2 pages
    set as full screens that fade between to progress the game.`,
    display: true,
    deployed: "https://treyarnold.github.io/counterAttack/",
    repo: "https://github.com/treyarnold/counterAttack"
  },
];

export default projects;