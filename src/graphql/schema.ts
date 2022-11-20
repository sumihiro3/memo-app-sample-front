export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "memo" */
export type Memo = {
  __typename?: 'memo';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  memo: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "memo" */
export type Memo_Aggregate = {
  __typename?: 'memo_aggregate';
  aggregate?: Maybe<Memo_Aggregate_Fields>;
  nodes: Array<Memo>;
};

/** aggregate fields of "memo" */
export type Memo_Aggregate_Fields = {
  __typename?: 'memo_aggregate_fields';
  avg?: Maybe<Memo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Memo_Max_Fields>;
  min?: Maybe<Memo_Min_Fields>;
  stddev?: Maybe<Memo_Stddev_Fields>;
  stddev_pop?: Maybe<Memo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Memo_Stddev_Samp_Fields>;
  sum?: Maybe<Memo_Sum_Fields>;
  var_pop?: Maybe<Memo_Var_Pop_Fields>;
  var_samp?: Maybe<Memo_Var_Samp_Fields>;
  variance?: Maybe<Memo_Variance_Fields>;
};


/** aggregate fields of "memo" */
export type Memo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Memo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Memo_Avg_Fields = {
  __typename?: 'memo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "memo". All fields are combined with a logical 'AND'. */
export type Memo_Bool_Exp = {
  _and?: InputMaybe<Array<Memo_Bool_Exp>>;
  _not?: InputMaybe<Memo_Bool_Exp>;
  _or?: InputMaybe<Array<Memo_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "memo" */
export enum Memo_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemoPkey = 'memo_pkey'
}

/** input type for incrementing numeric columns in table "memo" */
export type Memo_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "memo" */
export type Memo_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Memo_Max_Fields = {
  __typename?: 'memo_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Memo_Min_Fields = {
  __typename?: 'memo_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "memo" */
export type Memo_Mutation_Response = {
  __typename?: 'memo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Memo>;
};

/** on_conflict condition type for table "memo" */
export type Memo_On_Conflict = {
  constraint: Memo_Constraint;
  update_columns?: Array<Memo_Update_Column>;
  where?: InputMaybe<Memo_Bool_Exp>;
};

/** Ordering options when selecting data from "memo". */
export type Memo_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memo */
export type Memo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "memo" */
export enum Memo_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "memo" */
export type Memo_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Memo_Stddev_Fields = {
  __typename?: 'memo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Memo_Stddev_Pop_Fields = {
  __typename?: 'memo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Memo_Stddev_Samp_Fields = {
  __typename?: 'memo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "memo" */
export type Memo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Memo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Memo_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Memo_Sum_Fields = {
  __typename?: 'memo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "memo" */
export enum Memo_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Memo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Memo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Memo_Set_Input>;
  where: Memo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Memo_Var_Pop_Fields = {
  __typename?: 'memo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Memo_Var_Samp_Fields = {
  __typename?: 'memo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Memo_Variance_Fields = {
  __typename?: 'memo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "memo" */
  delete_memo?: Maybe<Memo_Mutation_Response>;
  /** delete single row from the table: "memo" */
  delete_memo_by_pk?: Maybe<Memo>;
  /** insert data into the table: "memo" */
  insert_memo?: Maybe<Memo_Mutation_Response>;
  /** insert a single row into the table: "memo" */
  insert_memo_one?: Maybe<Memo>;
  /** update data of the table: "memo" */
  update_memo?: Maybe<Memo_Mutation_Response>;
  /** update single row of the table: "memo" */
  update_memo_by_pk?: Maybe<Memo>;
  /** update multiples rows of table: "memo" */
  update_memo_many?: Maybe<Array<Maybe<Memo_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_MemoArgs = {
  where: Memo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Memo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_MemoArgs = {
  objects: Array<Memo_Insert_Input>;
  on_conflict?: InputMaybe<Memo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Memo_OneArgs = {
  object: Memo_Insert_Input;
  on_conflict?: InputMaybe<Memo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MemoArgs = {
  _inc?: InputMaybe<Memo_Inc_Input>;
  _set?: InputMaybe<Memo_Set_Input>;
  where: Memo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Memo_By_PkArgs = {
  _inc?: InputMaybe<Memo_Inc_Input>;
  _set?: InputMaybe<Memo_Set_Input>;
  pk_columns: Memo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Memo_ManyArgs = {
  updates: Array<Memo_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "memo" */
  memo: Array<Memo>;
  /** fetch aggregated fields from the table: "memo" */
  memo_aggregate: Memo_Aggregate;
  /** fetch data from the table: "memo" using primary key columns */
  memo_by_pk?: Maybe<Memo>;
};


export type Query_RootMemoArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


export type Query_RootMemo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


export type Query_RootMemo_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "memo" */
  memo: Array<Memo>;
  /** fetch aggregated fields from the table: "memo" */
  memo_aggregate: Memo_Aggregate;
  /** fetch data from the table: "memo" using primary key columns */
  memo_by_pk?: Maybe<Memo>;
  /** fetch data from the table in a streaming manner: "memo" */
  memo_stream: Array<Memo>;
};


export type Subscription_RootMemoArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


export type Subscription_RootMemo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


export type Subscription_RootMemo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMemo_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Memo_Stream_Cursor_Input>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};
