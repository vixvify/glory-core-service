import { server } from "./server";
import { config } from "./core/config";

const app = server.listen(config.port);

console.log(
  `🚀 Glory Backend is running in ${config.env} mode at http://${app.server?.hostname}:${app.server?.port}`
)