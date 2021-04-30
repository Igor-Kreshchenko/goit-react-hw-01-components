import React from "react";

import Profile from "./components/Profile";
import user from './user.json';

import Statistics from "./components/Statistics";
import statisticalData from "./statistical-data.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </div>
  );
};

export default App;
