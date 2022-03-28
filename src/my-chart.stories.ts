import { html } from 'lit-html';
import './my-chart';

// This default export determines where your story goes in the story list
export default {
  title: 'MyChart',
};

// 👇 We create a “template” of how args map to rendering
const Template = ({ src }) => html`
  <my-chart 
    src=${src}
  ></my-chart>`;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
  src: 'http://localhost:3000/config.json'
 };