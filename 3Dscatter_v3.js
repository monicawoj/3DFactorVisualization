//x = F1 is Soft Power
//y = F3 is Hard Power
//z = F2 if Smart Power


d3.csv("data3d.csv", function(data) {
 data.forEach(function(d) {
    d.cluster= +d.cluster;
    d.per= +d.per;
    d.perform_std= +d.perform_std;
    d.perform_quart= +d.perform_quart;
    d.x= +d.f1_std;
    d.y= +d.f2_std;
    d.z= +d.f3_std;});

//Quartile 1
var f1_quart1 = data
  .filter(function(d) { return d.perform_quart == 1 })
  .map(function(d) { return d.f1_std; });
var f2_quart1 = data
  .filter(function(d) { return d.perform_quart == 1 })
  .map(function(d) { return d.f2_std; });
var f3_quart1 = data
  .filter(function(d) { return d.perform_quart == 1 })
  .map(function(d) { return d.f3_std; });

var Q1 = {
  x: f1_quart1,
  y: f3_quart1,
  z: f2_quart1,
  name: "Q1 Influence",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(211, 211, 211)', //RGBA where A = transparency
    line: {
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//Quartile 2
var f1_quart2 = data
  .filter(function(d) { return d.perform_quart == 2 })
  .map(function(d) { return d.f1_std; });
var f2_quart2 = data
  .filter(function(d) { return d.perform_quart == 2 })
  .map(function(d) { return d.f2_std; });
var f3_quart2 = data
  .filter(function(d) { return d.perform_quart == 2 })
  .map(function(d) { return d.f3_std; });

var Q2 = {
  x: f1_quart2,
  y: f3_quart2,
  z: f2_quart2,
  name: "Q2 Influence",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(197, 154, 154)', //RGBA where A = transparency
    line: {
  //    color: 'rgba(197, 154, 154, 0.7)', //RGBA where A = transparency
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//Quartile 3
var f1_quart3 = data
  .filter(function(d) { return d.perform_quart == 3 })
  .map(function(d) { return d.f1_std; });
var f2_quart3 = data
  .filter(function(d) { return d.perform_quart == 3 })
  .map(function(d) { return d.f2_std; });
var f3_quart3 = data
  .filter(function(d) { return d.perform_quart == 3 })
  .map(function(d) { return d.f3_std; });

var Q3 = {
  x: f1_quart3,
  y: f3_quart3,
  z: f2_quart3,
  name: "Q3 Influence",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(189, 74, 74)', //RGBA where A = transparency
    line: {
      //color: 'rgba(189, 74, 74, 0.7)', //RGBA where A = transparency
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//Quartile 4
var f1_quart4 = data
  .filter(function(d) { return d.perform_quart == 4 })
  .map(function(d) { return d.f1_std; });
var f2_quart4 = data
  .filter(function(d) { return d.perform_quart == 4 })
  .map(function(d) { return d.f2_std; });
var f3_quart4 = data
  .filter(function(d) { return d.perform_quart == 4 })
  .map(function(d) { return d.f3_std; });

var Q4 = {
  x: f1_quart4,
  y: f3_quart4,
  z: f2_quart4,
  name: "Q4 Influence",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(150, 14, 14)', //RGBA where A = transparency
    line: {
    //  color: 'rgba(150, 14, 14, 0.7)', //RGBA where A = transparency
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//CLUSTERS

//Cluster 1 = Nascent
var f1_c1 = data
  .filter(function(d) { return d.cluster == 1 })
  .map(function(d) { return d.f1_std; });
var f2_c1 = data
  .filter(function(d) { return d.cluster == 1 })
  .map(function(d) { return d.f2_std; });
var f3_c1 = data
  .filter(function(d) { return d.cluster == 1 })
  .map(function(d) { return d.f3_std; });

var C1 = {
  x: f1_c1,
  y: f3_c1,
  z: f2_c1,
  name: "Cluster 1: Nascent",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(31, 119, 180)',
    line: {
    //  color: 'rgba(150, 14, 14, 0.7)', //RGBA where A = transparency
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//Cluster 2 = Analyst
var f1_c2 = data
  .filter(function(d) { return d.cluster == 8 })
  .map(function(d) { return d.f1_std; });
var f2_c2 = data
  .filter(function(d) { return d.cluster == 8 })
  .map(function(d) { return d.f2_std; });
var f3_c2 = data
  .filter(function(d) { return d.cluster == 8 })
  .map(function(d) { return d.f3_std; });

var C2 = {
  x: f1_c2,
  y: f3_c2,
  z: f2_c2,
  name: "Cluster 2: Analyst",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(255, 127, 14)',
    line: {
    //  color: 'rgba(150, 14, 14, 0.7)', //RGBA where A = transparency
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//Cluster 3 = Hammer
var f1_c3 = data
  .filter(function(d) { return d.cluster == 9 })
  .map(function(d) { return d.f1_std; });
var f2_c3 = data
  .filter(function(d) { return d.cluster == 9 })
  .map(function(d) { return d.f2_std; });
var f3_c3 = data
  .filter(function(d) { return d.cluster == 9 })
  .map(function(d) { return d.f3_std; });

var C3 = {
  x: f1_c3,
  y: f3_c3,
  z: f2_c3,
  name: "Cluster 3: Hammer",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(214, 39, 40)',
    line: {
    //  color: 'rgba(150, 14, 14, 0.7)', //RGBA where A = transparency
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//Cluster 4 = Buddy
var f1_c4 = data
  .filter(function(d) { return d.cluster == 10 })
  .map(function(d) { return d.f1_std; });
var f2_c4 = data
  .filter(function(d) { return d.cluster == 10 })
  .map(function(d) { return d.f2_std; });
var f3_c4 = data
  .filter(function(d) { return d.cluster == 10 })
  .map(function(d) { return d.f3_std; });

var C4 = {
  x: f1_c4,
  y: f3_c4,
  z: f2_c4,
  name: "Cluster 4: Buddy",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(44, 160, 44)',
    line: {
    //  color: 'rgba(150, 14, 14, 0.7)', //RGBA where A = transparency
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//Cluster 5 = Multi
var f1_c5 = data
  .filter(function(d) { return d.cluster == 11 })
  .map(function(d) { return d.f1_std; });
var f2_c5 = data
  .filter(function(d) { return d.cluster == 11 })
  .map(function(d) { return d.f2_std; });
var f3_c5 = data
  .filter(function(d) { return d.cluster == 11 })
  .map(function(d) { return d.f3_std; });

var C5 = {
  x: f1_c5,
  y: f3_c5,
  z: f2_c5,
  name: "Cluster 5: Multi",
  mode: 'markers',
  marker: {
    size: 3,
    color: 'rgb(148, 103, 189)',
    line: {
    //  color: 'rgba(150, 14, 14, 0.7)', //RGBA where A = transparency
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

//FINAL OUTPUT LAYOUT
var data = [Q1,Q2,Q3,Q4,C1,C2,C3,C4,C5];
var layout = {
  title: "Leverage Inventory 3D Factor Visualization",
   //   showaxeslabels: 0,
  scene: {
    xaxis: {
      title: 'Soft Power',
      zerolinewidth: 2,
      range: [-2.5,2.5],
      fixedrange: 1
    },
    yaxis: {
      title: 'Hard Power',
      zerolinewidth: 2,
      range: [-2.5,2.5],
      fixedrange: 1
    },
    zaxis: {
      title: 'Smart Power',
      zerolinewidth: 2,
      range: [-2.5,2.5],
      fixedrange: 1
    }
  },
  showlegend: true,
  width: 900,
  height: 600,
  legend: {
    x: 1,
    y: 1},
  margin: {
    l: 0,
    r: 0,
    b: 20,
    t: 80
  }
};

Plotly.newPlot('myDiv', data, layout);


//Close d3.csv function
});
