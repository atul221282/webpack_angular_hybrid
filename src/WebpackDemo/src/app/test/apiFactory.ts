import * as angular from 'angular';

export class APIInterceptor {
    static $inject = ["$q"];
    constructor($q: angular.IQService) {
        console.log($q);
    }
    public request = (config: angular.IRequestConfig): angular.IRequestConfig => {
        if (config.url.indexOf('api') > -1) {
            config.url = `http://localhost:58842/${config.url}`;
        }
        return config;
    }

    public responseError = (error: any) => {
        console.log(error);
    }
}