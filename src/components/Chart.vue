<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 100" width="160" height="160" :stroke-width="size">
        <g>
            <circle id="background" :r="r" cy="81" cx="81"></circle>
            <circle id="percent" :r="r" :stroke-dashoffset="offset" :stroke-dasharray="circumference" cy="81" cx="81" transform="rotate(-90 81 81)"></circle>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{{ prefix }}{{ percentage }}</text>
        </g>
    </svg>
</template>

<script>
export default {
    data: function() {
        return {
            r: 60,
            offset: 0
        }
    },
    props: {
        percentage: {
            default: 0,
            required: false,
            type: Number
        },
        maximum: {
            default: 100,
            required: false,
            type: Number
        },
        size: {
            default: 12,
            required: false,
            type: Number
        },
        prefix: {
            default: '',
            required: false,
            type: String
        },
        suffix: {
            default: '%',
            required: false,
            type: String
        }
    },
    computed: {
        circumference: function() {
            return 2 * Math.PI * this.r
        }
    },
    methods: {
        percentageToDashOffset: function(n) {
            return (this.circumference / 100) * (100 - n)
        },
        updateDonutValue: function(n) {
            this.offset = this.percentageToDashOffset(n)
        }
    },
    watch: {
        percentage: function(newValue, oldValue) {
            this.updateDonutValue(newValue)
        }
    },
    mounted: function() {
        this.updateDonutValue(0)
        this.originalPercentage = this.percentage
        setTimeout(() => {
            if (this.percentage < this.maximum) {
                this.updateDonutValue(this.percentage)
            }
        }, 10)
    }
}
</script>

<style lang="scss" scoped>
svg {
    cursor: default;
    #background {
        fill: none;
        stroke: var(--main-background);
    }

    #percent {
        fill: none;
        stroke: #42b983;
        transition: stroke-dashoffset 1s ease;
    }
    font-size: 2em;
}
</style>
