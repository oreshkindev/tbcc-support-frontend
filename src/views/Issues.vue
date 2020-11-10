<template>
    <div class="wrapper">
        <div class="heading">Issues</div>
        <section>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur provident tempora officia reiciendis porro quae doloribus dolore voluptas. Dignissimos
                aliquid corporis natus incidunt necessitatibus unde atque, at praesentium rem.
            </p>
        </section>

        <Navbar />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        Navbar
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
            overflow: auto;
            padding: 1em;

            h1 {
                font-weight: 400;
            }
            p {
                line-height: 1.64;
                margin: 0;
                max-width: 640px;
            }
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
    }
}

.wrapper {
    display: grid;
    height: 100%;
}
</style>
