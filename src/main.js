import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Panel from "primevue/panel";
import Lara from "@/presets/lara";
import App from "./App.vue";
import "./style.css";
import { createPinia } from "pinia";

import "primeicons/primeicons.css";

import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Rating from "primevue/rating";
import Textarea from "primevue/textarea";
import RadioButton from "primevue/radiobutton";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import FloatLabel from "primevue/FloatLabel";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";

const app = createApp(App);
const pinia = createPinia();

app.component("Panel", Panel);
app.component("FloatLabel", FloatLabel);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.component("Rating", Rating);
app.component("Textarea", Textarea);
app.component("RadioButton", RadioButton);
app.component("Dropdown", Dropdown);
app.component("Checkbox", Checkbox);
app.component("Button", Button);
app.component("Column", Column);
app.component("DataTable", DataTable);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);

app
  .use(PrimeVue, {
    unstyled: true,
    pt: Lara,
  })
  .use(pinia)
  .mount("#app");
