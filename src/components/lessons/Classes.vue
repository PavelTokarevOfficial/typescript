<template>
  <section class="common__wrapper">
    <div class="common__title">Classes</div>
    <div>
      <span class="common__accent">Car: </span>
      {{  new Car('BMW', 1000).getPrices() }}
    </div>


  </section>
</template>

<script setup lang="ts">
class Car {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrices(): string {
    return `${this.name} - ${this.price}`;
  }
}
</script>