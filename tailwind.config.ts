import { Component } from "react";

/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    ".pages/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {},
  },
  Plugins: []
}