

export const firstLetter = (firstName?: string, firstSurname?: string) => {
    return {
        firstName: firstName ? firstName[0] : "",  // Если firstName не undefined, вернуть первый символ, иначе пустую строку
        firstSurname: firstSurname ? firstSurname[0] : ""  // Если firstSurname не undefined, вернуть первый символ, иначе пустую строку
    };
};


export const getRatingColor = (rating: number) => {
    if (rating >= 0 && rating <= 4.2) return "#c82020";
    if (rating > 4.3 && rating <= 6.3) return "#777";
    if (rating > 6.3 && rating <= 7.5) return "#308e21";
    if (rating > 7.5 && rating <= 10) return "#a59400";
    return "black";
};