<script setup lang="ts">
import CountryFlag from 'vue-country-flag-next';
import { countriesJson } from '../countryJSON.js';
import { defineEmits } from 'vue';

interface InputValues {
    firstName: string;
    lastName: string;
    country: string;
    program: string;
    dateOfBirth: string;
    club: string;
    team: string;
    phone: string;
}

const emit = defineEmits(['closeModal']);

const firstName = ref < string > ("");
const lastName = ref < string > ("");
const country = ref < string > ("");
const program = ref < string > ("");
const dateOfBirth = ref < string > ("");
const club = ref < string > ("");
const team = ref < string > ("");
const phone = ref < string > ("");
// @ts-ignore
const inputValues = ref < InputValues > ({});
// @ts-ignore
let { data: countries } = await useFetch('https://elevien-fe-job.free.beeceptor.com/countries').catch((error) => console.log(error.data));
// @ts-ignore
if (countries !== []) {
    countries = countriesJson;
}

async function addGymnast() {
    // @ts-ignore
    inputValues.value = {
        firstName: firstName.value,
        lastName: lastName.value,
        country: country.value,
        program: program.value,
        dateOfBirth: dateOfBirth.value,
        club: club.value,
        team: team.value,
        phone: phone.value
    };
    await $fetch('https://elevien-fe-job.free.beeceptor.com/application', {
        method: 'POST',
        // @ts-ignore
        body: inputValues.value
    });
    emit('closeModal');
}

const codeTrack = ref < string > ('');
const code = computed(() => {
    if (country.value) {
         // @ts-ignore
        codeTrack.value = countries.find(x => x.name === country.value);
        // @ts-ignore
        return codeTrack.value.code;
    } else {
        return 'HR';
    }
});

const phoneCodeTrack = ref < string > ("");
const phoneCode = computed(() => {
    if (country.value) {
        // @ts-ignore
        phoneCodeTrack.value = countries.find(x => x.name === country.value);
        // @ts-ignore

        return phoneCodeTrack.value.phoneCode;
    } else {
        return '381';
    }
});
</script>

<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="x-close-button" @click="$emit('closeModal')">
                <img src="../assets/close.svg" alt="X">
            </div>
            <div class="headline">
                <p>Apply gymnast</p>
            </div>
            <div class="row">
                <div class="first-row-name">
                    <p>
                        First name
                    </p>
                    <input type="text" placeholder="Enter name" v-model="firstName">
                </div>
                <div class="first-row-last-name">
                    <p>
                        Last name
                    </p>
                    <input type="text" placeholder="Enter last name" v-model="lastName">
                </div>
                <div class="first-row-country">
                    <p>
                        Country
                    </p>
                    <div class="country">
                        <div class="country-flag">
                            <country-flag :country="code" size="normal" />
                        </div>
                        <select name="country" id="country" v-model="country">
                            <option v-for="country in countries" :key="countries.indexOf(country)" :value="country.name">
                                {{ country.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="second-row-program-category">
                    <p>
                        Program and category
                    </p>
                    <select name="cars" id="cars" v-model="program">
                        <option value="volvo">Obavezni program - Mlađe djevojčice </option>
                    </select>
                </div>
                <div class="second-row-date-birth">
                    <p>
                        Date of birth
                    </p>

                    <input v-model="dateOfBirth" type="text" placeholder="Enter date">
                </div>
            </div>

            <div class="row">
                <div class="third-row-club">
                    <p>
                        Club (optional)
                    </p>
                    <input v-model="club" type="text" placeholder="Enter club name">
                </div>
                <div class="third-row-date-team">
                    <p>
                        Team (optional)
                    </p>
                    <input v-model="team" type="text" placeholder="Team name">
                </div>
            </div>
            <div class="forth-row">
                <div class="first-row-name">
                    <div>
                        <p>
                            Phone (optional)
                        </p>
                    </div>

                    <div class="search-input">
                        <div class="search-input-phone"> +{{ phoneCode }}</div>
                        <input class="search-input-iner" v-model="phone" type="text" placeholder="Phone Number">
                    </div>
                </div>
            </div>
            <div class="buttons-save-cancel">
                <button class="buttons-cancel" @click="$emit('closeModal')"> Cancel</button>
                <button class="buttons-save" @click="addGymnast">
                    <div class="buttons-save-text">Save</div>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: var(--overlay-medium, rgba(34, 37, 52, 0.60));
}

.modal {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    width: 554px;
    height: 506px;
    flex-shrink: 0;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 8px;
    background: #FFF;
    padding: 28px 43px 22px 43px;
}

.x-close-button {
    position: absolute;
    margin: 0 0 0 545px;
}

.headline p {
    margin: 0 0 35px 0;
    float: left;
    color: var(--text-primary-light, #38354D);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
}

input {
    border-radius: 4px;
    border: 1px solid var(--dividers-and-strokes-medium, #D6D5DC);
    background: var(--bg-base, #FFF);
    display: flex;
    padding: 8px 10px;
}

::placeholder {
    color: var(--text-secondary-light, #B2B2B8);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

select {
    height: 36px;
    padding: 6px 8px;
    border-radius: 4px;
    border: 1px solid var(--dividers-and-strokes-medium, #D6D5DC);
    background: var(--bg-base, #FFF);
    float: left;
}

.row {
    display: flex;
    flex-direction: row;
    padding-bottom: 25px;
}

p {
    margin-bottom: 5px;
    float: left;
    display: flex;
    justify-content: flex-start;
    color: var(--text-primary-light, #38354D);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
}

.first-row-name {
    display: flex;
    flex-direction: column;
    width: 185px;
    margin-right: 10px;
}

.first-row-last-name {
    display: flex;
    flex-direction: column;
    width: 223px;
    margin-right: 8px;
}

.first-row-country {
    display: flex;
    flex-direction: column;
    width: 109px;
}

.country {
    display: flex;
    flex-direction: row;
    width: 109px;
    border-radius: 4px;
    border: 1px solid var(--dividers-and-strokes-medium, #D6D5DC);
    background: var(--bg-base, #FFF);
}

.country-flag {
    margin: 0 0 0 5px;
    position: relative;
    bottom: 3px;
}

.first-row-country select {
    width: 70px;
    height: 33px;
    border: none;
    margin-left: auto;
}

.second-row-program-category {
    display: flex;
    flex-direction: column;
    width: 387px;
    margin-right: 19px;
}

.second-row-date-birth {
    display: flex;
    flex-direction: column;
    width: 127px;
}

.second-row-date-birth input {
    height: 18px;
}

.third-row-club {
    display: flex;
    flex-direction: column;
    width: 266px;
    margin-right: 12px;
}

.third-row-date-team {
    display: flex;
    flex-direction: column;
    width: 254px;
}

.forth-row {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #D6D5DC;
    padding-bottom: 30px;
}

.forth-row input {
    width: 173px;
}

.buttons-save-cancel {
    display: flex;
    margin: 16px 0 22px auto;
    gap: 10px;
}

.buttons-cancel {
    border: 0;
    background: none;
    color: var(--text-primary-light, #38354D);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
}

.buttons-save {
    border-radius: 6px;
    border: 0;
    padding: 12px 24px;
    background: var(--basic-primary, #FF2B51);
}

.buttons-save-text {
    color: var(--basic-on-primary, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
}

input {
    height: 18px;
}

.search-input {
    display: flex;
    flex-direction: row;
    width: 238px;
    border-radius: 4px;
    border: 1px solid var(--dividers-and-strokes-medium, #D6D5DC);
    background: var(--bg-base, #FFF);
}

.search-input-phone {
    margin-left: 8px;
    width: 34px;
    margin-top: 7px;
}

.search-input-iner {
    float: right;
    width: 190px;
    border: none;
    position: relative;
    bottom: 0px;
    color: var(--text-secondary-light, #B2B2B8);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}
</style>