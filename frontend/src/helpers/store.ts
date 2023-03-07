import AppStore from "../img/stores/appStore.svg";
import EpicGames from "../img/stores/epicGame.svg";
import NintendoStore from "../img/stores/nintendoStore.svg";
import PsStore from "../img/stores/psStore.svg";
import XboxStore from "../img/stores/xboxStore.svg";
import Steam from "../img/stores/steam.svg";
import Gog from "../img/stores/gogStore.svg";
import ItchStore from "../img/stores/itchStore.svg";

const addStore = (store: string): string => {
    let svg: string;

    switch (store) {
        case 'Epic Games':
            svg = `${EpicGames}`;
            break;
        case 'Nintendo Store':
            svg = `${NintendoStore}`;
            break;
        case 'App Store':
            svg = `${AppStore}`;
            break;
        case 'Steam':
            svg = `${Steam}`;
            break;
        case 'PlayStation Store':
            svg = `${PsStore}`;
            break;
        case 'Xbox Store':
            svg = `${XboxStore}`;
            break;
        case 'Xbox 360 Store':
            svg = `${XboxStore}`;
            break;
        case 'GOG':
            svg = `${Gog}`;
            break;
        case 'itch.io':
            svg = `${ItchStore}`;
            break;
        default: 
            svg = ''; 
            break;
    }
    return `${svg}`;
}
export default addStore;