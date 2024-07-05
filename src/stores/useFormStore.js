// stores/useFormStore.js

import { defineStore } from "pinia";

export const useFormStore = defineStore("formStore", {
  state: () => ({
    allData: [],
    textValue: "",
    numberValue: null,
    textareaValue: "",
    selectedRadio: "",
    selectedOption: null,
    selectedSkills: [],

    optionsValue: [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
    ],
    genderValues: [
      { name: "Male", key: "M" },
      { name: "Female", key: "F" },
    ],
    skillsValues: [
      { name: "JavaScript", key: "JS" },
      { name: "HTML", key: "HTMl" },
      { name: "CSS", key: "CSS" },
      { name: "Vue", key: "VUE" },
    ],
  }),

  actions: {
    handleSubmit() {
      if (
        this.textValue &&
        this.numberValue &&
        this.textareaValue &&
        this.selectedRadio &&
        this.selectedOption &&
        this.selectedSkills.length > 0
      ) {
        const userData = {
          name: this.textValue,
          age: this.numberValue,
          description: this.textareaValue,
          gender: this.selectedRadio,
          country: this.selectedOption.name,
          skills: this.selectedSkills.join(", "),
        };

        this.allData.push(userData);
        console.log(...this.allData);
        this.handleCancel();
      }
    },
    handleCancel() {
      this.textValue = "";
      this.numberValue = null;
      this.selectedSkills = [];
      this.textareaValue = "";
      this.selectedRadio = "Production";
      this.selectedOption = null;
      this.checkboxValue = null;
    },
  },
});
