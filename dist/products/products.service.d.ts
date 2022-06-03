/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Product } from "./products.model";
import { Model } from "mongoose";
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<import("mongoose").Document<unknown, any, Product> & Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
