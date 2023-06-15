import News from './news/news';
import Sources from './sources/sources';
import { ArticlesArr } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesArr) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values as []);
    }

    drawSources(data: ArticlesArr) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values as []);
    }
}

export default AppView;
