import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";



function App(props) {

  const url = "https://xaegis-back-gd.herokuapp.com/posts/";

  const [posts, setPosts] = useState([]);

  return (
    <div>
      <div className="row twelve columns" style={{textAlign: "center", backgroundColor: "skyblue"}}>
        <h1>XAEGIS</h1>
      </div>
      <Switch>
        <Route 
          exact
          path="/"
          render={(rp) => <AllPosts {...rp} posts={posts} />} 
        />
        <Route
          path="/post/:id"
          render={(rp) => (
            <SinglePost {...rp} posts={posts} />
          )}
        />
        <Route 
          path="/new"
          render={(rp) => <Form {...rp} posts={posts} />} 
        />
        <Route 
          path="/edit"
          render={(rp) => <Form {...rp} posts={posts} />} 
        /> 
      </Switch>
    </div>
  )
  
}

export default App;
