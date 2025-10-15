// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PiercesStagingTester } from '../client';

export abstract class APIResource {
  protected _client: PiercesStagingTester;

  constructor(client: PiercesStagingTester) {
    this._client = client;
  }
}
