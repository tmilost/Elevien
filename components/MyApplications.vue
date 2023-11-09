<template>
    <header>
        <div class="header">
            <div class="header-left">
                <p>
                    My Applications
                </p>
            </div>
            <div class="header-right">
                <button class="new-applicant" @click="$emit('openModal')">
                    <p>New application</p>
                </button>
                <div class="open">
                    <img src="../assets/Ellipse.svg" alt="Ellipse" />
                    <p>Open</p>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 49px 0 52px;
    border-bottom: 1px solid #D6D5DC;
}

.header-left p {
    color: var(--bg-primary-dark, #080A0F);
    font-feature-settings: 'clig' off, 'liga' off;
    /* Web/H1 */
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    /* 106.25% */
    letter-spacing: -1px;
}

.header-right {
    display: flex;
    flex-direction: row;
}

.new-applicant {
    display: inline-flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 6px;
    background: var(--basic-primary, #FF2B51);
    border: 0;
    height: 42px;
    margin-right: 10px;
}

.new-applicant p {
    color: var(--basic-on-primary, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    /* Web/button text lg */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    /* 112.5% */
    height: 18px;
}

.open {
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    background: var(--bg-disabled-checkbox, #EEF1F4);
    width: 90px;
    height: 42px;
}

.open img {
    margin: 16px 16px 16px 14px;
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    fill: var(--utilities-success, #27C200);
}

.open p {
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;

}
</style>