import { Errors, Options, getResp } from '../../types/index';

class Loader {
    baseLink: string;
    options: Options;

    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: getResp,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint as ArrayConstructor, callback as FunctionConstructor, options as { apiKey: string });
    }

    errorHandler(res: Response | Errors) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options | string, endpoint: ArrayConstructor) {
        const urlOptions = { ...this.options, ...(options as Options) };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string,
        endpoint: ArrayConstructor,
        callback: FunctionConstructor,
        options = {} as { apiKey: string }
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => (res as Response).json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
