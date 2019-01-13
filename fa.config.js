import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

library.add(faCalendar, faMapMarkerAlt, faPlay, faPlus);

Vue.component("font-awesome-icon", FontAwesomeIcon); // registered globally
