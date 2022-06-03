/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(data: {
        prodTitle: string;
        prodDesc: string;
        prodPrice: number;
    }): Promise<import("mongoose").Document<unknown, any, import("./products.model").Product> & import("./products.model").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
