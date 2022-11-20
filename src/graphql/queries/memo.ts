import * as Types from '../schema';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type MemoListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MemoListQuery = { __typename?: 'query_root', memo: Array<{ __typename?: 'memo', id: number, memo: string, created_at: any, updated_at: any }> };


export const MemoListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"memoList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<MemoListQuery, MemoListQueryVariables>;