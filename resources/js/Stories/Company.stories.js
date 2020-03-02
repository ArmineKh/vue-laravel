import Vue from 'vue';
import Vuex from 'vuex';
import Company from '../Pages/Company/Company.vue';
import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import routes from '../router'
import store from '../store';


console.log(store)
storiesOf('Company', module)
    .addDecorator(StoryRouter({}, {
        routes: routes
    }))
    .add('Company', () => ({
        components: {Company },
        template: `<Company></Company>`,
        store: store
    }))
