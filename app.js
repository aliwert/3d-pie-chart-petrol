//! Initialize Themes
//! Apply animated theme to the chart
am4core.useTheme(am4themes_animated);

//! Create a PieChart3D instance and attach it to the HTML element with id "chartdiv"
let chart = am4core.create("chartdiv", am4charts.PieChart3D);
//? Set opacity for the hidden state of the chart
chart.hiddenState.properties.opacity = 0.5;

//! Data for the chart
chart.data = [
  {
    country: "Russia",
    litres: 501.9,
  },
  {
    country: "Norway",
    litres: 301.9,
  },
  {
    country: "England",
    litres: 201.1,
  },
  {
    country: "Azerbaijan",
    litres: 165.8,
  },
  {
    country: "Germany",
    litres: 139.9,
  },
  {
    country: "Austria",
    litres: 128.3,
  },
];

//? Set inner radius (size of the hole in the middle) of the pie chart in percentage
chart.innerRadius = am4core.percent(40);
//! Set the depth (thickness) of the chart in pixels
chart.depth = 120;

//* Add a legend to the chart
chart.legend = new am4charts.Legend();

//? Create a PieSeries3D for the chart
let series = chart.series.push(new am4charts.PieSeries3D());

//! Set data fields for the series
series.dataFields.value = "litres";
series.dataFields.depthValue = "litres";
series.dataFields.category = "country";

//! Set corner radius for the pie slices
series.slices.template.cornerRadius = 6;

//! Set color step for the series
series.colors.step = 3;
