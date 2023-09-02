<template>
    <div>
        <form class="form">
            <textarea cols="25" rows="5" class="form-input" @keydown="typing" v-model="body">
            </textarea>
            <span class="notice"> Hit Return to send a message </span>
        </form>
    </div>
</template>

<script>

//import { eventBus } from '../event';

export default {
    data() {
        return {
            body: null,
        };
    },
    methods: {
        typing(e) {
            if (e.keyCode === 13 && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();

                window.Echo.channel('chat').listen('sentMessage', (e) => {
                    console.log("ChatFormComponent"+e);
                })
            }
        },
        sendMessage() {
            if (!this.body || this.body.trim() === "") {
                return;
            }
            let messageObj = this.buildMessage();
            // eventBus.$emit('added_message', messageObj);
            this.emitter.emit("added_message", messageObj);
            axios.post("/message", {
                body: this.body.trim(),
            })
                .catch(() => {
                    console.log("failed");
                });
            this.body = null;
        },
        buildMessage() {
            return {
                id: Date.now(),
                body: this.body,
                selfMessage: true,
                user: {
                    name: Laravel.user.name,
                },
            };
        },
    }, //Modification v02
    created() {
        // Echo.join('chat')
        //     .here(console.log("a"))
        //     .joining(console.log("b"))
        //     .leaving(console.log("c"),)
        //     .listen('sentMessage', (e) => {
        //         console.log("F"+e.messageObj)
        //     });
    },
    mounted() {
        Echo.channel('chat').listen('sentMessage', (e) => {
            console.log("Dis" + e);
        })
    },
};
</script>

<style>
.form {
    padding: 8px;
}

.form-input {
    width: 100%;
    border: 1px solid #d3e0e9;
    padding: 5px 10px;
    outline: none;
}

.notice {
    color: #aaa;
}
</style>
