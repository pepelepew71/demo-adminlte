$(function () {
  /*
   * LINE CHART
   * ----------
   */
  let d = [
    [Date.UTC(2011, 2, 12, 14, 0, 0), 28],
    [Date.UTC(2011, 2, 12, 15, 0, 0), 27],
    [Date.UTC(2011, 2, 12, 16, 0, 0), 25],
    [Date.UTC(2011, 2, 12, 17, 0, 0), 19],
    [Date.UTC(2011, 2, 12, 18, 0, 0), 16],
    [Date.UTC(2011, 2, 12, 19, 0, 0), 14],
    [Date.UTC(2011, 2, 12, 20, 0, 0), 11],
    [Date.UTC(2011, 2, 12, 21, 0, 0), 9],
    [Date.UTC(2011, 2, 12, 22, 0, 0), 7.5],
    [Date.UTC(2011, 2, 12, 23, 0, 0), 6],
    [Date.UTC(2011, 2, 13, 0, 0, 0), 5],
    [Date.UTC(2011, 2, 13, 1, 0, 0), 6],
    [Date.UTC(2011, 2, 13, 2, 0, 0), 7.5],
    [Date.UTC(2011, 2, 13, 3, 0, 0), 9],
    [Date.UTC(2011, 2, 13, 4, 0, 0), 11],
    [Date.UTC(2011, 2, 13, 5, 0, 0), 14],
    [Date.UTC(2011, 2, 13, 6, 0, 0), 16],
    [Date.UTC(2011, 2, 13, 7, 0, 0), 19],
    [Date.UTC(2011, 2, 13, 8, 0, 0), 25],
    [Date.UTC(2011, 2, 13, 9, 0, 0), 27],
    [Date.UTC(2011, 2, 13, 10, 0, 0), 28],
    [Date.UTC(2011, 2, 13, 11, 0, 0), 29],
    [Date.UTC(2011, 2, 13, 12, 0, 0), 29.5],
    [Date.UTC(2011, 2, 13, 13, 0, 0), 29],
    [Date.UTC(2011, 2, 13, 14, 0, 0), 28],
    [Date.UTC(2011, 2, 13, 15, 0, 0), 27],
    [Date.UTC(2011, 2, 13, 16, 0, 0), 25],
    [Date.UTC(2011, 2, 13, 17, 0, 0), 19],
    [Date.UTC(2011, 2, 13, 18, 0, 0), 16],
    [Date.UTC(2011, 2, 13, 19, 0, 0), 14],
    [Date.UTC(2011, 2, 13, 20, 0, 0), 11],
    [Date.UTC(2011, 2, 13, 21, 0, 0), 9],
    [Date.UTC(2011, 2, 13, 22, 0, 0), 7.5],
    [Date.UTC(2011, 2, 13, 23, 0, 0), 6]
  ];

  $.plot("#line-chart-1-1",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      },
      colors: ["#00FF00",],
    }
  );

  $.plot("#line-chart-1-2",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      }
    }
  );

  $.plot("#line-chart-2-1",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      },
      colors: ["#00FF00",],
    }
  );

  $.plot("#line-chart-2-2",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      }
    }
  );

  $.plot("#line-chart-3-1",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      },
      colors: ["#00FF00",],
    }
  );

  $.plot("#line-chart-3-2",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      }
    }
  );

  $.plot("#line-chart-4-1",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      },
      colors: ["#00FF00",],
    }
  );

  $.plot("#line-chart-4-2",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      }
    }
  );

  $.plot("#line-chart-5-1",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      },
      colors: ["#00FF00",],
    }
  );

  $.plot("#line-chart-5-2",
    [{
      data: d,
      lines: { show: true },
      points: { show: true },
    }],
    {
      xaxis: {
        mode: "time",
        timeBase: "milliseconds"
      }
    }
  );
  /* END LINE CHART */
})