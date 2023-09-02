
export default{
    
    mounted() {
        Echo.join('chat')
            .here(users => {
                this.$emit('users.here', users);
            })
            .joining(user => {
                this.$emit('users.joined', user);
            })
            .leaving(user => {
                this.$emit('users.left', user);
            })
            .listen('MessageCreated', (data) => {
                this.$emit('added_message', data.message);
            });
    },
        
}


