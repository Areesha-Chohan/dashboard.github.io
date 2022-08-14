
$(document).ready(function () {
    $('#example').DataTable();
});

// Chart
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15
    });
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "country",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "country",
      tooltip: am5.Tooltip.new(root, {
        labelText:"{valueY}"
      })
    }));
    
    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    series.columns.template.adapters.add("fill", function(fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", function(stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    
    // Set data
    var data = [{
      country: "USA",
      value: 2025
    }, {
      country: "China",
      value: 1882
    }, {
      country: "Japan",
      value: 1809
    }, {
      country: "Germany",
      value: 1322
    }, {
      country: "UK",
      value: 1122
    }, {
      country: "France",
      value: 1114
    }, {
      country: "India",
      value: 984
    }, {
      country: "Spain",
      value: 711
    }, {
      country: "Netherlands",
      value: 665
    }, {
      country: "South Korea",
      value: 443
    }, {
      country: "Canada",
      value: 441
    }];
    
    xAxis.data.setAll(data);
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    });
    // chart 2
    am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chart2div");
        
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        var data = [
          {
            name: "Monica",
            steps: 45688,
            pictureSettings: {
              src: "https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg"
            }
          },
          {
            name: "Joey",
            steps: 35781,
            pictureSettings: {
              src: "https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg"
            }
          },
          {
            name: "Ross",
            steps: 25464,
            pictureSettings: {
              src: "https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg"
            }
          },
          {
            name: "Phoebe",
            steps: 18788,
            pictureSettings: {
              src: "https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg"
            }
          },
          {
            name: "Rachel",
            steps: 15465,
            pictureSettings: {
              src: "https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg"
            }
          },
          {
            name: "Chandler",
            steps: 11561,
            pictureSettings: {
              src: "https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg"
            }
          }
        ];
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none",
            paddingLeft: 50,
            paddingRight: 40
          })
        );
        
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        
        var yRenderer = am5xy.AxisRendererY.new(root, {});
        yRenderer.grid.template.set("visible", false);
        
        var yAxis = chart.yAxes.push(
          am5xy.CategoryAxis.new(root, {
            categoryField: "name",
            renderer: yRenderer,
            paddingRight:40
          })
        );
        
        var xRenderer = am5xy.AxisRendererX.new(root, {});
        xRenderer.grid.template.set("strokeDasharray", [3]);
        
        var xAxis = chart.xAxes.push(
          am5xy.ValueAxis.new(root, {
            min: 0,
            renderer: xRenderer
          })
        );
        
        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: "Income",
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: "steps",
            categoryYField: "name",
            sequencedInterpolation: true,
            calculateAggregates: true,
            maskBullets: false,
            tooltip: am5.Tooltip.new(root, {
              dy: -30,
              pointerOrientation: "vertical",
              labelText: "{valueX}"
            })
          })
        );
        
        series.columns.template.setAll({
          strokeOpacity: 0,
          cornerRadiusBR: 10,
          cornerRadiusTR: 10,
          cornerRadiusBL: 10,
          cornerRadiusTL: 10,
          maxHeight: 50,
          fillOpacity: 0.8
        });
        
        var currentlyHovered;
        
        series.columns.template.events.on("pointerover", function(e) {
          handleHover(e.target.dataItem);
        });
        
        series.columns.template.events.on("pointerout", function(e) {
          handleOut();
        });
        
        function handleHover(dataItem) {
          if (dataItem && currentlyHovered != dataItem) {
            handleOut();
            currentlyHovered = dataItem;
            var bullet = dataItem.bullets[0];
            bullet.animate({
              key: "locationX",
              to: 1,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic)
            });
          }
        }
        
        function handleOut() {
          if (currentlyHovered) {
            var bullet = currentlyHovered.bullets[0];
            bullet.animate({
              key: "locationX",
              to: 0,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic)
            });
          }
        }
        
        
        var circleTemplate = am5.Template.new({});
        
        series.bullets.push(function(root, series, dataItem) {
          var bulletContainer = am5.Container.new(root, {});
          var circle = bulletContainer.children.push(
            am5.Circle.new(
              root,
              {
                radius: 34
              },
              circleTemplate
            )
          );
        
          var maskCircle = bulletContainer.children.push(
            am5.Circle.new(root, { radius: 27 })
          );
        
          // only containers can be masked, so we add image to another container
          var imageContainer = bulletContainer.children.push(
            am5.Container.new(root, {
              mask: maskCircle
            })
          );
        
          // not working
          var image = imageContainer.children.push(
            am5.Picture.new(root, {
              templateField: "pictureSettings",
              centerX: am5.p50,
              centerY: am5.p50,
              width: 60,
              height: 60
            })
          );
        
          return am5.Bullet.new(root, {
            locationX: 0,
            sprite: bulletContainer
          });
        });
        
        // heatrule
        series.set("heatRules", [
          {
            dataField: "valueX",
            min: am5.color(0xe5dc36),
            max: am5.color(0x5faa46),
            target: series.columns.template,
            key: "fill"
          },
          {
            dataField: "valueX",
            min: am5.color(0xe5dc36),
            max: am5.color(0x5faa46),
            target: circleTemplate,
            key: "fill"
          }
        ]);
        
        series.data.setAll(data);
        yAxis.data.setAll(data);
        
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineX.set("visible", false);
        cursor.lineY.set("visible", false);
        
        cursor.events.on("cursormoved", function() {
          var dataItem = series.get("tooltip").dataItem;
          if (dataItem) {
            handleHover(dataItem)
          }
          else {
            handleOut();
          }
        })
        
        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();
        chart.appear(1000, 100);
        
        }); 