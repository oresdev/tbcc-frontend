<template>
    <article v-if="id" :class="['card card__text', { step: step }]">
        <span>{{ id }}</span>

        <h3>{{ message }}</h3>

        <p v-html="body"></p>
    </article>

    <article v-else-if="date" class="card card__text">
        <sup>{{ date }}</sup>

        <h3>{{ message }}</h3>

        <p v-html="body"></p>
    </article>

    <article v-else class="card">
        <figure :style="'background: url(' + pic + ') center;'"></figure>

        <h3 v-if="link">
            <router-link :to="link">{{ message }}</router-link>
        </h3>
        <h3 v-else>{{ message }}</h3>

        <p v-html="body"></p>
    </article>
</template>

<script>
export default {
    props: {
        step: {
            type: Boolean,
            default: false,
        },
        link: {
            type: String,
            default: '',
        },
        date: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        pic: {
            type: String,
            default: '',
        },
        message: {
            type: String,
            default: '',
        },
        body: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    border-radius: 5px;
    margin: 2em;
    text-align: center;
    overflow: hidden;

    &__text {
        text-align: left;
    }
}
sup {
    border: 1px solid var(--theme-color);
    border-radius: 50px;
    padding: 6px 10px;
    margin: 0 0 1em;
    display: inline-block;
    top: 0;
    line-height: inherit;
}

span {
    color: var(--theme-color);
    display: block;
    font-weight: 300;
    font-size: 28px;
    margin: 0 0 0.2em;
}

h3 {
    font-size: 1.2em;
    text-transform: uppercase;
    line-height: 1.4;

    a {
        border-bottom: 3px solid transparent;
        color: inherit;
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
            border-bottom: 3px solid var(--theme-color);
        }
    }
}

figure {
    background-size: contain !important;
    background-repeat: no-repeat !important;
    display: block;
    margin: 0 0 2em;
    min-height: 240px;
    img {
        max-width: 220px;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        image-rendering: optimizequality;
    }
}

.step {
    text-align: right !important;
}
</style>
