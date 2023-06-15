export interface SourcesType {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Article extends SourcesType {
    source: {
        name: string;
        id: string;
    };
    author: string;
    title: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SourceObg extends Article {
    name: string;
    id: string;
}

export interface ArticlesArr {
    articles?: Array<ObjectConstructor>;
    sources?: Array<ObjectConstructor>;
}

export interface Errors {
    ok: number;
    status: number;
    statusText: string;
}

export interface Options {
    [key: string]: string;
}

export interface getResp {
    endpoint: string | ArrayConstructor;
    options?: Options | ArrayConstructor | object;
}
