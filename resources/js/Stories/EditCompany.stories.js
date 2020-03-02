import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import store from '../store';
import EditCompany from '../Pages/Company/EditCompany.vue';
import routes from '../router'
import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';



storiesOf('EditCompany', module)
    .addDecorator(StoryRouter({}, {
        routes: routes
    }))
    .add('EditCompany', () => ({
        components: {EditCompany },
        template: `<EditCompany></EditCompany>`,
        store: store,

    }))
