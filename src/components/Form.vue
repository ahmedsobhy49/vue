<template>
  <form>
    <div class="flex flex-col gap-10 items-stretch">
      <!-- input text -->
      <div class="card flex justify-center">
        <div class="flex flex-col gap-2 w-full">
          <label
            for="username"
            class="text-start text-sm font-medium text-gray-900"
            >Username</label
          >
          <InputText
            id="username"
            v-model="formStore.textValue"
            aria-describedby="username-help"
            class="text-gray-500 focus:border-1 focus:border-blue-600 w-full"
          />
        </div>
      </div>
      <!-- input number -->
      <div class="flex flex-col gap-2">
        <label
          for="withoutgrouping"
          class="text-start text-sm font-medium text-gray-900"
          >Age</label
        >
        <InputNumber
          v-model="formStore.numberValue"
          inputId="withoutgrouping"
          :useGrouping="false"
        />
      </div>

      <!-- input textarea -->
      <div class="flex flex-col gap-2">
        <label class="text-start text-sm font-medium text-gray-900"
          >Description</label
        >
        <Textarea
          v-model="formStore.textareaValue"
          rows="5"
          cols="50"
          class="resize-none"
        />
      </div>
      <!-- input radio -->
      <div class="card flex justify-start">
        <div class="flex flex-col gap-3">
          <div
            v-for="gender in formStore.genderValues"
            :key="gender.key"
            class="flex items-center"
          >
            <RadioButton
              v-model="formStore.selectedRadio"
              :inputId="gender.key"
              name="dynamic"
              :value="gender.name"
            />
            <label :for="gender.key" class="ml-2">{{ gender.name }}</label>
          </div>
        </div>
      </div>
      <!-- input select -->
      <div class="card flex justify-center self-start">
        <Dropdown
          v-model="formStore.selectedOption"
          :options="formStore.optionsValue"
          filter
          optionLabel="name"
          placeholder="Select a Country"
          class="w-full md:w-56"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center">
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>{{ slotProps.placeholder }}</span>
          </template>
          <template #option="slotProps">
            <div class="flex items-center">
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
      </div>
      <!-- input checkbox -->
      <div class="card flex justify-start">
        <div class="flex gap-5 self-start">
          <div
            v-for="skill of formStore.skillsValues"
            :key="skill.key"
            class="flex items-center gap-2"
          >
            <Checkbox
              v-model="formStore.selectedSkills"
              :inputId="skill.key"
              name="skills"
              :value="skill.name"
            />
            <label :for="skill.key">{{ skill.name }}</label>
          </div>
        </div>
      </div>
      <!-- buttons  -->
      <div class="flex items-center justify-start gap-5">
        <div class="card flex justify-center">
          <Button
            label="Submit"
            @click="formStore.handleSubmit"
            class="p-button"
          />
        </div>
        <div class="card flex justify-center">
          <Button
            label="Cancel"
            severity="danger"
            @click="formStore.handleCancel"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useFormStore } from "@/stores/useFormStore";
const formStore = useFormStore();
</script>

<style scoped>
.p-button {
  background-color: green;
  color: white;
  transition: all 200ms;
}

.p-button:hover {
  background-color: rgb(2, 80, 2);
}
</style>
