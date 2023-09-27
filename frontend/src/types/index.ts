export type Post = {
  id?: string;
  title: string;
  description: string;
  content: string;
  created_at?: string;
  author_id?: number;
  tag: string;
};

/**
 * Use this instead of "any" and fix "any" type later
 * @see https://youtu.be/y7WUsi6NeH8?si=5yV1JJKifFr3iAdb
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TSFixMe = any;

export type AccessToken = {
  access_token: string;
};

export type AuthRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = AuthRequest;

export type ApiRegisterResponse = AccessToken & {
  user_info: {
    id: number | string;
    email: string;
  };
};

export type LoginRequest = AuthRequest;

export type ApiLoginResponse = AccessToken & {
  user_info: {
    id: number;
    email: string;
  };
};

export type ApiCreatePostResponse = {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  description: string;
  content: string;
  author_id: number;
};

export type ApiUpdatePostResponse = Partial<ApiCreatePostResponse>;

export type ApiDeletePostResponse = Partial<ApiCreatePostResponse>;

export type ApiErrorResponse = Partial<{
  data: {
    error: string;
    message: string;
    statusCode: number;
  };
  status: number;
}>;
