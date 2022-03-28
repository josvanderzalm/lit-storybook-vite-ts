import { html } from 'lit-html';
import './my-info-card';

// This default export determines where your story goes in the story list
export default {
  title: 'MyInfoCard',
};

// 👇 We create a “template” of how args map to rendering
const Template = ({ icon, title, description }) => html`
  <my-info-card
    .icon=${icon}
    .title=${title}
    .description=${description}
  ></my-info-card>`;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
  icon: 'bicycle',
  title: 'Fietsen naar het werk',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh odio, volutpat faucibus orci eget, pellentesque interdum dui. Sed at ligula libero.'
};