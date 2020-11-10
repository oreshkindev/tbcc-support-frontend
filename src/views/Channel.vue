<template>
    <div class="wrapper">
        <aside :class="$route.name == 'Dialog' ? 'slide' : ''">
            <form>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" @click="switched = true">
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                </svg>

                <input type="text" placeholder="Поиск по сообщениям и документации" />
            </form>

            <nav>
                <ChannelItem v-for="ticket in group" :key="ticket.id" :ticket="ticket" />
            </nav>
        </aside>

        <Navbar :class="[$route.name == 'Dialog' ? 'slide' : '', { switched: switched }]" />

        <transition :name="direction">
            <router-view @switched="switched = false"></router-view>
        </transition>

        <div class="blank" @click="switched = false"></div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ChannelItem from '@/components/ChannelItem.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        Navbar,
        ChannelItem
    },
    data() {
        return {
            switched: false,
            direction: 'slide-left-'
        }
    },
    computed: {
        ...mapGetters({ group: 'Data/responseByGroup' })
    },
    watch: {
        $route(to, from) {
            this.direction = to.meta.depth < from.meta.depth ? 'slide-right-' : 'slide-left-'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slide-left--enter-active,
.slide-left--leave-active,
.slide-right--enter-active,
.slide-right--leave-active {
    position: fixed;
    right: 0;
    transition: transform 0.5s ease;
}

.slide-left--enter,
.slide-right--leave-to {
    transform: translate3d(100%, 0, 0);
}

.slide-right--enter,
.slide-left--leave-to {
    transform: translate3d(100%, 0, 0);
}

.clear {
    header,
    aside,
    section {
        transition: none !important;
    }
}

.on {
    &__mobile {
        .wrapper {
            grid-template-columns: 1fr;
        }

        .blank {
            display: none;
        }

        header {
            transition: transform 0.5s ease;
            &.slide {
                transform: translate3d(-60px, 0, 0);
            }
        }

        aside {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;

            overflow: auto;
            height: 100%;
            transition: transform 0.5s ease;

            &.slide {
                transform: translate3d(-60px, 0, 0);
            }

            nav {
                overflow: auto;
                scrollbar-width: none;
                box-sizing: border-box;
            }

            form {
                background: #ffffff;
                height: 60px;
                padding: 0 1em;
                display: flex;
                align-items: center;

                svg {
                    display: none;
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
        .wrapper {
            grid-template-columns: var(--navbar-width) 1fr;
        }

        .blank {
            height: 100vh;
            position: fixed;
            width: 100vw;
            z-index: 0;
        }

        header {
            height: 100%;
            max-width: var(--navbar-width);
            position: fixed;
            transform: translate3d(-320px, 0, 0);
            transition: transform 0.5s ease;
            width: 100%;

            &.switched {
                transform: translate3d(0, 0, 0);
            }
        }

        aside {
            background: #ffffff;
            overflow: auto;
            scrollbar-width: none;
            z-index: 1;

            form {
                background: #ffffff;
                border-bottom: 1px solid var(--main-background);
                height: 60px;
                padding: 0 2em;
                display: flex;
                align-items: center;
                position: sticky;
                top: 0;
                z-index: 1;

                svg {
                    cursor: pointer;
                    margin: 0 1.5em 0 0;
                }

                input {
                    background: var(--main-background);
                    border: none;
                    border-radius: 50px;
                    box-sizing: border-box;
                    height: 40px;
                    padding: 0 2em;

                    font: 13px var(--main-font-family);
                }
            }
        }
    }
}

.wrapper {
    display: grid;
    height: 100%;
}
</style>
