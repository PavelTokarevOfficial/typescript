<template>
  <section class="common__wrapper">
    <div class="common__title">Interfaces</div>
    <div>
      <span class="common__accent">Car: </span>
      <pre>{{ $formatObject(niva) }}</pre>
    </div>

  </section>
</template>

<script setup lang="ts">

interface Car extends ICarSpecifications, ICarManufacturer{
  name: string
}

interface ICarSpecifications {
  wheels: number
  handlebar: boolean
}

interface ICarManufacturer {
  factory: string
  city: string
}

const niva: Car = {
  name: 'niva',
  wheels: 4,
  handlebar: true,
  factory: 'prosto zavod',
  city: 'spb'
}

</script>