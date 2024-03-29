!(function () {
  function e(e, t, r) {
    if (null == e) return !1;
    if (Ye && e.forEach === Ye) e.forEach(t, r);
    else if (st(e) && e.length === +e.length) {
      for (var a = 0, i = e.length; a < i; a++) if (a in e && t.call(r, e[a], a, e) === nt) return !1;
    } else for (var n in e) if (it.call(e, n) && t.call(r, e[n], n, e) === nt) return !1;
  }
  function t(t, r) {
    var a = [];
    return null == t
      ? a
      : Array.prototype.map && t.map === Array.prototype.map
      ? t.map(r)
      : (e(t, function (e, t, i) {
          a.push(r(e, t, i));
        }),
        a);
  }
  function r(t) {
    return (
      e(et.call(arguments, 1), function (e) {
        for (var r in e) it.call(e, r) && void 0 !== e[r] && (t[r] = e[r]);
      }),
      t
    );
  }
  function a(t) {
    return (
      e(et.call(arguments, 1), function (e) {
        for (var a in e) void 0 !== e[a] && (f(e[a]) && f(t[a]) ? r(t[a], e[a]) : (t[a] = e[a]));
      }),
      t
    );
  }
  function i(t) {
    return (
      e(et.call(arguments, 1), function (e) {
        for (var r in e) void 0 !== e[r] && void 0 === t[r] && (t[r] = e[r]);
      }),
      t
    );
  }
  function n(e) {
    if (!e) return !1;
    var t = at.call(e);
    return "[object Function]" == t || "[object AsyncFunction]" == t;
  }
  function s(e) {
    return !(!e || !it.call(e, "callee"));
  }
  function l(e) {
    return e ? (e.toArray ? e.toArray() : st(e) ? et.call(e) : s(e) ? et.call(e) : c(e)) : [];
  }
  function c(t) {
    var r = [];
    return null == t
      ? r
      : (e(t, function (e) {
          r[r.length] = e;
        }),
        r);
  }
  function u(e, t) {
    var r = e.indexOf;
    if (r) return r.call(e, t);
    for (var a = 0; a < e.length; a++) if (t === e[a]) return a;
    return -1;
  }
  function p(e, t, r) {
    var a = Object.prototype.hasOwnProperty;
    if (e.filter) return e.filter(t);
    for (var i = [], n = 0; n < e.length; n++)
      if (a.call(e, n)) {
        var s = e[n];
        t.call(r, s, n, e) && i.push(s);
      }
    return i;
  }
  function d(e, t) {
    return (e.prototype = new t()), (e.prototype.constructor = e), (e.superclass = t.prototype), e;
  }
  function _(e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  function f(e) {
    return null != e && "[object Object]" == at.call(e);
  }
  function h(e) {
    if (f(e)) {
      for (var t in e) if (it.call(e, t)) return !1;
      return !0;
    }
    return !1;
  }
  function g(e) {
    return void 0 === e;
  }
  function v(e) {
    return "[object String]" == at.call(e);
  }
  function y(e) {
    return "[object Date]" == at.call(e);
  }
  function w(e) {
    return "[object Boolean]" == at.call(e);
  }
  function S(e) {
    return "[object Number]" == at.call(e) && /[\d\.]+/.test(String(e));
  }
  function b(e) {
    return !(!e || 1 !== e.nodeType);
  }
  function k(e) {
    try {
      JSON.parse(e);
    } catch (t) {
      return !1;
    }
    return !0;
  }
  function P(e) {
    var t = null;
    try {
      t = JSON.parse(e);
    } catch (r) {
      return !1;
    }
    return t;
  }
  function D(e, t, r) {
    var a,
      i,
      n,
      s = null,
      o = 0;
    r || (r = {});
    var l = function () {
      (o = r.leading === !1 ? 0 : lt()), (s = null), (n = e.apply(a, i)), s || (a = i = null);
    };
    return function () {
      var c = lt();
      o || r.leading !== !1 || (o = c);
      var u = t - (c - o);
      return (
        (a = this),
        (i = arguments),
        u <= 0 || u > t
          ? (s && (clearTimeout(s), (s = null)), (o = c), (n = e.apply(a, i)), s || (a = i = null))
          : s || r.trailing === !1 || (s = setTimeout(l, u)),
        n
      );
    };
  }
  function C(e) {
    if ("string" != typeof e) return 0;
    var t = 0,
      r = null;
    if (0 == e.length) return t;
    for (var a = 0; a < e.length; a++) (r = e.charCodeAt(a)), (t = (t << 5) - t + r), (t &= t);
    return t;
  }
  function N() {
    if ("function" == typeof Uint32Array) {
      var e = "";
      if (("undefined" != typeof crypto ? (e = crypto) : "undefined" != typeof msCrypto && (e = msCrypto), f(e) && e.getRandomValues)) {
        var t = new Uint32Array(1),
          r = e.getRandomValues(t)[0],
          a = Math.pow(2, 32);
        return r / a;
      }
    }
    return ot(1e19) / 1e19;
  }
  function j(e) {
    try {
      return JSON.stringify(e, null, "  ");
    } catch (t) {
      return JSON.stringify(e);
    }
  }
  function A(e) {
    for (var t, r = [], a = {}, i = 0; i < e.length; i++) (t = e[i]), t in a || ((a[t] = !0), r.push(t));
    return r;
  }
  function $(e) {
    return btoa(
      encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
        return String.fromCharCode("0x" + t);
      })
    );
  }
  function O(e) {
    var r = t(atob(e).split(""), function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    });
    return decodeURIComponent(r.join(""));
  }
  function I(e, t) {
    (e = String(e)), (t = "number" == typeof t ? t : 13);
    for (var r = 126, a = e.split(""), i = 0, n = a.length; i < n; i++) {
      var s = a[i].charCodeAt(0);
      s < r && (a[i] = String.fromCharCode((a[i].charCodeAt(0) + t) % r));
    }
    return a.join("");
  }
  function T(e) {
    var t = 13,
      r = 126;
    return (e = String(e)), I(e, r - t);
  }
  function x(e, t) {
    if ("string" != typeof e) return t("\u8f6c\u6362unicode\u9519\u8bef", e), e;
    for (var r = "", a = 0; a < e.length; a++) r += "\\" + e.charCodeAt(a).toString(16);
    return r;
  }
  function L() {
    var e = !0,
      t = "__sensorsdatasupport__",
      r = "testIsSupportStorage";
    try {
      sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r), sessionStorage.removeItem(t, r), (e = !0)) : (e = !1);
    } catch (a) {
      e = !1;
    }
    return e;
  }
  function E() {
    if (
      ((L() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug")) || ct.show_log) &&
      (!f(arguments[0]) || (ct.show_log !== !0 && "string" !== ct.show_log && ct.show_log !== !1) || (arguments[0] = j(arguments[0])),
      "object" == typeof console && console.log)
    )
      try {
        return console.log.apply(console, arguments);
      } catch (e) {
        console.log(arguments[0]);
      }
  }
  function H(e, t) {
    if ("string" == typeof t) return J(e, t);
    if (st(t)) {
      for (var r = !1, a = 0; a < t.length; a++) {
        var i = J(e, t[a]);
        if (i) {
          r = !0;
          break;
        }
      }
      return r;
    }
  }
  function J(e, t) {
    return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0;
  }
  function U(e, t) {
    var r = "",
      a = "";
    return (
      e.textContent ? (r = _(e.textContent)) : e.innerText && (r = _(e.innerText)),
      r &&
        (r = r
          .replace(/[\r\n]/g, " ")
          .replace(/[ ]+/g, " ")
          .substring(0, 255)),
      (a = r || ""),
      ("input" !== t && "INPUT" !== t) ||
        ("button" === e.type || "submit" === e.type
          ? (a = e.value || "")
          : ct.heatmap && "function" == typeof ct.heatmap.collect_input && ct.heatmap.collect_input(e) && (a = e.value || "")),
      a
    );
  }
  function B(e) {
    e = r(
      {
        success: function () {},
        error: function () {},
        appendCall: function (e) {
          document.getElementsByTagName("head")[0].appendChild(e);
        },
      },
      e
    );
    var t = null;
    "css" === e.type && ((t = document.createElement("link")), (t.rel = "stylesheet"), (t.href = e.url)),
      "js" === e.type &&
        ((t = document.createElement("script")),
        (t.async = "async"),
        t.setAttribute("charset", "UTF-8"),
        (t.src = e.url),
        (t.type = "text/javascript")),
      (t.onload = t.onreadystatechange =
        function () {
          (this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState) ||
            (e.success(), (t.onload = t.onreadystatechange = null));
        }),
      (t.onerror = function () {
        e.error(), (t.onerror = null);
      }),
      e.appendCall(t);
  }
  function R(e) {
    return new R.init(e);
  }
  function M(e) {
    var t = document.createElement("style");
    t.type = "text/css";
    try {
      t.appendChild(document.createTextNode(e));
    } catch (r) {
      t.styleSheet.cssText = e;
    }
    var a = document.getElementsByTagName("head")[0],
      i = document.getElementsByTagName("script")[0];
    a ? (a.children.length ? a.insertBefore(t, a.children[0]) : a.appendChild(t)) : i.parentNode.insertBefore(t, i);
  }
  function K(e) {
    function t(e, t) {
      e = _(e);
      var r;
      if ("body" === e) return document.getElementsByTagName("body")[0];
      if (0 === e.indexOf("#")) (e = e.slice(1)), (r = document.getElementById(e));
      else if (e.indexOf(":nth-of-type") > -1) {
        var a = e.split(":nth-of-type");
        if (!a[0] || !a[1]) return null;
        var i = a[0],
          n = a[1].match(/\(([0-9]+)\)/);
        if (!n || !n[1]) return null;
        var s = Number(n[1]);
        if (!(b(t) && t.children && t.children.length > 0)) return null;
        for (var o = t.children, l = 0; l < o.length; l++)
          if (b(o[l])) {
            var c = o[l].tagName.toLowerCase();
            if (c === i && (s--, 0 === s)) {
              r = o[l];
              break;
            }
          }
        if (s > 0) return null;
      }
      return r ? r : null;
    }
    function r(e) {
      var i,
        n = a.shift();
      if (!n) return e;
      try {
        i = t(n, e);
      } catch (s) {
        E(s);
      }
      return i && b(i) ? r(i) : null;
    }
    if (!v(e)) return null;
    var a = e.split(">"),
      i = null;
    return (i = r()), i && b(i) ? i : null;
  }
  function W(e) {
    var t = e;
    try {
      t = decodeURIComponent(e);
    } catch (r) {
      t = e;
    }
    return t;
  }
  function q(e) {
    var t = e;
    try {
      t = decodeURI(e);
    } catch (r) {
      t = e;
    }
    return t;
  }
  function F(e, t) {
    (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")), (e = decodeURIComponent(e));
    var r = "[\\?&]" + t + "=([^&#]*)",
      a = new RegExp(r),
      i = a.exec(e);
    return null === i || (i && "string" != typeof i[1] && i[1].length) ? "" : decodeURIComponent(i[1]);
  }
  function V(e) {
    var t = function (e) {
      (this._fields = { Username: 4, Password: 5, Port: 7, Protocol: 2, Host: 6, Path: 8, URL: 0, QueryString: 9, Fragment: 10 }),
        (this._values = {}),
        (this._regex = null),
        (this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/),
        "undefined" != typeof e && this._parse(e);
    };
    return (
      (t.prototype.setUrl = function (e) {
        this._parse(e);
      }),
      (t.prototype._initValues = function () {
        for (var e in this._fields) this._values[e] = "";
      }),
      (t.prototype.addQueryString = function (e) {
        if ("object" != typeof e) return !1;
        var t = this._values.QueryString || "";
        for (var r in e)
          t = new RegExp(r + "[^&]+").test(t)
            ? t.replace(new RegExp(r + "[^&]+"), r + "=" + e[r])
            : "&" === t.slice(-1)
            ? t + r + "=" + e[r]
            : "" === t
            ? r + "=" + e[r]
            : t + "&" + r + "=" + e[r];
        this._values.QueryString = t;
      }),
      (t.prototype.getUrl = function () {
        var e = "";
        return (
          (e += this._values.Origin),
          (e += this._values.Port ? ":" + this._values.Port : ""),
          (e += this._values.Path),
          (e += this._values.QueryString ? "?" + this._values.QueryString : ""),
          (e += this._values.Fragment ? "#" + this._values.Fragment : "")
        );
      }),
      (t.prototype.getUrl = function () {
        var e = "";
        return (
          (e += this._values.Origin),
          (e += this._values.Port ? ":" + this._values.Port : ""),
          (e += this._values.Path),
          (e += this._values.QueryString ? "?" + this._values.QueryString : "")
        );
      }),
      (t.prototype._parse = function (e) {
        this._initValues();
        var t = this._regex.exec(e);
        t || E("DPURLParser::_parse -> Invalid URL");
        for (var r in this._fields) "undefined" != typeof t[this._fields[r]] && (this._values[r] = t[this._fields[r]]);
        (this._values.Hostname = this._values.Host.replace(/:\d+$/, "")),
          (this._values.Origin = this._values.Protocol + "://" + this._values.Hostname);
      }),
      new t(e)
    );
  }
  function z(e) {
    e = e || "";
    for (
      var t = function (e) {
          return decodeURIComponent(e);
        },
        r = {},
        a = e.substring(1),
        i = a.split("&"),
        n = 0;
      n < i.length;
      n++
    ) {
      var s = i[n].indexOf("=");
      if (s !== -1) {
        var o = i[n].substring(0, s),
          l = i[n].substring(s + 1);
        (o = t(o)), (l = t(l)), (r[o] = l);
      }
    }
    return r;
  }
  function X(e) {
    var t = {},
      r = function () {
        var e;
        try {
          return (e = new URL("http://modernizr.com/")), "http://modernizr.com/" === e.href;
        } catch (t) {
          return !1;
        }
      };
    if ("function" == typeof window.URL && r())
      (t = new URL(e)),
        t.searchParams ||
          (t.searchParams = (function () {
            var e = z(t.search);
            return {
              get: function (t) {
                return e[t];
              },
            };
          })());
    else {
      var a = /^https?:\/\/.+/;
      a.test(e) === !1 && E("Invalid URL");
      var i = V(e);
      (t.hash = ""),
        (t.host = i._values.Host ? i._values.Host + (i._values.Port ? ":" + i._values.Port : "") : ""),
        (t.href = i._values.URL),
        (t.password = i._values.Password),
        (t.pathname = i._values.Path),
        (t.port = i._values.Port),
        (t.search = i._values.QueryString ? "?" + i._values.QueryString : ""),
        (t.username = i._values.Username),
        (t.hostname = i._values.Hostname),
        (t.protocol = i._values.Protocol ? i._values.Protocol + ":" : ""),
        (t.origin = i._values.Origin ? i._values.Origin + (i._values.Port ? ":" + i._values.Port : "") : ""),
        (t.searchParams = (function () {
          var e = z("?" + i._values.QueryString);
          return {
            get: function (t) {
              return e[t];
            },
          };
        })());
    }
    return t;
  }
  function Z(e, t) {
    (t && "string" == typeof t) || (t = "hostname\u89e3\u6790\u5f02\u5e38");
    var r = null;
    try {
      r = X(e).hostname;
    } catch (a) {
      E("getHostname\u4f20\u5165\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01");
    }
    return r || t;
  }
  function Q(e) {
    var t = {},
      r = e.split("?"),
      a = r[1] || "";
    return a && (t = z("?" + a)), t;
  }
  function G(e) {
    return q(v(e) ? e : location.href);
  }
  function Y(t) {
    return (
      e(t, function (e, r) {
        y(e) ? (t[r] = ee(e)) : f(e) && (t[r] = Y(e));
      }),
      t
    );
  }
  function ee(e) {
    function t(e) {
      return e < 10 ? "0" + e : e;
    }
    return (
      e.getFullYear() +
      "-" +
      t(e.getMonth() + 1) +
      "-" +
      t(e.getDate()) +
      " " +
      t(e.getHours()) +
      ":" +
      t(e.getMinutes()) +
      ":" +
      t(e.getSeconds()) +
      "." +
      t(e.getMilliseconds())
    );
  }
  function te(t) {
    f(t) &&
      e(t, function (e, r) {
        f(e) ? te(t[r]) : y(e) && (t[r] = ee(e));
      });
  }
  function re(e) {
    "undefined" != typeof e.properties.$project && ((e.project = e.properties.$project), delete e.properties.$project),
      "undefined" != typeof e.properties.$token && ((e.token = e.properties.$token), delete e.properties.$token);
  }
  function ae(e, t) {
    return S(t) && e.length > t
      ? (E("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + e), e.slice(0, t))
      : e;
  }
  function ie(t) {
    var r = ["$element_selector", "$element_path"],
      a = ["sensorsdata_app_visual_properties"];
    f(t) &&
      e(t, function (e, i) {
        if (f(e)) ie(t[i]);
        else if (v(e)) {
          if (u(a, i) > -1) return;
          t[i] = ae(e, u(r, i) > -1 ? 1024 : ct.max_string_length);
        }
      });
  }
  function ne(t) {
    return f(t)
      ? (e(t, function (r, a) {
          if (st(r)) {
            var i = [];
            e(r, function (e) {
              v(e)
                ? i.push(e)
                : E(
                    "\u60a8\u7684\u6570\u636e-",
                    a,
                    r,
                    "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664"
                  );
            }),
              (t[a] = i);
          }
          v(r) ||
            S(r) ||
            y(r) ||
            w(r) ||
            st(r) ||
            n(r) ||
            "$option" === a ||
            (E(
              "\u60a8\u7684\u6570\u636e-",
              a,
              r,
              "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"
            ),
            delete t[a]);
        }),
        t)
      : t;
  }
  function se(t) {
    var r = t.properties,
      a = JSON.parse(JSON.stringify(t));
    f(r) &&
      (e(r, function (e, t) {
        if (n(e))
          try {
            (r[t] = e(a)),
              n(r[t]) &&
                (E(
                  "\u60a8\u7684\u5c5e\u6027- " +
                    t +
                    " \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"
                ),
                delete r[t]);
          } catch (i) {
            delete r[t],
              E("\u60a8\u7684\u5c5e\u6027- " + t + " \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664");
          }
      }),
      ne(r));
  }
  function oe(t) {
    var r = [
      "distinct_id",
      "user_id",
      "id",
      "date",
      "datetime",
      "event",
      "events",
      "first_id",
      "original_id",
      "device_id",
      "properties",
      "second_id",
      "time",
      "users",
    ];
    f(t) &&
      e(r, function (e, r) {
        e in t &&
          (r < 3
            ? (delete t[e],
              E("\u60a8\u7684\u5c5e\u6027- " + e + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"))
            : E(
                "\u60a8\u7684\u5c5e\u6027- " +
                  e +
                  "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u8bf7\u907f\u514d\u5176\u4f5c\u4e3a\u5c5e\u6027\u540d"
              ));
      });
  }
  function le(e) {
    if ("object" == typeof e && e.$option) {
      var t = e.$option;
      return delete e.$option, t;
    }
    return {};
  }
  function ce(t) {
    var r = {};
    return (
      e(t, function (e, t) {
        null != e && (r[t] = e);
      }),
      r
    );
  }
  function ue(e) {
    var t = ct.current_domain;
    switch (typeof t) {
      case "function":
        var r = t();
        return "" === r || "" === _(r) ? "url\u89e3\u6790\u5931\u8d25" : r.indexOf(".") !== -1 ? r : "url\u89e3\u6790\u5931\u8d25";
      case "string":
        return "" === t || "" === _(t) ? "url\u89e3\u6790\u5931\u8d25" : t.indexOf(".") !== -1 ? t : "url\u89e3\u6790\u5931\u8d25";
      default:
        var a = he();
        return "" === e ? "url\u89e3\u6790\u5931\u8d25" : "" === a ? "url\u89e3\u6790\u5931\u8d25" : a;
    }
  }
  function pe(e) {
    if (!e.target) return !1;
    var t = e.target,
      r = t.tagName.toLowerCase(),
      a = {};
    return (
      (a.$element_type = r),
      (a.$element_name = t.getAttribute("name")),
      (a.$element_id = t.getAttribute("id")),
      (a.$element_class_name = "string" == typeof t.className ? t.className : null),
      (a.$element_target_url = t.getAttribute("href")),
      (a.$element_content = U(t, r)),
      (a = ce(a)),
      (a.$url = G()),
      (a.$url_path = location.pathname),
      (a.$title = document.title),
      (a.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0),
      a
    );
  }
  function de() {
    var e = document.referrer,
      t = "baidu.com";
    if (!e) return !1;
    try {
      var r = X(e).hostname;
      return r && r.substring(r.length - t.length) === t;
    } catch (a) {
      return !1;
    }
  }
  function _e() {
    var e = Q(document.referrer);
    return h(e) || !e.eqid ? gt().replace(/-/g, "") : e.eqid;
  }
  function fe() {
    var e = Q(document.referrer);
    return h(e) || !e.eqid ? "baidu_sem_keyword_id" : "baidu_seo_keyword_id";
  }
  function he(e) {
    function t(e) {
      return !!e && e;
    }
    e = e || location.hostname;
    var r = t(e);
    if (!r) return "";
    var a = r.split(".");
    if (st(a) && a.length >= 2 && !/^(\d+\.)+\d+$/.test(r))
      for (var i = "." + a.splice(a.length - 1, 1); a.length > 0; )
        if (
          ((i = "." + a.splice(a.length - 1, 1) + i),
          (document.cookie = "sensorsdata_domain_test=true; path=/; domain=" + i),
          document.cookie.indexOf("sensorsdata_domain_test=true") !== -1)
        ) {
          var n = new Date();
          return (
            n.setTime(n.getTime() - 1e3),
            (document.cookie = "sensorsdata_domain_test=true; expires=" + n.toGMTString() + "; path=/; domain=" + i),
            i
          );
        }
    return "";
  }
  function ge(e) {
    return (e = e || document.referrer), "" === e || he(Z(e)) !== he();
  }
  function me(e) {
    return (
      (e = e || document.referrer),
      "string" != typeof e
        ? "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e)
        : ((e = decodeURI(e)),
          0 === e.indexOf("https://www.baidu.com/") && (e = e.split("?")[0]),
          (e = e.slice(0, ct.max_referrer_string_length)),
          "string" == typeof e ? e : "")
    );
  }
  function ve(e) {
    var t = Z(e);
    if (!t || "hostname\u89e3\u6790\u5f02\u5e38" === t) return "";
    var r = {
      baidu: [/^.*\.baidu\.com$/],
      bing: [/^.*\.bing\.com$/],
      google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
      sm: [/^m\.sm\.cn$/],
      so: [/^.+\.so\.com$/],
      sogou: [/^.*\.sogou\.com$/],
      yahoo: [/^.*\.yahoo\.com$/],
    };
    for (var a in r) for (var i = r[a], n = 0, s = i.length; n < s; n++) if (i[n].test(t)) return a;
    return "\u672a\u77e5\u641c\u7d22\u5f15\u64ce";
  }
  function ye(e, t) {
    e = e || document.referrer;
    var r = ct.source_type.keyword;
    if (document && "string" == typeof e) {
      if (0 === e.indexOf("http")) {
        var a = ve(e),
          i = Q(e);
        if (h(i)) return ct.preset_properties.search_keyword_baidu && de() ? void 0 : "\u672a\u53d6\u5230\u503c";
        var n = null;
        for (var s in r)
          if (a === s && "object" == typeof i)
            if (((n = r[s]), st(n)))
              for (s = 0; s < n.length; s++) {
                var o = i[n[s]];
                if (o) return t ? { active: o } : o;
              }
            else if (i[n]) return t ? { active: i[n] } : i[n];
        return ct.preset_properties.search_keyword_baidu && de() ? void 0 : "\u672a\u53d6\u5230\u503c";
      }
      return "" === e ? "\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00" : "\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url";
    }
    return "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e);
  }
  function we(e) {
    var t = F(e, "gdt_vid"),
      r = F(e, "hash_key"),
      a = F(e, "callbacks"),
      i = { click_id: "", hash_key: "", callbacks: "" };
    return (
      v(t) &&
        t.length &&
        ((i.click_id = 16 == t.length || 18 == t.length ? t : "\u53c2\u6570\u89e3\u6790\u4e0d\u5408\u6cd5"),
        v(r) && r.length && (i.hash_key = r),
        v(a) && a.length && (i.callbacks = a)),
      i
    );
  }
  function Se() {
    function e(e, t) {
      for (var r = 0; r < e.length; r++) if (t.split("?")[0].indexOf(e[r]) !== -1) return !0;
    }
    var t = "(" + ct.source_type.utm.join("|") + ")\\=[^&]+",
      r = ct.source_type.search,
      a = ct.source_type.social,
      i = document.referrer || "",
      n = vt.pageProp.url;
    if (n) {
      var s = n.match(new RegExp(t));
      return s && s[0]
        ? "\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf"
        : e(r, i)
        ? "\u81ea\u7136\u641c\u7d22\u6d41\u91cf"
        : e(a, i)
        ? "\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf"
        : "" === i
        ? "\u76f4\u63a5\u6d41\u91cf"
        : "\u5f15\u8350\u6d41\u91cf";
    }
    return "\u83b7\u53d6url\u5f02\u5e38";
  }
  function be() {
    var e = {
      items: [],
      enqueue: function (e) {
        this.items.push(e), this.start();
      },
      dequeue: function () {
        return this.items.shift();
      },
      getCurrentItem: function () {
        return this.items[0];
      },
      isRun: !1,
      start: function () {
        this.items.length > 0 && !this.isRun && ((this.isRun = !0), this.getCurrentItem().start());
      },
      close: function () {
        this.dequeue(), (this.isRun = !1), this.start();
      },
    };
    return e;
  }
  function ke() {
    return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia;
  }
  function Pe() {
    var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
      t = "\u672a\u53d6\u5230\u503c";
    if (e) t = e.indexOf("landscape") > -1 ? "landscape" : "portrait";
    else if (ke()) {
      var r = window.matchMedia || window.msMatchMedia;
      r("(orientation: landscape)").matches ? (t = "landscape") : r("(orientation: portrait)").matches && (t = "portrait");
    }
    return t;
  }
  function De() {
    return (
      "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest() || "undefined" != typeof XDomainRequest)
    );
  }
  function Ce() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }
  function Ne() {
    try {
      var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
      return e && e[1] ? Number.parseInt(e[1], 10) : "";
    } catch (t) {
      return "";
    }
  }
  function je() {
    var e,
      t = {},
      r = navigator.userAgent.toLowerCase();
    return (
      (e = r.match(/opera.([\d.]+)/))
        ? (t.opera = Number(e[1].split(".")[0]))
        : (e = r.match(/msie ([\d.]+)/))
        ? (t.ie = Number(e[1].split(".")[0]))
        : (e = r.match(/edge.([\d.]+)/))
        ? (t.edge = Number(e[1].split(".")[0]))
        : (e = r.match(/firefox\/([\d.]+)/))
        ? (t.firefox = Number(e[1].split(".")[0]))
        : (e = r.match(/chrome\/([\d.]+)/))
        ? (t.chrome = Number(e[1].split(".")[0]))
        : (e = r.match(/version\/([\d.]+).*safari/))
        ? (t.safari = Number(e[1].match(/^\d*.\d*/)))
        : (e = r.match(/trident\/([\d.]+)/)) && (t.ie = 11),
      t
    );
  }
  function Ae() {
    var e = !1;
    if ("object" != typeof navigator || "function" != typeof navigator.sendBeacon) return e;
    var t = je(),
      r = navigator.userAgent.toLowerCase();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      var a = /os [\d._]*/gi,
        i = r.match(a),
        n = (i + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
        s = n.split(".");
      "undefined" == typeof t.safari && (t.safari = s[0]),
        s[0] && s[0] < 13
          ? (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) && (e = !0)
          : (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 11.3) && (e = !0);
    } else (t.chrome > 38 || t.edge > 13 || t.firefox > 30 || t.opera > 25 || t.safari > 11) && (e = !0);
    return e;
  }
  function $e() {
    function e(t) {
      return t && ((t.preventDefault = e.preventDefault), (t.stopPropagation = e.stopPropagation), (t._getPath = e._getPath)), t;
    }
    function t(t, r, a, i) {
      var n = function (n) {
        if ((n = n || e(window.event))) {
          n.target = n.srcElement;
          var s,
            o,
            l = !0;
          return (
            "function" == typeof a && (s = a(n)),
            (o = r.call(t, n)),
            "beforeunload" !== i ? ((!1 !== s && !1 !== o) || (l = !1), l) : void 0
          );
        }
      };
      return n;
    }
    (e._getPath = function () {
      var e = this;
      return this.path || (this.composedPath && this.composedPath()) || R(e.target).getParents();
    }),
      (e.preventDefault = function () {
        this.returnValue = !1;
      }),
      (e.stopPropagation = function () {
        this.cancelBubble = !0;
      });
    var r = function (r, a, i) {
      var n = !(!f(ct.heatmap) || !ct.heatmap.useCapture);
      if ((f(ct.heatmap) && "undefined" == typeof ct.heatmap.useCapture && "click" === a && (n = !0), r && r.addEventListener))
        r.addEventListener(
          a,
          function (t) {
            (t._getPath = e._getPath), i.call(this, t);
          },
          n
        );
      else {
        var s = "on" + a,
          o = r[s];
        r[s] = t(r, i, o, a);
      }
    };
    r.apply(null, arguments);
  }
  function Oe(e) {
    var t = "pushState" in window.history ? "popstate" : "hashchange";
    $e(window, t, e);
  }
  function Ie(e) {
    var t = location.href,
      r = window.history.pushState,
      a = window.history.replaceState;
    n(window.history.pushState) &&
      (window.history.pushState = function () {
        r.apply(window.history, arguments), e(t), (t = location.href);
      }),
      n(window.history.replaceState) &&
        (window.history.replaceState = function () {
          a.apply(window.history, arguments), e(t), (t = location.href);
        });
    var i;
    (i = window.document.documentMode ? "hashchange" : r ? "popstate" : "hashchange"),
      $e(window, i, function () {
        e(t), (t = location.href);
      });
  }
  function Te(e) {
    var t = {
      visibleHandler: n(e.visible) ? e.visible : function () {},
      hiddenHandler: n(e.hidden) ? e.hidden : function () {},
      visibilityChange: null,
      hidden: null,
      isSupport: function () {
        return "undefined" != typeof document[this.hidden];
      },
      init: function () {
        "undefined" != typeof document.hidden
          ? ((this.hidden = "hidden"), (this.visibilityChange = "visibilitychange"))
          : "undefined" != typeof document.mozHidden
          ? ((this.hidden = "mozHidden"), (this.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.msHidden
          ? ((this.hidden = "msHidden"), (this.visibilityChange = "msvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((this.hidden = "webkitHidden"), (this.visibilityChange = "webkitvisibilitychange")),
          this.listen();
      },
      listen: function () {
        if (this.isSupport()) {
          var e = this;
          $e(
            document,
            this.visibilityChange,
            function () {
              document[e.hidden] ? e.hiddenHandler() : e.visibleHandler();
            },
            1
          );
        } else $e(window, "focus", this.visibleHandler), $e(window, "blur", this.hiddenHandler);
      },
    };
    t.init();
  }
  function xe(e, t) {
    t = t || window;
    var r = !1,
      a = !0,
      i = t.document,
      n = i.documentElement,
      s = i.addEventListener,
      o = s ? "addEventListener" : "attachEvent",
      l = s ? "removeEventListener" : "detachEvent",
      c = s ? "" : "on",
      u = function (a) {
        ("readystatechange" == a.type && "complete" != i.readyState) ||
          (("load" == a.type ? t : i)[l](c + a.type, u, !1), !r && (r = !0) && e.call(t, a.type || a));
      },
      p = function () {
        try {
          n.doScroll("left");
        } catch (e) {
          return void setTimeout(p, 50);
        }
        u("poll");
      };
    if ("complete" == i.readyState) e.call(t, "lazy");
    else {
      if (!s && n.doScroll) {
        try {
          a = !t.frameElement;
        } catch (d) {
          E(d);
        }
        a && p();
      }
      i[o](c + "DOMContentLoaded", u, !1), i[o](c + "readystatechange", u, !1), t[o](c + "load", u, !1);
    }
  }
  function Le(e) {
    if (e)
      return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()
        ? new XMLHttpRequest()
        : "undefined" != typeof XDomainRequest
        ? new XDomainRequest()
        : null;
    if ("undefined" != typeof window.XMLHttpRequest) return new XMLHttpRequest();
    if (window.ActiveXObject)
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (t) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {
          E(t);
        }
      }
  }
  function Ee(t) {
    function a(e) {
      if (!e) return "";
      try {
        return JSON.parse(e);
      } catch (t) {
        return {};
      }
    }
    function i() {
      try {
        f(n) && n.abort && n.abort();
      } catch (e) {
        E(e);
      }
      s && (clearTimeout(s), (s = null), t.error && t.error(), (n.onreadystatechange = null), (n.onload = null), (n.onerror = null));
    }
    (t.timeout = t.timeout || 2e4), (t.credentials = "undefined" == typeof t.credentials || t.credentials);
    var n = Le(t.cors);
    if (!n) return !1;
    t.type || (t.type = t.data ? "POST" : "GET"), (t = r({ success: function () {}, error: function () {} }, t)), _t.protocol.ajax(t.url);
    var s,
      o = t.success,
      l = t.error;
    (t.success = function (e) {
      o(e), s && (clearTimeout(s), (s = null));
    }),
      (t.error = function (e) {
        l(e), s && (clearTimeout(s), (s = null));
      }),
      (s = setTimeout(function () {
        i();
      }, t.timeout)),
      "undefined" != typeof XDomainRequest &&
        n instanceof XDomainRequest &&
        ((n.onload = function () {
          t.success && t.success(a(n.responseText)), (n.onreadystatechange = null), (n.onload = null), (n.onerror = null);
        }),
        (n.onerror = function () {
          t.error && t.error(a(n.responseText), n.status), (n.onreadystatechange = null), (n.onerror = null), (n.onload = null);
        })),
      (n.onreadystatechange = function () {
        try {
          4 == n.readyState &&
            ((n.status >= 200 && n.status < 300) || 304 == n.status ? t.success(a(n.responseText)) : t.error(a(n.responseText), n.status),
            (n.onreadystatechange = null),
            (n.onload = null));
        } catch (e) {
          (n.onreadystatechange = null), (n.onload = null);
        }
      }),
      n.open(t.type, t.url, !0);
    try {
      t.credentials && (n.withCredentials = !0),
        f(t.header) &&
          e(t.header, function (e, t) {
            n.setRequestHeader && n.setRequestHeader(t, e);
          }),
        t.data &&
          (t.cors || (n.setRequestHeader && n.setRequestHeader("X-Requested-With", "XMLHttpRequest")),
          "application/json" === t.contentType
            ? n.setRequestHeader && n.setRequestHeader("Content-type", "application/json; charset=UTF-8")
            : n.setRequestHeader && n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"));
    } catch (c) {
      E(c);
    }
    n.send(t.data || null);
  }
  function He(t) {
    if (!f(t) || !v(t.callbackName)) return E("JSONP \u8bf7\u6c42\u7f3a\u5c11 callbackName"), !1;
    (t.success = n(t.success) ? t.success : function () {}), (t.error = n(t.error) ? t.error : function () {}), (t.data = t.data || "");
    var r = document.createElement("script"),
      a = document.getElementsByTagName("head")[0],
      i = null,
      s = !1;
    if (
      (a.appendChild(r),
      S(t.timeout) &&
        (i = setTimeout(function () {
          return (
            !s &&
            (t.error("timeout"),
            (window[t.callbackName] = function () {
              E("call jsonp error");
            }),
            (i = null),
            a.removeChild(r),
            void (s = !0))
          );
        }, t.timeout)),
      (window[t.callbackName] = function () {
        clearTimeout(i),
          (i = null),
          t.success.apply(null, arguments),
          (window[t.callbackName] = function () {
            E("call jsonp error");
          }),
          a.removeChild(r);
      }),
      t.url.indexOf("?") > -1 ? (t.url += "&callbackName=" + t.callbackName) : (t.url += "?callbackName=" + t.callbackName),
      f(t.data))
    ) {
      var o = [];
      e(t.data, function (e, t) {
        o.push(t + "=" + e);
      }),
        (t.data = o.join("&")),
        (t.url += "&" + t.data);
    }
    (r.onerror = function (e) {
      return (
        !s &&
        ((window[t.callbackName] = function () {
          E("call jsonp error");
        }),
        clearTimeout(i),
        (i = null),
        a.removeChild(r),
        t.error(e),
        void (s = !0))
      );
    }),
      (r.src = t.url);
  }
  function Je(e) {
    var t = !0;
    for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && !Ct.check(r, e[r])) return !1;
    return t;
  }
  function Ue(e, t) {
    var r = $(t),
      a = "crc=" + C(r);
    return e.indexOf("?") !== -1
      ? e + "&data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(a)
      : e + "?data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(a);
  }
  function Be(e) {
    var t = $(e),
      r = "crc=" + C(t);
    return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(r);
  }
  function Re(e) {
    var t = ["image", "ajax", "beacon"],
      r = t[0];
    return (
      (r = e.config && u(t, e.config.send_type) > -1 ? e.config.send_type : Qe.para.send_type),
      "beacon" === r && Ae() === !1 && (r = "image"),
      "ajax" === r && De() === !1 && (r = "image"),
      r
    );
  }
  function Me(e) {
    var t = Re(e);
    switch (t) {
      case "image":
        return new Ot(e);
      case "ajax":
        return new It(e);
      case "beacon":
        return new Tt(e);
      default:
        return new Ot(e);
    }
  }
  function Ke(e) {
    var t = Me(e),
      r = t.start;
    return (
      (t.start = function () {
        var e = this;
        r.apply(this, arguments),
          setTimeout(function () {
            e.isEnd(!0);
          }, Qe.para.callback_timeout);
      }),
      (t.end = function () {
        this.callback && this.callback();
        var e = this;
        setTimeout(function () {
          e.lastClear && e.lastClear();
        }, Qe.para.datasend_timeout - Qe.para.callback_timeout);
      }),
      (t.isEnd = function () {
        this.received || ((this.received = !0), this.end());
      }),
      t
    );
  }
  function We() {
    (this.sendingData = 0), (this.sendingItemKeys = []);
  }
  function qe() {
    e(Wt, function (e) {
      var t = Qe[e];
      Qe[e] = function () {
        if (Qe.readyState.state < 3) return st(Qe._q) || (Qe._q = []), Qe._q.push([e, arguments]), !1;
        {
          if (Qe.readyState.getState()) return t.apply(Qe, arguments);
          try {
            console.error("\u8bf7\u5148\u521d\u59cb\u5316\u795e\u7b56JS SDK");
          } catch (r) {
            Qe.log(r);
          }
        }
      };
    });
  }
  function Fe(e) {
    function t() {
      var e = [];
      r.touch_app_bridge || e.push(Qe.debug.defineMode("1")),
        f(Qe.para.app_js_bridge) || (e.push(Qe.debug.defineMode("2")), (r.verify_success = !1)),
        (f(Qe.para.heatmap) && "default" == Qe.para.heatmap.clickmap) || e.push(Qe.debug.defineMode("3")),
        "fail" === r.verify_success && e.push(Qe.debug.defineMode("4"));
      var t = { callType: "app_alert", data: e };
      SensorsData_App_Visual_Bridge && SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info
        ? SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info(JSON.stringify(t))
        : window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.sensorsdataNativeTracker &&
          window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage &&
          window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(t));
    }
    var r = Qe.bridge.bridge_info;
    if (
      f(window.SensorsData_App_Visual_Bridge) &&
      window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode &&
      (window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode === !0 ||
        window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode())
    )
      if (f(Qe.para.heatmap) && "default" == Qe.para.heatmap.clickmap)
        if (f(Qe.para.app_js_bridge) && "success" === r.verify_success)
          if (e) sa_jssdk_app_define_mode(Qe, e);
          else {
            var a = location.protocol,
              i = ["http:", "https:"];
            (a = u(i, a) > -1 ? a : "https:"),
              B({
                success: function () {
                  setTimeout(function () {
                    "undefined" != typeof sa_jssdk_app_define_mode && sa_jssdk_app_define_mode(Qe, e);
                  }, 0);
                },
                error: function () {},
                type: "js",
                url: a + "//static.sensorsdata.cn/sdk/" + Qe.lib_version + "/vapph5define.min.js",
              });
          }
        else t();
      else t();
  }
  function Ve() {
    Qe.para.is_track_single_page &&
      Ie(function (e) {
        var t = function (t) {
          (t = t || {}),
            e !== location.href && ((vt.pageProp.referrer = G(e)), Qe.quick("autoTrack", r({ $url: G(), $referrer: G(e) }, t)));
        };
        if ("boolean" == typeof Qe.para.is_track_single_page) t();
        else if ("function" == typeof Qe.para.is_track_single_page) {
          var a = Qe.para.is_track_single_page();
          f(a) ? t(a) : a === !0 && t();
        }
      });
  }
  function ze() {
    Qe._q &&
      st(Qe._q) &&
      Qe._q.length > 0 &&
      e(Qe._q, function (e) {
        Qe[e[0]].apply(Qe, Array.prototype.slice.call(e[1]));
      }),
      f(Qe.para.heatmap) && (jt.initHeatmap(), jt.initScrollmap());
  }
  function Xe() {
    Qe.readyState.setState(3),
      new Qe.JSBridge({
        type: "visualized",
        app_call_js: function () {
          Fe("undefined" != typeof sa_jssdk_app_define_mode ? !0 : !1);
        },
      }),
      Fe(!1),
      Qe.bridge.app_js_bridge_v1(),
      vt.initPage(),
      Ve(),
      Qe.para.batch_send &&
        ($e(window, "onpagehide" in window ? "pagehide" : "unload", function () {
          Qe.batchSend.clearPendingStatus();
        }),
        Qe.batchSend.batchInterval()),
      Qe.store.init(),
      Qe.vtrackBase.init(),
      Qe.readyState.setState(4),
      ze();
  }
  function Ze() {
    qt.isSeachHasKeyword()
      ? qt.hasKeywordHandle()
      : window.parent !== self && Ft.isSearchHasKeyword()
      ? Ft.verifyVtrackMode()
      : qt.isStorageHasKeyword()
      ? qt.storageHasKeywordHandle()
      : window.parent !== self && Ft.isStorageHasKeyword()
      ? Ft.verifyVtrackMode()
      : (Xe(), Ft.notifyUser());
  }
  var Qe = {};
  (function () {
    function e(a, i) {
      function n(e, t) {
        try {
          e();
        } catch (r) {
          t && t();
        }
      }
      function s(e) {
        if (null != s[e]) return s[e];
        var t;
        if ("bug-string-char-index" == e) t = "a" != "a"[0];
        else if ("json" == e) t = s("json-stringify") && s("date-serialization") && s("json-parse");
        else if ("date-serialization" == e) {
          if ((t = s("json-stringify") && w)) {
            var r = i.stringify;
            n(function () {
              t =
                '"-271821-04-20T00:00:00.000Z"' == r(new p(-864e13)) &&
                '"+275760-09-13T00:00:00.000Z"' == r(new p(864e13)) &&
                '"-000001-01-01T00:00:00.000Z"' == r(new p(-621987552e5)) &&
                '"1969-12-31T23:59:59.999Z"' == r(new p(-1));
            });
          }
        } else {
          var a,
            o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
          if ("json-stringify" == e) {
            var r = i.stringify,
              u = "function" == typeof r;
            u &&
              (((a = function () {
                return 1;
              }).toJSON = a),
              n(
                function () {
                  u =
                    "0" === r(0) &&
                    "0" === r(new l()) &&
                    '""' == r(new c()) &&
                    r(v) === g &&
                    r(g) === g &&
                    r() === g &&
                    "1" === r(a) &&
                    "[1]" == r([a]) &&
                    "[null]" == r([g]) &&
                    "null" == r(null) &&
                    "[null,null,null]" == r([g, v, null]) &&
                    r({ a: [a, !0, !1, null, "\0\b\n\f\r\t"] }) == o &&
                    "1" === r(null, a) &&
                    "[\n 1,\n 2\n]" == r([1, 2], null, 1);
                },
                function () {
                  u = !1;
                }
              )),
              (t = u);
          }
          if ("json-parse" == e) {
            var d,
              _ = i.parse;
            "function" == typeof _ &&
              n(
                function () {
                  0 !== _("0") ||
                    _(!1) ||
                    ((a = _(o)),
                    (d = 5 == a.a.length && 1 === a.a[0]),
                    d &&
                      (n(function () {
                        d = !_('"\t"');
                      }),
                      d &&
                        n(function () {
                          d = 1 !== _("01");
                        }),
                      d &&
                        n(function () {
                          d = 1 !== _("1.");
                        })));
                },
                function () {
                  d = !1;
                }
              ),
              (t = d);
          }
        }
        return (s[e] = !!t);
      }
      function o(e) {
        return I(this);
      }
      a || (a = r.Object()), i || (i = r.Object());
      var l = a.Number || r.Number,
        c = a.String || r.String,
        u = a.Object || r.Object,
        p = a.Date || r.Date,
        d = a.SyntaxError || r.SyntaxError,
        _ = a.TypeError || r.TypeError,
        f = a.Math || r.Math,
        h = a.JSON || r.JSON;
      "object" == typeof h && h && ((i.stringify = h.stringify), (i.parse = h.parse));
      var g,
        m = u.prototype,
        v = m.toString,
        y = m.hasOwnProperty,
        w = new p(-0xc782b5b800cec);
      if (
        (n(function () {
          w =
            w.getUTCFullYear() == -109252 &&
            0 === w.getUTCMonth() &&
            1 === w.getUTCDate() &&
            10 == w.getUTCHours() &&
            37 == w.getUTCMinutes() &&
            6 == w.getUTCSeconds() &&
            708 == w.getUTCMilliseconds();
        }),
        (s["bug-string-char-index"] = s["date-serialization"] = s.json = s["json-stringify"] = s["json-parse"] = null),
        !s("json"))
      ) {
        var S = "[object Function]",
          b = "[object Date]",
          k = "[object Number]",
          P = "[object String]",
          D = "[object Array]",
          C = "[object Boolean]",
          N = s("bug-string-char-index"),
          j = function (e, r) {
            var a,
              i,
              n,
              s = 0;
            ((a = function () {
              this.valueOf = 0;
            }).prototype.valueOf = 0),
              (i = new a());
            for (n in i) y.call(i, n) && s++;
            return (
              (a = i = null),
              s
                ? (j = function (e, t) {
                    var r,
                      a,
                      i = v.call(e) == S;
                    for (r in e) (i && "prototype" == r) || !y.call(e, r) || (a = "constructor" === r) || t(r);
                    (a || y.call(e, (r = "constructor"))) && t(r);
                  })
                : ((i = [
                    "valueOf",
                    "toString",
                    "toLocaleString",
                    "propertyIsEnumerable",
                    "isPrototypeOf",
                    "hasOwnProperty",
                    "constructor",
                  ]),
                  (j = function (e, r) {
                    var a,
                      n,
                      s = v.call(e) == S,
                      o = (!s && "function" != typeof e.constructor && t[typeof e.hasOwnProperty] && e.hasOwnProperty) || y;
                    for (a in e) (s && "prototype" == a) || !o.call(e, a) || r(a);
                    for (n = i.length; (a = i[--n]); ) o.call(e, a) && r(a);
                  })),
              j(e, r)
            );
          };
        if (!s("json-stringify") && !s("date-serialization")) {
          var A = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
            $ = "000000",
            O = function (e, t) {
              return ($ + (t || 0)).slice(-e);
            },
            I = function (e) {
              var t, r, a, i, n, s, o, l, c;
              if (w)
                t = function (e) {
                  (r = e.getUTCFullYear()),
                    (a = e.getUTCMonth()),
                    (i = e.getUTCDate()),
                    (s = e.getUTCHours()),
                    (o = e.getUTCMinutes()),
                    (l = e.getUTCSeconds()),
                    (c = e.getUTCMilliseconds());
                };
              else {
                var u = f.floor,
                  p = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                  d = function (e, t) {
                    return p[t] + 365 * (e - 1970) + u((e - 1969 + (t = +(t > 1))) / 4) - u((e - 1901 + t) / 100) + u((e - 1601 + t) / 400);
                  };
                t = function (e) {
                  for (i = u(e / 864e5), r = u(i / 365.2425) + 1970 - 1; d(r + 1, 0) <= i; r++);
                  for (a = u((i - d(r, 0)) / 30.42); d(r, a + 1) <= i; a++);
                  (i = 1 + i - d(r, a)),
                    (n = ((e % 864e5) + 864e5) % 864e5),
                    (s = u(n / 36e5) % 24),
                    (o = u(n / 6e4) % 60),
                    (l = u(n / 1e3) % 60),
                    (c = n % 1e3);
                };
              }
              return (I = function (e) {
                return (
                  e > -1 / 0 && e < 1 / 0
                    ? (t(e),
                      (e =
                        (r <= 0 || r >= 1e4 ? (r < 0 ? "-" : "+") + O(6, r < 0 ? -r : r) : O(4, r)) +
                        "-" +
                        O(2, a + 1) +
                        "-" +
                        O(2, i) +
                        "T" +
                        O(2, s) +
                        ":" +
                        O(2, o) +
                        ":" +
                        O(2, l) +
                        "." +
                        O(3, c) +
                        "Z"),
                      (r = a = i = s = o = l = c = null))
                    : (e = null),
                  e
                );
              })(e);
            };
          if (s("json-stringify") && !s("date-serialization")) {
            var T = i.stringify;
            i.stringify = function (e, t, r) {
              var a = p.prototype.toJSON;
              p.prototype.toJSON = o;
              var i = T(e, t, r);
              return (p.prototype.toJSON = a), i;
            };
          } else {
            var x = "\\u00",
              L = function (e) {
                var t = e.charCodeAt(0),
                  r = A[t];
                return r ? r : x + O(2, t.toString(16));
              },
              E = /[\x00-\x1f\x22\x5c]/g,
              H = function (e) {
                return (E.lastIndex = 0), '"' + (E.test(e) ? e.replace(E, L) : e) + '"';
              },
              J = function (e, t, r, a, i, s, o) {
                var l, c, u, d, f, h, m, y, w;
                if (
                  (n(function () {
                    l = t[e];
                  }),
                  "object" == typeof l &&
                    l &&
                    (l.getUTCFullYear && v.call(l) == b && l.toJSON === p.prototype.toJSON
                      ? (l = I(l))
                      : "function" == typeof l.toJSON && (l = l.toJSON(e))),
                  r && (l = r.call(t, e, l)),
                  l == g)
                )
                  return l === g ? l : "null";
                switch (((c = typeof l), "object" == c && (u = v.call(l)), u || c)) {
                  case "boolean":
                  case C:
                    return "" + l;
                  case "number":
                  case k:
                    return l > -1 / 0 && l < 1 / 0 ? "" + l : "null";
                  case "string":
                  case P:
                    return H("" + l);
                }
                if ("object" == typeof l) {
                  for (m = o.length; m--; ) if (o[m] === l) throw _();
                  if ((o.push(l), (d = []), (y = s), (s += i), u == D)) {
                    for (h = 0, m = l.length; h < m; h++) (f = J(h, l, r, a, i, s, o)), d.push(f === g ? "null" : f);
                    w = d.length ? (i ? "[\n" + s + d.join(",\n" + s) + "\n" + y + "]" : "[" + d.join(",") + "]") : "[]";
                  } else
                    j(a || l, function (e) {
                      var t = J(e, l, r, a, i, s, o);
                      t !== g && d.push(H(e) + ":" + (i ? " " : "") + t);
                    }),
                      (w = d.length ? (i ? "{\n" + s + d.join(",\n" + s) + "\n" + y + "}" : "{" + d.join(",") + "}") : "{}");
                  return o.pop(), w;
                }
              };
            i.stringify = function (e, r, a) {
              var i, n, s, o;
              if (t[typeof r] && r)
                if (((o = v.call(r)), o == S)) n = r;
                else if (o == D) {
                  s = {};
                  for (var l, c = 0, u = r.length; c < u; )
                    (l = r[c++]), (o = v.call(l)), ("[object String]" != o && "[object Number]" != o) || (s[l] = 1);
                }
              if (a)
                if (((o = v.call(a)), o == k)) {
                  if ((a -= a % 1) > 0) for (a > 10 && (a = 10), i = ""; i.length < a; ) i += " ";
                } else o == P && (i = a.length <= 10 ? a : a.slice(0, 10));
              return J("", ((l = {}), (l[""] = e), l), n, s, i, "", []);
            };
          }
        }
        if (!s("json-parse")) {
          var U,
            B,
            R = c.fromCharCode,
            M = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" },
            K = function () {
              throw ((U = B = null), d());
            },
            W = function () {
              for (var e, t, r, a, i, n = B, s = n.length; U < s; )
                switch ((i = n.charCodeAt(U))) {
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    U++;
                    break;
                  case 123:
                  case 125:
                  case 91:
                  case 93:
                  case 58:
                  case 44:
                    return (e = N ? n.charAt(U) : n[U]), U++, e;
                  case 34:
                    for (e = "@", U++; U < s; )
                      if (((i = n.charCodeAt(U)), i < 32)) K();
                      else if (92 == i)
                        switch ((i = n.charCodeAt(++U))) {
                          case 92:
                          case 34:
                          case 47:
                          case 98:
                          case 116:
                          case 110:
                          case 102:
                          case 114:
                            (e += M[i]), U++;
                            break;
                          case 117:
                            for (t = ++U, r = U + 4; U < r; U++)
                              (i = n.charCodeAt(U)), (i >= 48 && i <= 57) || (i >= 97 && i <= 102) || (i >= 65 && i <= 70) || K();
                            e += R("0x" + n.slice(t, U));
                            break;
                          default:
                            K();
                        }
                      else {
                        if (34 == i) break;
                        for (i = n.charCodeAt(U), t = U; i >= 32 && 92 != i && 34 != i; ) i = n.charCodeAt(++U);
                        e += n.slice(t, U);
                      }
                    if (34 == n.charCodeAt(U)) return U++, e;
                    K();
                  default:
                    if (((t = U), 45 == i && ((a = !0), (i = n.charCodeAt(++U))), i >= 48 && i <= 57)) {
                      for (
                        48 == i && ((i = n.charCodeAt(U + 1)), i >= 48 && i <= 57) && K(), a = !1;
                        U < s && ((i = n.charCodeAt(U)), i >= 48 && i <= 57);
                        U++
                      );
                      if (46 == n.charCodeAt(U)) {
                        for (r = ++U; r < s && ((i = n.charCodeAt(r)), !(i < 48 || i > 57)); r++);
                        r == U && K(), (U = r);
                      }
                      if (((i = n.charCodeAt(U)), 101 == i || 69 == i)) {
                        for (
                          i = n.charCodeAt(++U), (43 != i && 45 != i) || U++, r = U;
                          r < s && ((i = n.charCodeAt(r)), !(i < 48 || i > 57));
                          r++
                        );
                        r == U && K(), (U = r);
                      }
                      return +n.slice(t, U);
                    }
                    a && K();
                    var o = n.slice(U, U + 4);
                    if ("true" == o) return (U += 4), !0;
                    if ("fals" == o && 101 == n.charCodeAt(U + 4)) return (U += 5), !1;
                    if ("null" == o) return (U += 4), null;
                    K();
                }
              return "$";
            },
            q = function (e) {
              var t, r;
              if (("$" == e && K(), "string" == typeof e)) {
                if ("@" == (N ? e.charAt(0) : e[0])) return e.slice(1);
                if ("[" == e) {
                  for (t = []; (e = W()), "]" != e; )
                    r ? ("," == e ? ((e = W()), "]" == e && K()) : K()) : (r = !0), "," == e && K(), t.push(q(e));
                  return t;
                }
                if ("{" == e) {
                  for (t = {}; (e = W()), "}" != e; )
                    r ? ("," == e ? ((e = W()), "}" == e && K()) : K()) : (r = !0),
                      ("," != e && "string" == typeof e && "@" == (N ? e.charAt(0) : e[0]) && ":" == W()) || K(),
                      (t[e.slice(1)] = q(W()));
                  return t;
                }
                K();
              }
              return e;
            },
            F = function (e, t, r) {
              var a = V(e, t, r);
              a === g ? delete e[t] : (e[t] = a);
            },
            V = function (e, t, r) {
              var a,
                i = e[t];
              if ("object" == typeof i && i)
                if (v.call(i) == D) for (a = i.length; a--; ) F(v, j, i, a, r);
                else
                  j(i, function (e) {
                    F(i, e, r);
                  });
              return r.call(e, t, i);
            };
          i.parse = function (e, t) {
            var r, a;
            return (
              (U = 0),
              (B = "" + e),
              (r = q(W())),
              "$" != W() && K(),
              (U = B = null),
              t && v.call(t) == S ? V(((a = {}), (a[""] = r), a), "", t) : r
            );
          };
        }
      }
      return (i.runInContext = e), i;
    }
    var t = { function: !0, object: !0 },
      r = (t[typeof window] && window) || this,
      a = r.JSON,
      i = r.JSON3,
      n = !1,
      s = e(
        r,
        (r.JSON3 = {
          noConflict: function () {
            return n || ((n = !0), (r.JSON = a), (r.JSON3 = i), (a = i = null)), s;
          },
        })
      );
    r.JSON = { parse: s.parse, stringify: s.stringify };
  }).call(window),
    (function (e, t) {
      t(e);
    })(window, function (e) {
      if (e.atob)
        try {
          e.atob(" ");
        } catch (t) {
          e.atob = (function (e) {
            var t = function (t) {
              return e(String(t).replace(/[\t\n\f\r ]+/g, ""));
            };
            return (t.original = e), t;
          })(e.atob);
        }
      else {
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          a = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
        (e.btoa = function (e) {
          e = String(e);
          for (var t, a, i, n, s = "", o = 0, l = e.length % 3; o < e.length; ) {
            if ((a = e.charCodeAt(o++)) > 255 || (i = e.charCodeAt(o++)) > 255 || (n = e.charCodeAt(o++)) > 255) return "";
            (t = (a << 16) | (i << 8) | n),
              (s += r.charAt((t >> 18) & 63) + r.charAt((t >> 12) & 63) + r.charAt((t >> 6) & 63) + r.charAt(63 & t));
          }
          return l ? s.slice(0, l - 3) + "===".substring(l) : s;
        }),
          (e.atob = function (e) {
            if (((e = String(e).replace(/[\t\n\f\r ]+/g, "")), !a.test(e))) return "";
            e += "==".slice(2 - (3 & e.length));
            for (var t, i, n, s = "", o = 0; o < e.length; )
              (t =
                (r.indexOf(e.charAt(o++)) << 18) |
                (r.indexOf(e.charAt(o++)) << 12) |
                ((i = r.indexOf(e.charAt(o++))) << 6) |
                (n = r.indexOf(e.charAt(o++)))),
                (s +=
                  64 === i
                    ? String.fromCharCode((t >> 16) & 255)
                    : 64 === n
                    ? String.fromCharCode((t >> 16) & 255, (t >> 8) & 255)
                    : String.fromCharCode((t >> 16) & 255, (t >> 8) & 255, 255 & t));
            return s;
          });
      }
    }),
    (function () {
      String.prototype.replaceAll ||
        (String.prototype.replaceAll = function (e, t) {
          return "[object regexp]" === Object.prototype.toString.call(e).toLowerCase()
            ? this.replace(e, t)
            : this.replace(new RegExp(e, "g"), t);
        });
    })();
  var Ge = Array.prototype,
    Ye = Ge.forEach,
    et = Ge.slice,
    tt = Array.isArray,
    rt = Object.prototype,
    at = rt.toString,
    it = rt.hasOwnProperty,
    nt = {},
    st =
      tt ||
      function (e) {
        return "[object Array]" === at.call(e);
      },
    ot = (function () {
      function e() {
        return (r = (9301 * r + 49297) % 233280), r / 233280;
      }
      var t = new Date(),
        r = t.getTime();
      return function (t) {
        return Math.ceil(e() * t);
      };
    })(),
    lt =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    ct = {},
    ut = {
      preset_properties: {
        search_keyword_baidu: !1,
        latest_utm: !0,
        latest_traffic_source_type: !0,
        latest_search_keyword: !0,
        latest_referrer: !0,
        latest_referrer_host: !1,
        latest_landing_page: !1,
        latest_wx_ad_click_id: void 0,
        url: !0,
        title: !0,
      },
      encrypt_cookie: !1,
      img_use_crossorigin: !1,
      name: "sa",
      max_referrer_string_length: 200,
      max_string_length: 500,
      cross_subdomain: !0,
      show_log: !1,
      is_debug: !1,
      debug_mode: !1,
      debug_mode_upload: !1,
      source_channel: [],
      sdk_id: "",
      send_type: "image",
      vtrack_ignore: {},
      auto_init: !0,
      is_track_single_page: !1,
      is_single_page: !1,
      batch_send: !1,
      source_type: {},
      callback_timeout: 200,
      datasend_timeout: 8e3,
      is_track_device_id: !1,
      ignore_oom: !0,
      app_js_bridge: !1,
    };
  (R.init = function (e) {
    this.ele = e;
  }),
    (R.init.prototype = {
      addClass: function (e) {
        var t = " " + this.ele.className + " ";
        return (
          t.indexOf(" " + e + " ") === -1 && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e), this
        );
      },
      removeClass: function (e) {
        var t = " " + this.ele.className + " ";
        return t.indexOf(" " + e + " ") !== -1 && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)), this;
      },
      hasClass: function (e) {
        var t = " " + this.ele.className + " ";
        return t.indexOf(" " + e + " ") !== -1;
      },
      attr: function (e, t) {
        return "string" == typeof e && g(t)
          ? this.ele.getAttribute(e)
          : ("string" == typeof e && ((t = String(t)), this.ele.setAttribute(e, t)), this);
      },
      offset: function () {
        var e = this.ele.getBoundingClientRect();
        if (e.width || e.height) {
          var t = this.ele.ownerDocument,
            r = t.documentElement;
          return { top: e.top + window.pageYOffset - r.clientTop, left: e.left + window.pageXOffset - r.clientLeft };
        }
        return { top: 0, left: 0 };
      },
      getSize: function () {
        if (!window.getComputedStyle) return { width: this.ele.offsetWidth, height: this.ele.offsetHeight };
        try {
          var e = this.ele.getBoundingClientRect();
          return { width: e.width, height: e.height };
        } catch (t) {
          return { width: 0, height: 0 };
        }
      },
      getStyle: function (e) {
        return this.ele.currentStyle
          ? this.ele.currentStyle[e]
          : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e);
      },
      wrap: function (e) {
        var t = document.createElement(e);
        return this.ele.parentNode.insertBefore(t, this.ele), t.appendChild(this.ele), R(t);
      },
      getCssStyle: function (e) {
        var t = this.ele.style.getPropertyValue(e);
        if (t) return t;
        var r = null;
        if (("function" == typeof window.getMatchedCSSRules && (r = window.getMatchedCSSRules(this.ele)), !r || !st(r))) return null;
        for (var a = r.length - 1; a >= 0; a--) {
          var i = r[a];
          if ((t = i.style.getPropertyValue(e))) return t;
        }
      },
      sibling: function (e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      },
      next: function () {
        return this.sibling(this.ele, "nextSibling");
      },
      prev: function () {
        return this.sibling(this.ele, "previousSibling");
      },
      siblings: function () {
        return this.siblings((this.ele.parentNode || {}).firstChild, this.ele);
      },
      children: function () {
        return this.siblings(this.ele.firstChild);
      },
      parent: function () {
        var e = this.ele.parentNode;
        return (e = e && 11 !== e.nodeType ? e : null), R(e);
      },
      previousElementSibling: function () {
        var e = this.ele;
        if ("previousElementSibling" in document.documentElement) return R(e.previousElementSibling);
        for (; (e = e.previousSibling); ) if (1 === e.nodeType) return R(e);
        return R(null);
      },
      getSameTypeSiblings: function () {
        for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), a = [], i = 0; i < t.children.length; i++) {
          var n = t.children[i];
          1 === n.nodeType && n.tagName.toLowerCase() === r && a.push(t.children[i]);
        }
        return a;
      },
      getParents: function () {
        try {
          var e = this.ele;
          if (!b(e)) return [];
          var t = [e];
          if (null === e || null === e.parentElement) return [];
          for (; null !== e.parentElement; ) (e = e.parentElement), t.push(e);
          return t;
        } catch (r) {
          return [];
        }
      },
    });
  var pt = {
      isHttpUrl: function (e) {
        if ("string" != typeof e) return !1;
        var t = /^https?:\/\/.+/;
        return t.test(e) !== !1 || (E("Invalid URL"), !1);
      },
      removeScriptProtocol: function (e) {
        if ("string" != typeof e) return "";
        for (var t = /^\s*javascript/i; t.test(e); ) e = e.replace(t, "");
        return e;
      },
    },
    dt = (function () {
      var e = { "+": "-", "/": "_", "=": "." },
        t = { "-": "+", _: "/", ".": "=" },
        r = function (t) {
          return t.replace(/[+\/=]/g, function (t) {
            return e[t];
          });
        },
        a = function (e) {
          return e.replace(/[-_.]/g, function (e) {
            return t[e];
          });
        },
        i = function (e) {
          return e.replace(/[.=]{1,2}$/, "");
        },
        n = function (e) {
          return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e);
        },
        s = function (e) {
          return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e);
        };
      return { encode: r, decode: a, trim: i, isBase64: n, isUrlSafeBase64: s };
    })(),
    _t = {
      distinct_id: function () {},
      jssdkDebug: function () {},
      _sendDebug: function (e) {},
      apph5: function (e) {
        var t = "app_h5\u6253\u901a\u5931\u8d25-",
          r = {
            1: t + "use_app_track\u4e3afalse",
            2: t + "Android\u6216\u8005iOS\uff0c\u6ca1\u6709\u66b4\u9732\u76f8\u5e94\u65b9\u6cd5",
            3.1: t + "Android\u6821\u9a8cserver_url\u5931\u8d25",
            3.2: t + "iOS\u6821\u9a8cserver_url\u5931\u8d25",
            4.1: t + "H5 \u6821\u9a8c iOS server_url \u5931\u8d25",
            4.2: t + "H5 \u6821\u9a8c Android server_url \u5931\u8d25",
          },
          a = e.output,
          i = e.step,
          n = e.data || "";
        ("all" !== a && "console" !== a) || E(r[i]),
          ("all" === a || "code" === a) &&
            f(ct.is_debug) &&
            ct.is_debug.apph5 &&
            ((n.type && "profile" === n.type.slice(0, 7)) || (n.properties._jssdk_debug_info = "apph5-" + String(i)));
      },
      defineMode: function (e) {
        var t = {
          1: {
            title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
            message:
              "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 App SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
            link_text: "\u914d\u7f6e\u6587\u6863",
            link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html",
          },
          2: {
            title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
            message:
              "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 Web JS SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
            link_text: "\u914d\u7f6e\u6587\u6863",
            link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html",
          },
          3: {
            title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
            message:
              "Web JS SDK \u6ca1\u6709\u5f00\u542f\u5168\u57cb\u70b9\u914d\u7f6e\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
            link_text: "\u914d\u7f6e\u6587\u6863",
            link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html",
          },
          4: {
            title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
            message:
              "Web JS SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0e App SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0d\u4e00\u81f4\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
            link_text: "\u914d\u7f6e\u6587\u6863",
            link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html",
          },
        };
        return !(!e || !t[e]) && t[e];
      },
      protocol: {
        protocolIsSame: function (e, t) {
          try {
            if (X(e).protocol !== X(t).protocol) return !1;
          } catch (r) {
            return E("\u4e0d\u652f\u6301 _.URL \u65b9\u6cd5"), !1;
          }
          return !0;
        },
        serverUrl: function () {
          v(ct.server_url) &&
            "" !== ct.server_url &&
            !this.protocolIsSame(ct.server_url, location.href) &&
            E(
              "SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\n\u56e0\u4e3a\uff1a1\u3001https \u4e0b\u9762\u53d1\u9001 http \u7684\u56fe\u7247\u8bf7\u6c42\u4f1a\u5931\u8d25\u30022\u3001http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002"
            );
        },
        ajax: function (e) {
          return (
            e !== ct.server_url &&
            void (
              v(e) &&
              "" !== e &&
              !this.protocolIsSame(e, location.href) &&
              E(
                "SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\u56e0\u4e3a http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002"
              )
            )
          );
        },
      },
    },
    ft = "utm_source utm_medium utm_campaign utm_content utm_term",
    ht = "1.19.8",
    gt = (function () {
      var e = function () {
          for (var e = 1 * new Date(), t = 0; e == 1 * new Date(); ) t++;
          return e.toString(16) + t.toString(16);
        },
        t = function () {
          return N().toString(16).replace(".", "");
        },
        r = function () {
          function e(e, t) {
            var r,
              a = 0;
            for (r = 0; r < t.length; r++) a |= i[r] << (8 * r);
            return e ^ a;
          }
          var t,
            r,
            a = navigator.userAgent,
            i = [],
            n = 0;
          for (t = 0; t < a.length; t++) (r = a.charCodeAt(t)), i.unshift(255 & r), i.length >= 4 && ((n = e(n, i)), (i = []));
          return i.length > 0 && (n = e(n, i)), n.toString(16);
        };
      return function () {
        var a = String(screen.height * screen.width);
        a =
          a && /\d{5,}/.test(a)
            ? a.toString(16)
            : String(31242 * N())
                .replace(".", "")
                .slice(0, 8);
        var i = e() + "-" + t() + "-" + r() + "-" + a + "-" + e();
        return i ? i : (String(N()) + String(N()) + String(N())).slice(2, 15);
      };
    })(),
    mt = {
      data: {},
      id: function () {
        return this.data.id ? this.data.id : ((this.data.id = _e()), this.data.id);
      },
      type: function () {
        return this.data.type ? this.data.type : ((this.data.type = fe()), this.data.type);
      },
    },
    vt = {
      initPage: function () {
        var e = me(),
          t = G(),
          r = ue(t);
        r || _t.jssdkDebug("url_domain\u5f02\u5e38_" + t + "_" + r),
          (this.pageProp = {
            referrer: e,
            referrer_host: e ? Z(e) : "",
            url: t,
            url_host: Z(t, "url_host\u53d6\u503c\u5f02\u5e38"),
            url_domain: r,
          });
      },
      pageProp: {},
      campaignParams: function () {
        var t = ft.split(" "),
          r = "",
          a = {};
        return (
          st(ct.source_channel) && ct.source_channel.length > 0 && ((t = t.concat(ct.source_channel)), (t = A(t))),
          e(t, function (e) {
            (r = F(location.href, e)), r.length && (a[e] = r);
          }),
          a
        );
      },
      campaignParamsStandard: function (t, r) {
        (t = t || ""), (r = r || "");
        var a = vt.campaignParams(),
          i = {},
          n = {};
        return (
          e(a, function (e, a, s) {
            (" " + ft + " ").indexOf(" " + a + " ") !== -1 ? (i[t + a] = s[a]) : (n[r + a] = s[a]);
          }),
          { $utms: i, otherUtms: n }
        );
      },
      properties: function () {
        return {
          $timezone_offset: new Date().getTimezoneOffset(),
          $screen_height: Number(screen.height) || 0,
          $screen_width: Number(screen.width) || 0,
          $lib: "js",
          $lib_version: ht,
        };
      },
      currentProps: {},
      register: function (e) {
        r(vt.currentProps, e);
      },
    },
    yt = {
      get: function (e) {
        for (var t = e + "=", r = document.cookie.split(";"), a = 0; a < r.length; a++) {
          for (var i = r[a]; " " == i.charAt(0); ) i = i.substring(1, i.length);
          if (0 == i.indexOf(t)) return W(i.substring(t.length, i.length));
        }
        return null;
      },
      set: function (e, t, r, a) {
        function i(e) {
          return !!e && e.replaceAll(/\r\n/g, "");
        }
        a = "undefined" == typeof a ? ct.cross_subdomain : a;
        var n = "",
          s = "",
          o = "",
          l = "";
        if (((r = null == r ? 73e3 : r), a)) {
          var c = ue(location.href);
          "url\u89e3\u6790\u5931\u8d25" === c && (c = ""), (n = c ? "; domain=" + c : "");
        }
        if (0 !== r) {
          var u = new Date();
          "s" === String(r).slice(-1)
            ? u.setTime(u.getTime() + 1e3 * Number(String(r).slice(0, -1)))
            : u.setTime(u.getTime() + 24 * r * 60 * 60 * 1e3),
            (s = "; expires=" + u.toGMTString());
        }
        v(ct.set_cookie_samesite) && "" !== ct.set_cookie_samesite && (l = "; SameSite=" + ct.set_cookie_samesite),
          ct.is_secure_cookie && (o = "; secure");
        var p = "",
          d = "",
          _ = "";
        e && (p = i(e)),
          t && (d = i(t)),
          n && (_ = i(n)),
          p && d && (document.cookie = p + "=" + encodeURIComponent(d) + s + "; path=/" + _ + l + o);
      },
      encrypt: function (e) {
        return "data:enc;" + I(e);
      },
      decrypt: function (e) {
        return (e = e.substring("data:enc;".length)), (e = T(e));
      },
      resolveValue: function (e) {
        var t = "data:enc;";
        return v(e) && 0 === e.indexOf(t) && (e = yt.decrypt(e)), e;
      },
      remove: function (e, t) {
        (t = "undefined" == typeof t ? ct.cross_subdomain : t), yt.set(e, "", -1, t);
      },
      getCookieName: function (e, t) {
        var r = "";
        if (((t = t || location.href), ct.cross_subdomain === !1)) {
          try {
            r = X(t).hostname;
          } catch (a) {
            E(a);
          }
          r =
            "string" == typeof r && "" !== r
              ? "sajssdk_2015_" + ct.sdk_id + e + "_" + r.replace(/\./g, "_")
              : "sajssdk_2015_root_" + ct.sdk_id + e;
        } else r = "sajssdk_2015_cross_" + ct.sdk_id + e;
        return r;
      },
      getNewUser: function () {
        var e = "new_user";
        return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName(e));
      },
    },
    wt = {
      get: function (e) {
        return window.localStorage.getItem(e);
      },
      parse: function (e) {
        var t;
        try {
          t = JSON.parse(wt.get(e)) || null;
        } catch (r) {
          E(r);
        }
        return t;
      },
      set: function (e, t) {
        window.localStorage.setItem(e, t);
      },
      remove: function (e) {
        window.localStorage.removeItem(e);
      },
      isSupport: function () {
        var e = !0;
        try {
          var t = "__sensorsdatasupport__",
            r = "testIsSupportStorage";
          wt.set(t, r), wt.get(t) !== r && (e = !1), wt.remove(t);
        } catch (a) {
          e = !1;
        }
        return e;
      },
    },
    St = {
      isSupport: function () {
        var e = !0,
          t = "__sensorsdatasupport__",
          r = "testIsSupportStorage";
        try {
          sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r), sessionStorage.removeItem(t, r), (e = !0)) : (e = !1);
        } catch (a) {
          e = !1;
        }
        return e;
      },
    },
    bt = function () {
      (this._events = []), (this.pendingEvents = []);
    };
  bt.prototype = {
    emit: function (t) {
      var r = [].slice.call(arguments, 1);
      e(this._events, function (e) {
        e.type === t && e.callback.apply(e.context, r);
      }),
        this.pendingEvents.push({ type: t, data: r }),
        this.pendingEvents.length > 20 ? this.pendingEvents.shift() : null;
    },
    on: function (t, r, a, i) {
      "function" == typeof r &&
        (this._events.push({ type: t, callback: r, context: a || this }),
        (i = i !== !1),
        this.pendingEvents.length > 0 &&
          i &&
          e(this.pendingEvents, function (e) {
            e.type === t && r.apply(a, e.data);
          }));
    },
    tempAdd: function (e, t) {
      if (t && e) return this.emit(e, t);
    },
    isReady: function () {},
  };
  var kt = {
      __proto__: null,
      each: e,
      map: t,
      extend: r,
      extend2Lev: a,
      coverExtend: i,
      isArray: st,
      isFunction: n,
      isArguments: s,
      toArray: l,
      values: c,
      indexOf: u,
      filter: p,
      inherit: d,
      trim: _,
      isObject: f,
      isEmptyObject: h,
      isUndefined: g,
      isString: v,
      isDate: y,
      isBoolean: w,
      isNumber: S,
      isElement: b,
      isJSONString: k,
      safeJSONParse: P,
      throttle: D,
      hashCode: C,
      getRandomBasic: ot,
      getRandom: N,
      formatJsonString: j,
      unique: A,
      base64Decode: O,
      base64Encode: $,
      now: lt,
      rot13obfs: I,
      rot13defs: T,
      strToUnicode: x,
      hasAttributes: H,
      hasAttribute: J,
      getElementContent: U,
      loadScript: B,
      ry: R,
      setCssStyle: M,
      getDomBySelector: K,
      decodeURIComponent: W,
      decodeURI: q,
      getQueryParam: F,
      urlParse: V,
      getURLSearchParams: z,
      URL: X,
      getHostname: Z,
      getQueryParamsFromUrl: Q,
      urlSafeBase64: dt,
      secCheck: pt,
      getURL: G,
      encodeDates: Y,
      formatDate: ee,
      searchObjDate: te,
      mediaQueriesSupported: ke,
      getScreenOrientation: Pe,
      cookie: yt,
      localStorage: wt,
      sessionStorage: St,
      isSupportCors: De,
      isIOS: Ce,
      getUA: je,
      getIOSVersion: Ne,
      isSupportBeaconSend: Ae,
      searchZZAppStyle: re,
      searchObjString: ie,
      filterReservedProperties: oe,
      parseSuperProperties: se,
      strip_sa_properties: ne,
      searchConfigData: le,
      strip_empty_properties: ce,
      UUID: gt,
      getCurrentDomain: ue,
      getEleInfo: pe,
      isBaiduTraffic: de,
      getReferrerEqid: _e,
      getReferrerEqidType: fe,
      getBaiduKeyword: mt,
      getCookieTopLevelDomain: he,
      isReferralTraffic: ge,
      getReferrer: me,
      getKeywordFromReferrer: ye,
      getWxAdIdFromUrl: we,
      getReferSearchEngine: ve,
      getSourceFromReferrer: Se,
      info: vt,
      autoExeQueue: be,
      formatString: ae,
      addEvent: $e,
      addHashEvent: Oe,
      addSinglePageEvent: Ie,
      listenPageState: Te,
      bindReady: xe,
      xhr: Le,
      ajax: Ee,
      jsonp: He,
      eventEmitter: bt,
    },
    Pt = {
      checkIsAddSign: function (e) {
        "track" === e.type && (yt.getNewUser() ? (e.properties.$is_first_day = !0) : (e.properties.$is_first_day = !1));
      },
      is_first_visit_time: !1,
      checkIsFirstTime: function (e) {
        "track" === e.type &&
          "$pageview" === e.event &&
          (this.is_first_visit_time
            ? ((e.properties.$is_first_time = !0), (this.is_first_visit_time = !1))
            : (e.properties.$is_first_time = !1));
      },
      setDeviceId: function (e) {
        var t = null,
          r = yt.get("sensorsdata2015jssdkcross" + Qe.para.sdk_id);
        r = yt.resolveValue(r);
        var a = {};
        null != r && k(r) && ((a = JSON.parse(r)), a.$device_id && (t = a.$device_id)),
          (t = t || e),
          Qe.para.cross_subdomain === !0
            ? Qe.store.set("$device_id", t)
            : ((a.$device_id = t),
              (a = JSON.stringify(a)),
              Qe.para.encrypt_cookie && (a = yt.encrypt(a)),
              yt.set("sensorsdata2015jssdkcross" + Qe.para.sdk_id, a, null, !0)),
          Qe.para.is_track_device_id && (vt.currentProps.$device_id = t);
      },
      storeInitCheck: function () {
        if (Qe.is_first_visitor) {
          var e = new Date(),
            t = { h: 23 - e.getHours(), m: 59 - e.getMinutes(), s: 59 - e.getSeconds() };
          yt.set(yt.getCookieName("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s"), (this.is_first_visit_time = !0);
        } else
          yt.getNewUser() ||
            (this.checkIsAddSign = function (e) {
              "track" === e.type && (e.properties.$is_first_day = !1);
            }),
            (this.checkIsFirstTime = function (e) {
              "track" === e.type && "$pageview" === e.event && (e.properties.$is_first_time = !1);
            });
      },
      checkIsFirstLatest: function () {
        var t = vt.pageProp.url_domain,
          r = {};
        "" === t && (t = "url\u89e3\u6790\u5931\u8d25");
        var a = ye(document.referrer, !0);
        if (
          (Qe.para.preset_properties.search_keyword_baidu
            ? ge(document.referrer) &&
              (!de() || (f(a) && a.active)
                ? Qe.store._state &&
                  Qe.store._state.props &&
                  (Qe.store._state.props.$search_keyword_id && delete Qe.store._state.props.$search_keyword_id,
                  Qe.store._state.props.$search_keyword_id_type && delete Qe.store._state.props.$search_keyword_id_type,
                  Qe.store._state.props.$search_keyword_id_hash && delete Qe.store._state.props.$search_keyword_id_hash)
                : ((r.$search_keyword_id = mt.id()),
                  (r.$search_keyword_id_type = mt.type()),
                  (r.$search_keyword_id_hash = C(r.$search_keyword_id))))
            : Qe.store._state &&
              Qe.store._state.props &&
              (Qe.store._state.props.$search_keyword_id && delete Qe.store._state.props.$search_keyword_id,
              Qe.store._state.props.$search_keyword_id_type && delete Qe.store._state.props.$search_keyword_id_type,
              Qe.store._state.props.$search_keyword_id_hash && delete Qe.store._state.props.$search_keyword_id_hash),
          Qe.store.save(),
          e(Qe.para.preset_properties, function (a, i) {
            if (i.indexOf("latest_") === -1) return !1;
            if (((i = i.slice(7)), a)) {
              if ("wx_ad_click_id" === i && "not_collect" === a) return !1;
              if ("utm" !== i && "url\u89e3\u6790\u5931\u8d25" === t)
                "wx_ad_click_id" === i
                  ? ((r._latest_wx_ad_click_id = "url\u7684domain\u89e3\u6790\u5931\u8d25"),
                    (r._latest_wx_ad_hash_key = "url\u7684domain\u89e3\u6790\u5931\u8d25"),
                    (r._latest_wx_ad_callbacks = "url\u7684domain\u89e3\u6790\u5931\u8d25"))
                  : (r["$latest_" + i] = "url\u7684domain\u89e3\u6790\u5931\u8d25");
              else if (ge(document.referrer))
                switch (i) {
                  case "traffic_source_type":
                    r.$latest_traffic_source_type = Se();
                    break;
                  case "referrer":
                    r.$latest_referrer = vt.pageProp.referrer;
                    break;
                  case "search_keyword":
                    ye()
                      ? (r.$latest_search_keyword = ye())
                      : f(Qe.store._state) &&
                        f(Qe.store._state.props) &&
                        Qe.store._state.props.$latest_search_keyword &&
                        delete Qe.store._state.props.$latest_search_keyword;
                    break;
                  case "landing_page":
                    r.$latest_landing_page = G();
                    break;
                  case "wx_ad_click_id":
                    var n = we(location.href);
                    (r._latest_wx_ad_click_id = n.click_id),
                      (r._latest_wx_ad_hash_key = n.hash_key),
                      (r._latest_wx_ad_callbacks = n.callbacks);
                }
            } else if ("utm" === i && Qe.store._state && Qe.store._state.props)
              for (var s in Qe.store._state.props)
                (0 === s.indexOf("$latest_utm") || (0 === s.indexOf("_latest_") && s.indexOf("_latest_wx_ad_") < 0)) &&
                  delete Qe.store._state.props[s];
            else if (Qe.store._state && Qe.store._state.props && "$latest_" + i in Qe.store._state.props)
              delete Qe.store._state.props["$latest_" + i];
            else if ("wx_ad_click_id" == i && Qe.store._state && Qe.store._state.props && a === !1) {
              var o = ["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"];
              e(o, function (e) {
                e in Qe.store._state.props && delete Qe.store._state.props[e];
              });
            }
          }),
          Qe.register(r),
          Qe.para.preset_properties.latest_utm)
        ) {
          var i = vt.campaignParamsStandard("$latest_", "_latest_"),
            n = i.$utms,
            s = i.otherUtms;
          h(n) || Qe.register(n), h(s) || Qe.register(s);
        }
      },
    },
    Dt = {
      requests: [],
      _sessionState: {},
      _state: { distinct_id: "", first_id: "", props: {} },
      getProps: function () {
        return this._state.props || {};
      },
      getSessionProps: function () {
        return this._sessionState;
      },
      getDistinctId: function () {
        return this._state._distinct_id || this._state.distinct_id;
      },
      getUnionId: function () {
        var e = {},
          t = this._state._first_id || this._state.first_id,
          r = this._state._distinct_id || this._state.distinct_id;
        return t && r ? ((e.login_id = r), (e.anonymous_id = t)) : (e.anonymous_id = r), e;
      },
      getFirstId: function () {
        return this._state._first_id || this._state.first_id;
      },
      toState: function (e) {
        var t = null;
        if (null != e && k(e))
          if (((t = JSON.parse(e)), (this._state = r(t)), t.distinct_id)) {
            if ("object" == typeof t.props) {
              for (var a in t.props)
                "string" == typeof t.props[a] && (t.props[a] = t.props[a].slice(0, Qe.para.max_referrer_string_length));
              this.save();
            }
          } else this.set("distinct_id", gt()), Qe.debug.distinct_id("1", e);
        else this.set("distinct_id", gt()), Qe.debug.distinct_id("2", e);
      },
      initSessionState: function () {
        var e = yt.get("sensorsdata2015session"),
          t = null;
        null !== e && "object" == typeof (t = JSON.parse(e)) && (this._sessionState = t || {});
      },
      setOnce: function (e, t) {
        e in this._state || this.set(e, t);
      },
      set: function (e, t) {
        this._state = this._state || {};
        var r = this._state.distinct_id;
        (this._state[e] = t),
          "first_id" === e ? delete this._state._first_id : "distinct_id" === e && delete this._state._distinct_id,
          this.save(),
          "distinct_id" === e && r && Qe.events.tempAdd("changeDistinctId", t);
      },
      change: function (e, t) {
        this._state["_" + e] = t;
      },
      setSessionProps: function (e) {
        var t = this._sessionState;
        r(t, e), this.sessionSave(t);
      },
      setSessionPropsOnce: function (e) {
        var t = this._sessionState;
        i(t, e), this.sessionSave(t);
      },
      setProps: function (e, t) {
        var a = {};
        a = t ? e : r(this._state.props || {}, e);
        for (var i in a) "string" == typeof a[i] && (a[i] = a[i].slice(0, Qe.para.max_referrer_string_length));
        this.set("props", a);
      },
      setPropsOnce: function (e) {
        var t = this._state.props || {};
        i(t, e), this.set("props", t);
      },
      clearAllProps: function (e) {
        this._sessionState = {};
        var t;
        if (st(e) && e.length > 0)
          for (t = 0; t < e.length; t++)
            v(e[t]) &&
              e[t].indexOf("latest_") === -1 &&
              f(this._state.props) &&
              e[t] in this._state.props &&
              delete this._state.props[e[t]];
        else if (f(this._state.props)) for (t in this._state.props) 1 !== t.indexOf("latest_") && delete this._state.props[t];
        this.sessionSave({}), this.save();
      },
      sessionSave: function (e) {
        (this._sessionState = e), yt.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0);
      },
      save: function () {
        var e = JSON.parse(JSON.stringify(this._state));
        delete e._first_id, delete e._distinct_id;
        var t = JSON.stringify(e);
        Qe.para.encrypt_cookie && (t = yt.encrypt(t)), yt.set(this.getCookieName(), t, 73e3, Qe.para.cross_subdomain);
      },
      getCookieName: function () {
        var e = "";
        if (Qe.para.cross_subdomain === !1) {
          try {
            e = X(location.href).hostname;
          } catch (t) {
            Qe.log(t);
          }
          e =
            "string" == typeof e && "" !== e
              ? "sa_jssdk_2015_" + Qe.para.sdk_id + e.replace(/\./g, "_")
              : "sa_jssdk_2015_root" + Qe.para.sdk_id;
        } else e = "sensorsdata2015jssdkcross" + Qe.para.sdk_id;
        return e;
      },
      init: function () {
        this.initSessionState();
        var e = gt(),
          t = yt.get(this.getCookieName());
        (t = yt.resolveValue(t)),
          null === t
            ? ((Qe.is_first_visitor = !0), this.set("distinct_id", e))
            : ((k(t) && JSON.parse(t).distinct_id) || (Qe.is_first_visitor = !0), this.toState(t)),
          Pt.setDeviceId(e),
          Pt.storeInitCheck(),
          Pt.checkIsFirstLatest();
      },
    },
    Ct = {
      regChecks: {
        regName:
          /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i,
      },
      checkPropertiesKey: function (t) {
        var r = this,
          a = !0;
        return (
          e(t, function (e, t) {
            r.regChecks.regName.test(t) || (a = !1);
          }),
          a
        );
      },
      check: function (e, t) {
        return "string" == typeof this[e] ? this[this[e]](t) : n(this[e]) ? this[e](t) : void 0;
      },
      str: function (e) {
        return (
          !(!v(e) || "" === e) ||
          (E("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f,\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u4e14\u6709\u503c"), !1)
        );
      },
      properties: function (e) {
        return (
          ne(e),
          !e ||
            (f(e)
              ? !!this.checkPropertiesKey(e) ||
                (E(
                  "properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"
                ),
                !0)
              : (E("properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"), !0))
        );
      },
      propertiesMust: function (e) {
        return (
          ne(e),
          void 0 === e || !f(e) || h(e)
            ? (E("properties\u5fc5\u987b\u662f\u5bf9\u8c61\u4e14\u6709\u503c"), !0)
            : !!this.checkPropertiesKey(e) ||
              (E(
                "properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"
              ),
              !0)
        );
      },
      event: function (e) {
        return (
          !(!v(e) || !this.regChecks.regName.test(e)) ||
          (E(
            "\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff0ceventName \u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff0c\u4e14\u9700\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u5373\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u548c $,\u5176\u4e2d\u4ee5 $ \u5f00\u5934\u7684\u8868\u660e\u662f\u7cfb\u7edf\u7684\u4fdd\u7559\u5b57\u6bb5\uff0c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\u8bf7\u4e0d\u8981\u4ee5 $ \u5f00\u5934"
          ),
          !0)
        );
      },
      item_type: "str",
      item_id: "str",
      distinct_id: function (e) {
        return (
          !(!v(e) || !/^.{1,255}$/.test(e)) ||
          (E("distinct_id\u5fc5\u987b\u662f\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u5c0f\u4e8e255\u4f4d\u7684\u5b57\u7b26\u4e32"), !1)
        );
      },
    },
    Nt = {};
  (Nt.check = Je),
    (Nt.sendItem = function (e) {
      var t = { lib: { $lib: "js", $lib_method: "code", $lib_version: String(Qe.lib_version) }, time: 1 * new Date() };
      r(t, e),
        oe(t.properties),
        te(t),
        ie(t),
        t.properties && "$project" in t.properties && ((t.project = String(t.properties.$project)), delete t.properties.$project),
        Qe.sendState.getSendCall(t);
    }),
    (Nt.send = function (e, t) {
      var r = Qe.kit.buildData(e);
      Qe.kit.sendData(r, t);
    }),
    (Nt.debugPath = function (e) {
      var t = e,
        r = "";
      (r =
        Qe.para.debug_mode_url.indexOf("?") !== -1
          ? Qe.para.debug_mode_url + "&data=" + encodeURIComponent($(e))
          : Qe.para.debug_mode_url + "?data=" + encodeURIComponent($(e))),
        Ee({
          url: r,
          type: "GET",
          cors: !0,
          header: { "Dry-Run": String(Qe.para.debug_mode_upload) },
          success: function (e) {
            h(e) === !0
              ? alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f" + t)
              : alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0" + JSON.stringify(e));
          },
        });
    });
  var jt = {
      otherTags: [],
      getTargetElement: function (e, t) {
        var r = this,
          a = e;
        if ("object" != typeof a) return null;
        if ("string" != typeof a.tagName) return null;
        var i = a.tagName.toLowerCase();
        if ("body" === i.toLowerCase() || "html" === i.toLowerCase()) return null;
        if (!a || !a.parentNode || !a.parentNode.children) return null;
        var n = a.parentNode,
          s = r.hasElement({ event: (t && t.originalEvent) || t, element: e }, function (e) {
            return "a" === e.tagName.toLowerCase() || H(e, Qe.para.heatmap.track_attr);
          }),
          o = r.otherTags;
        if ("a" === i || "button" === i || "input" === i || "textarea" === i) return a;
        if (u(o, i) > -1) return a;
        if ("button" === n.tagName.toLowerCase() || "a" === n.tagName.toLowerCase()) return n;
        if ("area" === i && "map" === n.tagName.toLowerCase() && R(n).prev().tagName && "img" === R(n).prev().tagName.toLowerCase())
          return R(n).prev();
        if (s) return s;
        if ("div" === i && Qe.para.heatmap.collect_tags.div && r.isDivLevelValid(a)) {
          var l =
            (Qe.para.heatmap &&
              Qe.para.heatmap.collect_tags &&
              Qe.para.heatmap.collect_tags.div &&
              Qe.para.heatmap.collect_tags.div.max_level) ||
            1;
          return l > 1 || r.isCollectableDiv(a) ? a : null;
        }
        if (r.isStyleTag(i) && Qe.para.heatmap.collect_tags.div) {
          var c = r.getCollectableParent(a);
          if (c && r.isDivLevelValid(c)) return c;
        }
        return null;
      },
      getDivLevels: function (t, r) {
        var a = jt.getElementPath(t, !0, r),
          i = a.split(" > "),
          n = 0;
        return (
          e(i, function (e) {
            "div" === e && n++;
          }),
          n
        );
      },
      isDivLevelValid: function (e) {
        for (
          var t =
              (Qe.para.heatmap &&
                Qe.para.heatmap.collect_tags &&
                Qe.para.heatmap.collect_tags.div &&
                Qe.para.heatmap.collect_tags.div.max_level) ||
              1,
            r = e.getElementsByTagName("div"),
            a = r.length - 1;
          a >= 0;
          a--
        )
          if (jt.getDivLevels(r[a], e) > t) return !1;
        return !0;
      },
      getElementPath: function (e, t, r) {
        for (var a = []; e.parentNode; ) {
          if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
            a.unshift(e.tagName.toLowerCase() + "#" + e.id);
            break;
          }
          if (r && e === r) {
            a.unshift(e.tagName.toLowerCase());
            break;
          }
          if (e === document.body) {
            a.unshift("body");
            break;
          }
          a.unshift(e.tagName.toLowerCase()), (e = e.parentNode);
        }
        return a.join(" > ");
      },
      getClosestLi: function (e) {
        var t = function (e, t) {
          for (; e && e !== document && 1 === e.nodeType; e = e.parentNode) if (e.tagName.toLowerCase() === t) return e;
          return null;
        };
        return t(e, "li");
      },
      getElementPosition: function (e, t, r) {
        function a(e) {
          var t = e.parentNode;
          if (!t) return "";
          var r = R(e).getSameTypeSiblings(),
            a = r.length;
          if (1 === a) return 0;
          for (var i = 0, n = e; R(n).previousElementSibling().ele; n = R(n).previousElementSibling().ele, i++);
          return i;
        }
        var i = Qe.heatmap.getClosestLi(e);
        if (!i) return null;
        var n = e.tagName.toLowerCase(),
          s = i.getElementsByTagName(n),
          o = s.length,
          l = [];
        if (o > 1) {
          for (var c = 0; c < o; c++) {
            var p = Qe.heatmap.getElementPath(s[c], r);
            p === t && l.push(s[c]);
          }
          if (l.length > 1) return u(l, e);
        }
        return a(i);
      },
      setNotice: function (e) {
        (Qe.is_heatmap_render_mode = !0),
          Qe.para.heatmap ||
            (Qe.errorMsg =
              "\u60a8SDK\u6ca1\u6709\u914d\u7f6e\u5f00\u542f\u70b9\u51fb\u56fe\uff0c\u53ef\u80fd\u6ca1\u6709\u6570\u636e\uff01"),
          e &&
            e[0] &&
            e[1] &&
            "http:" === e[1].slice(0, 5) &&
            "https:" === location.protocol &&
            (Qe.errorMsg =
              "\u60a8\u7684\u5f53\u524d\u9875\u9762\u662fhttps\u7684\u5730\u5740\uff0c\u795e\u7b56\u5206\u6790\u73af\u5883\u4e5f\u5fc5\u987b\u662fhttps\uff01"),
          Qe.para.heatmap_url ||
            (Qe.para.heatmap_url = location.protocol + "//static.sensorsdata.cn/sdk/" + Qe.lib_version + "/heatmap.min.js");
      },
      getDomIndex: function (e) {
        if (!e.parentNode) return -1;
        for (var t = 0, r = e.tagName, a = e.parentNode.children, i = 0; i < a.length; i++)
          if (a[i].tagName === r) {
            if (e === a[i]) return t;
            t++;
          }
        return -1;
      },
      selector: function (e, t) {
        var r = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e);
        return e.getAttribute &&
          e.getAttribute("id") &&
          /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) &&
          (!Qe.para.heatmap || (Qe.para.heatmap && "not_use_id" !== Qe.para.heatmap.element_selector)) &&
          !t
          ? "#" + e.getAttribute("id")
          : e.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "");
      },
      getDomSelector: function (e, t, r) {
        if (!e || !e.parentNode || !e.parentNode.children) return !1;
        t = t && t.join ? t : [];
        var a = e.nodeName.toLowerCase();
        return e && "body" !== a && 1 == e.nodeType
          ? (t.unshift(this.selector(e, r)),
            e.getAttribute &&
            e.getAttribute("id") &&
            /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) &&
            Qe.para.heatmap &&
            "not_use_id" !== Qe.para.heatmap.element_selector &&
            !r
              ? t.join(" > ")
              : this.getDomSelector(e.parentNode, t, r))
          : (t.unshift("body"), t.join(" > "));
      },
      na: function () {
        var e = document.documentElement.scrollLeft || window.pageXOffset;
        return parseInt(isNaN(e) ? 0 : e, 10);
      },
      i: function () {
        var e = 0;
        try {
          (e = (o.documentElement && o.documentElement.scrollTop) || m.pageYOffset), (e = isNaN(e) ? 0 : e);
        } catch (t) {
          e = 0;
        }
        return parseInt(e, 10);
      },
      getBrowserWidth: function () {
        var e = window.innerWidth || document.body.clientWidth;
        return isNaN(e) ? 0 : parseInt(e, 10);
      },
      getBrowserHeight: function () {
        var e = window.innerHeight || document.body.clientHeight;
        return isNaN(e) ? 0 : parseInt(e, 10);
      },
      getScrollWidth: function () {
        var e = parseInt(document.body.scrollWidth, 10);
        return isNaN(e) ? 0 : e;
      },
      getEleDetail: function (e) {
        var t = this.getDomSelector(e),
          r = pe({ target: e });
        (r.$element_selector = t ? t : ""),
          (r.$element_path = Qe.heatmap.getElementPath(e, Qe.para.heatmap && "not_use_id" === Qe.para.heatmap.element_selector));
        var a = Qe.heatmap.getElementPosition(e, r.$element_path, Qe.para.heatmap && "not_use_id" === Qe.para.heatmap.element_selector);
        return S(a) && (r.$element_position = a), r;
      },
      start: function (e, t, a, i, s) {
        var o = f(i) ? i : {},
          l = n(s) ? s : n(i) ? i : void 0;
        if (Qe.para.heatmap && Qe.para.heatmap.collect_element && !Qe.para.heatmap.collect_element(t)) return !1;
        var c = this.getEleDetail(t);
        if (Qe.para.heatmap && Qe.para.heatmap.custom_property) {
          var u = Qe.para.heatmap.custom_property(t);
          f(u) && (c = r(c, u));
        }
        (c = r(c, o)),
          "a" === a && Qe.para.heatmap && Qe.para.heatmap.isTrackLink === !0
            ? Qe.trackLink({ event: e, target: t }, "$WebClick", c)
            : Qe.track("$WebClick", c, l);
      },
      hasElement: function (e, t) {
        var r;
        if (e.event) {
          var a = e.event;
          r = a.path || (a._getPath && a._getPath());
        } else e.element && (r = R(e.element).getParents());
        if (r && st(r) && r.length > 0)
          for (var i = 0; i < r.length; i++) if ("object" == typeof r[i] && 1 === r[i].nodeType && t(r[i])) return r[i];
      },
      isStyleTag: function (e, t) {
        var r = ["a", "div", "input", "button", "textarea"],
          a = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
        return (
          !(u(r, e) > -1) &&
          (!t || (Qe.para.heatmap && Qe.para.heatmap.collect_tags && Qe.para.heatmap.collect_tags.div)
            ? !!(
                f(Qe.para.heatmap) &&
                f(Qe.para.heatmap.collect_tags) &&
                f(Qe.para.heatmap.collect_tags.div) &&
                st(Qe.para.heatmap.collect_tags.div.ignore_tags) &&
                u(Qe.para.heatmap.collect_tags.div.ignore_tags, e) > -1
              )
            : u(a, e) > -1)
        );
      },
      isCollectableDiv: function (e, t) {
        try {
          if (0 === e.children.length) return !0;
          for (var r = 0; r < e.children.length; r++)
            if (1 === e.children[r].nodeType) {
              var a = e.children[r].tagName.toLowerCase(),
                i =
                  Qe.para &&
                  Qe.para.heatmap &&
                  Qe.para.heatmap.collect_tags &&
                  Qe.para.heatmap.collect_tags.div &&
                  Qe.para.heatmap.collect_tags.div.max_level;
              if (!(("div" === a && i > 1) || this.isStyleTag(a, t))) return !1;
              if (!this.isCollectableDiv(e.children[r], t)) return !1;
            }
          return !0;
        } catch (n) {
          Qe.log(n);
        }
        return !1;
      },
      getCollectableParent: function (e, t) {
        try {
          var r = e.parentNode,
            a = r ? r.tagName.toLowerCase() : "";
          if ("body" === a) return !1;
          var i =
            Qe.para &&
            Qe.para.heatmap &&
            Qe.para.heatmap.collect_tags &&
            Qe.para.heatmap.collect_tags.div &&
            Qe.para.heatmap.collect_tags.div.max_level;
          if (a && "div" === a && (i > 1 || this.isCollectableDiv(r, t))) return r;
          if (r && this.isStyleTag(a, t)) return this.getCollectableParent(r, t);
        } catch (n) {
          Qe.log(n);
        }
        return !1;
      },
      initScrollmap: function () {
        if (!f(Qe.para.heatmap) || "default" !== Qe.para.heatmap.scroll_notice_map) return !1;
        var e = function () {
            return !(Qe.para.scrollmap && n(Qe.para.scrollmap.collect_url) && !Qe.para.scrollmap.collect_url());
          },
          t = function (e) {
            var t = {};
            return (
              (t.timeout = e.timeout || 1e3),
              (t.func = e.func),
              (t.hasInit = !1),
              (t.inter = null),
              (t.main = function (e, t) {
                this.func(e, t), (this.inter = null);
              }),
              (t.go = function (e) {
                var r = {};
                this.inter ||
                  ((r.$viewport_position =
                    (document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || document.body.scrollTop || 0),
                  (r.$viewport_position = Math.round(r.$viewport_position) || 0),
                  (r.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0),
                  (r.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0),
                  e
                    ? t.main(r, !0)
                    : (this.inter = setTimeout(function () {
                        t.main(r);
                      }, this.timeout)));
              }),
              t
            );
          },
          r = t({
            timeout: 1e3,
            func: function (e, t) {
              var r =
                  (document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || document.body.scrollTop || 0,
                a = new Date(),
                i = a - this.current_time;
              ((i > Qe.para.heatmap.scroll_delay_time && r - e.$viewport_position !== 0) || t) &&
                ((e.$url = G()),
                (e.$title = document.title),
                (e.$url_path = location.pathname),
                (e.event_duration = Math.min(Qe.para.heatmap.scroll_event_duration, parseInt(i) / 1e3)),
                (e.event_duration = e.event_duration < 0 ? 0 : e.event_duration),
                Qe.track("$WebStay", e)),
                (this.current_time = a);
            },
          });
        (r.current_time = new Date()),
          $e(window, "scroll", function () {
            return !!e() && void r.go();
          }),
          $e(window, "unload", function () {
            return !!e() && void r.go("notime");
          });
      },
      initHeatmap: function () {
        var e = this;
        return (
          !(!f(Qe.para.heatmap) || "default" !== Qe.para.heatmap.clickmap) &&
          !(n(Qe.para.heatmap.collect_url) && !Qe.para.heatmap.collect_url()) &&
          ("all" === Qe.para.heatmap.collect_elements
            ? (Qe.para.heatmap.collect_elements = "all")
            : (Qe.para.heatmap.collect_elements = "interact"),
          void ("all" === Qe.para.heatmap.collect_elements
            ? $e(document, "click", function (t) {
                var r = t || window.event;
                if (!r) return !1;
                var a = r.target || r.srcElement;
                if ("object" != typeof a) return !1;
                if ("string" != typeof a.tagName) return !1;
                var i = a.tagName.toLowerCase();
                if ("body" === i || "html" === i) return !1;
                if (!a || !a.parentNode || !a.parentNode.children) return !1;
                var n = a.parentNode.tagName.toLowerCase();
                "a" === n || "button" === n ? e.start(r, a.parentNode, n) : e.start(r, a, i);
              })
            : $e(document, "click", function (t) {
                var r = t || window.event;
                if (!r) return !1;
                var a = r.target || r.srcElement,
                  i = Qe.heatmap.getTargetElement(a, t);
                i
                  ? e.start(r, i, i.tagName.toLowerCase())
                  : b(a) &&
                    "div" === a.tagName.toLowerCase() &&
                    f(Qe.para.heatmap) &&
                    Qe.para.heatmap.get_vtrack_config &&
                    Qe.unlimitedDiv.events.length > 0 &&
                    Qe.unlimitedDiv.isTargetEle(a) &&
                    e.start(r, a, a.tagName.toLowerCase(), { $lib_method: "vtrack" });
              })))
        );
      },
    },
    At = {
      setOnlineState: function (t) {
        if (t === !0 && f(Qe.para.jsapp) && "function" == typeof Qe.para.jsapp.getData) {
          Qe.para.jsapp.isOnline = !0;
          var r = Qe.para.jsapp.getData();
          st(r) &&
            r.length > 0 &&
            e(r, function (e) {
              k(e) && Qe.sendState.realtimeSend(JSON.parse(e));
            });
        } else Qe.para.jsapp.isOnline = !1;
      },
      autoTrackIsUsed: !1,
      isReady: function (e) {
        e();
      },
      getUtm: function () {
        return vt.campaignParams();
      },
      getStayTime: function () {
        return (new Date() - Qe._t) / 1e3;
      },
      setProfileLocal: function (e) {
        if (!wt.isSupport()) return Qe.setProfile(e), !1;
        if (!f(e) || h(e)) return !1;
        var t = wt.parse("sensorsdata_2015_jssdk_profile"),
          r = !1;
        if (f(t) && !h(t)) {
          for (var a in e) (!(a in t && t[a] !== e[a]) && a in t) || ((t[a] = e[a]), (r = !0));
          r && (wt.set("sensorsdata_2015_jssdk_profile", JSON.stringify(t)), Qe.setProfile(e));
        } else wt.set("sensorsdata_2015_jssdk_profile", JSON.stringify(e)), Qe.setProfile(e);
      },
      setInitReferrer: function () {
        var e = me();
        Qe.setOnceProfile({ _init_referrer: e, _init_referrer_host: vt.pageProp.referrer_host });
      },
      setSessionReferrer: function () {
        var e = me();
        Qe.store.setSessionPropsOnce({ _session_referrer: e, _session_referrer_host: vt.pageProp.referrer_host });
      },
      setDefaultAttr: function () {
        vt.register({ _current_url: location.href, _referrer: me(), _referring_host: vt.pageProp.referrer_host });
      },
      trackHeatMap: function (e, t, r) {
        if ("object" == typeof e && e.tagName) {
          var a = e.tagName.toLowerCase(),
            i = e.parentNode.tagName.toLowerCase(),
            n = Qe.para.heatmap && Qe.para.heatmap.track_attr ? Qe.para.heatmap.track_attr : ["data-sensors-click"];
          "button" === a ||
            "a" === a ||
            "a" === i ||
            "button" === i ||
            "input" === a ||
            "textarea" === a ||
            H(e, n) ||
            jt.start(null, e, a, t, r);
        }
      },
      trackAllHeatMap: function (e, t, r) {
        if ("object" == typeof e && e.tagName) {
          var a = e.tagName.toLowerCase();
          jt.start(null, e, a, t, r);
        }
      },
      autoTrackSinglePage: function (t, a) {
        function i() {
          var t = vt.campaignParams(),
            r = {};
          return (
            e(t, function (e, t, a) {
              (" " + Qe.source_channel_standard + " ").indexOf(" " + t + " ") !== -1 ? (r["$" + t] = a[t]) : (r[t] = a[t]);
            }),
            r
          );
        }
        function n(e, t) {
          Qe.track("$pageview", r({ $referrer: s, $url: G(), $url_path: location.pathname, $title: document.title }, e, i()), t), (s = G());
        }
        var s;
        (s = this.autoTrackIsUsed ? vt.pageProp.url : vt.pageProp.referrer), (t = f(t) ? t : {});
        var o = !t.not_set_profile;
        if ((t.not_set_profile && delete t.not_set_profile, n(t, a), (this.autoTrackSinglePage = n), Qe.is_first_visitor && o)) {
          var l = {};
          Qe.para.preset_properties.search_keyword_baidu &&
            ge(document.referrer) &&
            de() &&
            ((l.$search_keyword_id = mt.id()),
            (l.$search_keyword_id_type = mt.type()),
            (l.$search_keyword_id_hash = C(l.$search_keyword_id))),
            Qe.setOnceProfile(
              r(
                {
                  $first_visit_time: new Date(),
                  $first_referrer: me(),
                  $first_browser_language: navigator.language || "\u53d6\u503c\u5f02\u5e38",
                  $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                  $first_traffic_source_type: Se(),
                  $first_search_keyword: ye(),
                },
                i(),
                l
              )
            ),
            (Qe.is_first_visitor = !1);
        }
      },
      autoTrackWithoutProfile: function (e, t) {
        (e = f(e) ? e : {}), this.autoTrack(r(e, { not_set_profile: !0 }), t);
      },
      autoTrack: function (t, a) {
        t = f(t) ? t : {};
        var i = vt.campaignParams(),
          n = {};
        e(i, function (e, t, r) {
          (" " + Qe.source_channel_standard + " ").indexOf(" " + t + " ") !== -1 ? (n["$" + t] = r[t]) : (n[t] = r[t]);
        });
        var s = !t.not_set_profile;
        t.not_set_profile && delete t.not_set_profile;
        var o = location.href;
        if (
          (Qe.para.is_single_page &&
            Oe(function () {
              var e = me(o);
              Qe.track("$pageview", r({ $referrer: e, $url: G(), $url_path: location.pathname, $title: document.title }, n, t), a),
                (o = G());
            }),
          Qe.track("$pageview", r({ $referrer: me(), $url: G(), $url_path: location.pathname, $title: document.title }, n, t), a),
          Qe.is_first_visitor && s)
        ) {
          var l = {};
          Qe.para.preset_properties.search_keyword_baidu &&
            ge(document.referrer) &&
            de() &&
            ((l.$search_keyword_id = mt.id()),
            (l.$search_keyword_id_type = mt.type()),
            (l.$search_keyword_id_hash = C(l.$search_keyword_id))),
            Qe.setOnceProfile(
              r(
                {
                  $first_visit_time: new Date(),
                  $first_referrer: me(),
                  $first_browser_language: navigator.language || "\u53d6\u503c\u5f02\u5e38",
                  $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                  $first_traffic_source_type: Se(),
                  $first_search_keyword: ye(),
                },
                n,
                l
              )
            ),
            (Qe.is_first_visitor = !1);
        }
        this.autoTrackIsUsed = !0;
      },
      getAnonymousID: function () {
        return h(Qe.store._state)
          ? "\u8bf7\u5148\u521d\u59cb\u5316SDK"
          : Qe.store._state._first_id || Qe.store._state.first_id || Qe.store._state._distinct_id || Qe.store._state.distinct_id;
      },
      setPlugin: function (t) {
        return (
          !!f(t) &&
          void e(t, function (e, t) {
            n(e) &&
              (f(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[t]
                ? e(window.SensorsDataWebJSSDKPlugin[t])
                : Qe.log(
                    t +
                      "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" +
                      t +
                      "\u7684\u5f15\u5165\u987a\u5e8f\uff01"
                  ));
          })
        );
      },
      useModulePlugin: function () {
        Qe.use.apply(Qe, arguments);
      },
      useAppPlugin: function () {
        this.setPlugin.apply(this, arguments);
      },
    };
  (Qe.para_default = ut),
    (Qe.addReferrerHost = function (e) {
      var t = "\u53d6\u503c\u5f02\u5e38";
      f(e.properties) &&
        (e.properties.$first_referrer && (e.properties.$first_referrer_host = Z(e.properties.$first_referrer, t)),
        ("track" !== e.type && "track_signup" !== e.type) ||
          ("$referrer" in e.properties && (e.properties.$referrer_host = "" === e.properties.$referrer ? "" : Z(e.properties.$referrer, t)),
          Qe.para.preset_properties.latest_referrer &&
            Qe.para.preset_properties.latest_referrer_host &&
            (e.properties.$latest_referrer_host = "" === e.properties.$latest_referrer ? "" : Z(e.properties.$latest_referrer, t))));
    }),
    (Qe.addPropsHook = function (e) {
      Qe.para.preset_properties &&
        Qe.para.preset_properties.url &&
        ("track" === e.type || "track_signup" === e.type) &&
        "undefined" == typeof e.properties.$url &&
        (e.properties.$url = G()),
        Qe.para.preset_properties &&
          Qe.para.preset_properties.title &&
          ("track" === e.type || "track_signup" === e.type) &&
          "undefined" == typeof e.properties.$title &&
          (e.properties.$title = document.title);
    }),
    (Qe.initPara = function (t) {
      r(ct, t || Qe.para || {}), (Qe.para = ct);
      var a = {};
      if (f(Qe.para.is_track_latest)) for (var i in Qe.para.is_track_latest) a["latest_" + i] = Qe.para.is_track_latest[i];
      Qe.para.preset_properties = r({}, Qe.para_default.preset_properties, a, Qe.para.preset_properties || {});
      var n;
      for (n in Qe.para_default) void 0 === Qe.para[n] && (Qe.para[n] = Qe.para_default[n]);
      "string" == typeof Qe.para.server_url &&
        ((Qe.para.server_url = _(Qe.para.server_url)),
        Qe.para.server_url &&
          ("://" === Qe.para.server_url.slice(0, 3)
            ? (Qe.para.server_url = location.protocol.slice(0, -1) + Qe.para.server_url)
            : "//" === Qe.para.server_url.slice(0, 2)
            ? (Qe.para.server_url = location.protocol + Qe.para.server_url)
            : "http" !== Qe.para.server_url.slice(0, 4) && (Qe.para.server_url = ""))),
        "string" != typeof Qe.para.web_url ||
          ("://" !== Qe.para.web_url.slice(0, 3) && "//" !== Qe.para.web_url.slice(0, 2)) ||
          ("://" === Qe.para.web_url.slice(0, 3)
            ? (Qe.para.web_url = location.protocol.slice(0, -1) + Qe.para.web_url)
            : (Qe.para.web_url = location.protocol + Qe.para.web_url)),
        "image" !== Qe.para.send_type && "ajax" !== Qe.para.send_type && "beacon" !== Qe.para.send_type && (Qe.para.send_type = "image"),
        Qe.debug.protocol.serverUrl(),
        Qe.bridge.initPara(),
        Qe.bridge.initState();
      var s = { datasend_timeout: 6e3, send_interval: 6e3 };
      wt.isSupport() && De() && "object" == typeof localStorage
        ? Qe.para.batch_send === !0
          ? (Qe.para.batch_send = r({}, s))
          : "object" == typeof Qe.para.batch_send && (Qe.para.batch_send = r({}, s, Qe.para.batch_send))
        : (Qe.para.batch_send = !1);
      var o = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
        l = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
        c = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
        d = { baidu: ["wd", "word", "kw", "keyword"], google: "q", bing: "q", yahoo: "p", sogou: ["query", "keyword"], so: "q", sm: "q" };
      "object" == typeof Qe.para.source_type &&
        ((Qe.para.source_type.utm = st(Qe.para.source_type.utm) ? Qe.para.source_type.utm.concat(o) : o),
        (Qe.para.source_type.search = st(Qe.para.source_type.search) ? Qe.para.source_type.search.concat(l) : l),
        (Qe.para.source_type.social = st(Qe.para.source_type.social) ? Qe.para.source_type.social.concat(c) : c),
        (Qe.para.source_type.keyword = f(Qe.para.source_type.keyword) ? r(d, Qe.para.source_type.keyword) : d));
      var h = { div: !1 },
        g = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
      if ((Qe.para.heatmap && !f(Qe.para.heatmap) && (Qe.para.heatmap = {}), f(Qe.para.heatmap))) {
        (Qe.para.heatmap.clickmap = Qe.para.heatmap.clickmap || "default"),
          (Qe.para.heatmap.scroll_notice_map = Qe.para.heatmap.scroll_notice_map || "default"),
          (Qe.para.heatmap.scroll_delay_time = Qe.para.heatmap.scroll_delay_time || 4e3),
          (Qe.para.heatmap.scroll_event_duration = Qe.para.heatmap.scroll_event_duration || 18e3),
          (Qe.para.heatmap.renderRefreshTime = Qe.para.heatmap.renderRefreshTime || 1e3),
          (Qe.para.heatmap.loadTimeout = Qe.para.heatmap.loadTimeout || 1e3),
          Qe.para.heatmap.get_vtrack_config !== !0 && (Qe.para.heatmap.get_vtrack_config = !1);
        var m = st(Qe.para.heatmap.track_attr)
          ? p(Qe.para.heatmap.track_attr, function (e) {
              return e && "string" == typeof e;
            })
          : [];
        if ((m.push("data-sensors-click"), (Qe.para.heatmap.track_attr = m), f(Qe.para.heatmap.collect_tags)))
          if (Qe.para.heatmap.collect_tags.div === !0) Qe.para.heatmap.collect_tags.div = { ignore_tags: g, max_level: 1 };
          else if (f(Qe.para.heatmap.collect_tags.div)) {
            if (
              (Qe.para.heatmap.collect_tags.div.ignore_tags
                ? st(Qe.para.heatmap.collect_tags.div.ignore_tags) ||
                  (Qe.log("ignore_tags \u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4\u683c\u5f0f"),
                  (Qe.para.heatmap.collect_tags.div.ignore_tags = g))
                : (Qe.para.heatmap.collect_tags.div.ignore_tags = g),
              Qe.para.heatmap.collect_tags.div.max_level)
            ) {
              var v = [1, 2, 3];
              u(v, Qe.para.heatmap.collect_tags.div.max_level) === -1 && (Qe.para.heatmap.collect_tags.div.max_level = 1);
            }
          } else Qe.para.heatmap.collect_tags.div = !1;
        else Qe.para.heatmap.collect_tags = h;
      }
      if (st(Qe.para.server_url) && Qe.para.server_url.length)
        for (n = 0; n < Qe.para.server_url.length; n++)
          /sa\.gif[^\/]*$/.test(Qe.para.server_url[n]) ||
            (Qe.para.server_url[n] = Qe.para.server_url[n].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
      else
        /sa\.gif[^\/]*$/.test(Qe.para.server_url) ||
          "string" != typeof Qe.para.server_url ||
          (Qe.para.server_url = Qe.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
      "string" == typeof Qe.para.server_url &&
        (Qe.para.debug_mode_url = Qe.para.debug_mode_url || Qe.para.server_url.replace("sa.gif", "debug")),
        Qe.para.noCache === !0 ? (Qe.para.noCache = "?" + new Date().getTime()) : (Qe.para.noCache = ""),
        Qe.para.callback_timeout > Qe.para.datasend_timeout && (Qe.para.datasend_timeout = Qe.para.callback_timeout),
        Qe.para.heatmap &&
          Qe.para.heatmap.collect_tags &&
          f(Qe.para.heatmap.collect_tags) &&
          e(Qe.para.heatmap.collect_tags, function (e, t) {
            "div" !== t && e && Qe.heatmap.otherTags.push(t);
          });
    }),
    (Qe.readyState = {
      state: 0,
      historyState: [],
      stateType: { 1: "1-init\u672a\u5f00\u59cb", 2: "2-init\u5f00\u59cb", 3: "3-store\u5b8c\u6210" },
      getState: function () {
        return this.historyState.join("\n");
      },
      setState: function (e) {
        String(e) in this.stateType && (this.state = e), this.historyState.push(this.stateType[e]);
      },
    }),
    (Qe.setPreConfig = function (e) {
      (Qe.para = e.para), (Qe._q = e._q);
    }),
    (Qe.setInitVar = function () {
      (Qe._t = Qe._t || 1 * new Date()), (Qe.lib_version = ht), (Qe.is_first_visitor = !1), (Qe.source_channel_standard = ft);
    }),
    (Qe.log = E),
    (Qe.enableLocalLog = function () {
      if (St.isSupport())
        try {
          sessionStorage.setItem("sensorsdata_jssdk_debug", "true");
        } catch (e) {
          Qe.log("enableLocalLog error: " + e.message);
        }
    }),
    (Qe.disableLocalLog = function () {
      St.isSupport() && sessionStorage.removeItem("sensorsdata_jssdk_debug");
    }),
    (Qe.debug = _t),
    (Qe.quick = function () {
      var e = Array.prototype.slice.call(arguments),
        t = e[0],
        r = e.slice(1);
      return "string" == typeof t && At[t]
        ? At[t].apply(At, r)
        : void ("function" == typeof t ? t.apply(Qe, r) : Qe.log("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd" + e[0]));
    }),
    (Qe.use = function (e, t) {
      return v(e)
        ? f(window.SensorsDataWebJSSDKPlugin) && f(window.SensorsDataWebJSSDKPlugin[e]) && n(window.SensorsDataWebJSSDKPlugin[e].init)
          ? (window.SensorsDataWebJSSDKPlugin[e].init(Qe, t), window.SensorsDataWebJSSDKPlugin[e])
          : f(Qe.modules) && f(Qe.modules[e]) && n(Qe.modules[e].init)
          ? (Qe.modules[e].init(Qe, t), Qe.modules[e])
          : void Qe.log(
              e +
                "\u6ca1\u6709\u83b7\u53d6\u5230,\u8bf7\u67e5\u9605\u6587\u6863\uff0c\u8c03\u6574" +
                e +
                "\u7684\u5f15\u5165\u987a\u5e8f\uff01"
            )
        : (Qe.log("use\u63d2\u4ef6\u540d\u79f0\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff01"), !1);
    }),
    (Qe.track = function (e, t, r) {
      Nt.check({ event: e, properties: t }) && Nt.send({ type: "track", event: e, properties: t }, r);
    }),
    (Qe.trackLink = function (e, t, r) {
      function a(e, t, r) {
        function a(e) {
          function a() {
            n || ((n = !0), (location.href = i.href));
          }
          e.stopPropagation(), e.preventDefault();
          var n = !1;
          setTimeout(a, 1e3), Qe.track(t, r, a);
        }
        e = e || {};
        var i = null;
        return (
          e.ele && (i = e.ele),
          e.event && (i = e.target ? e.target : e.event.target),
          (r = r || {}),
          !(!i || "object" != typeof i) &&
            (!i.href || /^javascript/.test(i.href) || i.target || i.download || i.onclick
              ? (Qe.track(t, r), !1)
              : (e.event && a(e.event),
                void (
                  e.ele &&
                  $e(e.ele, "click", function (e) {
                    a(e);
                  })
                )))
        );
      }
      "object" == typeof e && e.tagName ? a({ ele: e }, t, r) : "object" == typeof e && e.target && e.event && a(e, t, r);
    }),
    (Qe.trackLinks = function (e, t, r) {
      return (
        (r = r || {}),
        !(!e || "object" != typeof e) &&
          !(!e.href || /^javascript/.test(e.href) || e.target) &&
          void $e(e, "click", function (a) {
            function i() {
              n || ((n = !0), (location.href = e.href));
            }
            a.preventDefault();
            var n = !1;
            setTimeout(i, 1e3), Qe.track(t, r, i);
          })
      );
    }),
    (Qe.setItem = function (e, t, r) {
      Nt.check({ item_type: e, item_id: t, properties: r }) &&
        Nt.sendItem({ type: "item_set", item_type: e, item_id: t, properties: r || {} });
    }),
    (Qe.deleteItem = function (e, t) {
      Nt.check({ item_type: e, item_id: t }) && Nt.sendItem({ type: "item_delete", item_type: e, item_id: t });
    }),
    (Qe.setProfile = function (e, t) {
      Nt.check({ propertiesMust: e }) && Nt.send({ type: "profile_set", properties: e }, t);
    }),
    (Qe.setOnceProfile = function (e, t) {
      Nt.check({ propertiesMust: e }) && Nt.send({ type: "profile_set_once", properties: e }, t);
    }),
    (Qe.appendProfile = function (t, r) {
      Nt.check({ propertiesMust: t }) &&
        (e(t, function (e, r) {
          v(e)
            ? (t[r] = [e])
            : st(e)
            ? (t[r] = e)
            : (delete t[r], Qe.log("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"));
        }),
        h(t) || Nt.send({ type: "profile_append", properties: t }, r));
    }),
    (Qe.incrementProfile = function (e, t) {
      function r(e) {
        for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && !/-*\d+/.test(String(e[t]))) return !1;
        return !0;
      }
      var a = e;
      v(e) && ((e = {}), (e[a] = 1)),
        Nt.check({ propertiesMust: e }) &&
          (r(e)
            ? Nt.send({ type: "profile_increment", properties: e }, t)
            : Qe.log("profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57"));
    }),
    (Qe.deleteProfile = function (e) {
      Nt.send({ type: "profile_delete" }, e), Dt.set("distinct_id", gt()), Dt.set("first_id", "");
    }),
    (Qe.unsetProfile = function (t, r) {
      var a = t,
        i = {};
      v(t) && ((t = []), t.push(a)),
        st(t)
          ? (e(t, function (e) {
              v(e)
                ? (i[e] = !0)
                : Qe.log(
                    "profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389",
                    e
                  );
            }),
            Nt.send({ type: "profile_unset", properties: i }, r))
          : Qe.log("profile_unset\u7684\u53c2\u6570\u662f\u6570\u7ec4");
    }),
    (Qe.identify = function (e, t) {
      "number" == typeof e && (e = String(e));
      var r = Dt.getFirstId();
      if ("undefined" == typeof e) {
        var a = gt();
        r ? Dt.set("first_id", a) : Dt.set("distinct_id", a);
      } else
        Nt.check({ distinct_id: e })
          ? t === !0
            ? r
              ? Dt.set("first_id", e)
              : Dt.set("distinct_id", e)
            : r
            ? Dt.change("first_id", e)
            : Dt.change("distinct_id", e)
          : Qe.log("identify\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32");
    }),
    (Qe.trackSignup = function (e, t, r, a) {
      if (Nt.check({ distinct_id: e, event: t, properties: r })) {
        var i = Dt.getFirstId() || Dt.getDistinctId();
        Dt.set("distinct_id", e), Nt.send({ original_id: i, distinct_id: e, type: "track_signup", event: t, properties: r }, a);
      }
    }),
    (Qe.registerPage = function (e) {
      Nt.check({ properties: e }) ? r(vt.currentProps, e) : Qe.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef");
    }),
    (Qe.clearAllRegister = function (e) {
      Dt.clearAllProps(e);
    }),
    (Qe.clearPageRegister = function (e) {
      var t;
      if (st(e) && e.length > 0) for (t = 0; t < e.length; t++) v(e[t]) && e[t] in vt.currentProps && delete vt.currentProps[e[t]];
      else if (e === !0) for (t in vt.currentProps) delete vt.currentProps[t];
    }),
    (Qe.register = function (e) {
      Nt.check({ properties: e }) ? Dt.setProps(e) : Qe.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef");
    }),
    (Qe.registerOnce = function (e) {
      Nt.check({ properties: e }) ? Dt.setPropsOnce(e) : Qe.log("registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef");
    }),
    (Qe.registerSession = function (e) {
      Nt.check({ properties: e }) ? Dt.setSessionProps(e) : Qe.log("registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef");
    }),
    (Qe.registerSessionOnce = function (e) {
      Nt.check({ properties: e }) ? Dt.setSessionPropsOnce(e) : Qe.log("registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef");
    }),
    (Qe.login = function (e, t) {
      if (("number" == typeof e && (e = String(e)), Nt.check({ distinct_id: e }))) {
        var r = Dt.getFirstId(),
          a = Dt.getDistinctId();
        e !== a ? (r || Dt.set("first_id", a), Qe.trackSignup(e, "$SignUp", {}, t)) : t && t();
      } else Qe.log("login\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32"), t && t();
    }),
    (Qe.logout = function (e) {
      var t = Dt.getFirstId();
      if (t)
        if ((Dt.set("first_id", ""), e === !0)) {
          var r = gt();
          Dt.set("distinct_id", r);
        } else Dt.set("distinct_id", t);
      else Qe.log("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25");
    }),
    (Qe.getPresetProperties = function () {
      function t() {
        var t = vt.campaignParams(),
          r = {};
        return (
          e(t, function (e, t, a) {
            (" " + Qe.source_channel_standard + " ").indexOf(" " + t + " ") !== -1 ? (r["$" + t] = a[t]) : (r[t] = a[t]);
          }),
          r
        );
      }
      var a = {
          $is_first_day: yt.getNewUser(),
          $referrer: vt.pageProp.referrer || "",
          $referrer_host: vt.pageProp.referrer ? Z(vt.pageProp.referrer) : "",
          $url: G(),
          $url_path: location.pathname,
          $title: document.title || "",
          _distinct_id: Dt.getDistinctId(),
        },
        i = r({}, vt.properties(), Qe.store.getProps(), t(), a);
      return (
        Qe.para.preset_properties.latest_referrer &&
          Qe.para.preset_properties.latest_referrer_host &&
          (i.$latest_referrer_host = "" === i.$latest_referrer ? "" : Z(i.$latest_referrer)),
        i
      );
    }),
    (Qe.iOSWebClickPolyfill = function () {
      var t = "",
        r = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
      Qe.heatmap &&
        st(Qe.heatmap.otherTags) &&
        e(Qe.heatmap.otherTags, function (e) {
          t += e + r;
        }),
        Qe._.isIOS() &&
          Qe._.getIOSVersion() &&
          Qe._.getIOSVersion() < 13 &&
          (Qe.para.heatmap &&
            Qe.para.heatmap.collect_tags &&
            Qe.para.heatmap.collect_tags.div &&
            Qe._.setCssStyle("div, [data-sensors-click]" + r),
          Qe.para.heatmap && Qe.para.heatmap.track_attr && Qe._.setCssStyle("[" + Qe.para.heatmap.track_attr.join("], [") + "]" + r),
          "" !== t && Qe._.setCssStyle(t));
    });
  var $t = {};
  ($t.buildData = function (e) {
    var t = {
      distinct_id: Qe.store.getDistinctId(),
      lib: { $lib: "js", $lib_method: "code", $lib_version: String(Qe.lib_version) },
      properties: {},
    };
    return (
      f(e) &&
        f(e.properties) &&
        !h(e.properties) &&
        (e.properties.$lib_detail && ((t.lib.$lib_detail = e.properties.$lib_detail), delete e.properties.$lib_detail),
        e.properties.$lib_method && ((t.lib.$lib_method = e.properties.$lib_method), delete e.properties.$lib_method)),
      r(t, Qe.store.getUnionId(), e),
      f(e.properties) && !h(e.properties) && r(t.properties, e.properties),
      (e.type && "profile" === e.type.slice(0, 7)) ||
        ((t.properties = r({}, vt.properties(), Dt.getProps(), Dt.getSessionProps(), vt.currentProps, t.properties)),
        Qe.para.preset_properties.latest_referrer &&
          !v(t.properties.$latest_referrer) &&
          (t.properties.$latest_referrer = "\u53d6\u503c\u5f02\u5e38"),
        Qe.para.preset_properties.latest_search_keyword &&
          !v(t.properties.$latest_search_keyword) &&
          ((Qe.para.preset_properties.search_keyword_baidu &&
            v(t.properties.$search_keyword_id) &&
            S(t.properties.$search_keyword_id_hash) &&
            v(t.properties.$search_keyword_id_type)) ||
            (t.properties.$latest_search_keyword = "\u53d6\u503c\u5f02\u5e38")),
        Qe.para.preset_properties.latest_traffic_source_type &&
          !v(t.properties.$latest_traffic_source_type) &&
          (t.properties.$latest_traffic_source_type = "\u53d6\u503c\u5f02\u5e38"),
        Qe.para.preset_properties.latest_landing_page &&
          !v(t.properties.$latest_landing_page) &&
          (t.properties.$latest_landing_page = "\u53d6\u503c\u5f02\u5e38"),
        "not_collect" === Qe.para.preset_properties.latest_wx_ad_click_id
          ? (delete t.properties._latest_wx_ad_click_id,
            delete t.properties._latest_wx_ad_hash_key,
            delete t.properties._latest_wx_ad_callbacks)
          : Qe.para.preset_properties.latest_wx_ad_click_id &&
            !v(t.properties._latest_wx_ad_click_id) &&
            ((t.properties._latest_wx_ad_click_id = "\u53d6\u503c\u5f02\u5e38"),
            (t.properties._latest_wx_ad_hash_key = "\u53d6\u503c\u5f02\u5e38"),
            (t.properties._latest_wx_ad_callbacks = "\u53d6\u503c\u5f02\u5e38")),
        v(t.properties._latest_wx_ad_click_id) && (t.properties.$url = G())),
      t.properties.$time && y(t.properties.$time)
        ? ((t.time = 1 * t.properties.$time), delete t.properties.$time)
        : (t.time = 1 * new Date()),
      Qe.vtrackBase.addCustomProps(t),
      se(t),
      oe(t.properties),
      te(t),
      ie(t),
      re(t),
      Pt.checkIsAddSign(t),
      Pt.checkIsFirstTime(t),
      Qe.addReferrerHost(t),
      Qe.addPropsHook(t),
      t
    );
  }),
    ($t.sendData = function (e, t) {
      var r = le(e.properties);
      Qe.para.debug_mode === !0 ? (Qe.log(e), Qe.saEvent.debugPath(JSON.stringify(e), t)) : Qe.sendState.getSendCall(e, r, t);
    });
  var Ot = function (e) {
    (this.callback = e.callback),
      (this.img = document.createElement("img")),
      (this.img.width = 1),
      (this.img.height = 1),
      Qe.para.img_use_crossorigin && (this.img.crossOrigin = "anonymous"),
      (this.data = e.data),
      (this.server_url = Ue(e.server_url, e.data));
  };
  (Ot.prototype.start = function () {
    var e = this;
    Qe.para.ignore_oom &&
      ((this.img.onload = function () {
        (this.onload = null), (this.onerror = null), (this.onabort = null), e.isEnd();
      }),
      (this.img.onerror = function () {
        (this.onload = null), (this.onerror = null), (this.onabort = null), e.isEnd();
      }),
      (this.img.onabort = function () {
        (this.onload = null), (this.onerror = null), (this.onabort = null), e.isEnd();
      })),
      (this.img.src = this.server_url);
  }),
    (Ot.prototype.lastClear = function () {
      this.img.src = "";
    });
  var It = function (e) {
    (this.callback = e.callback), (this.server_url = e.server_url), (this.data = Be(e.data));
  };
  It.prototype.start = function () {
    var e = this;
    Ee({
      url: this.server_url,
      type: "POST",
      data: this.data,
      credentials: !1,
      timeout: Qe.para.datasend_timeout,
      cors: !0,
      success: function () {
        e.isEnd();
      },
      error: function () {
        e.isEnd();
      },
    });
  };
  var Tt = function (e) {
    (this.callback = e.callback), (this.server_url = e.server_url), (this.data = Be(e.data));
  };
  Tt.prototype.start = function () {
    var e = this;
    "object" == typeof navigator && "function" == typeof navigator.sendBeacon && navigator.sendBeacon(this.server_url, this.data),
      setTimeout(function () {
        e.isEnd();
      }, 40);
  };
  var xt = {};
  (xt.queue = be()),
    (xt.getSendCall = function (e, t, r) {
      if (Qe.is_heatmap_render_mode) return !1;
      if (Qe.readyState.state < 3) return Qe.log("\u521d\u59cb\u5316\u6ca1\u6709\u5b8c\u6210"), !1;
      (e._track_id = Number(String(N()).slice(2, 5) + String(N()).slice(2, 4) + String(new Date().getTime()).slice(-4))),
        (e._flush_time = new Date().getTime());
      var a = e;
      e = JSON.stringify(e);
      var i = { data: a, config: t, callback: r };
      return (
        Qe.events.tempAdd("send", a),
        !Qe.para.app_js_bridge && Qe.para.batch_send && localStorage.length < 200
          ? (Qe.log(a), Qe.batchSend.add(i.data), !1)
          : ("item_set" === a.type || "item_delete" === a.type ? this.prepareServerUrl(i) : Qe.bridge.dataSend(i, this, r), void Qe.log(a))
      );
    }),
    (xt.prepareServerUrl = function (e) {
      if ("object" == typeof e.config && e.config.server_url) this.sendCall(e, e.config.server_url, e.callback);
      else if (st(Qe.para.server_url) && Qe.para.server_url.length)
        for (var t = 0; t < Qe.para.server_url.length; t++) this.sendCall(e, Qe.para.server_url[t]);
      else
        "string" == typeof Qe.para.server_url && "" !== Qe.para.server_url
          ? this.sendCall(e, Qe.para.server_url, e.callback)
          : Qe.log(
              "\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"
            );
    }),
    (xt.sendCall = function (e, t, r) {
      var a = { server_url: t, data: JSON.stringify(e.data), callback: r, config: e.config };
      f(Qe.para.jsapp) && !Qe.para.jsapp.isOnline && "function" == typeof Qe.para.jsapp.setData
        ? (delete a.callback, (a = JSON.stringify(a)), Qe.para.jsapp.setData(a))
        : this.realtimeSend(a);
    }),
    (xt.realtimeSend = function (e) {
      var t = Ke(e);
      t.start();
    }),
    (We.prototype = {
      add: function (e) {
        f(e) && (this.writeStore(e), ("track_signup" !== e.type && "$pageview" !== e.event) || this.sendStrategy());
      },
      clearPendingStatus: function () {
        this.sendingItemKeys.length && this.removePendingItems(this.sendingItemKeys);
      },
      remove: function (t) {
        this.sendingData > 0 && --this.sendingData,
          st(t) &&
            t.length > 0 &&
            e(t, function (e) {
              wt.remove(e);
            });
      },
      send: function (e) {
        var t,
          r = this;
        return (v(Qe.para.server_url) && "" !== Qe.para.server_url) || (st(Qe.para.server_url) && Qe.para.server_url.length)
          ? ((t = st(Qe.para.server_url) ? Qe.para.server_url[0] : Qe.para.server_url),
            void Ee({
              url: t,
              type: "POST",
              data: "data_list=" + encodeURIComponent($(JSON.stringify(e.vals))),
              credentials: !1,
              timeout: Qe.para.batch_send.datasend_timeout,
              cors: !0,
              success: function () {
                r.remove(e.keys), r.removePendingItems(e.keys);
              },
              error: function () {
                r.sendingData > 0 && --r.sendingData, r.removePendingItems(e.keys);
              },
            }))
          : void Qe.log(
              "\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"
            );
      },
      appendPendingItems: function (e) {
        if (st(e) !== !1) {
          this.sendingItemKeys = A(this.sendingItemKeys.concat(e));
          try {
            var t = this.getPendingItems(),
              r = A(t.concat(e));
            localStorage.setItem("sawebjssdk-sendingitems", JSON.stringify(r));
          } catch (a) {}
        }
      },
      removePendingItems: function (e) {
        if (st(e) !== !1) {
          this.sendingItemKeys.length &&
            (this.sendingItemKeys = p(this.sendingItemKeys, function (t) {
              return u(e, t) === -1;
            }));
          try {
            var t = this.getPendingItems(),
              r = p(t, function (t) {
                return u(e, t) === -1;
              });
            localStorage.setItem("sawebjssdk-sendingitems", JSON.stringify(r));
          } catch (a) {}
        }
      },
      getPendingItems: function () {
        var e = [];
        try {
          var t = localStorage.getItem("sawebjssdk-sendingitems");
          t && (e = JSON.parse(t));
        } catch (r) {}
        return e;
      },
      sendPrepare: function (e) {
        this.appendPendingItems(e.keys);
        var t = e.vals,
          r = t.length;
        r > 0 && this.send({ keys: e.keys, vals: t });
      },
      sendStrategy: function () {
        if (document.hasFocus() === !1) return !1;
        var e = this.readStore();
        e.keys.length > 0 && 0 === this.sendingData && ((this.sendingData = 1), this.sendPrepare(e));
      },
      batchInterval: function () {
        var e = this;
        setInterval(function () {
          e.sendStrategy();
        }, Qe.para.batch_send.send_interval);
      },
      readStore: function () {
        for (
          var e = [], t = [], r = null, a = new Date().getTime(), i = localStorage.length, n = this.getPendingItems(), s = 0;
          s < i;
          s++
        ) {
          var o = localStorage.key(s);
          if (0 === o.indexOf("sawebjssdk-") && /^sawebjssdk\-\d+$/.test(o)) {
            if (n.length && u(n, o) > -1) continue;
            (r = localStorage.getItem(o)),
              r
                ? ((r = P(r)),
                  r && f(r)
                    ? ((r._flush_time = a), e.push(o), t.push(r))
                    : (localStorage.removeItem(o), Qe.log("localStorage-\u6570\u636eparse\u5f02\u5e38" + r)))
                : (localStorage.removeItem(o), Qe.log("localStorage-\u6570\u636e\u53d6\u503c\u5f02\u5e38" + r));
          }
        }
        return { keys: e, vals: t };
      },
      writeStore: function (e) {
        var t = String(N()).slice(2, 5) + String(N()).slice(2, 5) + String(new Date().getTime()).slice(3);
        localStorage.setItem("sawebjssdk-" + t, JSON.stringify(e));
      },
    });
  var Lt = new We(),
    Et = {
      bridge_info: { touch_app_bridge: !1, verify_success: !1, platform: "" },
      is_verify_success: !1,
      initPara: function () {
        var e = { is_send: !0, white_list: [], is_mui: !1 };
        "object" == typeof Qe.para.app_js_bridge
          ? (Qe.para.app_js_bridge = r({}, e, Qe.para.app_js_bridge))
          : Qe.para.use_app_track === !0 || Qe.para.app_js_bridge === !0 || "only" === Qe.para.use_app_track
          ? ((Qe.para.use_app_track_is_send !== !1 && "only" !== Qe.para.use_app_track) || (e.is_send = !1),
            (Qe.para.app_js_bridge = r({}, e)))
          : "mui" === Qe.para.use_app_track && ((e.is_mui = !0), (Qe.para.app_js_bridge = r({}, e))),
          Qe.para.app_js_bridge.is_send === !1 &&
            Qe.log("\u8bbe\u7f6e\u4e86 is_send:false,\u5982\u679c\u6253\u901a\u5931\u8d25\uff0c\u6570\u636e\u5c06\u88ab\u4e22\u5f03\uff01");
      },
      initState: function () {
        function e(e) {
          function t(e) {
            var t = { hostname: "", project: "" };
            try {
              (t.hostname = X(e).hostname), (t.project = X(e).searchParams.get("project") || "default");
            } catch (r) {
              Qe.log(r);
            }
            return t;
          }
          var r = t(e),
            a = t(Qe.para.server_url);
          if (r.hostname === a.hostname && r.project === a.project) return !0;
          if (Qe.para.app_js_bridge.white_list.length > 0)
            for (var i = 0; i < Qe.para.app_js_bridge.white_list.length; i++) {
              var n = t(Qe.para.app_js_bridge.white_list[i]);
              if (n.hostname === r.hostname && n.project === r.project) return !0;
            }
          return !1;
        }
        if (f(Qe.para.app_js_bridge) && !Qe.para.app_js_bridge.is_mui)
          if (
            window.webkit &&
            window.webkit.messageHandlers &&
            window.webkit.messageHandlers.sensorsdataNativeTracker &&
            f(window.SensorsData_iOS_JS_Bridge) &&
            window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url
          )
            e(window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) && (Qe.bridge.is_verify_success = !0);
          else if (
            f(window.SensorsData_APP_New_H5_Bridge) &&
            window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url &&
            window.SensorsData_APP_New_H5_Bridge.sensorsdata_track
          ) {
            var t = window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url();
            t && e(t) && (Qe.bridge.is_verify_success = !0);
          }
        this.bridge_info = this.initDefineBridgeInfo();
      },
      initDefineBridgeInfo: function () {
        var e = { touch_app_bridge: !0, verify_success: !1, platform: "" };
        return (
          window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.sensorsdataNativeTracker &&
          window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage &&
          f(window.SensorsData_iOS_JS_Bridge) &&
          window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url
            ? ((e.platform = "ios"), Qe.bridge.is_verify_success ? (e.verify_success = "success") : (e.verify_success = "fail"))
            : f(window.SensorsData_APP_New_H5_Bridge) &&
              window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url &&
              window.SensorsData_APP_New_H5_Bridge.sensorsdata_track
            ? ((e.platform = "android"), Qe.bridge.is_verify_success ? (e.verify_success = "success") : (e.verify_success = "fail"))
            : "object" == typeof SensorsData_APP_JS_Bridge &&
              ((SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify) ||
                SensorsData_APP_JS_Bridge.sensorsdata_track)
            ? ((e.platform = "android"),
              SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify
                ? SensorsData_APP_JS_Bridge.sensorsdata_visual_verify(JSON.stringify({ server_url: Qe.para.server_url }))
                  ? (e.verify_success = "success")
                  : (e.verify_success = "fail")
                : (e.verify_success = "success"))
            : (!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent)) || window.MSStream
            ? (e.touch_app_bridge = !1)
            : ((e.platform = "ios"), Qe.bridge.iOS_UA_bridge() ? (e.verify_success = "success") : (e.verify_success = "fail")),
          e
        );
      },
      iOS_UA_bridge: function () {
        if (/sensors-verify/.test(navigator.userAgent)) {
          var e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
          if (e && e[0] && "string" == typeof e[1] && 2 === e[1].split("?").length) {
            e = e[1].split("?");
            var t = null,
              r = null;
            try {
              (t = X(Qe.para.server_url).hostname), (r = X(Qe.para.server_url).searchParams.get("project") || "default");
            } catch (a) {
              Qe.log(a);
            }
            return !(!t || t !== e[0] || !r || r !== e[1]);
          }
          return !1;
        }
        return !!/sa-sdk-ios/.test(navigator.userAgent);
      },
      dataSend: function (e, t, a) {
        function i(e) {
          var t = JSON.stringify(r({ server_url: Qe.para.server_url }, e));
          return (t = t.replaceAll(/\r\n/g, "")), (t = encodeURIComponent(t)), "sensorsanalytics://trackEvent?event=" + t;
        }
        var n = e.data;
        if (f(Qe.para.app_js_bridge) && !Qe.para.app_js_bridge.is_mui)
          if (
            window.webkit &&
            window.webkit.messageHandlers &&
            window.webkit.messageHandlers.sensorsdataNativeTracker &&
            window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage &&
            f(window.SensorsData_iOS_JS_Bridge) &&
            window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url
          )
            Qe.bridge.is_verify_success
              ? (window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(
                  JSON.stringify({ callType: "app_h5_track", data: r({ server_url: Qe.para.server_url }, n) })
                ),
                "function" == typeof a && a())
              : Qe.para.app_js_bridge.is_send
              ? (Qe.debug.apph5({ data: n, step: "4.1", output: "all" }), t.prepareServerUrl(e))
              : "function" == typeof a && a();
          else if (
            f(window.SensorsData_APP_New_H5_Bridge) &&
            window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url &&
            window.SensorsData_APP_New_H5_Bridge.sensorsdata_track
          )
            Qe.bridge.is_verify_success
              ? (SensorsData_APP_New_H5_Bridge.sensorsdata_track(JSON.stringify(r({ server_url: Qe.para.server_url }, n))),
                "function" == typeof a && a())
              : Qe.para.app_js_bridge.is_send
              ? (Qe.debug.apph5({ data: n, step: "4.2", output: "all" }), t.prepareServerUrl(e))
              : "function" == typeof a && a();
          else if (
            "object" == typeof SensorsData_APP_JS_Bridge &&
            (SensorsData_APP_JS_Bridge.sensorsdata_verify || SensorsData_APP_JS_Bridge.sensorsdata_track)
          )
            SensorsData_APP_JS_Bridge.sensorsdata_verify
              ? SensorsData_APP_JS_Bridge.sensorsdata_verify(JSON.stringify(r({ server_url: Qe.para.server_url }, n)))
                ? "function" == typeof a && a()
                : Qe.para.app_js_bridge.is_send
                ? (Qe.debug.apph5({ data: n, step: "3.1", output: "all" }), t.prepareServerUrl(e))
                : "function" == typeof a && a()
              : (SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify(r({ server_url: Qe.para.server_url }, n))),
                "function" == typeof a && a());
          else if ((!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent)) || window.MSStream)
            f(Qe.para.app_js_bridge) && Qe.para.app_js_bridge.is_send === !0
              ? (Qe.debug.apph5({ data: n, step: "2", output: "all" }), t.prepareServerUrl(e))
              : "function" == typeof a && a();
          else {
            var s = null;
            if (Qe.bridge.iOS_UA_bridge()) {
              s = document.createElement("iframe");
              var o = i(n);
              s.setAttribute("src", o),
                document.documentElement.appendChild(s),
                s.parentNode.removeChild(s),
                (s = null),
                "function" == typeof a && a();
            } else
              Qe.para.app_js_bridge.is_send
                ? (Qe.debug.apph5({ data: n, step: "3.2", output: "all" }), t.prepareServerUrl(e))
                : "function" == typeof a && a();
          }
        else
          f(Qe.para.app_js_bridge) && Qe.para.app_js_bridge.is_mui
            ? f(window.plus) && window.plus.SDAnalytics && window.plus.SDAnalytics.trackH5Event
              ? (window.plus.SDAnalytics.trackH5Event(e), "function" == typeof a && a())
              : f(Qe.para.app_js_bridge) && Qe.para.app_js_bridge.is_send === !0
              ? t.prepareServerUrl(e)
              : "function" == typeof a && a()
            : (Qe.debug.apph5({ data: n, step: "1", output: "code" }), t.prepareServerUrl(e));
      },
      app_js_bridge_v1: function () {
        function e(e) {
          (a = e), k(a) && (a = JSON.parse(a)), i && (i(a), (i = null), (a = null));
        }
        function t() {
          "object" == typeof window.SensorsData_APP_JS_Bridge &&
            window.SensorsData_APP_JS_Bridge.sensorsdata_call_app &&
            ((a = SensorsData_APP_JS_Bridge.sensorsdata_call_app()), k(a) && (a = JSON.parse(a)));
        }
        function r() {
          if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            var e = document.createElement("iframe");
            e.setAttribute("src", "sensorsanalytics://getAppInfo"),
              document.documentElement.appendChild(e),
              e.parentNode.removeChild(e),
              (e = null);
          }
        }
        var a = null,
          i = null;
        (window.sensorsdata_app_js_bridge_call_js = function (t) {
          e(t);
        }),
          (Qe.getAppStatus = function (e) {
            return r(), t(), e ? void (null === a ? (i = e) : (e(a), (a = null))) : a;
          });
      },
      supportAppCallJs: function () {
        (window.sensorsdata_app_call_js = function (e, t) {
          if (e in window.sensorsdata_app_call_js.modules) return window.sensorsdata_app_call_js.modules[e](t);
        }),
          (window.sensorsdata_app_call_js.modules = {});
      },
    },
    Ht = function (e) {
      (this.list = {}), (this.type = e.type), (this.app_call_js = n(e.app_call_js) ? e.app_call_js : function () {}), this.init();
    };
  (Ht.prototype.init = function () {
    var e = this;
    window.sensorsdata_app_call_js.modules[this.type] ||
      (window.sensorsdata_app_call_js.modules[this.type] = function (t) {
        return e.app_call_js(t);
      });
  }),
    (Ht.prototype.jsCallApp = function (e) {
      var t = { callType: this.type, data: e };
      if (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.sensorsdataNativeTracker &&
        window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage
      )
        window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(t));
      else {
        if (!f(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app)
          return Qe.log("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge"), !1;
        window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(t));
      }
    }),
    (Ht.prototype.getAppData = function () {
      return f(window.SensorsData_APP_New_H5_Bridge)
        ? n(window.SensorsData_APP_New_H5_Bridge[this.type])
          ? window.SensorsData_APP_New_H5_Bridge[this.type]()
          : window.SensorsData_APP_New_H5_Bridge[this.type]
        : f(window.SensorsData_APP_JS_Bridge) && n(window.SensorsData_APP_JS_Bridge[this.type])
        ? window.SensorsData_APP_JS_Bridge[this.type]()
        : void 0;
    }),
    (Ht.prototype.hasAppBridge = function () {
      return window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.sensorsdataNativeTracker &&
        window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage
        ? "ios"
        : f(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app
        ? "android"
        : (Qe.log("App\u7aefbridge\u672a\u66b4\u9732"), !1);
    }),
    (Ht.prototype.requestToApp = function (e) {
      function t() {
        var e = new Date().getTime().toString(16),
          t = String(N()).replace(".", "").slice(1, 8);
        return e + "-" + t;
      }
      var r = this,
        a = f(e.data) ? e.data : {};
      n(e.callback) || (e.callback = function () {}),
        f(e.timeout) &&
          S(e.timeout.time) &&
          (n(e.timeout.callback) || (e.timeout.callback = function () {}),
          (e.timer = setTimeout(function () {
            e.timeout.callback(), delete r.list[i];
          }, e.timeout.time)));
      var i = t();
      this.list[i] = e;
      var s = { callType: this.type, data: a };
      if (
        ((s.data.message_id = i),
        window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.sensorsdataNativeTracker &&
          window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage)
      )
        window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(s));
      else {
        if (!f(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app)
          return Qe.log("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge"), !1;
        window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(s));
      }
    }),
    (Ht.prototype["double"] = function (e) {
      if (e.message_id) {
        var t = this.list[e.message_id];
        t && (t.timer && clearTimeout(t.timer), t.callback(e), delete this.list[e.message_id]);
      }
    });
  var Jt = {};
  (Jt.initUrl = function () {
    var e,
      t = { server_url: { project: "", host: "" }, page_url: { host: "", pathname: "" } };
    if (!v(Qe.para.server_url)) return Qe.log("----vcollect---server_url\u5fc5\u987b\u4e3a\u5b57\u7b26\u4e32"), !1;
    try {
      (e = X(Qe.para.server_url)), (t.server_url.project = e.searchParams.get("project") || "default"), (t.server_url.host = e.host);
    } catch (r) {
      return Qe.log("----vcollect---server_url\u89e3\u6790\u5f02\u5e38", r), !1;
    }
    var a;
    try {
      (a = X(location.href)), (t.page_url.host = a.hostname), (t.page_url.pathname = a.pathname);
    } catch (r) {
      return Qe.log("----vcollect---\u9875\u9762\u5730\u5740\u89e3\u6790\u5f02\u5e38", r), !1;
    }
    return t;
  }),
    (Jt.isDiv = function (e) {
      if (e.element_path) {
        var t = e.element_path.split(">"),
          r = _(t.pop());
        if ("div" !== r.slice(0, 3)) return !1;
      }
      return !0;
    }),
    (Jt.configIsMatch = function (e, t) {
      if (!t.element_path) return !1;
      if (t.limit_element_content && t.element_content !== e.$element_content) return !1;
      if (t.limit_element_position && t.element_position !== String(e.$element_position)) return !1;
      if (void 0 !== e.$element_position) {
        if (t.element_path !== e.$element_path) return !1;
      } else if (Jt.isDiv({ element_path: t.element_path })) {
        if (e.$element_path.indexOf(t.element_path) < 0) return !1;
      } else if (t.element_path !== e.$element_path) return !1;
      return !0;
    }),
    (Jt.filterConfig = function (t, r, a) {
      var i = [];
      if (!a) {
        var n = Jt.initUrl();
        if (!n) return [];
        a = n.page_url;
      }
      return (
        "$WebClick" === t.event &&
          e(r, function (e) {
            f(e) &&
              ("webclick" === e.event_type || "appclick" === e.event_type) &&
              f(e.event) &&
              e.event.url_host === a.host &&
              e.event.url_path === a.pathname &&
              Jt.configIsMatch(t.properties, e.event) &&
              i.push(e);
          }),
        i
      );
    }),
    (Jt.getPropElInLi = function (e, t) {
      if (!(e && b(e) && v(t))) return null;
      if ("li" !== e.tagName.toLowerCase()) return null;
      var r,
        a = Qe.heatmap.getDomSelector(e);
      if (a) {
        r = a + t;
        var i = K(r);
        return i ? i : null;
      }
      return (
        Qe.log("----custom---\u83b7\u53d6\u540c\u7ea7\u5c5e\u6027\u5143\u7d20\u5931\u8d25\uff0cselector\u4fe1\u606f\u5f02\u5e38", a, t),
        null
      );
    }),
    (Jt.getProp = function (e, t) {
      if (!f(e)) return !1;
      if (!(v(e.name) && e.name.length > 0))
        return Qe.log("----vcustom----\u5c5e\u6027\u540d\u4e0d\u5408\u6cd5,\u5c5e\u6027\u629b\u5f03", e.name), !1;
      var r,
        a,
        i = {};
      if ("content" === e.method) {
        var n;
        if (v(e.element_selector) && e.element_selector.length > 0) n = K(e.element_selector);
        else {
          if (!t || !v(e.list_selector))
            return Qe.log("----vcustom----\u5c5e\u6027\u914d\u7f6e\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03", e.name), !1;
          var s = K(t.properties.$element_selector);
          if (!s)
            return Qe.log("----vcustom----\u70b9\u51fb\u5143\u7d20\u83b7\u53d6\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03", e.name), !1;
          var o = Qe.heatmap.getClosestLi(s);
          n = Jt.getPropElInLi(o, e.list_selector);
        }
        if (!n || !b(n))
          return Qe.log("----vcustom----\u5c5e\u6027\u5143\u7d20\u83b7\u53d6\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03", e.name), !1;
        if ("input" === n.tagName.toLowerCase()) r = n.value || "";
        else if ("select" === n.tagName.toLowerCase()) {
          var l = n.selectedIndex;
          S(l) && b(n[l]) && (r = U(n[l], "select"));
        } else r = U(n, n.tagName.toLowerCase());
        if (e.regular) {
          try {
            a = new RegExp(e.regular).exec(r);
          } catch (c) {
            return Qe.log("----vcustom----\u6b63\u5219\u5904\u7406\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03", e.name), !1;
          }
          if (null === a)
            return (
              Qe.log(
                "----vcustom----\u5c5e\u6027\u89c4\u5219\u5904\u7406\uff0c\u672a\u5339\u914d\u5230\u7ed3\u679c,\u5c5e\u6027\u629b\u5f03",
                e.name
              ),
              !1
            );
          if (!st(a) || !v(a[0]))
            return Qe.log("----vcustom----\u6b63\u5219\u5904\u7406\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03", e.name, a), !1;
          r = a[0];
        }
        if ("STRING" === e.type) i[e.name] = r;
        else if ("NUMBER" === e.type) {
          if (r.length < 1)
            return Qe.log("----vcustom----\u672a\u83b7\u53d6\u5230\u6570\u5b57\u5185\u5bb9\uff0c\u5c5e\u6027\u629b\u5f03", e.name, r), !1;
          if (isNaN(Number(r)))
            return (
              Qe.log(
                "----vcustom----\u6570\u5b57\u7c7b\u578b\u5c5e\u6027\u8f6c\u6362\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03",
                e.name,
                r
              ),
              !1
            );
          i[e.name] = Number(r);
        }
        return i;
      }
      return Qe.log("----vcustom----\u5c5e\u6027\u4e0d\u652f\u6301\u6b64\u83b7\u53d6\u65b9\u5f0f", e.name, e.method), !1;
    }),
    (Jt.getAssignConfigs = function (t, r) {
      var a = Jt.initUrl();
      if (!a || !a.page_url) return [];
      if (!f(r)) return [];
      var i = [];
      return (
        (r.events = r.events || r.eventList),
        st(r.events) && r.events.length > 0
          ? (e(r.events, function (e) {
              f(e) && f(e.event) && e.event.url_host === a.page_url.host && e.event.url_path === a.page_url.pathname && t(e) && i.push(e);
            }),
            i)
          : []
      );
    }),
    (Jt.addCustomProps = function (e) {
      if ("success" === Qe.bridge.bridge_info.verify_success) {
        var t = Qe.vapph5collect.customProp.geth5Props(JSON.parse(JSON.stringify(e)));
        f(t) && !h(t) && (e.properties = r(e.properties, t));
      }
      var a = Qe.vtrackcollect.customProp.getVtrackProps(JSON.parse(JSON.stringify(e)));
      return f(a) && !h(a) && (e.properties = r(e.properties, a)), e;
    }),
    (Jt.init = function () {
      Qe.vtrackcollect.init(), "success" === Qe.bridge.bridge_info.verify_success && Qe.vapph5collect.init();
    });
  var Ut = {
      events: [],
      init: function (e) {
        this.filterWebClickEvents(e);
      },
      filterWebClickEvents: function (e) {
        this.events = Qe.vtrackcollect.getAssignConfigs(function (e) {
          return !(!f(e) || e.event.unlimited_div !== !0 || "webclick" !== e.event_type);
        }, e);
      },
      isTargetEle: function (e) {
        var t = Qe.heatmap.getEleDetail(e);
        if (!f(t) || !v(t.$element_path)) return !1;
        for (var r = 0; r < this.events.length; r++)
          if (f(this.events[r]) && f(this.events[r].event) && Qe.vtrackcollect.configIsMatch(t, this.events[r].event)) return !0;
        return !1;
      },
    },
    Bt = {
      events: [],
      configSwitch: !1,
      collectAble: function () {
        return this.configSwitch && f(Qe.para.heatmap) && Qe.para.heatmap.get_vtrack_config;
      },
      updateEvents: function (e) {
        (this.events = Qe.vtrackcollect.getAssignConfigs(function (e) {
          return !!(f(e) && st(e.properties) && e.properties.length > 0);
        }, e)),
          this.events.length ? (this.configSwitch = !0) : (this.configSwitch = !1);
      },
      getVtrackProps: function (e) {
        var t = {};
        return this.collectAble() ? ("$WebClick" === e.event && (t = this.clickCustomPropMaker(e, this.events)), t) : {};
      },
      clickCustomPropMaker: function (t, a, i) {
        var n = this;
        i = i || this.filterConfig(t, a, Qe.vtrackcollect.url_info.page_url);
        var s = {};
        return i.length
          ? (e(i, function (a) {
              st(a.properties) &&
                a.properties.length > 0 &&
                e(a.properties, function (e) {
                  var a = n.getProp(e, t);
                  f(a) && r(s, a);
                });
            }),
            s)
          : {};
      },
      getProp: Jt.getProp,
      getPropElInLi: Jt.getPropElInLi,
      filterConfig: Jt.filterConfig,
    },
    Rt = {
      unlimitedDiv: Ut,
      config: {},
      storageEnable: !0,
      storage_name: "webjssdkvtrackcollect",
      para: { session_time: 18e5, timeout: 5e3, update_interval: 18e5 },
      url_info: {},
      timer: null,
      update_time: null,
      customProp: Bt,
      initUrl: function () {
        var e = Jt.initUrl();
        if (e) {
          var t;
          try {
            (t = new V(Qe.para.server_url)), (t._values.Path = "/config/visualized/Web.conf"), (e.api_url = t.getUrl());
          } catch (r) {
            return Qe.log("----vtrackcollect---API\u5730\u5740\u89e3\u6790\u5f02\u5e38", r), !1;
          }
          this.url_info = e;
        }
        return e;
      },
      init: function () {
        if (!f(Qe.para.heatmap) || !Qe.para.heatmap.get_vtrack_config) return !1;
        if ((wt.isSupport() || (this.storageEnable = !1), !this.initUrl()))
          return Qe.log("----vtrackcustom----\u521d\u59cb\u5316\u5931\u8d25\uff0curl\u4fe1\u606f\u89e3\u6790\u5931\u8d25"), !1;
        if (this.storageEnable) {
          var e = wt.parse(this.storage_name);
          if (f(e) && f(e.data))
            if (this.serverUrlIsSame(e.serverUrl)) {
              (this.config = e.data), (this.update_time = e.updateTime), this.updateConfig(e.data);
              var t = new Date().getTime(),
                r = t - this.update_time;
              if (S(r) && r > 0 && r < this.para.session_time) {
                var a = this.para.update_interval - r;
                this.setNextFetch(a);
              } else this.getConfigFromServer();
            } else this.getConfigFromServer();
          else this.getConfigFromServer();
        } else this.getConfigFromServer();
        this.pageStateListenner();
      },
      serverUrlIsSame: function (e) {
        return !!f(e) && e.host === this.url_info.server_url.host && e.project === this.url_info.server_url.project;
      },
      getConfigFromServer: function () {
        var e = this,
          t = function (t, r) {
            e.update_time = new Date().getTime();
            var a = {};
            200 === t
              ? r && f(r) && "Web" === r.os && ((a = r), e.updateConfig(a))
              : 205 === t
              ? e.updateConfig(a)
              : 304 === t
              ? (a = e.config)
              : (Qe.log("----vtrackcustom----\u6570\u636e\u5f02\u5e38", t), e.updateConfig(a)),
              e.updateStorage(a),
              e.setNextFetch();
          },
          r = function (t) {
            (e.update_time = new Date().getTime()), Qe.log("----vtrackcustom----\u914d\u7f6e\u62c9\u53d6\u5931\u8d25", t), e.setNextFetch();
          };
        this.sendRequest(t, r);
      },
      setNextFetch: function (e) {
        var t = this;
        this.timer && (clearTimeout(this.timer), (this.timer = null)),
          (e = e || this.para.update_interval),
          (this.timer = setTimeout(function () {
            t.getConfigFromServer();
          }, e));
      },
      pageStateListenner: function () {
        var e = this;
        Te({
          visible: function () {
            var t = new Date().getTime(),
              r = t - e.update_time;
            if (S(r) && r > 0 && r < e.para.update_interval) {
              var a = e.para.update_interval - r;
              e.setNextFetch(a);
            } else e.getConfigFromServer();
          },
          hidden: function () {
            e.timer && (clearTimeout(e.timer), (e.timer = null));
          },
        });
      },
      updateConfig: function (e) {
        return !!f(e) && ((this.config = e), this.customProp.updateEvents(e), void this.unlimitedDiv.init(e));
      },
      updateStorage: function (e) {
        if (!this.storageEnable) return !1;
        if (!f(e)) return !1;
        var t;
        if (this.url_info.server_url) t = this.url_info.server_url;
        else {
          var r = Qe.vtrackcollect.initUrl();
          if (!r) return !1;
          t = r.server_url;
        }
        var a = { updateTime: new Date().getTime(), data: e, serverUrl: t };
        wt.set(this.storage_name, JSON.stringify(a));
      },
      sendRequest: function (e, t) {
        var r = this,
          a = { app_id: this.url_info.page_url.host };
        this.config.version && (a.v = this.config.version),
          He({
            url: r.url_info.api_url,
            callbackName: "saJSSDKVtrackCollectConfig",
            data: a,
            timeout: r.para.timeout,
            success: function (t, r) {
              e(t, r);
            },
            error: function (e) {
              t(e);
            },
          });
      },
      getAssignConfigs: Jt.getAssignConfigs,
      configIsMatch: Jt.configIsMatch,
    },
    Mt = {
      events: [],
      getAssignConfigs: Jt.getAssignConfigs,
      filterConfig: Jt.filterConfig,
      getProp: Jt.getProp,
      initUrl: Jt.initUrl,
      updateEvents: function (e) {
        st(e) && (this.events = e);
      },
      init: function () {
        this.initAppGetPropsBridge();
      },
      geth5Props: function (t) {
        var a = {},
          i = [],
          n = this;
        if (!this.events.length) return {};
        if ("$WebClick" === t.event) {
          var s = this.filterConfig(t, this.events);
          if (!s.length) return {};
          e(s, function (s) {
            f(s) &&
              (st(s.properties) &&
                s.properties.length > 0 &&
                e(s.properties, function (e) {
                  if (f(e))
                    if (e.h5 === !1)
                      st(a.sensorsdata_app_visual_properties) || (a.sensorsdata_app_visual_properties = []),
                        a.sensorsdata_app_visual_properties.push(e);
                    else {
                      var i = n.getProp(e, t);
                      f(i) && (a = r(a, i));
                    }
                }),
              v(s.event_name) && i.push(s.event_name));
          }),
            f(window.SensorsData_App_Visual_Bridge) &&
              window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode &&
              (window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode === !0 ||
                window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode()) &&
              (a.sensorsdata_web_visual_eventName = i);
        }
        return (
          a.sensorsdata_app_visual_properties &&
            (a.sensorsdata_app_visual_properties = $(JSON.stringify(a.sensorsdata_app_visual_properties))),
          a
        );
      },
      initAppGetPropsBridge: function () {
        var t = this;
        return new Qe.JSBridge({
          type: "getJSVisualProperties",
          app_call_js: function (a) {
            var i = {};
            try {
              a = JSON.parse(O(a));
            } catch (s) {
              Qe.log("getJSVisualProperties data parse error!");
            }
            if (f(a)) {
              var o = a.sensorsdata_js_visual_properties,
                l = t.initUrl();
              l &&
                ((l = l.page_url),
                st(o) &&
                  o.length > 0 &&
                  e(o, function (e) {
                    if (f(e) && e.url_host === l.host && e.url_path === l.pathname && e.h5) {
                      var a = t.getProp(e);
                      f(a) && (i = r(i, a));
                    }
                  }));
            }
            var c = Qe.bridge.bridge_info.platform;
            if ("android" === c) {
              var u = { callType: "getJSVisualProperties", data: i };
              f(a) && a.message_id && (u.message_id = a.message_id),
                f(window.SensorsData_APP_New_H5_Bridge) && n(SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app)
                  ? SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(u))
                  : f(window.SensorsData_APP_JS_Bridge) &&
                    n(SensorsData_APP_JS_Bridge.sensorsdata_js_call_app) &&
                    SensorsData_APP_JS_Bridge.sensorsdata_js_call_app(JSON.stringify(u));
            }
            return i;
          },
        });
      },
    },
    Kt = {
      events: [],
      customProp: Mt,
      getAssignConfigs: Jt.getAssignConfigs,
      initUrl: Jt.initUrl,
      init: function () {
        if (this.initUrl()) {
          var e = this.getConfigFromApp();
          e && this.updateConfigs(e), this.customProp.init(), this.initAppUpdateConfigBridge();
        }
      },
      initAppUpdateConfigBridge: function () {
        var e = this;
        return new Qe.JSBridge({
          type: "updateH5VisualConfig",
          app_call_js: function (t) {
            if (t) {
              try {
                t = JSON.parse(O(t));
              } catch (r) {
                return void Qe.log("updateH5VisualConfig result parse error\uff01");
              }
              e.updateConfigs(t);
            }
          },
        });
      },
      getConfigFromApp: function () {
        var e = new Qe.JSBridge({ type: "sensorsdata_get_app_visual_config" }),
          t = e.getAppData();
        if (t)
          try {
            t = JSON.parse(O(t));
          } catch (r) {
            (t = null), Qe.log("getAppVisualConfig result parse error\uff01");
          }
        return t;
      },
      updateConfigs: function (e) {
        (this.events = this.filterConfigs(e)), this.customProp.updateEvents(this.events);
      },
      filterConfigs: function (e) {
        return this.getAssignConfigs(function (e) {
          return !(!f(e) || e.h5 === !1);
        }, e);
      },
    },
    Wt = [
      "setItem",
      "deleteItem",
      "getAppStatus",
      "track",
      "quick",
      "register",
      "registerPage",
      "registerOnce",
      "trackSignup",
      "setProfile",
      "setOnceProfile",
      "appendProfile",
      "incrementProfile",
      "deleteProfile",
      "unsetProfile",
      "identify",
      "login",
      "logout",
      "trackLink",
      "clearAllRegister",
      "clearPageRegister",
    ],
    qt = {
      searchKeywordMatch: location.search.match(/sa-request-id=([^&#]+)/),
      isSeachHasKeyword: function () {
        var e = this.searchKeywordMatch;
        return (
          !!(e && e[0] && e[1]) &&
          ("string" == typeof sessionStorage.getItem("sensors-visual-mode") && sessionStorage.removeItem("sensors-visual-mode"), !0)
        );
      },
      hasKeywordHandle: function () {
        var e = this.searchKeywordMatch,
          t = location.search.match(/sa-request-type=([^&#]+)/),
          r = location.search.match(/sa-request-url=([^&#]+)/);
        jt.setNotice(r),
          St.isSupport() &&
            (r && r[0] && r[1] && sessionStorage.setItem("sensors_heatmap_url", decodeURIComponent(r[1])),
            sessionStorage.setItem("sensors_heatmap_id", e[1]),
            t && t[0] && t[1]
              ? "1" === t[1] || "2" === t[1] || "3" === t[1]
                ? ((t = t[1]), sessionStorage.setItem("sensors_heatmap_type", t))
                : (t = null)
              : (t = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null)),
          this.isReady(e[1], t);
      },
      isReady: function (e, t, r) {
        Qe.para.heatmap_url
          ? B({
              success: function () {
                setTimeout(function () {
                  "undefined" != typeof sa_jssdk_heatmap_render &&
                    (sa_jssdk_heatmap_render(Qe, e, t, r),
                    "object" == typeof console &&
                      "function" == typeof console.log &&
                      ((Qe.heatmap_version && Qe.heatmap_version === Qe.lib_version) ||
                        console.log(
                          "heatmap.js\u4e0esensorsdata.js\u7248\u672c\u53f7\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u5b58\u5728\u98ce\u9669!"
                        )));
                }, 0);
              },
              error: function () {},
              type: "js",
              url: Qe.para.heatmap_url,
            })
          : Qe.log("\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84");
      },
      isStorageHasKeyword: function () {
        return St.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id");
      },
      storageHasKeywordHandle: function () {
        jt.setNotice(),
          qt.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href);
      },
    },
    Ft = {
      isStorageHasKeyword: function () {
        return St.isSupport() && "string" == typeof sessionStorage.getItem("sensors-visual-mode");
      },
      isSearchHasKeyword: function () {
        return (
          !!location.search.match(/sa-visual-mode=true/) &&
          ("string" == typeof sessionStorage.getItem("sensors_heatmap_id") && sessionStorage.removeItem("sensors_heatmap_id"), !0)
        );
      },
      loadVtrack: function () {
        B({
          success: function () {},
          error: function () {},
          type: "js",
          url: Qe.para.vtrack_url
            ? Qe.para.vtrack_url
            : location.protocol + "//static.sensorsdata.cn/sdk/" + Qe.lib_version + "/vtrack.min.js",
        });
      },
      messageListener: function (e) {
        function t(e) {
          return pt.isHttpUrl(e) ? pt.removeScriptProtocol(e) : (Qe.log("\u53ef\u89c6\u5316\u6a21\u5f0f\u68c0\u6d4b URL \u5931\u8d25"), !1);
        }
        if ("sa-fe" !== e.data.source) return !1;
        if ("v-track-mode" === e.data.type) {
          if (e.data.data && e.data.data.isVtrack)
            if (
              (St.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"),
              e.data.data.userURL && location.search.match(/sa-visual-mode=true/))
            ) {
              var r = t(e.data.data.userURL);
              r && (window.location.href = r);
            } else Ft.loadVtrack();
          window.removeEventListener("message", Ft.messageListener, !1);
        }
      },
      removeMessageHandle: function () {
        window.removeEventListener && window.removeEventListener("message", Ft.messageListener, !1);
      },
      verifyVtrackMode: function () {
        window.addEventListener && window.addEventListener("message", Ft.messageListener, !1), Ft.postMessage();
      },
      postMessage: function () {
        window.parent &&
          window.parent.postMessage &&
          window.parent.postMessage({ source: "sa-web-sdk", type: "v-is-vtrack", data: { sdkversion: "1.19.8" } }, "*");
      },
      notifyUser: function () {
        var e = function (t) {
          return (
            "sa-fe" === t.data.source &&
            void (
              "v-track-mode" === t.data.type &&
              (t.data.data &&
                t.data.data.isVtrack &&
                alert("\u5f53\u524d\u7248\u672c\u4e0d\u652f\u6301\uff0c\u8bf7\u5347\u7ea7\u90e8\u7f72\u795e\u7b56\u6570\u636e\u6cbb\u7406"),
              window.removeEventListener("message", e, !1))
            )
          );
        };
        window.addEventListener && window.addEventListener("message", e, !1), Ft.postMessage();
      },
    };
  (Qe.modules = {}),
    (Qe._ = kt),
    (Qe.kit = $t),
    (Qe.saEvent = Nt),
    (Qe.sendState = xt),
    (Qe.events = new bt()),
    (Qe.batchSend = Lt),
    (Qe.bridge = Et),
    (Qe.JSBridge = Ht),
    (Qe.store = Dt),
    (Qe.vtrackBase = Jt),
    (Qe.unlimitedDiv = Ut),
    (Qe.customProp = Bt),
    (Qe.vtrackcollect = Rt),
    (Qe.vapph5collect = Kt),
    (Qe.heatmap = jt),
    (Qe.detectMode = Ze),
    (Qe.init = function (e) {
      return (
        !(Qe.readyState && Qe.readyState.state && Qe.readyState.state >= 2) &&
        (Qe.setInitVar(),
        Qe.readyState.setState(2),
        Qe.initPara(e),
        Qe.bridge.supportAppCallJs(),
        Qe.detectMode(),
        void Qe.iOSWebClickPolyfill())
      );
    }),
    qe(),
    (function (e) {
      "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : e();
    })(function () {
      try {
        if (
          ((Qe.modules.Amp = (function () {
            "use strict";
            var e = {
              sd: null,
              init: function (e) {
                if (this.sd) return !1;
                if (((this.sd = e), !this.sd || !this.sd._)) return !1;
                var t = this.sd._.cookie.get("sensors_amp_id"),
                  r = this.sd.store._state.distinct_id;
                if (t && t.length > 0) {
                  var a = "amp-" === t.slice(0, 4);
                  if (t !== r) {
                    if (!a) return !1;
                    this.sd.store._state.first_id
                      ? (this.sd.identify(t, !0),
                        this.sd.saEvent.send(
                          { original_id: t, distinct_id: r, type: "track_signup", event: "$SignUp", properties: {} },
                          null
                        ),
                        this.setAmpId(r))
                      : this.sd.identify(t, !0);
                  }
                } else this.setAmpId(r);
                this.addListener();
              },
              addListener: function () {
                var e = this;
                this.sd.events.on("changeDistinctId", function (t) {
                  e.setAmpId(t);
                }),
                  this.sd.events.isReady();
              },
              setAmpId: function (e) {
                this.sd._.cookie.set("sensors_amp_id", e);
              },
            };
            return (
              window.SensorsDataWebJSSDKPlugin && "[object Object]" === Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin)
                ? (window.SensorsDataWebJSSDKPlugin.Amp = window.SensorsDataWebJSSDKPlugin.Amp || e)
                : (window.SensorsDataWebJSSDKPlugin = { Amp: e }),
              e
            );
          })()),
          (Qe.modules.Channel = (function () {
            "use strict";
            var e,
              t,
              r = {
                event_list: [],
                latest_event_initial_time: null,
                max_save_time: 2592e6,
                init: function (r) {
                  return (
                    !t &&
                    !!(t = r) &&
                    ((e = t._),
                    !!e.localStorage.isSupport() &&
                      ((t.para.max_string_length = 1024),
                      this.eventList.init(),
                      this.addLatestChannelUrl(),
                      void this.addIsChannelCallbackEvent()))
                  );
                },
                addIsChannelCallbackEvent: function () {
                  t.registerPage({
                    $is_channel_callback_event: function (e) {
                      if (e.event && "$WebClick" !== e.event && "$pageview" !== e.event && "$WebStay" !== e.event && "$SignUp" !== e.event)
                        return !r.eventList.hasEvent(e.event) && (r.eventList.add(e.event), !0);
                    },
                  });
                },
                addLatestChannelUrl: function () {
                  var a = this.getUrlDomain(),
                    i = this.cookie.getChannel();
                  if ("url\u89e3\u6790\u5931\u8d25" === a)
                    this.registerAndSave({
                      _sa_channel_landing_url: "",
                      _sa_channel_landing_url_error: "url\u7684domain\u89e3\u6790\u5931\u8d25",
                    });
                  else if (e.isReferralTraffic(document.referrer)) {
                    var n = e.getQueryParam(location.href, "sat_cf");
                    e.isString(n) && n.length > 0
                      ? (this.registerAndSave({ _sa_channel_landing_url: location.href }), r.channelLinkHandler())
                      : this.registerAndSave({ _sa_channel_landing_url: "" });
                  } else
                    i
                      ? t.registerPage(i)
                      : t.registerPage({ _sa_channel_landing_url: "", _sa_channel_landing_url_error: "\u53d6\u503c\u5f02\u5e38" });
                },
                registerAndSave: function (e) {
                  t.registerPage(e), this.cookie.saveChannel(e);
                },
                cookie: {
                  getChannel: function () {
                    var r;
                    try {
                      r = JSON.parse(e.cookie.get("sensorsdata2015jssdkchannel"));
                    } catch (a) {
                      t.log(a);
                    }
                    return !(!e.isObject(r) || !r.prop) && r.prop;
                  },
                  saveChannel: function (t) {
                    var r = { prop: t };
                    e.cookie.set("sensorsdata2015jssdkchannel", JSON.stringify(r));
                  },
                },
                channelLinkHandler: function () {
                  this.eventList.reset(), t.track("$ChannelLinkReaching");
                },
                getUrlDomain: function () {
                  var t = e.info.pageProp.url_domain;
                  return "" === t && (t = "url\u89e3\u6790\u5931\u8d25"), t;
                },
                eventList: {
                  init: function () {
                    var t = this.get(),
                      a = new Date().getTime();
                    if (t && e.isNumber(t.latest_event_initial_time) && e.isArray(t.eventList)) {
                      var i = a - t.latest_event_initial_time;
                      i > 0 && i < r.max_save_time
                        ? ((r.event_list = t.eventList), (r.latest_event_initial_time = t.latest_event_initial_time))
                        : this.reset();
                    } else this.reset();
                  },
                  get: function () {
                    var r = {};
                    try {
                      r = JSON.parse(e.localStorage.get("sawebjssdkchannel"));
                    } catch (a) {
                      t.log(a);
                    }
                    return r;
                  },
                  add: function (e) {
                    r.event_list.push(e), this.save();
                  },
                  save: function () {
                    var t = { latest_event_initial_time: r.latest_event_initial_time, eventList: r.event_list };
                    e.localStorage.set("sawebjssdkchannel", JSON.stringify(t));
                  },
                  reset: function () {
                    (r.event_list = []), (r.latest_event_initial_time = new Date().getTime()), this.save();
                  },
                  hasEvent: function (t) {
                    var a = !1;
                    return (
                      e.each(r.event_list, function (e) {
                        e === t && (a = !0);
                      }),
                      a
                    );
                  },
                },
              };
            return (
              window.SensorsDataWebJSSDKPlugin && "[object Object]" === Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin)
                ? (window.SensorsDataWebJSSDKPlugin.SensorsChannel = window.SensorsDataWebJSSDKPlugin.SensorsChannel || r)
                : (window.SensorsDataWebJSSDKPlugin = { SensorsChannel: r }),
              r
            );
          })()),
          (Qe.modules.Deeplink = (function () {
            "use strict";
            function e() {
              return "undefined" != typeof t && document[t];
            }
            var t,
              r =
                (/micromessenger\/([\d.]+)/i.test(navigator.userAgent || ""),
                function () {
                  var e = {};
                  return (
                    "undefined" != typeof document.hidden
                      ? ((e.hidden = "hidden"), (e.visibilityChange = "visibilitychange"))
                      : "undefined" != typeof document.msHidden
                      ? ((e.hidden = "msHidden"), (e.visibilityChange = "msvisibilitychange"))
                      : "undefined" != typeof document.webkitHidden &&
                        ((e.hidden = "webkitHidden"), (e.visibilityChange = "webkitvisibilitychange")),
                    e
                  );
                });
            t = r().hidden;
            var a = { android: /Android/i, iOS: /iPhone|iPad|iPod/i },
              i = function () {
                for (var e in a) if (navigator.userAgent.match(a[e])) return e;
                return "";
              },
              n = i(),
              s = function () {
                return a.hasOwnProperty(n);
              },
              o = function (e) {
                return null != e && "[object Object]" == Object.prototype.toString.call(e);
              },
              l = function (e) {
                var t = /\/sd\/(\w+)\/(\w+)$/;
                return e.match(t);
              },
              c = function (e) {
                var t = e._.URL(e.para.server_url);
                return { origin: t.origin, project: t.searchParams.get("project") || "default" };
              },
              u = function (r, a, i) {
                r.log("\u5c1d\u8bd5\u5524\u8d77 android app");
                var n = a;
                r.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a" + n),
                  (window.location = n),
                  (r.timer = setTimeout(function () {
                    var a = e();
                    return (
                      r.log("hide:" + t + ":" + document[t]),
                      a
                        ? (r.log("The page is hidden, stop navigating to download page"), !1)
                        : (r.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"),
                          void (window.location = i))
                    );
                  }, r.timeout));
              },
              p = function (t, r, a) {
                t.log("\u5c1d\u8bd5\u5524\u8d77 iOS app:" + r),
                  (window.location.href = r),
                  (t.timer = setTimeout(function () {
                    var r = e();
                    return r
                      ? (t.log("The page is hidden, stop navigating to download page"), !1)
                      : (t.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"),
                        void (window.location.href = a));
                  }, t.timeout)),
                  t.log("new timer:" + t.timer);
              },
              d = {
                key: null,
                timer: null,
                sd: null,
                data: null,
                timeout: 2500,
                apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
                init: function () {
                  if (this.sd) return this.log("deeplink\u5df2\u7ecf\u521d\u59cb\u5316"), !1;
                  if ((o(sensorsDataAnalytic201505) && (this.sd = sensorsDataAnalytic201505), this.log("init()"), null === this.sd))
                    return this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165"), !1;
                  var e = {};
                  if (
                    (arguments.length > 0 &&
                      (1 === arguments.length && o(arguments[0])
                        ? (e = arguments[0])
                        : arguments.length >= 2 && o(arguments[1]) && (e = arguments[1])),
                    !s())
                  )
                    return this.log("\u4e0d\u652f\u6301\u5f53\u524d\u7cfb\u7edf\uff0c\u76ee\u524d\u53ea\u652f\u6301Android\u548ciOS"), !1;
                  if ((o(e) && this.sd._.isNumber(e.timeout) && e.timeout >= 2500 && (this.timeout = e.timeout), !this.sd.para.server_url))
                    return this.log("\u795e\u7b56JS SDK\u914d\u7f6e\u9879server_url\u672a\u6b63\u786e\u914d\u7f6e"), !1;
                  var t = c(this.sd);
                  this.apiURL = this.apiURL.replace("{origin}", t.origin).replace("{project}", t.project);
                  var r = this.sd._.URL(window.location.href).searchParams.get("deeplink");
                  if (!r) return this.log("\u5f53\u524d\u9875\u9762\u7f3a\u5c11deeplink\u53c2\u6570"), !1;
                  r = window.decodeURIComponent(r);
                  var a = l(r);
                  return a
                    ? ((this.key = a[2]),
                      (this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(a[2]))),
                      this.sd._.ajax({
                        url: this.apiURL,
                        type: "GET",
                        cors: !0,
                        credentials: !1,
                        success: function (e) {
                          return e.errorMsg
                            ? (d.log("API\u62a5\u9519\uff1a" + e.errorMsg), !1)
                            : ((d.data = e),
                              d.log("API\u67e5\u8be2\u6210\u529f\uff0c\u6570\u636e\uff1a" + JSON.stringify(e, null, "  ")),
                              void (
                                this.data.app_key &&
                                (this.data.android_info &&
                                  this.data.android_info.url_schemes &&
                                  (this.data.android_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key),
                                this.data.ios_info &&
                                  this.data.ios_info.url_schemes &&
                                  (this.data.ios_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key))
                              ));
                        }.bind(this),
                        error: function () {
                          d.log("API\u67e5\u8be2\u51fa\u9519");
                        },
                      }),
                      void this.addListeners())
                    : (this.log("\u5f53\u524d\u9875\u9762\u7684deeplink\u53c2\u6570\u65e0\u6548"), !1);
                },
                openDeepLink: function () {
                  if ((this.log("openDeeplink()"), !this.data)) return this.log("\u6ca1\u6709Deep link\u6570\u636e!"), !1;
                  if ("iOS" === n) {
                    this.log("\u5f53\u524d\u7cfb\u7edf\u662fiOS");
                    var e =
                      this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url
                        ? this.data.ios_info.ios_wake_url
                        : this.data.ios_info.url_schemes;
                    this.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a" + e), p(this, e, this.data.ios_info.download_url);
                  } else
                    this.log("\u5f53\u524d\u7cfb\u7edf\u662f android"),
                      u(this, this.data.android_info.url_schemes, this.data.android_info.download_url);
                },
                log: function (e) {
                  this.sd && this.sd.log(e);
                },
                addListeners: function () {
                  var e = r().visibilityChange;
                  e &&
                    document.addEventListener(
                      e,
                      function () {
                        clearTimeout(this.timer), this.log("visibilitychange, clear timeout:" + this.timer);
                      }.bind(this),
                      !1
                    ),
                    window.addEventListener(
                      "pagehide",
                      function () {
                        this.log("page hide, clear timeout:" + this.timer), clearTimeout(this.timer);
                      }.bind(this),
                      !1
                    );
                },
              };
            return (
              o(window.SensorsDataWebJSSDKPlugin)
                ? ((window.SensorsDataWebJSSDKPlugin.Deeplink = window.SensorsDataWebJSSDKPlugin.Deeplink || d),
                  (window.SensorsDataWebJSSDKPlugin.deeplink = window.SensorsDataWebJSSDKPlugin.deeplink || d))
                : (window.SensorsDataWebJSSDKPlugin = { Deeplink: d, deeplink: d }),
              d
            );
          })()),
          (Qe.modules.Pageleave = (function () {
            "use strict";
            function e() {
              (this.sd = null),
                (this.start_time = +new Date()),
                (this.page_show_status = !0),
                (this.page_hidden_status = !1),
                (this._ = {}),
                (this.timer = null),
                (this.current_page_url = document.referrer),
                (this.url = location.href),
                (this.option = {}),
                (this.heartbeat_interval_time = 5e3),
                (this.heartbeat_interval_timer = null),
                (this.page_id = null),
                (this.storage_name = "sawebjssdkpageleave");
            }
            var t = 500;
            (e.prototype.init = function (e, t) {
              if (e) {
                (this.sd = e), (this._ = this.sd._);
                var r = this;
                if (t) {
                  this.option = t;
                  var a = t.heartbeat_interval_time;
                  a && (this._.isNumber(a) || this._.isNumber(1 * a)) && 1 * a > 0 && (this.heartbeat_interval_time = 1e3 * a);
                }
                (this.page_id = Number(
                  String(kt.getRandom()).slice(2, 5) + String(kt.getRandom()).slice(2, 4) + String(new Date().getTime()).slice(-4)
                )),
                  r.addEventListener(),
                  r.addHeartBeatInterval(),
                  this.log("PageLeave\u521d\u59cb\u5316\u5b8c\u6bd5");
              } else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165");
            }),
              (e.prototype.log = function (e) {
                this.sd && this.sd.log(e);
              }),
              (e.prototype.getSingleStatus = function () {
                var e = this.sd.para.is_track_single_page;
                if (e && this._.isBoolean(e)) return !0;
                if (this._.isFunction(e)) {
                  var t = e();
                  if (this._.isObject(t) || t === !0) return !0;
                }
                return !1;
              }),
              (e.prototype.refreshPageEndTimer = function () {
                var e = this;
                this.timer && (clearTimeout(this.timer), (this.timer = null)),
                  (this.timer = setTimeout(function () {
                    e.page_hidden_status = !1;
                  }, t));
              }),
              (e.prototype.pageStartHandler = function () {
                (this.start_time = +new Date()), (this.page_show_status = !0);
              }),
              (e.prototype.pageEndHandlear = function () {
                if (this.page_hidden_status !== !0) {
                  var e = this.getPageLeaveProperties();
                  this.page_show_status === !1 && delete e.event_duration,
                    (this.page_show_status = !1),
                    (this.page_hidden_status = !0),
                    this.sd.track("$WebPageLeave", e),
                    this.refreshPageEndTimer(),
                    this.delHeartBeatData();
                }
              }),
              (e.prototype.addEventListener = function () {
                this.addPageStartListener(), this.addPageSwitchListener(), this.addPageEndListener();
              }),
              (e.prototype.addPageStartListener = function () {
                var e = this;
                "onpageshow" in window &&
                  this._.addEvent(window, "pageshow", function () {
                    e.pageStartHandler();
                  });
              }),
              (e.prototype.addSinglePageListener = function () {
                var e = this;
                this._.addSinglePageEvent(function (t) {
                  e.getSingleStatus() &&
                    t !== location.href &&
                    ((e.url = t), e.pageEndHandlear(), e.pageStartHandler(), (e.current_page_url = e.url));
                });
              }),
              (e.prototype.addPageEndListener = function () {
                var e = this;
                this._.each(["pagehide", "beforeunload", "unload"], function (t) {
                  "on" + t in window &&
                    e._.addEvent(window, t, function () {
                      e.pageEndHandlear();
                    });
                });
              }),
              (e.prototype.addPageSwitchListener = function () {
                var e = this;
                this._.listenPageState({
                  visible: function () {
                    e.pageStartHandler(), e.startHeartBeatInterval();
                  },
                  hidden: function () {
                    (e.url = location.href), e.pageEndHandlear(), e.stopHeartBeatInterval();
                  },
                });
              }),
              (e.prototype.addHeartBeatInterval = function () {
                this._.localStorage.isSupport() && this.startHeartBeatInterval();
              }),
              (e.prototype.startHeartBeatInterval = function () {
                var e = this;
                this.heartbeat_interval_timer && this.stopHeartBeatInterval(),
                  (this.heartbeat_interval_timer = setInterval(function () {
                    e.saveHeartBeatData(), e.reissueHeartBeatData();
                  }, this.heartbeat_interval_time)),
                  this.saveHeartBeatData("is_first_heartbeat"),
                  this.reissueHeartBeatData();
              }),
              (e.prototype.stopHeartBeatInterval = function () {
                clearInterval(this.heartbeat_interval_timer), (this.heartbeat_interval_timer = null);
              }),
              (e.prototype.saveHeartBeatData = function (e) {
                var t = this.getPageLeaveProperties();
                (t.$time = new Date()), "is_first_heartbeat" === e && (t.event_duration = 3.14);
                var r = this.sd.kit.buildData({ type: "track", event: "$WebPageLeave", properties: t });
                (r.heartbeat_interval_time = this.heartbeat_interval_time),
                  this._.localStorage.set(this.storage_name + "-" + this.page_id, JSON.stringify(r));
              }),
              (e.prototype.delHeartBeatData = function (e) {
                this._.localStorage.remove(e || this.storage_name + "-" + this.page_id);
              }),
              (e.prototype.reissueHeartBeatData = function () {
                for (var e = window.localStorage.length, t = 0; t < e; t++) {
                  var r = window.localStorage.key(t);
                  if (r && r !== this.storage_name + "-" + this.page_id && 0 === r.indexOf(this.storage_name + "-")) {
                    var a = this._.localStorage.parse(r);
                    this._.isObject(a) &&
                      1 * new Date() - a.time > a.heartbeat_interval_time + 5e3 &&
                      (delete a.heartbeat_interval_time, this.sd.kit.sendData(a), this.delHeartBeatData(r));
                  }
                }
              }),
              (e.prototype.getPageLeaveProperties = function () {
                var e = (+new Date() - this.start_time) / 1e3;
                (isNaN(e) || e < 0) && (e = 0), (e = Number(e.toFixed(3)));
                var t = this._.getReferrer(this.current_page_url),
                  r = {
                    $title: document.title,
                    $url: this._.getURL(),
                    $url_path: location.pathname,
                    $referrer_host: t ? this._.getHostname(t) : "",
                    $referrer: t,
                  };
                return 0 !== e && (r.event_duration = e), (r = this._.extend(r, this.option.custom_props));
              });
            var r = new e();
            return (
              window.SensorsDataWebJSSDKPlugin && "[object Object]" === Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin)
                ? (window.SensorsDataWebJSSDKPlugin.PageLeave = window.SensorsDataWebJSSDKPlugin.PageLeave || r)
                : (window.SensorsDataWebJSSDKPlugin = { PageLeave: r }),
              r
            );
          })()),
          (Qe.modules.SiteLinker = (function () {
            "use strict";
            var e = {};
            return (
              (e.getPart = function (e) {
                var t = !1,
                  r = this.option.length;
                if (r) for (var a = 0; a < r; a++) if (e.indexOf(this.option[a].part_url) > -1) return !0;
                return t;
              }),
              (e.getPartHash = function (e) {
                var t = this.option.length,
                  r = !1;
                if (t) for (var a = 0; a < t; a++) if (e.indexOf(this.option[a].part_url) > -1) return this.option[a].after_hash;
                return !!r;
              }),
              (e.getCurrenId = function () {
                var e = this.store.getDistinctId() || "",
                  t = this.store.getFirstId() || "";
                this._.urlSafeBase64 && this._.urlSafeBase64.encode
                  ? (e = e ? this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(kt.base64Encode(e))) : "")
                  : this._.rot13obfs && (e = e ? this._.rot13obfs(e) : "");
                var r = t ? "f" + e : "d" + e;
                return encodeURIComponent(r);
              }),
              (e.rewireteUrl = function (e, t) {
                var r = /([^?#]+)(\?[^#]*)?(#.*)?/,
                  a = r.exec(e),
                  i = "";
                if (a) {
                  var n,
                    s = a[1] || "",
                    o = a[2] || "",
                    l = a[3] || "";
                  if (this.getPartHash(e)) {
                    n = l.indexOf("_sasdk");
                    var c = l.indexOf("?");
                    i =
                      c > -1
                        ? n > -1
                          ? s + o + "#" + l.substring(1, n) + "_sasdk=" + this.getCurrenId()
                          : s + o + "#" + l.substring(1) + "&_sasdk=" + this.getCurrenId()
                        : s + o + "#" + l.substring(1) + "?_sasdk=" + this.getCurrenId();
                  } else {
                    n = o.indexOf("_sasdk");
                    var u = /^\?(\w)+/.test(o);
                    i = u
                      ? n > -1
                        ? s + "?" + o.substring(1, n) + "_sasdk=" + this.getCurrenId() + l
                        : s + "?" + o.substring(1) + "&_sasdk=" + this.getCurrenId() + l
                      : s + "?" + o.substring(1) + "_sasdk=" + this.getCurrenId() + l;
                  }
                  return t && (t.href = i), i;
                }
              }),
              (e.getUrlId = function () {
                var e = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
                if (this._.isArray(e) && e[1]) {
                  var t = decodeURIComponent(e[1]);
                  return (
                    !t ||
                      ("f" !== t.substring(0, 1) && "d" !== t.substring(0, 1)) ||
                      (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(t)
                        ? (t = t.substring(0, 1) + kt.base64Decode(this._.urlSafeBase64.decode(t.substring(1))))
                        : this._.rot13defs && (t = t.substring(0, 1) + this._.rot13defs(t.substring(1)))),
                    t
                  );
                }
                return "";
              }),
              (e.setRefferId = function () {
                var e = this.store.getDistinctId(),
                  t = this.getUrlId();
                if ("" === t) return !1;
                var r = "a" === t.substring(0, 1) || "d" === t.substring(0, 1);
                return (
                  (t = t.substring(1)),
                  t !== e &&
                    (t &&
                      r &&
                      this.store.getFirstId() &&
                      (this.sd.identify(t, !0),
                      this.sd.saEvent.send(
                        { original_id: t, distinct_id: e, type: "track_signup", event: "$SignUp", properties: {} },
                        null
                      )),
                    t && r && !this.store.getFirstId() && this.sd.identify(t, !0),
                    void (!t || r || this.store.getFirstId() || this.sd.login(t)))
                );
              }),
              (e.addListen = function () {
                var e = this,
                  t = function (t) {
                    var r,
                      a,
                      i = t.target,
                      n = i.tagName.toLowerCase(),
                      s = i.parentNode;
                    if (("a" === n && i.href) || (s && s.tagName && "a" === s.tagName.toLowerCase() && s.href)) {
                      "a" === n && i.href ? ((r = i.href), (a = i)) : ((r = s.href), (a = s));
                      var o = e._.URL(r),
                        l = o.protocol;
                      ("http:" !== l && "https:" !== l) || (e.getPart(r) && e.rewireteUrl(r, a));
                    }
                  };
                e._.addEvent(document, "mousedown", t),
                  window.PointerEvent &&
                    "maxTouchPoints" in window.navigator &&
                    window.navigator.maxTouchPoints >= 0 &&
                    e._.addEvent(document, "pointerdown", t);
              }),
              (e.init = function (e, t) {
                function r(t) {
                  for (var r = t.length, a = [], i = 0; i < r; i++)
                    /[A-Za-z0-9]+\./.test(t[i].part_url) && "[object Boolean]" == Object.prototype.toString.call(t[i].after_hash)
                      ? a.push(t[i])
                      : e.log(
                          "linker \u914d\u7f6e\u7684\u7b2c " +
                            (i + 1) +
                            " \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01"
                        );
                  return a;
                }
                return (
                  (this.sd = e),
                  (this._ = e._),
                  (this.store = e.store),
                  (this.para = e.para),
                  this._.isObject(t) && this._.isArray(t.linker) && t.linker.length > 0
                    ? (this.setRefferId(), this.addListen(), (this.option = t.linker), void (this.option = r(this.option)))
                    : void e.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")
                );
              }),
              kt.isObject(window.SensorsDataWebJSSDKPlugin)
                ? (window.SensorsDataWebJSSDKPlugin.SiteLinker = window.SensorsDataWebJSSDKPlugin.SiteLinker || e)
                : (window.SensorsDataWebJSSDKPlugin = { SiteLinker: e }),
              e
            );
          })()),
          "string" != typeof window.sensorsDataAnalytic201505)
        )
          return "undefined" == typeof window.sensorsDataAnalytic201505
            ? ((window.sensorsDataAnalytic201505 = Qe), Qe)
            : window.sensorsDataAnalytic201505;
        Qe.setPreConfig(window[sensorsDataAnalytic201505]),
          (window[sensorsDataAnalytic201505] = Qe),
          (window.sensorsDataAnalytic201505 = Qe),
          Qe.init();
      } catch (e) {
        if ("object" == typeof console && console.log)
          try {
            console.log(e);
          } catch (t) {
            Qe.log(t);
          }
      }
    });
})();
