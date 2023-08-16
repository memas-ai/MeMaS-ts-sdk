/**
 * MeMaS CP APIs
 * This is the Control Plane APIs for MeMaS (Memory Management Service).
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: max.yu@memas.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CorpusType } from './corpusType';

export class CreateCorpusRequest {
    /**
    * full corpus name
    */
    'corpusPathname'?: string;
    'corpusType'?: CorpusType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "corpusPathname",
            "baseName": "corpus_pathname",
            "type": "string"
        },
        {
            "name": "corpusType",
            "baseName": "corpus_type",
            "type": "CorpusType"
        }    ];

    static getAttributeTypeMap() {
        return CreateCorpusRequest.attributeTypeMap;
    }
}

export namespace CreateCorpusRequest {
}