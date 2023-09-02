<template>
    <div class="message-area" ref="message">
        <message-component
            v-for="message in messages"
            :key="message.id"
            :message="message"
        >
        </message-component>
    </div>
</template>
<script>

export default {
    
    data() {
        return {
            messages: [],
        };
    },
    mounted() {
        axios.get("/message").then((response) => {
            //console.log(response.data);
            this.messages = response.data;
        });
        this.emitter.on("added_message", (message) => {
            this.messages.unshift(message);
            if (message.selfMessage) {
                this.$refs.message.scrollTop = 0;
                //console.log("Scroll To the Top");
            }
        });
    },//Modification v02
    created() {
        // Echo.join('chat')
        //     .here(console.log("a"))
        //     .joining(console.log("b"))
        //     .leaving(console.log("c"),)
        //     .listen('sentMessage', (e) => {
        //         this.messages.push(e);
        //     });
    },
};
</script>
<style>
.message-area {
    height: 400px;
    max-height: 400px;
    overflow-y: scroll;
    padding: 15px;
    border-bottom: 1px solid #eee;
}
</style>
