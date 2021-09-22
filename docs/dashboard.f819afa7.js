parcelRequire = function (e, r, t, n) {
  var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      p.resolve = function (r) {
        return e[t][1][r] || r
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports;

    function p(e) {
      return f(p.resolve(e))
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {}
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t
    }, {}]
  };
  for (var c = 0; c < t.length; c++) try {
    f(t[c])
  } catch (e) {
    i || (i = e)
  }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l
    }) : n && (this[n] = l)
  }
  if (parcelRequire = f, i) throw i;
  return f
}({
  "GlA0": [function (require, module, exports) {
    $(function () {
      "use strict";
      $(".connectedSortable").sortable({
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".card-header, .nav-tabs",
        forcePlaceholderSize: !0,
        zIndex: 999999
      }), $(".connectedSortable .card-header").css("cursor", "move"), $(".todo-list").sortable({
        placeholder: "sort-highlight",
        handle: ".handle",
        forcePlaceholderSize: !0,
        zIndex: 999999
      }), $(".textarea").summernote(), $(".daterange").daterangepicker({
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }, startDate: moment().subtract(29, "days"), endDate: moment()
      }, function (e, t) {
        alert("You chose: " + e.format("MMMM D, YYYY") + " - " + t.format("MMMM D, YYYY"))
      }), $(".knob").knob();
      var e = {US: 398, SA: 400, CA: 1e3, DE: 500, FR: 760, CN: 300, AU: 700, BR: 600, IN: 800, GB: 320, RU: 3e3};
      $("#world-map").vectorMap({
        map: "usa_en",
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "rgba(255, 255, 255, 0.7)",
            "fill-opacity": 1,
            stroke: "rgba(0,0,0,.2)",
            "stroke-width": 1,
            "stroke-opacity": 1
          }
        },
        series: {regions: [{values: e, scale: ["#ffffff", "#0154ad"], normalizeFunction: "polynomial"}]},
        onRegionLabelShow: function (t, o, a) {
          void 0 !== e[a] && o.html(o.html() + ": " + e[a] + " new visitors")
        }
      });
      var t = new Sparkline($("#sparkline-1")[0], {width: 80, height: 50, lineColor: "#92c1dc", endColor: "#ebf4f9"}),
        o = new Sparkline($("#sparkline-2")[0], {width: 80, height: 50, lineColor: "#92c1dc", endColor: "#ebf4f9"}),
        a = new Sparkline($("#sparkline-3")[0], {width: 80, height: 50, lineColor: "#92c1dc", endColor: "#ebf4f9"});
      t.draw([1e3, 1200, 920, 927, 931, 1027, 819, 930, 1021]), o.draw([515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]), a.draw([15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]), $("#calendar").datetimepicker({
        format: "L",
        inline: !0
      }), $("#chat-box").overlayScrollbars({height: "250px"});
      var r = document.getElementById("revenue-chart-canvas").getContext("2d"), n = (new Chart(r, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "Digital Goods",
            backgroundColor: "rgba(60,141,188,0.9)",
            borderColor: "rgba(60,141,188,0.8)",
            pointRadius: !1,
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60,141,188,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }, {
            label: "Electronics",
            backgroundColor: "rgba(210, 214, 222, 1)",
            borderColor: "rgba(210, 214, 222, 1)",
            pointRadius: !1,
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          }]
        },
        options: {
          maintainAspectRatio: !1,
          responsive: !0,
          legend: {display: !1},
          scales: {xAxes: [{gridLines: {display: !1}}], yAxes: [{gridLines: {display: !1}}]}
        }
      }), $("#sales-chart-canvas").get(0).getContext("2d")), i = (new Chart(n, {
        type: "doughnut",
        data: {
          labels: ["Instore Sales", "Download Sales", "Mail-Order Sales"],
          datasets: [{data: [30, 12, 20], backgroundColor: ["#f56954", "#00a65a", "#f39c12"]}]
        },
        options: {legend: {display: !1}, maintainAspectRatio: !1, responsive: !0}
      }), $("#line-chart").get(0).getContext("2d"));
      new Chart(i, {
        type: "line",
        data: {
          labels: ["2011 Q1", "2011 Q2", "2011 Q3", "2011 Q4", "2012 Q1", "2012 Q2", "2012 Q3", "2012 Q4", "2013 Q1", "2013 Q2"],
          datasets: [{
            label: "Digital Goods",
            fill: !1,
            borderWidth: 2,
            lineTension: 0,
            spanGaps: !0,
            borderColor: "#efefef",
            pointRadius: 3,
            pointHoverRadius: 7,
            pointColor: "#efefef",
            pointBackgroundColor: "#efefef",
            data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687, 8432]
          }]
        },
        options: {
          maintainAspectRatio: !1,
          responsive: !0,
          legend: {display: !1},
          scales: {
            xAxes: [{ticks: {fontColor: "#efefef"}, gridLines: {display: !1, color: "#efefef", drawBorder: !1}}],
            yAxes: [{
              ticks: {stepSize: 5e3, fontColor: "#efefef"},
              gridLines: {display: !0, color: "#efefef", drawBorder: !1}
            }]
          }
        }
      })
    });
  }, {}]
}, {}, ["GlA0"], null)
//# sourceMappingURL=/vanilla-html-css-pos-system/dashboard.f819afa7.js.map