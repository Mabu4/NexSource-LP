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
