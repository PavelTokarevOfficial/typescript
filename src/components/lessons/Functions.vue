<template>
  <section class="common__wrapper">
    <div class="common__title">Functions</div>
    <div>
      <span class="common__accent">function: </span>
      <pre>{{$formatObject(getName('Pavel'))}}</pre>
    </div>

    <div>
      <span class="common__accent">function arrow: </span>
      <pre>{{$formatObject(getNameArrow('Nikita'))}}</pre>
    </div>

    <div>
      <span class="common__accent">array numbers: </span>{{getNumbers(1, 2, 3)}}
    </div>

    <div class="common__title">Функциональные перегрузки</div>

    <div>
      <span class="common__accent">getCars: </span>{{getCars('BMW')}}<br>
      <span class="common__accent">getCars: </span>{{getCars('BMW', 1000)}}
    </div>

  </section>
</template>

<script setup lang="ts">

type TypeName = {
  name:string
}

function getName(name: string):TypeName{
  return {name};
}

const getNameArrow = (name: string):TypeName => {
  return {name};
}

const getNumbers = (...numbers: number[]) => {
  return numbers
}

//Функциональные перегрузки

function getCars(name:string): string
function getCars(name:string, price:number): string

function getCars(name:string, price?:number): string{
  return price? `Название: ${name}, Цена: ${price}`: `Название: ${name}`
}

</script>