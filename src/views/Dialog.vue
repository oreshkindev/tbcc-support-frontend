<template>
    <section @click="$emit('switched')">
        <nav>
            <router-link to="/channel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />
                </svg>
            </router-link>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" v-if="controls" v-on:click="sendRequest">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" v-if="controls" v-on:click="retrieveDialog(ticket.slice(-1)[0])">
                <path
                    d="M13.828 1.686l8.486 8.486-1.415 1.414-.707-.707-4.242 4.242-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.242 1.414-1.415L8.88 8.05l4.242-4.242-.707-.707 1.414-1.415zm.708 3.536l-4.671 4.67-2.822.565 6.5 6.5.564-2.822 4.671-4.67-4.242-4.243z"
                />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="controls = !controls">
                <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
        </nav>

        <DialogMessages :ticket="ticket" />

        <form v-on:submit.prevent v-on:keydown="inputHandler">
            <input type="text" placeholder="Написать сообщение.." v-model="message" />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" v-on:click="sendMessage">
                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
            </svg>
        </form>
    </section>
</template>

<script>
import DialogMessages from '@/components/DialogMessages.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        DialogMessages
    },
    data() {
        return {
            controls: false,
            message: ''
        }
    },
    computed: {
        ...mapGetters({
            responseById: 'Data/responseById'
        }),
        ticket() {
            return this.responseById(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions({
            remove: 'Data/remove',
            status: 'Data/setStatus'
        }),
        async sendRequest() {
            await this.remove({
                id: this.$route.params.id
            })
            this.$router.push('/channel')
        },
        async retrieveDialog(ticket) {
            if (ticket.status != 3) {
                await this.status({ ticket_id: ticket.id, status: 2 })
            }
        },
        inputHandler(e) {
            if (e.keyCode === 13 && !e.shiftKey) {
                e.preventDefault()
                this.sendMessage()
            }
        },
        sendMessage() {
            var today = new Date()

            this.$socketClient.sendObj({
                first_name: 'Technical support',
                last_name: 'TBCC ',
                username: 'tbcc_support',
                from_id: this.$route.params.id,
                to_id: this.$route.params.id,
                content: this.message,
                status: 3,
                created_at: today.toISOString()
            })
            this.message = ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.on {
    &__mobile {
        section {
            background: var(--main-background);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            height: 100%;
            position: fixed;
            overflow: auto;
            width: 100%;

            nav {
                background: #ffffff;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 60px;
                padding: 0 1em;
                z-index: 1;

                a {
                    svg {
                        fill: var(--main-color);
                    }
                }

                svg {
                    cursor: default;
                }
            }

            form {
                background: #ffffff;
                height: 60px;
                padding: 0 1em;
                display: flex;
                align-items: center;
                align-self: flex-end;
                justify-content: space-between;

                svg {
                    flex-basis: 30px;
                    margin: 0 0 0 1em;
                }

                input {
                    background: var(--main-background);
                    border: none;
                    border-radius: 50px;
                    box-sizing: border-box;

                    font: 13px var(--main-font-family);

                    height: 40px;
                    padding: 0 2em;
                    width: 100%;
                }
            }
        }
    }

    &__desktop {
        section {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            height: 100%;
            overflow: auto;
            position: relative;
            transform: none;
            transition: none;
            box-sizing: border-box;

            z-index: 1;

            nav {
                background: #ffffff;
                display: flex;
                align-items: center;
                height: 60px;
                padding: 0 1em;
                z-index: 1;
                overflow: hidden;
                position: relative;

                svg {
                    fill: var(--main-color);
                    margin: 0 2em 0 0;

                    &:last-child {
                        margin: 0;
                    }
                }

                a {
                    margin: 0 auto 0 0;
                }
            }

            form {
                background: #ffffff;
                height: 60px;
                padding: 0 1em;
                display: flex;
                align-items: center;
                align-self: flex-end;
                justify-content: space-between;

                svg {
                    flex-basis: 30px;
                    margin: 0 0 0 1em;
                }

                input {
                    background: var(--main-background);
                    border: none;
                    border-radius: 50px;
                    box-sizing: border-box;

                    font: 13px var(--main-font-family);

                    height: 40px;
                    padding: 0 2em;
                    width: 100%;
                }
            }
        }
    }
}
</style>
