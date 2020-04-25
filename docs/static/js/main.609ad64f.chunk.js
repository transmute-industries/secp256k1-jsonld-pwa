(this["webpackJsonp@transmute/secp256k1-jsonld-pwa"] =
  this["webpackJsonp@transmute/secp256k1-jsonld-pwa"] || []).push([
  [0],
  {
    150: function (e, t) {},
    182: function (e, t) {},
    275: function (e, t) {},
    280: function (e, t) {},
    288: function (e, t) {},
    289: function (e, t) {},
    294: function (e, t) {},
    299: function (e, t) {},
    304: function (e, t) {},
    398: function (e, t) {},
    409: function (e, t) {},
    422: function (e, t) {},
    444: function (e, t) {},
    463: function (e, t, a) {
      e.exports = a.p + "static/media/logo.33b194d8.svg";
    },
    484: function (e, t, a) {
      e.exports = a(824);
    },
    489: function (e, t, a) {},
    514: function (e, t) {},
    516: function (e, t) {},
    547: function (e, t) {},
    548: function (e, t) {},
    620: function (e, t) {},
    624: function (e, t) {},
    635: function (e, t) {},
    636: function (e, t) {},
    646: function (e, t) {},
    654: function (e, t) {},
    655: function (e, t) {},
    673: function (e, t) {},
    717: function (e, t) {},
    718: function (e, t) {},
    746: function (e, t) {},
    754: function (e, t) {},
    755: function (e, t) {},
    764: function (e, t) {},
    775: function (e, t) {},
    783: function (e, t) {},
    784: function (e, t) {},
    803: function (e, t) {},
    824: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = {};
      a.r(n),
        a.d(n, "setTmuiProp", function () {
          return x;
        });
      var r = a(0),
        o = a.n(r),
        i = a(28),
        c = a.n(i),
        l = (a(489), a(236)),
        s = a(192),
        u = a(137),
        m = a(448);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var p = a(14),
        d = a(53),
        f = a(311),
        b = a(318),
        h = a(449),
        g = a.n(h),
        y = a(450),
        v = a(451),
        E = a(452),
        k = a.n(E),
        O = a(3),
        j = a(887),
        w = a(891),
        x = Object(w.a)("tmui/SET_TMUI_PROP", function (e) {
          return e;
        }),
        S = Object(j.a)(
          Object(O.a)({}, x, function (e, t) {
            var a = t.payload;
            return Object(p.a)({}, e, {}, a);
          }),
          {
            isPrimaryDrawerOpen: !1,
            isSpeedDialogOpen: !1,
            activeTabIndex: 0,
            currentRole: { label: "Tier 0", value: "tier0" },
          }
        ),
        C = a(237),
        P = Object(u.c)(function (e) {
          return { tmui: e.tmui };
        }, Object(p.a)({}, n)),
        T = Object(C.b)({
          setTmuiProp: function (e) {
            var t = e.setTmuiProp;
            return function (e) {
              t(e);
            };
          },
          doToggleSpeedDial: function (e) {
            var t = e.setTmuiProp;
            return function (e) {
              t({ isSpeedDialogOpen: e });
            };
          },
          doSelectActiveTab: function (e) {
            var t = e.setTmuiProp;
            return function (e) {
              t({ activeTabIndex: e });
            };
          },
          doFabClick: function (e) {
            var t = e.setTmuiProp;
            return function (e) {
              t({ fabClick: e });
            };
          },
        }),
        M = { reducer: S, container: Object(C.a)(P, T) },
        F = a(94),
        W = Object(F.a)(),
        K = { router: Object(s.b)(W), tmui: M.reducer },
        H = a(2),
        N = a.n(H),
        R = a(30),
        B = a(6),
        L = a(197),
        D = a(886),
        I = a(885),
        J = a(116),
        z = a(107),
        A = a(156),
        V = a(157),
        U = a(467),
        _ = a(869),
        G = a(196),
        $ = '"Rajdhani"',
        Q = '"Roboto Condensed"',
        q = '"Lato"',
        X = (function (e) {
          Object(V.a)(a, e);
          var t = Object(A.a)(a);
          function a() {
            return Object(J.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(z.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.children,
                    t = Object(U.a)({
                      splashImage: "",
                      palette: {
                        type: "light",
                        primary: {
                          light: Object(G.lighten)("#594aa8", 0.07),
                          main: "#594aa8",
                          dark: Object(G.darken)("#594aa8", 0.07),
                        },
                        secondary: {
                          light: Object(G.lighten)("#fcb373", 0.07),
                          main: "#fcb373",
                          dark: Object(G.darken)("#fcb373", 0.07),
                        },
                      },
                      typography: {
                        useNextVariants: !0,
                        fontSize: 16,
                        fontFamily: [$, Q, q].join(","),
                        h1: { fontFamily: $, fontWeight: 600 },
                        h2: { fontFamily: $, fontWeight: 600 },
                        h3: { fontFamily: $, fontWeight: 600 },
                        h4: {
                          fontFamily: Q,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 400,
                        },
                        h5: {
                          fontFamily: Q,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 400,
                        },
                        h6: {
                          fontFamily: Q,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 400,
                        },
                        subtitle1: { fontFamily: $, fontWeight: 400 },
                        subtitle2: { fontFamily: Q, fontWeight: 400 },
                        body1: { fontFamily: q, fontWeight: 400 },
                        body2: { fontFamily: q, fontWeight: 400 },
                        button: { fontFamily: Q, fontWeight: 400 },
                        caption: { fontFamily: Q, fontWeight: 400 },
                        overline: {
                          fontFamily: Q,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          fontWeight: 300,
                        },
                      },
                      overrides: {
                        MuiInput: { input: { fontFamily: q } },
                        MuiInputLabel: { root: { fontFamily: Q } },
                        MuiAppBar: { root: {} },
                        MuiButton: { contained: { boxShadow: "none" } },
                      },
                    });
                  return o.a.createElement(_.a, { theme: t }, e);
                },
              },
            ]),
            a
          );
        })(r.Component),
        Y = a(892),
        Z = a(470),
        ee = a(9),
        te = a(455),
        ae = a.n(te),
        ne = a(457),
        re = a.n(ne),
        oe = a(310),
        ie = a.n(oe),
        ce = a(459),
        le = a.n(ce),
        se = a(872),
        ue = a(873),
        me = a(875),
        pe = a(874),
        de = a(456),
        fe = a.n(de),
        be = a(458),
        he = {
          success: ae.a,
          warning: fe.a,
          error: re.a,
          info: ie.a,
          default: ie.a,
        },
        ge = Object(be.a)(function (e) {
          return {
            success: { backgroundColor: se.a[600] },
            error: { backgroundColor: e.palette.error.dark },
            info: { backgroundColor: e.palette.primary.main },
            warning: { backgroundColor: ue.a[700] },
            icon: { fontSize: 20 },
            iconVariant: { opacity: 0.9, marginRight: e.spacing(1) },
            message: { display: "flex", alignItems: "center" },
          };
        });
      var ye = function (e) {
        var t = ge(),
          a = e.className,
          n = e.message,
          r = e.onClose,
          i = e.variant,
          c = Object(Z.a)(e, ["className", "message", "onClose", "variant"]),
          l = he[i];
        return o.a.createElement(
          pe.a,
          Object.assign(
            {
              className: Object(ee.a)(t[i], a),
              "aria-describedby": "client-snackbar",
              message: o.a.createElement(
                "span",
                { id: "client-snackbar", className: t.message },
                o.a.createElement(l, {
                  className: Object(ee.a)(t.icon, t.iconVariant),
                }),
                n
              ),
              action: [
                o.a.createElement(
                  me.a,
                  {
                    key: "close",
                    "aria-label": "close",
                    color: "inherit",
                    onClick: r,
                  },
                  o.a.createElement(le.a, { className: t.icon })
                ),
              ],
            },
            c
          )
        );
      };
      var ve = function (e) {
          var t = e.tmui.snackBarMessage || {
              variant: "default",
              vertical: "bottom",
              horizontal: "right",
            },
            a = t.open,
            n = t.variant,
            r = t.message,
            i = t.autoHideDuration,
            c = t.vertical,
            l = t.horizontal,
            s = function (t, a) {
              "clickaway" !== a &&
                e.setTmuiProp({
                  snackBarMessage: Object(p.a)({}, e.tmui.snackBarMessage, {
                    open: !1,
                  }),
                });
            };
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              Y.a,
              {
                anchorOrigin: { vertical: c, horizontal: l },
                open: a,
                autoHideDuration: i,
                onClose: s,
              },
              o.a.createElement(ye, { onClose: s, variant: n, message: r })
            )
          );
        },
        Ee = a(881),
        ke = a(880),
        Oe = a(890),
        je = a(889),
        we = a(460),
        xe = a.n(we),
        Se = a(882),
        Ce = a(45),
        Pe = a(879),
        Te = a(878),
        Me = a(468),
        Fe = a(461),
        We = a.n(Fe),
        Ke = a(462),
        He = a.n(Ke),
        Ne = Object(be.a)(function (e) {
          var t;
          return {
            root: {},
            grow: { flexGrow: 1 },
            drawer: Object(O.a)({}, e.breakpoints.up("sm"), {
              width: 240,
              flexShrink: 0,
            }),
            appBar: Object(O.a)({}, e.breakpoints.up("sm"), {
              width: "calc(100% - ".concat(240, "px)"),
              marginLeft: 240,
            }),
            menuButton: Object(O.a)(
              { marginRight: e.spacing(2) },
              e.breakpoints.up("sm"),
              { display: "none" }
            ),
            toolbar: e.mixins.toolbar,
            drawerPaper: { width: 240 },
            sectionDesktop: Object(O.a)(
              { display: "none" },
              e.breakpoints.up("sm"),
              { display: "flex" }
            ),
            sectionMobile: Object(O.a)(
              { display: "flex" },
              e.breakpoints.up("sm"),
              { display: "none" }
            ),
            content:
              ((t = {}),
              Object(O.a)(t, e.breakpoints.up("sm"), { marginLeft: 240 }),
              Object(O.a)(t, "flexGrow", 1),
              Object(O.a)(t, "padding", e.spacing(3)),
              t),
          };
        });
      var Re = function (e) {
          var t = e.container,
            a = Ne(),
            n = Object(Ce.a)(),
            r = o.a.useState(!1),
            i = Object(B.a)(r, 2),
            c = i[0],
            l = i[1],
            s = o.a.useState(null),
            u = Object(B.a)(s, 2),
            m = u[0],
            p = u[1],
            d = o.a.useState(null),
            f = Object(B.a)(d, 2),
            b = f[0],
            h = f[1],
            g = Boolean(m),
            y = Boolean(b),
            v = function () {
              l(!c);
            },
            E = function () {
              h(null);
            },
            k = o.a.createElement(
              Me.a,
              {
                anchorEl: m,
                anchorOrigin: { vertical: "top", horizontal: "right" },
                id: "primary-search-account-menu",
                keepMounted: !0,
                transformOrigin: { vertical: "top", horizontal: "right" },
                open: g,
                onClose: function () {
                  p(null), E();
                },
              },
              e.rightHandAccountMenu.map(function (e) {
                return e.displaySmUp
                  ? ""
                  : o.a.createElement(
                      Te.a,
                      { key: e.label, onClick: e.onClick },
                      e.label
                    );
              })
            ),
            O = o.a.createElement(
              Me.a,
              {
                anchorEl: b,
                anchorOrigin: { vertical: "top", horizontal: "right" },
                id: "primary-search-account-menu-mobile",
                keepMounted: !0,
                transformOrigin: { vertical: "top", horizontal: "right" },
                open: y,
                onClose: E,
              },
              e.rightHandAccountMenu.map(function (e) {
                return o.a.createElement(
                  Te.a,
                  { key: e.label, onClick: e.onClick },
                  o.a.createElement(
                    me.a,
                    { "aria-label": e.ariaLabel, color: "inherit" },
                    o.a.createElement(
                      Pe.a,
                      { badgeContent: e.badgeContent, color: "secondary" },
                      e.icon
                    )
                  ),
                  o.a.createElement("p", null, e.label)
                );
              })
            );
          return o.a.createElement(
            "div",
            { className: a.root },
            o.a.createElement(ke.a, null),
            o.a.createElement(
              Ee.a,
              { position: "fixed", className: a.appBar },
              o.a.createElement(
                Se.a,
                null,
                o.a.createElement(
                  me.a,
                  {
                    color: "inherit",
                    "aria-label": "open drawer",
                    edge: "start",
                    onClick: v,
                    className: a.menuButton,
                  },
                  o.a.createElement(xe.a, null)
                ),
                e.headerImage
                  ? o.a.createElement("img", {
                      src: e.headerImage,
                      alt: e.headerText,
                      className: a.title,
                      style: { height: "28px" },
                    })
                  : o.a.createElement(
                      L.a,
                      { className: a.title, variant: "h6", noWrap: !0 },
                      e.headerText
                    ),
                o.a.createElement("div", { className: a.grow }),
                o.a.createElement(
                  "div",
                  { className: a.sectionDesktop },
                  e.rightHandAccountMenu.map(function (e) {
                    return e.displaySmUp
                      ? o.a.createElement(
                          me.a,
                          {
                            key: e.ariaLabel,
                            "aria-label": e.ariaLabel,
                            color: "inherit",
                          },
                          o.a.createElement(
                            Pe.a,
                            {
                              color: "secondary",
                              badgeContent: e.badgeContent,
                            },
                            e.icon
                          )
                        )
                      : "";
                  }),
                  o.a.createElement(
                    me.a,
                    {
                      edge: "end",
                      "aria-label": "account of current user",
                      "aria-controls": "primary-search-account-menu",
                      "aria-haspopup": "true",
                      onClick: function (e) {
                        p(e.currentTarget);
                      },
                      color: "inherit",
                    },
                    o.a.createElement(We.a, null)
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: a.sectionMobile },
                  o.a.createElement(
                    me.a,
                    {
                      "aria-label": "show more",
                      "aria-controls": "primary-search-account-menu-mobile",
                      "aria-haspopup": "true",
                      onClick: function (e) {
                        h(e.currentTarget);
                      },
                      color: "inherit",
                    },
                    o.a.createElement(He.a, null)
                  )
                )
              )
            ),
            O,
            k,
            o.a.createElement(
              "nav",
              { className: a.drawer, "aria-label": "drawer menu" },
              o.a.createElement(
                je.a,
                { smUp: !0, implementation: "css" },
                o.a.createElement(
                  Oe.a,
                  {
                    container: t,
                    variant: "temporary",
                    anchor: "rtl" === n.direction ? "right" : "left",
                    open: c,
                    onClose: v,
                    classes: { paper: a.drawerPaper },
                    ModalProps: { keepMounted: !0 },
                  },
                  e.drawer
                )
              ),
              o.a.createElement(
                je.a,
                { xsDown: !0, implementation: "css" },
                o.a.createElement(
                  Oe.a,
                  {
                    classes: { paper: a.drawerPaper },
                    variant: "permanent",
                    open: !0,
                  },
                  e.drawer
                )
              )
            ),
            o.a.createElement(
              "main",
              { className: a.content },
              o.a.createElement("div", { className: a.toolbar }),
              o.a.createElement(
                "div",
                { style: { maxWidth: "100%" } },
                e.content
              )
            )
          );
        },
        Be = a(825),
        Le = a(883),
        De = a(884),
        Ie = a(877),
        Je = a(235),
        ze = a.n(Je),
        Ae = a(234),
        Ve = a.n(Ae),
        Ue = [
          {
            label: "Home",
            icon: o.a.createElement(Ve.a, null),
            showForRoles: ["tier0", "tier1", "tier2"],
            onClick: function () {
              W.push("/");
            },
          },
          {
            label: "Source Code",
            icon: o.a.createElement(ze.a, null),
            showForRoles: ["tier0", "tier1", "tier2"],
            onClick: function () {
              window.open(
                "https://github.com/transmute-industries/secp256k1.jsld.org",
                "_blank"
              );
            },
          },
        ];
      var _e = function (e) {
          var t = e.tmui,
            a = (e.setTmuiProp, o.a.useState({ currentRole: t.currentRole })),
            n = Object(B.a)(a, 1)[0];
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              Ie.a,
              null,
              Ue.filter(function (e) {
                return -1 !== e.showForRoles.indexOf(n.currentRole.value);
              }).map(function (e) {
                return o.a.createElement(
                  Be.a,
                  { button: !0, key: e.label, onClick: e.onClick },
                  o.a.createElement(Le.a, null, e.icon),
                  o.a.createElement(De.a, { primary: e.label })
                );
              })
            )
          );
        },
        Ge = [
          {
            badgeContent: 0,
            ariaLabel: "home",
            icon: o.a.createElement(Ve.a, null),
            label: "Home",
            onClick: function () {
              W.push("/");
            },
          },
          {
            badgeContent: 0,
            label: "Source Code",
            ariaLabel: "source",
            icon: o.a.createElement(ze.a, null),
            onClick: function () {
              window.open(
                "https://github.com/transmute-industries/secp256k1.jsld.org",
                "_blank"
              );
            },
          },
        ],
        $e = a(463),
        Qe = a.n($e),
        qe = function (e) {
          var t = e.tmui,
            a = e.setTmuiProp,
            n = e.children;
          return o.a.createElement(
            X,
            null,
            o.a.createElement(Re, {
              rightHandAccountMenu: Ge,
              headerImage: Qe.a,
              drawer: o.a.createElement(_e, { tmui: t, setTmuiProp: a }),
              content: n,
            }),
            o.a.createElement(ve, { tmui: t, setTmuiProp: a })
          );
        },
        Xe = (a(241), a(464)),
        Ye = a.n(Xe),
        Ze =
          (a(505),
          a(507),
          (function (e) {
            Object(V.a)(a, e);
            var t = Object(A.a)(a);
            function a() {
              return Object(J.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(z.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.jsonObject,
                      a = e.onChange;
                    return o.a.createElement(Ye.a, {
                      mode: "json",
                      theme: "github",
                      style: Object(p.a)({}, this.props.style, {
                        width: "100%",
                      }),
                      onChange: function (e) {
                        a(e);
                      },
                      name: "JSONEditorEditor",
                      value: JSON.stringify(t, null, 2),
                      editorProps: { $blockScrolling: !0 },
                    });
                  },
                },
              ]),
              a
            );
          })(r.Component)),
        et = a(446),
        tt = a(614),
        at = tt.EcdsaSecp256k1KeyClass2019,
        nt = tt.EcdsaSecp256k1Signature2019,
        rt = tt.defaultDocumentLoader,
        ot = a(724),
        it = ot.EcdsaSecp256k1RecoveryMethod2020,
        ct = ot.EcdsaSecp256k1RecoverySignature2020,
        lt = a(787),
        st = lt.purposes.AssertionProofPurpose,
        ut = a(810),
        mt = a(819),
        pt = function (e) {
          return console.log(e), rt(e);
        },
        dt = function (e) {
          var t = e.tmui,
            a = e.setTmuiProp,
            n = o.a.useState({
              mnemonic: "",
              path: "m/0/2147483647'/1",
              publicKeyHex: "",
              privateKeyHex: "",
              editorObject: {
                "@context": "https://schema.org",
                "@type": "SpecialAnnouncement",
                name: "Stanford announce COVID-19 testing facility",
                text:
                  "Stanford Health Care\u2019s same-day primary care program is offering drive-through testing, by appointment, for SARS-CoV-2, the coronavirus that causes COVID-19.",
                datePosted: "2020-03-16",
                url:
                  "http://med.stanford.edu/news/all-news/2020/03/stanford-offers-drive-through-coronavirus-test.html",
                category: "https://www.wikidata.org/wiki/Q81068910",
                announcementLocation: {
                  "@type": "CovidTestingFacility",
                  name: "Stanford Health Care",
                  url: "https://stanfordhealthcare.org/",
                },
              },
            }),
            r = Object(B.a)(n, 2),
            i = r[0],
            c = r[1],
            l = i.mnemonic,
            s = i.path,
            u = i.publicKeyHex,
            m = i.privateKeyHex,
            d = i.editorObject,
            f = i.es256kSignedEditorObject,
            b = i.es256krSignedEditorObject;
          return (
            o.a.useEffect(function () {
              Object(R.a)(
                N.a.mark(function e() {
                  var t, a, n, r, o, l, u, m, f, b, h, g, y, v, E;
                  return N.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = ut.generateMnemonic()),
                            (a = ut.mnemonicToSeed(t)),
                            (n = mt.fromMasterSeed(a)),
                            (r = n.derive(s)),
                            (o = r.privateKey.toString("hex")),
                            (l = r.publicKey.toString("hex")),
                            (e.next = 8),
                            et.keyUtils.privateJWKFromPrivateKeyHex(o)
                          );
                        case 8:
                          return (
                            (u = e.sent),
                            (e.next = 11),
                            et.keyUtils.publicJWKFromPublicKeyHex(l)
                          );
                        case 11:
                          return (
                            (m = e.sent),
                            (f = new nt({
                              key: new at({
                                id: "did:example:123#key-0",
                                type: "EcdsaSecp256k1VerificationKey2019",
                                controller: "did:example:123",
                                privateKeyJwk: u,
                              }),
                            })),
                            (e.next = 15),
                            lt.sign(Object(p.a)({}, d), {
                              compactProof: !1,
                              documentLoader: rt,
                              purpose: new st(),
                              suite: f,
                            })
                          );
                        case 15:
                          return (
                            (b = e.sent),
                            (h = new ct({
                              key: new it({
                                id: "did:example:123#key-1",
                                type: "EcdsaSecp256k1RecoveryMethod2020",
                                controller: "did:example:123",
                                privateKeyJwk: u,
                              }),
                            })),
                            (e.next = 19),
                            lt.sign(Object(p.a)({}, d), {
                              compactProof: !1,
                              documentLoader: rt,
                              purpose: new st(),
                              suite: h,
                            })
                          );
                        case 19:
                          return (
                            (g = e.sent),
                            (y = {
                              "@context": [
                                "https://www.w3.org/ns/did/v1",
                                "https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld",
                              ],
                              id: "did:example:123",
                              assertionMethod: [
                                {
                                  id: "did:example:123#key-0",
                                  type: "EcdsaSecp256k1VerificationKey2019",
                                  controller: "did:example:123",
                                  publicKeyJwk: m,
                                },
                                {
                                  id: "did:example:123#key-1",
                                  type: "EcdsaSecp256k1RecoveryMethod2020",
                                  controller: "did:example:123",
                                  publicKeyJwk: m,
                                },
                              ],
                            }),
                            console.log(b),
                            (e.next = 24),
                            lt.verify(b, {
                              suite: f,
                              compactProof: !1,
                              documentLoader: pt,
                              purpose: new st({ controller: y }),
                            })
                          );
                        case 24:
                          return (
                            (v = e.sent),
                            (h.verifier = {
                              verify: function () {
                                return !0;
                              },
                            }),
                            (e.next = 28),
                            lt.verify(g, {
                              suite: h,
                              compactProof: !1,
                              documentLoader: pt,
                              purpose: new st({ controller: y }),
                            })
                          );
                        case 28:
                          (E = e.sent),
                            console.log(E),
                            c(
                              Object(p.a)({}, i, {
                                mnemonic: t,
                                publicKeyHex: l,
                                privateKeyHex: o,
                                privateKeyJwk: u,
                                es256kSignedEditorObject: b,
                                es256kSignedEditorObjectVerified: v,
                                es256krSignedEditorObject: g,
                              })
                            );
                        case 31:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            }, []),
            o.a.createElement(
              qe,
              { tmui: t, setTmuiProp: a },
              o.a.createElement(
                L.a,
                { variant: "h5", style: { marginBottom: "32px" } },
                "Secp256k1 JSON-LD"
              ),
              o.a.createElement(
                I.a,
                { container: !0, spacing: 6 },
                o.a.createElement(
                  I.a,
                  { item: !0, xs: 12 },
                  o.a.createElement(D.a, {
                    label: "BIP 39 Menmonic",
                    helperText: "Be careful trusting entropy sources!",
                    variant: "outlined",
                    fullWidth: !0,
                    value: l,
                  })
                ),
                o.a.createElement(
                  I.a,
                  { item: !0, xs: 12 },
                  o.a.createElement(D.a, {
                    label: "HD Path",
                    variant: "outlined",
                    fullWidth: !0,
                    value: s,
                  })
                ),
                o.a.createElement(
                  I.a,
                  { item: !0, xs: 12 },
                  o.a.createElement(D.a, {
                    label: "Public Key Hex",
                    variant: "outlined",
                    fullWidth: !0,
                    value: u,
                  })
                ),
                o.a.createElement(
                  I.a,
                  { item: !0, xs: 12 },
                  o.a.createElement(D.a, {
                    label: "Private Key Hex",
                    variant: "outlined",
                    fullWidth: !0,
                    value: m,
                  })
                ),
                o.a.createElement(
                  I.a,
                  { item: !0, xs: 12 },
                  o.a.createElement(Ze, {
                    jsonObject: d,
                    onChange: function (e) {
                      console.log("on change: ", e);
                    },
                  })
                ),
                o.a.createElement(
                  I.a,
                  { item: !0, xs: 12 },
                  o.a.createElement(Ze, {
                    jsonObject: f,
                    onChange: function (e) {
                      console.log("on change: ", e);
                    },
                  })
                ),
                o.a.createElement(
                  I.a,
                  { item: !0, xs: 12 },
                  o.a.createElement(Ze, {
                    jsonObject: b,
                    onChange: function (e) {
                      console.log("on change: ", e);
                    },
                  })
                )
              )
            )
          );
        },
        ft = [
          {
            path: "/",
            exact: !0,
            component: Object(d.compose)(M.container)(function (e) {
              return o.a.createElement(dt, e);
            }),
          },
        ],
        bt = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = { key: "root", whitelist: ["keystore"], storage: g.a },
            a = [v.a, Object(b.a)(W)];
          var n = Object(d.createStore)(
              Object(f.a)(
                t,
                Object(d.combineReducers)(Object(p.a)({}, K, {}, e))
              ),
              Object(y.composeWithDevTools)(
                Object(d.compose)(d.applyMiddleware.apply(void 0, a), k.a)
              )
            ),
            r = Object(f.b)(n);
          return { store: n, persistor: r, history: W };
        })(),
        ht = bt.store,
        gt = bt.persistor,
        yt = bt.history;
      c.a.render(
        o.a.createElement(
          u.a,
          { store: ht },
          o.a.createElement(
            m.PersistGate,
            { persistor: gt },
            o.a.createElement(
              s.a,
              { history: yt },
              o.a.createElement(
                l.c,
                null,
                ft.map(function (e) {
                  var t = e.exact,
                    a = e.path,
                    n = e.component;
                  return o.a.createElement(l.a, {
                    key: a,
                    exact: t,
                    path: a,
                    component: n,
                  });
                })
              )
            )
          )
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[484, 1, 2]],
]);
//# sourceMappingURL=main.609ad64f.chunk.js.map
