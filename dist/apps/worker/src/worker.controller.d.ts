import { WorkerService } from './worker.service';
export declare class WorkerController {
    private readonly workerService;
    constructor(workerService: WorkerService);
    getHello(): string;
}
