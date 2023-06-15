import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://news-proxy.spanb4.shop/', {
            apiKey: '8165a0089cc3481ab153ceef8be3b6b7',
        });
    }
}

export default AppLoader;
