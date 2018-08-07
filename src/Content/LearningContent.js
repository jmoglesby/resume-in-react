import beginning from '../Content/images/beginningruby.png';
import agile from '../Content/images/agilerails.png';
import railsguide from '../Content/images/railsguide.png';
import railsconf from '../Content/images/railsconf.png';
import practicing from '../Content/images/practicingrails.png';
import railsangular from '../Content/images/railsangular.png';
import programming from '../Content/images/programmingruby.png';
import js from '../Content/images/js.png';
import simplejs from '../Content/images/simplejs.png';
import reactforreal from '../Content/images/reactforreal.png';
import sqlqueries from '../Content/images/sqlqueries.png';
import progit from '../Content/images/progit.png';
import exceptional from '../Content/images/exceptionalruby.png';

const learning = [
  {
    heading: "Beginning Ruby",
    img: beginning,
    text: "This book by Peter Cooper was the trailhead for my path into web development, which began in January 2017. It was given to me by a friend, and it quickly inspired in me a love for the Ruby language. As I worked through this book, I practiced by building some of the little projects as excercises to better pick up on the fundamentals of programming -- one example being a 'shapes' library that allows the user to define shape objects and then call methods that will calculate the area and circumference of a shape. Another example is a small, simple dungeon text adventure that parses user input to return a variable response and allow the user to navigate the pre-built dungeon."
  },
  {
    heading: "Agile Web Development with Rails 5",
    img: agile,
    text: "Knowing that I wanted to build a Rails web application for work, I devoured this book, written by Sam Ruby, David Copeland, and Dave Thomas, shortly after working through 'Beginning Ruby' -- at the time, it was written to cover Rails 5.0. It was so helpful that I went through it again in its entirety when the authors updated it to accomodate Rails 5.1 in September 2017. Both times, while going through the book, I did all the guided exercises which led to the building of a simple e-commerce storefront (minus payment processing). This book helped to solidify my understanding of the fundamental architecture of a Rails web application, and of MVC web applications in general. I gained a better understanding of how HTTP works and what a REST architecture looks like, and got a little bit of practical experience with jQuery and Webpack/React (in the 5.1 edition) as well."
  },
  {
    heading: "The Ruby on Rails Guide",
    img: railsguide,
    text: "Alongside reading 'Agile Web Development with Rails 5', I also went through the 'Getting Started' guide at RubyonRails.org. I knew this would be the best place to start, since it is the very source of the framework itself. Working through its exercises, I built a simple blog application, learning the basics of routing and ActiveRecord relational mapping. The rest of the Rails Guide has served as a frequent reference as I continue to learn more and more about Rails."
  },
  {
    heading: "RailsConf 2017",
    img: railsconf,
    text: "I had the privilege of attending RailsConf in April 2017. Since I was very new to web development, a lot of the experience was quite overwhelming, but the immersion into the world of Rails development proved to be incredibly helpful. I absorbed a lot of the language and terminology that had mystified me for a while, and got a good sense of my bearings in terms of where I was at, and where I needed to be heading in my learning and in the development of my equipment database application, which I had officially started working on in earnest. It was helpful that I was able to attend with a couple friends of mine who are both professional Rails developers -- they were able to ask me the kinds of debriefing questions I needed in order to metabolize some of the concepts I was learning that I felt, at the time, were just out of my reach. Overall, RailsConf got me very excited about pushing myself to achieve things as a developer so that I could eventually do it as a career."
  },
  {
    heading: "Practicing Rails",
    img: practicing,
    text: "While attending RailsConf, I met Justin Weiss, the author of this book and a blogger whose blog I had stumbled upon several times while searching the web for answers to the Rails questions I had while trying to build my equipment database. After RailsConf I picked up his book, realizing that I identified with feeling overwhelmed while trying to learn this new skill. Weiss helped to formulate in my mind an idea of what skills to prioritize while learning how to build a full-stack application, and helped me to understand some important aspects of testing and the development process. One of the key skills I remember picking up from this book is how to debug more effectively, and in particular by using the Rails console. I learned, through this book, how to hop into my app in the console and test out methods on an instance of my model, and a bit about how to spot issues in the logs."
  },
  {
    heading: "Rails, Angular, Postgres, and Bootstrap",
    img: railsangular,
    text: "I read this book, written by David Copeland, around June 2017, once I had the beginnings of a working Rails application in place which would evetually grow into my equipment database. This book introduced me to the Bootstrap framework, which I ended up using extensively in my own app, as well as the advantages of Postgres data-constraints, which I also implemented in my app. After reading this book, I ended up reorganizing some of the structure of my application to better support the kind of search engine I wanted up front, since that is the core feature of my equipment database (searching for equipment based on Ruby scopes). I built a small user database, by going through the exercises in this book, which featured a type-ahead search filter powered by Angular. I got that small bit of experience in Angular, but did not end up using it in anything else."
  },
  {
    heading: "Programming Ruby",
    img: programming,
    text: "While I had already gone through 'Beginning Ruby', and had been picking up a lot of my understanding of Ruby from the Rails resources I was using, I decided also to pick up Dave Thomas' classic resource on Ruby in the summer of 2017. It has served primarily as a reference for me when I have a question about using Ruby that isn't sufficiently addressed by just the Ruby docs. This book has been a helpful resource when I need a little more explanation about why or how a thing works the way it does in Ruby."
  },
  {
    heading: "You Don't Know JS",
    img: js,
    text: "In the process of building my equipment database, I ran into areas where I knew I would want to use JavaScript to allow for smoother and more flexible user experiences, and responsive feedback while a user interacted with the app. I was usually able to find some jQuery snippet that accomplished what I needed it to, but was totally mystified as to how and why they worked... so after discovering Kyle Simpson's free book on JavaScript, I began reading through it. I started working through this bit by bit, in October 2017, usually just focusing on a section I needed help understanding, rather than reading it straight through. For that reason, I still have not read this one in entirety, but am working through it a section at a time, as I get to aspects of using JavaScript that I need help understanding. Most recently (as I write this), I went through the section on Closures, which has helped me to better understand the passing of props and use of props and state in functions in React. Since I am learning to work in React right now, I've decided next to go through the 'this & Object Prototypes' section of this work. I hope to gain a much more solid understanding of JavaScript as I continue to make my way through this one."
  },
  {
    heading: "Simplifying JavaScript",
    img: simplejs,
    text: "Alongside 'You Don't Know JS', I have been going through this excellent work by Joe Morgan as well. I wanted to make sure that as I learned JavaScript, I was keeping up with the best ways to do things according to most recent versions of the language, namely ES6. Morgan has been very helpful for my understanding of working easily with Arrays and Maps in particular -- I've learned how to use the spread operator to get data where I need it to be, and how to chain methods for easy in-place manipulation. I've also learned the importance of clear declaration of variables and when to use each type (var, let, or const), and Morgan gave a demonstration of arrow functions that, as a JavaScript novice, I found quite helpful. I haven't finished this one yet either (I'm about 3/4 of the way through), but that's because some of the later sections are still a bit beyond me at this point."
  },
  {
    heading: "React for Real",
    img: reactforreal,
    text: "Knowing that React is a popular front-end framework, I decided to purchase this book in April 2018 to see if I wanted to choose React over Angular, which I had already gotten to try out in David Copeland's book on Rails. Ludovico Fischer, the author of this book, as well as Michael Jordan, with whom I attended a React webinar recently, convinced me that I did, indeed, want to focus on React for complex front-end JavaScript functionality. While I did not find Fischer's method of laying out his React applications particularly appealing, as compared to Jordan's methods or the examples that make use of Styled Components (which I love), I did pick up important aspects of the fundamentals of building components, creating and changing state within a component, and passing props through nested components. In working through this book, I built a word-counter application that would dynamically count the number of words the user had typed into the text area, and live-update a progress bar to give a visual indication of progress towards a stated word-count goal. I learned a bit about how to test, troubleshoot, and debug a React application through this book as well."
  },
  {
    heading: "SQL Queries for Mere Mortals",
    img: sqlqueries,
    text: "I purchased this book in February 2018, mostly for reasons immediately related to my current job -- but it has, of course, proved helpful for Rails development as well. The author, John Viescas, helps to clarify what is going on at the SQL level when I am querying my database. The obvious take aways have been a better understanding of how to structure my queries for maximum efficiency, especially when querying across multiple columns or tables, and in general, a better understanding of what is happening at the database level of my application."
  },
  {
    heading: "Pro Git",
    img: progit,
    text: "Having gone through many tutorials, walk-throughs, and exercises in programming, I got bits and pieces of how to use git, enough to get by as a developer working alone. However, I recently discovered this free book by Scott Chacon and Ben Straub published to the official git website, and decided it was time to learn git at a deeper level. I'm about halfway through this one as I write, and have already learned quite a bit about effective use of branching, tagging to keep a version history, customizing the commit history view, and more. Since I haven't yet worked with a team, I'm hoping this book will give me a baseline in how to use git collaboratively for when I do get to work with a team."
  },
  {
    heading: "Exceptional Ruby",
    img: exceptional,
    text: "I purchased this book, by Avdi Grimm, several months ago, but have only just begun reading it. I hope to gain a better understanding of how to handle failure in more comprehensive ways inside a Rails application."
  }
]

export default learning;