const projects = [
  {
    title: "Yelp Camp",
    imageURL: "./assets/images/yelpcamp-min.png",
    tech: ["Node", "Express", "MongoDB", "Heroku", "Bootstrap", "CSS",
      "HTML", "JavaScript"],
    desc: `This RESTful app is built with a MEN stack. It includes authorization,
  comments, and dynamically created content. This project uses bootstrap 4. It's small, but
  one of my favorite parts of this project is how the card-deck is used on the campgrounds show page.
  The breakpoints for the number of cards per row dynamically changes with screen size and the number
  of database entries.`,
    display: true,
  },
  {
    title: "Texas Hold'em",
    imageURL: "./assets/images/pokerFace.png",
    tech: ["C#", "Unity", "FireBase", "CSS", "HTML", "JavaScript"],
    desc: `This app uses C#, Unity, HTML, CSS, JS and Firebase. I was in charge of the front-end for 
  this project.  This is a great example of how quickly I can pick topics up.  From start to finish, we had 
  2 weeks to present our project.  I had never used C#, Unity, created audio clips nor created pixel art before.
    I took the first week just learning C# and Unity and the 2nd week creating the UI and assets.`,
    display: true,
  },
];

export default projects;