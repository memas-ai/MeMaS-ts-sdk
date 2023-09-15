/**
 * MeMaS CP APIs
 * This is the Control Plane client for MeMaS (Memory Management Service).  See https://github.com/memas-ai/MeMaS for more details.
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: max.yu@memas.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Error returned when the namespace object (corpus/user) already exists
*/
export class NamespaceExistError {
    'errorCode': NamespaceExistError.ErrorCodeEnum;
    'msg': string;
    'details'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "NamespaceExistError.ErrorCodeEnum"
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
        return NamespaceExistError.attributeTypeMap;
    }
}

export namespace NamespaceExistError {
    export enum ErrorCodeEnum {
        NamespaceExists = <any> 'namespace_exists'
    }
}
