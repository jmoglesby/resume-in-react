const creating = [
  {
    heading: "The Veg-O-Matic",
    img: 'https://dsh.re/91ca4',
    url: 'https://www.speedie.equipment',
    text: "This equipment database, which we lovingly call 'The Veg-o-matic', is a Ruby on Rails application featuring a Postgres database and utilizing Bootstrap for styling. The gem 'devise' is used to implement tiered user access, with guest visitors (no login) experiencing limited, view only access. A logged-in 'user' has access to forms for adding new equipment to the database and for adding and updating information about items and records of an items calibration, service, or location status, and a logged in 'admin' has access to edit further internals such as the creation of new locations for equipment to belong to. Minimal jQuery is used to respond to click events on elements, animate dynamic forms, and to make AJAX calls for reload-free form submittals and live updating of views in response. On the Ruby/Rails side, I make use of scopes to formulate my search queries and to aid in filtering results. The app is hosted on Heroku, with Heroku set to automatically rebuild on commits to the master branch of the repository on GitHub."
  },
  {
    heading: "This site!",
    img: 'https://dsh.re/b02be',
    url: 'https://github.com/jmoglesby/resume-in-react',
    text: "This interactive resume is a React app integrating a bit of styled components. It demonstrates a grasp of the fundamental concepts of React development, including division of the app into isolated components, the passing of props from parent components to children, the maintenance of state, and even the synchronization of state between parent and child components. It also features some basic ES6 style JavaScript. This app is hosted on Heroku using the 'create-react-app-buildpack' script. "
  }
]

export default creating;