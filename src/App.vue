<script setup lang="ts">
import { SearchBootstrap } from '@hcflgov/vue-esri-search'
import { watchResults } from './lib'
</script>

<template>
  <main class="container-fluid py-5">
    <SearchBootstrap large @results="watchResults" />

    <!-- provider -->
    <!-- schedule -->
  </main>
</template>
