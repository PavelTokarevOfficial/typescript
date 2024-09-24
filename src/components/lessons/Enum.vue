<template>
  <section class="common__wrapper">
    <div class="common__title">Enum</div>
    <div>
      <span class="common__accent">Enum User: </span>
      <pre>{{ $formatObject(user) }}</pre>
    </div>

  </section>
</template>

<script setup lang="ts">
//что-то типо константы
enum EnumRoles {
  ADMIN, GUEST, USER
}

const enum EnumColor {
  White, BLACK, BLUE
}

interface IUser {
  name: string,
  role: EnumRoles,
  color: EnumColor
}

let user:IUser = {
  name: 'Pavel',
  role: EnumRoles.USER,
  color: EnumColor.BLUE
}
</script>