import { DataSource, Repository } from 'typeorm';
import Language from './entities/Language';
import LanguageEnv from './entities/LanguageEnv';
import LanguageKey from './entities/LanguageKey';
import LanguageTranslation from './entities/LanguageTranslation';
import { CommonStatus } from '@app/core/constants/enum';
import { GlobalCacheService } from '@app/cache';
import { LibraryConfigService } from 'libs/config/src/config.service';
export declare class LanguageService {
    private readonly configService;
    private readonly dataSource;
    private cacheManager;
    private languageRepository;
    private languageEnvRepository;
    private languageKeyRepository;
    private languageTranslationRepository;
    constructor(configService: LibraryConfigService, dataSource: DataSource, cacheManager: GlobalCacheService, languageRepository: Repository<Language>, languageEnvRepository: Repository<LanguageEnv>, languageKeyRepository: Repository<LanguageKey>, languageTranslationRepository: Repository<LanguageTranslation>);
    getListLanguage(params: IListLanguage): Promise<Language[]>;
    addLanguage(params: IAddLanguage): Promise<void>;
    updateLanguage(params: IUpdateLanguage): Promise<void>;
    getListLanguageKey(params: IListLanguageKey): Promise<any>;
    assignLanguageTranslation(languageRepository: Repository<Language>, data: Array<any>): Promise<void>;
    addLanguageKey({ translations, ...params }: IAddLanguageKey): Promise<void>;
    updateLanguageKey({ translations, ...params }: any): Promise<void>;
    getFileLanguage(params: IGetFileLanguage | any): Promise<any>;
    downloadFileLanguage(params: IGetFileLanguage | any): Promise<any>;
    uploadLanguageFile({ environment, code, languages }: any): Promise<void>;
    getListEnvironments(): Promise<LanguageEnv[]>;
}
export interface IListLanguage {
    status?: CommonStatus;
}
export interface IFileLanguage {
    environment: string;
}
export interface IAddLanguage {
    code: string;
    name: string;
    status: CommonStatus;
    viName: string;
    priority: number;
    flagIcon: string;
    isDefault: CommonStatus;
    createdAt?: string;
}
export interface IUpdateLanguage {
    code: string;
    name: string;
    status: CommonStatus;
    viName: string;
    priority: number;
    flagIcon: string;
    isDefault: CommonStatus;
    createdAt?: string;
}
export interface IListLanguageKey {
    skip: number;
    take: number;
    keyword: string;
    environments: string[];
}
export interface IAddLanguageKey {
    key: string;
    defaultValue: string;
    environment: string;
    translations: Array<{
        code: string;
        value: string;
        environment?: string;
        key?: string;
    }>;
}
export interface IGetFileLanguage {
    environment: string;
    code?: string;
}
