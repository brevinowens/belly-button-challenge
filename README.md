# belly-button-dashboard

### 1: First I declared a global variable or constant of optionChanged that contains a function which runs my data query and displays my vizualitions. 

### 2: I then declared the same function as another constant variable. 

### 3: I then filtered the data to objects that contained only the necessary information needed for my visuals. 

### 4: Using the forEach method, I then selected the key and value needed for my demographic information needed for my panel-body class. 

### 5: Then it was time to build my vizualizations! 
+ I sliced the data for the bar chart to only plot the top10 OTU IDs.
+ This was necessary for the sample_values as well so that the had the same length in order to plot. 
+ I then bound the horizontal bar chart to my bar class. 

+ For the bubble chart, I used OTU IDs for the x-values and the marker colors, sample values for y-values and marker size, and the OTU labels for the text/hover text. 
+ I then went to the plotly documentation to figure out how to change the colorscale and chose Jet as it looked cool, in my opinion. 
+ I then bound the bubble chart to my bubble class. 


