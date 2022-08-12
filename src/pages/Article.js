import image01 from "../assets/Image-01.PNG";
import image02 from "../assets/Image-02.PNG";
import image03 from "../assets/Image-03.PNG";
import image04 from "../assets/Image-04.PNG";
import image05 from "../assets/Image-05.PNG";
import image06 from "../assets/Image-06.PNG";

function Article() {
  return (
    <div>
      <h1>Setting up React Router for a React project</h1>
      <img
        src={image01}
        alt="Basic React Router code with supposed-to-be-funny paths names."
      />
      <p className="articleText-container">
        Last week I wrote about{" "}
        <a href="https://medium.com/@dimterion/how-to-set-up-a-new-create-react-app-project-2bfc2992aa16">
          setting up a project with Create React App
        </a>{" "}
        and then decided to add some additional pages there with{" "}
        <a href="https://reactrouter.com/">React Router</a>.<br></br>
        <br></br>
        React Router is a library for React that helps you arranging all the
        pages of the project (routes). It can be installed in the root folder of
        the project with the following command in the terminal (current version
        is 6, otherwise it can be checked in the{" "}
        <a href="https://reactrouter.com/docs/en/v6/getting-started/installation">
          docs
        </a>
        ; can be installed with npm or Yarn):
        <br></br>
        <br></br>
        <i>npm install react-router-dom@6</i>
        <br></br>
        <br></br>
        Then you need to import it in the file where you want to set up the
        routing structure. I usually do this in the App.js:
        <br></br>
        <br></br>
        <i>
          import {`{ BrowserRouter, Routes, Route }`} from "react-router-dom"
        </i>
        <br></br>
        <br></br>
        Or you can shorten the first import like this (which oftentimes can be
        seen in the tutorials):<br></br>
        <br></br>
        <i>
          import {`{ BrowserRouter as Router, Routes, Route }`} from
          "react-router-dom"
        </i>
        <br></br>
        <br></br>I prefer leaving it as BrowserRouter.<br></br>
        <br></br>
        You then wrap everything within the App function with{" "}
        <i>{`<BrowserRouter></BrowserRouter>`}</i>, and all the routes will be
        wrapped with <i>{`<Routes></Routes>`}</i>.<br></br>
        <br></br>
        After this each of the routes is created with the <i>{`<Route />`}</i>{" "}
        tag inside of which you put <i>path</i> to the page and <i>element</i>{" "}
        (page/component) that the page will display. E.g.:<br></br>
        <br></br>
        <i>{`<Route path="/" element={<Home />} />`}</i>
        <br></br>
        <br></br>
        <img
          src={image02}
          alt="Code for adding the Home page with React Router."
        />
        <br></br>
        <br></br>
        And then you add more routes with paths and elements. Here you have two
        pages - Home and Article, first one with the root path, second one with
        the root/article path:<br></br>
        <br></br>
        <img src={image03} alt="Code for adding two pages with React Router." />
        <br></br>
        <br></br>
        After this you can create a navbar to navigate between your pages with a{" "}
        <i>{`<Link></Link>`}</i> tag (which is basically a <i>{`<a></a>`}</i>{" "}
        tag that can be styled any way you want). I created a separate component
        NavBar and placed it outside of the Routes so it can be displayed on
        every page:<br></br>
        <br></br>
        <img
          src={image04}
          alt="Code for adding a navbar and two pages with React Router."
        />
        <br></br>
        <br></br>
        And the NavBar component looks like this (make sure to import Link
        there):<br></br>
        <br></br>
        <img
          src={image05}
          alt="Code for the NavBar component with two links."
        />
        <br></br>
        <br></br>
        One last thing to add to set up the basic routing structure is the
        error-page when route doesn't match any of the existing ones (e.g.{" "}
        <i>/asdf</i>). This can be done by adding another route with a{" "}
        <i>path="*"</i> and for the element you put the page/component where you
        add you error-page content. For example:<br></br>
        <br></br>
        <img
          src={image06}
          alt="Code for adding a navbar, two main pages and an error page with React Router."
        />
        <br></br>
        <br></br>
        Here we have a Home page, an Article page and everything else will be
        redirected to the Error page.<br></br>
        <br></br>
        There's obviously a ton of other things that can be done with React
        Router (check the <a href="https://reactrouter.com/docs/en/v6">docs</a>)
        but this is how it's basic structure looks like.
      </p>
    </div>
  );
}

export default Article;
