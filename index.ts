import { AssetsModule } from "jsr:@mutefish/deno-assets-module@0.0.3";
import js from "./web-audio.base64.ts";

const rawBindings = await import(`./napi/${Deno.build.target}.base64.ts`);

const am = new AssetsModule();
await am.load(js);

const processBindings = am.require("./node-web-audio.js");

const tempFilePath = Deno.makeTempFileSync({
  suffix: ".node",
});
Deno.writeFileSync(tempFilePath, rawBindings.default);
const bindings = am.require(tempFilePath, true);
Deno.removeSync(tempFilePath);

const module = processBindings(bindings);

export default module;
