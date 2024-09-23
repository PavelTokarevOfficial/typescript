<template>
  <section class="common__wrapper">
    <div class="common__title">Structure Objects</div>
    <div>
      <span class="common__accent">user:</span>
      <pre>{{ $formatObject(user) }}</pre>
    </div>

    <div>
      <span class="common__accent">common:</span>
      <pre>{{ $formatObject(common) }}</pre>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type TypeUser = {
  name: string;
  age: number;
  address: string;
};

let user: TypeUser = {
  name: "John",
  age: 15,
  address: 'kirov'
};

type TypeUser2 = {
  name: string;
  age: number;
};

let user2: TypeUser2 = {
  name: "John",
  age: 15,
};

type TypeAddress2 = {
  county: string;
  city: string;
};

let address2: TypeAddress2 = {
  county: 'russia',
  city: 'kirov'
};

let common = { ...address2, ...user2 };

ref(user);
ref(common);
</script>