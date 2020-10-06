import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use react?",
    content: "React is a favourite js library among engineers",
  },
  {
    title: "How do you use React",
    content: "You use react by creating componets.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className={"ui container"}>
      <Header />
      <Route path={"/"}>
        <Accordion items={items}></Accordion>
      </Route>
      <Route path={"/list"}>
        <Search />
      </Route>
      <Route path={"/translate"}>
        <Translate />
      </Route>
      <Route path={"/dropdown"}>
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};
