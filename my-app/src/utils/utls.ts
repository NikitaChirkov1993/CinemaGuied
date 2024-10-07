

export const firstLetter = (firstName?: string, firstSurname?: string) => {
    return {
        firstName: firstName ? firstName[0] : "",  // Если firstName не undefined, вернуть первый символ, иначе пустую строку
        firstSurname: firstSurname ? firstSurname[0] : ""  // Если firstSurname не undefined, вернуть первый символ, иначе пустую строку
    };
};