/*
 * EU VAT identification number checker — runs entirely in the browser.
 * Validates country-specific format and, where a published checksum
 * algorithm exists, the check digits. This does NOT prove the number is
 * registered and active — only the official EU VIES service can do that.
 */
(function () {
  'use strict';

  var COUNTRIES = {
    AT: { name: 'Österreich', re: /^U[A-Z0-9]{8}$/, ex: 'ATU12345675' },
    BE: { name: 'Belgien', re: /^[01][0-9]{9}$/, ex: 'BE0123456749' },
    BG: { name: 'Bulgarien', re: /^[0-9]{9,10}$/, ex: 'BG123456789' },
    HR: { name: 'Kroatien', re: /^[0-9]{11}$/, ex: 'HR12345678903' },
    CY: { name: 'Zypern', re: /^[0-9]{8}[A-Z]$/, ex: 'CY12345678F' },
    CZ: { name: 'Tschechien', re: /^[0-9]{8,10}$/, ex: 'CZ12345679' },
    DK: { name: 'Dänemark', re: /^[0-9]{8}$/, ex: 'DK12345674' },
    EE: { name: 'Estland', re: /^[0-9]{9}$/, ex: 'EE123456780' },
    FI: { name: 'Finnland', re: /^[0-9]{8}$/, ex: 'FI12345671' },
    FR: { name: 'Frankreich', re: /^[A-HJ-NP-Z0-9]{2}[0-9]{9}$/, ex: 'FR40303265045' },
    DE: { name: 'Deutschland', re: /^[1-9][0-9]{8}$/, ex: 'DE136695976' },
    EL: { name: 'Griechenland', re: /^[0-9]{9}$/, ex: 'EL123456783' },
    GR: { name: 'Griechenland', re: /^[0-9]{9}$/, ex: 'EL123456783', alias: 'EL' },
    HU: { name: 'Ungarn', re: /^[0-9]{8}$/, ex: 'HU12345676' },
    IE: { name: 'Irland', re: /^([0-9]{7}[A-W]|[0-9][A-Z*+][0-9]{5}[A-W]|[0-9]{7}[A-W][AH])$/, ex: 'IE1234567FA' },
    IT: { name: 'Italien', re: /^[0-9]{11}$/, ex: 'IT12345670017' },
    LV: { name: 'Lettland', re: /^[0-9]{11}$/, ex: 'LV12345678901' },
    LT: { name: 'Litauen', re: /^([0-9]{9}|[0-9]{12})$/, ex: 'LT123456715' },
    LU: { name: 'Luxemburg', re: /^[0-9]{8}$/, ex: 'LU12345613' },
    MT: { name: 'Malta', re: /^[0-9]{8}$/, ex: 'MT12345634' },
    NL: { name: 'Niederlande', re: /^[0-9]{9}B[0-9]{2}$/, ex: 'NL123456782B12' },
    PL: { name: 'Polen', re: /^[0-9]{10}$/, ex: 'PL1234567883' },
    PT: { name: 'Portugal', re: /^[0-9]{9}$/, ex: 'PT123456789' },
    RO: { name: 'Rumänien', re: /^[1-9][0-9]{1,9}$/, ex: 'RO1234567897' },
    SK: { name: 'Slowakei', re: /^[0-9]{10}$/, ex: 'SK2022749619' },
    SI: { name: 'Slowenien', re: /^[1-9][0-9]{7}$/, ex: 'SI12345679' },
    ES: { name: 'Spanien', re: /^[A-Z0-9][0-9]{7}[A-Z0-9]$/, ex: 'ESA12345674' },
    SE: { name: 'Schweden', re: /^[0-9]{10}01$/, ex: 'SE123456789701' },
    XI: { name: 'Nordirland', re: /^([0-9]{9}|[0-9]{12}|(GD|HA)[0-9]{3})$/, ex: 'XI123456789' },
  };

  var d = function (s) { return s.split('').map(Number); };
  var sum = function (a) { return a.reduce(function (x, y) { return x + y; }, 0); };

  // Checksum implementations. Return true/false, or null when not implemented.
  var CHECK = {
    DE: function (n) {
      var p = 10, s;
      for (var i = 0; i < 8; i++) {
        s = (Number(n[i]) + p) % 10 || 10;
        p = (2 * s) % 11;
      }
      var c = 11 - p;
      if (c === 10) c = 0;
      return c === Number(n[8]);
    },
    AT: function (n) {
      var b = n.slice(1), t = 0;
      var w = [1, 2, 1, 2, 1, 2, 1];
      for (var i = 0; i < 7; i++) {
        var v = Number(b[i]) * w[i];
        t += v > 9 ? Math.floor(v / 10) + (v % 10) : v;
      }
      return (96 - t) % 10 === Number(b[7]);
    },
    NL: function (n) {
      var b = n.slice(0, 9);
      if (!/^[0-9]{9}$/.test(b)) return null;
      var t = 0;
      for (var i = 0; i < 8; i++) t += Number(b[i]) * (9 - i);
      var c = t % 11;
      return c < 10 && c === Number(b[8]);
    },
    BE: function (n) {
      var base = Number(n.slice(0, 8));
      return 97 - (base % 97) === Number(n.slice(8, 10));
    },
    LU: function (n) {
      return Number(n.slice(0, 6)) % 89 === Number(n.slice(6, 8));
    },
    PT: function (n) {
      var t = 0;
      for (var i = 0; i < 8; i++) t += Number(n[i]) * (9 - i);
      var c = 11 - (t % 11);
      if (c > 9) c = 0;
      return c === Number(n[8]);
    },
    FI: function (n) {
      var w = [7, 9, 10, 5, 8, 4, 2], t = 0;
      for (var i = 0; i < 7; i++) t += Number(n[i]) * w[i];
      var c = 11 - (t % 11);
      if (c === 11) c = 0;
      return c < 10 && c === Number(n[7]);
    },
    DK: function (n) {
      var w = [2, 7, 6, 5, 4, 3, 2, 1], t = 0;
      for (var i = 0; i < 8; i++) t += Number(n[i]) * w[i];
      return t % 11 === 0;
    },
    PL: function (n) {
      var w = [6, 5, 7, 2, 3, 4, 5, 6, 7], t = 0;
      for (var i = 0; i < 9; i++) t += Number(n[i]) * w[i];
      var c = t % 11;
      return c < 10 && c === Number(n[9]);
    },
    SI: function (n) {
      var t = 0;
      for (var i = 0; i < 7; i++) t += Number(n[i]) * (8 - i);
      var c = 11 - (t % 11);
      if (c === 10) c = 0;
      return c < 11 && c === Number(n[7]);
    },
    HU: function (n) {
      var w = [9, 7, 3, 1, 9, 7, 3], t = 0;
      for (var i = 0; i < 7; i++) t += Number(n[i]) * w[i];
      var c = (10 - (t % 10)) % 10;
      return c === Number(n[7]);
    },
    EL: function (n) {
      var t = 0;
      for (var i = 0; i < 8; i++) t += Number(n[i]) * Math.pow(2, 8 - i);
      return (t % 11) % 10 === Number(n[8]);
    },
    IT: function (n) {
      var t = 0;
      for (var i = 0; i < 10; i++) {
        var v = Number(n[i]);
        if (i % 2) {
          v *= 2;
          if (v > 9) v -= 9;
        }
        t += v;
      }
      return (10 - (t % 10)) % 10 === Number(n[10]);
    },
    SE: function (n) {
      var t = 0;
      for (var i = 0; i < 10; i++) {
        var v = Number(n[i]);
        if (i % 2 === 0) {
          v *= 2;
          if (v > 9) v -= 9;
        }
        t += v;
      }
      return t % 10 === 0;
    },
    FR: function (n) {
      var key = n.slice(0, 2), siren = n.slice(2);
      if (!/^[0-9]{2}$/.test(key)) return null; // alphanumeric keys use a different scheme
      return Number(key) === (12 + 3 * (Number(siren) % 97)) % 97;
    },
  };

  function normalize(raw) {
    return String(raw || '').toUpperCase().replace(/[\s.\-\/]/g, '');
  }

  window.nsVatCheck = function (raw) {
    var v = normalize(raw);
    if (!v) return { state: 'empty' };
    var cc = v.slice(0, 2);
    var rest = v.slice(2);
    if (cc === 'GR') cc = 'EL';
    var country = COUNTRIES[cc];
    if (!country) {
      return {
        state: 'bad',
        cc: cc,
        reason: 'unknownCountry',
        normalized: v,
      };
    }
    if (!country.re.test(rest)) {
      return {
        state: 'bad',
        cc: cc,
        country: country.name,
        reason: 'format',
        example: country.ex,
        normalized: v,
      };
    }
    var fn = CHECK[cc];
    var checksum = fn ? fn(rest) : null;
    return {
      state: checksum === false ? 'bad' : checksum === true ? 'ok' : 'warn',
      cc: cc,
      country: country.name,
      reason: checksum === false ? 'checksum' : checksum === true ? null : 'noChecksum',
      normalized: v,
      formatted: cc + ' ' + rest,
    };
  };

  window.nsVatCountries = COUNTRIES;
})();
