/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class Fleet {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes a secret stored by Fleet.
    */
  async deleteSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async deleteSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async deleteSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async deleteSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_fleet/secret/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieves a secret stored by Fleet.
    */
  async getSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async getSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async getSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async getSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_fleet/secret/${encodeURIComponent(params.id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns the current global checkpoints for an index. This API is design for internal use by the fleet server project.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.12/get-global-checkpoints.html | Elasticsearch API documentation}
    */
  async globalCheckpoints (this: That, params: T.FleetGlobalCheckpointsRequest | TB.FleetGlobalCheckpointsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FleetGlobalCheckpointsResponse>
  async globalCheckpoints (this: That, params: T.FleetGlobalCheckpointsRequest | TB.FleetGlobalCheckpointsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FleetGlobalCheckpointsResponse, unknown>>
  async globalCheckpoints (this: That, params: T.FleetGlobalCheckpointsRequest | TB.FleetGlobalCheckpointsRequest, options?: TransportRequestOptions): Promise<T.FleetGlobalCheckpointsResponse>
  async globalCheckpoints (this: That, params: T.FleetGlobalCheckpointsRequest | TB.FleetGlobalCheckpointsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_fleet/global_checkpoints`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Multi Search API where the search will only be executed after specified checkpoints are available due to a refresh. This API is designed for internal use by the fleet server project.
    */
  async msearch<TDocument = unknown> (this: That, params: T.FleetMsearchRequest | TB.FleetMsearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FleetMsearchResponse<TDocument>>
  async msearch<TDocument = unknown> (this: That, params: T.FleetMsearchRequest | TB.FleetMsearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FleetMsearchResponse<TDocument>, unknown>>
  async msearch<TDocument = unknown> (this: That, params: T.FleetMsearchRequest | TB.FleetMsearchRequest, options?: TransportRequestOptions): Promise<T.FleetMsearchResponse<TDocument>>
  async msearch<TDocument = unknown> (this: That, params: T.FleetMsearchRequest | TB.FleetMsearchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['searches']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: any = params.body ?? undefined

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = body != null ? 'POST' : 'GET'
      path = `/${encodeURIComponent(params.index.toString())}/_fleet/_fleet_msearch`
    } else {
      method = body != null ? 'POST' : 'GET'
      path = '/_fleet/_fleet_msearch'
    }
    return await this.transport.request({ path, method, querystring, bulkBody: body }, options)
  }

  /**
    * Creates a secret stored by Fleet.
    */
  async postSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async postSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async postSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async postSecret (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_fleet/secret'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Search API where the search will only be executed after specified checkpoints are available due to a refresh. This API is designed for internal use by the fleet server project.
    */
  async search<TDocument = unknown> (this: That, params: T.FleetSearchRequest | TB.FleetSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FleetSearchResponse<TDocument>>
  async search<TDocument = unknown> (this: That, params: T.FleetSearchRequest | TB.FleetSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FleetSearchResponse<TDocument>, unknown>>
  async search<TDocument = unknown> (this: That, params: T.FleetSearchRequest | TB.FleetSearchRequest, options?: TransportRequestOptions): Promise<T.FleetSearchResponse<TDocument>>
  async search<TDocument = unknown> (this: That, params: T.FleetSearchRequest | TB.FleetSearchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['aggregations', 'aggs', 'collapse', 'explain', 'ext', 'from', 'highlight', 'track_total_hits', 'indices_boost', 'docvalue_fields', 'min_score', 'post_filter', 'profile', 'query', 'rescore', 'script_fields', 'search_after', 'size', 'slice', 'sort', '_source', 'fields', 'suggest', 'terminate_after', 'timeout', 'track_scores', 'version', 'seq_no_primary_term', 'stored_fields', 'pit', 'runtime_mappings', 'stats']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_fleet/_fleet_search`
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
