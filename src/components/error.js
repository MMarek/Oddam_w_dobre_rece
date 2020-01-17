// .giveThingsAway {
//     height: 30rem;
//
//
// @media only screen and (max-width: 670px) {
//         height: 100%
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         height: 53.3125rem;
//         background-image: url("./../../assets/Form-Hero-Image.jpg");
//         background-size: contain;
//         background-repeat: no-repeat;
//     }
//
//
// &:before {
//         content: "";
//         background-image: url("./../../assets/Form-Hero-Image.jpg");
//         background-size: contain;
//         background-repeat: no-repeat;
//         opacity: 0.2;
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: -2;
//     }
// @media only screen and (min-width: 1025px) {
//         content: "";
//     }
//
//
// .giveThingsAwayHeader {
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-end;
//         align-items: flex-end;
//         margin-right: 9rem;
//     }
//
//
// .giveThingsAwayWelcome {
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-end;
//         align-items: flex-end;
//         width: 95%;
//
//
//     .giveThingsAwayText {
//             margin-left: 2rem;
//             height: 30rem;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             align-items: flex-start;
//
//
//         @media only screen and (min-width: 1025px) {
//                 justify-content: center;
//                 align-items: center;
//                 height: 40rem;
//             }
//
//
//             h2 {
//                 font-family: $font-base;
//                 letter-spacing: -0.76px;
//                 color: $buttonBorder;
//                 font-size: 2.375rem;
//                 width: 70%;
//                 line-height: 3.4375rem;
//                 margin-bottom: 2.5rem;
//
//
//             @media only screen and (min-width: 1025px) {
//                     text-align: center;
//                 }
//             }
//
//
//             h3 {
//                 text-align: center;
//                 font-family: $font-base;
//                 color: $buttonBorder;
//                 font-size: 2.5rem;
//                 font-weight: 300;
//                 margin-top: 1.25rem;
//             }
//         }
//     }
// }
//
//
// .giveThingsAwaySteps {
//     display: flex;
//
//
//     li {
//         position: relative;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         font-size: 1.375rem;
//         font-weight: 300;
//         color: $buttonBorder;
//         font-family: $font-base;
//         margin: 3.125rem 1.5rem;
//
//
//         span {
//             margin-bottom: 0.625rem;
//         }
//
//
//     .square {
//             position: absolute;
//             border: 0.75px solid $buttonBorder;
//             width: 7rem;
//             height: 7rem;
//             transform: rotate(45deg);
//             top: -0.2rem;
//         }
//     }
// }
//
//
// .warningStep {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     background: $registerBorderColor;
//     height: 11.1875rem;
//     line-height: 1.875rem;
//     font-family: $font-base;
//     position: relative;
//
//
// @media only screen and (max-width: 670px) {
//         height: 100%;
//     }
//
//
//     img {
//         width: 3rem;
//         height: 3rem;
//         position: absolute;
//         left: 3rem;
//         top: 3rem;
//     }
//
//
//     h2 {
//         font-size: 1.8rem;
//         margin: 0 7rem;
//     @media only screen and (max-width: 670px) {
//             margin-top: 1rem;
//         }
//     }
//
//
//     p {
//         font-size: 1.2rem;
//         margin: 0 7rem;
//
//
//     @media only screen and (max-width: 670px) {
//             margin: 1rem 2rem 1rem 7rem;
//         }
//     }
//
//
// .warning {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         h2 {
//             font-size: 2.25rem;
//             margin: 0 8.875rem;
//         }
//
//
//         p {
//             font-size: 1.375rem;
//             margin: 0 8.875rem;
//         }
//     }
// }
//
//
// .steps {
//     font-family: $font-base;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     height: 40rem;
//     background-image: url("./../../assets/Background-Form.jpg");
//
//
// @media only screen and (max-width: 670px) {
//         align-items: center;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         height: 55.1875rem;
//     }
//
//
// .stepNum {
//         margin: 0 4.375rem 6rem 8.875rem;
//         font-size: 1.5rem;
//         font-weight: 300;
//     }
//
//
// .choose {
//         font-size: 2.25rem;
//         margin-left: 8.875rem;
//     }
//
//
// .radioForm {
//         margin: 0 3.125rem 3.5rem 5.875rem;
//
//
//     @media only screen and (max-width: 670px) {
//             margin: 0 1.5rem 3.5rem 1.5rem;
//         }
//
//
//     @media only screen and (min-width: 1025px) {
//             margin: 0 3.125rem 3.125rem 8.875rem;
//
//
//         .radioOptions {
//                 margin: 3.125rem 0;
//             }
//         }
//
//
//     .radioOptions {
//             margin: 2rem 0;
//
//
//             input {
//                 width: 2.5rem;
//                 height: 2.5rem;
//                 position: relative;
//                 vertical-align: middle;
//
//
//             &::after {
//                     content: "";
//                     width: 2.5rem;
//                     height: 2.5rem;
//                     border: 1px solid $buttonBorder;
//                     cursor: pointer;
//                     position: absolute;
//                     background: #EDECEA;
//                 }
//             &:checked::after {
//                     content: "";
//                     background: $registerBorderColor;
//                     width: 2.5rem;
//                     height: 2.5rem;
//                 }
//
//
//
//
//             }
//
//
//             label {
//                 margin-left: 2rem;
//                 font-size: 1.2rem;
//                 font-weight: 300;
//
//
//             @media only screen and (min-width: 1025px) {
//                     font-size: 1.5rem;
//                 }
//             }
//         }
//     }
// }
//
//
// .nextPrevButtons {
//     display: flex;
//     justify-content: flex-end;
//     align-items: flex-end;
//
//
// @media only screen and (max-width: 670px) {
//         justify-content: space-between;
//         align-items: center;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         justify-content: flex-start;
//     }
//
//
// .nextButton {
//         border: 0.75px solid $buttonBorder;
//         padding: 1rem 3rem;
//         font-size: 1.2rem;
//         font-weight: 300;
//         cursor: pointer;
//         margin-right: 8.875rem;
//
//
//     @media only screen and (max-width: 670px) {
//             margin-left: 1rem;
//             margin-right: 1rem;
//         }
//
//
//     @media only screen and (min-width: 1025px) {
//             font-size: 1.5rem;
//             margin-top: 2rem;
//             margin-left: 8.875rem;
//             padding: 1.5rem 4rem;
//         }
//     }
//
//
// .prevButton {
//         margin-top: 2rem;
//         margin-right: 5rem;
//         border: 0.75px solid $buttonBorder;
//         padding: 1rem 3rem;
//         font-size: 1.2rem;
//         font-weight: 300;
//         cursor: pointer;
//
//
//     @media only screen and (max-width: 670px) {
//             margin-left: 1rem;
//             margin-right: 1rem;
//             margin-top: 0;
//         }
//
//
//     @media only screen and (min-width: 1025px) {
//             margin-left: 8.875rem;
//             font-size: 1.5rem;
//             margin-top: 2rem;
//             padding: 1.5rem 4rem;
//         }
//     }
// }
//
//
// .selectForm {
//     display: flex;
//     vertical-align: middle;
//     position: relative;
//     margin: 0 3.125rem 23rem 5.875rem;
//
//
// @media only screen and (max-width: 670px) {
//         margin-left: 2rem;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         margin: 3.0625rem 3.125rem 21.5rem 8.875rem;
//
//
//         span {
//             margin-right: 2rem;
//         }
//     }
//
//
//     span {
//         padding-top: 0.6rem;
//         font-size: 1.5rem;
//         font-weight: 300;
//         margin-right: 1rem;
//
//
//     }
//     select {
//         font-family: $font-base;
//         text-align: center;
//         background-color: #EDECEA;
//         font-size: 1rem;
//         border: 1px solid darkgrey;
//         width: 18.75rem;
//         height: 3.0625rem;
//     }
//     option {
//         background-color: #EDECEA;
//     }
// }
//
//
// .selectTheme {
//     width: 18.75rem;
//     font-weight: 300;
//
//
//     --styled-select-arrow-zone__width: 3rem;
//
//
//     --styled-select-placeholder__color: #3C3C3C;
//     --styled-select-placeholder__font-size: 1.5rem;
//     --styled-select-placeholder__line-height: 34px;
//     --styled-select-placeholder__padding: 0.5rem 1rem;
//     --styled-select-placeholder__font-family: "Open Sans", sans-serif;
//
//
//     --styled-select-arrow__color: #3C3C3C;
//     --styled-select-arrow__size: 10;
//
//
//     --styled-select__background-color: #EDECEA;
//     --styled-select__border-style: solid;
//     --styled-select__border-width: 1px;
//
//
//     --styled-select-control__border-color: #3C3C3C;
//     --styled-select-control__border-color--focused: #5E5322;
//     --styled-select-control__min-height: 3.0625rem;
//     --styled-select-control__min-width: 18.75rem;
//
//
//     --styled-select-menu-outer__font-family: "Open Sans", sans-serif;
//     --styled-select-menu-outer__background-color: #EDECEA;
//     --styled-select-menu-outer__border-color: #5E5322;
//     --styled-select-menu-outer__border-style: solid;
//     --styled-select-menu-outer__border-width: 1px;
//     --styled-select-menu-outer__margin: 1rem 0 0 0;
//     --styled-select-menu-outer__box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
//     --styled-select-menu-outer__width: 3rem;
//
//
//     --styled-select-option__color: #000;
//     --styled-select-option__background-color: transparent;
//     --styled-select-option__color--selected: #3C3C3C;
//     --styled-select-option__background-color--focused: #FAD648;
//     --styled-select-option__background-color--selected: transparent;
//     --styled-select-value__max-width: 10rem;
//
//
//     --styled-select-value__font-size: 1rem;
//
//
// .gvadqV {
//         width: 4rem;
//         text-align: center;
//         right: 0;
//     }
// }
//
//
// .cities {
// .gvadqV {
//         width: 100%;
//         text-align: left;
//     }
//
//
// .icSaOl {
//         font-family: $font-base;
//     }
//
//
// .kGtLwg {
//         font-family: $font-base;
//         color: #000;
//     }
// }
//
//
// .chooseHelp {
//     font-size: 1.25rem;
//     margin-left: 3rem;
//
//
// @media only screen and (min-width: 1025px) {
//         margin-left: 8.875rem;
//     }
//
//
// }
//
//
// .localization {
//     margin: 0.5rem 3.125rem 2rem 3rem;
//
//
// @media only screen and (max-width: 670px) {
//         margin-left: 2rem;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         margin: 2.5rem 3.125rem 3rem 8.875rem;
//     }
// }
//
//
// .whoYouHelp {
//     margin-bottom: -4.7rem;
//     display: flex;
//     flex-direction: column;
//
//
// @media only screen and (max-width: 670px) {
//         margin-bottom: 0;
//     }
//
//
//     input[type='text'] {
//         height: 2.5rem;
//         background: transparent;
//         border: 1px solid $buttonBorder;
//         font-family: $font-base;
//         font-size: 1.125rem;
//         line-height: 1.5rem;
//         padding: 0 1rem;
//         font-weight: 300;
//         margin: 1rem 3rem 5.1rem 3rem;
//
//
//     @media only screen and (min-width: 1025px) {
//             margin: 1rem 1rem 5.1rem 9.875rem;
//             width: 35.625rem;
//         }
//
//
//     @media only screen and (max-width: 670px) {
//             margin: 1rem 3rem 2rem 3rem;
//         }
//     }
// }
//
//
// .checkboxFormHelp {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-wrap: wrap;
//     width: 100%;
//     height: 10rem;
//     font-family: $font-base;
//     margin: 1rem 0 3rem 0;
//
//
// @media only screen and (max-width: 670px) {
//         height: 100%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         margin: 1rem 0;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         width: 60%;
//         margin: 1rem 0 1.5rem 0;
//     }
//
//
// .checkboxOptionsHelp {
//         padding: 1rem;
//     @media only screen and (max-width: 670px) {
//             margin-bottom: 1rem;
//
//
//         &:first-of-type {
//                 margin-left: 0;
//             }
//
//
//         &:nth-of-type(4) {
//                 margin-left: 0;
//             }
//         }
//
//
//     &:first-of-type {
//             margin-left: 2rem;
//         }
//
//
//     &:nth-of-type(4) {
//             margin-left: 2rem;
//         }
//
//
//     @media only screen and (max-width: 670px) {
//         &:first-of-type {
//                 margin: 0;
//             }
//
//
//         &:nth-of-type(4) {
//                 margin: 0;
//             }
//
//
//         &:last-of-type {
//                 margin: 0;
//             }
//         }
//
//
//         label {
//             cursor: pointer;
//             text-align: center;
//             font-family: $font-base;
//             font-size: 1.5rem;
//             font-weight: 300;
//             border: 1px solid $buttonBorder;
//             padding: 0.8rem 1rem;
//             border-radius: 3rem;
//
//
//         @media only screen and (max-width: 670px) {
//                 font-size: 1rem;
//             }
//
//
//         @media only screen and (min-width: 1025px) {
//                 border-radius: 0;
//             }
//         }
//
//
//         input[type=checkbox] {
//             display: none;
//
//
//         &:checked + label {
//                 color: black;
//                 width: 30rem;
//                 padding: 0.8rem 1rem;
//                 background-color: $registerBorderColor;
//             }
//
//
//         &:checked:before + label:before {
//                 content: "";
//             }
//         }
//     }
// }
//
//
// .addressDate {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//
//
// @media only screen and (max-width: 670px) {
//         margin-bottom: 2rem;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         flex-direction: row;
//         margin-top: 1rem;
//     }
//
//
// .title {
//         font-size: 1.5rem;
//         font-family: $font-base;
//     }
//
//
// .address, .date {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//
//
//     @media only screen and (min-width: 1025px) {
//             display: block;
//             margin: 1rem 1rem 0 8.875rem;
//         }
//     }
//
//
// .input {
//         margin: 0.5rem 0;
//         display: flex;
//         justify-content: space-between;
//         width: 100%;
//
//
//
//
//     @media only screen and (min-width: 1025px) {
//             margin: 1.75rem 0;
//             width: 26rem;
//
//
//             label {
//                 font-size: 1.5rem;
//                 width: 30%;
//             }
//         }
//
//
//         label {
//             font-size: 1.2rem;
//             font-family: $font-base;
//             font-weight: 300;
//             line-height: 2rem;
//             width: 50%;
//
//
//         @media only screen and (max-width: 670px) {
//                 margin: 0 1rem;
//                 width: 40%;
//             }
//         }
//     }
//
//
//     input {
//         background: transparent;
//         border: 0.75px solid $buttonBorder;
//         padding: 0 1rem;
//         font-family: "Open Sans", sans-serif;
//         line-height: 1.5rem;
//         font-weight: 300;
//         height: 2rem;
//         width: 15rem;
//
//
//     @media only screen and (max-width: 670px) {
//             width: 9rem;
//         }
//
//
//     @media only screen and (min-width: 1025px) {
//             width: 16rem;
//             height: 2.5rem;
//         }
//     }
//
//
//     textarea {
//         width: 15rem;
//         height: 7.5rem;
//         background: transparent;
//         border: 0.75px solid $buttonBorder;
//         padding: 0.5rem 1rem;
//         resize: none;
//
//
//     @media only screen and (max-width: 670px) {
//             width: 9rem;
//         }
//
//
//     @media only screen and (min-width: 1025px) {
//             width: 16rem;
//         }
//     }
// }
//
//
// .whatToGiveSummary {
//     font-size: 1.2rem;
//     margin-left: 3rem;
//     margin-right: 2rem;
//
//
// @media only screen and (max-width: 670px) {
//         margin-left: 1rem;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         margin-left: 8.875rem;
//         margin-top: 2.8125rem;
//         font-size: 1.5rem;
//         margin-right: 0;
//     }
//
//
// .giveThingsAndWhere {
//         margin-top: 1rem;
//
//
//     @media only screen and (min-width: 1025px) {
//             width: 70%;
//         }
//
//
//         img {
//             margin: 0 1.25rem 0 0;
//             width: 3.125rem;
//         }
//     }
// }
//
//
// .addressDate {
// .summaryAddress {
//     .title {
//             font-size: 1.5rem;
//         }
//     }
//
//
// .summaryInput {
//         margin: 0.5rem 0;
//         display: flex;
//         justify-content: space-between;
//         width: 30rem;
//
//
//     @media only screen and (max-width: 670px) {
//             width: 20rem;
//         }
//
//
//     @media only screen and (min-width: 1025px) {
//             width: 25rem;
//             margin: 1.875rem 0;
//         }
//
//
//         span {
//             font-weight: 300;
//             line-height: 2rem;
//
//
//         @media only screen and (min-width: 1025px) {
//                 font-size: 1.5rem;
//                 width: 60%;
//             }
//         }
//
//
//     .inputTitle {
//             text-align: right;
//         @media only screen and (min-width: 1025px) {
//                 text-align: left;
//                 width: 35%;
//             }
//         }
//     }
// }
//
//
// .summaryAddress, .summaryDate {
//     margin: 1rem;
//
//
// @media only screen and (min-width: 1025px) {
//         margin: 1rem 1rem 0 8.875rem;
//     }
// }
//
//
// .summaryStep {
//     height: 45rem;
//     background: url("./../../assets/Background-Form.jpg");
// }
//
//
// .thankYou {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//
//
// @media only screen and (min-width: 1025px) {
//         width: 70%;
//     }
//
//
//     p {
//         font-size: 1.5rem;
//         font-weight: 300;
//         text-align: center;
//         width: 30rem;
//         line-height: 3.4375rem;
//         margin-bottom: 1.625rem;
//
//
//     @media only screen and (min-width: 1025px) {
//             font-size: 2.5rem;
//             width: 44rem;
//         }
//
//
//     @media only screen and (max-width: 670px) {
//             width: 80%;
//         }
//     }
// }
//
//
// .errorStyle {
//     font-size: 0.7rem;
//     color: red;
//     position: absolute;
// @media only screen and (min-width: 1025px) {
//         font-size: 0.8rem;
//     }
// }
//
//
// .errorStreet {
//     top: 58rem;
//     left: 35rem;
//
//
// @media only screen and (min-width: 1025px) {
//         top: 86.5rem;
//         left: 21rem;
//     }
// }
//
//
// .errorCity {
//     top: 61rem;
//     left: 35rem;
//
//
// @media only screen and (min-width: 1025px) {
//         top: 91rem;
//         left: 21rem;
//     }
// }
//
//
// .errorPostcode {
//     top: 63.5rem;
//     left: 35rem;
//
//
// @media only screen and (min-width: 1025px) {
//         top: 95rem;
//         left: 20rem;
//     }
// }
//
//
// .errorPhone {
//     top: 67rem;
//     left: 35rem;
//
//
// @media only screen and (min-width: 1025px) {
//         top: 99.5rem;
//         left: 21rem;
//     }
// }
//
//
// .errorDate {
//     top: 72rem;
//     left: 35rem;
//
//
// @media only screen and (min-width: 1025px) {
//         top: 85.5rem;
//         left: 57rem;
//     }
// }
//
//
// .errorTime {
//     top: 75rem;
//     left: 35rem;
//
//
// @media only screen and (min-width: 1025px) {
//         top: 90rem;
//         left: 57rem;
//     }
// }
//
//
// .errorRadio {
//     top: 84rem;
//     right: 9.5rem;
//
//
// @media only screen and (max-width: 670px) {
//         top: 90rem;
//         right: 9.5rem;
//     }
//
//
// @media only screen and (min-width: 1025px) {
//         top: 108rem;
//         left: 11rem;
//     }
// }
//
//
// .errorLocalization {
//     top: 84rem;
//     right: 7rem;
//
//
// @media only screen and (min-width: 1025px) {
//         top: 108rem;
//         left: 11rem;
//     }
// }
//
//
// .progressBar {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 2rem 0;
//     background: url("./../../assets/Background-Form.jpg");
//
//
//     img {
//         width: 2rem;
//         height: 2rem;
//     }
//
//
// .bar {
//         font-family: $font-base;
//         font-size: 1.5rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: 3rem;
//         height: 3rem;
//         background: $boxColor;
//         margin: 0 1rem;
//         box-shadow: 2px 2px 5px $formBorderBottomColor;
//     }
//
//
// .bar.activeBar {
//         background: $registerBorderColor;
//         z-index: 1;
//         box-shadow: 2px 2px 5px $formBorderBottomColor;
//     }
//
//
// .bar.doneBar {
//         background: green;
//         box-shadow: none;
//     }
// }
//
//
// .titleStep {
//     display: flex;
//     justify-content: center;
//     background: url("./../../assets/Background-Form.jpg");
//     padding: 2rem 0;
//
//
// .mobilechoose {
//         font-family: $font-base;
//         font-size: 1.4rem;
//         margin: 0 2rem;
//
//
//     @media only screen and (max-width: 670px) {
//             margin: 0 1rem;
//             line-height: 2rem;
//         }
//     }
// }
//
//
// .addressButtons {
//     margin-top: -1rem;
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import React, {Component} from 'react';
// import lastStep from './../../assets/Icon-7.svg'
// import info from './../../assets/Icon-8.svg'
//
//
// class Step1Form extends Component {
//     render() {
//         return (
//             <form className='radioForm'>
//                 <div className='radioOptions'>
//                     <input type='radio' id='clothesToUse' name="whatToGive"
//                            value="ubrania, które nadają się do ponownego użycia"
//                            onClick={this.props.handleRadioChange}
//                            checked={this.props.radioValue.indexOf("ubrania, które nadają się do ponownego użycia") > -1}
//                     />
//                     <label htmlFor='clothesToUse'>ubrania, które nadają się do ponownego użycia</label>
//                 </div>
//                 <div className='radioOptions'>
//                     <input type='radio' id='clothesToThrow' name="whatToGive"
//                            value="ubrania, do wyrzucenia"
//                            onClick={this.props.handleRadioChange}
//                            checked={this.props.radioValue.indexOf("ubrania, do wyrzucenia") > -1}
//                     />
//                     <label htmlFor='clothesToThrow'>ubrania, do wyrzucenia</label>
//                 </div>
//                 <div className='radioOptions'>
//                     <input type='radio' id='toys' name="whatToGive"
//                            value="zabawki" onClick={this.props.handleRadioChange}
//                            checked={ this.props.radioValue.indexOf("zabawki") > -1}
//                     />
//                     <label htmlFor='toys'>zabawki</label>
//                 </div>
//                 <div className='radioOptions'>
//                     <input type='radio' id='books' name="whatToGive"
//                            value="książki" onClick={this.props.handleRadioChange}
//                            checked={ this.props.radioValue.indexOf("książki") > -1}
//                     />
//                     <label htmlFor='books'>książki</label>
//                 </div>
//                 <div className='radioOptions'>
//                     <input type='radio' id='others' name="whatToGive"
//                            value="inne" onClick={this.props.handleRadioChange}
//                            checked={ this.props.radioValue.indexOf("inne") > -1}
//                     />
//                     <label htmlFor='others'>inne</label>
//                 </div>
//             </form>
//         );
//     }
// }
//
//
// class Step1 extends Component {
//     state = {
//         width: window.innerWidth,
//     };
//
//
//     componentWillMount() {
//         window.addEventListener('resize', this.handleWindowSizeChange);
//     }
//
//
//     componentWillUnmount() {
//         window.removeEventListener('resize', this.handleWindowSizeChange);
//     }
//
//
//     handleWindowSizeChange = () => {
//         this.setState({ width: window.innerWidth });
//     };
//
//
//     render() {
//
//
//         const { width } = this.state;
//         const isMobile = width <= 767;
//
//
//         if (isMobile) {
//             return (
//                 <>
//                     <div className='progressBar'>
//                         <span className='bar activeBar'>1</span>
//                         <span className='bar'>2</span>
//                         <span className='bar'>3</span>
//                         <span className='bar'>4</span>
//                         <span className='bar'><img src={lastStep} alt={lastStep}/></span>
//                     </div>
//
//
//                     <div className='titleStep'>
//                         <span className='mobilechoose'>Zaznacz co chcesz oddać:</span>
//                     </div>
//
//
//                     <div className='warningStep'>
//                         <img src={info} alt={info}/>
//                         <div className='warning'>
//                             <h2>Ważne!</h2>
//                             <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
//                         </div>
//                     </div>
//
//
//                     <div className='steps'>
//                         {this.props.radioError && <span className="errorStyle errorRadio">Zaznacz jedną z opcji!</span>}
//
//
//                         <Step1Form handleRadioChange={this.props.handleRadioChange} radioValue={this.props.radioValue}/>
//
//
//                         <div className='nextPrevButtons'>
//                             <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
//                         </div>
//                     </div>
//                 </>
//             )
//         } else {
//             return (
//                 <>
//                     <div className='warningStep'>
//                         <h2>Ważne!</h2>
//                         <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
//                     </div>
//
//
//                     <div className='steps'>
//                         <span className='stepNum'>Krok 1/4</span>
//                         <span className='choose'>Zaznacz co chcesz oddać:</span>
//                         {this.props.radioError && <span className="errorStyle errorRadio">Zaznacz jedną z opcji!</span>}
//
//
//                         <Step1Form handleRadioChange={this.props.handleRadioChange} radioValue={this.props.radioValue}/>
//
//
//                         <div className='nextPrevButtons'>
//                             <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
//                         </div>
//                     </div>
//                 </>
//             )
//         }
//     }
// }
//
//
// export default Step1;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import React, {Component} from 'react';
// import LogReg from "../Home/Header/LogReg";
// import Navigation from "../Home/Header/Navigation";
// import decoration from "./../../assets/Decoration.svg"
//
//
// class GiveThingsAwayHeader extends Component {
//     state = {
//         width: window.innerWidth,
//     };
//
//
//     componentWillMount() {
//         window.addEventListener('resize', this.handleWindowSizeChange);
//     }
//
//
//     componentWillUnmount() {
//         window.removeEventListener('resize', this.handleWindowSizeChange);
//     }
//
//
//     handleWindowSizeChange = () => {
//         this.setState({ width: window.innerWidth });
//     };
//
//
//     render() {
//
//
//         const { width } = this.state;
//         const isMobile = width <= 767;
//
//
//         if (isMobile) {
//             return (
//                 <section className='giveThingsAway'>
//                     <Navigation/>
//                     <div className='giveThingsAwayWelcome'>
//                         <div className='giveThingsAwayText'>
//                             <h2>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
//                             <h3>Wystarczą 4 proste kroki:</h3>
//                         </div>
//                     </div>
//                 </section>
//             )
//         } else {
//             return (
//                 <section className='giveThingsAway'>
//                     <div className='giveThingsAwayHeader'>
//                         <LogReg/>
//                         <Navigation/>
//                     </div>
//                     <div className='giveThingsAwayWelcome'>
//                         <div className='giveThingsAwayText'>
//                             <h2>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
//                             <img src={decoration} alt={decoration}/>
//                             <h3>Wystarczą 4 proste kroki:</h3>
//
//
//                             <ul className='giveThingsAwaySteps'>
//                                 <li>
//                                     <div className='square'></div>
//                                     <span>1</span>
//                                     <p>Wybierz<br/>rzeczy</p>
//                                 </li>
//                                 <li>
//                                     <div className='square'></div>
//                                     <span>2</span>
//                                     <p>Spakuj je<br/>w worki</p>
//                                 </li>
//                                 <li>
//                                     <div className='square'></div>
//                                     <span>3</span>
//                                     <p>Wybierz<br/>fundację</p>
//                                 </li>
//                                 <li>
//                                     <div className='square'></div>
//                                     <span>4</span>
//                                     <p>Zamów<br/>kuriera</p>
//                                 </li>
//                             </ul>
//
//
//                         </div>
//                     </div>
//                 </section>
//             )
//         }
//     }
// }
//
//
// export default GiveThingsAwayHeader;
//
