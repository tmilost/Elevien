
<script setup>
let isModalOpen = ref(false) ;

function openModal() {
isModalOpen.value = true;
}

function closeModal() {
isModalOpen.value = false;
}

let gymnasts = await $fetch('https://elevien-fe-job.free.beeceptor.com/applications').catch((error) => console.log(error.data))

</script>

<template>
   <MyApplications @open-modal="openModal()" />
  
   <div v-if="isModalOpen">
      <ApplyGymnastModel @close-modal="closeModal()"/>
   </div>
   <MyApplicationsTable v-if="Array.isArray(gymnasts)" :gymnasts-array="gymnasts"/>
   <NoApplications @open-modal="openModal()" v-else />
</template>