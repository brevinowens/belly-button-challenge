
const optionChanged = () => {
    showGraphs();
};

const showGraphs = () => {
    d3.json('./samples.json').then(({ metadata, samples }) => {
        x = metadata;
        let id = d3.select('select').node().value;
        let meta = metadata.filter(obj => obj.id == id)[0];
        let { otu_ids, otu_labels, sample_values } = samples.filter(obj => obj.id == id)[0];

        d3.select('.panel-body').html('');
        Object.entries(meta).forEach(([key, val]) => {
            d3.select('.panel-body').append('h4').text(key.toUpperCase() + ': ' + val);
        });

        let data = [
            {
                y: otu_ids.slice(0,10).map(x => 'OTU ' + x).reverse(),
                x: sample_values.slice(0,10).reverse(),
                type: 'bar',
                orientation: 'h'
            }
        ];

        Plotly.newPlot('bar', data);

        let bubble_trace = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels, 
            mode: 'markers',
            marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: 'Jet'
            }
          };
          
          let bubble_data = [bubble_trace];
          
          let bubble_layout = {
            title: 'OTU IDs found in Samples',
            showlegend: false,
          };
          
          Plotly.newPlot('bubble', bubble_data, bubble_layout);

    });
};

d3.json('./samples.json').then(({ names }) => {
    names.forEach(name => {
        d3.select('select').append('option').text(name)
    });

    showGraphs();
});


























































// d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {

//     console.log("data", data);
//     console.log("names", data["names"]);
//     console.log("metadata", data["metadata"]);
//     console.log("samples", data["samples"])
//     console.log("metadata[0]", data['metadata'][0]);
//     console.log("samples[0]", data['samples'][0]);
//     console.log('samples[0]["otu_ids"]', data['samples'][0]["otu_ids"]);
//     console.log('samples[0]["otu_labels"]', data['samples'][0]["otu_labels"]);
//     console.log('samples[0]["sample_values"]', data['samples'][0]["sample_values"]);
//     console.log('samples[0]["sample_values"] first 10?', data['samples'][0]["sample_values"].slice(0,10));
// });


