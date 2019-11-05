import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:branch/:tag',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/development',
      name: 'development',
      component: () => import(/* webpackChunkName: "development" */ './views/Development.vue'),
    },
    {
      path: '/working-group',
      name: 'workingGroups',
      component: () => import(/* webpackChunkName: "workingGroups" */ './views/WorkingGroups.vue'),
    },
    {
      path: '/ontology-tools',
      name: 'ontologyTools',
      component: () => import(/* webpackChunkName: "ontologyTools" */ './views/OntologyTools.vue'),
    },
    {
      path: '/SMIF-UML',
      name: 'SMIF-UML',
      component: () => import(/* webpackChunkName: "SMIF-UML" */ './views/SMIF-UML.vue'),
    },
    {
      path: '/linked-data-fragments',
      name: 'LinkedDataFragments',
      component: () => import(/* webpackChunkName: "LinkedDataFragments" */ './views/LinkedDataFragments.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Contact.vue'),
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import(/* webpackChunkName: "Products" */ './views/Products.vue'),
    },
    {
      path: '/OWL',
      name: 'OWL',
      component: () => import(/* webpackChunkName: "OWL" */ './views/OWL.vue'),
    },
    {
      path: '/glossary',
      name: 'Glossary',
      component: () => import(/* webpackChunkName: "Glossary" */ './views/Glossary.vue'),
    },
    {
      path: '/vocabulary',
      name: 'Vocabulary',
      component: () => import(/* webpackChunkName: "Vocabulary" */ './views/Vocabulary.vue'),
    },
    {
      path: '/schema',
      name: 'Schema',
      component: () => import(/* webpackChunkName: "Schema" */ './views/Schema.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (from.query.tag && !to.query.tag) {
    if (to.path === from.path) {
      return
    }
    next({ path: to.path, query: { tag: from.query.tag } })
  }

  next()
})

export default router