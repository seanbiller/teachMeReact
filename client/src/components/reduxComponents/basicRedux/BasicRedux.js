import React from "react";
import LessonHeading from "../../teachingComponents/LessonHeading";
import LessonArticle from "../../teachingComponents/LessonArticle";
import LessonCode from "../../teachingComponents/LessonCode";
import IndexJS, { IndexJSCode } from "./index";
import { actionsIndexJsCode } from "./actions";
import { reducersIndexJsCode } from "./reducers";

import { AppJsCode } from "./App";

const intro = (
  <p>
    Redux is a Predictable State Container for JavaScript Apps, its not just for
    React. In order to utilize it with React we utilize both the Redux library
    and the React-Redux library. Now below is an example of the most bare bones
    react app using Redux and React-Redux I could create. It has a single piece
    of state managed by Redux which is just a string saying either "yes" or "no"
    changed by clicking one of two buttons. I've kept the logic as simple as
    possible so there's minimal clutter and we can more easily track whats
    happening Redux and React-Redux. We will review each of the four files that
    makes up example individually, but if you would like to see the app as a
    whole and keep it on your machine for future reference you can download it
    from my Github here.
    <a
      className="article-anchor"
      target="blank"
      href="https://github.com/seanbiller/tmr-redux-basics-1"
    >
      Basic Redux App Github
    </a>
  </p>
);
const indexJsArticle = (
  <p>
    The first file we’re going to look at is the root index.js. The first thing
    to note is the import statements
    <br></br>
    <code className="article-code">
      import &#123; createStore &#125; from "redux";
    </code>
    <br></br>
    <code className="article-code">
      import &#123; Provider &#125; from "react-redux";
    </code>
    <br></br>
    <code className="article-code">import reducers from "./reducers";</code>
    <br></br>
    The Redux
    <code className="article-code">store</code>is created by using the
    <code className="article-code">createStore</code>function and passing your
    reducer as an argument. The<code className="article-code">Provider</code>
    component is wrapped around our App component so that any components within
    our app will have access to the<code className="article-code">store</code>
    which we pass to the<code className="article-code">Provider</code>component
    as a prop.
  </p>
);
const actionsIndexJsArticle = (
  <p>
    The actions.js file contains our Redux actions. Each action is a plain
    JavaScript object that has a type field. From the
    <a
      className="article-anchor"
      target="blank"
      href="https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions"
    >
      Redux Documentation
    </a>
    <b className="article-bold">
      "You can think of an action as an event that describes something that
      happened in the application."
    </b>
    In our case we have two actions<code className="article-code">signIn</code>
    and<code className="article-code">signOut</code>
    with their respective types
    <code className="article-code">"SIGN_IN"</code>and
    <code className="article-code">"SIGN_OUT"</code>.
  </p>
);
const reducersIndexJsArticle = (
  <p>
    The reducers.js file is where the state is actually changed. First the
    <code className="article-code">INITIAL_STATE</code>is declared with a
    special all caps syntax and the isSignedIn
    <code className="article-code">state</code>is set to the string "no". Now we
    export default an anonymous function that takes two arguments.
    <code className="article-code">state = INITIAL_STATE</code>and our
    <code className="article-code">action</code>object. We then use a switch
    statement to switch between the two cases we described in our actions file
    <code className="article-code">"SIGN_IN"</code>and
    <code className="article-code">"SIGN_OUT"</code>. Now Redux has a rule that
    you cannot modify the existing state. Instead, they must make immutable
    updates, by copying the existing<code className="article-code">state</code>
    and making changes to the copied values. One of the easiest ways to do this
    is to use the Spread Operator, aka the three dots in front
    <code className="article-code">...state</code>. The Spread Operator makes a
    copy of the original state so we can make changes to the new state object it
    has created. In our case we simply update the string to say "yes" for
    <code className="article-code">"SIGN_IN"</code>and "no" for
    <code className="article-code">"SIGN_OUT"</code>. We then set the default
    case to return the<code className="article-code">state</code>unchanged.
  </p>
);
const AppJsArticle = (
  <p>
    Now our App.js file is where we see all these pieces come together.
    <br></br>
    <code className="article-code">
      import &#123; connect &#125; from "react-redux"
    </code>
    <br></br>
    <code className="article-code">
      import &#123; signIn, signOut &#125; from "./actions";
    </code>
    <br></br>
    So lets break down each piece in the order they appear. First we have two
    event handler functions that call our actions
    <code className="article-code">signIn</code>
    and<code className="article-code">signOut</code>. Those two functions are
    assigned to two onClick events for our Sign In and Sign Out buttons. Then we
    have an h3 tag displaying
    <code className="article-code">&#123;this.props.isSignedIn&#125;</code>. Now
    this may seem strange because we have been talking about state this whole
    time. The reason we call
    <code className="article-code">&#123;this.props.isSignedIn&#125;</code>
    instead of
    <code className="article-code">&#123;this.state.isSignedIn&#125;</code>is
    because of the function below.
    <code className="article-code">mapStateToProps</code>takes in the entire
    store <code className="article-code">state</code>and is used to select the
    part of the data from the store that our connected component needs. It is
    called every time the store state changes. In our case our store only has
    one piece of state,
    <code className="article-code">isSignedIn</code>. So
    <code className="article-code">mapStateToProps</code>assigns
    <code className="article-code">state.isSignedIn</code>to the prop
    <code className="article-code">isSignedIn</code>which is available in our
    App component as
    <code className="article-code">&#123;this.props.isSignedIn&#125;</code>. The
    final piece is the<code className="article-code">connect()</code>function
    which we get from React-Redux
    <code className="article-code">
      export default connect(mapStateToProps, &#123; signIn, signOut
      &#125;)(App);
    </code>
    This function takes two arguments
    <code className="article-code">mapStateToProps</code>
    and the actions you will be using in this component, in our case
    <code className="article-code">signIn</code>and
    <code className="article-code">signOut</code>. By passing our actions to
    <code className="article-code">connect()</code>they will automatically be
    dispatched to the store, which is the redux way of saying the store will be
    updated when their called. AKA
    <code className="article-code">isSignedIn</code>will update in the store
    when they are called. Which leads me to the second benefit of{" "}
    <code className="article-code">connect()</code>, by passing our actions to
    it our component receives them as props. This is why we can call them in the
    way we did<code className="article-code">this.props.signIn()</code>and
    <code className="article-code">this.props.signOut()</code>. Lastly we wrap
    our <code className="article-code">App</code>component so it will still be
    exported as it normally would be but with the added logic coming from Redux
    and React-Redux.
  </p>
);

class BasicRedux extends React.Component {
  render() {
    return (
      <>
        <LessonHeading heading="Intro to Redux" />
        <LessonArticle article={intro} />

        <IndexJS />

        <LessonHeading heading="index.js" />
        <LessonArticle article={indexJsArticle} />
        <LessonCode code={IndexJSCode} />
        <LessonHeading heading="actions.js" />
        <LessonArticle article={actionsIndexJsArticle} />
        <LessonCode code={actionsIndexJsCode} />
        <LessonHeading heading="reducers.js" />
        <LessonArticle article={reducersIndexJsArticle} />
        <LessonCode code={reducersIndexJsCode} />
        <LessonHeading heading="App.js" />
        <LessonArticle article={AppJsArticle} />
        <LessonCode code={AppJsCode} />
        {/* <Row className="p-3">
          <Col lg={10} className="p-3">
            <ReduxReactReduxCards />
          </Col>
        </Row> */}
      </>
    );
  }
}

export default BasicRedux;
