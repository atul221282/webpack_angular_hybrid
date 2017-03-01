import { Test } from "./test";
export function InitTestModule(app: ng.IModule) {
    app.component("test", new Test());
}