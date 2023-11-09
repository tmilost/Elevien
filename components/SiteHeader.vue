
<!-- ./components/SiteHeader.vue -->
<template>
    <nav class="site-header">
        <div class="wrapper">
            <div class="wrapper-left">
                <div class="logo">
                    <img src="../assets/Logo.svg" alt="Logo" />
                </div>
                <div class="text-competitation-name">
                    <p>
                        Competition name ·
                    </p>
                    <div class="text-competitation-date">
                        <p>
                            Date
                        </p>
                    </div>
                </div>
            </div>
            <div class="wrapper-right">
                <img src="../assets/JudgeAdminAvatar.svg" alt="Judge Admin Avatar" />
                <p>Nikola Kavezić</p>
                <img src="../assets/Arrow-down.svg" />
            </div>
        </div>
    </nav>
</template>

<style scoped>
.site-header {
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
}

.wrapper {
    display: flex;
    padding: 7px 32px;
    justify-content: space-between;
    align-items: center;
}

.wrapper-left {
    display: flex;
    width: 728.5px;
    align-items: center;
    gap: 43px;
    flex-shrink: 0;
}

.text-competitation-name {
    color: var(--bg-primary-dark, #080A0F);
    font-feature-settings: 'clig' off, 'liga' off;
    /* Web/H3 */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    display: flex;

}

.text-competitation-date {
    color: var(--text-secondary, #72747E);
    font-feature-settings: 'clig' off, 'liga' off;
    /* Web/H3 */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}

.wrapper-right {
    display: flex;
    padding: 9px 0px 7px 0px;
    flex-direction: row;
    align-items: center;
}

.wrapper-right img {
    margin-right: 8px;
}

.wrapper-right p {
    color: var(--text-primary, #080A0F);
    text-align: right;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 142.857% */
}
</style>