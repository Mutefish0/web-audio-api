import { AssetsModule } from "jsr:@mutefish/deno-assets-module@0.0.4";
import data from "./node-web-audio.base64.ts";

const am = new AssetsModule();
await am.load(data);

const processBindings = am.require("./js/node-web-audio.js");
const bindings = am.require(`./libs/${Deno.build.target}.node`);

const module = processBindings(bindings);

export default module;
