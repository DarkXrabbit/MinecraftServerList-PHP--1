function showLoading(a) {
    var b = new CanvasLoader(a);
    b.setColor("#4e68d9"), b.setDiameter(16), b.setDensity(59), b.setRange(1.6), b.setSpeed(4), b.show()
}
function hideLoading() {
    $("#ajaxLoading").remove()
}
function error(a) {
    return '<div id="error" class="alert alert-error"><button class="close" data-dismiss="alert">&times;</button><h4 class="alert-heading">Error</h4><ol><li>' + a + "</li></ol></div>"
}
function errorRemove() {
    $("#error").remove()
}
function showLoading(a) {
    var b = new CanvasLoader(a);
    b.setColor("#4e68d9"), b.setDiameter(16), b.setDensity(59), b.setRange(1.6), b.setSpeed(4), b.show()
}
function hideLoading() {
    $("#ajaxLoading").remove()
}
function versionCompare(a, b, c) {
    function d(a) {
        return (e ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(a)
    }
    var e = c && c.lexicographical,
        f = c && c.zeroExtend,
        g = a.split("."),
        h = b.split(".");
    if (!g.every(d) || !h.every(d)) return NaN;
    if (f) {
        for (; g.length < h.length;) g.push("0");
        for (; h.length < g.length;) h.push("0")
    }
    e || (g = g.map(Number), h = h.map(Number));
    for (var i = 0; i < g.length; ++i) {
        if (h.length === i) return 1;
        if (g[i] !== h[i]) return g[i] > h[i] ? 1 : -1
    }
    return g.length !== h.length ? -1 : 0
}
function checkGithuVersion(a) {
    $.ajax({
        url: "https://api.github.com/repos/BanManagement/BanManager-WebUI/releases",
        dataType: "json",
        success: function (b) {
            a(b[0].tag_name)
        }
    })
}
if (function (a) {
    function b(a, b, c) {
        switch (arguments.length) {
            case 2:
                return null != a ? a : b;
            case 3:
                return null != a ? a : null != b ? b : c;
            default:
                throw new Error("Implement me")
        }
    }
    function c() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function d(a, b) {
        function c() {
            ma.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
        }
        var d = !0;
        return j(function () {
            return d && (c(), d = !1), b.apply(this, arguments)
        }, b)
    }
    function e(a, b) {
        return function (c) {
            return m(a.call(this, c), b)
        }
    }
    function f(a, b) {
        return function (c) {
            return this.lang().ordinal(a.call(this, c), b)
        }
    }
    function g() {}
    function h(a) {
        z(a), j(this, a)
    }
    function i(a) {
        var b = s(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._bubble()
    }
    function j(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
    }
    function k(a) {
        var b, c = {};
        for (b in a) a.hasOwnProperty(b) && Aa.hasOwnProperty(b) && (c[b] = a[b]);
        return c
    }
    function l(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }
    function m(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d
    }
    function n(a, b, c, d) {
        var e = b._milliseconds,
            f = b._days,
            g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && ha(a, "Date", ga(a, "Date") + f * c), g && fa(a, ga(a, "Month") + g * c), d && ma.updateOffset(a, f || g)
    }
    function o(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function p(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }
    function q(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f
    }
    function r(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = bb[a] || cb[b] || b
        }
        return a
    }
    function s(a) {
        var b, c, d = {};
        for (c in a) a.hasOwnProperty(c) && (b = r(c), b && (d[b] = a[c]));
        return d
    }
    function t(b) {
        var c, d;
        if (0 === b.indexOf("week")) c = 7, d = "day";
        else {
            if (0 !== b.indexOf("month")) return;
            c = 12, d = "month"
        }
        ma[b] = function (e, f) {
            var g, h, i = ma.fn._lang[b],
                j = [];
            if ("number" == typeof e && (f = e, e = a), h = function (a) {
                var b = ma().utc().set(d, a);
                return i.call(ma.fn._lang, b, e || "")
            }, null != f) return h(f);
            for (g = 0; c > g; g++) j.push(h(g));
            return j
        }
    }
    function u(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }
    function v(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }
    function w(a, b, c) {
        return ba(ma([a, 11, 31 + b - c]), b, c).week
    }
    function x(a) {
        return y(a) ? 366 : 365
    }
    function y(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }
    function z(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[ta] < 0 || a._a[ta] > 11 ? ta : a._a[ua] < 1 || a._a[ua] > v(a._a[sa], a._a[ta]) ? ua : a._a[va] < 0 || a._a[va] > 23 ? va : a._a[wa] < 0 || a._a[wa] > 59 ? wa : a._a[xa] < 0 || a._a[xa] > 59 ? xa : a._a[ya] < 0 || a._a[ya] > 999 ? ya : -1, a._pf._overflowDayOfYear && (sa > b || b > ua) && (b = ua), a._pf.overflow = b)
    }
    function A(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
    }
    function B(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }
    function C(a, b) {
        return b._isUTC ? ma(a).zone(b._offset || 0) : ma(a).local()
    }
    function D(a, b) {
        return b.abbr = a, za[a] || (za[a] = new g), za[a].set(b), za[a]
    }
    function E(a) {
        delete za[a]
    }
    function F(a) {
        var b, c, d, e, f = 0,
            g = function (a) {
                if (!za[a] && Ba) try {
                    require("./lang/" + a)
                } catch (b) {}
                return za[a]
            };
        if (!a) return ma.fn._lang;
        if (!o(a)) {
            if (c = g(a)) return c;
            a = [a]
        }
        for (; f < a.length;) {
            for (e = B(a[f]).split("-"), b = e.length, d = B(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
                if (c = g(e.slice(0, b).join("-"))) return c;
                if (d && d.length >= b && q(e, d, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return ma.fn._lang
    }
    function G(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function H(a) {
        var b, c, d = a.match(Fa);
        for (b = 0, c = d.length; c > b; b++) hb[d[b]] ? d[b] = hb[d[b]] : d[b] = G(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }
    function I(a, b) {
        return a.isValid() ? (b = J(b, a.lang()), db[b] || (db[b] = H(b)), db[b](a)) : a.lang().invalidDate()
    }
    function J(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Ga.lastIndex = 0; d >= 0 && Ga.test(a);) a = a.replace(Ga, c), Ga.lastIndex = 0, d -= 1;
        return a
    }
    function K(a, b) {
        var c, d = b._strict;
        switch (a) {
            case "Q":
                return Ra;
            case "DDDD":
                return Ta;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return d ? Ua : Ja;
            case "Y":
            case "G":
            case "g":
                return Wa;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return d ? Va : Ka;
            case "S":
                if (d) return Ra;
            case "SS":
                if (d) return Sa;
            case "SSS":
                if (d) return Ta;
            case "DDD":
                return Ia;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Ma;
            case "a":
            case "A":
                return F(b._l)._meridiemParse;
            case "X":
                return Pa;
            case "Z":
            case "ZZ":
                return Na;
            case "T":
                return Oa;
            case "SSSS":
                return La;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return d ? Sa : Ha;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Ha;
            case "Do":
                return Qa;
            default:
                return c = new RegExp(T(S(a.replace("\\", "")), "i"))
        }
    }
    function L(a) {
        a = a || "";
        var b = a.match(Na) || [],
            c = b[b.length - 1] || [],
            d = (c + "").match(_a) || ["-", 0, 0],
            e = +(60 * d[1]) + u(d[2]);
        return "+" === d[0] ? -e : e
    }
    function M(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case "Q":
                null != b && (e[ta] = 3 * (u(b) - 1));
                break;
            case "M":
            case "MM":
                null != b && (e[ta] = u(b) - 1);
                break;
            case "MMM":
            case "MMMM":
                d = F(c._l).monthsParse(b), null != d ? e[ta] = d : c._pf.invalidMonth = b;
                break;
            case "D":
            case "DD":
                null != b && (e[ua] = u(b));
                break;
            case "Do":
                null != b && (e[ua] = u(parseInt(b, 10)));
                break;
            case "DDD":
            case "DDDD":
                null != b && (c._dayOfYear = u(b));
                break;
            case "YY":
                e[sa] = ma.parseTwoDigitYear(b);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                e[sa] = u(b);
                break;
            case "a":
            case "A":
                c._isPm = F(c._l).isPM(b);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                e[va] = u(b);
                break;
            case "m":
            case "mm":
                e[wa] = u(b);
                break;
            case "s":
            case "ss":
                e[xa] = u(b);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                e[ya] = u(1e3 * ("0." + b));
                break;
            case "X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case "Z":
            case "ZZ":
                c._useUTC = !0, c._tzm = L(b);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                d = F(c._l).weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                a = a.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = u(b));
                break;
            case "gg":
            case "GG":
                c._w = c._w || {}, c._w[a] = ma.parseTwoDigitYear(b)
        }
    }
    function N(a) {
        var c, d, e, f, g, h, i, j;
        c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[sa], ba(ma(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (j = F(a._l), g = j._week.dow, h = j._week.doy, d = b(c.gg, a._a[sa], ba(ma(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = ca(d, e, f, h, g), a._a[sa] = i.year, a._dayOfYear = i.dayOfYear
    }
    function O(a) {
        var c, d, e, f, g = [];
        if (!a._d) {
            for (e = Q(a), a._w && null == a._a[ua] && null == a._a[ta] && N(a), a._dayOfYear && (f = b(a._a[sa], e[sa]), a._dayOfYear > x(f) && (a._pf._overflowDayOfYear = !0), d = Z(f, 0, a._dayOfYear), a._a[ta] = d.getUTCMonth(), a._a[ua] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c];
            for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
            a._d = (a._useUTC ? Z : Y).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm)
        }
    }
    function P(a) {
        var b;
        a._d || (b = s(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], O(a))
    }
    function Q(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }
    function R(a) {
        if (a._f === ma.ISO_8601) return void V(a);
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = F(a._l),
            h = "" + a._i,
            i = h.length,
            j = 0;
        for (d = J(a._f, g).match(Fa) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(K(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), hb[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), M(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[va] < 12 && (a._a[va] += 12), a._isPm === !1 && 12 === a._a[va] && (a._a[va] = 0), O(a), z(a)
    }
    function S(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e
        })
    }
    function T(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function U(a) {
        var b, d, e, f, g;
        if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(NaN));
        for (f = 0; f < a._f.length; f++) g = 0, b = j({}, a), b._pf = c(), b._f = a._f[f], R(b), A(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, d = b));
        j(a, d || b)
    }
    function V(a) {
        var b, c, d = a._i,
            e = Xa.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = Za.length; c > b; b++) if (Za[b][1].exec(d)) {
                a._f = Za[b][0] + (e[6] || " ");
                break
            }
            for (b = 0, c = $a.length; c > b; b++) if ($a[b][1].exec(d)) {
                a._f += $a[b][0];
                break
            }
            d.match(Na) && (a._f += "Z"), R(a)
        } else a._isValid = !1
    }
    function W(a) {
        V(a), a._isValid === !1 && (delete a._isValid, ma.createFromInputFallback(a))
    }
    function X(b) {
        var c = b._i,
            d = Ca.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? W(b) : o(c) ? (b._a = c.slice(0), O(b)) : p(c) ? b._d = new Date(+c) : "object" == typeof c ? P(b) : "number" == typeof c ? b._d = new Date(c) : ma.createFromInputFallback(b)
    }
    function Y(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }
    function Z(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }
    function $(a, b) {
        if ("string" == typeof a) if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a) return null
        } else a = parseInt(a, 10);
        return a
    }
    function _(a, b, c, d, e) {
        return e.relativeTime(b || 1, !! c, a, d)
    }
    function aa(a, b, c) {
        var d = ra(Math.abs(a) / 1e3),
            e = ra(d / 60),
            f = ra(e / 60),
            g = ra(f / 24),
            h = ra(g / 365),
            i = d < eb.s && ["s", d] || 1 === e && ["m"] || e < eb.m && ["mm", e] || 1 === f && ["h"] || f < eb.h && ["hh", f] || 1 === g && ["d"] || g <= eb.dd && ["dd", g] || g <= eb.dm && ["M"] || g < eb.dy && ["MM", ra(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b, i[3] = a > 0, i[4] = c, _.apply({}, i)
    }
    function ba(a, b, c) {
        var d, e = c - b,
            f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = ma(a).add("d", f), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }
    function ca(a, b, c, d, e) {
        var f, g, h = Z(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : x(a - 1) + g
        }
    }
    function da(b) {
        var c = b._i,
            d = b._f;
        return null === c || d === a && "" === c ? ma.invalid({
            nullInput: !0
        }) : ("string" == typeof c && (b._i = c = F().preparse(c)), ma.isMoment(c) ? (b = k(c), b._d = new Date(+c._d)) : d ? o(d) ? U(b) : R(b) : X(b), new h(b))
    }
    function ea(a, b) {
        var c, d;
        if (1 === b.length && o(b[0]) && (b = b[0]), !b.length) return ma();
        for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]);
        return c
    }
    function fa(a, b) {
        var c;
        return "string" == typeof b && (b = a.lang().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), v(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }
    function ga(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }
    function ha(a, b, c) {
        return "Month" === b ? fa(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }
    function ia(a, b) {
        return function (c) {
            return null != c ? (ha(this, a, c), ma.updateOffset(this, b), this) : ga(this, a)
        }
    }
    function ja(a) {
        ma.duration.fn[a] = function () {
            return this._data[a]
        }
    }
    function ka(a, b) {
        ma.duration.fn["as" + a] = function () {
            return +this / b
        }
    }
    function la(a) {
        "undefined" == typeof ender && (na = qa.moment, a ? qa.moment = d("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ma) : qa.moment = ma)
    }
    for (var ma, na, oa, pa = "2.7.0", qa = "undefined" != typeof global ? global : this, ra = Math.round, sa = 0, ta = 1, ua = 2, va = 3, wa = 4, xa = 5, ya = 6, za = {}, Aa = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _tzm: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
    }, Ba = "undefined" != typeof module && module.exports, Ca = /^\/?Date\((\-?\d+)/i, Da = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ea = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Fa = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Ga = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Ha = /\d\d?/, Ia = /\d{1,3}/, Ja = /\d{1,4}/, Ka = /[+\-]?\d{1,6}/, La = /\d+/, Ma = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Na = /Z|[\+\-]\d\d:?\d\d/gi, Oa = /T/i, Pa = /[\+\-]?\d+(\.\d{1,3})?/, Qa = /\d{1,2}/, Ra = /\d/, Sa = /\d\d/, Ta = /\d{3}/, Ua = /\d{4}/, Va = /[+-]?\d{6}/, Wa = /[+-]?\d+/, Xa = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ya = "YYYY-MM-DDTHH:mm:ssZ", Za = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
    ], $a = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], _a = /([\+\-]|\d\d)/gi, ab = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }), bb = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, cb = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, db = {}, eb = {
        s: 45,
        m: 45,
        h: 22,
        dd: 25,
        dm: 45,
        dy: 345
    }, fb = "DDD w W M D d".split(" "), gb = "M D H h m s w W".split(" "), hb = {
        M: function () {
            return this.month() + 1
        },
        MMM: function (a) {
            return this.lang().monthsShort(this, a)
        },
        MMMM: function (a) {
            return this.lang().months(this, a)
        },
        D: function () {
            return this.date()
        },
        DDD: function () {
            return this.dayOfYear()
        },
        d: function () {
            return this.day()
        },
        dd: function (a) {
            return this.lang().weekdaysMin(this, a)
        },
        ddd: function (a) {
            return this.lang().weekdaysShort(this, a)
        },
        dddd: function (a) {
            return this.lang().weekdays(this, a)
        },
        w: function () {
            return this.week()
        },
        W: function () {
            return this.isoWeek()
        },
        YY: function () {
            return m(this.year() % 100, 2)
        },
        YYYY: function () {
            return m(this.year(), 4)
        },
        YYYYY: function () {
            return m(this.year(), 5)
        },
        YYYYYY: function () {
            var a = this.year(),
                b = a >= 0 ? "+" : "-";
            return b + m(Math.abs(a), 6)
        },
        gg: function () {
            return m(this.weekYear() % 100, 2)
        },
        gggg: function () {
            return m(this.weekYear(), 4)
        },
        ggggg: function () {
            return m(this.weekYear(), 5)
        },
        GG: function () {
            return m(this.isoWeekYear() % 100, 2)
        },
        GGGG: function () {
            return m(this.isoWeekYear(), 4)
        },
        GGGGG: function () {
            return m(this.isoWeekYear(), 5)
        },
        e: function () {
            return this.weekday()
        },
        E: function () {
            return this.isoWeekday()
        },
        a: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function () {
            return this.hours()
        },
        h: function () {
            return this.hours() % 12 || 12
        },
        m: function () {
            return this.minutes()
        },
        s: function () {
            return this.seconds()
        },
        S: function () {
            return u(this.milliseconds() / 100)
        },
        SS: function () {
            return m(u(this.milliseconds() / 10), 2)
        },
        SSS: function () {
            return m(this.milliseconds(), 3)
        },
        SSSS: function () {
            return m(this.milliseconds(), 3)
        },
        Z: function () {
            var a = -this.zone(),
                b = "+";
            return 0 > a && (a = -a, b = "-"), b + m(u(a / 60), 2) + ":" + m(u(a) % 60, 2)
        },
        ZZ: function () {
            var a = -this.zone(),
                b = "+";
            return 0 > a && (a = -a, b = "-"), b + m(u(a / 60), 2) + m(u(a) % 60, 2)
        },
        z: function () {
            return this.zoneAbbr()
        },
        zz: function () {
            return this.zoneName()
        },
        X: function () {
            return this.unix()
        },
        Q: function () {
            return this.quarter()
        }
    }, ib = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; fb.length;) oa = fb.pop(), hb[oa + "o"] = f(hb[oa], oa);
    for (; gb.length;) oa = gb.pop(), hb[oa + oa] = e(hb[oa], 2);
    for (hb.DDDD = e(hb.DDD, 3), j(g.prototype, {
        set: function (a) {
            var b, c;
            for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function (a) {
            var b, c, d;
            for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++) if (this._monthsParse[b] || (c = ma.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (a) {
            return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function (a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = ma([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function (a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        },
        isPM: function (a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (a, b) {
            var c = this._calendar[a];
            return "function" == typeof c ? c.apply(b) : c
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function (a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function (a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        preparse: function (a) {
            return a
        },
        postformat: function (a) {
            return a
        },
        week: function (a) {
            return ba(a, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function () {
            return this._invalidDate
        }
    }), ma = function (b, d, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = c(), da(g)
    }, ma.suppressDeprecationWarnings = !1, ma.createFromInputFallback = d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
        a._d = new Date(a._i)
    }), ma.min = function () {
        var a = [].slice.call(arguments, 0);
        return ea("isBefore", a)
    }, ma.max = function () {
        var a = [].slice.call(arguments, 0);
        return ea("isAfter", a)
    }, ma.utc = function (b, d, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = d, g._strict = f, g._pf = c(), da(g).utc()
    }, ma.unix = function (a) {
        return ma(1e3 * a)
    }, ma.duration = function (a, b) {
        var c, d, e, f = a,
            g = null;
        return ma.isDuration(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = Da.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
            y: 0,
            d: u(g[ua]) * c,
            h: u(g[va]) * c,
            m: u(g[wa]) * c,
            s: u(g[xa]) * c,
            ms: u(g[ya]) * c
        }) : (g = Ea.exec(a)) && (c = "-" === g[1] ? -1 : 1, e = function (a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * c
        }, f = {
            y: e(g[2]),
            M: e(g[3]),
            d: e(g[4]),
            h: e(g[5]),
            m: e(g[6]),
            s: e(g[7]),
            w: e(g[8])
        }), d = new i(f), ma.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
    }, ma.version = pa, ma.defaultFormat = Ya, ma.ISO_8601 = function () {}, ma.momentProperties = Aa, ma.updateOffset = function () {}, ma.relativeTimeThreshold = function (b, c) {
        return eb[b] === a ? !1 : (eb[b] = c, !0)
    }, ma.lang = function (a, b) {
        var c;
        return a ? (b ? D(B(a), b) : null === b ? (E(a), a = "en") : za[a] || F(a), c = ma.duration.fn._lang = ma.fn._lang = F(a), c._abbr) : ma.fn._lang._abbr
    }, ma.langData = function (a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), F(a)
    }, ma.isMoment = function (a) {
        return a instanceof h || null != a && a.hasOwnProperty("_isAMomentObject")
    }, ma.isDuration = function (a) {
        return a instanceof i
    }, oa = ib.length - 1; oa >= 0; --oa) t(ib[oa]);
    ma.normalizeUnits = function (a) {
        return r(a)
    }, ma.invalid = function (a) {
        var b = ma.utc(NaN);
        return null != a ? j(b._pf, a) : b._pf.userInvalidated = !0, b
    }, ma.parseZone = function () {
        return ma.apply(null, arguments).parseZone()
    }, ma.parseTwoDigitYear = function (a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3)
    }, j(ma.fn = h.prototype, {
        clone: function () {
            return ma(this)
        },
        valueOf: function () {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function () {
            return Math.floor(+this / 1e3)
        },
        toString: function () {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function () {
            var a = ma(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? I(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function () {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function () {
            return A(this)
        },
        isDSTShifted: function () {
            return this._a ? this.isValid() && q(this._a, (this._isUTC ? ma.utc(this._a) : ma(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function () {
            return j({}, this._pf)
        },
        invalidAt: function () {
            return this._pf.overflow
        },
        utc: function () {
            return this.zone(0)
        },
        local: function () {
            return this.zone(0), this._isUTC = !1, this
        },
        format: function (a) {
            var b = I(this, a || ma.defaultFormat);
            return this.lang().postformat(b)
        },
        add: function (a, b) {
            var c;
            return c = "string" == typeof a && "string" == typeof b ? ma.duration(isNaN(+b) ? +a : +b, isNaN(+b) ? b : a) : "string" == typeof a ? ma.duration(+b, a) : ma.duration(a, b), n(this, c, 1), this
        },
        subtract: function (a, b) {
            var c;
            return c = "string" == typeof a && "string" == typeof b ? ma.duration(isNaN(+b) ? +a : +b, isNaN(+b) ? b : a) : "string" == typeof a ? ma.duration(+b, a) : ma.duration(a, b), n(this, c, -1), this
        },
        diff: function (a, b, c) {
            var d, e, f = C(a, this),
                g = 6e4 * (this.zone() - f.zone());
            return b = r(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - ma(this).startOf("month") - (f - ma(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - ma(this).startOf("month").zone() - (f.zone() - ma(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : l(e)
        },
        from: function (a, b) {
            return ma.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
        },
        fromNow: function (a) {
            return this.from(ma(), a)
        },
        calendar: function (a) {
            var b = a || ma(),
                c = C(b, this).startOf("day"),
                d = this.diff(c, "days", !0),
                e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(e, this))
        },
        isLeapYear: function () {
            return y(this.year())
        },
        isDST: function () {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function (a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = $(a, this.lang()), this.add({
                d: a - b
            })) : b
        },
        month: ia("Month", !0),
        startOf: function (a) {
            switch (a = r(a)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function (a) {
            return a = r(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
        },
        isAfter: function (a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +ma(a).startOf(b)
        },
        isBefore: function (a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +ma(a).startOf(b)
        },
        isSame: function (a, b) {
            return b = b || "ms", +this.clone().startOf(b) === +C(a, this).startOf(b)
        },
        min: d("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) {
            return a = ma.apply(null, arguments), this > a ? this : a
        }),
        max: d("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) {
            return a = ma.apply(null, arguments), a > this ? this : a
        }),
        zone: function (a, b) {
            var c = this._offset || 0;
            return null == a ? this._isUTC ? c : this._d.getTimezoneOffset() : ("string" == typeof a && (a = L(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, c !== a && (!b || this._changeInProgress ? n(this, ma.duration(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ma.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function () {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function () {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function (a) {
            return a = a ? ma(a).zone() : 0, (this.zone() - a) % 60 === 0
        },
        daysInMonth: function () {
            return v(this.year(), this.month())
        },
        dayOfYear: function (a) {
            var b = ra((ma(this).startOf("day") - ma(this).startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add("d", a - b)
        },
        quarter: function (a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        },
        weekYear: function (a) {
            var b = ba(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == a ? b : this.add("y", a - b)
        },
        isoWeekYear: function (a) {
            var b = ba(this, 1, 4).year;
            return null == a ? b : this.add("y", a - b)
        },
        week: function (a) {
            var b = this.lang().week(this);
            return null == a ? b : this.add("d", 7 * (a - b))
        },
        isoWeek: function (a) {
            var b = ba(this, 1, 4).week;
            return null == a ? b : this.add("d", 7 * (a - b))
        },
        weekday: function (a) {
            var b = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == a ? b : this.add("d", a - b)
        },
        isoWeekday: function (a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        },
        isoWeeksInYear: function () {
            return w(this.year(), 1, 4)
        },
        weeksInYear: function () {
            var a = this._lang._week;
            return w(this.year(), a.dow, a.doy)
        },
        get: function (a) {
            return a = r(a), this[a]()
        },
        set: function (a, b) {
            return a = r(a), "function" == typeof this[a] && this[a](b), this
        },
        lang: function (b) {
            return b === a ? this._lang : (this._lang = F(b), this)
        }
    }), ma.fn.millisecond = ma.fn.milliseconds = ia("Milliseconds", !1), ma.fn.second = ma.fn.seconds = ia("Seconds", !1), ma.fn.minute = ma.fn.minutes = ia("Minutes", !1), ma.fn.hour = ma.fn.hours = ia("Hours", !0), ma.fn.date = ia("Date", !0), ma.fn.dates = d("dates accessor is deprecated. Use date instead.", ia("Date", !0)), ma.fn.year = ia("FullYear", !0), ma.fn.years = d("years accessor is deprecated. Use year instead.", ia("FullYear", !0)), ma.fn.days = ma.fn.day, ma.fn.months = ma.fn.month, ma.fn.weeks = ma.fn.week, ma.fn.isoWeeks = ma.fn.isoWeek, ma.fn.quarters = ma.fn.quarter, ma.fn.toJSON = ma.fn.toISOString, j(ma.duration.fn = i.prototype, {
        _bubble: function () {
            var a, b, c, d, e = this._milliseconds,
                f = this._days,
                g = this._months,
                h = this._data;
            h.milliseconds = e % 1e3, a = l(e / 1e3), h.seconds = a % 60, b = l(a / 60), h.minutes = b % 60, c = l(b / 60), h.hours = c % 24, f += l(c / 24), h.days = f % 30, g += l(f / 30), h.months = g % 12, d = l(g / 12), h.years = d
        },
        weeks: function () {
            return l(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12)
        },
        humanize: function (a) {
            var b = +this,
                c = aa(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
        },
        add: function (a, b) {
            var c = ma.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
        },
        subtract: function (a, b) {
            var c = ma.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
        },
        get: function (a) {
            return a = r(a), this[a.toLowerCase() + "s"]()
        },
        as: function (a) {
            return a = r(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
        },
        lang: ma.fn.lang,
        toIsoString: function () {
            var a = Math.abs(this.years()),
                b = Math.abs(this.months()),
                c = Math.abs(this.days()),
                d = Math.abs(this.hours()),
                e = Math.abs(this.minutes()),
                f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
        }
    });
    for (oa in ab) ab.hasOwnProperty(oa) && (ka(oa, ab[oa]), ja(oa.toLowerCase()));
    ka("Weeks", 6048e5), ma.duration.fn.asMonths = function () {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, ma.lang("en", {
        ordinal: function (a) {
            var b = a % 10,
                c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), Ba ? module.exports = ma : "function" == typeof define && define.amd ? (define("moment", function (a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (qa.moment = na), ma
    }), la(!0)) : la()
}.call(this), document.createElement("canvas").getContext || ! function () {
    function a() {
        return this.context_ || (this.context_ = new u(this))
    }
    function b(a, b, c) {
        var d = O.call(arguments, 2);
        return function () {
            return a.apply(b, d.concat(O.call(arguments)))
        }
    }
    function c(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }
    function d(a, b, c) {
        a.namespaces[b] || a.namespaces.add(b, c, "#default#VML")
    }
    function e(a) {
        if (d(a, "g_vml_", "urn:schemas-microsoft-com:vml"), d(a, "g_o_", "urn:schemas-microsoft-com:office:office"), !a.styleSheets.ex_canvas_) {
            var b = a.createStyleSheet();
            b.owningElement.id = "ex_canvas_", b.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
        }
    }
    function f(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect(), b.style.width = b.attributes.width.nodeValue + "px", b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px"
        }
    }
    function g(a) {
        var b = a.srcElement;
        b.firstChild && (b.firstChild.style.width = b.clientWidth + "px", b.firstChild.style.height = b.clientHeight + "px")
    }
    function h() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    }
    function i(a, b) {
        for (var c = h(), d = 0; 3 > d; d++) for (var e = 0; 3 > e; e++) {
            for (var f = 0, g = 0; 3 > g; g++) f += a[d][g] * b[g][e];
            c[d][e] = f
        }
        return c
    }
    function j(a, b) {
        b.fillStyle = a.fillStyle, b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.lineWidth = a.lineWidth, b.miterLimit = a.miterLimit, b.shadowBlur = a.shadowBlur, b.shadowColor = a.shadowColor, b.shadowOffsetX = a.shadowOffsetX, b.shadowOffsetY = a.shadowOffsetY, b.strokeStyle = a.strokeStyle, b.globalAlpha = a.globalAlpha, b.font = a.font, b.textAlign = a.textAlign, b.textBaseline = a.textBaseline, b.arcScaleX_ = a.arcScaleX_, b.arcScaleY_ = a.arcScaleY_, b.lineScale_ = a.lineScale_
    }
    function k(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            d = a.substring(b + 1, c).split(",");
        return (4 != d.length || "a" != a.charAt(3)) && (d[3] = 1), d
    }
    function l(a) {
        return parseFloat(a) / 100
    }
    function m(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }
    function n(a) {
        var b, c, d, e, f, g;
        if (e = parseFloat(a[0]) / 360 % 360,
        0 > e && e++, f = m(l(a[1]), 0, 1), g = m(l(a[2]), 0, 1), 0 == f) b = c = d = g;
        else {
            var h = .5 > g ? g * (1 + f) : g + f - g * f,
                i = 2 * g - h;
            b = o(i, h, e + 1 / 3), c = o(i, h, e), d = o(i, h, e - 1 / 3)
        }
        return "#" + Q[Math.floor(255 * b)] + Q[Math.floor(255 * c)] + Q[Math.floor(255 * d)]
    }
    function o(a, b, c) {
        return 0 > c && c++, c > 1 && c--, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
    }
    function p(a) {
        if (a in U) return U[a];
        var b, c = 1;
        if (a = String(a), "#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            for (var d, e = k(a), b = "#", f = 0; 3 > f; f++) d = -1 != e[f].indexOf("%") ? Math.floor(255 * l(e[f])) : +e[f], b += Q[m(d, 0, 255)];
            c = +e[3]
        } else if (/^hsl/.test(a)) {
            var e = k(a);
            b = n(e), c = e[3]
        } else b = T[a] || a;
        return U[a] = {
            color: b,
            alpha: c
        }
    }
    function q(a) {
        if (W[a]) return W[a];
        var b = document.createElement("div"),
            c = b.style;
        try {
            c.font = a
        } catch (d) {}
        return W[a] = {
            style: c.fontStyle || V.style,
            variant: c.fontVariant || V.variant,
            weight: c.fontWeight || V.weight,
            size: c.fontSize || V.size,
            family: c.fontFamily || V.family
        }
    }
    function r(a, b) {
        var c = {};
        for (var d in a) c[d] = a[d];
        var e = parseFloat(b.currentStyle.fontSize),
            f = parseFloat(a.size);
        return "number" == typeof a.size ? c.size = a.size : -1 != a.size.indexOf("px") ? c.size = f : -1 != a.size.indexOf("em") ? c.size = e * f : -1 != a.size.indexOf("%") ? c.size = e / 100 * f : -1 != a.size.indexOf("pt") ? c.size = f / .75 : c.size = e, c.size *= .981, c
    }
    function s(a) {
        return a.style + " " + a.variant + " " + a.weight + " " + a.size + "px " + a.family
    }
    function t(a) {
        return X[a] || "square"
    }
    function u(a) {
        this.m_ = h(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.strokeStyle = "#000", this.fillStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = 1 * M, this.globalAlpha = 1, this.font = "10px sans-serif", this.textAlign = "left", this.textBaseline = "alphabetic", this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b, a.appendChild(c);
        var d = c.cloneNode(!1);
        d.style.backgroundColor = "red", d.style.filter = "alpha(opacity=0)", a.appendChild(d), this.element_ = c, this.arcScaleX_ = 1, this.arcScaleY_ = 1, this.lineScale_ = 1
    }
    function v(a, b, c, d) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: d.x,
            y: d.y
        }), a.currentX_ = d.x, a.currentY_ = d.y
    }
    function w(a, b) {
        var c = p(a.strokeStyle),
            d = c.color,
            e = c.alpha * a.globalAlpha,
            f = a.lineScale_ * a.lineWidth;
        1 > f && (e *= f), b.push("<g_vml_:stroke", ' opacity="', e, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', t(a.lineCap), '"', ' weight="', f, 'px"', ' color="', d, '" />')
    }
    function x(a, b, c, d) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            g = a.arcScaleY_,
            h = d.x - c.x,
            i = d.y - c.y;
        if (e instanceof B) {
            var j = 0,
                k = {
                    x: 0,
                    y: 0
                }, l = 0,
                m = 1;
            if ("gradient" == e.type_) {
                var n = e.x0_ / f,
                    o = e.y0_ / g,
                    q = e.x1_ / f,
                    r = e.y1_ / g,
                    s = y(a, n, o),
                    t = y(a, q, r),
                    u = t.x - s.x,
                    v = t.y - s.y;
                j = 180 * Math.atan2(u, v) / Math.PI, 0 > j && (j += 360), 1e-6 > j && (j = 0)
            } else {
                var s = y(a, e.x0_, e.y0_);
                k = {
                    x: (s.x - c.x) / h,
                    y: (s.y - c.y) / i
                }, h /= f * M, i /= g * M;
                var w = G.max(h, i);
                l = 2 * e.r0_ / w, m = 2 * e.r1_ / w - l
            }
            var x = e.colors_;
            x.sort(function (a, b) {
                return a.offset - b.offset
            });
            for (var z = x.length, A = x[0].color, D = x[z - 1].color, E = x[0].alpha * a.globalAlpha, F = x[z - 1].alpha * a.globalAlpha, H = [], I = 0; z > I; I++) {
                var J = x[I];
                H.push(J.offset * m + l + " " + J.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', A, '"', ' color2="', D, '"', ' colors="', H.join(","), '"', ' opacity="', F, '"', ' g_o_:opacity2="', E, '"', ' angle="', j, '"', ' focusposition="', k.x, ",", k.y, '" />')
        } else if (e instanceof C) {
            if (h && i) {
                var K = -c.x,
                    L = -c.y;
                b.push("<g_vml_:fill", ' position="', K / h * f * f, ",", L / i * g * g, '"', ' type="tile"', ' src="', e.src_, '" />')
            }
        } else {
            var N = p(a.fillStyle),
                O = N.color,
                P = N.alpha * a.globalAlpha;
            b.push('<g_vml_:fill color="', O, '" opacity="', P, '" />')
        }
    }
    function y(a, b, c) {
        var d = a.m_;
        return {
            x: M * (b * d[0][0] + c * d[1][0] + d[2][0]) - N,
            y: M * (b * d[0][1] + c * d[1][1] + d[2][1]) - N
        }
    }
    function z(a) {
        return isFinite(a[0][0]) && isFinite(a[0][1]) && isFinite(a[1][0]) && isFinite(a[1][1]) && isFinite(a[2][0]) && isFinite(a[2][1])
    }
    function A(a, b, c) {
        if (z(b) && (a.m_ = b, c)) {
            var d = b[0][0] * b[1][1] - b[0][1] * b[1][0];
            a.lineScale_ = L(K(d))
        }
    }
    function B(a) {
        this.type_ = a, this.x0_ = 0, this.y0_ = 0, this.r0_ = 0, this.x1_ = 0, this.y1_ = 0, this.r1_ = 0, this.colors_ = []
    }
    function C(a, b) {
        switch (E(a), b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                D("SYNTAX_ERR")
        }
        this.src_ = a.src, this.width_ = a.width, this.height_ = a.height
    }
    function D(a) {
        throw new F(a)
    }
    function E(a) {
        a && 1 == a.nodeType && "IMG" == a.tagName || D("TYPE_MISMATCH_ERR"), "complete" != a.readyState && D("INVALID_STATE_ERR")
    }
    function F(a) {
        this.code = this[a], this.message = a + ": DOM Exception " + this.code
    }
    var G = Math,
        H = G.round,
        I = G.sin,
        J = G.cos,
        K = G.abs,
        L = G.sqrt,
        M = 10,
        N = M / 2,
        O = (+navigator.userAgent.match(/MSIE ([\d.]+)?/)[1], Array.prototype.slice);
    e(document);
    var P = {
        init: function (a) {
            var c = a || document;
            c.createElement("canvas"), c.attachEvent("onreadystatechange", b(this.init_, this, c))
        },
        init_: function (a) {
            for (var b = a.getElementsByTagName("canvas"), c = 0; c < b.length; c++) this.initElement(b[c])
        },
        initElement: function (b) {
            if (!b.getContext) {
                b.getContext = a, e(b.ownerDocument), b.innerHTML = "", b.attachEvent("onpropertychange", f), b.attachEvent("onresize", g);
                var c = b.attributes;
                c.width && c.width.specified ? b.style.width = c.width.nodeValue + "px" : b.width = b.clientWidth, c.height && c.height.specified ? b.style.height = c.height.nodeValue + "px" : b.height = b.clientHeight
            }
            return b
        }
    };
    P.init();
    for (var Q = [], R = 0; 16 > R; R++) for (var S = 0; 16 > S; S++) Q[16 * R + S] = R.toString(16) + S.toString(16);
    var T = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
    }, U = {}, V = {
        style: "normal",
        variant: "normal",
        weight: "normal",
        size: 10,
        family: "sans-serif"
    }, W = {}, X = {
        butt: "flat",
        round: "round"
    }, Y = u.prototype;
    Y.clearRect = function () {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), this.element_.innerHTML = ""
    }, Y.beginPath = function () {
        this.currentPath_ = []
    }, Y.moveTo = function (a, b) {
        var c = y(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        }), this.currentX_ = c.x, this.currentY_ = c.y
    }, Y.lineTo = function (a, b) {
        var c = y(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        }), this.currentX_ = c.x, this.currentY_ = c.y
    }, Y.bezierCurveTo = function (a, b, c, d, e, f) {
        var g = y(this, e, f),
            h = y(this, a, b),
            i = y(this, c, d);
        v(this, h, i, g)
    }, Y.quadraticCurveTo = function (a, b, c, d) {
        var e = y(this, a, b),
            f = y(this, c, d),
            g = {
                x: this.currentX_ + 2 / 3 * (e.x - this.currentX_),
                y: this.currentY_ + 2 / 3 * (e.y - this.currentY_)
            }, h = {
                x: g.x + (f.x - this.currentX_) / 3,
                y: g.y + (f.y - this.currentY_) / 3
            };
        v(this, g, h, f)
    }, Y.arc = function (a, b, c, d, e, f) {
        c *= M;
        var g = f ? "at" : "wa",
            h = a + J(d) * c - N,
            i = b + I(d) * c - N,
            j = a + J(e) * c - N,
            k = b + I(e) * c - N;
        h != j || f || (h += .125);
        var l = y(this, a, b),
            m = y(this, h, i),
            n = y(this, j, k);
        this.currentPath_.push({
            type: g,
            x: l.x,
            y: l.y,
            radius: c,
            xStart: m.x,
            yStart: m.y,
            xEnd: n.x,
            yEnd: n.y
        })
    }, Y.rect = function (a, b, c, d) {
        this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath()
    }, Y.strokeRect = function (a, b, c, d) {
        var e = this.currentPath_;
        this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath(), this.stroke(), this.currentPath_ = e
    }, Y.fillRect = function (a, b, c, d) {
        var e = this.currentPath_;
        this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.closePath(), this.fill(), this.currentPath_ = e
    }, Y.createLinearGradient = function (a, b, c, d) {
        var e = new B("gradient");
        return e.x0_ = a, e.y0_ = b, e.x1_ = c, e.y1_ = d, e
    }, Y.createRadialGradient = function (a, b, c, d, e, f) {
        var g = new B("gradientradial");
        return g.x0_ = a, g.y0_ = b, g.r0_ = c, g.x1_ = d, g.y1_ = e, g.r1_ = f, g
    }, Y.drawImage = function (a, b) {
        var c, d, e, f, g, h, i, j, k = a.runtimeStyle.width,
            l = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto", a.runtimeStyle.height = "auto";
        var m = a.width,
            n = a.height;
        if (a.runtimeStyle.width = k, a.runtimeStyle.height = l, 3 == arguments.length) c = arguments[1], d = arguments[2], g = h = 0, i = e = m, j = f = n;
        else if (5 == arguments.length) c = arguments[1], d = arguments[2], e = arguments[3], f = arguments[4], g = h = 0, i = m, j = n;
        else {
            if (9 != arguments.length) throw Error("Invalid number of arguments");
            g = arguments[1], h = arguments[2], i = arguments[3], j = arguments[4], c = arguments[5], d = arguments[6], e = arguments[7], f = arguments[8]
        }
        var o = y(this, c, d),
            p = [],
            q = 10,
            r = 10;
        if (p.push(" <g_vml_:group", ' coordsize="', M * q, ",", M * r, '"', ' coordorigin="0,0"', ' style="width:', q, "px;height:", r, "px;position:absolute;"), 1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var s = [];
            s.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", H(o.x / M), ",", "Dy=", H(o.y / M), "");
            var t = o,
                u = y(this, c + e, d),
                v = y(this, c, d + f),
                w = y(this, c + e, d + f);
            t.x = G.max(t.x, u.x, v.x, w.x), t.y = G.max(t.y, u.y, v.y, w.y), p.push("padding:0 ", H(t.x / M), "px ", H(t.y / M), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", s.join(""), ", sizingmethod='clip');")
        } else p.push("top:", H(o.y / M), "px;left:", H(o.x / M), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', M * e, "px;", " height:", M * f, 'px"', ' cropleft="', g / m, '"', ' croptop="', h / n, '"', ' cropright="', (m - g - i) / m, '"', ' cropbottom="', (n - h - j) / n, '"', " />", "</g_vml_:group>"), this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    }, Y.stroke = function (a) {
        var b = [],
            c = 10,
            d = 10;
        b.push("<g_vml_:shape", ' filled="', !! a, '"', ' style="position:absolute;width:', c, "px;height:", d, 'px;"', ' coordorigin="0,0"', ' coordsize="', M * c, ",", M * d, '"', ' stroked="', !a, '"', ' path="');
        for (var e = {
            x: null,
            y: null
        }, f = {
            x: null,
            y: null
        }, g = 0; g < this.currentPath_.length; g++) {
            var h, i = this.currentPath_[g];
            switch (i.type) {
                case "moveTo":
                    h = i, b.push(" m ", H(i.x), ",", H(i.y));
                    break;
                case "lineTo":
                    b.push(" l ", H(i.x), ",", H(i.y));
                    break;
                case "close":
                    b.push(" x "), i = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", H(i.cp1x), ",", H(i.cp1y), ",", H(i.cp2x), ",", H(i.cp2y), ",", H(i.x), ",", H(i.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", i.type, " ", H(i.x - this.arcScaleX_ * i.radius), ",", H(i.y - this.arcScaleY_ * i.radius), " ", H(i.x + this.arcScaleX_ * i.radius), ",", H(i.y + this.arcScaleY_ * i.radius), " ", H(i.xStart), ",", H(i.yStart), " ", H(i.xEnd), ",", H(i.yEnd))
            }
            i && ((null == e.x || i.x < e.x) && (e.x = i.x), (null == f.x || i.x > f.x) && (f.x = i.x), (null == e.y || i.y < e.y) && (e.y = i.y), (null == f.y || i.y > f.y) && (f.y = i.y))
        }
        b.push(' ">'), a ? x(this, b, e, f) : w(this, b), b.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    }, Y.fill = function () {
        this.stroke(!0)
    }, Y.closePath = function () {
        this.currentPath_.push({
            type: "close"
        })
    }, Y.save = function () {
        var a = {};
        j(this, a), this.aStack_.push(a), this.mStack_.push(this.m_), this.m_ = i(h(), this.m_)
    }, Y.restore = function () {
        this.aStack_.length && (j(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    }, Y.translate = function (a, b) {
        var c = [
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ];
        A(this, i(c, this.m_), !1)
    }, Y.rotate = function (a) {
        var b = J(a),
            c = I(a),
            d = [
                [b, c, 0],
                [-c, b, 0],
                [0, 0, 1]
            ];
        A(this, i(d, this.m_), !1)
    }, Y.scale = function (a, b) {
        this.arcScaleX_ *= a, this.arcScaleY_ *= b;
        var c = [
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ];
        A(this, i(c, this.m_), !0)
    }, Y.transform = function (a, b, c, d, e, f) {
        var g = [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ];
        A(this, i(g, this.m_), !0)
    }, Y.setTransform = function (a, b, c, d, e, f) {
        var g = [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ];
        A(this, g, !0)
    }, Y.drawText_ = function (a, b, d, e, f) {
        var g = this.m_,
            h = 1e3,
            i = 0,
            j = h,
            k = {
                x: 0,
                y: 0
            }, l = [],
            m = r(q(this.font), this.element_),
            n = s(m),
            o = this.element_.currentStyle,
            p = this.textAlign.toLowerCase();
        switch (p) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                p = "ltr" == o.direction ? "right" : "left";
                break;
            case "start":
                p = "rtl" == o.direction ? "right" : "left";
                break;
            default:
                p = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                k.y = m.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                k.y = -m.size / 2.25
        }
        switch (p) {
            case "right":
                i = h, j = .05;
                break;
            case "center":
                i = j = h / 2
        }
        var t = y(this, b + k.x, d + k.y);
        l.push('<g_vml_:line from="', -i, ' 0" to="', j, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !f, '" stroked="', !! f, '" style="position:absolute;width:1px;height:1px;">'), f ? w(this, l) : x(this, l, {
            x: -i,
            y: 0
        }, {
            x: j,
            y: m.size
        });
        var u = g[0][0].toFixed(3) + "," + g[1][0].toFixed(3) + "," + g[0][1].toFixed(3) + "," + g[1][1].toFixed(3) + ",0,0",
            v = H(t.x / M) + "," + H(t.y / M);
        l.push('<g_vml_:skew on="t" matrix="', u, '" ', ' offset="', v, '" origin="', i, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', c(a), '" style="v-text-align:', p, ";font:", c(n), '" /></g_vml_:line>'), this.element_.insertAdjacentHTML("beforeEnd", l.join(""))
    }, Y.fillText = function (a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    }, Y.strokeText = function (a, b, c, d) {
        this.drawText_(a, b, c, d, !0)
    }, Y.measureText = function (a) {
        if (!this.textMeasureEl_) {
            var b = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
            this.element_.insertAdjacentHTML("beforeEnd", b), this.textMeasureEl_ = this.element_.lastChild
        }
        var c = this.element_.ownerDocument;
        return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, this.textMeasureEl_.appendChild(c.createTextNode(a)), {
            width: this.textMeasureEl_.offsetWidth
        }
    }, Y.clip = function () {}, Y.arcTo = function () {}, Y.createPattern = function (a, b) {
        return new C(a, b)
    }, B.prototype.addColorStop = function (a, b) {
        b = p(b), this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    var Z = F.prototype = new Error;
    Z.INDEX_SIZE_ERR = 1, Z.DOMSTRING_SIZE_ERR = 2, Z.HIERARCHY_REQUEST_ERR = 3, Z.WRONG_DOCUMENT_ERR = 4, Z.INVALID_CHARACTER_ERR = 5, Z.NO_DATA_ALLOWED_ERR = 6, Z.NO_MODIFICATION_ALLOWED_ERR = 7, Z.NOT_FOUND_ERR = 8, Z.NOT_SUPPORTED_ERR = 9, Z.INUSE_ATTRIBUTE_ERR = 10, Z.INVALID_STATE_ERR = 11, Z.SYNTAX_ERR = 12, Z.INVALID_MODIFICATION_ERR = 13, Z.NAMESPACE_ERR = 14, Z.INVALID_ACCESS_ERR = 15, Z.VALIDATION_ERR = 16, Z.TYPE_MISMATCH_ERR = 17, G_vmlCanvasManager = P, CanvasRenderingContext2D = u, CanvasGradient = B, CanvasPattern = C, DOMException = F
}(), function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function (a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (;
        (a = a[b]) && 1 !== a.nodeType;);
        return a
    }
    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
            } catch (e) {}
            sa.set(a, b, c)
        } else c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }
    function u(a) {
        var b = Z,
            c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;) if (b = Xa[e] + c, b in a) return b;
        return d
    }
    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D() {
        return setTimeout(function () {
            Ya = void 0
        }), Ya = _.now()
    }
    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }
    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {}, n = a.style,
            o = a.nodeType && xa(a),
            p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], $a.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0
            }
            m[d] = p && p[d] || _.style(a, d)
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function () {
                _(a).hide()
            }), l.done(function () {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0,
            g = bb.length,
            h = _.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c)) for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
        "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function (b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {}, W = V.toString,
        X = V.hasOwnProperty,
        Y = {}, Z = a.document,
        $ = "2.1.3",
        _ = function (a, b) {
            return new _.fn.init(a, b)
        }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ba = /^-ms-/,
        ca = /-([\da-z])/gi,
        da = function (a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function () {
            return R.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function (a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return _.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(_.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function (a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function (a) {
            return a.replace(ba, "ms-").replace(ca, da)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(aa, "")
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h) for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0, a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }
        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                return a === b
            }, g, !0), j = n(function (a) {
                return aa(b, a) > -1
            }, g, !0), k = [function (a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; e > h; h++) if (c = w.relative[a[h].type]) k = [n(o(k), c)];
            else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                }
                k.push(c)
            }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function (d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];) if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function (a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            }, pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, xa = function () {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function (a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            }, U = b ? function (a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [P, n, m];
                                    break
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else for (;
                            (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function (a) {
                    return a = a.replace(va, wa),
                    function (b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function (a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                    function (b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === H
                },
                focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !w.pseudos.empty(a)
                },
                header: function (a) {
                    return qa.test(a.nodeName)
                },
                input: function (a) {
                    return pa.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function () {
                    return [0]
                }),
                last: j(function (a, b) {
                    return [b - 1]
                }),
                eq: j(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter)!(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !! E, F(), v.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
    _.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function (a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function () {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function (a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ka = _.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
        ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function (a, b, c) {
            for (var d = [], e = void 0 !== c;
            (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a)
            }
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function (a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function (a) {
            return e(a, "nextSibling")
        },
        prev: function (a) {
            return e(a, "previousSibling")
        },
        nextAll: function (a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return _.sibling(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function (a, b) {
        _.fn[a] = function (c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g,
        oa = {};
    _.Callbacks = function (a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function (f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            }, l = {
                add: function () {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function (b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function () {
                    return i && _.each(arguments, function (a, b) {
                        for (var c;
                        (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function (a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function () {
                    return i = [], g = 0, this
                },
                disable: function () {
                    return i = j = b = void 0, this
                },
                disabled: function () {
                    return !i
                },
                lock: function () {
                    return j = void 0, b || l.disable(), this
                },
                locked: function () {
                    return !j
                },
                fireWith: function (a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                ["notify", "progress", _.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return _.Deferred(function (c) {
                            _.each(b, function (b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? _.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, _.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function (a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function (b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(_(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function (a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function (a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else for (d in b) f[d] = b[d];
            return f
        },
        get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function (a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h,
        sa = new h,
        ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ua = /([A-Z])/g;
    _.extend({
        hasData: function (a) {
            return sa.hasData(a) || ra.hasData(a)
        },
        data: function (a, b, c) {
            return sa.access(a, b, c)
        },
        removeData: function (a, b) {
            sa.remove(a, b)
        },
        _data: function (a, b, c) {
            return ra.access(a, b, c)
        },
        _removeData: function (a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                sa.set(this, a)
            }) : qa(this, function (b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function () {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function () {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function () {
                    ra.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                _.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wa = ["Top", "Right", "Bottom", "Left"],
        xa = function (a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        }, ya = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
        Ba = /^(?:mouse|pointer|contextmenu)|click/,
        Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;) if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                (e = g[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, c = 0;
                (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                })
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props,
            a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function (a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function () {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function () {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/,
        Ha = /<(?:script|style|link)/i,
        Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = /^true\/(.*)/,
        La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
            else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
            else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function (a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function (a) {
            return qa(this, function (a) {
                return void 0 === a ? _.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return _.clone(this, a, b)
            })
        },
        html: function (a) {
            return qa(this, function (a) {
                var b = this[0] || {}, c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function (c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        _.fn[a] = function (a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {}, Pa = /^margin/,
        Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        Ra = function (b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function () {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function () {
                return b(), c
            },
            boxSizingReliable: function () {
                return null == d && b(), d
            },
            reliableMarginRight: function () {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Wa = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function (a, b) {
        _.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function () {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        _.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function (a, b) {
            return qa(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return B(this, !0)
        },
        hide: function () {
            return B(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/,
        bb = [G],
        cb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _a.exec(b),
                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
        tweener: function (a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? bb.unshift(a) : bb.push(a)
        }
    }), _.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = _.isEmptyObject(a),
                f = _.speed(b, c, d),
                g = function () {
                    var b = I(this, _.extend({}, a), f);
                    (e || ra.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = _.timers,
                    g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = ra.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = _.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (a, b) {
        var c = _.fn[b];
        _.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        _.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function () {
        var a, b = 0,
            c = _.timers;
        for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function (a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function () {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function () {
        clearInterval(Za), Za = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function (a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    },
    function () {
        var a = Z.createElement("input"),
            b = Z.createElement("select"),
            c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function (a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(na);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function (a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function (a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function (a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function (b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g)
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function (b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function (c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c) for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = _.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        _.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(),
        kb = /\?/;
    _.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, _.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        sb = {}, tb = {}, ub = "*/".concat("*"),
        vb = a.location.href,
        wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function (a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {}, r = {}, s = {}, t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!g) for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                        else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function (a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function (a, b) {
        _[b] = function (a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function (a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function (a) {
            var b;
            return _.isFunction(a) ? this.each(function (b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function (a) {
            return _.isFunction(a) ? this.each(function (b) {
                _(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = _.isFunction(a);
            return this.each(function (c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function (a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g,
        yb = /\[\]$/,
        zb = /\r?\n/g,
        Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function () {
            e(this.name, this.value)
        });
        else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function (a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cb = 0,
        Db = {}, Eb = {
            0: 200,
            1223: 204
        }, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Db) Db[a]()
    }), Y.cors = !! Fb && "withCredentials" in Fb, Y.ajax = Fb = !! Fb, _.ajaxTransport(function (a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(),
                    g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function () {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var Gb = [],
        Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function (a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        _.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function (a) {
        return _.grep(_.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function (e) {
            return qa(this, function (b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function (a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            _.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function (b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function () {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return _.noConflict = function (b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return !1
    }
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function (b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }
    function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function (b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            }, h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~ (1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click,
        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover%20requires%20tooltip.html");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }
    function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.5", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !! d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function (b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function () {
            var b, c;
            return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b
            })), b
        },
        removeAttrs: function (b) {
            var c = {}, d = this;
            return a.each(b.split(/\s/), function (a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        },
        rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case "add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case "remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                        i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                    }), i) : (delete e[j.name], f)
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                remote: h
            })), g
        }
    }), a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        },
        filled: function (b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function (b) {
                var c = this.clean(b),
                    d = this.validationTargetFor(c),
                    e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (a) {
                var b, c = 0;
                for (b in a) c++;
                return c
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function () {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },
            clean: function (b) {
                return a(b)[0]
            },
            errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function (b) {
                var c, d = a(b),
                    e = b.type;
                return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function (a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            },
            defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function (b, c) {
                var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },
            addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (b, c) {
                var d, e, f, g = this.errorsFor(b),
                    h = this.idOrName(b),
                    i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id"), i ? i.match(new RegExp("\b" + f + "\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
            },
            errorsFor: function (b) {
                var c = this.idOrName(b),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function (a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            },
            checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function (b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function (a) {
                    return a
                },
                string: function (b, c) {
                    return !!a(b, c.form).length
                },
                "function": function (a, b) {
                    return a(b)
                }
            },
            optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function (a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function (b) {
            var c, d, e = {}, f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !! d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {}, f = a(b);
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function (b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !! a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            },
            email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function (a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function (a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function (a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0,
                    f = 0,
                    g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                return e % 10 === 0
            },
            minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            },
            maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            },
            rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function (a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function (a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function (b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function (d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    }), a.format = function () {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a.extend(a.fn, {
        validateDelegate: function (b, c, d) {
            return this.bind(c, function (c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
}),
function (a) {
    "use strict";
    var b, c = function (a, b) {
        "undefined" == typeof b && (b = {}), this.init(a, b)
    }, d = c.prototype,
        e = ["canvas", "vml"],
        f = ["oval", "spiral", "square", "rect", "roundRect"],
        g = /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        h = -1 !== navigator.appVersion.indexOf("MSIE") && 8 === parseFloat(navigator.appVersion.split("MSIE")[1]) ? !0 : !1,
        i = !! document.createElement("canvas").getContext,
        j = 40,
        k = !0,
        l = function (a, b, c) {
            var d, e = document.createElement(a);
            for (d in c) e[d] = c[d];
            return "undefined" != typeof b && b.appendChild(e), e
        }, m = function (a, b) {
            for (var c in b) a.style[c] = b[c];
            return a
        }, n = function (a, b) {
            for (var c in b) a.setAttribute(c, b[c]);
            return a
        }, o = function (a, b, c, d) {
            a.save(), a.translate(b, c), a.rotate(d), a.translate(-b, -c), a.beginPath()
        };
    d.init = function (a, d) {
        "boolean" == typeof d.safeVML && (k = d.safeVML);
        try {
            void 0 !== document.getElementById(a) ? this.mum = document.getElementById(a) : this.mum = document.body
        } catch (f) {
            this.mum = document.body
        }
        if (d.id = "undefined" != typeof d.id ? d.id : "canvasLoader", this.cont = l("div", this.mum, {
            id: d.id
        }), i) b = e[0], this.can = l("canvas", this.cont), this.con = this.can.getContext("2d"), this.cCan = m(l("canvas", this.cont), {
            display: "none"
        }), this.cCon = this.cCan.getContext("2d");
        else {
            if (b = e[1], "undefined" == typeof c.vmlSheet) {
                document.getElementsByTagName("head")[0].appendChild(l("style")), c.vmlSheet = document.styleSheets[document.styleSheets.length - 1];
                var g, h = ["group", "oval", "roundrect", "fill"];
                for (g in h) c.vmlSheet.addRule(h[g], "behavior:url(#default#VML); position:absolute;")
            }
            this.vml = l("group", this.cont)
        }
        this.setColor(this.color), this.draw(), m(this.cont, {
            display: "none"
        })
    }, d.cont = {}, d.can = {}, d.con = {}, d.cCan = {}, d.cCon = {}, d.timer = {}, d.activeId = 0, d.diameter = 40, d.setDiameter = function (a) {
        this.diameter = Math.round(Math.abs(a)), this.redraw()
    }, d.getDiameter = function () {
        return this.diameter
    }, d.cRGB = {}, d.color = "#000000", d.setColor = function (a) {
        this.color = g.test(a) ? a : "#000000", this.cRGB = this.getRGB(this.color), this.redraw()
    }, d.getColor = function () {
        return this.color;
    }, d.shape = f[0], d.setShape = function (a) {
        var b;
        for (b in f) if (a === f[b]) {
            this.shape = a, this.redraw();
            break
        }
    }, d.getShape = function () {
        return this.shape
    }, d.density = 40, d.setDensity = function (a) {
        k && b === e[1] ? this.density = Math.round(Math.abs(a)) <= j ? Math.round(Math.abs(a)) : j : this.density = Math.round(Math.abs(a)), this.density > 360 && (this.density = 360), this.activeId = 0, this.redraw()
    }, d.getDensity = function () {
        return this.density
    }, d.range = 1.3, d.setRange = function (a) {
        this.range = Math.abs(a), this.redraw()
    }, d.getRange = function () {
        return this.range
    }, d.speed = 2, d.setSpeed = function (a) {
        this.speed = Math.round(Math.abs(a))
    }, d.getSpeed = function () {
        return this.speed
    }, d.fps = 24, d.setFPS = function (a) {
        this.fps = Math.round(Math.abs(a)), this.reset()
    }, d.getFPS = function () {
        return this.fps
    }, d.getRGB = function (a) {
        return a = "#" === a.charAt(0) ? a.substring(1, 7) : a, {
            r: parseInt(a.substring(0, 2), 16),
            g: parseInt(a.substring(2, 4), 16),
            b: parseInt(a.substring(4, 6), 16)
        }
    }, d.draw = function () {
        var a, c, d, g, i, j, k, p, q, r, s, t, u, v = 0,
            w = this.density,
            x = Math.round(w * this.range),
            y = 0,
            z = 1e3,
            A = 0,
            B = this.cCon,
            C = this.diameter,
            D = .47;
        if (b === e[0]) for (B.clearRect(0, 0, z, z), n(this.can, {
            width: C,
            height: C
        }), n(this.cCan, {
            width: C,
            height: C
        }); w > v;) {
            switch (q = x >= v ? 1 - (1 - y) / x * v : q = y, j = 270 - 360 / w * v, k = j / 180 * Math.PI, B.fillStyle = "rgba(" + this.cRGB.r + "," + this.cRGB.g + "," + this.cRGB.b + "," + q.toString() + ")", this.shape) {
                case f[0]:
                case f[1]:
                    a = .07 * C, g = C * D + Math.cos(k) * (C * D - a) - C * D, i = C * D + Math.sin(k) * (C * D - a) - C * D, B.beginPath(), this.shape === f[1] ? B.arc(.5 * C + g, .5 * C + i, a * q, 0, 2 * Math.PI, !1) : B.arc(.5 * C + g, .5 * C + i, a, 0, 2 * Math.PI, !1);
                    break;
                case f[2]:
                    a = .12 * C, g = Math.cos(k) * (C * D - a) + .5 * C, i = Math.sin(k) * (C * D - a) + .5 * C, o(B, g, i, k), B.fillRect(g, i - .5 * a, a, a);
                    break;
                case f[3]:
                case f[4]:
                    c = .3 * C, d = .27 * c, g = Math.cos(k) * (d + .13 * (C - d)) + .5 * C, i = Math.sin(k) * (d + .13 * (C - d)) + .5 * C, o(B, g, i, k), this.shape === f[3] ? B.fillRect(g, i - .5 * d, c, d) : (p = .55 * d, B.moveTo(g + p, i - .5 * d), B.lineTo(g + c - p, i - .5 * d), B.quadraticCurveTo(g + c, i - .5 * d, g + c, i - .5 * d + p), B.lineTo(g + c, i - .5 * d + d - p), B.quadraticCurveTo(g + c, i - .5 * d + d, g + c - p, i - .5 * d + d), B.lineTo(g + p, i - .5 * d + d), B.quadraticCurveTo(g, i - .5 * d + d, g, i - .5 * d + d - p), B.lineTo(g, i - .5 * d + p), B.quadraticCurveTo(g, i - .5 * d, g + p, i - .5 * d))
            }
            B.closePath(), B.fill(), B.restore(), ++v
        } else {
            switch (m(this.cont, {
                width: C,
                height: C
            }), m(this.vml, {
                width: C,
                height: C
            }), this.shape) {
                case f[0]:
                case f[1]:
                    t = "oval", a = .14 * z;
                    break;
                case f[2]:
                    t = "roundrect", a = .12 * z;
                    break;
                case f[3]:
                case f[4]:
                    t = "roundrect", a = .3 * z
            }
            for (c = d = a, g = .5 * z - d, i = .5 * -d; w > v;) {
                switch (q = x >= v ? 1 - (1 - y) / x * v : q = y, j = 270 - 360 / w * v, this.shape) {
                    case f[1]:
                        c = d = a * q, g = .5 * z - .5 * a - a * q * .5, i = .5 * (a - a * q);
                        break;
                    case f[0]:
                    case f[2]:
                        h && (i = 0, this.shape === f[2] && (g = .5 * z - .5 * d));
                        break;
                    case f[3]:
                    case f[4]:
                        c = .95 * a, d = .28 * c, h ? (g = 0, i = .5 * z - .5 * d) : (g = .5 * z - c, i = .5 * -d), A = this.shape === f[4] ? .6 : 0
                }
                s = n(m(l("group", this.vml), {
                    width: z,
                    height: z,
                    rotation: j
                }), {
                    coordsize: z + "," + z,
                    coordorigin: .5 * -z + "," + .5 * -z
                }), r = m(l(t, s, {
                    stroked: !1,
                    arcSize: A
                }), {
                    width: c,
                    height: d,
                    top: i,
                    left: g
                }), u = l("fill", r, {
                    color: this.color,
                    opacity: q
                }), ++v
            }
        }
        this.tick(!0)
    }, d.clean = function () {
        if (b === e[0]) this.con.clearRect(0, 0, 1e3, 1e3);
        else {
            var a = this.vml;
            if (a.hasChildNodes()) for (; a.childNodes.length >= 1;) a.removeChild(a.firstChild)
        }
    }, d.redraw = function () {
        this.clean(), this.draw()
    }, d.reset = function () {
        "number" == typeof this.timer && (this.hide(), this.show())
    }, d.tick = function (a) {
        var c = this.con,
            d = this.diameter;
        a || (this.activeId += 360 / this.density * this.speed), b === e[0] ? (c.clearRect(0, 0, d, d), o(c, .5 * d, .5 * d, this.activeId / 180 * Math.PI), c.drawImage(this.cCan, 0, 0, d, d), c.restore()) : (this.activeId >= 360 && (this.activeId -= 360), m(this.vml, {
            rotation: this.activeId
        }))
    }, d.show = function () {
        if ("number" != typeof this.timer) {
            var a = this;
            this.timer = self.setInterval(function () {
                a.tick()
            }, Math.round(1e3 / this.fps)), m(this.cont, {
                display: "block"
            })
        }
    }, d.hide = function () {
        "number" == typeof this.timer && (clearInterval(this.timer), delete this.timer, m(this.cont, {
            display: "none"
        }))
    }, d.kill = function () {
        var a = this.cont;
        "number" == typeof this.timer && this.hide(), b === e[0] ? (a.removeChild(this.can), a.removeChild(this.cCan)) : a.removeChild(this.vml);
        var c;
        for (c in this) delete this[c]
    }, a.CanvasLoader = c
}(window), ! function (a) {
    "use strict";
    a.extend({
        tablesorter: new function () {
            function b() {
                var a = arguments[0],
                    b = arguments.length > 1 ? Array.prototype.slice.call(arguments) : a;
                "undefined" != typeof console && "undefined" != typeof console.log ? console[/error/i.test(a) ? "error" : /warn/i.test(a) ? "warn" : "log"](b) : alert(b)
            }
            function c(a, c) {
                b(a + " (" + ((new Date).getTime() - c.getTime()) + "ms)")
            }
            function d(a) {
                for (var b in a) return !1;
                return !0
            }
            function e(b, c, d) {
                if (!c) return "";
                var e, f = b.config,
                    g = f.textExtraction || "",
                    h = "";
                return h = "basic" === g ? a(c).attr(f.textAttribute) || c.textContent || c.innerText || a(c).text() || "" : "function" == typeof g ? g(c, b, d) : "function" == typeof (e = w.getColumnData(b, g, d)) ? e(c, b, d) : c.textContent || c.innerText || a(c).text() || "", a.trim(h)
            }
            function f(c, d, f, g) {
                for (var h, i, j = w.parsers.length, k = !1, l = "", m = !0;
                "" === l && m;) f++, d[f] ? (k = d[f].cells[g], l = e(c, k, g), i = a(k), c.config.debug && b("Checking if value was empty on row " + f + ", column: " + g + ': "' + l + '"')) : m = !1;
                for (; --j >= 0;) if (h = w.parsers[j], h && "text" !== h.id && h.is && h.is(l, c, k, i)) return h;
                return w.getParserById("text")
            }
            function g(a) {
                var d, e, g, h, i, j, k, l, m, n, o = a.config,
                    p = o.$tbodies = o.$table.children("tbody:not(." + o.cssInfoBlock + ")"),
                    q = 0,
                    r = "",
                    s = p.length;
                if (0 === s) return o.debug ? b("Warning: *Empty table!* Not building a parser cache") : "";
                for (o.debug && (n = new Date, b("Detecting parsers for each column")), e = {
                    extractors: [],
                    parsers: []
                }; s > q;) {
                    if (d = p[q].rows, d[q]) for (g = o.columns, h = 0; g > h; h++) i = o.$headers.filter('[data-column="' + h + '"]:last'), j = w.getColumnData(a, o.headers, h), m = w.getParserById(w.getData(i, j, "extractor")), l = w.getParserById(w.getData(i, j, "sorter")), k = "false" === w.getData(i, j, "parser"), o.empties[h] = (w.getData(i, j, "empty") || o.emptyTo || (o.emptyToBottom ? "bottom" : "top")).toLowerCase(), o.strings[h] = (w.getData(i, j, "string") || o.stringTo || "max").toLowerCase(), k && (l = w.getParserById("no-parser")), m || (m = !1), l || (l = f(a, d, -1, h)), o.debug && (r += "column:" + h + "; extractor:" + m.id + "; parser:" + l.id + "; string:" + o.strings[h] + "; empty: " + o.empties[h] + "\n"), e.parsers[h] = l, e.extractors[h] = m;
                    q += e.parsers.length ? s : 1
                }
                o.debug && (b(r ? r : "No parsers detected"), c("Completed detecting parsers", n)), o.parsers = e.parsers, o.extractors = e.extractors
            }
            function h(d) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = d.config,
                    u = t.$table.children("tbody"),
                    v = t.extractors,
                    x = t.parsers;
                if (t.cache = {}, t.totalRows = 0, !x) return t.debug ? b("Warning: *Empty table!* Not building a cache") : "";
                for (t.debug && (p = new Date), t.showProcessing && w.isProcessing(d, !0), l = 0; l < u.length; l++) if (s = [], f = t.cache[l] = {
                    normalized: []
                }, !u.eq(l).hasClass(t.cssInfoBlock)) {
                    for (q = u[l] && u[l].rows.length || 0, j = 0; q > j; ++j) if (r = {
                        child: []
                    }, m = a(u[l].rows[j]), n = [new Array(t.columns)], o = [], m.hasClass(t.cssChildRow) && 0 !== j) g = f.normalized.length - 1, f.normalized[g][t.columns].$row = f.normalized[g][t.columns].$row.add(m), m.prev().hasClass(t.cssChildRow) || m.prev().addClass(w.css.cssHasChild), r.child[g] = a.trim(m[0].textContent || m[0].innerText || m.text() || "");
                    else {
                        for (r.$row = m, r.order = j, k = 0; k < t.columns; ++k) "undefined" != typeof x[k] ? (g = e(d, m[0].cells[k], k), h = "undefined" == typeof v[k].id ? g : v[k].format(g, d, m[0].cells[k], k), i = "no-parser" === x[k].id ? "" : x[k].format(h, d, m[0].cells[k], k), o.push(t.ignoreCase && "string" == typeof i ? i.toLowerCase() : i), "numeric" === (x[k].type || "").toLowerCase() && (s[k] = Math.max(Math.abs(i) || 0, s[k] || 0))) : t.debug && b("No parser found for cell:", m[0].cells[k], "does it have a header?");
                        o[t.columns] = r, f.normalized.push(o)
                    }
                    f.colMax = s, t.totalRows += f.normalized.length
                }
                t.showProcessing && w.isProcessing(d), t.debug && c("Building cache for " + q + " rows", p)
            }
            function i(b, e) {
                var f, g, h, i, j, k, l, m = b.config,
                    n = m.widgetOptions,
                    o = b.tBodies,
                    p = [],
                    q = m.cache;
                if (d(q)) return m.appender ? m.appender(b, p) : b.isUpdating ? m.$table.trigger("updateComplete", b) : "";
                for (m.debug && (l = new Date), k = 0; k < o.length; k++) if (h = a(o[k]), h.length && !h.hasClass(m.cssInfoBlock)) {
                    for (i = w.processTbody(b, h, !0), f = q[k].normalized, g = f.length, j = 0; g > j; j++) p.push(f[j][m.columns].$row), m.appender && (!m.pager || m.pager.removeRows && n.pager_removeRows || m.pager.ajax) || i.append(f[j][m.columns].$row);
                    w.processTbody(b, i, !1)
                }
                m.appender && m.appender(b, p), m.debug && c("Rebuilt table", l), e || m.appender || w.applyWidget(b), b.isUpdating && m.$table.trigger("updateComplete", b)
            }
            function j(a) {
                return /^d/i.test(a) || 1 === a
            }
            function k(d) {
                var e, f, g, h, i, k, l, n = d.config;
                n.headerList = [], n.headerContent = [], n.debug && (l = new Date), n.columns = w.computeColumnIndex(n.$table.children("thead, tfoot").children("tr")), h = n.cssIcon ? '<i class="' + (n.cssIcon === w.css.icon ? w.css.icon : n.cssIcon + " " + w.css.icon) + '"></i>' : "", n.$headers = a(a.map(a(d).find(n.selectorHeaders), function (b, c) {
                    return f = a(b), f.parent().hasClass(n.cssIgnoreRow) ? void 0 : (e = w.getColumnData(d, n.headers, c, !0), n.headerContent[c] = f.html(), "" !== n.headerTemplate && (i = n.headerTemplate.replace(/\{content\}/g, f.html()).replace(/\{icon\}/g, h), n.onRenderTemplate && (g = n.onRenderTemplate.apply(f, [c, i]), g && "string" == typeof g && (i = g)), f.html('<div class="' + w.css.headerIn + '">' + i + "</div>")), n.onRenderHeader && n.onRenderHeader.apply(f, [c, n, n.$table]), b.column = parseInt(f.attr("data-column"), 10), b.order = j(w.getData(f, e, "sortInitialOrder") || n.sortInitialOrder) ? [1, 0, 2] : [0, 1, 2], b.count = -1, b.lockedOrder = !1, k = w.getData(f, e, "lockedOrder") || !1, "undefined" != typeof k && k !== !1 && (b.order = b.lockedOrder = j(k) ? [1, 1, 1] : [0, 0, 0]), f.addClass(w.css.header + " " + n.cssHeader), n.headerList[c] = b, f.parent().addClass(w.css.headerRow + " " + n.cssHeaderRow).attr("role", "row"), n.tabIndex && f.attr("tabindex", 0), b)
                })), a(d).find(n.selectorHeaders).attr({
                    scope: "col",
                    role: "columnheader"
                }), m(d), n.debug && (c("Built headers:", l), b(n.$headers))
            }
            function l(a, b, c) {
                var d = a.config;
                d.$table.find(d.selectorRemove).remove(), g(a), h(a), u(d.$table, b, c)
            }
            function m(b) {
                var c, d, e, f = b.config;
                f.$headers.each(function (g, h) {
                    d = a(h), e = w.getColumnData(b, f.headers, g, !0), c = "false" === w.getData(h, e, "sorter") || "false" === w.getData(h, e, "parser"), h.sortDisabled = c, d[c ? "addClass" : "removeClass"]("sorter-false").attr("aria-disabled", "" + c), b.id && (c ? d.removeAttr("aria-controls") : d.attr("aria-controls", b.id))
                })
            }
            function n(b) {
                var c, d, e, f = b.config,
                    g = f.sortList,
                    h = g.length,
                    i = w.css.sortNone + " " + f.cssNone,
                    j = [w.css.sortAsc + " " + f.cssAsc, w.css.sortDesc + " " + f.cssDesc],
                    k = [f.cssIconAsc, f.cssIconDesc, f.cssIconNone],
                    l = ["ascending", "descending"],
                    m = a(b).find("tfoot tr").children().add(f.$extraHeaders).removeClass(j.join(" "));
                for (f.$headers.removeClass(j.join(" ")).addClass(i).attr("aria-sort", "none").find("." + f.cssIcon).removeClass(k.join(" ")).addClass(k[2]), d = 0; h > d; d++) if (2 !== g[d][1] && (c = f.$headers.not(".sorter-false").filter('[data-column="' + g[d][0] + '"]' + (1 === h ? ":last" : "")), c.length)) {
                    for (e = 0; e < c.length; e++) c[e].sortDisabled || c.eq(e).removeClass(i).addClass(j[g[d][1]]).attr("aria-sort", l[g[d][1]]).find("." + f.cssIcon).removeClass(k[2]).addClass(k[g[d][1]]);
                    m.length && m.filter('[data-column="' + g[d][0] + '"]').removeClass(i).addClass(j[g[d][1]])
                }
                f.$headers.not(".sorter-false").each(function () {
                    var b = a(this),
                        c = this.order[(this.count + 1) % (f.sortReset ? 3 : 2)],
                        d = b.text() + ": " + w.language[b.hasClass(w.css.sortAsc) ? "sortAsc" : b.hasClass(w.css.sortDesc) ? "sortDesc" : "sortNone"] + w.language[0 === c ? "nextAsc" : 1 === c ? "nextDesc" : "nextNone"];
                    b.attr("aria-label", d)
                })
            }
            function o(b) {
                var c, d, e = b.config;
                e.widthFixed && 0 === e.$table.children("colgroup").length && (c = a("<colgroup>"), d = a(b).width(), a(b.tBodies).not("." + e.cssInfoBlock).find("tr:first").children(":visible").each(function () {
                    c.append(a("<col>").css("width", parseInt(a(this).width() / d * 1e3, 10) / 10 + "%"))
                }), e.$table.prepend(c))
            }
            function p(b, c) {
                var d, e, f, g, h, i = b.config,
                    j = c || i.sortList;
                i.sortList = [], a.each(j, function (b, c) {
                    if (g = parseInt(c[0], 10), f = i.$headers.filter('[data-column="' + g + '"]:last')[0]) {
                        switch (e = ("" + c[1]).match(/^(1|d|s|o|n)/), e = e ? e[0] : "") {
                            case "1":
                            case "d":
                                e = 1;
                                break;
                            case "s":
                                e = h || 0;
                                break;
                            case "o":
                                d = f.order[(h || 0) % (i.sortReset ? 3 : 2)], e = 0 === d ? 1 : 1 === d ? 0 : 2;
                                break;
                            case "n":
                                f.count = f.count + 1, e = f.order[f.count % (i.sortReset ? 3 : 2)];
                                break;
                            default:
                                e = 0
                        }
                        h = 0 === b ? e : h, d = [g, parseInt(e, 10) || 0], i.sortList.push(d), e = a.inArray(d[1], f.order), f.count = e >= 0 ? e : d[1] % (i.sortReset ? 3 : 2)
                    }
                })
            }
            function q(a, b) {
                return a && a[b] ? a[b].type || "" : ""
            }
            function r(b, c, d) {
                if (b.isUpdating) return setTimeout(function () {
                    r(b, c, d)
                }, 50);
                var e, f, g, h, j, k = b.config,
                    l = !d[k.sortMultiSortKey],
                    m = k.$table;
                if (m.trigger("sortStart", b), c.count = d[k.sortResetKey] ? 2 : (c.count + 1) % (k.sortReset ? 3 : 2), k.sortRestart && (f = c, k.$headers.each(function () {
                    this === f || !l && a(this).is("." + w.css.sortDesc + ",." + w.css.sortAsc) || (this.count = -1)
                })), f = parseInt(a(c).attr("data-column"), 10), l) {
                    if (k.sortList = [], null !== k.sortForce) for (e = k.sortForce, g = 0; g < e.length; g++) e[g][0] !== f && k.sortList.push(e[g]);
                    if (h = c.order[c.count], 2 > h && (k.sortList.push([f, h]), c.colSpan > 1)) for (g = 1; g < c.colSpan; g++) k.sortList.push([f + g, h])
                } else {
                    if (k.sortAppend && k.sortList.length > 1) for (g = 0; g < k.sortAppend.length; g++) j = w.isValueInArray(k.sortAppend[g][0], k.sortList), j >= 0 && k.sortList.splice(j, 1);
                    if (w.isValueInArray(f, k.sortList) >= 0) for (g = 0; g < k.sortList.length; g++) j = k.sortList[g], h = k.$headers.filter('[data-column="' + j[0] + '"]:last')[0], j[0] === f && (j[1] = h.order[c.count], 2 === j[1] && (k.sortList.splice(g, 1), h.count = -1));
                    else if (h = c.order[c.count], 2 > h && (k.sortList.push([f, h]), c.colSpan > 1)) for (g = 1; g < c.colSpan; g++) k.sortList.push([f + g, h])
                }
                if (null !== k.sortAppend) for (e = k.sortAppend, g = 0; g < e.length; g++) e[g][0] !== f && k.sortList.push(e[g]);
                m.trigger("sortBegin", b), setTimeout(function () {
                    n(b), s(b), i(b), m.trigger("sortEnd", b)
                }, 1)
            }
            function s(a) {
                var b, e, f, g, h, i, j, k, l, m, n, o = 0,
                    p = a.config,
                    r = p.textSorter || "",
                    s = p.sortList,
                    t = s.length,
                    u = a.tBodies.length;
                if (!p.serverSideSorting && !d(p.cache)) {
                    for (p.debug && (h = new Date), e = 0; u > e; e++) i = p.cache[e].colMax, j = p.cache[e].normalized, j.sort(function (c, d) {
                        for (b = 0; t > b; b++) {
                            if (g = s[b][0], k = s[b][1], o = 0 === k, p.sortStable && c[g] === d[g] && 1 === t) return c[p.columns].order - d[p.columns].order;
                            if (f = /n/i.test(q(p.parsers, g)), f && p.strings[g] ? (f = "boolean" == typeof p.string[p.strings[g]] ? (o ? 1 : -1) * (p.string[p.strings[g]] ? -1 : 1) : p.strings[g] ? p.string[p.strings[g]] || 0 : 0, l = p.numberSorter ? p.numberSorter(c[g], d[g], o, i[g], a) : w["sortNumeric" + (o ? "Asc" : "Desc")](c[g], d[g], f, i[g], g, a)) : (m = o ? c : d, n = o ? d : c, l = "function" == typeof r ? r(m[g], n[g], o, g, a) : "object" == typeof r && r.hasOwnProperty(g) ? r[g](m[g], n[g], o, g, a) : w["sortNatural" + (o ? "Asc" : "Desc")](c[g], d[g], g, a, p)), l) return l
                        }
                        return c[p.columns].order - d[p.columns].order
                    });
                    p.debug && c("Sorting on " + s.toString() + " and dir " + k + " time", h)
                }
            }
            function t(b, c) {
                var d = b[0];
                d.isUpdating && b.trigger("updateComplete", d), a.isFunction(c) && c(b[0])
            }
            function u(a, b, c) {
                var d = a[0].config.sortList;
                b !== !1 && !a[0].isProcessing && d.length ? a.trigger("sorton", [d, function () {
                    t(a, c)
                }, !0]) : (t(a, c), w.applyWidget(a[0], !1))
            }
            function v(b) {
                var c = b.config,
                    f = c.$table;
                f.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(c.namespace + " ")).bind("sortReset" + c.namespace, function (d, e) {
                    d.stopPropagation(), c.sortList = [], n(b), s(b), i(b), a.isFunction(e) && e(b)
                }).bind("updateAll" + c.namespace, function (a, d, e) {
                    a.stopPropagation(), b.isUpdating = !0, w.refreshWidgets(b, !0, !0), w.restoreHeaders(b), k(b), w.bindEvents(b, c.$headers, !0), v(b), l(b, d, e)
                }).bind("update" + c.namespace + " updateRows" + c.namespace, function (a, c, d) {
                    a.stopPropagation(), b.isUpdating = !0, m(b), l(b, c, d)
                }).bind("updateCell" + c.namespace, function (d, g, h, i) {
                    d.stopPropagation(), b.isUpdating = !0, f.find(c.selectorRemove).remove();
                    var j, k, l, m, n = f.find("tbody"),
                        o = a(g),
                        p = n.index(a.fn.closest ? o.closest("tbody") : o.parents("tbody").filter(":first")),
                        q = a.fn.closest ? o.closest("tr") : o.parents("tr").filter(":first");
                    g = o[0], n.length && p >= 0 && (l = n.eq(p).find("tr").index(q), m = o.index(), c.cache[p].normalized[l][c.columns].$row = q, k = "undefined" == typeof c.extractors[m].id ? e(b, g, m) : c.extractors[m].format(e(b, g, m), b, g, m), j = "no-parser" === c.parsers[m].id ? "" : c.parsers[m].format(k, b, g, m), c.cache[p].normalized[l][m] = c.ignoreCase && "string" == typeof j ? j.toLowerCase() : j, "numeric" === (c.parsers[m].type || "").toLowerCase() && (c.cache[p].colMax[m] = Math.max(Math.abs(j) || 0, c.cache[p].colMax[m] || 0)), u(f, h, i))
                }).bind("addRows" + c.namespace, function (h, i, j, k) {
                    if (h.stopPropagation(), b.isUpdating = !0, d(c.cache)) m(b), l(b, j, k);
                    else {
                        i = a(i).attr("role", "row");
                        var n, o, p, q, r, s, t, v = i.filter("tr").length,
                            w = f.find("tbody").index(i.parents("tbody").filter(":first"));
                        for (c.parsers && c.parsers.length || g(b), n = 0; v > n; n++) {
                            for (p = i[n].cells.length, t = [], s = {
                                child: [],
                                $row: i.eq(n),
                                order: c.cache[w].normalized.length
                            }, o = 0; p > o; o++) q = "undefined" == typeof c.extractors[o].id ? e(b, i[n].cells[o], o) : c.extractors[o].format(e(b, i[n].cells[o], o), b, i[n].cells[o], o), r = "no-parser" === c.parsers[o].id ? "" : c.parsers[o].format(q, b, i[n].cells[o], o), t[o] = c.ignoreCase && "string" == typeof r ? r.toLowerCase() : r, "numeric" === (c.parsers[o].type || "").toLowerCase() && (c.cache[w].colMax[o] = Math.max(Math.abs(t[o]) || 0, c.cache[w].colMax[o] || 0));
                            t.push(s), c.cache[w].normalized.push(t)
                        }
                        u(f, j, k)
                    }
                }).bind("updateComplete" + c.namespace, function () {
                    b.isUpdating = !1
                }).bind("sorton" + c.namespace, function (c, e, g, j) {
                    var k = b.config;
                    c.stopPropagation(), f.trigger("sortStart", this), p(b, e), n(b), k.delayInit && d(k.cache) && h(b), f.trigger("sortBegin", this), s(b), i(b, j), f.trigger("sortEnd", this), w.applyWidget(b), a.isFunction(g) && g(b)
                }).bind("appendCache" + c.namespace, function (c, d, e) {
                    c.stopPropagation(), i(b, e), a.isFunction(d) && d(b)
                }).bind("updateCache" + c.namespace, function (d, e) {
                    c.parsers && c.parsers.length || g(b), h(b), a.isFunction(e) && e(b)
                }).bind("applyWidgetId" + c.namespace, function (a, d) {
                    a.stopPropagation(), w.getWidgetById(d).format(b, c, c.widgetOptions)
                }).bind("applyWidgets" + c.namespace, function (a, c) {
                    a.stopPropagation(), w.applyWidget(b, c)
                }).bind("refreshWidgets" + c.namespace, function (a, c, d) {
                    a.stopPropagation(), w.refreshWidgets(b, c, d)
                }).bind("destroy" + c.namespace, function (a, c, d) {
                    a.stopPropagation(), w.destroy(b, c, d)
                }).bind("resetToLoadState" + c.namespace, function () {
                    w.refreshWidgets(b, !0, !0), c = a.extend(!0, w.defaults, c.originalSettings), b.hasInitialized = !1, w.setup(b, c)
                })
            }
            var w = this;
            w.version = "2.18.4", w.parsers = [], w.widgets = [], w.defaults = {
                theme: "default",
                widthFixed: !1,
                showProcessing: !1,
                headerTemplate: "{content}",
                onRenderTemplate: null,
                onRenderHeader: null,
                cancelSelection: !0,
                tabIndex: !0,
                dateFormat: "mmddyyyy",
                sortMultiSortKey: "shiftKey",
                sortResetKey: "ctrlKey",
                usNumberFormat: !0,
                delayInit: !1,
                serverSideSorting: !1,
                headers: {},
                ignoreCase: !0,
                sortForce: null,
                sortList: [],
                sortAppend: null,
                sortStable: !1,
                sortInitialOrder: "asc",
                sortLocaleCompare: !1,
                sortReset: !1,
                sortRestart: !1,
                emptyTo: "bottom",
                stringTo: "max",
                textExtraction: "basic",
                textAttribute: "data-text",
                textSorter: null,
                numberSorter: null,
                widgets: [],
                widgetOptions: {
                    zebra: ["even", "odd"]
                },
                initWidgets: !0,
                widgetClass: "widget-{name}",
                initialized: null,
                tableClass: "",
                cssAsc: "",
                cssDesc: "",
                cssNone: "",
                cssHeader: "",
                cssHeaderRow: "",
                cssProcessing: "",
                cssChildRow: "tablesorter-childRow",
                cssIcon: "tablesorter-icon",
                cssIconNone: "",
                cssIconAsc: "",
                cssIconDesc: "",
                cssInfoBlock: "tablesorter-infoOnly",
                cssAllowClicks: "tablesorter-allowClicks",
                cssIgnoreRow: "tablesorter-ignoreRow",
                selectorHeaders: "> thead th, > thead td",
                selectorSort: "th, td",
                selectorRemove: ".remove-me",
                debug: !1,
                headerList: [],
                empties: {},
                strings: {},
                parsers: []
            }, w.css = {
                table: "tablesorter",
                cssHasChild: "tablesorter-hasChildRow",
                childRow: "tablesorter-childRow",
                header: "tablesorter-header",
                headerRow: "tablesorter-headerRow",
                headerIn: "tablesorter-header-inner",
                icon: "tablesorter-icon",
                info: "tablesorter-infoOnly",
                processing: "tablesorter-processing",
                sortAsc: "tablesorter-headerAsc",
                sortDesc: "tablesorter-headerDesc",
                sortNone: "tablesorter-headerUnSorted"
            }, w.language = {
                sortAsc: "Ascending sort applied, ",
                sortDesc: "Descending sort applied, ",
                sortNone: "No sort applied, ",
                nextAsc: "activate to apply an ascending sort",
                nextDesc: "activate to apply a descending sort",
                nextNone: "activate to remove the sort"
            }, w.log = b, w.benchmark = c, w.construct = function (b) {
                return this.each(function () {
                    var c = this,
                        d = a.extend(!0, {}, w.defaults, b);
                    d.originalSettings = b, !c.hasInitialized && w.buildTable && "TABLE" !== this.tagName ? w.buildTable(c, d) : w.setup(c, d)
                })
            }, w.setup = function (c, d) {
                if (!c || !c.tHead || 0 === c.tBodies.length || c.hasInitialized === !0) return d.debug ? b("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized") : "";
                var e = "",
                    f = a(c),
                    i = a.metadata;
                c.hasInitialized = !1, c.isProcessing = !0, c.config = d, a.data(c, "tablesorter", d), d.debug && a.data(c, "startoveralltimer", new Date), d.supportsDataObject = function (a) {
                    return a[0] = parseInt(a[0], 10), a[0] > 1 || 1 === a[0] && parseInt(a[1], 10) >= 4
                }(a.fn.jquery.split(".")), d.string = {
                    max: 1,
                    min: -1,
                    emptymin: 1,
                    emptymax: -1,
                    zero: 0,
                    none: 0,
                    "null": 0,
                    top: !0,
                    bottom: !1
                }, d.emptyTo = d.emptyTo.toLowerCase(), d.stringTo = d.stringTo.toLowerCase(), /tablesorter\-/.test(f.attr("class")) || (e = "" !== d.theme ? " tablesorter-" + d.theme : ""), d.table = c, d.$table = f.addClass(w.css.table + " " + d.tableClass + e).attr("role", "grid"), d.$headers = f.find(d.selectorHeaders), d.namespace ? d.namespace = "." + d.namespace.replace(/\W/g, "") : d.namespace = ".tablesorter" + Math.random().toString(16).slice(2), d.$table.children().children("tr").attr("role", "row"), d.$tbodies = f.children("tbody:not(." + d.cssInfoBlock + ")").attr({
                    "aria-live": "polite",
                    "aria-relevant": "all"
                }), d.$table.children("caption").length && (e = d.$table.children("caption")[0], e.id || (e.id = d.namespace.slice(1) + "caption"), d.$table.attr("aria-labelledby", e.id)), d.widgetInit = {}, d.textExtraction = d.$table.attr("data-text-extraction") || d.textExtraction || "basic", k(c), o(c), g(c), d.totalRows = 0, d.delayInit || h(c), w.bindEvents(c, d.$headers, !0), v(c), d.supportsDataObject && "undefined" != typeof f.data().sortlist ? d.sortList = f.data().sortlist : i && f.metadata() && f.metadata().sortlist && (d.sortList = f.metadata().sortlist), w.applyWidget(c, !0), d.sortList.length > 0 ? f.trigger("sorton", [d.sortList, {}, !d.initWidgets, !0]) : (n(c), d.initWidgets && w.applyWidget(c, !1)), d.showProcessing && f.unbind("sortBegin" + d.namespace + " sortEnd" + d.namespace).bind("sortBegin" + d.namespace + " sortEnd" + d.namespace, function (a) {
                    clearTimeout(d.processTimer), w.isProcessing(c), "sortBegin" === a.type && (d.processTimer = setTimeout(function () {
                        w.isProcessing(c, !0)
                    }, 500))
                }), c.hasInitialized = !0, c.isProcessing = !1, d.debug && w.benchmark("Overall initialization time", a.data(c, "startoveralltimer")), f.trigger("tablesorter-initialized", c), "function" == typeof d.initialized && d.initialized(c)
            }, w.getColumnData = function (b, c, d, e, f) {
                if ("undefined" != typeof c && null !== c) {
                    b = a(b)[0];
                    var g, h, i = b.config,
                        j = f || i.$headers;
                    if (c[d]) return e ? c[d] : c[j.index(j.filter('[data-column="' + d + '"]:last'))];
                    for (h in c) if ("string" == typeof h && (g = j.filter('[data-column="' + d + '"]:last').filter(h).add(j.filter('[data-column="' + d + '"]:last').find(h)), g.length)) return c[h]
                }
            }, w.computeColumnIndex = function (b) {
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p = [],
                    q = {}, r = 0;
                for (c = 0; c < b.length; c++) for (i = b[c].cells, d = 0; d < i.length; d++) {
                    for (h = i[d], g = a(h), j = h.parentNode.rowIndex, k = j + "-" + g.index(), l = h.rowSpan || 1, m = h.colSpan || 1, "undefined" == typeof p[j] && (p[j] = []), e = 0; e < p[j].length + 1; e++) if ("undefined" == typeof p[j][e]) {
                        n = e;
                        break
                    }
                    for (q[k] = n, r = Math.max(n, r), g.attr({
                        "data-column": n
                    }), e = j; j + l > e; e++) for ("undefined" == typeof p[e] && (p[e] = []), o = p[e], f = n; n + m > f; f++) o[f] = "x"
                }
                return r + 1
            }, w.isProcessing = function (b, c, d) {
                b = a(b);
                var e = b[0].config,
                    f = d || b.find("." + w.css.header);
                c ? ("undefined" != typeof d && e.sortList.length > 0 && (f = f.filter(function () {
                    return this.sortDisabled ? !1 : w.isValueInArray(parseFloat(a(this).attr("data-column")), e.sortList) >= 0
                })), b.add(f).addClass(w.css.processing + " " + e.cssProcessing)) : b.add(f).removeClass(w.css.processing + " " + e.cssProcessing)
            }, w.processTbody = function (b, c, d) {
                b = a(b)[0];
                var e;
                return d ? (b.isProcessing = !0, c.before('<span class="tablesorter-savemyplace"/>'), e = a.fn.detach ? c.detach() : c.remove()) : (e = a(b).find("span.tablesorter-savemyplace"), c.insertAfter(e), e.remove(), void(b.isProcessing = !1))
            }, w.clearTableBody = function (b) {
                a(b)[0].config.$tbodies.children().detach()
            }, w.bindEvents = function (b, c, e) {
                b = a(b)[0];
                var f, g = b.config;
                e !== !0 && (g.$extraHeaders = g.$extraHeaders ? g.$extraHeaders.add(c) : c), c.find(g.selectorSort).add(c.filter(g.selectorSort)).unbind("mousedown mouseup sort keyup ".split(" ").join(g.namespace + " ")).bind("mousedown mouseup sort keyup ".split(" ").join(g.namespace + " "), function (e, i) {
                    var j, k = e.type;
                    if (!(1 !== (e.which || e.button) && !/sort|keyup/.test(k) || "keyup" === k && 13 !== e.which || "mouseup" === k && i !== !0 && (new Date).getTime() - f > 250)) {
                        if ("mousedown" === k) return f = (new Date).getTime(), /(input|select|button|textarea)/i.test(e.target.tagName) || a(e.target).closest("td,th").hasClass(g.cssAllowClicks) ? "" : !g.cancelSelection;
                        g.delayInit && d(g.cache) && h(b), j = a.fn.closest ? a(this).closest("th, td")[0] : /TH|TD/.test(this.tagName) ? this : a(this).parents("th, td")[0], j = g.$headers[c.index(j)], j.sortDisabled || r(b, j, e)
                    }
                }), g.cancelSelection && c.attr("unselectable", "on").bind("selectstart", !1).css({
                    "user-select": "none",
                    MozUserSelect: "none"
                })
            }, w.restoreHeaders = function (b) {
                var c = a(b)[0].config;
                c.$table.find(c.selectorHeaders).each(function (b) {
                    a(this).find("." + w.css.headerIn).length && a(this).html(c.headerContent[b])
                })
            }, w.destroy = function (b, c, d) {
                if (b = a(b)[0], b.hasInitialized) {
                    w.refreshWidgets(b, !0, !0);
                    var e = a(b),
                        f = b.config,
                        g = e.find("thead:first"),
                        h = g.find("tr." + w.css.headerRow).removeClass(w.css.headerRow + " " + f.cssHeaderRow),
                        i = e.find("tfoot:first > tr").children("th, td");
                    c === !1 && a.inArray("uitheme", f.widgets) >= 0 && (e.trigger("applyWidgetId", ["uitheme"]), e.trigger("applyWidgetId", ["zebra"])), g.find("tr").not(h).remove(), e.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState ".split(" ").join(f.namespace + " ")), f.$headers.add(i).removeClass([w.css.header, f.cssHeader, f.cssAsc, f.cssDesc, w.css.sortAsc, w.css.sortDesc, w.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled", "true"), h.find(f.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(f.namespace + " ")), w.restoreHeaders(b), e.toggleClass(w.css.table + " " + f.tableClass + " tablesorter-" + f.theme, c === !1), b.hasInitialized = !1, delete b.config.cache, "function" == typeof d && d(b)
                }
            }, w.regex = {
                chunk: /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                chunks: /(^\\0|\\0$)/,
                hex: /^0x[0-9a-f]+$/i
            }, w.sortNatural = function (a, b) {
                if (a === b) return 0;
                var c, d, e, f, g, h, i, j, k = w.regex;
                if (k.hex.test(b)) {
                    if (d = parseInt(a.match(k.hex), 16), f = parseInt(b.match(k.hex), 16), f > d) return -1;
                    if (d > f) return 1
                }
                for (c = a.replace(k.chunk, "\\0$1\\0").replace(k.chunks, "").split("\\0"), e = b.replace(k.chunk, "\\0$1\\0").replace(k.chunks, "").split("\\0"), j = Math.max(c.length, e.length), i = 0; j > i; i++) {
                    if (g = isNaN(c[i]) ? c[i] || 0 : parseFloat(c[i]) || 0, h = isNaN(e[i]) ? e[i] || 0 : parseFloat(e[i]) || 0, isNaN(g) !== isNaN(h)) return isNaN(g) ? 1 : -1;
                    if (typeof g != typeof h && (g += "", h += ""), h > g) return -1;
                    if (g > h) return 1
                }
                return 0
            }, w.sortNaturalAsc = function (a, b, c, d, e) {
                if (a === b) return 0;
                var f = e.string[e.empties[c] || e.emptyTo];
                return "" === a && 0 !== f ? "boolean" == typeof f ? f ? -1 : 1 : -f || -1 : "" === b && 0 !== f ? "boolean" == typeof f ? f ? 1 : -1 : f || 1 : w.sortNatural(a, b)
            }, w.sortNaturalDesc = function (a, b, c, d, e) {
                if (a === b) return 0;
                var f = e.string[e.empties[c] || e.emptyTo];
                return "" === a && 0 !== f ? "boolean" == typeof f ? f ? -1 : 1 : f || 1 : "" === b && 0 !== f ? "boolean" == typeof f ? f ? 1 : -1 : -f || -1 : w.sortNatural(b, a)
            }, w.sortText = function (a, b) {
                return a > b ? 1 : b > a ? -1 : 0
            }, w.getTextValue = function (a, b, c) {
                if (c) {
                    var d, e = a ? a.length : 0,
                        f = c + b;
                    for (d = 0; e > d; d++) f += a.charCodeAt(d);
                    return b * f
                }
                return 0
            }, w.sortNumericAsc = function (a, b, c, d, e, f) {
                if (a === b) return 0;
                var g = f.config,
                    h = g.string[g.empties[e] || g.emptyTo];
                return "" === a && 0 !== h ? "boolean" == typeof h ? h ? -1 : 1 : -h || -1 : "" === b && 0 !== h ? "boolean" == typeof h ? h ? 1 : -1 : h || 1 : (isNaN(a) && (a = w.getTextValue(a, c, d)), isNaN(b) && (b = w.getTextValue(b, c, d)), a - b)
            }, w.sortNumericDesc = function (a, b, c, d, e, f) {
                if (a === b) return 0;
                var g = f.config,
                    h = g.string[g.empties[e] || g.emptyTo];
                return "" === a && 0 !== h ? "boolean" == typeof h ? h ? -1 : 1 : h || 1 : "" === b && 0 !== h ? "boolean" == typeof h ? h ? 1 : -1 : -h || -1 : (isNaN(a) && (a = w.getTextValue(a, c, d)), isNaN(b) && (b = w.getTextValue(b, c, d)), b - a)
            }, w.sortNumeric = function (a, b) {
                return a - b
            }, w.characterEquivalents = {
                a: "áàâãäąå",
                A: "ÁÀÂÃÄĄÅ",
                c: "çćč",
                C: "ÇĆČ",
                e: "éèêëěę",
                E: "ÉÈÊËĚĘ",
                i: "íìİîïı",
                I: "ÍÌİÎÏ",
                o: "óòôõö",
                O: "ÓÒÔÕÖ",
                ss: "ß",
                SS: "ẞ",
                u: "úùûüů",
                U: "ÚÙÛÜŮ"
            }, w.replaceAccents = function (a) {
                var b, c = "[",
                    d = w.characterEquivalents;
                if (!w.characterRegex) {
                    w.characterRegexArray = {};
                    for (b in d) "string" == typeof b && (c += d[b], w.characterRegexArray[b] = new RegExp("[" + d[b] + "]", "g"));
                    w.characterRegex = new RegExp(c + "]")
                }
                if (w.characterRegex.test(a)) for (b in d) "string" == typeof b && (a = a.replace(w.characterRegexArray[b], b));
                return a
            }, w.isValueInArray = function (a, b) {
                var c, d = b.length;
                for (c = 0; d > c; c++) if (b[c][0] === a) return c;
                return -1
            }, w.addParser = function (a) {
                var b, c = w.parsers.length,
                    d = !0;
                for (b = 0; c > b; b++) w.parsers[b].id.toLowerCase() === a.id.toLowerCase() && (d = !1);
                d && w.parsers.push(a)
            }, w.getParserById = function (a) {
                if ("false" == a) return !1;
                var b, c = w.parsers.length;
                for (b = 0; c > b; b++) if (w.parsers[b].id.toLowerCase() === a.toString().toLowerCase()) return w.parsers[b];
                return !1
            }, w.addWidget = function (a) {
                w.widgets.push(a)
            }, w.hasWidget = function (b, c) {
                return b = a(b), b.length && b[0].config && b[0].config.widgetInit[c] || !1
            }, w.getWidgetById = function (a) {
                var b, c, d = w.widgets.length;
                for (b = 0; d > b; b++) if (c = w.widgets[b], c && c.hasOwnProperty("id") && c.id.toLowerCase() === a.toLowerCase()) return c
            }, w.applyWidget = function (b, d) {
                b = a(b)[0];
                var e, f, g, h, i = b.config,
                    j = i.widgetOptions,
                    k = " " + i.table.className + " ",
                    l = [];
                d !== !1 && b.hasInitialized && (b.isApplyingWidgets || b.isUpdating) || (i.debug && (e = new Date), h = new RegExp("\\s" + i.widgetClass.replace(/\{name\}/i, "([\\w-]+)") + "\\s", "g"), k.match(h) && (g = k.match(h), g && a.each(g, function (a, b) {
                    i.widgets.push(b.replace(h, "$1"))
                })), i.widgets.length && (b.isApplyingWidgets = !0, i.widgets = a.grep(i.widgets, function (b, c) {
                    return a.inArray(b, i.widgets) === c
                }), a.each(i.widgets || [], function (a, b) {
                    h = w.getWidgetById(b), h && h.id && (h.priority || (h.priority = 10), l[a] = h)
                }), l.sort(function (a, b) {
                    return a.priority < b.priority ? -1 : a.priority === b.priority ? 0 : 1
                }), a.each(l, function (c, e) {
                    e && ((d || !i.widgetInit[e.id]) && (i.widgetInit[e.id] = !0, e.hasOwnProperty("options") && (j = b.config.widgetOptions = a.extend(!0, {}, e.options, j)), e.hasOwnProperty("init") && (i.debug && (f = new Date), e.init(b, e, i, j), i.debug && w.benchmark("Initializing " + e.id + " widget", f))), !d && e.hasOwnProperty("format") && (i.debug && (f = new Date), e.format(b, i, j, !1), i.debug && w.benchmark((d ? "Initializing " : "Applying ") + e.id + " widget", f)))
                })), setTimeout(function () {
                    b.isApplyingWidgets = !1, a.data(b, "lastWidgetApplication", new Date)
                }, 0), i.debug && (g = i.widgets.length, c("Completed " + (d === !0 ? "initializing " : "applying ") + g + " widget" + (1 !== g ? "s" : ""), e)))
            }, w.refreshWidgets = function (c, d, e) {
                c = a(c)[0];
                var f, g = c.config,
                    h = g.widgets,
                    i = w.widgets,
                    j = i.length;
                for (f = 0; j > f; f++) i[f] && i[f].id && (d || a.inArray(i[f].id, h) < 0) && (g.debug && b('Refeshing widgets: Removing "' + i[f].id + '"'), i[f].hasOwnProperty("remove") && g.widgetInit[i[f].id] && (i[f].remove(c, g, g.widgetOptions), g.widgetInit[i[f].id] = !1));
                e !== !0 && w.applyWidget(c, d)
            }, w.getData = function (b, c, d) {
                var e, f, g = "",
                    h = a(b);
                return h.length ? (e = a.metadata ? h.metadata() : !1, f = " " + (h.attr("class") || ""), "undefined" != typeof h.data(d) || "undefined" != typeof h.data(d.toLowerCase()) ? g += h.data(d) || h.data(d.toLowerCase()) : e && "undefined" != typeof e[d] ? g += e[d] : c && "undefined" != typeof c[d] ? g += c[d] : " " !== f && f.match(" " + d + "-") && (g = f.match(new RegExp("\\s" + d + "-([\\w-]+)"))[1] || ""), a.trim(g)) : ""
            }, w.formatFloat = function (b, c) {
                if ("string" != typeof b || "" === b) return b;
                var d, e = c && c.config ? c.config.usNumberFormat !== !1 : "undefined" != typeof c ? c : !0;
                return b = e ? b.replace(/,/g, "") : b.replace(/[\s|\.]/g, "").replace(/,/g, "."), /^\s*\([.\d]+\)/.test(b) && (b = b.replace(/^\s*\(([.\d]+)\)/, "-$1")), d = parseFloat(b), isNaN(d) ? a.trim(b) : d
            }, w.isDigit = function (a) {
                return isNaN(a) ? /^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g, "")) : !0
            }
        }
    });
    var b = a.tablesorter;
    a.fn.extend({
        tablesorter: b.construct
    }), b.addParser({
        id: "no-parser",
        is: function () {
            return !1
        },
        format: function () {
            return ""
        },
        type: "text"
    }), b.addParser({
        id: "text",
        is: function () {
            return !0
        },
        format: function (c, d) {
            var e = d.config;
            return c && (c = a.trim(e.ignoreCase ? c.toLocaleLowerCase() : c), c = e.sortLocaleCompare ? b.replaceAccents(c) : c), c
        },
        type: "text"
    }), b.addParser({
        id: "digit",
        is: function (a) {
            return b.isDigit(a)
        },
        format: function (c, d) {
            var e = b.formatFloat((c || "").replace(/[^\w,. \-()]/g, ""), d);
            return c && "number" == typeof e ? e : c ? a.trim(c && d.config.ignoreCase ? c.toLocaleLowerCase() : c) : c
        },
        type: "numeric"
    }), b.addParser({
        id: "currency",
        is: function (a) {
            return /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((a || "").replace(/[+\-,. ]/g, ""))
        },
        format: function (c, d) {
            var e = b.formatFloat((c || "").replace(/[^\w,. \-()]/g, ""), d);
            return c && "number" == typeof e ? e : c ? a.trim(c && d.config.ignoreCase ? c.toLocaleLowerCase() : c) : c
        },
        type: "numeric"
    }), b.addParser({
        id: "url",
        is: function (a) {
            return /^(https?|ftp|file):\/\//.test(a)
        },
        format: function (b) {
            return b ? a.trim(b.replace(/(https?|ftp|file):\/\//, "")) : b
        },
        parsed: !0,
        type: "text"
    }), b.addParser({
        id: "isoDate",
        is: function (a) {
            return /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(a)
        },
        format: function (a, b) {
            var c = a ? new Date(a.replace(/-/g, "/")) : a;
            return c instanceof Date && isFinite(c) ? c.getTime() : a
        },
        type: "numeric"
    }), b.addParser({
        id: "percent",
        is: function (a) {
            return /(\d\s*?%|%\s*?\d)/.test(a) && a.length < 15
        },
        format: function (a, c) {
            return a ? b.formatFloat(a.replace(/%/g, ""), c) : a
        },
        type: "numeric"
    }), b.addParser({
        id: "image",
        is: function (a, b, c, d) {
            return d.find("img").length > 0
        },
        format: function (b, c, d) {
            return a(d).find("img").attr(c.config.imgAttr || "alt") || b
        },
        parsed: !0,
        type: "text"
    }), b.addParser({
        id: "usLongDate",
        is: function (a) {
            return /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(a) || /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(a)
        },
        format: function (a, b) {
            var c = a ? new Date(a.replace(/(\S)([AP]M)$/i, "$1 $2")) : a;
            return c instanceof Date && isFinite(c) ? c.getTime() : a
        },
        type: "numeric"
    }), b.addParser({
        id: "shortDate",
        is: function (a) {
            return /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((a || "").replace(/\s+/g, " ").replace(/[\-.,]/g, "/"))
        },
        format: function (a, c, d, e) {
            if (a) {
                var f, g, h = c.config,
                    i = h.$headers.filter("[data-column=" + e + "]:last"),
                    j = i.length && i[0].dateFormat || b.getData(i, b.getColumnData(c, h.headers, e), "dateFormat") || h.dateFormat;
                return g = a.replace(/\s+/g, " ").replace(/[\-.,]/g, "/"), "mmddyyyy" === j ? g = g.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2") : "ddmmyyyy" === j ? g = g.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1") : "yyyymmdd" === j && (g = g.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3")), f = new Date(g), f instanceof Date && isFinite(f) ? f.getTime() : a
            }
            return a
        },
        type: "numeric"
    }), b.addParser({
        id: "time",
        is: function (a) {
            return /^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(a)
        },
        format: function (a, b) {
            var c = a ? new Date("2000/01/01 " + a.replace(/(\S)([AP]M)$/i, "$1 $2")) : a;
            return c instanceof Date && isFinite(c) ? c.getTime() : a
        },
        type: "numeric"
    }), b.addParser({
        id: "metadata",
        is: function () {
            return !1
        },
        format: function (b, c, d) {
            var e = c.config,
                f = e.parserMetadataName ? e.parserMetadataName : "sortValue";
            return a(d).metadata()[f]
        },
        type: "numeric"
    }), b.addWidget({
        id: "zebra",
        priority: 90,
        format: function (b, c, d) {
            var e, f, g, h, i, j, k, l = new RegExp(c.cssChildRow, "i"),
                m = c.$tbodies;
            for (c.debug && (j = new Date), k = 0; k < m.length; k++) h = 0, e = m.eq(k), f = e.children("tr:visible").not(c.selectorRemove), f.each(function () {
                g = a(this), l.test(this.className) || h++, i = h % 2 === 0, g.removeClass(d.zebra[i ? 1 : 0]).addClass(d.zebra[i ? 0 : 1])
            })
        },
        remove: function (a, c, d) {
            var e, f, g = c.$tbodies,
                h = (d.zebra || ["even", "odd"]).join(" ");
            for (e = 0; e < g.length; e++) f = b.processTbody(a, g.eq(e), !0), f.children().removeClass(h), b.processTbody(a, f, !1)
        }
    })
}(jQuery),
function (a, b) {
    "use strict";
    var c = a.tablesorter = a.tablesorter || {};
    c.themes = {
        bootstrap: {
            table: "table table-bordered table-striped",
            caption: "caption",
            header: "bootstrap-header",
            footerRow: "",
            footerCells: "",
            icons: "",
            sortNone: "bootstrap-icon-unsorted",
            sortAsc: "icon-chevron-up glyphicon glyphicon-chevron-up",
            sortDesc: "icon-chevron-down glyphicon glyphicon-chevron-down",
            active: "",
            hover: "",
            filterRow: "",
            even: "",
            odd: ""
        },
        jui: {
            table: "ui-widget ui-widget-content ui-corner-all",
            caption: "ui-widget-content",
            header: "ui-widget-header ui-corner-all ui-state-default",
            footerRow: "",
            footerCells: "",
            icons: "ui-icon",
            sortNone: "ui-icon-carat-2-n-s",
            sortAsc: "ui-icon-carat-1-n",
            sortDesc: "ui-icon-carat-1-s",
            active: "ui-state-active",
            hover: "ui-state-hover",
            filterRow: "",
            even: "ui-widget-content",
            odd: "ui-state-default"
        }
    }, a.extend(c.css, {
        filterRow: "tablesorter-filter-row",
        filter: "tablesorter-filter",
        wrapper: "tablesorter-wrapper",
        resizer: "tablesorter-resizer",
        sticky: "tablesorter-stickyHeader",
        stickyVis: "tablesorter-sticky-visible",
        stickyWrap: "tablesorter-sticky-wrapper"
    }), c.storage = function (c, d, e, f) {
        c = a(c)[0];
        var g, h, i, j = !1,
            k = {}, l = c.config,
            m = a(c),
            n = f && f.id || m.attr(f && f.group || "data-table-group") || c.id || a(".tablesorter").index(m),
            o = f && f.url || m.attr(f && f.page || "data-table-page") || l && l.fixedUrl || b.location.pathname;
        if ("localStorage" in b) try {
            b.localStorage.setItem("_tmptest", "temp"), j = !0, b.localStorage.removeItem("_tmptest")
        } catch (p) {}
        return a.parseJSON && (j ? k = a.parseJSON(localStorage[d] || "{}") : (h = document.cookie.split(/[;\s|=]/), g = a.inArray(d, h) + 1, k = 0 !== g ? a.parseJSON(h[g] || "{}") : {})), (e || "" === e) && b.JSON && JSON.hasOwnProperty("stringify") ? (k[o] || (k[o] = {}), k[o][n] = e, j ? localStorage[d] = JSON.stringify(k) : (i = new Date, i.setTime(i.getTime() + 31536e6), document.cookie = d + "=" + JSON.stringify(k).replace(/\"/g, '"') + "; expires=" + i.toGMTString() + "; path=/"), void 0) : k && k[o] ? k[o][n] : ""
    }, c.addHeaderResizeEvent = function (b, c, d) {
        b = a(b)[0];
        var e, f = {
            timer: 250
        }, g = a.extend({}, f, d),
            h = b.config,
            i = h.widgetOptions,
            j = function (b) {
                i.resize_flag = !0, e = [], h.$headers.each(function () {
                    var b = a(this),
                        c = b.data("savedSizes") || [0, 0],
                        d = this.offsetWidth,
                        f = this.offsetHeight;
                    (d !== c[0] || f !== c[1]) && (b.data("savedSizes", [d, f]), e.push(this))
                }), e.length && b !== !1 && h.$table.trigger("resize", [e]), i.resize_flag = !1
            };
        return j(!1), clearInterval(i.resize_timer), c ? (i.resize_flag = !1, !1) : void(i.resize_timer = setInterval(function () {
            i.resize_flag || j()
        }, g.timer))
    }, c.addWidget({
        id: "uitheme",
        priority: 10,
        format: function (b, d, e) {
            var f, g, h, i, j, k, l, m, n, o = c.themes,
                p = d.$table,
                q = d.$headers,
                r = d.theme || "jui",
                s = o[r] || o.jui,
                t = [s.sortNone, s.sortDesc, s.sortAsc, s.active].join(" ");
            for (d.debug && (g = new Date), p.hasClass("tablesorter-" + r) && d.theme === d.appliedTheme && b.hasInitialized || (m = s[d.appliedTheme] || {}, n = m ? [m.sortNone, m.sortDesc, m.sortAsc, m.active].join(" ") : "", m && (e.zebra[0] = e.zebra[0].replace(" " + m.even, ""), e.zebra[1] = e.zebra[1].replace(" " + m.odd, "")), "" !== s.even && (e.zebra[0] += " " + s.even), "" !== s.odd && (e.zebra[1] += " " + s.odd), p.children("caption").removeClass(m.caption).addClass(s.caption), k = p.removeClass(d.appliedTheme ? "tablesorter-" + (d.appliedTheme || "") : "").addClass("tablesorter-" + r + " " + s.table).children("tfoot"), k.length && k.children("tr").removeClass(m.footerRow || "").addClass(s.footerRow).children("th, td").removeClass(m.footerCells || "").addClass(s.footerCells), q.add(d.$extraHeaders).removeClass(m.header + " " + m.hover + " " + n).addClass(s.header).not(".sorter-false").bind("mouseenter.tsuitheme mouseleave.tsuitheme", function (b) {
                a(this)["mouseenter" === b.type ? "addClass" : "removeClass"](s.hover)
            }), q.find("." + c.css.wrapper).length || q.wrapInner('<div class="' + c.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>'), d.cssIcon && q.find("." + c.css.icon).removeClass(m.icons + " " + n).addClass(s.icons), p.hasClass("hasFilters") && p.children("thead").children("." + c.css.filterRow).removeClass(m.filterRow).addClass(s.filterRow), d.appliedTheme = d.theme), f = 0; f < d.columns; f++) i = d.$headers.add(d.$extraHeaders).not(".sorter-false").filter('[data-column="' + f + '"]'), j = c.css.icon ? i.find("." + c.css.icon) : i, l = q.not(".sorter-false").filter('[data-column="' + f + '"]:last'), l.length && (l[0].sortDisabled ? (i.removeClass(t), j.removeClass(t + " " + s.icons)) : (h = i.hasClass(c.css.sortAsc) ? s.sortAsc : i.hasClass(c.css.sortDesc) ? s.sortDesc : i.hasClass(c.css.header) ? s.sortNone : "", i[h === s.sortNone ? "removeClass" : "addClass"](s.active), j.removeClass(t).addClass(h)));
            d.debug && c.benchmark("Applying " + r + " theme", g)
        },
        remove: function (a, b) {
            var d = b.$table,
                e = b.theme || "jui",
                f = c.themes[e] || c.themes.jui,
                g = d.children("thead").children(),
                h = f.sortNone + " " + f.sortDesc + " " + f.sortAsc;
            d.removeClass("tablesorter-" + e + " " + f.table).find(c.css.header).removeClass(f.header), g.unbind("mouseenter.tsuitheme mouseleave.tsuitheme").removeClass(f.hover + " " + h + " " + f.active).find("." + c.css.filterRow).removeClass(f.filterRow), g.find("." + c.css.icon).removeClass(f.icons)
        }
    }), c.addWidget({
        id: "columns",
        priority: 30,
        options: {
            columns: ["primary", "secondary", "tertiary"]
        },
        format: function (b, d, e) {
            var f, g, h, i, j, k, l, m, n = d.$table,
                o = d.$tbodies,
                p = d.sortList,
                q = p.length,
                r = e && e.columns || ["primary", "secondary", "tertiary"],
                s = r.length - 1;
            for (l = r.join(" "), g = 0; g < o.length; g++) f = c.processTbody(b, o.eq(g), !0), h = f.children("tr"), h.each(function () {
                if (j = a(this), "none" !== this.style.display && (k = j.children().removeClass(l), p && p[0] && (k.eq(p[0][0]).addClass(r[0]), q > 1))) for (m = 1; q > m; m++) k.eq(p[m][0]).addClass(r[m] || r[s])
            }), c.processTbody(b, f, !1);
            if (i = e.columns_thead !== !1 ? ["thead tr"] : [], e.columns_tfoot !== !1 && i.push("tfoot tr"), i.length && (h = n.find(i.join(",")).children().removeClass(l), q)) for (m = 0; q > m; m++) h.filter('[data-column="' + p[m][0] + '"]').addClass(r[m] || r[s])
        },
        remove: function (b, d, e) {
            var f, g, h = d.$tbodies,
                i = (e.columns || ["primary", "secondary", "tertiary"]).join(" ");
            for (d.$headers.removeClass(i), d.$table.children("tfoot").children("tr").children("th, td").removeClass(i), f = 0; f < h.length; f++) g = c.processTbody(b, h.eq(f), !0), g.children("tr").each(function () {
                a(this).children().removeClass(i)
            }), c.processTbody(b, g, !1)
        }
    }), c.addWidget({
        id: "filter",
        priority: 50,
        options: {
            filter_childRows: !1,
            filter_columnFilters: !0,
            filter_cellFilter: "",
            filter_cssFilter: "",
            filter_defaultFilter: {},
            filter_excludeFilter: {},
            filter_external: "",
            filter_filteredRow: "filtered",
            filter_formatter: null,
            filter_functions: null,
            filter_hideEmpty: !0,
            filter_hideFilters: !1,
            filter_ignoreCase: !0,
            filter_liveSearch: !0,
            filter_onlyAvail: "filter-onlyAvail",
            filter_placeholder: {
                search: "",
                select: ""
            },
            filter_reset: null,
            filter_saveFilters: !1,
            filter_searchDelay: 300,
            filter_searchFiltered: !0,
            filter_selectSource: null,
            filter_startsWith: !1,
            filter_useParsedData: !1,
            filter_serversideFiltering: !1,
            filter_defaultAttrib: "data-value",
            filter_selectSourceSeparator: "|"
        },
        format: function (a, b, d) {
            b.$table.hasClass("hasFilters") || c.filter.init(a, b, d)
        },
        remove: function (b, d, e) {
            var f, g, h = d.$table,
                i = d.$tbodies;
            for (h.removeClass("hasFilters").unbind("addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search ".split(" ").join(d.namespace + "filter ")).find("." + c.css.filterRow).remove(), f = 0; f < i.length; f++) g = c.processTbody(b, i.eq(f), !0), g.children().removeClass(e.filter_filteredRow).show(), c.processTbody(b, g, !1);
            e.filter_reset && a(document).undelegate(e.filter_reset, "click.tsfilter")
        }
    }), c.filter = {
        regex: {
            regex: /^\/((?:\\\/|[^\/])+)\/([mig]{0,3})?$/,
            child: /tablesorter-childRow/,
            filtered: /filtered/,
            type: /undefined|number/,
            exact: /(^[\"\'=]+)|([\"\'=]+$)/g,
            nondigit: /[^\w,. \-()]/g,
            operators: /[<>=]/g,
            query: "(q|query)"
        },
        types: {
            regex: function (a, b) {
                if (c.filter.regex.regex.test(b.iFilter)) {
                    var d, e = c.filter.regex.regex.exec(b.iFilter);
                    try {
                        d = new RegExp(e[1], e[2]).test(b.iExact)
                    } catch (f) {
                        d = !1
                    }
                    return d
                }
                return null
            },
            operators: function (b, d) {
                if (/^[<>]=?/.test(d.iFilter)) {
                    var e, f, g = b.table,
                        h = d.index,
                        i = d.parsed[h],
                        j = c.formatFloat(d.iFilter.replace(c.filter.regex.operators, ""), g),
                        k = b.parsers[h],
                        l = j;
                    return (i || "numeric" === k.type) && (f = c.filter.parseFilter(b, a.trim("" + d.iFilter.replace(c.filter.regex.operators, "")), h, i, !0), j = "number" != typeof f || "" === f || isNaN(f) ? j : f), e = !i && "numeric" !== k.type || isNaN(j) || "undefined" == typeof d.cache ? isNaN(d.iExact) ? c.formatFloat(d.iExact.replace(c.filter.regex.nondigit, ""), g) : c.formatFloat(d.iExact, g) : d.cache, />/.test(d.iFilter) && (f = />=/.test(d.iFilter) ? e >= j : e > j), /</.test(d.iFilter) && (f = /<=/.test(d.iFilter) ? j >= e : j > e), f || "" !== l || (f = !0), f
                }
                return null
            },
            notMatch: function (b, d) {
                if (/^\!/.test(d.iFilter)) {
                    var e, f = c.filter.parseFilter(b, d.iFilter.replace("!", ""), d.index, d.parsed[d.index]);
                    return c.filter.regex.exact.test(f) ? (f = f.replace(c.filter.regex.exact, ""), "" === f ? !0 : a.trim(f) !== d.iExact) : (e = d.iExact.search(a.trim(f)), "" === f ? !0 : !(b.widgetOptions.filter_startsWith ? 0 === e : e >= 0))
                }
                return null
            },
            exact: function (b, d) {
                if (c.filter.regex.exact.test(d.iFilter)) {
                    var e = c.filter.parseFilter(b, d.iFilter.replace(c.filter.regex.exact, ""), d.index, d.parsed[d.index]);
                    return d.anyMatch ? a.inArray(e, d.rowArray) >= 0 : e == d.iExact
                }
                return null
            },
            and: function (b, d) {
                if (c.filter.regex.andTest.test(d.filter)) {
                    for (var e = d.index, f = d.parsed[e], g = d.iFilter.split(c.filter.regex.andSplit), h = d.iExact.search(a.trim(c.filter.parseFilter(b, g[0], e, f))) >= 0, i = g.length - 1; h && i;) h = h && d.iExact.search(a.trim(c.filter.parseFilter(b, g[i], e, f))) >= 0, i--;
                    return h
                }
                return null
            },
            range: function (a, b) {
                if (c.filter.regex.toTest.test(b.iFilter)) {
                    var d, e, f = a.table,
                        g = b.index,
                        h = b.parsed[g],
                        i = b.iFilter.split(c.filter.regex.toSplit),
                        j = c.formatFloat(c.filter.parseFilter(a, i[0].replace(c.filter.regex.nondigit, ""), g, h), f),
                        k = c.formatFloat(c.filter.parseFilter(a, i[1].replace(c.filter.regex.nondigit, ""), g, h), f);
                    return (h || "numeric" === a.parsers[g].type) && (d = a.parsers[g].format("" + i[0], f, a.$headers.eq(g), g), j = "" === d || isNaN(d) ? j : d, d = a.parsers[g].format("" + i[1], f, a.$headers.eq(g), g), k = "" === d || isNaN(d) ? k : d), d = !h && "numeric" !== a.parsers[g].type || isNaN(j) || isNaN(k) ? isNaN(b.iExact) ? c.formatFloat(b.iExact.replace(c.filter.regex.nondigit, ""), f) : c.formatFloat(b.iExact, f) : b.cache, j > k && (e = j, j = k, k = e), d >= j && k >= d || "" === j || "" === k
                }
                return null
            },
            wild: function (b, d) {
                if (/[\?\*\|]/.test(d.iFilter) || c.filter.regex.orReplace.test(d.filter)) {
                    var e = d.index,
                        f = d.parsed[e],
                        g = c.filter.parseFilter(b, d.iFilter.replace(c.filter.regex.orReplace, "|"), e, f);
                    return !b.$headers.filter('[data-column="' + e + '"]:last').hasClass("filter-match") && /\|/.test(g) && ("|" === g[g.length - 1] && (g += "*"), g = d.anyMatch && a.isArray(d.rowArray) ? "(" + g + ")" : "^(" + g + ")$"), new RegExp(g.replace(/\?/g, "\\S{1}").replace(/\*/g, "\\S*")).test(d.iExact)
                }
                return null
            },
            fuzzy: function (a, b) {
                if (/^~/.test(b.iFilter)) {
                    var d, e = 0,
                        f = b.iExact.length,
                        g = c.filter.parseFilter(a, b.iFilter.slice(1), b.index, b.parsed[b.index]);
                    for (d = 0; f > d; d++) b.iExact[d] === g[e] && (e += 1);
                    return e === g.length ? !0 : !1
                }
                return null
            }
        },
        init: function (b, d, e) {
            c.language = a.extend(!0, {}, {
                to: "to",
                or: "or",
                and: "and"
            }, c.language);
            var f, g, h, i, j, k, l, m, n, o = c.filter.regex;
            if (d.$table.addClass("hasFilters"), e.searchTimer = null, e.filter_initTimer = null, e.filter_formatterCount = 0, e.filter_formatterInit = [], e.filter_anyColumnSelector = '[data-column="all"],[data-column="any"]', e.filter_multipleColumnSelector = '[data-column*="-"],[data-column*=","]', h = "\\{" + c.filter.regex.query + "\\}", a.extend(o, {
                child: new RegExp(d.cssChildRow),
                filtered: new RegExp(e.filter_filteredRow),
                alreadyFiltered: new RegExp("(\\s+(" + c.language.or + "|-|" + c.language.to + ")\\s+)", "i"),
                toTest: new RegExp("\\s+(-|" + c.language.to + ")\\s+", "i"),
                toSplit: new RegExp("(?:\\s+(?:-|" + c.language.to + ")\\s+)", "gi"),
                andTest: new RegExp("\\s+(" + c.language.and + "|&&)\\s+", "i"),
                andSplit: new RegExp("(?:\\s+(?:" + c.language.and + "|&&)\\s+)", "gi"),
                orReplace: new RegExp("\\s+(" + c.language.or + ")\\s+", "gi"),
                iQuery: new RegExp(h, "i"),
                igQuery: new RegExp(h, "ig")
            }), e.filter_columnFilters !== !1 && d.$headers.filter(".filter-false, .parser-false").length !== d.$headers.length && c.filter.buildRow(b, d, e), d.$table.bind("addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search ".split(" ").join(d.namespace + "filter "), function (f, g) {
                return d.$table.find("." + c.css.filterRow).toggle(!(e.filter_hideEmpty && a.isEmptyObject(d.cache) && (!d.delayInit || "appendCache" !== f.type))), /(search|filter)/.test(f.type) || (f.stopPropagation(), c.filter.buildDefault(b, !0)), "filterReset" === f.type ? (d.$table.find("." + c.css.filter).add(e.filter_$externalFilters).val(""), c.filter.searching(b, [])) : "filterEnd" === f.type ? c.filter.buildDefault(b, !0) : (g = "search" === f.type ? g : "updateComplete" === f.type ? d.$table.data("lastSearch") : "", /(update|add)/.test(f.type) && "updateComplete" !== f.type && (d.lastCombinedFilter = null, d.lastSearch = []), c.filter.searching(b, g, !0)), !1
            }), e.filter_reset && (e.filter_reset instanceof a ? e.filter_reset.click(function () {
                d.$table.trigger("filterReset")
            }) : a(e.filter_reset).length && a(document).undelegate(e.filter_reset, "click.tsfilter").delegate(e.filter_reset, "click.tsfilter", function () {
                d.$table.trigger("filterReset")
            })), e.filter_functions) for (j = 0; j < d.columns; j++) if (m = c.getColumnData(b, e.filter_functions, j)) if (i = d.$headers.filter('[data-column="' + j + '"]:last').removeClass("filter-select"), n = !(i.hasClass("filter-false") || i.hasClass("parser-false")), f = "", m === !0 && n) c.filter.buildSelect(b, j);
            else if ("object" == typeof m && n) {
                for (g in m) "string" == typeof g && (f += "" === f ? '<option value="">' + (i.data("placeholder") || i.attr("data-placeholder") || e.filter_placeholder.select || "") + "</option>" : "", l = g, h = g, g.indexOf(e.filter_selectSourceSeparator) >= 0 && (l = g.split(e.filter_selectSourceSeparator), h = l[1], l = l[0]), f += "<option " + (h === l ? "" : 'data-function-name="' + g + '" ') + 'value="' + l + '">' + h + "</option>");
                d.$table.find("thead").find("select." + c.css.filter + '[data-column="' + j + '"]').append(f)
            }
            c.filter.buildDefault(b, !0), c.filter.bindSearch(b, d.$table.find("." + c.css.filter), !0), e.filter_external && c.filter.bindSearch(b, e.filter_external), e.filter_hideFilters && c.filter.hideFilters(b, d), d.showProcessing && d.$table.bind("filterStart" + d.namespace + "filter filterEnd" + d.namespace + "filter", function (e, f) {
                i = f ? d.$table.find("." + c.css.header).filter("[data-column]").filter(function () {
                    return "" !== f[a(this).data("column")]
                }) : "", c.isProcessing(b, "filterStart" === e.type, f ? i : "")
            }), d.filteredRows = d.totalRows, d.$table.bind("tablesorter-initialized pagerBeforeInitialized", function () {
                var a = this.config.widgetOptions;
                k = c.filter.setDefaults(b, d, a) || [], k.length && (d.delayInit && "" === k.join("") || c.setFilters(b, k, !0)), d.$table.trigger("filterFomatterUpdate"), setTimeout(function () {
                    a.filter_initialized || c.filter.filterInitComplete(d)
                }, 100)
            }), d.pager && d.pager.initialized && !e.filter_initialized && (d.$table.trigger("filterFomatterUpdate"), setTimeout(function () {
                c.filter.filterInitComplete(d)
            }, 100))
        },
        formatterUpdated: function (a, b) {
            var c = a.closest("table")[0].config.widgetOptions;
            c.filter_initialized || (c.filter_formatterInit[b] = 1)
        },
        filterInitComplete: function (b) {
            var d = b.widgetOptions,
                e = 0,
                f = function () {
                    d.filter_initialized = !0, b.$table.trigger("filterInit", b), c.filter.findRows(b.table, b.$table.data("lastSearch") || [])
                };
            a.isEmptyObject(d.filter_formatter) ? f() : (a.each(d.filter_formatterInit, function (a, b) {
                1 === b && e++
            }), clearTimeout(d.filter_initTimer), d.filter_initialized || e !== d.filter_formatterCount ? d.filter_initialized || (d.filter_initTimer = setTimeout(function () {
                f()
            }, 500)) : f())
        },
        setDefaults: function (b, d, e) {
            var f, g, h, i = c.getFilters(b) || [];
            if (e.filter_saveFilters && c.storage && (g = c.storage(b, "tablesorter-filters") || [], f = a.isArray(g), f && "" === g.join("") || !f || (i = g)), "" === i.join("")) for (h = 0; h < d.columns; h++) i[h] = d.$headers.filter('[data-column="' + h + '"]:last').attr(e.filter_defaultAttrib) || i[h];
            return d.$table.data("lastSearch", i), i
        },
        parseFilter: function (a, b, c, d, e) {
            return e || d ? a.parsers[c].format(b, a.table, [], c) : b
        },
        buildRow: function (b, d, e) {
            var f, g, h, i, j, k, l, m = d.columns,
                n = a.isArray(e.filter_cellFilter),
                o = '<tr role="row" class="' + c.css.filterRow + '">';
            for (g = 0; m > g; g++) o += n ? "<td" + (e.filter_cellFilter[g] ? ' class="' + e.filter_cellFilter[g] + '"' : "") + "></td>" : "<td" + ("" !== e.filter_cellFilter ? ' class="' + e.filter_cellFilter + '"' : "") + "></td>";
            for (d.$filters = a(o += "</tr>").appendTo(d.$table.children("thead").eq(0)).find("td"), g = 0; m > g; g++) j = !1, h = d.$headers.filter('[data-column="' + g + '"]:last'), l = c.getColumnData(b, e.filter_functions, g), i = e.filter_functions && l && "function" != typeof l || h.hasClass("filter-select"), f = c.getColumnData(b, d.headers, g), j = "false" === c.getData(h[0], f, "filter") || "false" === c.getData(h[0], f, "parser"), i ? o = a("<select>").appendTo(d.$filters.eq(g)) : (l = c.getColumnData(b, e.filter_formatter, g), l ? (e.filter_formatterCount++, o = l(d.$filters.eq(g), g), o && 0 === o.length && (o = d.$filters.eq(g).children("input")), o && (0 === o.parent().length || o.parent().length && o.parent()[0] !== d.$filters[g]) && d.$filters.eq(g).append(o)) : o = a('<input type="search">').appendTo(d.$filters.eq(g)), o && o.attr("placeholder", h.data("placeholder") || h.attr("data-placeholder") || e.filter_placeholder.search || "")), o && (k = (a.isArray(e.filter_cssFilter) ? "undefined" != typeof e.filter_cssFilter[g] ? e.filter_cssFilter[g] || "" : "" : e.filter_cssFilter) || "", o.addClass(c.css.filter + " " + k).attr("data-column", g), j && (o.attr("placeholder", "").addClass("disabled")[0].disabled = !0))
        },
        bindSearch: function (b, d, e) {
            if (b = a(b)[0], d = a(d), d.length) {
                var f = b.config,
                    g = f.widgetOptions,
                    h = g.filter_$externalFilters;
                e !== !0 && (g.filter_$anyMatch = d.filter(g.filter_anyColumnSelector + "," + g.filter_multipleColumnSelector), h && h.length ? g.filter_$externalFilters = g.filter_$externalFilters.add(d) : g.filter_$externalFilters = d, c.setFilters(b, f.$table.data("lastSearch") || [], e === !1)), d.attr("data-lastSearchTime", (new Date).getTime()).unbind("keypress keyup search change ".split(" ").join(f.namespace + "filter ")).bind("keyup" + f.namespace + "filter", function (d) {
                    if (a(this).attr("data-lastSearchTime", (new Date).getTime()), 27 === d.which) this.value = "";
                    else {
                        if (g.filter_liveSearch === !1) return;
                        if ("" !== this.value && ("number" == typeof g.filter_liveSearch && this.value.length < g.filter_liveSearch || 13 !== d.which && 8 !== d.which && (d.which < 32 || d.which >= 37 && d.which <= 40))) return
                    }
                    c.filter.searching(b, !0, !0)
                }).bind("search change keypress ".split(" ").join(f.namespace + "filter "), function (d) {
                    var e = a(this).data("column");
                    (13 === d.which || "search" === d.type || "change" === d.type && this.value !== f.lastSearch[e]) && (d.preventDefault(), a(this).attr("data-lastSearchTime", (new Date).getTime()), c.filter.searching(b, !1, !0))
                })
            }
        },
        searching: function (a, b, d) {
            var e = a.config.widgetOptions;
            clearTimeout(e.searchTimer), "undefined" == typeof b || b === !0 ? e.searchTimer = setTimeout(function () {
                c.filter.checkFilters(a, b, d)
            }, e.filter_liveSearch ? e.filter_searchDelay : 10) : c.filter.checkFilters(a, b, d)
        },
        checkFilters: function (b, d, e) {
            var f = b.config,
                g = f.widgetOptions,
                h = a.isArray(d),
                i = h ? d : c.getFilters(b, !0),
                j = (i || []).join("");
            return a.isEmptyObject(f.cache) ? void(f.delayInit && f.pager && f.pager.initialized && f.$table.trigger("updateCache", [function () {
                c.filter.checkFilters(b, !1, e)
            }])) : (h && (c.setFilters(b, i, !1, e !== !0), g.filter_initialized || (f.lastCombinedFilter = "")), g.filter_hideFilters && f.$table.find("." + c.css.filterRow).trigger("" === j ? "mouseleave" : "mouseenter"), f.lastCombinedFilter !== j || d === !1 ? (d === !1 && (f.lastCombinedFilter = null, f.lastSearch = []), g.filter_initialized && f.$table.trigger("filterStart", [i]), f.showProcessing ? void setTimeout(function () {
                return c.filter.findRows(b, i, j), !1
            }, 30) : (c.filter.findRows(b, i, j), !1)) : void 0)
        },
        hideFilters: function (b, d) {
            var e, f, g;
            a(b).find("." + c.css.filterRow).addClass("hideme").bind("mouseenter mouseleave", function (b) {
                var c = b;
                e = a(this), clearTimeout(g), g = setTimeout(function () {
                    /enter|over/.test(c.type) ? e.removeClass("hideme") : a(document.activeElement).closest("tr")[0] !== e[0] && "" === d.lastCombinedFilter && e.addClass("hideme")
                }, 200)
            }).find("input, select").bind("focus blur", function (b) {
                f = a(this).closest("tr"), clearTimeout(g);
                var e = b;
                g = setTimeout(function () {
                    "" === c.getFilters(d.$table).join("") && f["focus" === e.type ? "removeClass" : "addClass"]("hideme")
                }, 200)
            })
        },
        defaultFilter: function (b, d) {
            if ("" === b) return b;
            var e = c.filter.regex.iQuery,
                f = d.match(c.filter.regex.igQuery).length,
                g = f > 1 ? a.trim(b).split(/\s/) : [a.trim(b)],
                h = g.length - 1,
                i = 0,
                j = d;
            for (1 > h && f > 1 && (g[1] = g[0]); e.test(j);) j = j.replace(e, g[i++] || ""), e.test(j) && h > i && "" !== (g[i] || "") && (j = d.replace(e, j));
            return j
        },
        getLatestSearch: function (b) {
            return b.sort(function (b, c) {
                return a(c).attr("data-lastSearchTime") - a(b).attr("data-lastSearchTime")
            })
        },
        multipleColumns: function (b, d) {
            var e, f, g, h = b.widgetOptions,
                i = h.filter_initialized || !d.filter(h.filter_anyColumnSelector).length,
                j = [],
                k = a.trim(c.filter.getLatestSearch(d).attr("data-column"));
            if (i && /-/.test(k) && (e = k.match(/(\d+)\s*-\s*(\d+)/g), a.each(e, function (a, c) {
                var d, e = c.split(/\s*-\s*/),
                    f = parseInt(e[0], 10) || 0,
                    g = parseInt(e[1], 10) || b.columns - 1;
                for (f > g && (d = f, f = g, g = d), g >= b.columns && (g = b.columns - 1); g >= f; f++) j.push(f);
                k = k.replace(c, "")
            })), i && /,/.test(k) && (f = k.split(/\s*,\s*/), a.each(f, function (a, c) {
                "" !== c && (g = parseInt(c, 10), g < b.columns && j.push(g))
            })), !j.length) for (g = 0; g < b.columns; g++) j.push(g);
            return j
        },
        findRows: function (b, d, e) {
            if (b.config.lastCombinedFilter !== e && b.config.widgetOptions.filter_initialized) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C = c.filter.regex,
                    D = b.config,
                    E = D.widgetOptions,
                    F = D.$table.children("tbody"),
                    G = {
                        anyMatch: !1
                    }, H = ["range", "notMatch", "operators"];
                for (G.parsed = D.$headers.map(function (d) {
                    return D.parsers && D.parsers[d] && D.parsers[d].parsed || c.getData && "parsed" === c.getData(D.$headers.filter('[data-column="' + d + '"]:last'), c.getColumnData(b, D.headers, d), "filter") || a(this).hasClass("filter-parsed")
                }).get(), D.debug && (c.log("Starting filter widget search", d), t = new Date), D.filteredRows = 0, D.totalRows = 0, e = (d || []).join(""), i = 0; i < F.length; i++) if (!F.eq(i).hasClass(D.cssInfoBlock || c.css.info)) {
                    if (j = c.processTbody(b, F.eq(i), !0), m = D.columns, g = a(a.map(D.cache[i].normalized, function (a) {
                        return a[m].$row.get()
                    })), "" === e || E.filter_serversideFiltering) g.removeClass(E.filter_filteredRow).not("." + D.cssChildRow).show();
                    else {
                        if (g = g.not("." + D.cssChildRow), f = g.length, x = E.filter_searchFiltered, o = D.lastSearch || D.$table.data("lastSearch") || [], x) for (v = 0; m + 1 > v; v++) u = d[v] || "", x || (v = m), x = x && o.length && 0 === u.indexOf(o[v] || "") && !C.alreadyFiltered.test(u) && !/[=\"\|!]/.test(u) && !(/(>=?\s*-\d)/.test(u) || /(<=?\s*\d)/.test(u)) && !("" !== u && D.$filters && D.$filters.eq(v).find("select").length && !D.$headers.filter('[data-column="' + v + '"]:last').hasClass("filter-match"));
                        for (w = g.not("." + E.filter_filteredRow).length, x && 0 === w && (x = !1), D.debug && c.log("Searching through " + (x && f > w ? w : "all") + " rows"), (E.filter_$anyMatch && E.filter_$anyMatch.length || d[D.columns]) && (G.anyMatchFlag = !0, G.anyMatchFilter = E.filter_$anyMatch && c.filter.getLatestSearch(E.filter_$anyMatch).val() || d[D.columns] || "", D.sortLocaleCompare && (G.anyMatchFilter = c.replaceAccents(G.anyMatchFilter)), E.filter_defaultFilter && C.iQuery.test(c.getColumnData(b, E.filter_defaultFilter, D.columns, !0) || "") && (G.anyMatchFilter = c.filter.defaultFilter(G.anyMatchFilter, c.getColumnData(b, E.filter_defaultFilter, D.columns, !0)), x = !1), G.iAnyMatchFilter = E.filter_ignoreCase && D.ignoreCase ? G.anyMatchFilter.toLocaleLowerCase() : G.anyMatchFilter), h = 0; f > h; h++) if (G.cacheArray = D.cache[i].normalized[h], n = g[h].className, !(C.child.test(n) || x && C.filtered.test(n))) {
                            if (s = !0, n = g.eq(h).nextUntil("tr:not(." + D.cssChildRow + ")"), G.childRowText = n.length && E.filter_childRows ? n.text() : "", G.childRowText = E.filter_ignoreCase ? G.childRowText.toLocaleLowerCase() : G.childRowText, k = g.eq(h).children(), G.anyMatchFlag) {
                                if (m = c.filter.multipleColumns(D, E.filter_$anyMatch), G.anyMatch = !0, G.rowArray = k.map(function (b) {
                                    if (a.inArray(b, m) > -1) {
                                        var d;
                                        return G.parsed[b] ? d = G.cacheArray[b] : (d = E.filter_ignoreCase ? a(this).text().toLowerCase() : a(this).text(), D.sortLocaleCompare && (d = c.replaceAccents(d))), d
                                    }
                                }).get(), G.filter = G.anyMatchFilter, G.iFilter = G.iAnyMatchFilter, G.exact = G.rowArray.join(" "), G.iExact = E.filter_ignoreCase ? G.exact.toLowerCase() : G.exact, G.cache = G.cacheArray.slice(0, -1).join(" "), y = null, a.each(c.filter.types, function (b, c) {
                                    return a.inArray(b, H) < 0 && (q = c(D, G), null !== q) ? (y = q, !1) : void 0
                                }), null !== y) s = y;
                                else if (E.filter_startsWith) for (s = !1, m = D.columns; !s && m > 0;) m--, s = s || 0 === G.rowArray[m].indexOf(G.iFilter);
                                else s = (G.iExact + G.childRowText).indexOf(G.iFilter) >= 0;
                                G.anyMatch = !1
                            }
                            for (m = 0; m < D.columns; m++) G.filter = d[m], G.index = m, z = (c.getColumnData(b, E.filter_excludeFilter, m, !0) || "").split(/\s+/), G.filter && (G.cache = G.cacheArray[m], E.filter_useParsedData || G.parsed[m] ? G.exact = G.cache : (G.exact = a.trim(k.eq(m).text()), G.exact = D.sortLocaleCompare ? c.replaceAccents(G.exact) : G.exact), G.iExact = !C.type.test(typeof G.exact) && E.filter_ignoreCase ? G.exact.toLocaleLowerCase() : G.exact, r = s, B = E.filter_columnFilters ? D.$filters.add(D.$externalFilters).filter('[data-column="' + m + '"]').find("select option:selected").attr("data-function-name") || "" : "", G.filter = D.sortLocaleCompare ? c.replaceAccents(G.filter) : G.filter, u = !0, E.filter_defaultFilter && C.iQuery.test(c.getColumnData(b, E.filter_defaultFilter, m) || "") && (G.filter = c.filter.defaultFilter(G.filter, c.getColumnData(b, E.filter_defaultFilter, m)), u = !1), G.iFilter = E.filter_ignoreCase ? (G.filter || "").toLocaleLowerCase() : G.filter, A = c.getColumnData(b, E.filter_functions, m), l = D.$headers.filter('[data-column="' + m + '"]:last'), p = l.hasClass("filter-select"), A || p && u ? A === !0 || p ? r = l.hasClass("filter-match") ? G.iExact.search(G.iFilter) >= 0 : G.filter === G.exact : "function" == typeof A ? r = A(G.exact, G.cache, G.filter, m, g.eq(h)) : "function" == typeof A[B || G.filter] && (r = A[B || G.filter](G.exact, G.cache, G.filter, m, g.eq(h))) : (y = null, a.each(c.filter.types, function (b, c) {
                                return a.inArray(b, z) < 0 && (q = c(D, G), null !== q) ? (y = q, !1) : void 0
                            }), null !== y ? r = y : (G.exact = (G.iExact + G.childRowText).indexOf(c.filter.parseFilter(D, G.iFilter, m, G.parsed[m])), r = !E.filter_startsWith && G.exact >= 0 || E.filter_startsWith && 0 === G.exact)), s = r ? s : !1);
                            g.eq(h).toggle(s).toggleClass(E.filter_filteredRow, !s), n.length && n.toggleClass(E.filter_filteredRow, !s)
                        }
                    }
                    D.filteredRows += g.not("." + E.filter_filteredRow).length, D.totalRows += g.length, c.processTbody(b, j, !1)
                }
                D.lastCombinedFilter = e, D.lastSearch = d, D.$table.data("lastSearch", d), E.filter_saveFilters && c.storage && c.storage(b, "tablesorter-filters", d), D.debug && c.benchmark("Completed filter widget search", t), E.filter_initialized && D.$table.trigger("filterEnd", D), setTimeout(function () {
                    D.$table.trigger("applyWidgets")
                }, 0)
            }
        },
        getOptionSource: function (b, d, e) {
            var f, g = b.config,
                h = g.widgetOptions,
                i = [],
                j = !1,
                k = h.filter_selectSource,
                l = g.$table.data("lastSearch") || [],
                m = a.isFunction(k) ? !0 : c.getColumnData(b, k, d);
            if (e && "" !== l[d] && (e = !1), m === !0) j = k(b, d, e);
            else {
                if (m instanceof a || "string" === a.type(m) && m.indexOf("</option>") >= 0) return m;
                a.isArray(m) ? j = m : "object" === a.type(k) && m && (j = m(b, d, e))
            }
            return j === !1 && (j = c.filter.getOptions(b, d, e)), j = a.grep(j, function (b, c) {
                return a.inArray(b, j) === c
            }), g.$headers.filter('[data-column="' + d + '"]:last').hasClass("filter-select-nosort") ? j : (a.each(j, function (a, c) {
                i.push({
                    t: c,
                    p: g.parsers && g.parsers[d].format(c, b, [], d)
                })
            }), f = g.textSorter || "", i.sort(function (e, g) {
                var h = e.p.toString(),
                    i = g.p.toString();
                return a.isFunction(f) ? f(h, i, !0, d, b) : "object" == typeof f && f.hasOwnProperty(d) ? f[d](h, i, !0, d, b) : c.sortNatural ? c.sortNatural(h, i) : !0
            }), j = [], a.each(i, function (a, b) {
                j.push(b.t)
            }), j)
        },
        getOptions: function (b, c, d) {
            var e, f, g, h, i, j, k = b.config,
                l = k.widgetOptions,
                m = k.$table.children("tbody"),
                n = [];
            for (f = 0; f < m.length; f++) if (!m.eq(f).hasClass(k.cssInfoBlock)) for (i = k.cache[f], g = k.cache[f].normalized.length, e = 0; g > e; e++) h = i.row ? i.row[e] : i.normalized[e][k.columns].$row[0], d && h.className.match(l.filter_filteredRow) || (l.filter_useParsedData || k.parsers[c].parsed || k.$headers.filter('[data-column="' + c + '"]:last').hasClass("filter-parsed") ? n.push("" + i.normalized[e][c]) : (j = h.cells[c], j && n.push(a.trim(j.textContent || j.innerText || a(j).text()))));
            return n
        },
        buildSelect: function (b, d, e, f, g) {
            if (b = a(b)[0], d = parseInt(d, 10), b.config.cache && !a.isEmptyObject(b.config.cache)) {
                var h, i, j, k, l, m, n = b.config,
                    o = n.widgetOptions,
                    p = n.$headers.filter('[data-column="' + d + '"]:last'),
                    q = '<option value="">' + (p.data("placeholder") || p.attr("data-placeholder") || o.filter_placeholder.select || "") + "</option>",
                    r = n.$table.find("thead").find("select." + c.css.filter + '[data-column="' + d + '"]').val();
                if (("undefined" == typeof e || "" === e) && (e = c.filter.getOptionSource(b, d, g)), a.isArray(e)) {
                    for (h = 0; h < e.length; h++) j = e[h] = ("" + e[h]).replace(/\"/g, "&quot;"), i = j, j.indexOf(o.filter_selectSourceSeparator) >= 0 && (k = j.split(o.filter_selectSourceSeparator), i = k[0], j = k[1]), q += "" !== e[h] ? "<option " + (i === j ? "" : 'data-function-name="' + e[h] + '" ') + 'value="' + i + '">' + j + "</option>" : "";
                    e = []
                }
                l = (n.$filters ? n.$filters : n.$table.children("thead")).find("." + c.css.filter), o.filter_$externalFilters && (l = l && l.length ? l.add(o.filter_$externalFilters) : o.filter_$externalFilters), m = l.filter('select[data-column="' + d + '"]'), m.length && (m[f ? "html" : "append"](q), a.isArray(e) || m.append(e).val(r), m.val(r))
            }
        },
        buildDefault: function (a, b) {
            var d, e, f, g = a.config,
                h = g.widgetOptions,
                i = g.columns;
            for (d = 0; i > d; d++) e = g.$headers.filter('[data-column="' + d + '"]:last'),
            f = !(e.hasClass("filter-false") || e.hasClass("parser-false")), (e.hasClass("filter-select") || c.getColumnData(a, h.filter_functions, d) === !0) && f && c.filter.buildSelect(a, d, "", b, e.hasClass(h.filter_onlyAvail))
        }
    }, c.getFilters = function (b, d, e, f) {
        var g, h, i, j, k = !1,
            l = b ? a(b)[0].config : "",
            m = l ? l.widgetOptions : "";
        if (d !== !0 && m && !m.filter_columnFilters) return a(b).data("lastSearch");
        if (l && (l.$filters && (h = l.$filters.find("." + c.css.filter)), m.filter_$externalFilters && (h = h && h.length ? h.add(m.filter_$externalFilters) : m.filter_$externalFilters), h && h.length)) for (k = e || [], g = 0; g < l.columns + 1; g++) j = g === l.columns ? m.filter_anyColumnSelector + "," + m.filter_multipleColumnSelector : '[data-column="' + g + '"]', i = h.filter(j), i.length && (i = c.filter.getLatestSearch(i), a.isArray(e) ? (f && i.slice(1), g === l.columns && (j = i.filter(m.filter_anyColumnSelector), i = j.length ? j : i), i.val(e[g]).trigger("change.tsfilter")) : (k[g] = i.val() || "", g === l.columns ? i.slice(1).filter('[data-column*="' + i.attr("data-column") + '"]').val(k[g]) : i.slice(1).val(k[g])), g === l.columns && i.length && (m.filter_$anyMatch = i));
        return 0 === k.length && (k = !1), k
    }, c.setFilters = function (b, d, e, f) {
        var g = b ? a(b)[0].config : "",
            h = c.getFilters(b, !0, d, f);
        return g && e && (g.lastCombinedFilter = null, g.lastSearch = [], c.filter.searching(g.$table[0], d, f), g.$table.trigger("filterFomatterUpdate")), !! h
    }, c.addWidget({
        id: "stickyHeaders",
        priority: 60,
        options: {
            stickyHeaders: "",
            stickyHeaders_attachTo: null,
            stickyHeaders_xScroll: null,
            stickyHeaders_yScroll: null,
            stickyHeaders_offset: 0,
            stickyHeaders_filteredToTop: !0,
            stickyHeaders_cloneId: "-sticky",
            stickyHeaders_addResizeEvent: !0,
            stickyHeaders_includeCaption: !0,
            stickyHeaders_zIndex: 2
        },
        format: function (d, e, f) {
            if (!(e.$table.hasClass("hasStickyHeaders") || a.inArray("filter", e.widgets) >= 0 && !e.$table.hasClass("hasFilters"))) {
                var g, h = e.$table,
                    i = a(f.stickyHeaders_attachTo),
                    j = e.namespace + "stickyheaders ",
                    k = a(f.stickyHeaders_yScroll || f.stickyHeaders_attachTo || b),
                    l = a(f.stickyHeaders_xScroll || f.stickyHeaders_attachTo || b),
                    m = h.children("thead:first"),
                    n = m.children("tr").not(".sticky-false").children(),
                    o = h.children("tfoot"),
                    p = isNaN(f.stickyHeaders_offset) ? a(f.stickyHeaders_offset) : "",
                    q = i.length ? 0 : p.length ? p.height() || 0 : parseInt(f.stickyHeaders_offset, 10) || 0,
                    r = h.parent().closest("." + c.css.table).hasClass("hasStickyHeaders") ? h.parent().closest("table.tablesorter")[0].config.widgetOptions.$sticky.parent() : [],
                    s = r.length ? r.height() : 0,
                    t = f.$sticky = h.clone().addClass("containsStickyHeaders " + c.css.sticky + " " + f.stickyHeaders).wrap('<div class="' + c.css.stickyWrap + '">'),
                    u = t.parent().css({
                        position: i.length ? "absolute" : "fixed",
                        padding: parseInt(t.parent().parent().css("padding-left"), 10),
                        top: q + s,
                        left: 0,
                        visibility: "hidden",
                        zIndex: f.stickyHeaders_zIndex || 2
                    }),
                    v = t.children("thead:first"),
                    w = "",
                    x = 0,
                    y = function (c, d) {
                        c.filter(":visible").each(function (c) {
                            var e, f, g = d.filter(":visible").eq(c),
                                h = a(this);
                            "border-box" === h.css("box-sizing") ? e = h.outerWidth() : "collapse" === g.css("border-collapse") ? b.getComputedStyle ? e = parseFloat(b.getComputedStyle(this, null).width) : (f = parseFloat(h.css("border-width")), e = h.outerWidth() - parseFloat(h.css("padding-left")) - parseFloat(h.css("padding-right")) - f) : e = h.width(), g.css({
                                "min-width": e,
                                "max-width": e
                            })
                        })
                    }, z = function () {
                        q = p.length ? p.height() || 0 : parseInt(f.stickyHeaders_offset, 10) || 0, x = 0, u.css({
                            left: i.length ? parseInt(i.css("padding-left"), 10) || 0 : h.offset().left - parseInt(h.css("margin-left"), 10) - l.scrollLeft() - x,
                            width: h.outerWidth()
                        }), y(h, t), y(n, g)
                    };
                t.attr("id") && (t[0].id += f.stickyHeaders_cloneId), t.find("thead:gt(0), tr.sticky-false").hide(), t.find("tbody, tfoot").remove(), t.find("caption").toggle(f.stickyHeaders_includeCaption), g = v.children().children(), t.css({
                    height: 0,
                    width: 0,
                    margin: 0
                }), g.find("." + c.css.resizer).remove(), h.addClass("hasStickyHeaders").bind("pagerComplete" + j, function () {
                    z()
                }), c.bindEvents(d, v.children().children(".tablesorter-header")), h.after(u), e.onRenderHeader && v.children("tr").children().each(function (b) {
                    e.onRenderHeader.apply(a(this), [b, e, t])
                }), l.add(k).unbind("scroll resize ".split(" ").join(j)).bind("scroll resize ".split(" ").join(j), function (b) {
                    if (h.is(":visible")) {
                        s = r.length ? r.offset().top - k.scrollTop() + r.height() : 0;
                        var c = "tablesorter-sticky-",
                            d = h.offset(),
                            e = a.isWindow(k[0]),
                            f = a.isWindow(l[0]),
                            g = (i.length ? e ? k.scrollTop() : k.offset().top : k.scrollTop()) + q + s,
                            j = h.height() - (u.height() + (o.height() || 0)),
                            m = g > d.top && g < d.top + j ? "visible" : "hidden",
                            n = {
                                visibility: m
                            };
                        i.length && (n.top = e ? g : i.scrollTop()), f && (n.left = h.offset().left - parseInt(h.css("margin-left"), 10) - l.scrollLeft() - x), r.length && (n.top = (n.top || 0) + q + s), u.removeClass(c + "visible " + c + "hidden").addClass(c + m).css(n), (m !== w || "resize" === b.type) && (z(), w = m)
                    }
                }), f.stickyHeaders_addResizeEvent && c.addHeaderResizeEvent(d), h.hasClass("hasFilters") && f.filter_columnFilters && (h.bind("filterEnd" + j, function () {
                    var d = a(document.activeElement).closest("td"),
                        g = d.parent().children().index(d);
                    u.hasClass(c.css.stickyVis) && f.stickyHeaders_filteredToTop && (b.scrollTo(0, h.position().top), g >= 0 && e.$filters && e.$filters.eq(g).find("a, select, input").filter(":visible").focus())
                }), c.filter.bindSearch(h, g.find("." + c.css.filter)), f.filter_hideFilters && c.filter.hideFilters(t, e)), h.trigger("stickyHeadersInit")
            }
        },
        remove: function (d, e, f) {
            var g = e.namespace + "stickyheaders ";
            e.$table.removeClass("hasStickyHeaders").unbind("pagerComplete filterEnd ".split(" ").join(g)).next("." + c.css.stickyWrap).remove(), f.$sticky && f.$sticky.length && f.$sticky.remove(), a(".hasStickyHeaders").length || a(b).add(f.stickyHeaders_xScroll).add(f.stickyHeaders_yScroll).add(f.stickyHeaders_attachTo).unbind("scroll resize ".split(" ").join(g)), c.addHeaderResizeEvent(d, !1)
        }
    }), c.addWidget({
        id: "resizable",
        priority: 40,
        options: {
            resizable: !0,
            resizable_addLastColumn: !1,
            resizable_widths: [],
            resizable_throttle: !1
        },
        format: function (d, e, f) {
            if (!e.$table.hasClass("hasResizable")) {
                e.$table.addClass("hasResizable"), c.resizableReset(d, !0);
                var g, h, i, j, k, l = {}, m = e.$table,
                    n = m.parent(),
                    o = "auto" === m.parent().css("overflow"),
                    p = 0,
                    q = null,
                    r = null,
                    s = Math.abs(m.parent().width() - m.width()) < 20,
                    t = function (a) {
                        if (0 !== p && q) {
                            var b = a.pageX - p,
                                c = q.width();
                            q.width(c + b), q.width() !== c && s ? r.width(r.width() - b) : o && (m.width(function (a, c) {
                                return c + b
                            }), r.length || (n[0].scrollLeft = m.width())), p = a.pageX
                        }
                    }, u = function () {
                        c.storage && q && r && (l = {}, l[q.index()] = q.width(), l[r.index()] = r.width(), q.width(l[q.index()]), r.width(l[r.index()]), f.resizable !== !1 && c.storage(d, "tablesorter-resizable", e.$headers.map(function () {
                            return a(this).width()
                        }).get())), p = 0, q = r = null, a(b).trigger("resize")
                    };
                if (l = c.storage && f.resizable !== !1 ? c.storage(d, "tablesorter-resizable") : {}) for (j in l)!isNaN(j) && j < e.$headers.length && e.$headers.eq(j).width(l[j]);
                g = m.children("thead:first").children("tr"), g.children().each(function () {
                    var b, f = a(this);
                    j = f.attr("data-column"), b = "false" === c.getData(f, c.getColumnData(d, e.headers, j), "resizable"), g.children().filter('[data-column="' + j + '"]')[b ? "addClass" : "removeClass"]("resizable-false")
                }), g.each(function () {
                    i = a(this).children().not(".resizable-false"), a(this).find("." + c.css.wrapper).length || i.wrapInner('<div class="' + c.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>'), f.resizable_addLastColumn || (i = i.slice(0, -1)), h = h ? h.add(i) : i
                }), h.each(function () {
                    var b = a(this),
                        d = parseInt(b.css("padding-right"), 10) + 10;
                    b.find("." + c.css.wrapper).append('<div class="' + c.css.resizer + '" style="cursor:w-resize;position:absolute;z-index:1;right:-' + d + 'px;top:0;height:100%;width:20px;"></div>')
                }).find("." + c.css.resizer).bind("mousedown", function (b) {
                    q = a(b.target).closest("th");
                    var c = e.$headers.filter('[data-column="' + q.attr("data-column") + '"]');
                    c.length > 1 && (q = q.add(c)), r = b.shiftKey ? q.parent().find("th").not(".resizable-false").filter(":last") : q.nextAll(":not(.resizable-false)").eq(0), p = b.pageX
                }), a(document).bind("mousemove.tsresize", function (a) {
                    0 !== p && q && (f.resizable_throttle ? (clearTimeout(k), k = setTimeout(function () {
                        t(a)
                    }, isNaN(f.resizable_throttle) ? 5 : f.resizable_throttle)) : t(a))
                }).bind("mouseup.tsresize", function () {
                    u()
                }), m.find("thead:first").bind("contextmenu.tsresize", function () {
                    c.resizableReset(d);
                    var b = a.isEmptyObject ? a.isEmptyObject(l) : !0;
                    return l = {}, b
                })
            }
        },
        remove: function (a, b) {
            b.$table.removeClass("hasResizable").children("thead").unbind("mouseup.tsresize mouseleave.tsresize contextmenu.tsresize").children("tr").children().unbind("mousemove.tsresize mouseup.tsresize").find("." + c.css.resizer).remove(), c.resizableReset(a)
        }
    }), c.resizableReset = function (b, d) {
        a(b).each(function () {
            var e, f = this.config,
                g = f && f.widgetOptions;
            b && f && (f.$headers.each(function (b) {
                e = a(this), g.resizable_widths[b] ? e.css("width", g.resizable_widths[b]) : e.hasClass("resizable-false") || e.css("width", "")
            }), c.storage && !d && c.storage(this, "tablesorter-resizable", {}))
        })
    }, c.addWidget({
        id: "saveSort",
        priority: 20,
        options: {
            saveSort: !0
        },
        init: function (a, b, c, d) {
            b.format(a, c, d, !0)
        },
        format: function (b, d, e, f) {
            var g, h, i = d.$table,
                j = e.saveSort !== !1,
                k = {
                    sortList: d.sortList
                };
            d.debug && (h = new Date), i.hasClass("hasSaveSort") ? j && b.hasInitialized && c.storage && (c.storage(b, "tablesorter-savesort", k), d.debug && c.benchmark("saveSort widget: Saving last sort: " + d.sortList, h)) : (i.addClass("hasSaveSort"), k = "", c.storage && (g = c.storage(b, "tablesorter-savesort"), k = g && g.hasOwnProperty("sortList") && a.isArray(g.sortList) ? g.sortList : "", d.debug && c.benchmark('saveSort: Last sort loaded: "' + k + '"', h), i.bind("saveSortReset", function (a) {
                a.stopPropagation(), c.storage(b, "tablesorter-savesort", "")
            })), f && k && k.length > 0 ? d.sortList = k : b.hasInitialized && k && k.length > 0 && i.trigger("sorton", [k]))
        },
        remove: function (a) {
            c.storage && c.storage(a, "tablesorter-savesort", "")
        }
    })
}(jQuery, window),
function (a) {
    "use strict";
    var b = a.tablesorter;
    a.extend({
        tablesorterPager: new function () {
            this.defaults = {
                container: null,
                ajaxUrl: null,
                customAjaxUrl: function (a, b) {
                    return b
                },
                ajaxObject: {
                    dataType: "json"
                },
                processAjaxOnInit: !0,
                ajaxProcessing: function (a) {
                    return [0, [], null]
                },
                output: "{startRow} to {endRow} of {totalRows} rows",
                updateArrows: !0,
                page: 0,
                pageReset: 0,
                size: 10,
                maxOptionSize: 20,
                savePages: !0,
                storageKey: "tablesorter-pager",
                fixedHeight: !1,
                countChildRows: !1,
                removeRows: !1,
                cssFirst: ".first",
                cssPrev: ".prev",
                cssNext: ".next",
                cssLast: ".last",
                cssGoto: ".gotoPage",
                cssPageDisplay: ".pagedisplay",
                cssPageSize: ".pagesize",
                cssErrorRow: "tablesorter-errorRow",
                cssDisabled: "disabled",
                totalRows: 0,
                totalPages: 0,
                filteredRows: 0,
                filteredPages: 0,
                ajaxCounter: 0,
                currentFilters: [],
                startRow: 0,
                endRow: 0,
                $size: null,
                last: {}
            };
            var c = this,
                d = function (a, b) {
                    var c = "addClass",
                        d = "removeClass",
                        e = a.cssDisabled,
                        f = !! b,
                        g = f || 0 === a.page,
                        h = Math.min(a.totalPages, a.filteredPages),
                        i = f || a.page === h - 1 || 0 === h;
                    a.updateArrows && (a.$container.find(a.cssFirst + "," + a.cssPrev)[g ? c : d](e).attr("aria-disabled", g), a.$container.find(a.cssNext + "," + a.cssLast)[i ? c : d](e).attr("aria-disabled", i))
                }, e = function (b, c) {
                    var d = b.config,
                        e = d.$table.hasClass("hasFilters");
                    e && !c.ajaxUrl ? a.isEmptyObject(d.cache) ? c.filteredRows = c.totalRows = d.$tbodies.eq(0).children("tr").not(c.countChildRows ? "" : "." + d.cssChildRow).length : (c.filteredRows = 0, a.each(d.cache[0].normalized, function (a, b) {
                        c.filteredRows += c.regexRows.test(b[d.columns].$row[0].className) ? 0 : 1
                    })) : e || (c.filteredRows = c.totalRows)
                }, f = function (c, f, i) {
                    if (!f.initializing) {
                        var j, k, l, m = c.config,
                            n = f.size || 10;
                        f.countChildRows && k.push(m.cssChildRow), f.totalPages = Math.ceil(f.totalRows / n), m.totalRows = f.totalRows, e(c, f), m.filteredRows = f.filteredRows, f.filteredPages = Math.ceil(f.filteredRows / n) || 0, Math.min(f.totalPages, f.filteredPages) >= 0 && (k = f.size * f.page > f.filteredRows && i, f.startRow = k ? 1 : 0 === f.filteredRows ? 0 : f.size * f.page + 1, f.page = k ? 0 : f.page, f.endRow = Math.min(f.filteredRows, f.totalRows, f.size * (f.page + 1)), l = f.$container.find(f.cssPageDisplay), j = (f.ajaxData && f.ajaxData.output ? f.ajaxData.output || f.output : f.output).replace(/\{page([\-+]\d+)?\}/gi, function (a, b) {
                            return f.totalPages ? f.page + (b ? parseInt(b, 10) : 1) : 0
                        }).replace(/\{\w+(\s*:\s*\w+)?\}/gi, function (a) {
                            var b, c, d = a.replace(/[{}\s]/g, ""),
                                e = d.split(":"),
                                g = f.ajaxData,
                                h = /(rows?|pages?)$/i.test(d) ? 0 : "";
                            return /(startRow|page)/.test(e[0]) && "input" === e[1] ? (b = ("" + ("page" === e[0] ? f.totalPages : f.totalRows)).length, c = "page" === e[0] ? f.page + 1 : f.startRow, '<input type="text" class="ts-' + e[0] + '" style="max-width:' + b + 'em" value="' + c + '"/>') : e.length > 1 && g && g[e[0]] ? g[e[0]][e[1]] : f[d] || (g ? g[d] : h) || h
                        }), l.length && (l["INPUT" === l[0].tagName ? "val" : "html"](j), f.$goto.length && (k = "", a.each(g(f), function (a, b) {
                            k += '<option value="' + b + '">' + b + "</option>"
                        }), f.$goto.html(k).val(f.page + 1)), l.find(".ts-startRow, .ts-page").unbind("change").bind("change", function () {
                            var b = a(this).val(),
                                c = a(this).hasClass("ts-startRow") ? Math.floor(b / f.size) + 1 : b;
                            m.$table.trigger("pageSet.pager", [c])
                        }))), d(f), h(c, f), f.initialized && i !== !1 && (m.$table.trigger("pagerComplete", f), f.savePages && b.storage && b.storage(c, f.storageKey, {
                            page: f.page,
                            size: f.size
                        }))
                    }
                }, g = function (b) {
                    var c, d, e, f, g, h, i = Math.min(b.totalPages, b.filteredPages) || 1,
                        j = 5 * Math.ceil(i / b.maxOptionSize / 5),
                        k = i > b.maxOptionSize,
                        l = b.page + 1,
                        m = j,
                        n = i - j,
                        o = [1],
                        p = k ? j : 1;
                    for (c = p; i >= c;) o.push(c), c += k ? j : 1;
                    if (o.push(i), k) {
                        for (e = [], d = Math.max(Math.floor(b.maxOptionSize / j) - 1, 5), m = l - d, 1 > m && (m = 1), n = l + d, n > i && (n = i), c = m; n >= c; c++) e.push(c);
                        o = a.grep(o, function (b, c) {
                            return a.inArray(b, o) === c
                        }), g = o.length, h = e.length, g - h > j / 2 && g + h > b.maxOptionSize && (f = Math.floor(g / 2) - Math.floor(h / 2), Array.prototype.splice.apply(o, [f, h])), o = o.concat(e)
                    }
                    return o = a.grep(o, function (b, c) {
                        return a.inArray(b, o) === c
                    }).sort(function (a, b) {
                        return a - b
                    })
                }, h = function (b, c) {
                    var d, e, f = b.config,
                        g = f.$tbodies.eq(0);
                    g.find("tr.pagerSavedHeightSpacer").remove(), c.fixedHeight && !c.isDisabled && (e = a.data(b, "pagerSavedHeight"), e && (d = e - g.height(), d > 5 && a.data(b, "pagerLastSize") === c.size && g.children("tr:visible").length < c.size && g.append('<tr class="pagerSavedHeightSpacer ' + f.selectorRemove.slice(1) + '" style="height:' + d + 'px;"></tr>')))
                }, i = function (b, c) {
                    var d, e = b.config,
                        f = e.$tbodies.eq(0);
                    f.find("tr.pagerSavedHeightSpacer").remove(), f.children("tr:visible").length || f.append('<tr class="pagerSavedHeightSpacer ' + e.selectorRemove.slice(1) + '"><td>&nbsp</td></tr>'), d = f.children("tr").eq(0).height() * c.size, a.data(b, "pagerSavedHeight", d), h(b, c), a.data(b, "pagerLastSize", c.size)
                }, j = function (a, c) {
                    if (!c.ajaxUrl) {
                        var d, e = 0,
                            f = a.config,
                            g = f.$tbodies.eq(0).children("tr"),
                            h = g.length,
                            i = c.page * c.size,
                            j = i + c.size,
                            k = f.widgetOptions && f.widgetOptions.filter_filteredRow || "filtered",
                            l = 0;
                        for (d = 0; h > d; d++) g[d].className.match(k) || (l === i && g[d].className.match(f.cssChildRow) ? g[d].style.display = "none" : (g[d].style.display = l >= i && j > l ? "" : "none", l += g[d].className.match(f.cssChildRow + "|" + f.selectorRemove.slice(1)) && !c.countChildRows ? 0 : 1, l === j && "none" !== g[d].style.display && g[d].className.match(b.css.cssHasChild) && (e = d)));
                        if (e > 0 && g[e].className.match(b.css.cssHasChild)) for (; ++e < h && g[e].className.match(f.cssChildRow);) g[e].style.display = ""
                    }
                }, k = function (b, c) {
                    c.size = parseInt(c.$size.val(), 10) || c.size, a.data(b, "pagerLastSize", c.size), d(c), c.removeRows || (j(b, c), a(b).bind("sortEnd.pager filterEnd.pager", function () {
                        j(b, c)
                    }))
                }, l = function (c, d, e, g, h) {
                    if ("function" == typeof e.ajaxProcessing) {
                        var i, j, k, l, m, n, o, p, q, r, s = d.config,
                            t = s.$table,
                            u = "",
                            v = e.ajaxProcessing(c, d, g) || [0, []],
                            w = t.find("thead th").length;
                        if (b.showError(d), h) s.debug && b.log("Ajax Error", g, h), b.showError(d, 0 === g.status ? "Not connected, verify Network" : 404 === g.status ? "Requested page not found [404]" : 500 === g.status ? "Internal Server Error [500]" : "parsererror" === h ? "Requested JSON parse failed" : "timeout" === h ? "Time out error" : "abort" === h ? "Ajax Request aborted" : "Uncaught error: " + g.statusText + " [" + g.status + "]"), s.$tbodies.eq(0).children("tr").detach(), e.totalRows = 0;
                        else {
                            if (a.isArray(v) ? (n = isNaN(v[0]) && !isNaN(v[1]), r = v[n ? 1 : 0], e.totalRows = isNaN(r) ? e.totalRows || 0 : r, s.totalRows = s.filteredRows = e.filteredRows = e.totalRows, p = 0 === e.totalRows ? [""] : v[n ? 0 : 1] || [], o = v[2]) : (e.ajaxData = v, s.totalRows = e.totalRows = v.total, s.filteredRows = e.filteredRows = "undefined" != typeof v.filteredRows ? v.filteredRows : v.total, o = v.headers, p = v.rows), q = p && p.length, p instanceof jQuery) e.processAjaxOnInit && (s.$tbodies.eq(0).children("tr").detach(), s.$tbodies.eq(0).append(p));
                            else if (q) {
                                for (i = 0; q > i; i++) {
                                    for (u += "<tr>", j = 0; j < p[i].length; j++) u += /^\s*<td/.test(p[i][j]) ? a.trim(p[i][j]) : "<td>" + p[i][j] + "</td>";
                                    u += "</tr>"
                                }
                                e.processAjaxOnInit && s.$tbodies.eq(0).html(u)
                            }
                            e.processAjaxOnInit = !0, o && o.length === w && (k = t.hasClass("hasStickyHeaders"), m = k ? s.widgetOptions.$sticky.children("thead:first").children("tr").children() : "", l = t.find("tfoot tr:first").children(), s.$headers.filter("th").each(function (c) {
                                var d, e = a(this);
                                e.find("." + b.css.icon).length ? (d = e.find("." + b.css.icon).clone(!0), e.find(".tablesorter-header-inner").html(o[c]).append(d), k && m.length && (d = m.eq(c).find("." + b.css.icon).clone(!0), m.eq(c).find(".tablesorter-header-inner").html(o[c]).append(d))) : (e.find(".tablesorter-header-inner").html(o[c]), k && m.length && m.eq(c).find(".tablesorter-header-inner").html(o[c])), l.eq(c).html(o[c])
                            }))
                        }
                        s.showProcessing && b.isProcessing(d), e.totalPages = Math.ceil(e.totalRows / (e.size || 10)), e.last.totalRows = e.totalRows, e.last.currentFilters = e.currentFilters, e.last.sortList = (s.sortList || []).join(","), f(d, e, !0), t.trigger("updateCache", [function () {
                            e.initialized && setTimeout(function () {
                                t.trigger("applyWidgets").trigger("pagerChange", e)
                            }, 0)
                        }])
                    }
                    e.initialized || (e.initialized = !0, e.initializing = !1, a(d).trigger("applyWidgets").trigger("pagerInitialized", e), f(d, e))
                }, m = function (c, d) {
                    var e, f = n(c, d),
                        g = a(document),
                        h = c.config;
                    "" !== f && (h.showProcessing && b.isProcessing(c, !0), g.bind("ajaxError.pager", function (a, b, e, f) {
                        l(null, c, d, b, f), g.unbind("ajaxError.pager")
                    }), e = ++d.ajaxCounter, d.last.ajaxUrl = f, d.ajaxObject.url = f, d.ajaxObject.success = function (a, b, f) {
                        e < d.ajaxCounter || (l(a, c, d, f), g.unbind("ajaxError.pager"), "function" == typeof d.oldAjaxSuccess && d.oldAjaxSuccess(a))
                    }, h.debug && b.log("ajax initialized", d.ajaxObject), a.ajax(d.ajaxObject))
                }, n = function (c, d) {
                    var e = c.config,
                        f = d.ajaxUrl ? d.ajaxUrl.replace(/\{page([\-+]\d+)?\}/, function (a, b) {
                            return d.page + (b ? parseInt(b, 10) : 0)
                        }).replace(/\{size\}/g, d.size) : "",
                        g = e.sortList,
                        h = d.currentFilters || a(c).data("lastSearch") || [],
                        i = f.match(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/),
                        j = f.match(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/),
                        k = [];
                    return i && (i = i[1], a.each(g, function (a, b) {
                        k.push(i + "[" + b[0] + "]=" + b[1])
                    }), f = f.replace(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/g, k.length ? k.join("&") : i), k = []), j && (j = j[1], a.each(h, function (a, b) {
                        b && k.push(j + "[" + a + "]=" + encodeURIComponent(b))
                    }), f = f.replace(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/g, k.length ? k.join("&") : j), d.currentFilters = h), "function" == typeof d.customAjaxUrl && (f = d.customAjaxUrl(c, f)), e.debug && b.log("Pager ajax url: " + f), f
                }, o = function (c, d, e) {
                    var g, h, i, k, l = a(c),
                        m = c.config,
                        n = m.$table.hasClass("hasFilters"),
                        o = d && d.length || 0,
                        p = e.page * e.size,
                        q = e.size;
                    if (1 > o) return void(m.debug && b.log("Pager: no rows for pager to render"));
                    if (e.page >= e.totalPages && u(c, e), e.isDisabled = !1, e.initialized && l.trigger("pagerChange", e), e.removeRows) {
                        for (b.clearTableBody(c), g = b.processTbody(c, m.$tbodies.eq(0), !0), h = n ? 0 : p, i = n ? 0 : p, k = 0; q > k && h < d.length;) n && /filtered/.test(d[h][0].className) || (i++, i > p && q >= k && (k++, g.append(d[h]))), h++;
                        b.processTbody(c, g, !1)
                    } else j(c, e);
                    f(c, e), c.isUpdating && l.trigger("updateComplete", [c, !0])
                }, p = function (c, e) {
                    e.ajax ? d(e, !0) : (e.isDisabled = !0, a.data(c, "pagerLastPage", e.page), a.data(c, "pagerLastSize", e.size), e.page = 0, e.size = e.totalRows, e.totalPages = 1, a(c).addClass("pagerDisabled").removeAttr("aria-describedby").find("tr.pagerSavedHeightSpacer").remove(), o(c, c.config.rowsCopy, e), a(c).trigger("applyWidgets"), c.config.debug && b.log("pager disabled")), e.$size.add(e.$goto).add(e.$container.find(".ts-startRow, .ts-page")).each(function () {
                        a(this).attr("aria-disabled", "true").addClass(e.cssDisabled)[0].disabled = !0
                    })
                }, q = function (a) {
                    var b = a.config,
                        c = b.pager;
                    b.$table.trigger("updateCache", [function () {
                        var d, e = [],
                            f = a.config.cache[0].normalized;
                        for (c.totalRows = f.length, d = 0; d < c.totalRows; d++) e.push(f[d][b.columns].$row);
                        b.rowsCopy = e, r(a, c, !0)
                    }])
                }, r = function (c, d, f) {
                    if (!d.isDisabled) {
                        var g, h = c.config,
                            i = a(c),
                            j = d.last;
                        return f !== !1 && d.initialized && a.isEmptyObject(h.cache) ? q(c) : void(d.ajax && b.hasWidget(c, "filter") && !h.widgetOptions.filter_initialized || (e(c, d), g = Math.min(d.totalPages, d.filteredPages), d.page < 0 && (d.page = 0), d.page > g - 1 && 0 !== g && (d.page = g - 1), j.currentFilters = "" === (j.currentFilters || []).join("") ? [] : j.currentFilters, d.currentFilters = "" === (d.currentFilters || []).join("") ? [] : d.currentFilters, (j.page !== d.page || j.size !== d.size || j.totalRows !== d.totalRows || (j.currentFilters || []).join(",") !== (d.currentFilters || []).join(",") || (j.ajaxUrl || "") !== (d.ajaxObject.url || "") || (j.optAjaxUrl || "") !== (d.ajaxUrl || "") || j.sortList !== (h.sortList || []).join(",")) && (h.debug && b.log("Pager changing to page " + d.page), d.last = {
                            page: d.page,
                            size: d.size,
                            sortList: (h.sortList || []).join(","),
                            totalRows: d.totalRows,
                            currentFilters: d.currentFilters || [],
                            ajaxUrl: d.ajaxObject.url || "",
                            optAjaxUrl: d.ajaxUrl || ""
                        }, d.ajax ? m(c, d) : d.ajax || o(c, h.rowsCopy, d), a.data(c, "pagerLastPage", d.page), d.initialized && f !== !1 && (i.trigger("pageMoved", d).trigger("applyWidgets"), c.isUpdating && i.trigger("updateComplete", [c, !0])))))
                    }
                }, s = function (b, c, d) {
                    d.size = c || d.size || 10, d.$size.val(d.size), a.data(b, "pagerLastPage", d.page), a.data(b, "pagerLastSize", d.size), d.totalPages = Math.ceil(d.totalRows / d.size), d.filteredPages = Math.ceil(d.filteredRows / d.size), r(b, d)
                }, t = function (a, b) {
                    b.page = 0, r(a, b)
                }, u = function (a, b) {
                    b.page = Math.min(b.totalPages, b.filteredPages) - 1, r(a, b)
                }, v = function (a, b) {
                    b.page++, b.page >= Math.min(b.totalPages, b.filteredPages) - 1 && (b.page = Math.min(b.totalPages, b.filteredPages) - 1), r(a, b)
                }, w = function (a, b) {
                    b.page--, b.page <= 0 && (b.page = 0), r(a, b)
                }, x = function (c, d) {
                    p(c, d), d.$container.hide(), c.config.appender = null, d.initialized = !1, delete c.config.rowsCopy, a(c).unbind("filterInit filterStart filterEnd sortEnd disable enable destroy updateComplete pageSize pageSet ".split(" ").join(".pager ")), b.storage && b.storage(c, d.storageKey, "")
                }, y = function (c, d, e) {
                    var f, g = c.config;
                    d.$size.add(d.$goto).add(d.$container.find(".ts-startRow, .ts-page")).removeClass(d.cssDisabled).removeAttr("disabled").attr("aria-disabled", "false"), d.isDisabled = !1, d.page = a.data(c, "pagerLastPage") || d.page || 0, d.size = a.data(c, "pagerLastSize") || parseInt(d.$size.find("option[selected]").val(), 10) || d.size || 10, d.$size.val(d.size), d.totalPages = Math.ceil(Math.min(d.totalRows, d.filteredRows) / d.size), c.id && (f = c.id + "_pager_info", d.$container.find(d.cssPageDisplay).attr("id", f), g.$table.attr("aria-describedby", f)), i(c, d), e && (g.$table.trigger("updateRows"), s(c, d.size, d), k(c, d), g.debug && b.log("pager enabled"))
                };
            c.appender = function (b, c) {
                var d = b.config,
                    e = d.pager;
                e.ajax || (d.rowsCopy = c, e.totalRows = e.countChildRows ? d.$tbodies.eq(0).children("tr").length : c.length, e.size = a.data(b, "pagerLastSize") || e.size || 10, e.totalPages = Math.ceil(e.totalRows / e.size), o(b, c, e), f(b, e, !1))
            }, c.construct = function (d) {
                return this.each(function () {
                    if (this.config && this.hasInitialized) {
                        var e, g, h, l = this,
                            m = l.config,
                            n = m.widgetOptions,
                            o = m.pager = a.extend(!0, {}, a.tablesorterPager.defaults, d),
                            z = m.$table,
                            A = o.$container = a(o.container).addClass("tablesorter-pager").show();
                        m.debug && b.log("Pager initializing"), o.oldAjaxSuccess = o.oldAjaxSuccess || o.ajaxObject.success, m.appender = c.appender, o.initializing = !0, o.savePages && b.storage && (e = b.storage(l, o.storageKey) || {}, o.page = isNaN(e.page) ? o.page : e.page, o.size = (isNaN(e.size) ? o.size : e.size) || 10, a.data(l, "pagerLastSize", o.size)), o.regexRows = new RegExp("(" + (n.filter_filteredRow || "filtered") + "|" + m.selectorRemove.slice(1) + "|" + m.cssChildRow + ")"), z.unbind("filterInit filterStart filterEnd sortEnd disable enable destroy updateComplete pageSize pageSet ".split(" ").join(".pager ")).bind("filterInit.pager filterStart.pager", function (a) {
                            o.currentFilters = m.$table.data("lastSearch"), "filterStart" === a.type && o.pageReset !== !1 && (m.lastCombinedFilter || "") !== (o.currentFilters || []).join("") && (o.page = o.pageReset)
                        }).bind("filterEnd.pager sortEnd.pager", function () {
                            o.currentFilters = m.$table.data("lastSearch"), (o.initialized || o.initializing) && (m.delayInit && m.rowsCopy && 0 === m.rowsCopy.length && q(l), f(l, o, !1), r(l, o, !1), m.$table.trigger("applyWidgets"))
                        }).bind("disable.pager", function (a) {
                            a.stopPropagation(), p(l, o)
                        }).bind("enable.pager", function (a) {
                            a.stopPropagation(), y(l, o, !0)
                        }).bind("destroy.pager", function (a) {
                            a.stopPropagation(), x(l, o)
                        }).bind("updateComplete.pager", function (a, b, c) {
                            if (a.stopPropagation(), b && !c) {
                                var d = m.$tbodies.eq(0).children("tr").not(m.selectorRemove);
                                o.totalRows = d.length - (o.countChildRows ? 0 : d.filter("." + m.cssChildRow).length), o.totalPages = Math.ceil(o.totalRows / o.size), d.length && m.rowsCopy && 0 === m.rowsCopy.length && q(b), o.page >= o.totalPages && u(b, o), j(b, o), i(b, o), f(b, o, !0)
                            }
                        }).bind("pageSize.pager", function (a, b) {
                            a.stopPropagation(), s(l, parseInt(b, 10) || 10, o), j(l, o), f(l, o, !1), o.$size.length && o.$size.val(o.size)
                        }).bind("pageSet.pager", function (a, b) {
                            a.stopPropagation(), o.page = (parseInt(b, 10) || 1) - 1, o.$goto.length && o.$goto.val(o.size), r(l, o, !0), f(l, o, !1)
                        }), g = [o.cssFirst, o.cssPrev, o.cssNext, o.cssLast], h = [t, w, v, u], A.find(g.join(",")).attr("tabindex", 0).unbind("click.pager").bind("click.pager", function (b) {
                            b.stopPropagation();
                            var c, d = a(this),
                                e = g.length;
                            if (!d.hasClass(o.cssDisabled)) for (c = 0; e > c; c++) if (d.is(g[c])) {
                                h[c](l, o);
                                break
                            }
                        }), o.$goto = A.find(o.cssGoto), o.$goto.length && o.$goto.unbind("change").bind("change", function () {
                            o.page = a(this).val() - 1, r(l, o, !0), f(l, o, !1)
                        }), o.$size = A.find(o.cssPageSize), o.$size.length && (o.$size.find("option").removeAttr("selected"), o.$size.unbind("change.pager").bind("change.pager", function () {
                            return o.$size.val(a(this).val()), a(this).hasClass(o.cssDisabled) || (s(l, parseInt(a(this).val(), 10), o), i(l, o)), !1
                        })), o.initialized = !1, z.trigger("pagerBeforeInitialized", o), y(l, o, !1), "string" == typeof o.ajaxUrl ? (o.ajax = !0, m.widgetOptions.filter_serversideFiltering = !0, m.serverSideSorting = !0, r(l, o)) : (o.ajax = !1, a(this).trigger("appendCache", !0), k(l, o)), o.ajax || o.initialized || (o.initializing = !1, o.initialized = !0, r(l, o), a(l).trigger("pagerInitialized", o), m.widgetOptions.filter_initialized && b.hasWidget(l, "filter") || f(l, o, !1))
                    }
                })
            }
        }
    }), b.showError = function (b, c) {
        a(b).each(function () {
            var b, d = this.config,
                e = d.pager && d.pager.cssErrorRow || d.widgetOptions.pager_css && d.widgetOptions.pager_css.errorRow || "tablesorter-errorRow";
            d && ("undefined" == typeof c ? d.$table.find("thead").find(d.selectorRemove).remove() : b = a(/tr\>/.test(c) ? c : '<tr><td colspan="' + d.columns + '">' + c + "</td></tr>").click(function () {
                a(this).remove()
            }).appendTo(d.$table.find("thead:first")).addClass(e + " " + d.selectorRemove.slice(1)).attr({
                role: "alert",
                "aria-live": "assertive"
            }))
        })
    }, a.fn.extend({
        tablesorterPager: a.tablesorterPager.construct
    })
}(jQuery),
function (a) {
    a.fn.visualize = function (b, c) {
        return a(this).each(function () {
            function d() {
                var b = e.colors,
                    c = e.textColors,
                    d = {
                        dataGroups: function () {
                            var d = [];
                            if ("x" == e.parseDirection) f.find("tr:gt(0)").filter(e.rowFilter).each(function (f) {
                                d[f] = {}, d[f].points = [], d[f].color = b[f], c[f] && (d[f].textColor = c[f]), a(this).find("td").filter(e.colFilter).each(function () {
                                    d[f].points.push(parseFloat(a(this).text()))
                                })
                            });
                            else for (var g = f.find("tr:eq(1) td").filter(e.colFilter).size(), h = 0; g > h; h++) d[h] = {}, d[h].points = [], d[h].color = b[h], c[h] && (d[h].textColor = c[h]), f.find("tr:gt(0)").filter(e.rowFilter).each(function () {
                                d[h].points.push(1 * a(this).find("td").filter(e.colFilter).eq(h).text())
                            });
                            return d
                        },
                        allData: function () {
                            var b = [];
                            return a(this.dataGroups()).each(function () {
                                b.push(this.points)
                            }), b
                        },
                        dataSum: function () {
                            var b = 0,
                                c = this.allData().join(",").split(",");
                            return a(c).each(function () {
                                b += parseFloat(this)
                            }), b
                        },
                        topValue: function () {
                            var b = 0,
                                c = this.allData().join(",").split(",");
                            return a(c).each(function () {
                                parseFloat(this, 10) > b && (b = parseFloat(this))
                            }), b
                        },
                        bottomValue: function () {
                            var b = 0,
                                c = this.allData().join(",").split(",");
                            return a(c).each(function () {
                                b > this && (b = parseFloat(this))
                            }), b
                        },
                        memberTotals: function () {
                            var b = [],
                                c = this.dataGroups();
                            return a(c).each(function (d) {
                                var e = 0;
                                a(c[d].points).each(function (a) {
                                    e += c[d].points[a]
                                }), b.push(e)
                            }), b
                        },
                        yTotals: function () {
                            for (var b = [], c = this.dataGroups(), d = this.xLabels().length, e = 0; d > e; e++) {
                                b[e] = [];
                                var f = 0;
                                a(c).each(function (a) {
                                    b[e].push(this.points[e])
                                }), b[e].join(",").split(","), a(b[e]).each(function () {
                                    f += parseFloat(this)
                                }), b[e] = f
                            }
                            return b
                        },
                        topYtotal: function () {
                            var b = 0,
                                c = this.yTotals().join(",").split(",");
                            return a(c).each(function () {
                                parseFloat(this, 10) > b && (b = parseFloat(this))
                            }), b
                        },
                        totalYRange: function () {
                            return this.topValue() - this.bottomValue()
                        },
                        xLabels: function () {
                            var b = [];
                            return "x" == e.parseDirection ? f.find("tr:eq(0) th").filter(e.colFilter).each(function () {
                                b.push(a(this).html())
                            }) : f.find("tr:gt(0) th").filter(e.rowFilter).each(function () {
                                b.push(a(this).html())
                            }), b
                        },
                        yLabels: function () {
                            var a = [];
                            a.push(p);
                            for (var b = Math.round(e.height / e.yLabelInterval), c = Math.ceil(r / b) || 1; a[a.length - 1] < o - c;) a.push(a[a.length - 1] + c);
                            return a.push(o), a
                        }
                    };
                return d
            }
            var e = a.extend({
                type: "bar",
                width: a(this).width(),
                height: a(this).height(),
                appendTitle: !0,
                title: null,
                appendKey: !0,
                rowFilter: "*",
                colFilter: "*",
                colors: ["#be1e2d", "#666699", "#92d5ea", "#ee8310", "#8d10ee", "#5a3b16", "#26a4ed", "#f45a90", "#e9e744"],
                textColors: [],
                parseDirection: "x",
                pieMargin: 20,
                pieLabelsAsPercent: !0,
                pieLabelPos: "inside",
                lineWeight: 4,
                barGroupMargin: 10,
                barMargin: 1,
                yLabelInterval: 30
            }, b);
            e.width = parseFloat(e.width), e.height = parseFloat(e.height);
            var f = a(this),
                g = {
                    pie: function () {
                        k.addClass("visualize-pie"), "outside" == e.pieLabelPos && k.addClass("visualize-pie-outside");
                        var b = Math.round(i.width() / 2),
                            c = Math.round(i.height() / 2),
                            d = c - e.pieMargin,
                            f = 0,
                            g = a('<ul class="visualize-labels"></ul>').insertAfter(i);
                        a.each(q, function (h) {
                            var i = 0 >= this || isNaN(this) ? 0 : this / n;
                            y.beginPath(), y.moveTo(b, c), y.arc(b, c, d, f * Math.PI * 2 - .5 * Math.PI, (f + i) * Math.PI * 2 - .5 * Math.PI, !1), y.lineTo(b, c), y.closePath(), y.fillStyle = m[h].color, y.fill();
                            var j = f + i / 2,
                                k = "inside" == e.pieLabelPos ? d / 1.5 : d + d / 5,
                                l = Math.round(b + Math.sin(j * Math.PI * 2) * k),
                                o = Math.round(c - Math.cos(j * Math.PI * 2) * k),
                                p = l > b ? "right" : "left",
                                q = o > c ? "bottom" : "top",
                                r = parseFloat((100 * i).toFixed(2));
                            if (r) {
                                var s = e.pieLabelsAsPercent ? r + "%" : this,
                                    t = a('<span class="visualize-label">' + s + "</span>").css(p, 0).css(q, 0);
                                if (t) {
                                    a('<li class="visualize-label-pos"></li>').appendTo(g).css({
                                        left: l,
                                        top: o
                                    }).append(t)
                                }
                                t.css("font-size", d / 8).css("margin-" + p, -t.width() / 2).css("margin-" + q, -t.outerHeight() / 2), m[h].textColor && t.css("color", m[h].textColor)
                            }
                            f += i
                        })
                    },
                    line: function (b) {
                        b ? k.addClass("visualize-area") : k.addClass("visualize-line");
                        var c = i.width() / (t.length - 1),
                            d = a('<ul class="visualize-labels-x"></ul>').width(i.width()).height(i.height()).insertBefore(i);
                        a.each(t, function (b) {
                            var e = a("<li><span>" + this + "</span></li>").prepend('<span class="line" />').css("left", c * b).appendTo(d),
                                f = e.find("span:not(.line)"),
                                g = f.width() / -2;
                            0 == b ? g = 0 : b == t.length - 1 && (g = -f.width()), f.css("margin-left", g).addClass("label")
                        });
                        var f = i.height() / r,
                            g = i.height() / (u.length - 1),
                            h = a('<ul class="visualize-labels-y"></ul>').width(i.width()).height(i.height()).insertBefore(i);
                        a.each(u, function (b) {
                            var c = a("<li><span>" + this + "</span></li>").prepend('<span class="line"  />').css("bottom", g * b).prependTo(h),
                                d = c.find("span:not(.line)"),
                                e = d.height() / -2;
                            0 == b ? e = -d.height() : b == u.length - 1 && (e = 0), d.css("margin-top", e).addClass("label")
                        }), y.translate(0, s), a.each(m, function (d) {
                            y.beginPath(), y.lineWidth = e.lineWeight, y.lineJoin = "round";
                            var g = this.points,
                                h = 0;
                            y.moveTo(0, -(g[0] * f)), a.each(g, function () {
                                y.lineTo(h, -(this * f)), h += c
                            }), y.strokeStyle = this.color, y.stroke(), b ? (y.lineTo(h, 0), y.lineTo(0, 0), y.closePath(), y.fillStyle = this.color, y.globalAlpha = .3, y.fill(), y.globalAlpha = 1) : y.closePath()
                        })
                    },
                    area: function () {
                        g.line(!0)
                    },
                    bar: function () {
                        k.addClass("visualize-bar");
                        var b = i.width() / t.length,
                            c = a('<ul class="visualize-labels-x"></ul>').width(i.width()).height(i.height()).insertBefore(i);
                        a.each(t, function (d) {
                            var e = a('<li><span class="label">' + this + "</span></li>").prepend('<span class="line" />').css("left", b * d).width(b).appendTo(c),
                                f = e.find("span.label");
                            f.addClass("label")
                        });
                        var d = i.height() / r,
                            f = i.height() / (u.length - 1),
                            g = a('<ul class="visualize-labels-y"></ul>').width(i.width()).height(i.height()).insertBefore(i);
                        a.each(u, function (b) {
                            var c = a("<li><span>" + this + "</span></li>").prepend('<span class="line"  />').css("bottom", f * b).prependTo(g),
                                d = c.find("span:not(.line)"),
                                e = d.height() / -2;
                            0 == b ? e = -d.height() : b == u.length - 1 && (e = 0), d.css("margin-top", e).addClass("label")
                        }), y.translate(0, s);
                        for (var h = 0; h < m.length; h++) {
                            y.beginPath();
                            var j = (b - 2 * e.barGroupMargin) / m.length,
                                l = j - 2 * e.barMargin;
                            y.lineWidth = l;
                            for (var n = m[h].points, o = 0, p = 0; p < n.length; p++) {
                                var q = o - e.barGroupMargin + h * j + j / 2;
                                q += 2 * e.barGroupMargin, y.moveTo(q, 0), y.lineTo(q, Math.round(-n[p] * d)), o += b
                            }
                            y.strokeStyle = m[h].color, y.stroke(), y.closePath()
                        }
                    }
                }, h = document.createElement("canvas");
            h.setAttribute("height", e.height), h.setAttribute("width", e.width);
            var i = a(h),
                j = e.title || f.find("caption").text(),
                k = (c || a('<div class="visualize" role="img" aria-label="Chart representing data from the table: ' + j + '" />')).height(e.height).width(e.width).append(i),
                l = d(),
                m = l.dataGroups(),
                n = (l.allData(), l.dataSum()),
                o = l.topValue(),
                p = l.bottomValue(),
                q = l.memberTotals(),
                r = l.totalYRange(),
                s = e.height * (o / r),
                t = l.xLabels(),
                u = l.yLabels();
            if (e.appendTitle || e.appendKey) var v = a('<div class="visualize-info"></div>').appendTo(k);
            if (e.appendTitle && a('<div class="visualize-title">' + j + "</div>").appendTo(v), e.appendKey) {
                var w, x = a('<ul class="visualize-key"></ul>');
                w = "x" == e.parseDirection ? f.find("tr:gt(0) th").filter(e.rowFilter) : f.find("tr:eq(0) th").filter(e.colFilter), w.each(function (b) {
                    a('<li><span class="visualize-key-color" style="background: ' + m[b].color + '"></span><span class="visualize-key-label">' + a(this).text() + "</span></li>").appendTo(x)
                }), x.appendTo(v)
            }
            c || k.insertAfter(this), "undefined" != typeof G_vmlCanvasManager && (G_vmlCanvasManager.init(), G_vmlCanvasManager.initElement(i[0]));
            var y = i[0].getContext("2d");
            g[e.type](), a(".visualize-line li:first-child span.line, .visualize-line li:last-child span.line, .visualize-area li:first-child span.line, .visualize-area li:last-child span.line, .visualize-bar li:first-child span.line,.visualize-bar .visualize-labels-y li:last-child span.line").css("border", "none"), c || k.bind("visualizeRefresh", function () {
                f.visualize(e, a(this).empty())
            })
        }).next()
    }
}(jQuery),
function () {
    var a = !1;
    window.JQClass = function () {}, JQClass.classes = {}, JQClass.extend = function b(c) {
        function d() {
            !a && this._init && this._init.apply(this, arguments)
        }
        var e = this.prototype;
        a = !0;
        var f = new this;
        a = !1;
        for (var g in c) f[g] = "function" == typeof c[g] && "function" == typeof e[g] ? function (a, b) {
            return function () {
                var c = this._super;
                this._super = function (b) {
                    return e[a].apply(this, b || [])
                };
                var d = b.apply(this, arguments);
                return this._super = c, d
            }
        }(g, c[g]) : c[g];
        return d.prototype = f, d.prototype.constructor = d, d.extend = b, d
    }
}(),
function ($) {
    function camelCase(a) {
        return a.replace(/-([a-z])/g, function (a, b) {
            return b.toUpperCase()
        })
    }
    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function () {
            return "is-" + this.name
        },
        _init: function () {
            $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var a = camelCase(this.name);
            $[a] = this, $.fn[a] = function (b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return $[a]._isNotChained(b, c) ? $[a][b].apply($[a], [this[0]].concat(c)) : this.each(function () {
                    if ("string" == typeof b) {
                        if ("_" === b[0] || !$[a][b]) throw "Unknown method: " + b;
                        $[a][b].apply($[a], [this].concat(c))
                    } else $[a]._attach(this, b)
                })
            }
        },
        setDefaults: function (a) {
            $.extend(this.defaultOptions, a || {})
        },
        _isNotChained: function (a, b) {
            return "option" === a && (0 === b.length || 1 === b.length && "string" == typeof b[0]) ? !0 : $.inArray(a, this._getters) > -1
        },
        _attach: function (a, b) {
            if (a = $(a), !a.hasClass(this._getMarker())) {
                a.addClass(this._getMarker()), b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
                var c = $.extend({
                    name: this.name,
                    elem: a,
                    options: b
                }, this._instSettings(a, b));
                a.data(this.name, c), this._postAttach(a, c), this.option(a, b)
            }
        },
        _instSettings: function (a, b) {
            return {}
        },
        _postAttach: function (a, b) {},
        _getMetadata: function (elem) {
            try {
                var data = elem.data(this.name.toLowerCase()) || "";
                data = data.replace(/'/g, '"'), data = data.replace(/([a-zA-Z0-9]+):/g, function (a, b, c) {
                    var d = data.substring(0, c).match(/"/g);
                    return d && d.length % 2 !== 0 ? b + ":" : '"' + b + '":'
                }), data = $.parseJSON("{" + data + "}");
                for (var name in data) {
                    var value = data[name];
                    "string" == typeof value && value.match(/^new Date\((.*)\)$/) && (data[name] = eval(value))
                }
                return data
            } catch (e) {
                return {}
            }
        },
        _getInst: function (a) {
            return $(a).data(this.name) || {}
        },
        option: function (a, b, c) {
            a = $(a);
            var d = a.data(this.name);
            if (!b || "string" == typeof b && null == c) {
                var e = (d || {}).options;
                return e && b ? e[b] : e
            }
            if (a.hasClass(this._getMarker())) {
                var e = b || {};
                "string" == typeof b && (e = {}, e[b] = c), this._optionsChanged(a, d, e), $.extend(d.options, e)
            }
        },
        _optionsChanged: function (a, b, c) {},
        destroy: function (a) {
            a = $(a), a.hasClass(this._getMarker()) && (this._preDestroy(a, this._getInst(a)), a.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function (a, b) {}
    }), $.JQPlugin = {
        createPlugin: function (a, b) {
            "object" == typeof a && (b = a, a = "JQPlugin"), a = camelCase(a);
            var c = camelCase(b.name);
            JQClass.classes[c] = JQClass.classes[a].extend(b), new JQClass.classes[c]
        }
    }
}(jQuery),
function (a) {
    var b = "countdown",
        c = 0,
        d = 1,
        e = 2,
        f = 3,
        g = 4,
        h = 5,
        i = 6;
    a.JQPlugin.createPlugin({
        name: b,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            padZeroes: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }
        },
        _getters: ["getTimes"],
        _rtlClass: b + "-rtl",
        _sectionClass: b + "-section",
        _amountClass: b + "-amount",
        _periodClass: b + "-period",
        _rowClass: b + "-row",
        _holdingClass: b + "-holding",
        _showClass: b + "-show",
        _descrClass: b + "-descr",
        _timerElems: [],
        _init: function () {
            function b(a) {
                var h = 1e12 > a ? e ? performance.now() + performance.timing.navigationStart : d() : a || d();
                h - g >= 1e3 && (c._updateElems(), g = h), f(b)
            }
            var c = this;
            this._super(), this._serverSyncs = [];
            var d = "function" == typeof Date.now ? Date.now : function () {
                    return (new Date).getTime()
                }, e = window.performance && "function" == typeof window.performance.now,
                f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                g = 0;
            !f || a.noRequestAnimationFrame ? (a.noRequestAnimationFrame = null, setInterval(function () {
                c._updateElems()
            }, 980)) : (g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d(), f(b))
        },
        UTCDate: function (a, b, c, d, e, f, g, h) {
            "object" == typeof b && b.constructor == Date && (h = b.getMilliseconds(), g = b.getSeconds(), f = b.getMinutes(), e = b.getHours(), d = b.getDate(), c = b.getMonth(), b = b.getFullYear());
            var i = new Date;
            return i.setUTCFullYear(b), i.setUTCDate(1), i.setUTCMonth(c || 0), i.setUTCDate(d || 1), i.setUTCHours(e || 0), i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? 60 * a : a)), i.setUTCSeconds(g || 0), i.setUTCMilliseconds(h || 0), i
        },
        periodsToSeconds: function (a) {
            return 31557600 * a[0] + 2629800 * a[1] + 604800 * a[2] + 86400 * a[3] + 3600 * a[4] + 60 * a[5] + a[6]
        },
        resync: function () {
            var b = this;
            a("." + this._getMarker()).each(function () {
                var c = a.data(this, b.name);
                if (c.options.serverSync) {
                    for (var d = null, e = 0; e < b._serverSyncs.length; e++) if (b._serverSyncs[e][0] == c.options.serverSync) {
                        d = b._serverSyncs[e];
                        break
                    }
                    if (null == d[2]) {
                        var f = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(this, []) : null;
                        d[2] = (f ? (new Date).getTime() - f.getTime() : 0) - d[1]
                    }
                    c._since && c._since.setMilliseconds(c._since.getMilliseconds() + d[2]), c._until.setMilliseconds(c._until.getMilliseconds() + d[2])
                }
            });
            for (var c = 0; c < b._serverSyncs.length; c++) null != b._serverSyncs[c][2] && (b._serverSyncs[c][1] += b._serverSyncs[c][2], delete b._serverSyncs[c][2])
        },
        _instSettings: function (a, b) {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function (a) {
            this._hasElem(a) || this._timerElems.push(a)
        },
        _hasElem: function (b) {
            return a.inArray(b, this._timerElems) > -1
        },
        _removeElem: function (b) {
            this._timerElems = a.map(this._timerElems, function (a) {
                return a == b ? null : a
            })
        },
        _updateElems: function () {
            for (var a = this._timerElems.length - 1; a >= 0; a--) this._updateCountdown(this._timerElems[a])
        },
        _optionsChanged: function (b, c, d) {
            d.layout && (d.layout = d.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(c.options, d);
            var e = c.options.timezone != d.timezone;
            a.extend(c.options, d), this._adjustSettings(b, c, null != d.until || null != d.since || e);
            var f = new Date;
            (c._since && c._since < f || c._until && c._until > f) && this._addElem(b[0]), this._updateCountdown(b, c)
        },
        _updateCountdown: function (b, c) {
            if (b = b.jquery ? b : a(b), c = c || this._getInst(b)) {
                if (b.html(this._generateHTML(c)).toggleClass(this._rtlClass, c.options.isRTL), a.isFunction(c.options.onTick)) {
                    var d = "lap" != c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date);
                    (1 == c.options.tickInterval || this.periodsToSeconds(d) % c.options.tickInterval == 0) && c.options.onTick.apply(b[0], [d])
                }
                var e = "pause" != c._hold && (c._since ? c._now.getTime() < c._since.getTime() : c._now.getTime() >= c._until.getTime());
                if (e && !c._expiring) {
                    if (c._expiring = !0, this._hasElem(b[0]) || c.options.alwaysExpire) {
                        if (this._removeElem(b[0]), a.isFunction(c.options.onExpiry) && c.options.onExpiry.apply(b[0], []), c.options.expiryText) {
                            var f = c.options.layout;
                            c.options.layout = c.options.expiryText, this._updateCountdown(b[0], c), c.options.layout = f
                        }
                        c.options.expiryUrl && (window.location = c.options.expiryUrl)
                    }
                    c._expiring = !1
                } else "pause" == c._hold && this._removeElem(b[0])
            }
        },
        _resetExtraLabels: function (a, b) {
            for (var c in b) c.match(/[Ll]abels[02-9]|compactLabels1/) && (a[c] = b[c]);
            for (var c in a) c.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof b[c] && (a[c] = null)
        },
        _adjustSettings: function (b, c, d) {
            for (var e = null, f = 0; f < this._serverSyncs.length; f++) if (this._serverSyncs[f][0] == c.options.serverSync) {
                e = this._serverSyncs[f][1];
                break
            }
            if (null != e) var g = c.options.serverSync ? e : 0,
                h = new Date;
            else {
                var i = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(b[0], []) : null,
                    h = new Date,
                    g = i ? h.getTime() - i.getTime() : 0;
                this._serverSyncs.push([c.options.serverSync, g])
            }
            var j = c.options.timezone;
            j = null == j ? -h.getTimezoneOffset() : j, (d || !d && null == c._until && null == c._since) && (c._since = c.options.since, null != c._since && (c._since = this.UTCDate(j, this._determineTime(c._since, null)), c._since && g && c._since.setMilliseconds(c._since.getMilliseconds() + g)), c._until = this.UTCDate(j, this._determineTime(c.options.until, h)), g && c._until.setMilliseconds(c._until.getMilliseconds() + g)), c._show = this._determineShow(c)
        },
        _preDestroy: function (a, b) {
            this._removeElem(a[0]), a.empty()
        },
        pause: function (a) {
            this._hold(a, "pause")
        },
        lap: function (a) {
            this._hold(a, "lap")
        },
        resume: function (a) {
            this._hold(a, null)
        },
        toggle: function (b) {
            var c = a.data(b, this.name) || {};
            this[c._hold ? "resume" : "pause"](b)
        },
        toggleLap: function (b) {
            var c = a.data(b, this.name) || {};
            this[c._hold ? "resume" : "lap"](b)
        },
        _hold: function (b, c) {
            var d = a.data(b, this.name);
            if (d) {
                if ("pause" == d._hold && !c) {
                    d._periods = d._savePeriods;
                    var e = d._since ? "-" : "+";
                    d[d._since ? "_since" : "_until"] = this._determineTime(e + d._periods[0] + "y" + e + d._periods[1] + "o" + e + d._periods[2] + "w" + e + d._periods[3] + "d" + e + d._periods[4] + "h" + e + d._periods[5] + "m" + e + d._periods[6] + "s"), this._addElem(b)
                }
                d._hold = c, d._savePeriods = "pause" == c ? d._periods : null, a.data(b, this.name, d), this._updateCountdown(b, d)
            }
        },
        getTimes: function (b) {
            var c = a.data(b, this.name);
            return c ? "pause" == c._hold ? c._savePeriods : c._hold ? this._calculatePeriods(c, c._show, c.options.significant, new Date) : c._periods : null
        },
        _determineTime: function (a, b) {
            var c = this,
                d = function (a) {
                    var b = new Date;
                    return b.setTime(b.getTime() + 1e3 * a), b
                }, e = function (a) {
                    a = a.toLowerCase();
                    for (var b = new Date, d = b.getFullYear(), e = b.getMonth(), f = b.getDate(), g = b.getHours(), h = b.getMinutes(), i = b.getSeconds(), j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, k = j.exec(a); k;) {
                        switch (k[2] || "s") {
                            case "s":
                                i += parseInt(k[1], 10);
                                break;
                            case "m":
                                h += parseInt(k[1], 10);
                                break;
                            case "h":
                                g += parseInt(k[1], 10);
                                break;
                            case "d":
                                f += parseInt(k[1], 10);
                                break;
                            case "w":
                                f += 7 * parseInt(k[1], 10);
                                break;
                            case "o":
                                e += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e));
                                break;
                            case "y":
                                d += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e))
                        }
                        k = j.exec(a)
                    }
                    return new Date(d, e, f, g, h, i, 0)
                }, f = null == a ? b : "string" == typeof a ? e(a) : "number" == typeof a ? d(a) : a;
            return f && f.setMilliseconds(0), f
        },
        _getDaysInMonth: function (a, b) {
            return 32 - new Date(a, b, 32).getDate()
        },
        _normalLabels: function (a) {
            return a
        },
        _generateHTML: function (b) {
            var j = this;
            b._periods = b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date);
            for (var k = !1, l = 0, m = b.options.significant, n = a.extend({}, b._show), o = c; i >= o; o++) k |= "?" == b._show[o] && b._periods[o] > 0, n[o] = "?" != b._show[o] || k ? b._show[o] : null, l += n[o] ? 1 : 0, m -= b._periods[o] > 0 ? 1 : 0;
            for (var p = [!1, !1, !1, !1, !1, !1, !1], o = i; o >= c; o--) b._show[o] && (b._periods[o] ? p[o] = !0 : (p[o] = m > 0, m--));
            var q = b.options.compact ? b.options.compactLabels : b.options.labels,
                r = b.options.whichLabels || this._normalLabels,
                s = function (a) {
                    var c = b.options["compactLabels" + r(b._periods[a])];
                    return n[a] ? j._translateDigits(b, b._periods[a]) + (c ? c[a] : q[a]) + " " : ""
                }, t = b.options.padZeroes ? 2 : 1,
                u = function (a) {
                    var c = b.options["labels" + r(b._periods[a])];
                    return !b.options.significant && n[a] || b.options.significant && p[a] ? '<span class="' + j._sectionClass + '"><span class="' + j._amountClass + '">' + j._minDigits(b, b._periods[a], t) + '</span><span class="' + j._periodClass + '">' + (c ? c[a] : q[a]) + "</span></span>" : ""
                };
            return b.options.layout ? this._buildLayout(b, n, b.options.layout, b.options.compact, b.options.significant, p) : (b.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (b._hold ? " " + this._holdingClass : "") + '">' + s(c) + s(d) + s(e) + s(f) + (n[g] ? this._minDigits(b, b._periods[g], 2) : "") + (n[h] ? (n[g] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[h], 2) : "") + (n[i] ? (n[g] || n[h] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (b.options.significant || l) + (b._hold ? " " + this._holdingClass : "") + '">' + u(c) + u(d) + u(e) + u(f) + u(g) + u(h) + u(i)) + "</span>" + (b.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + b.options.description + "</span>" : "")
        },
        _buildLayout: function (b, j, k, l, m, n) {
            for (var o = b.options[l ? "compactLabels" : "labels"], p = b.options.whichLabels || this._normalLabels, q = function (a) {
                return (b.options[(l ? "compactLabels" : "labels") + p(b._periods[a])] || o)[a]
            }, r = function (a, c) {
                return b.options.digits[Math.floor(a / c) % 10]
            }, s = {
                desc: b.options.description,
                sep: b.options.timeSeparator,
                yl: q(c),
                yn: this._minDigits(b, b._periods[c], 1),
                ynn: this._minDigits(b, b._periods[c], 2),
                ynnn: this._minDigits(b, b._periods[c], 3),
                y1: r(b._periods[c], 1),
                y10: r(b._periods[c], 10),
                y100: r(b._periods[c], 100),
                y1000: r(b._periods[c], 1e3),
                ol: q(d),
                on: this._minDigits(b, b._periods[d], 1),
                onn: this._minDigits(b, b._periods[d], 2),
                onnn: this._minDigits(b, b._periods[d], 3),
                o1: r(b._periods[d], 1),
                o10: r(b._periods[d], 10),
                o100: r(b._periods[d], 100),
                o1000: r(b._periods[d], 1e3),
                wl: q(e),
                wn: this._minDigits(b, b._periods[e], 1),
                wnn: this._minDigits(b, b._periods[e], 2),
                wnnn: this._minDigits(b, b._periods[e], 3),
                w1: r(b._periods[e], 1),
                w10: r(b._periods[e], 10),
                w100: r(b._periods[e], 100),
                w1000: r(b._periods[e], 1e3),
                dl: q(f),
                dn: this._minDigits(b, b._periods[f], 1),
                dnn: this._minDigits(b, b._periods[f], 2),
                dnnn: this._minDigits(b, b._periods[f], 3),
                d1: r(b._periods[f], 1),
                d10: r(b._periods[f], 10),
                d100: r(b._periods[f], 100),
                d1000: r(b._periods[f], 1e3),
                hl: q(g),
                hn: this._minDigits(b, b._periods[g], 1),
                hnn: this._minDigits(b, b._periods[g], 2),
                hnnn: this._minDigits(b, b._periods[g], 3),
                h1: r(b._periods[g], 1),
                h10: r(b._periods[g], 10),
                h100: r(b._periods[g], 100),
                h1000: r(b._periods[g], 1e3),
                ml: q(h),
                mn: this._minDigits(b, b._periods[h], 1),
                mnn: this._minDigits(b, b._periods[h], 2),
                mnnn: this._minDigits(b, b._periods[h], 3),
                m1: r(b._periods[h], 1),
                m10: r(b._periods[h], 10),
                m100: r(b._periods[h], 100),
                m1000: r(b._periods[h], 1e3),
                sl: q(i),
                sn: this._minDigits(b, b._periods[i], 1),
                snn: this._minDigits(b, b._periods[i], 2),
                snnn: this._minDigits(b, b._periods[i], 3),
                s1: r(b._periods[i], 1),
                s10: r(b._periods[i], 10),
                s100: r(b._periods[i], 100),
                s1000: r(b._periods[i], 1e3)
            }, t = k, u = c; i >= u; u++) {
                var v = "yowdhms".charAt(u),
                    w = new RegExp("\\{" + v + "<\\}([\\s\\S]*)\\{" + v + ">\\}", "g");
                t = t.replace(w, !m && j[u] || m && n[u] ? "$1" : "")
            }
            return a.each(s, function (a, b) {
                var c = new RegExp("\\{" + a + "\\}", "g");
                t = t.replace(c, b)
            }), t
        },
        _minDigits: function (a, b, c) {
            return b = "" + b, b.length >= c ? this._translateDigits(a, b) : (b = "0000000000" + b, this._translateDigits(a, b.substr(b.length - c)))
        },
        _translateDigits: function (a, b) {
            return ("" + b).replace(/[0-9]/g, function (b) {
                return a.options.digits[b]
            })
        },
        _determineShow: function (a) {
            var b = a.options.format,
                j = [];
            return j[c] = b.match("y") ? "?" : b.match("Y") ? "!" : null, j[d] = b.match("o") ? "?" : b.match("O") ? "!" : null, j[e] = b.match("w") ? "?" : b.match("W") ? "!" : null, j[f] = b.match("d") ? "?" : b.match("D") ? "!" : null, j[g] = b.match("h") ? "?" : b.match("H") ? "!" : null, j[h] = b.match("m") ? "?" : b.match("M") ? "!" : null, j[i] = b.match("s") ? "?" : b.match("S") ? "!" : null, j
        },
        _calculatePeriods: function (a, b, j, k) {
            a._now = k, a._now.setMilliseconds(0);
            var l = new Date(a._now.getTime());
            a._since ? k.getTime() < a._since.getTime() ? a._now = k = l : k = a._since : (l.setTime(a._until.getTime()), k.getTime() > a._until.getTime() && (a._now = k = l));
            var m = [0, 0, 0, 0, 0, 0, 0];
            if (b[c] || b[d]) {
                var n = this._getDaysInMonth(k.getFullYear(), k.getMonth()),
                    o = this._getDaysInMonth(l.getFullYear(), l.getMonth()),
                    p = l.getDate() == k.getDate() || l.getDate() >= Math.min(n, o) && k.getDate() >= Math.min(n, o),
                    q = function (a) {
                        return 60 * (60 * a.getHours() + a.getMinutes()) + a.getSeconds()
                    }, r = Math.max(0, 12 * (l.getFullYear() - k.getFullYear()) + l.getMonth() - k.getMonth() + (l.getDate() < k.getDate() && !p || p && q(l) < q(k) ? -1 : 0));
                m[c] = b[c] ? Math.floor(r / 12) : 0, m[d] = b[d] ? r - 12 * m[c] : 0, k = new Date(k.getTime());
                var s = k.getDate() == n,
                    t = this._getDaysInMonth(k.getFullYear() + m[c], k.getMonth() + m[d]);
                k.getDate() > t && k.setDate(t), k.setFullYear(k.getFullYear() + m[c]), k.setMonth(k.getMonth() + m[d]), s && k.setDate(t)
            }
            var u = Math.floor((l.getTime() - k.getTime()) / 1e3),
                v = function (a, c) {
                    m[a] = b[a] ? Math.floor(u / c) : 0, u -= m[a] * c
                };
            if (v(e, 604800), v(f, 86400), v(g, 3600), v(h, 60), v(i, 1), u > 0 && !a._since) for (var w = [1, 12, 4.3482, 7, 24, 60, 60], x = i, y = 1, z = i; z >= c; z--) b[z] && (m[x] >= y && (m[x] = 0, u = 1), u > 0 && (m[z]++, u = 0, x = z, y = 1)), y *= w[z];
            if (j) for (var z = c; i >= z; z++) j && m[z] ? j-- : j || (m[z] = 0);
            return m
        }
    })
}(jQuery),
function (a) {
    if ("undefined" == typeof moment) throw alert("momentjs is requried"), new Error("momentjs is requried");
    var b = 0,
        c = moment,
        d = function (d, e) {
            var f = {
                pickDate: !0,
                pickTime: !0,
                startDate: new c({
                    y: 1970
                }),
                endDate: (new c).add(50, "y"),
                collapse: !0,
                language: "zh_TW",
                defaultDate: "",
                disabledDates: [],
                icons: {},
                useStrict: !1
            }, g = {
                time: "glyphicon glyphicon-time",
                date: "glyphicon glyphicon-calendar",
                up: "glyphicon glyphicon-chevron-up",
                down: "glyphicon glyphicon-chevron-down"
            }, h = this,
                i = function () {
                    var i, j, k, l = !1;
                    if (h.options = a.extend({}, f, e), h.options.icons = a.extend({}, g, h.options.icons), !h.options.pickTime && !h.options.pickDate) throw new Error("Must choose at least one picker");
                    if (h.id = b++, c.lang(h.options.language), h.date = c(), h.element = a(d), h.unset = !1, h.isInput = h.element.is("input"), h.component = !1, h.element.hasClass("input-group") && (0 == h.element.find(".datepickerbutton").size() ? h.component = h.element.find(".input-group-addon") : h.component = h.element.find(".datepickerbutton")), h.format = h.options.format, k = c()._lang._longDateFormat, h.format || (h.isInput ? h.format = h.element.data("format") : h.format = h.element.find("input").data("format"), h.format || (h.format = h.options.pickDate ? k.L : "", h.options.pickDate && h.options.pickTime && (h.format += " "), h.format += h.options.pickTime ? k.LT : "")), h.use24hours = h.format.toLowerCase().indexOf("a") < 1, h.component && (l = h.component.find("span")), h.options.pickTime && l && l.addClass(h.options.icons.time), h.options.pickDate && l && (l.removeClass(h.options.icons.time), l.addClass(h.options.icons.date)), h.widget = a(I(h.options.pickDate, h.options.pickTime, h.options.collapse)).appendTo("body"), h.minViewMode = h.options.minViewMode || h.element.data("date-minviewmode") || 0, "string" == typeof h.minViewMode) switch (h.minViewMode) {
                        case "months":
                            h.minViewMode = 1;
                            break;
                        case "years":
                            h.minViewMode = 2;
                            break;
                        default:
                            h.minViewMode = 0
                    }
                    if (h.viewMode = h.options.viewMode || h.element.data("date-viewmode") || 0, "string" == typeof h.viewMode) switch (h.viewMode) {
                        case "months":
                            h.viewMode = 1;
                            break;
                        case "years":
                            h.viewMode = 2;
                            break;
                        default:
                            h.viewMode = 0
                    }
                    for (i = 0; i < h.options.disabledDates.length; i++) j = h.options.disabledDates[i], j = c(j), j.isValid() || (j = c(h.options.startDate).subtract(1, "day")), h.options.disabledDates[i] = j.format("L");
                    h.startViewMode = h.viewMode, h.setStartDate(h.options.startDate || h.element.data("date-startdate")), h.setEndDate(h.options.endDate || h.element.data("date-enddate")), n(), o(), q(), r(), m(), y(), z(), "" !== h.options.defaultDate && h.setValue(h.options.defaultDate)
                }, j = function () {
                    var b = "absolute",
                        c = h.component ? h.component.offset() : h.element.offset(),
                        d = a(window);
                    h.width = h.component ? h.component.outerWidth() : h.element.outerWidth(), c.top = c.top + h.element.outerHeight(), void 0 !== h.options.width && h.widget.width(h.options.width), "left" === h.options.orientation && (h.widget.addClass("left-oriented"), c.left = c.left - h.widget.width() + 20), D() && (b = "fixed", c.top -= d.scrollTop(), c.left -= d.scrollLeft()), d.width() < c.left + h.widget.outerWidth() ? (c.right = d.width() - c.left - h.width, c.left = "auto", h.widget.addClass("pull-right")) : (c.right = "auto", h.widget.removeClass("pull-right")), h.widget.css({
                        position: b,
                        top: c.top,
                        left: c.left,
                        right: c.right
                    })
                }, k = function (a) {
                    h.element.trigger({
                        type: "change.dp",
                        date: h.getDate(),
                        oldDate: a
                    })
                }, l = function (a) {
                    h.element.trigger({
                        type: "error.dp",
                        date: a
                    })
                }, m = function (a) {
                    c.lang(h.options.language);
                    var b = a;
                    b || (b = h.isInput ? h.element.val() : h.element.find("input").val(), b && (h.date = c(b, h.format, h.options.useStrict)), h.date || (h.date = c())), h.viewDate = c(h.date).startOf("month"), p(), s()
                }, n = function () {
                    c.lang(h.options.language);
                    var b, d = a("<tr>"),
                        e = c.weekdaysMin();
                    if (0 == c()._lang._week.dow) for (b = 0; 7 > b; b++) d.append('<th class="dow">' + e[b] + "</th>");
                    else for (b = 1; 8 > b; b++) 7 == b ? d.append('<th class="dow">' + e[0] + "</th>") : d.append('<th class="dow">' + e[b] + "</th>");
                    h.widget.find(".datepicker-days thead").append(d)
                }, o = function () {
                    c.lang(h.options.language);
                    for (var a = "", b = 0, d = c.monthsShort(); 12 > b;) a += '<span class="month">' + d[b++] + "</span>";
                    h.widget.find(".datepicker-months td").append(a)
                }, p = function () {
                    c.lang(h.options.language);
                    var b, d, e, f, g, i, j, k, l = h.viewDate.year(),
                        m = h.viewDate.month(),
                        n = h.options.startDate.year(),
                        o = h.options.startDate.month(),
                        p = h.options.endDate.year(),
                        q = h.options.endDate.month(),
                        r = [],
                        s = c.months();
                    for (h.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), h.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), h.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), h.widget.find(".datepicker-days th:eq(1)").text(s[m] + " " + l), b = c(h.viewDate).subtract("months", 1), i = b.daysInMonth(), b.date(i).startOf("week"), (l == n && o >= m || n > l) && h.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (l == p && m >= q || l > p) && h.widget.find(".datepicker-days th:eq(2)").addClass("disabled"), d = c(b).add(42, "d"); b.isBefore(d);) b.weekday() === c().startOf("week").weekday() && (e = a("<tr>"), r.push(e)), f = "", b.year() < l || b.year() == l && b.month() < m ? f += " old" : (b.year() > l || b.year() == l && b.month() > m) && (f += " new"), b.isSame(c({
                        y: h.date.year(),
                        M: h.date.month(),
                        d: h.date.date()
                    })) && (f += " active"), (c(b).add(1, "d") <= h.options.startDate || b > h.options.endDate || G(b)) && (f += " disabled"), e.append('<td class="day' + f + '">' + b.date() + "</td>"), b.add(1, "d");
                    for (h.widget.find(".datepicker-days tbody").empty().append(r), k = c().year(), s = h.widget.find(".datepicker-months").find("th:eq(1)").text(l).end().find("span").removeClass("active"), k === l && s.eq(c().month()).addClass("active"), n > k - 1 && h.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), k + 1 > p && h.widget.find(".datepicker-months th:eq(2)").addClass("disabled"), g = 0; 12 > g; g++) l == n && o > g || n > l ? a(s[g]).addClass("disabled") : (l == p && g > q || l > p) && a(s[g]).addClass("disabled");
                    for (r = "", l = 10 * parseInt(l / 10, 10), j = h.widget.find(".datepicker-years").find("th:eq(1)").text(l + "-" + (l + 9)).end().find("td"), h.widget.find(".datepicker-years").find("th").removeClass("disabled"), n > l && h.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), l + 9 > p && h.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), l -= 1, g = -1; 11 > g; g++) r += '<span class="year' + (-1 === g || 10 === g ? " old" : "") + (k === l ? " active" : "") + (n > l || l > p ? " disabled" : "") + '">' + l + "</span>", l += 1;
                    j.html(r)
                }, q = function () {
                    c.lang(h.options.language);
                    var a, b, d, e = h.widget.find(".timepicker .timepicker-hours table"),
                        f = "";
                    if (e.parent().hide(), h.use24hours) for (a = 0, b = 0; 6 > b; b += 1) {
                        for (f += "<tr>", d = 0; 4 > d; d += 1) f += '<td class="hour">' + H(a.toString()) + "</td>", a++;
                        f += "</tr>"
                    } else for (a = 1, b = 0; 3 > b; b += 1) {
                        for (f += "<tr>", d = 0; 4 > d; d += 1) f += '<td class="hour">' + H(a.toString()) + "</td>", a++;
                        f += "</tr>"
                    }
                    e.html(f)
                }, r = function () {
                    var a, b, c = h.widget.find(".timepicker .timepicker-minutes table"),
                        d = "",
                        e = 0;
                    for (c.parent().hide(), a = 0; 5 > a; a++) {
                        for (d += "<tr>", b = 0; 4 > b; b += 1) d += '<td class="minute">' + H(e.toString()) + "</td>", e += 3;
                        d += "</tr>"
                    }
                    c.html(d)
                }, s = function () {
                    if (h.date) {
                        var a = h.widget.find(".timepicker span[data-time-component]"),
                            b = h.date.hours(),
                            c = "AM";
                        h.use24hours || (b >= 12 && (c = "PM"), 0 === b ? b = 12 : 12 != b && (b %= 12), h.widget.find(".timepicker [data-action=togglePeriod]").text(c)), a.filter("[data-time-component=hours]").text(H(b)), a.filter("[data-time-component=minutes]").text(H(h.date.minutes()))
                    }
                }, t = function (b) {
                    b.stopPropagation(), b.preventDefault(), h.unset = !1;
                    var d, e, f, g, i = a(b.target).closest("span, td, th"),
                        j = h.date;
                    if (1 === i.length && !i.is(".disabled")) switch (i[0].nodeName.toLowerCase()) {
                        case "th":
                            switch (i[0].className) {
                                case "switch":
                                    y(1);
                                    break;
                                case "prev":
                                case "next":
                                    f = J.modes[h.viewMode].navStep, "prev" === i[0].className && (f = -1 * f), h.viewDate.add(f, J.modes[h.viewMode].navFnc), p()
                            }
                            break;
                        case "span":
                            i.is(".month") ? (d = i.parent().find("span").index(i), h.viewDate.month(d)) : (e = parseInt(i.text(), 10) || 0, h.viewDate.year(e)), 0 !== h.viewMode && (h.date = c({
                                y: h.viewDate.year(),
                                M: h.viewDate.month(),
                                d: h.viewDate.date(),
                                h: h.date.hours(),
                                m: h.date.minutes()
                            }), k(j)), y(-1), p();
                            break;
                        case "td":
                            i.is(".day") && (g = parseInt(i.text(), 10) || 1, d = h.viewDate.month(), e = h.viewDate.year(), i.is(".old") ? 0 === d ? (d = 11, e -= 1) : d -= 1 : i.is(".new") && (11 == d ? (d = 0, e += 1) : d += 1), h.date = c({
                                y: e,
                                M: d,
                                d: g,
                                h: h.date.hours(),
                                m: h.date.minutes()
                            }), h.viewDate = c({
                                y: e,
                                M: d,
                                d: Math.min(28, g)
                            }), p(), E(), k(j))
                    }
                }, u = {
                    incrementHours: function () {
                        F("add", "hours")
                    },
                    incrementMinutes: function () {
                        F("add", "minutes")
                    },
                    decrementHours: function () {
                        F("subtract", "hours")
                    },
                    decrementMinutes: function () {
                        F("subtract", "minutes")
                    },
                    togglePeriod: function () {
                        var a = h.date.hours();
                        a >= 12 ? a -= 12 : a += 12, h.date.hours(a)
                    },
                    showPicker: function () {
                        h.widget.find(".timepicker > div:not(.timepicker-picker)").hide(), h.widget.find(".timepicker .timepicker-picker").show()
                    },
                    showHours: function () {
                        h.widget.find(".timepicker .timepicker-picker").hide(), h.widget.find(".timepicker .timepicker-hours").show()
                    },
                    showMinutes: function () {
                        h.widget.find(".timepicker .timepicker-picker").hide(), h.widget.find(".timepicker .timepicker-minutes").show()
                    },
                    selectHour: function (b) {
                        h.date.hours(parseInt(a(b.target).text(), 10)), u.showPicker.call(h)
                    },
                    selectMinute: function (b) {
                        h.date.minutes(parseInt(a(b.target).text(), 10)), u.showPicker.call(h)
                    }
                }, v = function (b) {
                    var d = a(b.currentTarget).data("action"),
                        e = u[d].apply(h, arguments),
                        f = h.date;
                    return w(b), h.date || (h.date = c({
                        y: 1970
                    })), E(), s(), k(f), e
                }, w = function (a) {
                    a.stopPropagation(), a.preventDefault()
                }, x = function (b) {
                    c.lang(h.options.language);
                    var d = a(b.target),
                        e = h.date,
                        f = c(d.val(), h.format, h.options.useStrict);
                    f.isValid() ? (m(), h.setValue(f), k(e), E()) : (h.viewDate = e, k(e), l(f), h.unset = !0, d.val(""))
                }, y = function (a) {
                    a && (h.viewMode = Math.max(h.minViewMode, Math.min(2, h.viewMode + a))), h.widget.find(".datepicker > div").hide().filter(".datepicker-" + J.modes[h.viewMode].clsName).show()
                }, z = function () {
                    var b, c, d, e, f;
                    h.widget.on("click", ".datepicker *", a.proxy(t, this)), h.widget.on("click", "[data-action]", a.proxy(v, this)), h.widget.on("mousedown", a.proxy(w, this)), h.options.pickDate && h.options.pickTime && h.widget.on("click.togglePicker", ".accordion-toggle", function (g) {
                        if (g.stopPropagation(), b = a(this), c = b.closest("ul"), d = c.find(".in"), e = c.find(".collapse:not(.in)"), d && d.length) {
                            if (f = d.data("collapse"), f && f.transitioning) return;
                            d.collapse("hide"), e.collapse("show"), b.find("span").toggleClass(h.options.icons.time + " " + h.options.icons.date), h.element.find(".input-group-addon span").toggleClass(h.options.icons.time + " " + h.options.icons.date)
                        }
                    }), h.isInput ? h.element.on({
                        focus: a.proxy(h.show, this),
                        change: a.proxy(x, this),
                        blur: a.proxy(h.hide, this)
                    }) : (h.element.on({
                        change: a.proxy(x, this)
                    }, "input"), h.component ? h.component.on("click", a.proxy(h.show, this)) : h.element.on("click", a.proxy(h.show, this)))
                }, A = function () {
                    a(window).on("resize.datetimepicker" + h.id, a.proxy(j, this)), h.isInput || a(document).on("mousedown.datetimepicker" + h.id, a.proxy(h.hide, this))
                }, B = function () {
                    h.widget.off("click", ".datepicker *", h.click), h.widget.off("click", "[data-action]"), h.widget.off("mousedown", h.stopEvent), h.options.pickDate && h.options.pickTime && h.widget.off("click.togglePicker"), h.isInput ? h.element.off({
                        focus: h.show,
                        change: h.change
                    }) : (h.element.off({
                        change: h.change
                    }, "input"), h.component ? h.component.off("click", h.show) : h.element.off("click", h.show))
                }, C = function () {
                    a(window).off("resize.datetimepicker" + h.id), h.isInput || a(document).off("mousedown.datetimepicker" + h.id)
                }, D = function () {
                    if (h.element) {
                        var b, c = h.element.parents(),
                            d = !1;
                        for (b = 0; b < c.length; b++) if ("fixed" == a(c[b]).css("position")) {
                            d = !0;
                            break
                        }
                        return d
                    }
                    return !1
                }, E = function () {
                    c.lang(h.options.language);
                    var a, b = "";
                    h.unset || (b = c(h.date).format(h.format)), h.isInput ? h.element.val(b) : (h.component && (a = h.element.find("input"), a.val(b)), h.element.data("date", b)), h.options.pickTime || h.hide()
                }, F = function (a, b) {
                    c.lang(h.options.language);
                    var d;
                    return "add" == a ? (d = c(h.date), 23 == d.hours() && d.add(1, b), d.add(1, b)) : d = c(h.date).subtract(1, b), d.isAfter(h.options.endDate) || d.subtract(1, b).isBefore(h.options.startDate) || G(d) ? void l(d.format(h.format)) : void("add" == a ? h.date.add(1, b) : h.date.subtract(1, b))
                }, G = function (a) {
                    c.lang(h.options.language);
                    var b, d = h.options.disabledDates;
                    for (b in d) if (d[b] == c(a).format("L")) return !0;
                    return !1
                }, H = function (a) {
                    return a = a.toString(), a.length >= 2 ? a : "0" + a
                }, I = function (a, b, c) {
                    return a && b ? '<div class="bootstrap-datetimepicker-widget dropdown-menu" style="z-index:9999 !important;"><ul class="list-unstyled"><li' + (c ? ' class="collapse in"' : "") + '><div class="datepicker">' + J.template + '</div></li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + h.options.icons.time + '"></span></a></li><li' + (c ? ' class="collapse"' : "") + '><div class="timepicker">' + K.getTemplate() + "</div></li></ul></div>" : b ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + K.getTemplate() + "</div></div>" : '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + J.template + "</div></div>"
                }, J = {
                    modes: [{
                        clsName: "days",
                        navFnc: "month",
                        navStep: 1
                    }, {
                        clsName: "months",
                        navFnc: "year",
                        navStep: 1
                    }, {
                        clsName: "years",
                        navFnc: "year",
                        navStep: 10
                    }],
                    headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
                    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
                }, K = {
                    hourTemplate: '<span data-action="showHours" data-time-component="hours" class="timepicker-hour"></span>',
                    minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>'
                };
            J.template = '<div class="datepicker-days"><table class="table-condensed">' + J.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + J.headTemplate + J.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + J.headTemplate + J.contTemplate + "</table></div>", K.getTemplate = function () {
                return '<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="' + h.options.icons.up + '"></span></a></td><td class="separator"></td><td><a href="#" class="btn" data-action="incrementMinutes"><span class="' + h.options.icons.up + '"></span></a></td>' + (h.use24hours ? "" : '<td class="separator"></td>') + "</tr><tr><td>" + K.hourTemplate + '</td> <td class="separator">:</td><td>' + K.minuteTemplate + "</td> " + (h.use24hours ? "" : '<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') + '</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="' + h.options.icons.down + '"></span></a></td><td class="separator"></td><td><a href="#" class="btn" data-action="decrementMinutes"><span class="' + h.options.icons.down + '"></span></a></td>' + (h.use24hours ? "" : '<td class="separator"></td>') + '</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>';
            }, h.destroy = function () {
                B(), C(), h.widget.remove(), h.element.removeData("DateTimePicker"), h.component && h.component.removeData("DateTimePicker")
            }, h.show = function (a) {
                h.widget.show(), h.height = h.component ? h.component.outerHeight() : h.element.outerHeight(), j(), h.element.trigger({
                    type: "show.dp",
                    date: h.date
                }), A(), a && w(a)
            }, h.disable = function () {
                h.element.find("input").prop("disabled", !0), B()
            }, h.enable = function () {
                h.element.find("input").prop("disabled", !1), z()
            }, h.hide = function () {
                var a, b, c = h.widget.find(".collapse");
                for (a = 0; a < c.length; a++) if (b = c.eq(a).data("collapse"), b && b.transitioning) return;
                h.widget.hide(), h.viewMode = h.startViewMode, y(), h.element.trigger({
                    type: "hide.dp",
                    date: h.date
                }), C()
            }, h.setValue = function (a) {
                c.lang(h.options.language), a ? h.unset = !1 : h.unset = !0, c.isMoment(a) || (a = c(a)), a.isValid() ? (h.date = a, E(), h.viewDate = c({
                    y: h.date.year(),
                    M: h.date.month()
                }), p(), s()) : l(a)
            }, h.getDate = function () {
                return h.unset ? null : h.date
            }, h.setDate = function (a) {
                a ? h.setValue(a) : h.setValue(null)
            }, h.setEndDate = function (a) {
                h.options.endDate = c(a), h.options.endDate.isValid() || (h.options.endDate = c().add(50, "y")), h.viewDate && m()
            }, h.setStartDate = function (a) {
                h.options.startDate = c(a), h.options.startDate.isValid() || (h.options.startDate = c({
                    y: 1970
                })), h.viewDate && m()
            }, i()
        };
    a.fn.datetimepicker = function (b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("DateTimePicker");
            e || c.data("DateTimePicker", new d(this, b))
        })
    }
}(jQuery), $(function () {
    $("#addserver form").submit(function (a) {
        a.preventDefault();
        var b = $(this),
            c = b.find(".modal-body");
        return b.valid() ? (errorRemove(), c.hide().after('<div id="ajaxLoading"><span id="loadingSmall"></span><br />Testing connection</div>'), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=addserver&ajax=true&authid=" + authid,
            data: b.serialize(),
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), c.show(), a.error ? c.prepend(error(a.error)) : (errorRemove(), $("#addserver").modal("hide"), $("#servers tbody").append("<tr><td>" + a.success.serverName + '</td><td><a href="#" class="btn btn-danger deleteServer" data-serverid="' + a.success.id + '"><i class="glyphicon glyphicon-trash"></i></a></td>'), $("#noservers").remove())
            },
            error: function (a) {
                hideLoading(), c.show(), c.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        }), !1) : !1
    }), $(".deleteServer").on("click", function () {
        var a = $(this).data("serverid"),
            b = $("#container"),
            c = $(this);
        $(this).append('<div id="ajaxLoading" class="small"><span id="loadingSmall"></span></div>').find("i").hide().parent().addClass("disabled"), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=deleteserver&ajax=true&authid=" + authid + "&id=" + a,
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), c.removeClass("disabled").find("i").show(), a.error ? b.prepend(error(a.error)) : (errorRemove(), c.parent().parent().fadeOut(function () {
                    $(this).remove()
                }))
            },
            error: function (a) {
                hideLoading(), c.removeClass("disabled").find("i").show(), b.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        })
    }), $(".reorderServer").on("click", function () {
        var a = $(this).data("serverid"),
            b = $(this).data("order"),
            c = $("#container"),
            d = $(this);
        $(this).append('<div id="ajaxLoading" class="small"><span id="loadingSmall"></span></div>').find(".glyphicon-arrow-up").hide().parent().addClass("disabled"), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=reorderserver&ajax=true&authid=" + authid + "&server=" + a + "&order=" + b,
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), d.removeClass("disabled").find(".glyphicon-arrow-up").show(), a.error ? c.prepend(error(a.error)) : (errorRemove(), $("#servers").html(a.success.table))
            },
            error: function (a) {
                hideLoading(), d.removeClass("disabled").find(".glyphicon-arrow-up").show(), c.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        })
    }), $("form.settings").submit(function (a) {
        a.preventDefault();
        var b = $(this),
            c = b.find("table");
        return b.valid() ? (errorRemove(), c.hide().after('<div id="ajaxLoading"><span id="loadingSmall"></span><br />Saving</div>'), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=updatesettings&ajax=true&authid=" + authid,
            data: b.serialize(),
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), c.show(), a.error ? b.prepend(error(a.error)) : errorRemove()
            },
            error: function (a) {
                hideLoading(), c.show(), b.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        }), !1) : !1
    }), jQuery.fn.datetimepicker && $(".modal").on("shown.bs.modal", function () {
        $(".datetimepicker").datetimepicker()
    }), $(".yourtime").html(dateFormat(new Date, "dd/mm/yyyy HH:MM:ss")), $("#editban form .bantype, #editmute form .bantype").click(function (a) {
        a.preventDefault();
        var b = $(this).parent().parent().find("input[name=expires]");
        if ("Permanent" === $(this).html()) {
            $(this).html("Temporary"), b.removeAttr("disabled");
            var c = $(this).parent().parent().data("DateTimePicker");
            c.setDate(new Date)
        } else $(this).html("Permanent"), b.val(""), b.attr("disabled", "disabled")
    }), $("#editban form").submit(function (a) {
        a.preventDefault();
        var b = $(this),
            c = b.find(".modal-body");
        return b.valid() ? (errorRemove(), "disabled" === $(this).find("input[name=expires]").attr("disabled") && $(this).find("input[name=expires]").val(""), c.hide().after('<div id="ajaxLoading"><span id="loadingSmall"></span><br />Saving</div>'), showLoading("loadingSmall"), $("#editban form input[name=expiresTimestamp]").val($("#editban form input[name=expires]").parent().data("DateTimePicker").getDate().toDate().getTime() / 1e3), $.ajax({
            url: "index.php?action=updateban&ajax=true&authid=" + authid,
            data: b.serialize(),
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), c.show(), a.error ? c.prepend(error(a.error)) : (errorRemove(), $("#editban").modal("hide"), location.reload())
            },
            error: function (a) {
                hideLoading(), c.show(), c.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        }), !1) : !1
    }), $("#editmute form").submit(function (a) {
        a.preventDefault();
        var b = $(this),
            c = b.find(".modal-body");
        return b.valid() ? (errorRemove(), c.hide().after('<div id="ajaxLoading"><span id="loadingSmall"></span><br />Saving</div>'), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=updatemute&ajax=true&authid=" + authid,
            data: b.serialize(),
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), c.show(), a.error ? c.prepend(error(a.error)) : (errorRemove(), $("#editmute").modal("hide"), location.reload())
            },
            error: function (a) {
                hideLoading(), c.show(), c.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        }), !1) : !1
    }), $("#editipban form").submit(function (a) {
        a.preventDefault();
        var b = $(this),
            c = b.find(".modal-body");
        return b.valid() ? (errorRemove(), c.hide().after('<div id="ajaxLoading"><span id="loadingSmall"></span><br />Saving</div>'), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=updateipban&ajax=true&authid=" + authid,
            data: b.serialize(),
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), c.show(), a.error ? c.prepend(error(a.error)) : (errorRemove(), $("#editipban").modal("hide"), location.reload())
            },
            error: function (a) {
                hideLoading(), c.show(), c.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        }), !1) : !1
    }), $("#previous-bans a.delete").on("click", function (a) {
        a.preventDefault();
        var b = $(this).data("record-id"),
            c = $(this).data("server"),
            d = $("#container"),
            e = $(this);
        $(this).append('<div id="ajaxLoading" class="small"><span id="loadingSmall"></span></div>').find("i").hide().parent().addClass("disabled"), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=deletebanrecord&ajax=true&authid=" + authid + "&server=" + c + "&id=" + b,
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), a.error ? ($(document).load().scrollTop(0), d.prepend(error(a.error))) : (errorRemove(), e.parent().parent().fadeOut(function () {
                    $(this).remove()
                }))
            },
            error: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), d.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        })
    }), $("#previous-mutes a.delete").on("click", function (a) {
        a.preventDefault();
        var b = $(this).data("record-id"),
            c = $(this).data("server"),
            d = $("#container"),
            e = $(this);
        $(this).append('<div id="ajaxLoading" class="small"><span id="loadingSmall"></span></div>').find("i").hide().parent().addClass("disabled"), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=deletemuterecord&ajax=true&authid=" + authid + "&server=" + c + "&id=" + b,
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), a.error ? ($(document).load().scrollTop(0), d.prepend(error(a.error))) : (errorRemove(), e.parent().parent().fadeOut(function () {
                    $(this).remove()
                }))
            },
            error: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), d.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        })
    }), $("#previous-kicks a.delete").on("click", function (a) {
        a.preventDefault();
        var b = $(this).data("record-id"),
            c = $(this).data("server"),
            d = $("#container"),
            e = $(this);
        $(this).append('<div id="ajaxLoading" class="small"><span id="loadingSmall"></span></div>').find("i").hide().parent().addClass("disabled"), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=deletekickrecord&ajax=true&authid=" + authid + "&server=" + c + "&id=" + b,
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), a.error ? ($(document).load().scrollTop(0), d.prepend(error(a.error))) : (errorRemove(), e.parent().parent().fadeOut(function () {
                    $(this).remove()
                }))
            },
            error: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), d.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        })
    }), $("#previous-warnings a.delete").on("click", function (a) {
        a.preventDefault();
        var b = $(this).data("record-id"),
            c = $(this).data("server"),
            d = $("#container"),
            e = $(this);
        $(this).append('<div id="ajaxLoading" class="small"><span id="loadingSmall"></span></div>').find("i").hide().parent().addClass("disabled"), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=deletewarning&ajax=true&authid=" + authid + "&server=" + c + "&id=" + b,
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), a.error ? ($(document).load().scrollTop(0), d.prepend(error(a.error))) : (errorRemove(), e.parent().parent().fadeOut(function () {
                    $(this).remove()
                }))
            },
            error: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), d.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        })
    }), $("#previous-ip-bans a.delete").on("click", function (a) {
        a.preventDefault();
        var b = $(this).data("record-id"),
            c = $(this).data("server"),
            d = $("#container"),
            e = $(this);
        $(this).append('<div id="ajaxLoading" class="small"><span id="loadingSmall"></span></div>').find("i").hide().parent().addClass("disabled"), showLoading("loadingSmall"), $.ajax({
            url: "index.php?action=deleteipbanrecord&ajax=true&authid=" + authid + "&server=" + c + "&id=" + b,
            type: "post",
            dataType: "json",
            success: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), a.error ? ($(document).load().scrollTop(0), d.prepend(error(a.error))) : (errorRemove(), e.parent().parent().fadeOut(function () {
                    $(this).remove()
                }))
            },
            error: function (a) {
                hideLoading(), e.removeClass("disabled").find("i").show(), d.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        })
    }), $(document).on("click", "[data-role=confirm]", function (a) {
        return a.preventDefault(), $("body").append('<div class="modal fade" id="confirmModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" data-dismiss="modal">&times;</a><h3>' + $(this).data("confirm-title") + '</h3></div><div class="modal-body"><p>' + $(this).data("confirm-body") + '</p></div><div class="modal-footer"><a href="#" class="btn cancel" data-dismiss="modal">Cancel</a><a href="' + $(this).attr("href") + '" class="btn btn-primary">Confirm</a></div></div></div></div>'), $("#confirmModal").modal().find(".cancel").focus(), $("#confirmModal").on("hidden", function () {
            $(this).remove()
        }), !1
    }), $(document).on("click", "#confirmModal a.btn-primary", function (a) {
        a.preventDefault();
        var b = $("#confirmModal .modal-body"),
            c = $(this);
        b.hide().after('<div id="ajaxLoading"><span id="loadingSmall"></span><br />Removing</div>'), showLoading("loadingSmall"), $.ajax({
            url: c.attr("href"),
            type: "get",
            dataType: "json",
            success: function (a) {
                hideLoading(), b.show(), a.error ? b.prepend(error(a.error)) : ($("#confirmModal").modal("hide"), location.reload())
            },
            error: function (a) {
                hideLoading(), c.removeClass("disabled").find("i").show(), b.prepend(error("Invalid response from server, try again<br />Response: " + a.responseText))
            }
        })
    })
});
var dateFormat = function () {
    var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        c = /[^-+\dA-Z]/g,
        d = function (a, b) {
            for (a = String(a), b = b || 2; a.length < b;) a = "0" + a;
            return a
        };
    return function (e, f, g) {
        var h = dateFormat;
        if (1 !== arguments.length || "[object String]" !== Object.prototype.toString.call(e) || /\d/.test(e) || (f = e, e = void 0), e = e ? new Date(e) : new Date, isNaN(e)) throw new SyntaxError("invalid date");
        f = String(h.masks[f] || f || h.masks["default"]), "UTC:" === f.slice(0, 4) && (f = f.slice(4), g = !0);
        var i = g ? "getUTC" : "get",
            j = e[i + "Date"](),
            k = e[i + "Day"](),
            l = e[i + "Month"](),
            m = e[i + "FullYear"](),
            n = e[i + "Hours"](),
            o = e[i + "Minutes"](),
            p = e[i + "Seconds"](),
            q = e[i + "Milliseconds"](),
            r = g ? 0 : e.getTimezoneOffset(),
            s = {
                d: j,
                dd: d(j),
                ddd: h.i18n.dayNames[k],
                dddd: h.i18n.dayNames[k + 7],
                m: l + 1,
                mm: d(l + 1),
                mmm: h.i18n.monthNames[l],
                mmmm: h.i18n.monthNames[l + 12],
                yy: String(m).slice(2),
                yyyy: m,
                h: n % 12 || 12,
                hh: d(n % 12 || 12),
                H: n,
                HH: d(n),
                M: o,
                MM: d(o),
                s: p,
                ss: d(p),
                l: d(q, 3),
                L: d(q > 99 ? Math.round(q / 10) : q),
                t: 12 > n ? "a" : "p",
                tt: 12 > n ? "am" : "pm",
                T: 12 > n ? "A" : "P",
                TT: 12 > n ? "AM" : "PM",
                Z: g ? "UTC" : (String(e).match(b) || [""]).pop().replace(c, ""),
                o: (r > 0 ? "-" : "+") + d(100 * Math.floor(Math.abs(r) / 60) + Math.abs(r) % 60, 4),
                S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 !== 10) * j % 10]
            };
        return f.replace(a, function (a) {
            return a in s ? s[a] : a.slice(1, a.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
}, dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Date.prototype.format = function (a, b) {
    return dateFormat(this, a, b)
}, $(function () {
    var a, b = window.location.protocol + "//" + window.location.hostname + "/" + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("index.html"));
    $.ajax({
        type: "GET",
        url: b + "en" + ".json",
        dataType: "json",
        success: function (b) {
            a = b
        },
        async: !1
    }), jQuery.validator.setDefaults({
        errorPlacement: function (a, b) {
            a.wrap('<span class="help-inline" />'), $(b).after(a.parent()), a.parent().parent().parent().removeClass("success").addClass("error")
        },
        success: function (a) {
            a.parent().parent().parent().removeClass("error").addClass("success")
        }
    }), $("form").validate(), $("time").each(function () {
        $(this).countdown({
            until: new Date($(this).attr("datetime")),
            format: "yowdhms",
            layout: "{y<} {yn} {yl}, {y>} {o<} {on} {ol}, {o>} {w<} {wn} {wl}, {w>} {d<} {dn} {dl}, {d>} {h<} {hn} {hl}, {h>} {m<} {mn} {ml}, {m>} {s<} {sn} {sl} {s>}",
            onExpiry: function () {
                location.reload()
            }
        })
    }), $.extend($.tablesorter.themes.bootstrap, {
        table: "table table-bordered",
        header: "bootstrap-header",
        footerRow: "",
        footerCells: "",
        icons: "",
        sortNone: "bootstrap-icon-unsorted",
        sortAsc: "glyphicon glyphicon-chevron-up",
        sortDesc: "glyphicon glyphicon-chevron-down",
        active: "",
        hover: "",
        filterRow: "",
        even: "",
        odd: ""
    }), $.tablesorter.addParser({
        id: "expires",
        is: function () {
            return !1
        },
        format: function (a, b, c) {
            return $(c).data("expires")
        },
        type: "numeric"
    }), $("table.sortable").tablesorter({
        theme: "bootstrap",
        widthFixed: !0,
        headers: {
            4: {
                sorter: "expires"
            }
        },
        sortList: [
            [5, 1]
        ],
        headerTemplate: "{content} {icon}",
        widgets: ["uitheme", "filter", "zebra", "saveSort"],
        widgetOptions: {
            zebra: ["even", "odd"],
            filter_reset: ".reset",
            filter_searchDelay: 1e3
        }
    }).tablesorterPager({
        container: $(".pager"),
        ajaxUrl: "index.php?action=" + $('#container form input[name="action"]').val() + "&player=" + $('#container form input[name="player"]').val() + "&server=" + $('#container form input[name="server"]').val() + "&excluderecords=" + $('#container form input[name="excluderecords"]').val() + "&ajax=true&size={size}&page={page}&sortby={sortList:column}&filter={filterList:filter}",
        ajaxObject: {
            dataType: "json",
            success: function () {
                hideLoading()
            },
            error: function () {
                hideLoading()
            },
            beforeSend: function () {
                $("table.sortable").before('<div id="ajaxLoading"><span id="loadingSmall"></span><br />Fetching...</div>'), showLoading("loadingSmall")
            }
        },
        ajaxProcessing: function (a) {
            if (a && a.hasOwnProperty("rows")) {
                var b, c, d, e = a.rows,
                    f = a.total_rows,
                    g = a.headers,
                    h = [],
                    i = e.length;
                for (b = 0; i > b; b++) {
                    c = [];
                    for (d in e[b]) "string" == typeof d && c.push(e[b][d]);
                    h.push(c)
                }
                return 0 === h.length && c.push("None"), [f, h, g]
            }
        },
        cssGoto: ".pagenum",
        removeRows: !1,
        output: "{startRow} - {endRow} / {filteredRows} ({totalRows})"
    }), $('.col-lg-4 button[rel="popover"]').popover({
        trigger: "hover",
        placement: "left"
    }), $("#search li").click(function () {
        var b = $(this);
        if ("ip" === b.attr("id")) {
            var c = $("#player");
            $("#ip").attr("id", "player").find("a").text(a.home["search-player"]), c.attr("id", "ip").html('IP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="caret"></span>'), $("#search input[type=text]").attr("placeholder", a.home["search-placeholder-ip"]), $("#search input[name=action]").attr("value", "searchip")
        } else {
            var d = $("#ip");
            $("#player").attr("id", "ip").find("a").text(a.home["search-ip"]), d.attr("id", "player").html('Player <span class="caret"></span>'), $("#search input[type=text]").attr("placeholder", a.home["search-placeholder-player"]), $("#search input[name=action]").attr("value", "searchplayer")
        }
    }), $("#viewall").click(function () {
        var a = $("#search input[name=server]:checked").val();
        "undefined" == typeof a && (a = 0), window.location.href = "indexe83f.html?action=" + $("#search input[name=action]").val() + "&server=" + a + "&player=%25"
    }), $(".list-group.checked-list-box .list-group-item").each(function () {
        function a() {
            var a, b = d.is(":checked");
            a = b ? "success" : c.data("state") ? "failed" : "none", c.data("state", a), c.find(".state-icon").removeClass().addClass("state-icon " + f[c.data("state")].icon), c.removeClass(e + "default").removeClass(e + "danger").removeClass(e + "success"), "failed" === c.data("state") || "success" === c.data("state") ? c.addClass(e + f[c.data("state")].color) : c.addClass(e + f.none.color)
        }
        function b() {
            "success" === c.data("state") && d.prop("checked", !d.is(":checked")), a(), 0 === c.find(".state-icon").length && c.prepend('<span class="state-icon ' + f[c.data("state")].icon + '"></span>')
        }
        var c = $(this),
            d = $('<input type="checkbox" class="hidden" />'),
            e = "button" === c.data("style") ? "btn-" : "list-group-item-",
            f = {
                success: {
                    icon: "glyphicon glyphicon-check",
                    color: "success"
                },
                failed: {
                    icon: "glyphicon glyphicon-remove",
                    color: "danger"
                },
                none: {
                    icon: "glyphicon glyphicon-unchecked",
                    color: "default"
                }
            };
        c.append(d), d.on("change", function () {
            a()
        }), b()
    })
}), $(document).ready(function () {
    console.log(window.location.host), 0 !== $(".updatecheck").length && checkLocalVersion(function (a) {
        checkGithuVersion(function (b) {
            if (versionCompare(a, b) < 0) {
                var c = $(".updatecheck").html();
                c = c.replace("{{your.version}}", a), c = c.replace("{{new.version}}", b), $(".updatecheck").html(c), $(".updatecheck").show()
            }
        })
    })
});