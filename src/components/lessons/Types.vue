<template>
  <section class="common__wrapper">
    <div class="common__title">Types</div>
    <div><span class="common__accent">number:</span> {{number}}</div>
    <div><span class="common__accent">string:</span> {{string}}</div>
    <div><span class="common__accent">boolean:</span> {{boolean}}</div>
    <div><span class="common__accent">undef:</span> {{undef}}</div>
    <div><span class="common__accent">empty </span>(null): {{empty}}</div>
    <div><span class="common__accent">any:</span> {{all}}</div>
    <div><span class="common__accent">unknown:</span> {{unkn}}</div>
    <div><span class="common__accent">array:</span> {{arr}}</div>
    <div><span class="common__accent">tuple:</span> [{{tuple[0]}}, {{tuple[1]}}]</div>
    <div><span class="common__accent">object:</span> {{obj}}</div>
    <div><span class="common__accent">function:</span> {{funcRes}}</div>
  </section>
</template>

<script setup lang="ts">

let number: number = 10
let string: string = 'hi'
let boolean: boolean = false
let undef: undefined = undefined
let empty: null = null
let all: any = 10 // любой тип данных
let unkn: unknown = "что-то неизвестное" // неизвестный тип
let arr: number[] = [1, 2, 3] // массив чисел
let tuple: [string, number] = ['hi', 10] // кортеж (tuple), фиксированная структура
let obj: { name: string, age: number } = { name: "John", age: 30 } // объект с типами полей

// Функция, которая возвращает строку
let func: () => string = () => "Это функция"
let funcRes = func(); // вызываем функцию для отображения результата

</script>