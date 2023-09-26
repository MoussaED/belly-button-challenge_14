

d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  console.log(data);

  // Extract data
  let individualData = data.samples.filter(d => d.id === "940")[0];
  let otuIds = individualData.otu_ids.slice(0, 10).reverse();
  let sampleValues = individualData.sample_values.slice(0, 10).reverse();
  let otuLabels = individualData.otu_labels.slice(0, 10).reverse();

  // Creating the bar chart
  let trace = {
    x: sampleValues,
    y: otuIds.map(id => `OTU ${id}`),
    text: otuLabels,
    type: "bar",
    orientation: "h"
  };

  let data2 = [trace];

  let layout = {
    title: "Top 10 OTUs Found in Individual 940",
    xaxis: { title: "Sample Values" },
    yaxis: { title: "OTU IDs" }
  };

  Plotly.newPlot("bar", data2, layout);
});

let data3;

d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  console.log(data);

  data3 = data;

//extract data 
  let individualData2 = data3.samples.filter(d => d.id === "940")[0];
  let otuIds2 = individualData2.otu_ids;
  let sampleValues2 = individualData2.sample_values;
  let otuLabels2 = individualData2.otu_labels;

//set parameters for chart
  let trace2 = {
    x: otuIds2,
    y: sampleValues2,
    text: otuLabels2,
    mode: "markers",
    marker: {
      size: sampleValues2,
      color: otuIds2,
      colorscale: "Earth"
    }
  };
  data3 = [trace2];

  let layout = {
    title: "Bubble Chart of Samples",
    xaxis: { title: "OTU IDs" },
    yaxis: { title: "Sample Values" }
  };

  Plotly.newPlot("bubble", data3, layout);
});

//adding subject id's to dropdown menu 
// d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
//   console.log(data);

  
// let sampleIds = data.names;

// let dropdownMenu = d3.select("#selDataset");

// sampleIds.forEach(function(id) {
//   dropdownMenu.append("option").text(id).property("value", id);
// });

//display correct info on the sample-metadata.panel-body
function optionChanged(sampleId) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
    console.log(data);

    let metadata = data.metadata.filter(d => d.id === parseInt(sampleId))[0];
    let metadataElement = document.getElementById("sample-metadata");
    metadataElement.innerHTML = "";

    for (let key in metadata) {
      let keyValueElement = document.createElement("p");
      keyValueElement.innerHTML = `${key}: ${metadata[key]}`;
      metadataElement.appendChild(keyValueElement);
    }
  });
}

d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  console.log(data);

  let sampleIds = data.names;

  let dropdownMenu = d3.select("#selDataset");

  sampleIds.forEach(function(id) {
    dropdownMenu.append("option").text(id).property("value", id);
  });
});


