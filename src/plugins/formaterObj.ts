import { App } from 'vue';

function formatObject(obj: object): string {
    return JSON.stringify(obj, null, 2);
}

export default {
    install(app: App) {
        app.config.globalProperties.$formatObject = formatObject;
    }
};