
function GetSeasonIcon () {
    const d = new Date();
    const month = d.getMonth();
    if( month >= 11 && month <= 0 ) { return "⛄" }
    if( month >= 1 && month <= 2) { return "🌲" }
    if( month >= 3 && month <= 6 ) { return "🌞" }
    if( month >= 7 && month <= 10) { return "☔" }
}

export default GetSeasonIcon;