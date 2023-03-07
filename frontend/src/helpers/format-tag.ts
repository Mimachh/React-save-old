const formatTag = (tag: string): string => {
    let color: string;

    switch (tag) {
        case 'Horror':
            color = 'black';
            break;
        case 'Singleplayer':
            color = 'red';
            break;
        default: 
            color = 'grey'; 
            break;
    }
    return `chip ${color}`;
}
export default formatTag;