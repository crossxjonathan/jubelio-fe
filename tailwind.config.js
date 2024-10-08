/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        height: {
          '96': '24rem',  
          '112': '28rem',
          '120': '30rem',
          '128': '32rem',
          '144': '36rem', 
          '160': '40rem',
          '176': '44rem',
          '192': '48rem',
          '208': '52rem',
          '224': '56rem', 
          '240': '60rem', 
        },
        width: {
          '96': '24rem',  
          '112': '28rem',
          '128': '32rem',
          '144': '36rem', 
          '160': '40rem',
          '176': '44rem', 
          '192': '48rem', 
          '208': '52rem', 
          '224': '56rem', 
          '240': '60rem',
          '286': '72rem',
        },
        margin: {
          '81': '22rem',
          '83': '23rem',
          '84': '23.5rem',
          '85': '24rem',
          '100': '25rem',
          '105': '26rem',
          '110': '30rem',
          '120': '35rem',
          '140': '40rem',
          '150': '45rem',
          '160': '50rem',
          '170': '55rem',
          '180': '60rem',
          '190': '65rem',
          '200': '70rem',
          '210': '80rem',
          '220': '90rem',
          '250': '100rem',
          '260': '110rem',
          '270': '120rem',
          '280': '130rem',
          '300': '150rem',
        },
        padding: {
          '88': '22rem',
          '100': '25rem',
          '105': '26rem',
          '110': '30rem',
          '120': '35rem',
          '140': '40rem',
          '145': '43rem',
          '150': '45rem',
          '160': '50rem',
          '170': '55rem',
          '180': '60rem',
          '190': '65rem',
          '200': '70rem',
          '210': '80rem',
          '220': '90rem',
          '250': '100rem',
          '260': '110rem',
          '270': '120rem',
          '280': '130rem',
          '300': '150rem',
        },
        colors: {
          tosca: {
            light: '#a0e8e6',
            DEFAULT: '#40E0D0',
            dark: '#0093AE',
          },
        },
      },
    },
  }
  