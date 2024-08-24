import { config } from "../config/config.js";

import { Store } from "./store-base.js";

const store = new Store(config);

export { store };
