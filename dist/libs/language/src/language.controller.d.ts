import { LanguageService } from './language.service';
export declare class LanguageController {
    private readonly languageService;
    constructor(languageService: LanguageService);
    getLanguageInfo(query: any): Promise<any>;
    getListLanguage(body: any): Promise<import("./entities/Language").default[]>;
    addLanguage(body: any): Promise<void>;
    updateLanguage(body: any): Promise<void>;
    getListLanguageKey(body: any): Promise<any>;
    addLanguageKey(body: any): Promise<void>;
    updateLanguageKey(body: any): Promise<void>;
    getFileLanguage(body: any): Promise<any>;
    uploadFileLanguage(body: any): Promise<void>;
    getListEnvironments(): Promise<import("./entities/LanguageEnv").default[]>;
}
