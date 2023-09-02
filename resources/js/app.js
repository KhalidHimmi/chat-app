import "./bootstrap";
import { createApp } from "vue";

import mitt from 'mitt';
const emitter = mitt();
const app = createApp({});
app.config.globalProperties.emitter = emitter;


import chatComponent from "./components/ChatComponent.vue";
import userComponent from "./components/userComponent.vue";
import chatMessageComponent from "./components/ChatMessageComponent.vue";
import chatFormComponent from "./components/ChatFormComponent.vue";
import messageComponent from "./components/MessageComponent.vue";
import Echo from "laravel-echo";

// Vue.component('message-component', require('./components/MessageComponent.vue'));
// Vue.component('chat-message', require('./components/ChatMessagesComponent.vue'));
// Vue.component('chat-form', require('./components/ChatFormComponent.vue'));

app.component("chat-component", chatComponent)
    .component("user-component", userComponent)
    .component("chat-form", chatFormComponent)
    .component("chat-message-component", chatMessageComponent)
    .component("message-component", messageComponent)

// export default {
//     components: {
//         chatComponent,
//         chatFormComponent,
//         chatMessageComponent,
//         messageComponent,
//     }
// };

// export default {
//     mounted() {
//         window.Echo.channel('chat')
//             .listen('sentMessage',(e)=>{
//             console.log(e);
//         })
//     },
// };

// var channel = window.Echo.channel("chat");
//     channel.listen("sentMessage", (data) => {
//    console.log(data);
// });


// window.Echo.channel('chat')
//     .listen('sentMessage', (e) => {
//         console.log(e.message.body);
//     });
app.mount("#app");
