import moment from 'moment';
moment.locale("pt-br");

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: event[] = [
    {
        name: "Warm-Up",
        description: "Responder remeber e challenge",
        startAt: moment('25/06/2020 08:00', 'DD/MM/YYYY HH:mm'),
        finishAt: moment("25/06/2020 09:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Aula",
        description: "Hora de aprender",
        startAt: moment("25/06/2020 09:01", "DD/MM/YYYY HH:mm"),
        finishAt: moment("25/06/2020 11:00", "DD/MM/YYYY HH:mm")
    }
]

console.log(allEvents[1])

// const printAllEvents = (events: event[]): void => {
//     events.forEach((item: event) => {
//         const start: string = event.startAt.format('dddd, DD [de] MMM [de] YYYY, [às] HH:mm');

//         const end: string = event.finishAt.format('DD [de] MMM [de] YYYY, [às] HH:mm');
//       const duration = item.finishAt.diff(item.startAt, "minutes");
  
//       const today = moment();
//       const daysUntilEvent = item.startAt.diff(today, "days");
  
//       console.log(`
//               Nome: ${item.name}
//               Horário de início: ${item.startAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
//               Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
//               Descrição: ${item.description}
//               Duração em minutos: ${duration}
//               Dias até o evento: ${daysUntilEvent}
//           `);
//     });
//   };