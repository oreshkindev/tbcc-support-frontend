<template>
    <ul class="dialog__messages" ref="ticketList">
        <li v-for="item in ticket" :key="item.id" :class="{ support: item.status == 3 }">
            {{ item.content }}
            <span>{{ item.created_at.slice(11, 16) }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        ticket: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        ticket() {
            this.$nextTick(() => {
                this.$refs.ticketList.scrollTop = this.$refs.ticketList.scrollHeight
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.on {
    &__mobile {
        ul {
            background: var(--main-background);
            padding: 1em;
            overflow: auto;
            scrollbar-width: none;

            li {
                background: hsla(0, 0%, 90%, 0.58);
                width: fit-content;
                line-height: 1.82;
                list-style: none;
                margin: 2.5em 0;
                padding: 10px 2.5em;
                border-radius: 15px;
                max-width: 600px;
                position: relative;

                &:first-child {
                    margin: 0 0 2.5em;
                }
                &.support {
                    margin: 2.5em 0 2.5em auto;
                }

                span {
                    position: absolute;
                    right: 1.5em;
                    bottom: -2em;
                    opacity: 0.2;
                }
            }
        }
    }

    &__desktop {
        ul {
            background: var(--main-background);
            padding: 1em;
            overflow: auto;
            scrollbar-width: none;

            li {
                background: hsla(0, 0%, 90%, 0.58);
                width: fit-content;
                line-height: 1.82;
                list-style: none;
                margin: 2.5em 0;
                padding: 10px 2.5em;
                border-radius: 15px;
                max-width: 600px;
                position: relative;

                &.support {
                    margin: 2.5em 0 2.5em auto;
                }

                span {
                    position: absolute;
                    right: 1.5em;
                    bottom: -2em;
                    opacity: 0.2;
                }
            }
        }
    }
}
</style>
