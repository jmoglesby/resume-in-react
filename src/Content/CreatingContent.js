const creating = [
  {
    heading: "The Veg-O-Matic",
    img: 'https://dsh.re/91ca4',
    text: "This equipment database, which we lovingly call 'The Veg-o-matic', is a Ruby on Rails application featuring a Postgres database and utilizing Bootstrap for styling. The gem 'devise' is used to implement tiered user access, with guest visitors (no login) experiencing limited, view only access. A logged-in 'user' has access to forms for adding new equipment to the database and for adding and updating information about items and records of an items calibration, service, or location status, and a logged in 'admin' has access to edit further internals such as the creation of new locations for equipment to belong to. Minimal jquery is used to respond to click events on elements, animate dynamic forms, and to make AJAX calls for reload-free form submittals and live updating of views in response."
  },
  {
    heading: "This site!",
    img: 'https://dsh.re/b02be',
    text: "This interactive resume is a React app integrating styled components. It demonstrates a grasp of the core concepts of React development, including division of the app into isolated components, the passing of props from parent components to children, the maintenance of state, and even the synchronization of state between parent and child components."
  }
]

export default creating;