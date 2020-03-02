import Vue from 'vue';
import Vuex from 'vuex';
import Company from '../Pages/Company/Company.vue';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import withStoreDecorator from 'storybook-store-decorator';
import store from '../store';


const CreateCompany = {
    template: `<CreateCompany></CreateCompany>`
};
const EditCompany = {
    template: `<EditCompany></EditCompany>`
};

console.log(store)
storiesOf('Company', module)
    .addDecorator(StoryRouter({}, {
        routes: [
            {path: '/company/create', component: CreateCompany},
            {path: `/company/:id/edit`, component: EditCompany},
            {path: `/company`, component: Company}
        ]
    }))
  //   .addDecorator(withStoreDecorator({
  //   props: store,
  // }))
    .add('Company', () => ({
        components: {Company },
        template: `<Company></Company>`,
        store: store,

    }))
