<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Chats</div>
            <div class="card-body">
                <chat-message-component></chat-message-component>
                <chat-form></chat-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted --ChatComponent--.')
        }
    }
</script>
