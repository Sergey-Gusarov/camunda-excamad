/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
import MigrationView from "@/views/MigrationView.vue";
import IncidentView from "@/views/IncidentView.vue";
import HistoryView from "@/views/HistoryView.vue";
import StreamView from "@/views/StreamView.vue";
import DetailProcessView from "@/views/DetailProcessView.vue";
import DetailDiagramView from "@/views/DetailDiagramView.vue";
import EmbeddedDiagramView from "@/views/EmbeddedDiagramView.vue";
import OldActivityView from "@/views/OldActivityView.vue";
import TaskListView from "@/views/TaskListView.vue";
import NewDiagramView from "@/views/NewDiagramView.vue";
import Baseurl from "@/components/BaseUrl.vue";
import DicisionDiagram from "@/components/decisions/DecisionDiagram.vue";
import LoginView from "@/views/LoginView.vue";
import DeployView from "@/views/DeployView.vue";
import DeployTableView from "@/views/DeployTableView.vue";
import DeployHelpView from "@/views/DeployHelpView.vue";
import WhatIsThisView from "@/views/WhatIsThisView.vue";
import DecisionDefinitionsView from "@/views/DecisionDefinitionsView.vue";
import Home from "@/views/Home.vue";
import store from "@/store/store";
import VueSmartRoute from "vue-smart-route";

Vue.use(Router);
Vue.use(VueSmartRoute);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  //mode: "history",
  routes: [
    {
      path: "/tasklist",
      name: "tasklist",
      component: TaskListView,
      smart: {
        matcher: {
          search: [/tas/],
          title: () => "Tasklist"
        }
      }
    },
    {
      path: "/migration",
      name: "migration",
      component: MigrationView,
      smart: {
        matcher: {
          search: [/mig/],
          title: () => "Migration"
        }
      }
    },
    {
      path: "/decisiondefinitions",
      name: "decisiondefinitions",
      component: DecisionDefinitionsView,
      smart: {
        matcher: {
          search: [/dec/],
          title: () => "Decisions"
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: ifNotAuthenticated,
      smart: {
        matcher: {
          search: [/log/],
          title: () => "Login"
        }
      }
    },
    {
      path: "/settings",
      name: "settings",
      component: Baseurl,
      smart: {
        matcher: {
          search: [/(set)/],
          title: () => "Settings"
        }
      }
    },
    {
      path: "/bpmasservice/newdiagram/:diagramKey",
      name: "newdiagram",
      props: true,
      component: NewDiagramView,
    },

    {
      path: "/bpmasservice/wtf",
      name: "whatisthis",
      component: WhatIsThisView
    },
    {
      path: "/bpmasservice/deploy/",
      name: "newdiagram",
      component: DeployView,
    },
    {
      path: "/bpmasservice/deployhelp/:diagramId",
      name: "deployhelp",
      props: true,
      component: DeployHelpView,
    },
    {
      path: "/bpmasservice/deploytable/",
      name: "deploytable",
      component: DeployTableView,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView,
      smart: {
        matcher: {
          search: [/his/],
          title: () => "History"
        }
      }
    },
    {
      path: "",
      name: "home",
      component: Home
    },
    {
      path: "/incident",
      name: "incident",
      component: IncidentView,
      smart: {
        matcher: {
          search: [/inc/],
          title: () => "Incidents"
        }
      }
    },
    {
      path: "/stream",
      name: "stream",
      component: StreamView
    },
    {
      path: "/oldactivity",
      name: "oldactivity",
      component: OldActivityView
    },
    {
      path: "/embedded",
      name: "embedded",
      component: EmbeddedDiagramView
    },
    {
      path: "/processdetail/:processInstanceId",
      name: "processdetail",
      props: true,
      component: DetailProcessView
    },
    {
      path: "/decisiondiagram/:decisionId",
      name: "decisiondiagram",
      props: true,
      component: DicisionDiagram
    },

    {
      path: "/diagram/:diagramKey",
      name: "diagram",
      props: true,
      component: DetailDiagramView
    }
  ]
});
