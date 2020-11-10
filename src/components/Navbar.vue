<template>
    <header>
        <figure>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="signout()">
                <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" />
            </svg>

            <svg viewBox="0 0 180 180" role="img" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <circle cx="90" cy="90" r="90" />
                    <text text-anchor="middle" dominant-baseline="central" x="50%" y="50%">{{ user.account.name.slice(0, 1) + user.account.lastname.slice(0, 1) }}</text>
                </g>
            </svg>

            <figcaption v-text="user.account.name + ' ' + user.account.lastname" />
        </figure>

        <nav>
            <ul>
                <li>
                    <router-link to="/home" exact>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path
                                d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"
                            />
                        </svg>
                        <span>Home</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/channel">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path
                                d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"
                            />
                        </svg>
                        <span>Channel</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/documentation">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path
                                d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM11 5H4v14h7V5zm2 0v14h7V5h-7zm1 2h5v2h-5V7zm0 3h5v2h-5v-2z"
                            />
                        </svg>
                        <span>Documentation</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/issues">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path
                                d="M13 19.9a5.002 5.002 0 0 0 4-4.9v-3a4.98 4.98 0 0 0-.415-2h-9.17A4.98 4.98 0 0 0 7 12v3a5.002 5.002 0 0 0 4 4.9V14h2v5.9zm-7.464-2.21A6.979 6.979 0 0 1 5 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732L6.056 8.3a7.01 7.01 0 0 1 .199-.3h11.49c.069.098.135.199.199.3l2.02-1.166 1 1.732-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3c0 .953-.19 1.862-.536 2.69l2.5 1.444-1 1.732-2.526-1.458A6.986 6.986 0 0 1 12 22a6.986 6.986 0 0 1-5.438-2.592l-2.526 1.458-1-1.732 2.5-1.443zM8 6a4 4 0 1 1 8 0H8z"
                            />
                        </svg>
                        <span>Issues</span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <p>Telegram Receiver 1.0.1 - <router-link to="/documentation">О программе</router-link></p>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            user: 'Session/responseData'
        })
    },
    methods: {
        ...mapActions({
            signout: 'Session/signout'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.on {
    &__mobile {
        header {
            background: #ffffff;
            display: flex;
            align-items: center;
            align-self: flex-end;
            height: 60px;

            figure {
                display: none;
            }

            nav {
                padding: 0 1em;
                width: 100%;
                ul {
                    display: flex;
                    justify-content: space-between;
                    li {
                        span {
                            display: none;
                        }
                    }
                }
            }

            p {
                display: none;
            }
        }
    }
    &__desktop {
        header {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            z-index: 1;

            figure {
                border-bottom: 1px solid #eee;
                padding: 2em;
                position: relative;
                margin: 0;
                text-align: center;

                svg {
                    cursor: default;
                    width: 160px;

                    circle {
                        fill: var(--main-background);
                    }

                    text {
                        font-size: 48px;
                    }

                    &:first-child {
                        cursor: pointer;
                        position: absolute;
                        right: 1em;
                        top: 1.5em;
                        width: auto;
                    }
                }

                figcaption {
                    margin: 2em 0 0;
                }
            }

            nav {
                padding: 2em;

                ul {
                    li {
                        margin: 1em 0;

                        span {
                            margin: 0 0 0 1em;
                        }
                    }
                }
            }

            p {
                margin: auto 0 0;
                opacity: 0.6;
                padding: 2em;
            }
        }
    }
}
</style>
