globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-09T11:20:59.774Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/avatar-1-71wZBFwq.jpg": {
		"type": "image/jpeg",
		"etag": "\"45c4-binyBWL8IJ/iy9ti1jOfrxu+KtM\"",
		"mtime": "2026-07-18T13:41:48.457Z",
		"size": 17860,
		"path": "../public/assets/avatar-1-71wZBFwq.jpg"
	},
	"/assets/avatar-2-ycfZ5J6S.jpg": {
		"type": "image/jpeg",
		"etag": "\"5521-rjc6sjzGOuLib8pY9F2VgzslNf4\"",
		"mtime": "2026-07-18T13:41:48.457Z",
		"size": 21793,
		"path": "../public/assets/avatar-2-ycfZ5J6S.jpg"
	},
	"/assets/avatar-3-BDzpP_lm.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f72-e9zuyx3VSvcZ567UXPfCFSpzHTA\"",
		"mtime": "2026-07-18T13:41:48.457Z",
		"size": 24434,
		"path": "../public/assets/avatar-3-BDzpP_lm.jpg"
	},
	"/assets/portfolio-drone-QH3HWVGn.jpg": {
		"type": "image/jpeg",
		"etag": "\"9a6b-1N4ERBMG3i9NlhXEs3CF/w3V4hA\"",
		"mtime": "2026-07-18T13:41:48.457Z",
		"size": 39531,
		"path": "../public/assets/portfolio-drone-QH3HWVGn.jpg"
	},
	"/assets/portfolio-events-Ll-DHj4-.jpg": {
		"type": "image/jpeg",
		"etag": "\"151e4-z4nxpMXIUHuOEC5o18QSDHFjqX8\"",
		"mtime": "2026-07-18T13:41:48.457Z",
		"size": 86500,
		"path": "../public/assets/portfolio-events-Ll-DHj4-.jpg"
	},
	"/assets/index-CwnjJtRf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54447-NB3N2hAxfnuDodOs3OVjpMXmDuc\"",
		"mtime": "2026-07-18T13:41:48.455Z",
		"size": 345159,
		"path": "../public/assets/index-CwnjJtRf.js"
	},
	"/assets/portfolio-nature-BJIQqORq.jpg": {
		"type": "image/jpeg",
		"etag": "\"197af-R33hkyqJeYu8BN//qrbfJIh5R8c\"",
		"mtime": "2026-07-18T13:41:48.457Z",
		"size": 104367,
		"path": "../public/assets/portfolio-nature-BJIQqORq.jpg"
	},
	"/assets/portfolio-portrait-j8qj4OWi.jpg": {
		"type": "image/jpeg",
		"etag": "\"964f-xZQpz8FcopkKLDU3hfTv+dQtdHI\"",
		"mtime": "2026-07-18T13:41:48.465Z",
		"size": 38479,
		"path": "../public/assets/portfolio-portrait-j8qj4OWi.jpg"
	},
	"/assets/portfolio-prewedding-DwZ6K5sT.jpg": {
		"type": "image/jpeg",
		"etag": "\"111c0-+znfL84MyhbZ5uulKpkeYRDwfG8\"",
		"mtime": "2026-07-18T13:41:48.465Z",
		"size": 70080,
		"path": "../public/assets/portfolio-prewedding-DwZ6K5sT.jpg"
	},
	"/assets/portfolio-fashion-mtbmsA14.jpg": {
		"type": "image/jpeg",
		"etag": "\"d496-ONfiVCfUk0Nm/A/nMBu2ADK5hIA\"",
		"mtime": "2026-07-18T13:41:48.457Z",
		"size": 54422,
		"path": "../public/assets/portfolio-fashion-mtbmsA14.jpg"
	},
	"/assets/portfolio-wedding-DJZPhWVe.jpg": {
		"type": "image/jpeg",
		"etag": "\"b672-KHf68HkF7RLlo8tYv7C8LORTkRQ\"",
		"mtime": "2026-07-18T13:41:48.467Z",
		"size": 46706,
		"path": "../public/assets/portfolio-wedding-DJZPhWVe.jpg"
	},
	"/assets/portfolio-wedding2-DndSjMbT.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e2d5-44qn3L9CbnFanVxMSx9P1rXVVt0\"",
		"mtime": "2026-07-18T13:41:48.469Z",
		"size": 123605,
		"path": "../public/assets/portfolio-wedding2-DndSjMbT.jpg"
	},
	"/assets/styles-iyoHF6dK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"177ad-kxaeicF9WCAPuR2wGSVODORSyYA\"",
		"mtime": "2026-07-18T13:41:48.470Z",
		"size": 96173,
		"path": "../public/assets/styles-iyoHF6dK.css"
	},
	"/assets/routes-CayrHchT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110cd2-O4q3DtYJGjE/2T9WXqu27m5qBZQ\"",
		"mtime": "2026-07-18T13:41:48.455Z",
		"size": 1117394,
		"path": "../public/assets/routes-CayrHchT.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Y39wB7 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Y39wB7
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
