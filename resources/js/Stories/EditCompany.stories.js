import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import store from '../store';
import EditCompany from '../Pages/Company/EditCompany.vue';
// import Company from '../Pages/Company/Company.vue';

import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';

const Company = {
    template: `<Company></Company>`
};


storiesOf('EditCompany', module)
    .addDecorator(StoryRouter({}, {
        routes: [
            {path: `/company`, component: Company}
        ]
    }))
    .add('EditCompany', () => ({
        components: {Company },
        template: `<EditCompany></EditCompany>`,
        store: store,

    }))
