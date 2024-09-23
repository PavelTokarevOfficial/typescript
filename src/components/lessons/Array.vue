<template>
  <section class="common__wrapper">
    <div class="common__title">Array</div>
    <div>
      <span class="common__accent">common:</span> {{ mass }}
    </div>

    <div>
      <span class="common__accent">number read only:</span> {{ number }}
    </div>

    <div>
      <span class="common__accent">tuple:</span> {{ tuple }}
    </div>
  </section>
</template>

<script setup lang="ts">

let mass: string[] = ['1', '2', '3', '4', '5'];
let number: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //read only array

//Кортеж
type TypeTuple = [string, number];

let tuple: TypeTuple = ['test', 1]

</script>