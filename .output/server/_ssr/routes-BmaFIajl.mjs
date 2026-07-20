import { a as __toESM } from "../_runtime.mjs";
import { a as useFrame, c as require_react, i as Canvas, n as Environment, r as Float, s as require_jsx_runtime, t as Sparkles } from "../_libs/@react-three/drei+[...].mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { C as Camera, S as Check, T as Baby, _ as Image, a as Star, b as Film, c as Send, d as Phone, f as Package, g as Instagram, h as Mail, i as Twitter, l as Quote, m as MapPin, n as X, o as Sparkles$1, p as MessageCircle, r as Video, s as Shirt, t as Youtube, u as Plane, v as Heart, w as Cake, x as Facebook, y as Flower2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BmaFIajl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "Home",
		id: "home"
	},
	{
		label: "About",
		id: "about"
	},
	{
		label: "Portfolio",
		id: "portfolio"
	},
	{
		label: "Services",
		id: "services"
	},
	{
		label: "Pricing",
		id: "pricing"
	},
	{
		label: "Reviews",
		id: "reviews"
	},
	{
		label: "Gallery",
		id: "gallery"
	},
	{
		label: "Contact",
		id: "contact"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 20
	});
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold via-gold-soft to-neon"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-9 w-9 rounded-full glass grid place-items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-gold animate-pulse-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-gold/40 group-hover:scale-110 transition-transform" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg gold-text",
							children: "Lumière"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] tracking-[0.35em] text-muted-foreground uppercase",
							children: "Studio"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${l.id}`,
						className: "relative rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider transition hover:text-gold",
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "hidden sm:inline-flex items-center rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-5 py-2 text-xs font-semibold uppercase tracking-widest text-ink hover:gold-glow transition-all",
					children: "Book Now"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((v) => !v),
					className: "lg:hidden glass rounded-full p-2.5",
					"aria-label": "Menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-5 bg-gold transition-all ${open ? "translate-y-1.5 rotate-45" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-5 bg-gold transition-all ${open ? "opacity-0" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-5 bg-gold transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}` })
						]
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "lg:hidden mx-4 mt-3 glass rounded-2xl p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-1",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${l.id}`,
					onClick: () => setOpen(false),
					className: "rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground uppercase tracking-wider hover:bg-gold/10 hover:text-gold transition",
					children: l.label
				}, l.id))
			})
		})]
	})] });
}
function Camera3D() {
	const group = (0, import_react.useRef)(null);
	useFrame((state) => {
		if (!group.current) return;
		group.current.rotation.y = state.clock.elapsedTime * .3;
		group.current.rotation.x = Math.sin(state.clock.elapsedTime * .4) * .15;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		scale: 1.1,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					2.2,
					1.4,
					1.2
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#0a0a0a",
					metalness: .9,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.85,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.8,
					.35,
					.9
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#0a0a0a",
					metalness: .9,
					roughness: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.9,
					-.05,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.5,
					1.3,
					1.2
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#0a0a0a",
					metalness: .85,
					roughness: .4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.2,
					0,
					.9
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.75,
					.75,
					1.2,
					48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#1a1a1a",
					metalness: .95,
					roughness: .15
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.2,
					0,
					1.35
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.78,
					.78,
					.15,
					48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4a24c",
					metalness: 1,
					roughness: .15,
					emissive: "#8a5a10",
					emissiveIntensity: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.2,
					0,
					1.5
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.6,
					.6,
					.05,
					48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#0a1a2a",
					metalness: .9,
					roughness: .05,
					emissive: "#1e3a8a",
					emissiveIntensity: .5
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.6,
					.75,
					.3
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.12,
					.12,
					.1,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4a24c",
					metalness: 1,
					roughness: .2,
					emissive: "#8a5a10",
					emissiveIntensity: .4
				})]
			})
		]
	});
}
function OrbitingLens() {
	const ref = (0, import_react.useRef)(null);
	useFrame((state) => {
		if (!ref.current) return;
		const t = state.clock.elapsedTime * .6;
		ref.current.position.x = Math.cos(t) * 3.5;
		ref.current.position.z = Math.sin(t) * 3.5;
		ref.current.position.y = Math.sin(t * 2) * .5;
		ref.current.rotation.y = t * 2;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		ref,
		scale: .5,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.6,
			.5,
			1,
			32
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#d4a24c",
			metalness: 1,
			roughness: .2,
			emissive: "#8a5a10",
			emissiveIntensity: .4
		})]
	});
}
function HeroScene() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
		camera: {
			position: [
				0,
				.5,
				6
			],
			fov: 45
		},
		dpr: [1, 2],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
			fallback: null,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .25 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
					position: [
						6,
						8,
						6
					],
					intensity: 2.4,
					angle: .4,
					penumbra: .5,
					color: "#f4c470",
					castShadow: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
					position: [
						-6,
						4,
						4
					],
					intensity: 1.2,
					angle: .6,
					penumbra: .7,
					color: "#4dd0e1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
					position: [
						0,
						-4,
						3
					],
					intensity: .6,
					color: "#d4a24c"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
					speed: 1.4,
					rotationIntensity: .4,
					floatIntensity: .6,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera3D, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitingLens, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
					count: 80,
					scale: 12,
					size: 3,
					speed: .4,
					color: "#d4a24c",
					opacity: .7
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
					count: 40,
					scale: 10,
					size: 2,
					speed: .3,
					color: "#4dd0e1",
					opacity: .5
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "night" })
			]
		})
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const opacity = useTransform(scrollYProgress, [0, .7], [1, 0]);
	const [particles, setParticles] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setParticles(Array.from({ length: 30 }).map(() => ({
			w: 4 + Math.random() * 10,
			h: 4 + Math.random() * 10,
			l: Math.random() * 100,
			t: Math.random() * 100,
			d: 4 + Math.random() * 4,
			delay: Math.random() * 3
		})));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref,
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink via-background to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-neon/5 blur-[100px]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 -z-10 opacity-60",
				children: particles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute rounded-full bg-gold/40 blur-sm",
					style: {
						width: p.w,
						height: p.h,
						left: `${p.l}%`,
						top: `${p.t}%`
					},
					animate: {
						y: [
							0,
							-40,
							0
						],
						opacity: [
							.2,
							.8,
							.2
						]
					},
					transition: {
						duration: p.d,
						repeat: Infinity,
						delay: p.delay
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					opacity
				},
				className: "relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-4 pt-32 pb-16 lg:grid-cols-2 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: 2 },
							className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold animate-pulse-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] tracking-[0.3em] uppercase text-muted-foreground",
								children: "Award-winning studio · Est. 2018"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										opacity: 0,
										y: 40
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: 2.1,
										duration: .9,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "block text-foreground",
									children: "Capturing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										opacity: 0,
										y: 40
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: 2.25,
										duration: .9,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "block gold-text italic",
									children: "Memories."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
									initial: {
										opacity: 0,
										y: 40
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: 2.4,
										duration: .9,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "block text-foreground",
									children: ["Creating ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gold-text italic",
										children: "Stories."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: 2.6 },
							className: "mt-6 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base text-muted-foreground leading-relaxed",
							children: "A cinematic photography & film studio crafting timeless imagery for weddings, editorials, brands and moments that deserve to be remembered forever."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: 2.75 },
							className: "mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "group relative overflow-hidden rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:gold-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10",
									children: "Book a Shoot"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#portfolio",
								className: "group inline-flex items-center gap-2 rounded-full glass gold-border px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold/10 transition",
								children: ["View Portfolio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "transition-transform group-hover:translate-x-1",
									children: "→"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: 3 },
							className: "mt-10 flex items-center justify-center lg:justify-start gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "★★★★★ 4.9" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1000+ Clients" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-border hidden sm:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "7 Years"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[400px] sm:h-[500px] lg:h-[620px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 rounded-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroScene, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-gold/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-gold/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 bottom-4 h-8 w-8 border-l-2 border-b-2 border-gold/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-4 bottom-4 h-8 w-8 border-r-2 border-b-2 border-gold/60" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: 3.2 },
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-px bg-gradient-to-b from-gold to-transparent" })]
				})
			})
		]
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const mv = useMotionValue(0);
	const display = useTransform(useSpring(mv, {
		stiffness: 60,
		damping: 20
	}), (v) => Math.floor(v).toLocaleString() + suffix);
	(0, import_react.useEffect)(() => {
		if (inView) mv.set(to);
	}, [
		inView,
		mv,
		to
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		ref,
		children: display
	});
}
var stats = [
	{
		value: 1e3,
		suffix: "+",
		label: "Happy Clients"
	},
	{
		value: 500,
		suffix: "+",
		label: "Weddings"
	},
	{
		value: 7,
		suffix: "+",
		label: "Years Experience"
	},
	{
		value: 4,
		suffix: "K",
		label: "Video Production"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 sm:py-32 px-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] tracking-[0.4em] uppercase text-gold",
							children: "— About the Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight",
							children: [
								"Cinematic vision, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gold-text italic",
									children: "crafted by hand."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground leading-relaxed",
							children: "We are a boutique photography & film studio dedicated to producing editorial-grade imagery. Every frame is composed with intent — from the whisper of window light on a bride's veil to the shudder of a drone rising over a mountaintop. Our craft is patience, our currency is light."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: "With over 500 weddings, 300 fashion editorials and countless intimate portraits behind our lenses, we bring restraint, warmth and a filmmaker's eye to every shoot."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					className: "grid grid-cols-2 gap-4 sm:gap-6",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: {
							y: -6,
							rotateX: 4,
							rotateY: -4
						},
						transition: {
							type: "spring",
							stiffness: 200
						},
						style: {
							transformStyle: "preserve-3d",
							perspective: 1e3
						},
						className: "glass rounded-2xl p-6 sm:p-8 relative overflow-hidden group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-neon/10 opacity-0 group-hover:opacity-100 transition-opacity" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-4xl sm:text-5xl gold-text",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: s.value,
										suffix: s.suffix
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground",
									children: s.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-3 top-3 h-10 w-10 rounded-full border border-gold/30 grid place-items-center text-gold text-xs opacity-40",
								children: ["0", i + 1]
							})
						]
					}, s.label))
				})]
			})
		})
	});
}
var services = [
	{
		icon: Heart,
		title: "Wedding Photography",
		desc: "Timeless documentation of your once-in-a-lifetime day."
	},
	{
		icon: Sparkles$1,
		title: "Pre Wedding Shoots",
		desc: "Cinematic love stories at breathtaking locations."
	},
	{
		icon: Camera,
		title: "Candid Photography",
		desc: "Unposed, honest moments captured with an editor's eye."
	},
	{
		icon: Baby,
		title: "Baby Shoot",
		desc: "Soft, tender portraiture for the tiniest of humans."
	},
	{
		icon: Flower2,
		title: "Maternity Shoot",
		desc: "Elegant, glowing portraits of the beautiful in-between."
	},
	{
		icon: Cake,
		title: "Birthday Events",
		desc: "Vibrant coverage that turns celebrations into keepsakes."
	},
	{
		icon: Shirt,
		title: "Fashion Photography",
		desc: "Editorial imagery for designers, brands and lookbooks."
	},
	{
		icon: Package,
		title: "Product Photography",
		desc: "Studio-grade e-commerce and lifestyle product visuals."
	},
	{
		icon: Plane,
		title: "Drone Photography",
		desc: "Sweeping aerial cinematography that widens the story."
	},
	{
		icon: Video,
		title: "Cinematic Videography",
		desc: "4K narrative films with color-graded, story-first edits."
	},
	{
		icon: Image,
		title: "Photo Editing",
		desc: "Retouching & tonal work by an award-winning color team."
	},
	{
		icon: Film,
		title: "Video Editing",
		desc: "Feature-quality edits, motion design and audio mastering."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-[120px] -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] tracking-[0.4em] uppercase text-gold",
						children: "— Our Craft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight",
						children: ["A full studio of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-text italic",
							children: "services"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "From intimate portraits to grand aerial cinematography — end-to-end production, editing and post-work under one roof."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .5,
							delay: i % 3 * .08
						},
						whileHover: { y: -6 },
						className: "group relative glass rounded-2xl p-6 sm:p-7 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 text-gold group-hover:gold-glow transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg text-foreground group-hover:gold-text transition-colors",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed",
										children: s.desc
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", (i + 1).toString().padStart(2, "0").slice(-2)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold opacity-0 group-hover:opacity-100 transition",
									children: "→ Enquire"
								})]
							})
						]
					}, s.title);
				})
			})]
		})]
	});
}
var portfolio_wedding_default = "/assets/portfolio-wedding-DJZPhWVe.jpg";
var portfolio_wedding2_default = "/assets/portfolio-wedding2-DndSjMbT.jpg";
var portfolio_prewedding_default = "/assets/portfolio-prewedding-DwZ6K5sT.jpg";
var portfolio_fashion_default = "/assets/portfolio-fashion-mtbmsA14.jpg";
var portfolio_portrait_default = "/assets/portfolio-portrait-j8qj4OWi.jpg";
var portfolio_drone_default = "/assets/portfolio-drone-QH3HWVGn.jpg";
var portfolio_events_default = "/assets/portfolio-events-Ll-DHj4-.jpg";
var portfolio_nature_default = "/assets/portfolio-nature-BJIQqORq.jpg";
var items = [
	{
		src: portfolio_wedding_default,
		cat: "Wedding",
		title: "Golden Vows",
		span: "row-span-2"
	},
	{
		src: portfolio_prewedding_default,
		cat: "Pre Wedding",
		title: "Sunlit Promise"
	},
	{
		src: portfolio_fashion_default,
		cat: "Fashion",
		title: "Silk Noir",
		span: "row-span-2"
	},
	{
		src: portfolio_portrait_default,
		cat: "Portrait",
		title: "The Muse"
	},
	{
		src: portfolio_drone_default,
		cat: "Drone",
		title: "Above the Ridge"
	},
	{
		src: portfolio_events_default,
		cat: "Events",
		title: "Chandelier Nights"
	},
	{
		src: portfolio_nature_default,
		cat: "Nature",
		title: "First Light"
	},
	{
		src: portfolio_wedding2_default,
		cat: "Wedding",
		title: "Heirloom"
	}
];
var cats = [
	"All",
	"Wedding",
	"Pre Wedding",
	"Portrait",
	"Fashion",
	"Events",
	"Drone",
	"Nature"
];
function Portfolio({ onOpen }) {
	const [active, setActive] = (0, import_react.useState)("All");
	const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "relative py-24 sm:py-32 px-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] tracking-[0.4em] uppercase text-gold",
					children: "— Portfolio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight",
					children: ["Selected ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gold-text italic",
						children: "work."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(c),
						className: `rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition ${active === c ? "bg-gold text-ink gold-glow" : "glass gold-border text-muted-foreground hover:text-gold"}`,
						children: c
					}, c))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layout: true,
				className: "columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: filtered.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						layout: true,
						initial: {
							opacity: 0,
							scale: .9
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: {
							opacity: 0,
							scale: .9
						},
						transition: { duration: .5 },
						onClick: () => onOpen(it.src, it.title),
						className: "group relative mb-4 sm:mb-5 block w-full overflow-hidden rounded-2xl gold-border break-inside-avoid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: it.src,
								alt: it.title,
								loading: "lazy",
								className: "w-full h-auto transition-transform duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-70 group-hover:opacity-90 transition" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 group-hover:ring-gold/60 transition-all" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[9px] uppercase tracking-[0.3em] text-gold",
									children: it.cat
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-xl text-foreground",
									children: it.title
								})]
							})
						]
					}, it.title))
				})
			})]
		})
	});
}
var tiers = [
	{
		name: "Basic",
		price: "$899",
		tag: "Intimate moments",
		features: [
			"4 hours coverage",
			"1 photographer",
			"150+ edited photos",
			"Online private gallery",
			"Delivery in 3 weeks"
		],
		highlight: false
	},
	{
		name: "Premium",
		price: "$2,499",
		tag: "Most popular",
		features: [
			"8 hours coverage",
			"2 photographers",
			"400+ edited photos",
			"Cinematic highlight film",
			"Pre-wedding session",
			"Delivery in 2 weeks"
		],
		highlight: true
	},
	{
		name: "Luxury",
		price: "$5,999",
		tag: "Full production",
		features: [
			"Full-day coverage",
			"3 photographers + drone",
			"800+ edited photos",
			"4K cinematic feature film",
			"Album + fine-art prints",
			"Priority 10-day delivery"
		],
		highlight: false
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "relative py-24 sm:py-32 px-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] tracking-[0.4em] uppercase text-gold",
						children: "— Investment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight",
						children: ["Considered ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-text italic",
							children: "pricing."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Transparent, all-inclusive packages. Every quote is custom — these are starting points."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: tiers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: i * .1
					},
					className: `relative rounded-3xl p-8 flex flex-col ${t.highlight ? "bg-gradient-to-b from-gold/15 via-card to-card gold-border gold-glow scale-100 md:scale-[1.04]" : "glass"}`,
					children: [
						t.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles$1, { className: "h-3 w-3" }), " Most Loved"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.35em] text-muted-foreground",
							children: t.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl gold-text",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-baseline gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl text-foreground",
								children: t.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "/ starting"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 flex-1",
							children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 text-gold mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: `mt-8 block rounded-full px-6 py-3 text-center text-xs font-bold uppercase tracking-widest transition ${t.highlight ? "bg-gradient-to-br from-gold-soft via-gold to-gold-deep text-ink hover:gold-glow" : "glass gold-border text-gold hover:bg-gold/10"}`,
							children: "Enquire"
						})
					]
				}, t.name))
			})]
		})
	});
}
var reviews = [
	{
		name: "Aarav & Meera",
		role: "Wedding · Udaipur",
		avatar: "/assets/avatar-3-BDzpP_lm.jpg",
		quote: "They didn't just photograph our wedding — they told our story. Every frame feels like a still from a film. Absolutely unmatched."
	},
	{
		name: "Sofia Laurent",
		role: "Fashion Editorial",
		avatar: "/assets/avatar-2-ycfZ5J6S.jpg",
		quote: "The lighting, the direction, the calm on set — everything felt like a Vogue shoot. The final images sold out our collection in 48 hours."
	},
	{
		name: "Marcus Chen",
		role: "Brand Campaign",
		avatar: "/assets/avatar-1-71wZBFwq.jpg",
		quote: "Meticulous, patient and wildly talented. Our product film has been shared over 200k times. I will never work with anyone else."
	}
];
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		className: "relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] tracking-[0.4em] uppercase text-gold",
					children: "— Kind Words"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight",
					children: ["Loved by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gold-text italic",
						children: "storytellers."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 40,
						rotateX: -10
					},
					whileInView: {
						opacity: 1,
						y: 0,
						rotateX: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						delay: i * .12
					},
					whileHover: {
						y: -8,
						rotateY: 3
					},
					style: {
						transformStyle: "preserve-3d",
						perspective: 1200
					},
					className: "glass rounded-3xl p-8 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute top-6 right-6 h-8 w-8 text-gold/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5 text-gold",
							children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm sm:text-base leading-relaxed text-foreground/90 italic",
							children: [
								"“",
								r.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-12 w-12 shrink-0 rounded-full overflow-hidden gold-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.avatar,
									alt: r.name,
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-base text-foreground",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
									children: r.role
								})]
							})]
						})
					]
				}, r.name))
			})]
		})
	});
}
var grid = [
	{
		src: portfolio_fashion_default,
		title: "Silk Noir"
	},
	{
		src: portfolio_portrait_default,
		title: "The Muse"
	},
	{
		src: portfolio_prewedding_default,
		title: "Sunlit Promise"
	},
	{
		src: portfolio_wedding2_default,
		title: "Heirloom"
	},
	{
		src: portfolio_nature_default,
		title: "First Light"
	},
	{
		src: portfolio_drone_default,
		title: "Above the Ridge"
	},
	{
		src: portfolio_events_default,
		title: "Chandelier Nights"
	},
	{
		src: portfolio_wedding_default,
		title: "Golden Vows"
	}
];
function Gallery({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "relative py-24 sm:py-32 px-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] tracking-[0.4em] uppercase text-gold",
					children: "— Gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight",
					children: [
						"An ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-text italic",
							children: "interactive"
						}),
						" archive."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4",
				children: grid.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .5,
						delay: i % 4 * .06
					},
					onClick: () => onOpen(g.src, g.title),
					className: "group relative aspect-square overflow-hidden rounded-xl gold-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.src,
							alt: g.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-full glass gold-border px-4 py-1.5 text-[10px] uppercase tracking-widest text-gold",
								children: "View"
							})
						})
					]
				}, g.title + i))
			})]
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/8 blur-[120px] -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] tracking-[0.4em] uppercase text-gold",
					children: "— Get in Touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight",
					children: ["Let's create ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gold-text italic",
						children: "something."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					className: "glass rounded-3xl p-8 lg:col-span-2 flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl gold-text",
							children: "Studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Reach out for bookings, collaborations or a coffee. We reply within 24 hours."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: [
								{
									icon: Phone,
									label: "Phone",
									value: "+1 (415) 555-0134"
								},
								{
									icon: Mail,
									label: "Email",
									value: "hello@lumiere.studio"
								},
								{
									icon: MapPin,
									label: "Studio",
									value: "24 Golden Lane, Suite 5\nSan Francisco, CA 94103"
								}
							].map((c) => {
								const Icon = c.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-gold/10 border border-gold/30 text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9px] uppercase tracking-[0.3em] text-muted-foreground",
											children: c.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-foreground whitespace-pre-line",
											children: c.value
										})]
									})]
								}, c.label);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-2xl overflow-hidden gold-border h-48",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Studio location",
								src: "https://www.openstreetmap.org/export/embed.html?bbox=-122.42%2C37.77%2C-122.40%2C37.79&layer=mapnik",
								className: "h-full w-full grayscale contrast-125 opacity-80",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-ink/30 mix-blend-multiply" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					initial: {
						opacity: 0,
						x: 30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
						setTimeout(() => setSent(false), 3500);
					},
					className: "glass rounded-3xl p-8 lg:col-span-3 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									className: "mt-2 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold border border-transparent focus:border-gold/40"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									className: "mt-2 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold border border-transparent focus:border-gold/40"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
								children: "Service"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "mt-2 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold border border-transparent focus:border-gold/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Wedding Photography" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pre Wedding Shoot" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Fashion Editorial" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cinematic Video" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
								children: "Tell us about your project"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 5,
								className: "mt-2 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold border border-transparent focus:border-gold/40 resize-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-ink hover:gold-glow transition",
							children: [sent ? "Message sent ✓" : "Send Enquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5 group-hover:translate-x-0.5 transition" })]
						})
					]
				})]
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-gold/20 py-14 px-4 sm:px-6 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-40 w-[80%] -translate-x-1/2 bg-gradient-to-b from-gold/10 to-transparent blur-3xl -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[2fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-9 w-9 rounded-full glass grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-gold animate-pulse-gold" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leading-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl gold-text",
									children: "Lumière"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[9px] tracking-[0.35em] text-muted-foreground uppercase",
									children: "Studio"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed",
							children: "A boutique photography & film studio crafting cinematic imagery for weddings, editorials and brands the world over."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex items-center gap-3",
							children: [
								Instagram,
								Youtube,
								Facebook,
								Twitter
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "social",
								className: "grid h-10 w-10 place-items-center rounded-full glass gold-border text-gold hover:bg-gold/10 hover:gold-glow transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, i))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[10px] uppercase tracking-[0.35em] text-gold",
						children: "Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [
							"About",
							"Portfolio",
							"Services",
							"Pricing"
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${l.toLowerCase()}`,
							className: "hover:text-gold transition",
							children: l
						}) }, l))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[10px] uppercase tracking-[0.35em] text-gold",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "hello@lumiere.studio" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "+1 (415) 555-0134" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "San Francisco, CA" })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Lumière Studio. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crafted with light & devotion" })]
			})]
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: "https://wa.me/14155550134",
		target: "_blank",
		rel: "noopener noreferrer",
		initial: {
			opacity: 0,
			scale: 0
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			delay: 2.5,
			type: "spring",
			stiffness: 200
		},
		whileHover: { scale: 1.08 },
		className: "fixed bottom-6 right-6 z-40 group",
		"aria-label": "Chat on WhatsApp",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_10px_40px_rgba(16,185,129,0.5)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full glass gold-border px-3 py-1.5 text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition pointer-events-none",
				children: "Chat with us"
			})
		]
	});
}
function LoadingScreen() {
	const [gone, setGone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setGone(true), 1800);
		return () => clearTimeout(t);
	}, []);
	if (gone) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .6 },
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-ink",
		onAnimationComplete: () => {},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-32 w-32",
				children: [[
					0,
					45,
					90,
					135,
					180,
					225,
					270,
					315
				].map((deg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						rotate: deg,
						scale: 1
					},
					animate: {
						rotate: deg + 90,
						scale: 0
					},
					transition: {
						duration: 1.4,
						delay: .3,
						ease: [
							.7,
							0,
							.3,
							1
						]
					},
					className: "absolute inset-0 origin-center",
					style: { transform: `rotate(${deg}deg)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-0 h-1/2 w-16 -translate-x-1/2 origin-bottom",
						style: {
							clipPath: "polygon(0 0, 100% 0, 50% 100%)",
							background: "linear-gradient(180deg, #1a1a1a, #0a0a0a)",
							border: "1px solid rgba(212,162,76,0.4)"
						}
					})
				}, deg)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-gold animate-pulse-gold" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 6
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .2 },
				className: "font-display text-lg tracking-[0.3em] gold-text uppercase",
				children: "Lumière Studio"
			})]
		})
	});
}
function Lightbox({ src, title, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!src) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [src, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: src && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		className: "fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 backdrop-blur-md p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onClose,
			className: "absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full glass gold-border text-gold hover:bg-gold/10",
			"aria-label": "Close",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .9,
				y: 20
			},
			animate: {
				scale: 1,
				y: 0
			},
			exit: {
				scale: .9,
				y: 20
			},
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 25
			},
			onClick: (e) => e.stopPropagation(),
			className: "relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl gold-border gold-glow",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: title,
				className: "max-h-[85vh] w-auto object-contain"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xl gold-text",
					children: title
				})
			})]
		})]
	}) });
}
function Index() {
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const open = (src, title) => setLightbox({
		src,
		title
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, { onOpen: open }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { onOpen: open }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				src: lightbox?.src ?? null,
				title: lightbox?.title ?? "",
				onClose: () => setLightbox(null)
			})
		]
	});
}
//#endregion
export { Index as component };
