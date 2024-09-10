import { k as br, O as On } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/renderer.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/devalue@5.0.0/node_modules/devalue/index.js';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/vue@3.5.4_typescript@5.6.2/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/@unhead+ssr@1.11.2/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/nuxt@3.13.1_@types+node@22.5.4_eslint@8.57.0_rollup@3.29.4_typescript@5.6.2_vite@5.4.3/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/unhead@1.11.2/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/vue@3.5.4_typescript@5.6.2/node_modules/vue/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/@unhead+shared@1.11.2/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/Portfolio_Website/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';

var B = Object.defineProperty;
var E = (u, a) => B(u, "name", { value: a, configurable: true });
let D = 0;
const t = { START_BOUNDARY: D++, HEADER_FIELD_START: D++, HEADER_FIELD: D++, HEADER_VALUE_START: D++, HEADER_VALUE: D++, HEADER_VALUE_ALMOST_DONE: D++, HEADERS_ALMOST_DONE: D++, PART_DATA_START: D++, PART_DATA: D++, END: D++ };
let w = 1;
const R = { PART_BOUNDARY: w, LAST_BOUNDARY: w *= 2 }, g = 10, N = 13, x = 32, P = 45, C = 58, I = 97, M = 122, $ = E((u) => u | 32, "lower"), m = E(() => {
}, "noop"), F = class F2 {
  constructor(a) {
    this.index = 0, this.flags = 0, this.onHeaderEnd = m, this.onHeaderField = m, this.onHeadersEnd = m, this.onHeaderValue = m, this.onPartBegin = m, this.onPartData = m, this.onPartEnd = m, this.boundaryChars = {}, a = `\r
--` + a;
    const n = new Uint8Array(a.length);
    for (let r = 0; r < a.length; r++)
      n[r] = a.charCodeAt(r), this.boundaryChars[n[r]] = true;
    this.boundary = n, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = t.START_BOUNDARY;
  }
  write(a) {
    let n = 0;
    const r = a.length;
    let d = this.index, { lookbehind: l, boundary: c, boundaryChars: p, index: e, state: i, flags: A } = this;
    const H = this.boundary.length, O = H - 1, y = a.length;
    let o, L;
    const f = E((h) => {
      this[h + "Mark"] = n;
    }, "mark"), s = E((h) => {
      delete this[h + "Mark"];
    }, "clear"), T = E((h, S, _, U) => {
      (S === void 0 || S !== _) && this[h](U && U.subarray(S, _));
    }, "callback"), b = E((h, S) => {
      const _ = h + "Mark";
      _ in this && (S ? (T(h, this[_], n, a), delete this[_]) : (T(h, this[_], a.length, a), this[_] = 0));
    }, "dataCallback");
    for (n = 0; n < r; n++)
      switch (o = a[n], i) {
        case t.START_BOUNDARY:
          if (e === c.length - 2) {
            if (o === P)
              A |= R.LAST_BOUNDARY;
            else if (o !== N)
              return;
            e++;
            break;
          } else if (e - 1 === c.length - 2) {
            if (A & R.LAST_BOUNDARY && o === P)
              i = t.END, A = 0;
            else if (!(A & R.LAST_BOUNDARY) && o === g)
              e = 0, T("onPartBegin"), i = t.HEADER_FIELD_START;
            else
              return;
            break;
          }
          o !== c[e + 2] && (e = -2), o === c[e + 2] && e++;
          break;
        case t.HEADER_FIELD_START:
          i = t.HEADER_FIELD, f("onHeaderField"), e = 0;
        case t.HEADER_FIELD:
          if (o === N) {
            s("onHeaderField"), i = t.HEADERS_ALMOST_DONE;
            break;
          }
          if (e++, o === P)
            break;
          if (o === C) {
            if (e === 1)
              return;
            b("onHeaderField", true), i = t.HEADER_VALUE_START;
            break;
          }
          if (L = $(o), L < I || L > M)
            return;
          break;
        case t.HEADER_VALUE_START:
          if (o === x)
            break;
          f("onHeaderValue"), i = t.HEADER_VALUE;
        case t.HEADER_VALUE:
          o === N && (b("onHeaderValue", true), T("onHeaderEnd"), i = t.HEADER_VALUE_ALMOST_DONE);
          break;
        case t.HEADER_VALUE_ALMOST_DONE:
          if (o !== g)
            return;
          i = t.HEADER_FIELD_START;
          break;
        case t.HEADERS_ALMOST_DONE:
          if (o !== g)
            return;
          T("onHeadersEnd"), i = t.PART_DATA_START;
          break;
        case t.PART_DATA_START:
          i = t.PART_DATA, f("onPartData");
        case t.PART_DATA:
          if (d = e, e === 0) {
            for (n += O; n < y && !(a[n] in p); )
              n += H;
            n -= O, o = a[n];
          }
          if (e < c.length)
            c[e] === o ? (e === 0 && b("onPartData", true), e++) : e = 0;
          else if (e === c.length)
            e++, o === N ? A |= R.PART_BOUNDARY : o === P ? A |= R.LAST_BOUNDARY : e = 0;
          else if (e - 1 === c.length)
            if (A & R.PART_BOUNDARY) {
              if (e = 0, o === g) {
                A &= ~R.PART_BOUNDARY, T("onPartEnd"), T("onPartBegin"), i = t.HEADER_FIELD_START;
                break;
              }
            } else
              A & R.LAST_BOUNDARY && o === P ? (T("onPartEnd"), i = t.END, A = 0) : e = 0;
          if (e > 0)
            l[e - 1] = o;
          else if (d > 0) {
            const h = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
            T("onPartData", 0, d, h), d = 0, f("onPartData"), n--;
          }
          break;
        case t.END:
          break;
        default:
          throw new Error(`Unexpected state entered: ${i}`);
      }
    b("onHeaderField"), b("onHeaderValue"), b("onPartData"), this.index = e, this.state = i, this.flags = A;
  }
  end() {
    if (this.state === t.HEADER_FIELD_START && this.index === 0 || this.state === t.PART_DATA && this.index === this.boundary.length)
      this.onPartEnd();
    else if (this.state !== t.END)
      throw new Error("MultipartParser.end(): stream ended unexpectedly");
  }
};
E(F, "MultipartParser");
let k = F;
function v(u) {
  const a = u.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!a)
    return;
  const n = a[2] || a[3] || "";
  let r = n.slice(n.lastIndexOf("\\") + 1);
  return r = r.replace(/%22/g, '"'), r = r.replace(/&#(\d{4});/g, (d, l) => String.fromCharCode(l)), r;
}
E(v, "_fileName");
async function Z(u, a) {
  if (!/multipart/i.test(a))
    throw new TypeError("Failed to fetch");
  const n = a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!n)
    throw new TypeError("no or bad content-type header, no multipart boundary");
  const r = new k(n[1] || n[2]);
  let d, l, c, p, e, i;
  const A = [], H = new br(), O = E((s) => {
    c += f.decode(s, { stream: true });
  }, "onPartData"), y = E((s) => {
    A.push(s);
  }, "appendToFile"), o = E(() => {
    const s = new On(A, i, { type: e });
    H.append(p, s);
  }, "appendFileToFormData"), L = E(() => {
    H.append(p, c);
  }, "appendEntryToFormData"), f = new TextDecoder("utf-8");
  f.decode(), r.onPartBegin = function() {
    r.onPartData = O, r.onPartEnd = L, d = "", l = "", c = "", p = "", e = "", i = null, A.length = 0;
  }, r.onHeaderField = function(s) {
    d += f.decode(s, { stream: true });
  }, r.onHeaderValue = function(s) {
    l += f.decode(s, { stream: true });
  }, r.onHeaderEnd = function() {
    if (l += f.decode(), d = d.toLowerCase(), d === "content-disposition") {
      const s = l.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      s && (p = s[2] || s[3] || ""), i = v(l), i && (r.onPartData = y, r.onPartEnd = o);
    } else
      d === "content-type" && (e = l);
    l = "", d = "";
  };
  for await (const s of u)
    r.write(s);
  return r.end(), H;
}
E(Z, "toFormData");

export { Z as toFormData };
//# sourceMappingURL=multipart-parser-DjPa0eu7.mjs.map
