<template>
    <div class="wrapper">
        <div class="heading">Details</div>
        <section>
            <h1>Details</h1>
            <p>
                Основные показатели эффективности специалистов технической поддержки. По данным показателям ведется рейтинговая система участников, по результатам которой, будет
                обговариваться премиальное вознаграждение каждого.
            </p>

            <div class="chart">
                <ChartCard v-for="item in users" :key="item.id" :name="item.name + ' ' + item.lastname" :result="item.tickets_received" :closed="item.tickets_received" />
            </div>
        </section>

        <Navbar />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ChartCard from '@/components/ChartCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        Navbar,
        ChartCard
    },
    computed: {
        ...mapGetters({
            users: 'Session/responseUsers'
        })
    },
    methods: {
        ...mapActions('Session', ['getUsers'])
    },
    mounted() {
        this.getUsers()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.on {
    &__mobile {
        .wrapper {
            grid-template-columns: 1fr;
        }

        .heading {
            background: #ffffff;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        section {
            // border-top: 60px solid #ffffff;
            overflow: auto;
            padding: 1em;
            scrollbar-width: none;

            h1 {
                font-weight: 400;
            }
            p {
                line-height: 1.64;
                margin: 0;
                max-width: 640px;
            }
        }

        .chart {
            display: grid;
            grid-gap: 1em;
            grid-template-columns: 1fr;
            margin: 1em 0 0;
        }
    }
    &__desktop {
        .wrapper {
            grid-template-columns: var(--navbar-width) 1fr;
        }

        .heading {
            display: none;
        }

        header {
            order: -1;
        }

        section {
            padding: 2em;

            h1 {
                font-weight: 400;
            }
            p {
                line-height: 1.64;
                max-width: 720px;
            }
        }

        .chart {
            display: grid;
            grid-gap: 2em;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            margin: 4em 0 0;
        }
    }
}

.wrapper {
    display: grid;
    height: 100%;
}
</style>
