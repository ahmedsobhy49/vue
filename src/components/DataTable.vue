<template>
  <div class="card flex">
    <DataTable :value="formStore.allData" tableStyle="min-width: 50rem ">
      <Column field="name" header="Name">
        {{ slotProps.data.name }}
      </Column>
      <Column field="age" header="Age">
        {{ slotProps.data.age }}
      </Column>

      <Column field="description" header="Description">
        {{ slotProps.data.description }}
      </Column>
      <Column header="gender">
        <template #body="slotProps">
          {{ slotProps.data.gender }}
        </template>
      </Column>
      <Column field="country" header="Country">
        {{ slotProps.data.country }}
      </Column>
      <Column field="skills" header="Skills">
        {{ slotProps.data.skills }}
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { useFormStore } from "@/stores/useFormStore";
const formStore = useFormStore();
</script>
