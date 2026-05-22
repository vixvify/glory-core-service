import { server } from "./server";
import { config } from "./core/config";

server.listen(config.port);

console.log(
  `🚀 Glory Backend is running in ${config.env} mode at http://localhost:${config.port}`
);
