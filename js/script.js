// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Osamah Hasan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

  // input
  const randomNumberP = Math.floor(Math.random() * 6) + 1
  const randomNumberN = Math.floor(Math.random() * -6) + -1

  // process
  function result() {
  buttonOnChecked = document.getElementById("Positive.").checked

  if (buttonOnChecked == true) {
    document.getElementById("answer").innerHTML =
      "Your number is: " + randomNumberP + "."
  } else {
    document.getElementById("answer").innerHTML =
      "Your number is: " + randomNumberN + "."
  }
}