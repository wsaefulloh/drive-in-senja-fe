require("dotenv").config(); // require dotenv
const cli = require("next/dist/cli/next-start");

//untuk menjalankan next js pada host dan port sesuai .env
cli.nextStart(["-p", process.env.PORT_PROD], ["-H", process.env.HOST_PROD]);
