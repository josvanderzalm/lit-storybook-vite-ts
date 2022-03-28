import { html } from 'lit-html';
import './my-gauge';

// This default export determines where your story goes in the story list
export default {
  title: 'MyGauge',
};

// 👇 We create a “template” of how args map to rendering
const Template = ({ unit, title, value, position }) => html`
  <my-gauge 
    .unit=${unit}
    .title=${title}
    .value=${value}
    .position=${position}
  ></my-gauge>`;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
  unit: '%',
  title: 'Titel',
  value: 80,
  position: 80
};