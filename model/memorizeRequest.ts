/**
 * MeMaS APIs
 * This is the Control Plane and Data Plane APIs for MeMaS (Memory Management Service). See https://github.com/memas-ai/MeMaS for more details.
 *
 * The version of the OpenAPI document: 0.1.1
 * Contact: max.yu@memas.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Citation } from './citation';

export class MemorizeRequest {
    'document': string;
    'citation': Citation;
    /**
    * Full name of a corpus, specifying which namespace the corpus is under.  The name takes on the format of \\\"<namespace_pathname>:<corpus_name>\\\"
    */
    'corpusPathname'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "document",
            "baseName": "document",
            "type": "string"
        },
        {
            "name": "citation",
            "baseName": "citation",
            "type": "Citation"
        },
        {
            "name": "corpusPathname",
            "baseName": "corpus_pathname",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MemorizeRequest.attributeTypeMap;
    }
}

