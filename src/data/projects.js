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
    title: "Texas Hold'em",
    tech: ["C#", "Unity", "FireBase", "CSS", "HTML", "JavaScript"],
    desc: `This app uses C#, Unity, HTML, CSS, JS and Firebase. I was in charge of the front-end for 
      this project.  This is a great example of how quickly I can pick topics up.  From start to finish, we had 
      2 weeks to present our project.  I had never used C#, Unity, created audio clips nor created pixel art before.
      I took the first week just learning C# and Unity and the 2nd week creating the UI and assets.`,
    display: true,
    deployed: "https://treyarnold.github.io/poker-face/",
    repo: "https://github.com/treyarnold/poker-face"
  },
];

export default projects;