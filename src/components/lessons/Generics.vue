<template>
  <section class="common__wrapper">
    <div class="common__title">Generics</div>
    <div>
      <span class="common__accent">Generics: </span> {{result}}<br>
      <span class="common__accent">Generics: </span> {{result2}}
    </div>

  </section>
</template>

<script setup lang="ts">
// что-то вроде прокидвания передеменние,только с типами данных

function entity<T> (arg: T): T {
  return arg
}

const result = entity<number>(5);
const result2 = entity<string>('generic test');

</script>