/**
 *
 * types
 *
 */

import { GraphQLError } from 'graphql';

/**
 * ID is a string type alias representing
 * the globally unique ID used for identifying
 * subscriptions established by the client.
 */
export type ID = string;

export interface Disposable {
  /** Dispose of the instance and clear up resources. */
  dispose: () => void | Promise<void>;
}

/**
 * A representation of any set of values over any amount of time.
 */
export interface Sink<T = unknown> {
  /** Next value arriving. */
  next(value: T): void;
  /** An error that has occured. Calling this function "closes" the sink. */
  error(error: Error | CloseEvent | readonly GraphQLError[]): void;
  /** The sink has completed. This function "closes" the sink. */
  complete(): void;
}
