<template>
    <router-link :to="'/channel/dialog/' + ticket.from_id" v-on:click.native="setRead(ticket)">
        <ul :class="[{ unread: ticket.status == 0, attempt: ticket.status == 2 }]">
            {{
                ticket.status == 3 ? user.account.name + ' ' + user.account.lastname : ticket.first_name + ' ' + ticket.last_name
            }}
            <li>{{ ticket.content.slice(0, 25) }} <span>23:01</span></li>
        </ul>
    </router-link>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        ticket: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        ...mapGetters({
            user: 'Session/responseData'
        })
    },
    methods: {
        ...mapActions({ status: 'Data/setStatus' }),
        async setRead(ticket) {
            ticket.status == 0 ? await this.status({ ticket_id: ticket.id, status: 1 }) : null
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.on {
    &__mobile {
        a {
            border-bottom: 1px solid #eeeeee;
            cursor: default;
            height: 70px;
            display: flex;
            align-items: center;
            transition: background 0.3s ease;

            &:last-child {
                border: none;
            }

            &.router-link-active,
            &.router-link-exact-active {
                color: inherit !important;
                background: #fff;
            }

            ul {
                padding: 0 1em;
                width: 100%;
                position: relative;

                &.attempt {
                    &::before {
                        content: '';
                        background: #cd5c5c;
                        width: 10px;
                        height: 10px;
                        border-radius: 50px;
                        position: absolute;
                        right: 1em;
                        top: 4px;
                    }
                }

                &.unread {
                    &::before {
                        content: '';
                        background: #42b983;
                        width: 10px;
                        height: 10px;
                        border-radius: 50px;
                        position: absolute;
                        right: 1em;
                        top: 4px;
                    }
                }

                li {
                    display: flex;
                    justify-content: space-between;
                    margin: 0.6em 0 0;
                    opacity: 0.5;
                }
            }
        }
    }
    &__desktop {
        a {
            border-bottom: 1px solid var(--main-background);
            cursor: default;
            display: block;
            height: 80px;
            transition: background 0.1s ease;

            &:last-child {
                border: none;
            }

            &.router-link-active,
            &.router-link-exact-active {
                color: inherit !important;
                background: var(--main-background);
            }

            ul {
                padding: 0 2em;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 80px;
                position: relative;

                &.attempt {
                    &::before {
                        content: '';
                        background: #cd5c5c;
                        width: 10px;
                        height: 10px;
                        border-radius: 50px;
                        position: absolute;
                        right: 1em;
                        top: 1em;
                    }
                }

                &.unread {
                    &::before {
                        content: '';
                        background: #42b983;
                        width: 10px;
                        height: 10px;
                        border-radius: 50px;
                        position: absolute;
                        right: 1em;
                        top: 1em;
                    }
                }

                li {
                    display: flex;
                    justify-content: space-between;
                    margin: 0.8em 0 0;
                    opacity: 0.5;
                }
            }
        }
    }
}
</style>
