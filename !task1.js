const f = (s) => {
  if (!s.length) return "";
  let m = s.reduce((p, c) => (p.length < c.length ? p : c));
  for (let i = m.length; i > 0; i--) {
    for (let j = 0; j <= m.length - i; j++) {
      let t = m.substr(j, i),
        f = !0;
      for (let k = 0; k < s.length; k++) {
        if (!s[k].includes(t)) {
          f = !1;
          break;
        }
      }
      if (f) return t;
    }
  }
  return "";
};
const a = process.argv.slice(2);
console.log(f(a));
