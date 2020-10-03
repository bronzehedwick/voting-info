import LocalizedStrings from "react-localization"

export const strings = new LocalizedStrings({
  en: {
    datesDeadlines: {
      headline: "Important Dates and Deadlines",
      items: [
        {
          text: "Last day of applying for absentee ballot by mail",
          date: "Oct 09 (Fri)",
          datetime: "2020-10-09",
        },
        {
          text: "Early voting begins",
          date: "Oct 24 (Sat)",
          datetime: "2020-10-24",
        },
        {
          text: "Early voting ends",
          date: "Nov 01 (Sun)",
          datetime: "2020-11-01",
        },
        {
          text: "Election day, vote in person",
          date: "Nov 03 (Tue)",
          datetime: "2020-11-03",
        },
      ],
    },
    polling: {
      headline: "Find your polling place",
      items: [
        {
          label: "Street number",
          placeholder: "Your street number",
        },
        {
          label: "Street name",
          placeholder: "Your street name",
        },
      ],
      submit: "Search",
    },
    ballotInfo: {
      headline: "Ballot info",
    },
    ctas: [
      {
        text: "Update your voter registration",
        href: "https://dmv.ny.gov/address-change/how-change-your-address",
        target: "blank",
        classes: "",
      },
      {
        text: "Apply for Absentee Ballot",
        href: "https://nycabsentee.com/",
        target: "blank",
        classes: "",
      },
      {
        text: "Look for a Ride to Your Polling Station",
        href: "#",
        classes: "cta--highlight",
      },
    ],
    tips: {
      headline: "Essential Tips",
      items: [
        "One Lorem ibsum dolar mat",
        "Two Lorem ibsum dolar mat",
        "Three Lorem ibsum dolar mat",
        "Four Lorem ibsum dolar mat",
      ],
    },
  },
  es: {
    datesDeadlines: {
      headline: "Fechas y plazos importantes",
      items: [
        {
          text:
            "Último día para solicitar una boleta de voto ausente por correo",
          date: "Oct 09 (Fri)",
          datetime: "2020-10-09",
        },
        {
          text: "Comienza la votación anticipada",
          date: "Oct 24 (Sat)",
          datetime: "2020-10-24",
        },
        {
          text: "Finaliza la votación anticipada",
          date: "Nov 01 (Sun)",
          datetime: "2020-11-01",
        },
        {
          text: "El día de las elecciones, votar en persona",
          date: "Nov 03 (Tue)",
          datetime: "2020-11-03",
        },
      ],
    },
    polling: {
      headline: "Encuentra tu lugar de votación",
      items: [
        {
          label: "número de calle",
          placeholder: "Tu numero de calle",
        },
        {
          label: "nombre de la calle",
          placeholder: "El nombre de tu calle",
        },
      ],
      submit: "Buscar",
    },
    ballotInfo: {
      headline: "Información de la boleta",
      placeholder: "Su dirección",
      submit: "Buscar",
    },
    ctas: [
      {
        text: "Actualice su registro de votante",
        href: "#",
        classes: "",
      },
      {
        text: "Solicite una boleta de voto ausente",
        href: "#",
        classes: "",
      },
      {
        text: "Busque transporte a su colegio electoral",
        href: "#",
        classes: "cta--highlight",
      },
    ],
    tips: {
      headline: "Essential Tips",
      items: [
        "One Lorem ibsum dolar mat",
        "Two Lorem ibsum dolar mat",
        "Three Lorem ibsum dolar mat",
        "Four Lorem ibsum dolar mat",
      ],
    },
  },
})

export default strings
