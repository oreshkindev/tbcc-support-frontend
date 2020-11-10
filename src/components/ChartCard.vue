<template>
    <div>
        <ul>
            {{
                name
            }}
            <li>Эфективность - {{ result }}%</li>
            <li>Заявок - {{ closed }}</li>
        </ul>
        <Chart :percentage="result" :size="12" />
    </div>
</template>

<script>
import Chart from '@/components/Chart.vue'

export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        result: {
            type: Number,
            default: 0
        },
        closed: {
            type: Number,
            default: 0
        }
    },
    components: {
        Chart
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.on {
    &__mobile {
        div {
            background: #ffffff;
            border-radius: 8px;
            display: inherit;
            align-items: center;
            grid-template-columns: 1fr;
            padding: 1em;
            max-width: var(--navbar-width);
            text-align: center;

            ul {
                font-size: 15px;
                li {
                    font-size: 14px;
                    margin: 1em 0;
                    opacity: 0.6;
                }
            }

            svg {
                margin: 0 auto auto;
                order: -1;
            }
        }
    }
    &__desktop {
        div {
            background: #ffffff;
            border-radius: 8px;
            display: inherit;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            padding: 2em;
            max-width: var(--navbar-width);

            ul {
                font-size: 15px;
                white-space: nowrap;
                li {
                    font-size: 14px;
                    margin: 1em 0;
                    opacity: 0.6;
                }
            }
        }
    }
}
</style>
