import Xbox from "../img/platforms/xbox.svg";
import Sega from "../img/platforms/sega.svg";
import Linux from "../img/platforms/linux.svg";
import PC from "../img/platforms/windows.svg";
import Android from "../img/platforms/android.svg";
import Ps from "../img/platforms/psLogo.svg";
import Nintendo from "../img/platforms/nintendo.svg";
import Wii from "../img/platforms/wii.svg";
import WiiU from "../img/platforms/wiiU.svg";
import Switch from "../img/platforms/switch.svg";
import Mac from "../img/platforms/mac.svg";
import Ios from "../img/platforms/ios.svg";




const addSvg = (platform: string): string => {
    let svg: string;

    switch (platform) {
        case 'Dreamcast':
            svg = `${Sega}`;
            break;
        case 'Xbox':
            svg = `${Xbox}`;
            break;
        case 'Xbox 360':
            svg = `${Xbox}`;
            break;
        case 'Xbox One':
            svg = `${Xbox}`;
            break;
        case 'Xbox Series S/X':
            svg = `${Xbox}`;
            break;
        case 'Linux':
            svg = `${Linux}`;
            break;
        case 'PC':
            svg = `${PC}`;
            break;
        case 'Android':
            svg = `${Android}`;
            break;
        case 'Classic Macintosh':
            svg = `${Mac}`;
            break;
        case 'macOS':
            svg = `${Mac}`;
            break;
        case 'iOS':
            svg = `${Ios}`;
            break;
        case 'PlayStation':
            svg = `${Ps}`;
            break;
        case 'PS Vita':
            svg = `${Ps}`;
            break;
        case 'PlayStation 2':
            svg = `${Ps}`;
            break;
        case 'PlayStation 3':
            svg = `${Ps}`;
            break;
        case 'PlayStation 4':
            svg = `${Ps}`;
            break;
        case 'PlayStation 5':
            svg = `${Ps}`;
            break;
        case 'Nintendo 64':
            svg = `${Nintendo}`;
            break;
        case 'Nintendo Wii':
            svg = `${Wii}`;
            break; 
        case 'Wii U':
            svg = `${WiiU}`;
            break; 
        case 'Nintendo Switch':
            svg = `${Switch}`;
            break;
            
        default: 
            svg = ''; 
            break;
    }
    return `${svg}`;
}
export default addSvg;