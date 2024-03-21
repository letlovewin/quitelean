export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["book-half.svg","bootstrap-min.js","exclamation-lg.svg","favicon.png","icon.png","list.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".js":"text/javascript",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.5By-4oGt.js","app":"_app/immutable/entry/app.DAIEeFr3.js","imports":["_app/immutable/entry/start.5By-4oGt.js","_app/immutable/chunks/entry.C2CCjbPb.js","_app/immutable/chunks/scheduler.DF9ji6Nx.js","_app/immutable/entry/app.DAIEeFr3.js","_app/immutable/chunks/scheduler.DF9ji6Nx.js","_app/immutable/chunks/index.BRiiciFl.js","_app/immutable/chunks/index.Bt-Xh7oU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/people/[uid]",
				pattern: /^\/people\/([^/]+?)\/?$/,
				params: [{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/problems",
				pattern: /^\/problems\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/problems/[problemid]",
				pattern: /^\/problems\/([^/]+?)\/?$/,
				params: [{"name":"problemid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
