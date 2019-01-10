import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";

library.add(faCalendar);

Vue.component("font-awesome-icon", FontAwesomeIcon); // registered globally
