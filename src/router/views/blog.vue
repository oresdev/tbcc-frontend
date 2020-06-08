<template>
    <main>
        <section class="c">
            <main-heading :message="$t('blog[0][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/blank.svg')"
                        :message="$t('blog[1][0]')"
                        :link="`/blog/post/1`"
                        :body="$t('blog[1][1]') + `..`"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/blank.svg')"
                        :message="$t('blog[1][2]')"
                        :link="`/blog/post/2`"
                        :body="$t('blog[1][3]') + `..`"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/blank.svg')"
                        :message="$t('blog[1][4]')"
                        :link="`/blog/post/3`"
                        :body="$t('blog[1][5]') + `..`"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/blank.svg')"
                        :message="$t('blog[1][6]')"
                        :link="`/blog/post/4`"
                        :body="$t('blog[1][7]') + `..`"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :pic="require('@/assets/blank.svg')"
                        :message="$t('blog[1][8]')"
                        :link="`/blog/post/5`"
                        :body="$t('blog[1][9]') + `..`"
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

.heading {
    justify-content: start !important;
    margin: 2em auto 6em !important;

    @media only screen and (max-width: 767.98px) {
        margin: 0em auto !important;
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

span {
    color: var(--theme-color);
    text-transform: uppercase;
}
</style>
