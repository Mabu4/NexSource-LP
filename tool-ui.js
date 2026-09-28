/* UI wiring for the free tools (VAT checker + supplier scorecard). Bilingual via <html lang>. */
(function () {
  'use strict';
  var de = document.documentElement.lang === 'de';

  var S = de
    ? {
        empty: 'Bitte geben Sie eine Umsatzsteuer-Identifikationsnummer ein.',
        okTitle: 'Format und Prüfziffer sind korrekt',
        okText:
          'Die Nummer <strong>{v}</strong> ({c}) entspricht dem gültigen Aufbau und die Prüfziffer stimmt. Das bedeutet <em>nicht</em>, dass die Nummer aktuell registriert ist — die verbindliche Auskunft liefert nur das EU-VIES-System.',
        warnTitle: 'Format gültig — Prüfziffer nicht prüfbar',
        warnText:
          'Die Nummer <strong>{v}</strong> ({c}) hat das richtige Format. Für dieses Land gibt es kein allgemein veröffentlichtes Prüfziffernverfahren, das offline verifizierbar wäre. Bitte über VIES bestätigen.',
        badFormat:
          'Die Eingabe entspricht nicht dem Format für {c}. Erwartet wird z. B. <strong>{ex}</strong>.',
        badChecksum:
          'Format stimmt, aber die Prüfziffer ist falsch. Das deutet auf einen Tippfehler oder eine erfundene Nummer hin.',
        badCountry:
          'Das Länderkürzel „{cc}" gehört zu keinem EU-Mitgliedstaat (bzw. Nordirland, XI). Bitte prüfen Sie die ersten beiden Zeichen.',
        badTitle: 'Nicht gültig',
        note: 'Die Prüfung läuft vollständig in Ihrem Browser. Es werden keine Daten übertragen oder gespeichert.',
        csvName: 'lieferantenbewertung.csv',
        csvHeaders: ['Kriterium', 'Gewichtung %', 'Bewertung (1-10)', 'Punkte'],
        csvTotal: 'Gesamtscore',
        supplier: 'Lieferant',
        ratings: [
          [85, 'A-Lieferant — strategisch ausbauen'],
          [70, 'B-Lieferant — solide, gezielt entwickeln'],
          [50, 'C-Lieferant — Maßnahmen vereinbaren, Wiedervorlage in 6 Monaten'],
          [0, 'Risiko — Alternative aufbauen'],
        ],
      }
    : {
        empty: 'Please enter a VAT identification number.',
        okTitle: 'Format and check digit are valid',
        okText:
          'The number <strong>{v}</strong> ({c}) has a valid structure and the check digit matches. This does <em>not</em> confirm the number is currently registered — only the EU VIES service can do that.',
        warnTitle: 'Format valid — check digit not verifiable',
        warnText:
          'The number <strong>{v}</strong> ({c}) has the right format. There is no publicly documented offline check-digit algorithm for this country. Please confirm via VIES.',
        badFormat: 'The input does not match the format for {c}. Expected e.g. <strong>{ex}</strong>.',
        badChecksum:
          'The format is right but the check digit is wrong. That points to a typo or an invented number.',
        badCountry:
          'The country code "{cc}" does not belong to an EU member state (or Northern Ireland, XI). Please check the first two characters.',
        badTitle: 'Not valid',
        note: 'The check runs entirely in your browser. No data is transmitted or stored.',
        csvName: 'supplier-evaluation.csv',
        csvHeaders: ['Criterion', 'Weight %', 'Rating (1-10)', 'Points'],
        csvTotal: 'Total score',
        supplier: 'Supplier',
        ratings: [
          [85, 'A supplier — grow strategically'],
          [70, 'B supplier — solid, develop selectively'],
          [50, 'C supplier — agree on actions, review in 6 months'],
          [0, 'Risk — build an alternative'],
        ],
      };

  var fill = function (tpl, o) {
    return tpl.replace(/\{(\w+)\}/g, function (_, k) {
      return o[k] == null ? '' : o[k];
    });
  };

  /* ---------------- VAT checker ---------------- */
  var form = document.getElementById('vat-form');
  if (form && window.nsVatCheck) {
    var input = document.getElementById('vat-input');
    var out = document.getElementById('vat-result');

    var run = function (e) {
      if (e) e.preventDefault();
      var r = window.nsVatCheck(input.value);
      var title, body, state;

      if (r.state === 'empty') {
        state = 'warn';
        title = S.badTitle;
        body = S.empty;
      } else if (r.state === 'ok') {
        state = 'ok';
        title = S.okTitle;
        body = fill(S.okText, { v: r.formatted, c: r.country });
      } else if (r.state === 'warn') {
        state = 'warn';
        title = S.warnTitle;
        body = fill(S.warnText, { v: r.formatted, c: r.country });
      } else {
        state = 'bad';
        title = S.badTitle;
        body =
          r.reason === 'unknownCountry'
            ? fill(S.badCountry, { cc: r.cc })
            : r.reason === 'format'
              ? fill(S.badFormat, { c: r.country, ex: r.example })
              : S.badChecksum;
      }

      out.hidden = false;
      out.setAttribute('data-state', state);
      out.innerHTML =
        '<h3>' + title + '</h3><p>' + body + '</p><p class="muted" style="margin-top:.6rem;font-size:.8125rem">' + S.note + '</p>';
    };

    form.addEventListener('submit', run);
    input.addEventListener('input', function () {
      if (!out.hidden && input.value.length > 3) run();
    });
  }

  /* ---------------- Supplier scorecard ---------------- */
  var card = document.getElementById('scorecard');
  if (card) {
    var rows = Array.prototype.slice.call(card.querySelectorAll('.score-row'));
    var totalEl = document.getElementById('score-total');
    var verdictEl = document.getElementById('score-verdict');

    var compute = function () {
      var total = 0;
      rows.forEach(function (row) {
        var range = row.querySelector('input[type=range]');
        var weight = Number(row.getAttribute('data-weight'));
        row.querySelector('output').textContent = range.value;
        total += (Number(range.value) / 10) * weight;
      });
      var score = Math.round(total);
      totalEl.textContent = score;
      for (var i = 0; i < S.ratings.length; i++) {
        if (score >= S.ratings[i][0]) {
          verdictEl.textContent = S.ratings[i][1];
          break;
        }
      }
      return score;
    };

    rows.forEach(function (row) {
      row.querySelector('input[type=range]').addEventListener('input', compute);
    });
    compute();

    var dl = document.getElementById('score-csv');
    if (dl) {
      dl.addEventListener('click', function () {
        var score = compute();
        var name = (document.getElementById('score-supplier') || {}).value || '';
        var lines = [];
        lines.push([S.supplier, name].join(';'));
        lines.push('');
        lines.push(S.csvHeaders.join(';'));
        rows.forEach(function (row) {
          var w = Number(row.getAttribute('data-weight'));
          var v = Number(row.querySelector('input[type=range]').value);
          lines.push([row.getAttribute('data-name'), w, v, ((v / 10) * w).toFixed(1)].join(';'));
        });
        lines.push('');
        lines.push([S.csvTotal, '', '', score].join(';'));
        var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = S.csvName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 1000);
      });
    }
  }
})();

/* ---------------- Supplier comparison (Nutzwertanalyse) ----------------
 * Up to three suppliers against weighted criteria. Weights are normalised,
 * so they do not have to add up to exactly 100. */
(function () {
  'use strict';
  var root = document.getElementById('nwa');
  if (!root) return;
  var de = document.documentElement.lang === 'de';

  var weightInputs = Array.prototype.slice.call(root.querySelectorAll('.nwa-weight'));
  var scoreInputs = Array.prototype.slice.call(root.querySelectorAll('.nwa-score'));
  var nameInputs = Array.prototype.slice.call(root.querySelectorAll('.nwa-name'));
  var totals = Array.prototype.slice.call(root.querySelectorAll('.nwa-total'));
  var weightSumEl = root.querySelector('#nwa-weight-sum');
  var verdictEl = root.querySelector('#nwa-verdict');

  function num(el, lo, hi) {
    var v = parseFloat(String(el.value).replace(',', '.'));
    if (isNaN(v)) return 0;
    return Math.min(hi, Math.max(lo, v));
  }

  function compute() {
    var weights = weightInputs.map(function (w) { return num(w, 0, 100); });
    var sum = weights.reduce(function (a, b) { return a + b; }, 0);
    weightSumEl.textContent = sum;
    weightSumEl.parentNode.setAttribute('data-ok', sum === 100 ? 'true' : 'false');

    var results = [0, 1, 2].map(function (col) {
      if (!sum) return 0;
      var t = 0;
      weightInputs.forEach(function (w, row) {
        var cell = root.querySelector('.nwa-score[data-row="' + row + '"][data-col="' + col + '"]');
        t += (weights[row] / sum) * num(cell, 0, 10);
      });
      return Math.round(t * 10); // 0–100
    });

    var best = Math.max.apply(null, results);
    totals.forEach(function (el, i) {
      el.textContent = results[i];
      el.classList.toggle('best', results[i] === best && best > 0);
    });

    var names = nameInputs.map(function (n, i) { return n.value.trim() || (de ? 'Lieferant ' : 'Supplier ') + String.fromCharCode(65 + i); });
    var ranked = results.map(function (r, i) { return [r, names[i]]; }).sort(function (a, b) { return b[0] - a[0]; });
    var gap = ranked[0][0] - ranked[1][0];
    verdictEl.textContent = !best
      ? ''
      : gap < 5
        ? (de ? ranked[0][1] + ' und ' + ranked[1][1] + ' liegen praktisch gleichauf — hier entscheidet das Gespräch oder eine Bemusterung.'
              : ranked[0][1] + ' and ' + ranked[1][1] + ' are practically level — a conversation or sample should decide.')
        : (de ? ranked[0][1] + ' liegt vorn (' + ranked[0][0] + ' von 100), ' + gap + ' Punkte vor ' + ranked[1][1] + '.'
              : ranked[0][1] + ' leads (' + ranked[0][0] + ' of 100), ' + gap + ' points ahead of ' + ranked[1][1] + '.');
    return { weights: weights, names: names, results: results };
  }

  root.addEventListener('input', compute);
  compute();

  var dl = document.getElementById('nwa-csv');
  if (dl) {
    dl.addEventListener('click', function () {
      var r = compute();
      var lines = [[de ? 'Kriterium' : 'Criterion', de ? 'Gewichtung' : 'Weight'].concat(r.names).join(';')];
      weightInputs.forEach(function (w, row) {
        var label = root.querySelector('.nwa-crit[data-row="' + row + '"]').value || '';
        var cells = [0, 1, 2].map(function (col) {
          return root.querySelector('.nwa-score[data-row="' + row + '"][data-col="' + col + '"]').value;
        });
        lines.push([label, r.weights[row]].concat(cells).join(';'));
      });
      lines.push([de ? 'Nutzwert (0–100)' : 'Score (0–100)', ''].concat(r.results).join(';'));
      var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = de ? 'lieferantenvergleich.csv' : 'supplier-comparison.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    });
  }
})();
