"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = require("moment");
moment_1.default.locale("pt-br");
const allEvents = [
    {
        name: "Warm-Up",
        description: "Responder remeber e challenge",
        startAt: moment_1.default('25/06/2020 08:00', 'DD/MM/YYYY HH:mm'),
        finishAt: moment_1.default("25/06/2020 09:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Aula",
        description: "Hora de aprender",
        startAt: moment_1.default("25/06/2020 09:01", "DD/MM/YYYY HH:mm"),
        finishAt: moment_1.default("25/06/2020 11:00", "DD/MM/YYYY HH:mm")
    }
];
console.log(allEvents[1]);
//# sourceMappingURL=index.js.map