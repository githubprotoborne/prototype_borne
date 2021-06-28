/*
import AdminContainer from "./Admin/Container-Admin/AdminContainer";
import Admin from "./Admin/Process-Admin/Admin";
import AdminProcess from "./Admin/Process-Admin/AdminProcess";
import NewProcess from "./Admin/Process-Admin/NewProcess";
import ProcessContainer from "./Admin/Process-Admin/ProcessContainer";
*/
import Administration from "./Administration/Administration";

import Container from "./Container/Container";
import Home from "./Home/Home";
import Accessibilite from "./LegalInfo/Accessibilite";
import Cookies from "./LegalInfo/Cookies";
import Donnees from "./LegalInfo/Donnees";
import Mentions from "./LegalInfo/Mentions";
import PlanDuSite from "./LegalInfo/PlanDuSite";

import NotFound from "./NotFound/NotFound";
import Process from "./Process/Process";
import Scanner from "./Scanner/Scanner";
import Subcontainer from "./subcontainer/Subcontainer";
const DynamicSubContainerBreadcrumb = ({ match }) => (
  <span>{match.params.name}</span>
);
const DynamicContainerBreadcrumb = ({ match }) => (
  <span>{match.params.ContainerName}</span>
);
const DynamicProcessBreadcrumb = ({ match }) => (
  <span>{match.params.processName}</span>
);




const routesConfig = [
  {
    path: "/",
    component: Home,
    exact: true,
    breadcrumb: "Accueil"
  },
  /*
  {
    path: "/admin/categories",
    component:Admin,

  },
  {
    path: "/admin/demarche",
    component: AdminProcess,

  },
  {
    path: "/admin/categorie",
    component: AdminContainer,

  },
  
  
  {
    path: "/nouvelle-demarche",
    component: NewProcess,

  },
  
  

  
  {
    path: "/admin",
    component: ProcessContainer,

  },
  
*/
  

  {
    path: "/mes-demarches",
    component: Administration,
    breadcrumb:"Accès aux sites des administrations"

  },
  {

    path: "/sous-categories/:id/:ContainerName/:name/:category_index/:process_name",
    component: Process,


  },
  {
    path: "/sous-categories/:id/:ContainerName/:name/:category_index",
    component: Container,

    breadcrumb: DynamicSubContainerBreadcrumb

  },
  {
    path: "/sous-categories/:id/:ContainerName",
    component: Subcontainer,
    breadcrumb: DynamicContainerBreadcrumb
  },
  /*
  {
    path: "/plan-du-site",
    component: PlanDuSite,
    breadcrumb: "Plan du site"
  },
  {
    path: "/accessibilite",
    component: Accessibilite,
    breadcrumb: "Accéssibilité"
  },
  {
    path: "/mentions-legales",
    component: Mentions,
    breadcrumb: "Mentions légales"
  },
  
 
  {
    path: "/donnees-personnelles",
    component: Donnees,
    breadcrumb: "Données personnelles"
  },
  
  {
    path: "/scanner",
    component: Scanner,
    breadcrumb: "numériser un document"
  },
*/







  {
    path: "*",
    component: NotFound,
    breadcrumb: null
  }

];

export default routesConfig;