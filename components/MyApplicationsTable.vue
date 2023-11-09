<script setup>
import CountryFlag from 'vue-country-flag-next'

const props = defineProps({
    gymnastsArray: Array
})


function convertDateAndTime(utc) {
    const date = new Date(utc);
    return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + '.' + ' ' + date.getHours() + ':' + date.getMinutes();
}

function convertDate(utc) {
    const date = new Date(utc);
    return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + '.';
}

let curentOpenDropDownId = ref(0);

function openAndCloseDropDown(id) {
    curentOpenDropDownId.value = id;
}
</script>


<template>
    <div class="my-applications-table">
        <div class="search-bar">

            <div class="search-input">
                <img class="search-input-image" src="../assets/Search.svg" />
                <input class="search-input-iner" placeholder="Search gymnasts" />
            </div>

            <select name="Discipline" class="drop-down-search">
                <option>
                    Discipline: All
                </option>
            </select>
            <select name="Program" class="drop-down-search">
                <option>
                    Program: All
                </option>
            </select>
            <select name="Category" class="drop-down-search">
                <option>
                    Category: All
                </option>
            </select>
            <select name="Status" class="drop-down-search">
                <option>
                    Status: All
                </option>
            </select>
        </div>
        <div class="table-headline">
            All requests
        </div>
        <div class="table">
            <div class="table-head">
                <div class="table-head-name">Name</div>
                <div class="table-head-discipline">Discipline</div>
                <div class="table-head-program">Program</div>
                <div class="table-head-category">Category</div>
                <div class="table-head-team">Team</div>
                <div class="table-head-status">Status</div>
                <div class="table-head-date">Date</div>
            </div>

            <div class="table-body" v-for="gymnast in gymnastsArray" :key="gymnast.id">
                <div class="table-body-name">
                    {{ gymnast.firstName + ' ' }}{{ gymnast.lastName }}
                    <div>
                        <country-flag :country="gymnast.country" size="small" />
                        {{ gymnast.club }}
                    </div>

                </div>
                <div class="table-body-part">
                    <div class="table-body-part-one">
                        <div class="table-head-discipline">{{ gymnast.discipline }}</div>
                        <div class="table-head-program">{{ gymnast.programName }}</div>
                        <div class="table-head-category">{{ gymnast.categoryName }}</div>
                        <div class="table-head-team">{{ gymnast.teamName }}</div>
                        <div class="table-head-status">{{ gymnast.status }}</div>
                        <div class="table-head-date">{{ convertDateAndTime(gymnast.date) }}</div>
                    </div>
                    <div class="table-body-part-two" v-if="curentOpenDropDownId === gymnastsArray.indexOf(gymnast)">
                        <div class="table-head-discipline"> </div>
                        <div>
                            <div>Date of birth: {{ convertDate(gymnast.dateOfBirth) }}</div>
                            <div>Phone number: {{ gymnast.phone }}</div>
                        </div>

                    </div>
                </div>
                <div class="drop-arow">
                    <img v-if="curentOpenDropDownId != gymnastsArray.indexOf(gymnast)" src="../assets/Arrow-down.svg"
                        alt="arrow down" @click="openAndCloseDropDown(gymnastsArray.indexOf(gymnast))">
                    <img v-else src="../assets/Arrow-up.svg" alt="arrow up" @click="openAndCloseDropDown(999)">
                </div>

            </div>

        </div>
    </div>
</template>

<style>
.my-applications-table {
    margin: 17px 49px 0 52px;
}
.search-bar {
    display: flex;
    flex-direction: row;
    gap: 12px;
}
.search-input {
    width: 238px;
    border-radius: 4px;
    border: 1px solid var(--dividers-and-strokes-medium, #D6D5DC);
    background: var(--bg-base, #FFF);
}
.search-input-image {
    position: relative;
    margin-left: 8px;
    width: 24px;
    top:2px;
}
.search-input-iner {
    width: 190px;
    border: none;
    height: 20px;
    position: relative;
    bottom: 4px;
    color: var(--text-secondary-light, #B2B2B8);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}
*:focus {
    outline: none;
}
.drop-down-search {
    border: none;
    color: var(--text-primary-light, #38354D);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}
.table-headline {
    margin: 27px 0 13px 0;
    color: var(--text-primary, #080A0F);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
}
.table {
    border-radius: 8px;
    border: 0.5px solid var(--dividers-and-strokes-medium, #D6D5DC);
}
.table-head {
    display: flex;
    flex-direction: row;
    height: 48px;
    background: var(--bg-table-header, #EAE9EF);
    border-radius: 8px 8px 0px 0px;
    color: var(--text-primary-light, #38354D);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
}
.table-head-name {
    align-self: center;
    width: 217px;
    margin-left: 27px;
}
.table-head-discipline {
    align-self: center;
    width: 99px;
}
.table-head-program {
    align-self: center;
    width: 177px;
}
.table-head-category {
    align-self: center;
    width: 156px;
}
.table-head-team {
    align-self: center;
    width: 172px;
}
.table-head-status {
    align-self: center;
    width: 139px;
}
.table-head-date {
    align-self: center;
    width: 111px;
}
.table-body {
    display: flex;
    flex-direction: row;
}
.table-body-name {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    height: 42px;
    width: 217px;
    margin-left: 27px;
    padding-top: 9px;
}
.table-body-part {
    display: flex;
    flex-direction: column;
}
.table-body-part-one {
    margin: 14px 0 17px 0;
    display: flex;
    flex-direction: row;
    height: 42px;
}
.table-body-part-two {
    display: flex;
    flex-direction: row;
    border-top: 1px solid #D9D9D9;
    padding: 15px 0 19px 0;
}
.drop-arow {
    margin: 15px 19px 0 auto;
}
</style>