<template>
    <main>
        <section class="c">
            <div class="container row align-items-center">
                <div class="col-sm-12">
                    <h1>
                        <span>{{ $t('errors[0][0]') }}</span>
                        {{ $t('errors[0][1]') }}
                    </h1>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
    section {
        .container {
            margin: 1em auto;
            max-width: 1480px;
        }
    }
}

.c {
    &::before {
        content: '';
        background: var(--theme-color);
        mask-image: url('~@/assets/c.svg');
        mask-repeat: no-repeat;
        mask-size: 780px;
        mask-position: right top;
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

h1,
h2,
h3,
h4 {
    font-weight: 300;
    text-transform: uppercase;
}

h1 {
    font-size: 36px;
    letter-spacing: 1px;
    margin: 3em 0;
    padding: 0 1em 0.2em;
    text-shadow: 16px 16px 4px rgba(83, 138, 122, 0.06);

    @media only screen and (max-width: 767.98px) {
        margin: 0;
    }
}
p {
    padding: 0 2em;
}

span {
    font-family: 'Montserrat-UltraLight';
    color: var(--theme-color);
    display: block;
    font-size: 1.86em;
    text-transform: uppercase;
    text-shadow: none;
}
</style>
