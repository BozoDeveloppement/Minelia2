import config from './utils/config.js';
import database from './utils/database.js';
import logger from './utils/logger.js';
import slider from './utils/slider.js';

export {
    config as config,
    database as database,
    logger as logger,
    changePanel as changePanel,
    addAccount as addAccount,
    slider as Slider,
    accountSelect as accountSelect
}

function changePanel(id) {
    let panel = document.querySelector(`.${id}`);
    let active = document.querySelector(`.active`)
    if (active) active.classList.toggle("active");
    panel.classList.add("active");
}

function addAccount(data) {
    let div = document.createElement("div");
    div.classList.add("account");
    div.id = data.uuid;
    div.innerHTML = `
        <div class="accouunt-profil">Profil :</div>
        <img class="account-image" src="https://oralia-mc.fr/api/skin-api/avatars/combo/${data.name}">
        <div class="account-subname">Pseudo :</div>
        <div class="account-name">${data.name}</div>
        <div class="account-subuuid">UUID :</div>
        <div class="account-uuid"> ${data.uuid}</div>
        <div class="account-delete">Déconnection</div>
    `
    document.querySelector('.accounts').appendChild(div);
}

function accountSelect(uuid) {
    let account = document.getElementById(uuid);
    let pseudo = account.querySelector('.account-name').innerText;
    let activeAccount = document.querySelector('.active-account')

    if (activeAccount) activeAccount.classList.toggle('active-account');
    account.classList.add('active-account');
    headplayer(pseudo);
}

function headplayer(pseudo) {
    let div = document.createElement("div");
    div.classList.add("accountHome");
    div.innerHTML = `
        <div class="accountHome-name">${pseudo}</div>
    `
    document.querySelector(".accountsHome").appendChild(div)
    document.querySelector(".player-head").style.backgroundImage = `url(https://minotar.net/helm/${pseudo}/100)`;
}