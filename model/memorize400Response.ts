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
import { NamespaceDoesNotExistError } from './namespaceDoesNotExistError';
import { NamespaceIllegalNameError } from './namespaceIllegalNameError';

export class Memorize400Response {
    'errorCode': Memorize400Response.ErrorCodeEnum;
    'msg': string;
    'details'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "Memorize400Response.ErrorCodeEnum"
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Memorize400Response.attributeTypeMap;
    }
}

export namespace Memorize400Response {
    export enum ErrorCodeEnum {
        NamespaceIllegalName = <any> 'namespace_illegal_name'
    }
}
