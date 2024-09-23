import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $formatObject: (obj: object) => string;
    }
}