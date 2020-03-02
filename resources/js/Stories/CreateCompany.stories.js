import Vue from 'vue';
import Vuex from 'vuex';
import store from '../store';
import CreateCompany from '../Pages/Company/CreateCompany.vue';

import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';

const Company = {
    template: `<Company></Company>`
};


storiesOf('CreateCompany', module)
    .addDecorator(StoryRouter({}, {
        routes: [
            {path: `/company`, component: Company}
        ]
    }))
    .add('CreateCompany', () => ({
        components: {Company },
        template: `<CreateCompany></CreateCompany>`,
        store: store,

    }))


// export default { title: 'CreateCompany' };
//
//
// export const asCreateCompanyComponent = () => ({
//   components: { CreateCompany },
//   template: `<CreateCompany></CreateCompany>`,
//    store: store
//
// });
