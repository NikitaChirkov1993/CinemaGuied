import email from "/imgs/authIcon/email.svg";
import login from "/imgs/authIcon/login.svg";
import nameSurname from "/imgs/authIcon/nameSurname.svg";



// export const dataAuth = [
//     {
//         id: 1,
//         img: email,
//         placeholder: "Электронная почта",
//         imgClose:close,
//     },
//     {
//         id: 2,
//         img: nameSurname,
//         placeholder1: "Имя",
//         placeholder2: "Фамилия",
//     },
//     {
//         id: 3,
//         img: login,
//         placeholder1: "Пароль",
//         placeholder2: "Подтвердить пароль",
//     },

// ]
export const dataAuth = {
    imgEmail: email,
    imgNameSurnume: nameSurname,
    imgPass: login,
    placeholderEmail:"Электронная почта",
    placeholderName: "Имя",
    placeholderSurnume: "Фамилия",
    placeholderPass: "Пароль",
    placeholderPassRepeat: "Подтвердить пароль",
}


// <InputAuth
//                             auth={isRegister.email}
//                             setAuth={setIsRegister}
//                             isName="email"
//                             img={dataAuth.imgEmail}
//                             placeholder={dataAuth.placeholderEmail}
//                             setErrorMassage={setErrorMassage}
//                             flagError={flagError}
//                             setFlagError={setFlagError}
//                             type="text"
//                             flagPass={flagPass}
//                             setFlagPass={setFlagPass}
//                         />

//                         <InputAuth
//                             auth={isRegister.name}
//                             setAuth={setIsRegister}
//                             isName="name"
//                             img={dataAuth.imgNameSurnume}
//                             placeholder={dataAuth.placeholderName}
//                             setErrorMassage={setErrorMassage}
//                             flagError={flagError}
//                             setFlagError={setFlagError}
//                             type="text"
//                             flagPass={flagPass}
//                             setFlagPass={setFlagPass}
//                         />

//                         <InputAuth
//                             auth={isRegister.surname}
//                             setAuth={setIsRegister}
//                             isName="surname"
//                             img={dataAuth.imgNameSurnume}
//                             placeholder={dataAuth.placeholderSurnume}
//                             setErrorMassage={setErrorMassage}
//                             flagError={flagError}
//                             setFlagError={setFlagError}
//                             type="text"
//                             flagPass={flagPass}
//                             setFlagPass={setFlagPass}
//                         />

//                         <InputAuth
//                             auth={isRegister.password}
//                             setAuth={setIsRegister}
//                             isName="password"
//                             img={dataAuth.imgPass}
//                             placeholder={dataAuth.placeholderPass}
//                             setErrorMassage={setErrorMassage}
//                             flagError={flagError}
//                             setFlagError={setFlagError}
//                             type="password"
//                             flagPass={flagPass}
//                             setFlagPass={setFlagPass}
//                         />

//                         <InputAuth
//                             auth={isRegister.passwordRepeat}
//                             setAuth={setIsRegister}
//                             isName="passwordRepeat"
//                             img={dataAuth.imgPass}
//                             placeholder={dataAuth.placeholderPassRepeat}
//                             setErrorMassage={setErrorMassage}
//                             flagError={flagError}
//                             setFlagError={setFlagError}
//                             type="password"
//                             flagPass={flagPass}
//                             setFlagPass={setFlagPass}
//                         />