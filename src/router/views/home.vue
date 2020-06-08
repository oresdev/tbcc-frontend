<template>
    <main>
        <section class="a">
            <div class="container row">
                <div class="col-sm-12">
                    <main-heading
                        :title="$t('main[0][0]')"
                        :message="$t('main[0][1]')"
                        :body="$t('main[0][2]')"
                    />
                </div>
            </div>
        </section>

        <section class="b">
            <main-heading :message="$t('main[1][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/201.svg')"
                        :message="$t('main[1][1]')"
                        :body="$t('main[1][2]')"
                    />
                </div>

                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/202.svg')"
                        :message="$t('main[1][3]')"
                        :body="$t('main[1][4]')"
                    />
                </div>

                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/203.svg')"
                        :message="$t('main[1][5]')"
                        :body="$t('main[1][6]')"
                    />
                </div>
            </div>
        </section>

        <section class="c">
            <main-heading :message="$t('main[2][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :id="`__01.`"
                        :message="$t('main[2][1]')"
                        :body="$t('main[2][2]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :id="`__02.`"
                        :message="$t('main[2][3]')"
                        :body="$t('main[2][4]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :id="`__03.`"
                        :message="$t('main[2][5]')"
                        :body="$t('main[2][6]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :id="`__04.`"
                        :message="$t('main[2][7]')"
                        :body="$t('main[2][8]')"
                    />
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4">
                    <main-card
                        :id="`__05.`"
                        :message="$t('main[2][9]')"
                        :body="$t('main[2][10]')"
                    />
                </div>
            </div>
        </section>

        <section class="d">
            <main-heading :message="$t('main[3][0]')" />

            <div class="container row">
                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/blank.svg')"
                        :message="$t('main[3][1]')"
                        :link="`/blog/post/1`"
                        :body="$t('main[3][2]') + `..`"
                    />
                </div>

                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/blank.svg')"
                        :message="$t('main[3][3]')"
                        :link="`/blog/post/2`"
                        :body="$t('main[3][4]') + `..`"
                    />
                </div>

                <div class="col-sm-12 col-md-4">
                    <main-card
                        :pic="require('@/assets/blank.svg')"
                        :message="$t('main[3][5]')"
                        :link="`/blog/post/3`"
                        :body="$t('main[3][6]') + `..`"
                    />
                </div>
            </div>
        </section>

        <section class="e">
            <main-heading :message="$t('main[4][0]')" />

            <div class="container row roadmap">
                <div class="col-sm-12 col-md-6">
                    <main-card :date="`Q2-Q3 2020`" :body="$t('main[4][1]')" />
                </div>

                <div class="col-sm-12 col-md-6 d-none d-md-block">
                    <main-card :id="`__01.`" />
                </div>

                <div class="col-sm-12 col-md-6 d-none d-md-block">
                    <main-card :id="`.02__`" step />
                </div>

                <div class="col-sm-12 col-md-6">
                    <main-card :date="`Q4 2020`" :body="$t('main[4][2]')" />
                </div>

                <div class="col-sm-12 col-md-6">
                    <main-card :date="`Q1 2021`" :body="$t('main[4][3]')" />
                </div>

                <div class="col-sm-12 col-md-6 d-none d-md-block">
                    <main-card :id="`__03.`" />
                </div>

                <div class="col-sm-12 col-md-6 d-none d-md-block">
                    <main-card :id="`.04__`" step />
                </div>

                <div class="col-sm-12 col-md-6">
                    <main-card :date="`Q2 2021`" :body="$t('main[4][4]')" />
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

.a {
    &::before {
        content: '';
        background: var(--theme-color);
        mask-image: url('~@/assets/a.svg');
        mask-repeat: no-repeat;
        mask-size: contain;
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

.c {
    &::before {
        content: '';
        background: var(--theme-color);
        mask-image: url('~@/assets/c.svg');
        mask-repeat: no-repeat;
        mask-size: contain;
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

.e {
    &::before {
        content: '';
        background: var(--theme-color);
        mask-image: url('~@/assets/e.svg');
        mask-repeat: no-repeat;
        mask-size: contain;
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

.roadmap {
    position: relative;

    &::before {
        content: '';
        background-color: #bababa;
        width: 1px;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 20px;

        @media only screen and (max-width: 767.98px) {
            content: none;
        }
    }

    &::after {
        content: '';
        background-color: var(--theme-color);
        width: 3px;
        height: 30%;
        position: absolute;
        left: 49.999%;
        top: 20px;

        @media only screen and (max-width: 767.98px) {
            content: none;
        }
    }

    .col-md-6 {
        align-self: center;
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
