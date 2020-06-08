<template>
    <main>
        <section class="c">
            <div class="container row align-items-center">
                <div class="col-sm-12 col-md-6">
                    <h1>
                        <span>{{ $t('token[0][0]') }}</span>
                        {{ $t('token[0][1]') }}
                    </h1>
                    <p>
                        {{ $t('token[0][2]') }}
                    </p>
                </div>
                <div class="col-sm-12 col-md-6">
                    <figure>
                        <img :src="require('@/assets/1731.svg')" alt="" />
                    </figure>
                    <blockquote>
                        {{ $t('token[0][3]') }}
                    </blockquote>
                </div>
            </div>
        </section>

        <section class="b">
            <main-heading :message="$t('token[1][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/1921.svg')"
                        :message="$t('token[1][1]')"
                        :body="$t('token[1][2]')"
                    />
                </div>

                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/1922.svg')"
                        :message="$t('token[1][3]')"
                        :body="$t('token[1][4]')"
                    />
                </div>

                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/1923.svg')"
                        :message="$t('token[1][5]')"
                        :body="$t('token[1][6]')"
                    />
                </div>

                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/1924.svg')"
                        :message="$t('token[1][7]')"
                        :body="$t('token[1][8]')"
                    />
                </div>

                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/1925.svg')"
                        :message="$t('token[1][9]')"
                        :body="$t('token[1][10]')"
                    />
                </div>
            </div>
        </section>

        <section class="c">
            <main-heading :message="$t('token[2][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-6">
                    <main-card
                        :id="`__01.`"
                        :message="$t('token[2][1]')"
                        :body="$t('token[2][2]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6">
                    <main-card
                        :id="`__02.`"
                        :message="$t('token[2][3]')"
                        :body="$t('token[2][4]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6">
                    <main-card
                        :id="`__03.`"
                        :message="$t('token[2][5]')"
                        :body="$t('token[2][6]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6">
                    <main-card
                        :id="`__04.`"
                        :message="$t('token[2][7]')"
                        :body="$t('token[2][8]')"
                    />
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

figure {
    margin: 2em;
    text-align: center;
    img {
        max-width: 480px;
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
}

blockquote {
    background: var(--theme-color);
    margin: 2em;
    padding: 2em 3em;
    max-width: 480px;
    border-radius: 104px;
    color: var(--text-color);

    @media only screen and (max-width: 767.98px) {
        margin: 1em;
        border-radius: 0px;
        background: hsla(163, 65%, 65%, 0.2);
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

    padding: 0 1em 0.2em;
    text-shadow: 16px 16px 4px rgba(83, 138, 122, 0.06);
}

h2 {
    font-size: 28px;
}

h3 {
    font-size: 24px;
}

h4 {
    font-size: 18px;
}
p {
    padding: 0 2em;
}

span {
    font-weight: 300;
    color: var(--theme-color);
    display: block;
    font-size: 0.86em;
    text-transform: uppercase;
    text-shadow: none;
}
</style>
