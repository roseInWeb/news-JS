import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ArticlesArr } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) =>
                this.controller.getNews(e, (data?: ArticlesArr) => this.view.drawNews(data as ArticlesArr))
            );
        this.controller.getSources((data?: ArticlesArr) => this.view.drawSources(data as ArticlesArr));
    }
}

export default App;
