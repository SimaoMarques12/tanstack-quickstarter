/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'
import { createServerRootRoute } from '@tanstack/react-start/server'

import { Route as rootRouteImport } from './routes/__root'
import { Route as AuthedRouteImport } from './routes/_authed'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AuthedProtectedRouteImport } from './routes/_authed/protected'
import { Route as otherUsersRouteImport } from './routes/(other)/users'
import { Route as otherRedirectRouteImport } from './routes/(other)/redirect'
import { Route as otherPostsRouteImport } from './routes/(other)/posts'
import { Route as otherDeferredRouteImport } from './routes/(other)/deferred'
import { Route as otherPathlessLayoutRouteImport } from './routes/(other)/_pathlessLayout'
import { Route as authSignUpRouteImport } from './routes/(auth)/sign-up'
import { Route as authSignInRouteImport } from './routes/(auth)/sign-in'
import { Route as otherUsersIndexRouteImport } from './routes/(other)/users.index'
import { Route as otherPostsIndexRouteImport } from './routes/(other)/posts.index'
import { Route as otherUsersUserIdRouteImport } from './routes/(other)/users.$userId'
import { Route as otherPostsPostIdRouteImport } from './routes/(other)/posts.$postId'
import { Route as otherPathlessLayoutNestedLayoutRouteImport } from './routes/(other)/_pathlessLayout/_nested-layout'
import { Route as otherPostsPostIdDeepRouteImport } from './routes/(other)/posts_.$postId.deep'
import { Route as otherPathlessLayoutNestedLayoutRouteBRouteImport } from './routes/(other)/_pathlessLayout/_nested-layout/route-b'
import { Route as otherPathlessLayoutNestedLayoutRouteARouteImport } from './routes/(other)/_pathlessLayout/_nested-layout/route-a'
import { ServerRoute as ApiUsersServerRouteImport } from './routes/api/users'
import { ServerRoute as otherCustomScriptDotjsServerRouteImport } from './routes/(other)/customScript[.]js'
import { ServerRoute as ApiUsersUserIdServerRouteImport } from './routes/api/users.$userId'

const otherRouteImport = createFileRoute('/(other)')()
const rootServerRouteImport = createServerRootRoute()

const otherRoute = otherRouteImport.update({
  id: '/(other)',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthedRoute = AuthedRouteImport.update({
  id: '/_authed',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthedProtectedRoute = AuthedProtectedRouteImport.update({
  id: '/protected',
  path: '/protected',
  getParentRoute: () => AuthedRoute,
} as any)
const otherUsersRoute = otherUsersRouteImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => otherRoute,
} as any)
const otherRedirectRoute = otherRedirectRouteImport.update({
  id: '/redirect',
  path: '/redirect',
  getParentRoute: () => otherRoute,
} as any)
const otherPostsRoute = otherPostsRouteImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => otherRoute,
} as any)
const otherDeferredRoute = otherDeferredRouteImport.update({
  id: '/deferred',
  path: '/deferred',
  getParentRoute: () => otherRoute,
} as any)
const otherPathlessLayoutRoute = otherPathlessLayoutRouteImport.update({
  id: '/_pathlessLayout',
  getParentRoute: () => otherRoute,
} as any)
const authSignUpRoute = authSignUpRouteImport.update({
  id: '/(auth)/sign-up',
  path: '/sign-up',
  getParentRoute: () => rootRouteImport,
} as any)
const authSignInRoute = authSignInRouteImport.update({
  id: '/(auth)/sign-in',
  path: '/sign-in',
  getParentRoute: () => rootRouteImport,
} as any)
const otherUsersIndexRoute = otherUsersIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => otherUsersRoute,
} as any)
const otherPostsIndexRoute = otherPostsIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => otherPostsRoute,
} as any)
const otherUsersUserIdRoute = otherUsersUserIdRouteImport.update({
  id: '/$userId',
  path: '/$userId',
  getParentRoute: () => otherUsersRoute,
} as any)
const otherPostsPostIdRoute = otherPostsPostIdRouteImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => otherPostsRoute,
} as any)
const otherPathlessLayoutNestedLayoutRoute =
  otherPathlessLayoutNestedLayoutRouteImport.update({
    id: '/_nested-layout',
    getParentRoute: () => otherPathlessLayoutRoute,
  } as any)
const otherPostsPostIdDeepRoute = otherPostsPostIdDeepRouteImport.update({
  id: '/posts_/$postId/deep',
  path: '/posts/$postId/deep',
  getParentRoute: () => otherRoute,
} as any)
const otherPathlessLayoutNestedLayoutRouteBRoute =
  otherPathlessLayoutNestedLayoutRouteBRouteImport.update({
    id: '/route-b',
    path: '/route-b',
    getParentRoute: () => otherPathlessLayoutNestedLayoutRoute,
  } as any)
const otherPathlessLayoutNestedLayoutRouteARoute =
  otherPathlessLayoutNestedLayoutRouteARouteImport.update({
    id: '/route-a',
    path: '/route-a',
    getParentRoute: () => otherPathlessLayoutNestedLayoutRoute,
  } as any)
const ApiUsersServerRoute = ApiUsersServerRouteImport.update({
  id: '/api/users',
  path: '/api/users',
  getParentRoute: () => rootServerRouteImport,
} as any)
const otherCustomScriptDotjsServerRoute =
  otherCustomScriptDotjsServerRouteImport.update({
    id: '/(other)/customScript.js',
    path: '/customScript.js',
    getParentRoute: () => rootServerRouteImport,
  } as any)
const ApiUsersUserIdServerRoute = ApiUsersUserIdServerRouteImport.update({
  id: '/$userId',
  path: '/$userId',
  getParentRoute: () => ApiUsersServerRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof otherPathlessLayoutRouteWithChildren
  '/sign-in': typeof authSignInRoute
  '/sign-up': typeof authSignUpRoute
  '/deferred': typeof otherDeferredRoute
  '/posts': typeof otherPostsRouteWithChildren
  '/redirect': typeof otherRedirectRoute
  '/users': typeof otherUsersRouteWithChildren
  '/protected': typeof AuthedProtectedRoute
  '/posts/$postId': typeof otherPostsPostIdRoute
  '/users/$userId': typeof otherUsersUserIdRoute
  '/posts/': typeof otherPostsIndexRoute
  '/users/': typeof otherUsersIndexRoute
  '/route-a': typeof otherPathlessLayoutNestedLayoutRouteARoute
  '/route-b': typeof otherPathlessLayoutNestedLayoutRouteBRoute
  '/posts/$postId/deep': typeof otherPostsPostIdDeepRoute
}
export interface FileRoutesByTo {
  '/': typeof otherPathlessLayoutRouteWithChildren
  '/sign-in': typeof authSignInRoute
  '/sign-up': typeof authSignUpRoute
  '/deferred': typeof otherDeferredRoute
  '/redirect': typeof otherRedirectRoute
  '/protected': typeof AuthedProtectedRoute
  '/posts/$postId': typeof otherPostsPostIdRoute
  '/users/$userId': typeof otherUsersUserIdRoute
  '/posts': typeof otherPostsIndexRoute
  '/users': typeof otherUsersIndexRoute
  '/route-a': typeof otherPathlessLayoutNestedLayoutRouteARoute
  '/route-b': typeof otherPathlessLayoutNestedLayoutRouteBRoute
  '/posts/$postId/deep': typeof otherPostsPostIdDeepRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/(auth)/sign-in': typeof authSignInRoute
  '/(auth)/sign-up': typeof authSignUpRoute
  '/(other)': typeof otherRouteWithChildren
  '/(other)/_pathlessLayout': typeof otherPathlessLayoutRouteWithChildren
  '/(other)/deferred': typeof otherDeferredRoute
  '/(other)/posts': typeof otherPostsRouteWithChildren
  '/(other)/redirect': typeof otherRedirectRoute
  '/(other)/users': typeof otherUsersRouteWithChildren
  '/_authed/protected': typeof AuthedProtectedRoute
  '/(other)/_pathlessLayout/_nested-layout': typeof otherPathlessLayoutNestedLayoutRouteWithChildren
  '/(other)/posts/$postId': typeof otherPostsPostIdRoute
  '/(other)/users/$userId': typeof otherUsersUserIdRoute
  '/(other)/posts/': typeof otherPostsIndexRoute
  '/(other)/users/': typeof otherUsersIndexRoute
  '/(other)/_pathlessLayout/_nested-layout/route-a': typeof otherPathlessLayoutNestedLayoutRouteARoute
  '/(other)/_pathlessLayout/_nested-layout/route-b': typeof otherPathlessLayoutNestedLayoutRouteBRoute
  '/(other)/posts_/$postId/deep': typeof otherPostsPostIdDeepRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/sign-in'
    | '/sign-up'
    | '/deferred'
    | '/posts'
    | '/redirect'
    | '/users'
    | '/protected'
    | '/posts/$postId'
    | '/users/$userId'
    | '/posts/'
    | '/users/'
    | '/route-a'
    | '/route-b'
    | '/posts/$postId/deep'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/sign-in'
    | '/sign-up'
    | '/deferred'
    | '/redirect'
    | '/protected'
    | '/posts/$postId'
    | '/users/$userId'
    | '/posts'
    | '/users'
    | '/route-a'
    | '/route-b'
    | '/posts/$postId/deep'
  id:
    | '__root__'
    | '/'
    | '/_authed'
    | '/(auth)/sign-in'
    | '/(auth)/sign-up'
    | '/(other)'
    | '/(other)/_pathlessLayout'
    | '/(other)/deferred'
    | '/(other)/posts'
    | '/(other)/redirect'
    | '/(other)/users'
    | '/_authed/protected'
    | '/(other)/_pathlessLayout/_nested-layout'
    | '/(other)/posts/$postId'
    | '/(other)/users/$userId'
    | '/(other)/posts/'
    | '/(other)/users/'
    | '/(other)/_pathlessLayout/_nested-layout/route-a'
    | '/(other)/_pathlessLayout/_nested-layout/route-b'
    | '/(other)/posts_/$postId/deep'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthedRoute: typeof AuthedRouteWithChildren
  authSignInRoute: typeof authSignInRoute
  authSignUpRoute: typeof authSignUpRoute
  otherRoute: typeof otherRouteWithChildren
}
export interface FileServerRoutesByFullPath {
  '/customScript.js': typeof otherCustomScriptDotjsServerRoute
  '/api/users': typeof ApiUsersServerRouteWithChildren
  '/api/users/$userId': typeof ApiUsersUserIdServerRoute
}
export interface FileServerRoutesByTo {
  '/customScript.js': typeof otherCustomScriptDotjsServerRoute
  '/api/users': typeof ApiUsersServerRouteWithChildren
  '/api/users/$userId': typeof ApiUsersUserIdServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/(other)/customScript.js': typeof otherCustomScriptDotjsServerRoute
  '/api/users': typeof ApiUsersServerRouteWithChildren
  '/api/users/$userId': typeof ApiUsersUserIdServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/customScript.js' | '/api/users' | '/api/users/$userId'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/customScript.js' | '/api/users' | '/api/users/$userId'
  id:
    | '__root__'
    | '/(other)/customScript.js'
    | '/api/users'
    | '/api/users/$userId'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  otherCustomScriptDotjsServerRoute: typeof otherCustomScriptDotjsServerRoute
  ApiUsersServerRoute: typeof ApiUsersServerRouteWithChildren
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(other)': {
      id: '/(other)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof otherRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_authed/protected': {
      id: '/_authed/protected'
      path: '/protected'
      fullPath: '/protected'
      preLoaderRoute: typeof AuthedProtectedRouteImport
      parentRoute: typeof AuthedRoute
    }
    '/(other)/users': {
      id: '/(other)/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof otherUsersRouteImport
      parentRoute: typeof otherRoute
    }
    '/(other)/redirect': {
      id: '/(other)/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof otherRedirectRouteImport
      parentRoute: typeof otherRoute
    }
    '/(other)/posts': {
      id: '/(other)/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof otherPostsRouteImport
      parentRoute: typeof otherRoute
    }
    '/(other)/deferred': {
      id: '/(other)/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof otherDeferredRouteImport
      parentRoute: typeof otherRoute
    }
    '/(other)/_pathlessLayout': {
      id: '/(other)/_pathlessLayout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof otherPathlessLayoutRouteImport
      parentRoute: typeof otherRoute
    }
    '/(auth)/sign-up': {
      id: '/(auth)/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof authSignUpRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/sign-in': {
      id: '/(auth)/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof authSignInRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(other)/users/': {
      id: '/(other)/users/'
      path: '/'
      fullPath: '/users/'
      preLoaderRoute: typeof otherUsersIndexRouteImport
      parentRoute: typeof otherUsersRoute
    }
    '/(other)/posts/': {
      id: '/(other)/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof otherPostsIndexRouteImport
      parentRoute: typeof otherPostsRoute
    }
    '/(other)/users/$userId': {
      id: '/(other)/users/$userId'
      path: '/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof otherUsersUserIdRouteImport
      parentRoute: typeof otherUsersRoute
    }
    '/(other)/posts/$postId': {
      id: '/(other)/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof otherPostsPostIdRouteImport
      parentRoute: typeof otherPostsRoute
    }
    '/(other)/_pathlessLayout/_nested-layout': {
      id: '/(other)/_pathlessLayout/_nested-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof otherPathlessLayoutNestedLayoutRouteImport
      parentRoute: typeof otherPathlessLayoutRoute
    }
    '/(other)/posts_/$postId/deep': {
      id: '/(other)/posts_/$postId/deep'
      path: '/posts/$postId/deep'
      fullPath: '/posts/$postId/deep'
      preLoaderRoute: typeof otherPostsPostIdDeepRouteImport
      parentRoute: typeof otherRoute
    }
    '/(other)/_pathlessLayout/_nested-layout/route-b': {
      id: '/(other)/_pathlessLayout/_nested-layout/route-b'
      path: '/route-b'
      fullPath: '/route-b'
      preLoaderRoute: typeof otherPathlessLayoutNestedLayoutRouteBRouteImport
      parentRoute: typeof otherPathlessLayoutNestedLayoutRoute
    }
    '/(other)/_pathlessLayout/_nested-layout/route-a': {
      id: '/(other)/_pathlessLayout/_nested-layout/route-a'
      path: '/route-a'
      fullPath: '/route-a'
      preLoaderRoute: typeof otherPathlessLayoutNestedLayoutRouteARouteImport
      parentRoute: typeof otherPathlessLayoutNestedLayoutRoute
    }
  }
}
declare module '@tanstack/react-start/server' {
  interface ServerFileRoutesByPath {
    '/api/users': {
      id: '/api/users'
      path: '/api/users'
      fullPath: '/api/users'
      preLoaderRoute: typeof ApiUsersServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/(other)/customScript.js': {
      id: '/(other)/customScript.js'
      path: '/customScript.js'
      fullPath: '/customScript.js'
      preLoaderRoute: typeof otherCustomScriptDotjsServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/api/users/$userId': {
      id: '/api/users/$userId'
      path: '/$userId'
      fullPath: '/api/users/$userId'
      preLoaderRoute: typeof ApiUsersUserIdServerRouteImport
      parentRoute: typeof ApiUsersServerRoute
    }
  }
}

interface AuthedRouteChildren {
  AuthedProtectedRoute: typeof AuthedProtectedRoute
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedProtectedRoute: AuthedProtectedRoute,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

interface otherPathlessLayoutNestedLayoutRouteChildren {
  otherPathlessLayoutNestedLayoutRouteARoute: typeof otherPathlessLayoutNestedLayoutRouteARoute
  otherPathlessLayoutNestedLayoutRouteBRoute: typeof otherPathlessLayoutNestedLayoutRouteBRoute
}

const otherPathlessLayoutNestedLayoutRouteChildren: otherPathlessLayoutNestedLayoutRouteChildren =
  {
    otherPathlessLayoutNestedLayoutRouteARoute:
      otherPathlessLayoutNestedLayoutRouteARoute,
    otherPathlessLayoutNestedLayoutRouteBRoute:
      otherPathlessLayoutNestedLayoutRouteBRoute,
  }

const otherPathlessLayoutNestedLayoutRouteWithChildren =
  otherPathlessLayoutNestedLayoutRoute._addFileChildren(
    otherPathlessLayoutNestedLayoutRouteChildren,
  )

interface otherPathlessLayoutRouteChildren {
  otherPathlessLayoutNestedLayoutRoute: typeof otherPathlessLayoutNestedLayoutRouteWithChildren
}

const otherPathlessLayoutRouteChildren: otherPathlessLayoutRouteChildren = {
  otherPathlessLayoutNestedLayoutRoute:
    otherPathlessLayoutNestedLayoutRouteWithChildren,
}

const otherPathlessLayoutRouteWithChildren =
  otherPathlessLayoutRoute._addFileChildren(otherPathlessLayoutRouteChildren)

interface otherPostsRouteChildren {
  otherPostsPostIdRoute: typeof otherPostsPostIdRoute
  otherPostsIndexRoute: typeof otherPostsIndexRoute
}

const otherPostsRouteChildren: otherPostsRouteChildren = {
  otherPostsPostIdRoute: otherPostsPostIdRoute,
  otherPostsIndexRoute: otherPostsIndexRoute,
}

const otherPostsRouteWithChildren = otherPostsRoute._addFileChildren(
  otherPostsRouteChildren,
)

interface otherUsersRouteChildren {
  otherUsersUserIdRoute: typeof otherUsersUserIdRoute
  otherUsersIndexRoute: typeof otherUsersIndexRoute
}

const otherUsersRouteChildren: otherUsersRouteChildren = {
  otherUsersUserIdRoute: otherUsersUserIdRoute,
  otherUsersIndexRoute: otherUsersIndexRoute,
}

const otherUsersRouteWithChildren = otherUsersRoute._addFileChildren(
  otherUsersRouteChildren,
)

interface otherRouteChildren {
  otherPathlessLayoutRoute: typeof otherPathlessLayoutRouteWithChildren
  otherDeferredRoute: typeof otherDeferredRoute
  otherPostsRoute: typeof otherPostsRouteWithChildren
  otherRedirectRoute: typeof otherRedirectRoute
  otherUsersRoute: typeof otherUsersRouteWithChildren
  otherPostsPostIdDeepRoute: typeof otherPostsPostIdDeepRoute
}

const otherRouteChildren: otherRouteChildren = {
  otherPathlessLayoutRoute: otherPathlessLayoutRouteWithChildren,
  otherDeferredRoute: otherDeferredRoute,
  otherPostsRoute: otherPostsRouteWithChildren,
  otherRedirectRoute: otherRedirectRoute,
  otherUsersRoute: otherUsersRouteWithChildren,
  otherPostsPostIdDeepRoute: otherPostsPostIdDeepRoute,
}

const otherRouteWithChildren = otherRoute._addFileChildren(otherRouteChildren)

interface ApiUsersServerRouteChildren {
  ApiUsersUserIdServerRoute: typeof ApiUsersUserIdServerRoute
}

const ApiUsersServerRouteChildren: ApiUsersServerRouteChildren = {
  ApiUsersUserIdServerRoute: ApiUsersUserIdServerRoute,
}

const ApiUsersServerRouteWithChildren = ApiUsersServerRoute._addFileChildren(
  ApiUsersServerRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
  authSignInRoute: authSignInRoute,
  authSignUpRoute: authSignUpRoute,
  otherRoute: otherRouteWithChildren,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  otherCustomScriptDotjsServerRoute: otherCustomScriptDotjsServerRoute,
  ApiUsersServerRoute: ApiUsersServerRouteWithChildren,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()
