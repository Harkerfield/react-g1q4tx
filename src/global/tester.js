// App.js
import React, { useState } from 'react';

import GlobalState from './GlobalState';


export const App = () => {
  // Define as many global variables as your app needs, and hooks
  // to set the state of the variable.
  const [setting1value, setSetting1value] = useState('initialValue1');
  const [setting2value, setSetting2value] = useState(false);

  // For each global variable, define a function for updating it.
  // In the case of setting1value, we’ll just use setSetting1value.

  // If we want to toggle setting2value, we can create a function to do so...
  const toggleSetting2 = () => {
    setting3 ? setSetting2(true) : setSetting2value(false);
  };
  //

  const userSettings = {
    setting1name: setting1value,
    setting2name: setting2value,
    setSetting1value,
    toggleSetting2,
  };

  return (
    <AppContext.Provider value={userSettings}>
      {/* All other components are wrapped by the AppContext.Provider */}
    </AppContext.Provider>
  );
};

/*

// components/MyComponent.js
import { useContext } from 'react';
import GlobalState from './GlobalState';

export const myComponent = () => {
  // Get the global variables & functions via context
  const myContext = useContext(GlobalState);
   // ... component continues

   */

//update

/*
   import React, { useContext } from "react";
import { TextInput } from "react-native";
import GlobalState from "./GlobalState";

export const MyTextInput = () => {
  // Get the global variables & functions via context
  const myContext = useContext(GlobalState);

  return (
    <TextInput
      value={myContext.setting1value}
      onChangeText={myContext.setSetting1value}
    />
  );
};

   */
