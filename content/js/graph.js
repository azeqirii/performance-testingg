/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 20327.0, "minX": 0.0, "maxY": 38374.0, "series": [{"data": [[0.0, 20327.0], [0.1, 20327.0], [0.2, 20327.0], [0.3, 20327.0], [0.4, 20327.0], [0.5, 20327.0], [0.6, 20327.0], [0.7, 20327.0], [0.8, 20327.0], [0.9, 20327.0], [1.0, 20327.0], [1.1, 20327.0], [1.2, 20327.0], [1.3, 20327.0], [1.4, 20327.0], [1.5, 20327.0], [1.6, 25403.0], [1.7, 25403.0], [1.8, 25403.0], [1.9, 25403.0], [2.0, 25403.0], [2.1, 25403.0], [2.2, 25403.0], [2.3, 25403.0], [2.4, 25403.0], [2.5, 25403.0], [2.6, 25403.0], [2.7, 25403.0], [2.8, 25403.0], [2.9, 25403.0], [3.0, 25403.0], [3.1, 25403.0], [3.2, 25535.0], [3.3, 25535.0], [3.4, 25535.0], [3.5, 25535.0], [3.6, 25535.0], [3.7, 25535.0], [3.8, 25535.0], [3.9, 25535.0], [4.0, 25535.0], [4.1, 25535.0], [4.2, 25535.0], [4.3, 25535.0], [4.4, 25535.0], [4.5, 25535.0], [4.6, 25535.0], [4.7, 29799.0], [4.8, 29799.0], [4.9, 29799.0], [5.0, 29799.0], [5.1, 29799.0], [5.2, 29799.0], [5.3, 29799.0], [5.4, 29799.0], [5.5, 29799.0], [5.6, 29799.0], [5.7, 29799.0], [5.8, 29799.0], [5.9, 29799.0], [6.0, 29799.0], [6.1, 29799.0], [6.2, 29799.0], [6.3, 30010.0], [6.4, 30010.0], [6.5, 30010.0], [6.6, 30010.0], [6.7, 30010.0], [6.8, 30010.0], [6.9, 30010.0], [7.0, 30010.0], [7.1, 30010.0], [7.2, 30010.0], [7.3, 30010.0], [7.4, 30010.0], [7.5, 30010.0], [7.6, 30010.0], [7.7, 30010.0], [7.8, 30010.0], [7.9, 30374.0], [8.0, 30374.0], [8.1, 30374.0], [8.2, 30374.0], [8.3, 30374.0], [8.4, 30374.0], [8.5, 30374.0], [8.6, 30374.0], [8.7, 30374.0], [8.8, 30374.0], [8.9, 30374.0], [9.0, 30374.0], [9.1, 30374.0], [9.2, 30374.0], [9.3, 30374.0], [9.4, 30502.0], [9.5, 30502.0], [9.6, 30502.0], [9.7, 30502.0], [9.8, 30502.0], [9.9, 30502.0], [10.0, 30502.0], [10.1, 30502.0], [10.2, 30502.0], [10.3, 30502.0], [10.4, 30502.0], [10.5, 30502.0], [10.6, 30502.0], [10.7, 30502.0], [10.8, 30502.0], [10.9, 30502.0], [11.0, 30524.0], [11.1, 30524.0], [11.2, 30524.0], [11.3, 30524.0], [11.4, 30524.0], [11.5, 30524.0], [11.6, 30524.0], [11.7, 30524.0], [11.8, 30524.0], [11.9, 30524.0], [12.0, 30524.0], [12.1, 30524.0], [12.2, 30524.0], [12.3, 30524.0], [12.4, 30524.0], [12.5, 30552.0], [12.6, 30552.0], [12.7, 30552.0], [12.8, 30552.0], [12.9, 30552.0], [13.0, 30552.0], [13.1, 30552.0], [13.2, 30552.0], [13.3, 30552.0], [13.4, 30552.0], [13.5, 30552.0], [13.6, 30552.0], [13.7, 30552.0], [13.8, 30552.0], [13.9, 30552.0], [14.0, 30552.0], [14.1, 30663.0], [14.2, 30663.0], [14.3, 30663.0], [14.4, 30663.0], [14.5, 30663.0], [14.6, 30663.0], [14.7, 30663.0], [14.8, 30663.0], [14.9, 30663.0], [15.0, 30663.0], [15.1, 30663.0], [15.2, 30663.0], [15.3, 30663.0], [15.4, 30663.0], [15.5, 30663.0], [15.6, 30663.0], [15.7, 31283.0], [15.8, 31283.0], [15.9, 31283.0], [16.0, 31283.0], [16.1, 31283.0], [16.2, 31283.0], [16.3, 31283.0], [16.4, 31283.0], [16.5, 31283.0], [16.6, 31283.0], [16.7, 31283.0], [16.8, 31283.0], [16.9, 31283.0], [17.0, 31283.0], [17.1, 31283.0], [17.2, 31770.0], [17.3, 31770.0], [17.4, 31770.0], [17.5, 31770.0], [17.6, 31770.0], [17.7, 31770.0], [17.8, 31770.0], [17.9, 31770.0], [18.0, 31770.0], [18.1, 31770.0], [18.2, 31770.0], [18.3, 31770.0], [18.4, 31770.0], [18.5, 31770.0], [18.6, 31770.0], [18.7, 31770.0], [18.8, 31879.0], [18.9, 31879.0], [19.0, 31879.0], [19.1, 31879.0], [19.2, 31879.0], [19.3, 31879.0], [19.4, 31879.0], [19.5, 31879.0], [19.6, 31879.0], [19.7, 31879.0], [19.8, 31879.0], [19.9, 31879.0], [20.0, 31879.0], [20.1, 31879.0], [20.2, 31879.0], [20.3, 31879.0], [20.4, 31997.0], [20.5, 31997.0], [20.6, 31997.0], [20.7, 31997.0], [20.8, 31997.0], [20.9, 31997.0], [21.0, 31997.0], [21.1, 31997.0], [21.2, 31997.0], [21.3, 31997.0], [21.4, 31997.0], [21.5, 31997.0], [21.6, 31997.0], [21.7, 31997.0], [21.8, 31997.0], [21.9, 32124.0], [22.0, 32124.0], [22.1, 32124.0], [22.2, 32124.0], [22.3, 32124.0], [22.4, 32124.0], [22.5, 32124.0], [22.6, 32124.0], [22.7, 32124.0], [22.8, 32124.0], [22.9, 32124.0], [23.0, 32124.0], [23.1, 32124.0], [23.2, 32124.0], [23.3, 32124.0], [23.4, 32124.0], [23.5, 34814.0], [23.6, 34814.0], [23.7, 34814.0], [23.8, 34814.0], [23.9, 34814.0], [24.0, 34814.0], [24.1, 34814.0], [24.2, 34814.0], [24.3, 34814.0], [24.4, 34814.0], [24.5, 34814.0], [24.6, 34814.0], [24.7, 34814.0], [24.8, 34814.0], [24.9, 34814.0], [25.0, 37182.0], [25.1, 37182.0], [25.2, 37182.0], [25.3, 37182.0], [25.4, 37182.0], [25.5, 37182.0], [25.6, 37182.0], [25.7, 37182.0], [25.8, 37182.0], [25.9, 37182.0], [26.0, 37182.0], [26.1, 37182.0], [26.2, 37182.0], [26.3, 37182.0], [26.4, 37182.0], [26.5, 37182.0], [26.6, 37385.0], [26.7, 37385.0], [26.8, 37385.0], [26.9, 37385.0], [27.0, 37385.0], [27.1, 37385.0], [27.2, 37385.0], [27.3, 37385.0], [27.4, 37385.0], [27.5, 37385.0], [27.6, 37385.0], [27.7, 37385.0], [27.8, 37385.0], [27.9, 37385.0], [28.0, 37385.0], [28.1, 37385.0], [28.2, 37411.0], [28.3, 37411.0], [28.4, 37411.0], [28.5, 37411.0], [28.6, 37411.0], [28.7, 37411.0], [28.8, 37411.0], [28.9, 37411.0], [29.0, 37411.0], [29.1, 37411.0], [29.2, 37411.0], [29.3, 37411.0], [29.4, 37411.0], [29.5, 37411.0], [29.6, 37411.0], [29.7, 37438.0], [29.8, 37438.0], [29.9, 37438.0], [30.0, 37438.0], [30.1, 37438.0], [30.2, 37438.0], [30.3, 37438.0], [30.4, 37438.0], [30.5, 37438.0], [30.6, 37438.0], [30.7, 37438.0], [30.8, 37438.0], [30.9, 37438.0], [31.0, 37438.0], [31.1, 37438.0], [31.2, 37438.0], [31.3, 37560.0], [31.4, 37560.0], [31.5, 37560.0], [31.6, 37560.0], [31.7, 37560.0], [31.8, 37560.0], [31.9, 37560.0], [32.0, 37560.0], [32.1, 37560.0], [32.2, 37560.0], [32.3, 37560.0], [32.4, 37560.0], [32.5, 37560.0], [32.6, 37560.0], [32.7, 37560.0], [32.8, 37560.0], [32.9, 37560.0], [33.0, 37560.0], [33.1, 37560.0], [33.2, 37560.0], [33.3, 37560.0], [33.4, 37560.0], [33.5, 37560.0], [33.6, 37560.0], [33.7, 37560.0], [33.8, 37560.0], [33.9, 37560.0], [34.0, 37560.0], [34.1, 37560.0], [34.2, 37560.0], [34.3, 37560.0], [34.4, 37561.0], [34.5, 37561.0], [34.6, 37561.0], [34.7, 37561.0], [34.8, 37561.0], [34.9, 37561.0], [35.0, 37561.0], [35.1, 37561.0], [35.2, 37561.0], [35.3, 37561.0], [35.4, 37561.0], [35.5, 37561.0], [35.6, 37561.0], [35.7, 37561.0], [35.8, 37561.0], [35.9, 37561.0], [36.0, 37579.0], [36.1, 37579.0], [36.2, 37579.0], [36.3, 37579.0], [36.4, 37579.0], [36.5, 37579.0], [36.6, 37579.0], [36.7, 37579.0], [36.8, 37579.0], [36.9, 37579.0], [37.0, 37579.0], [37.1, 37579.0], [37.2, 37579.0], [37.3, 37579.0], [37.4, 37579.0], [37.5, 37585.0], [37.6, 37585.0], [37.7, 37585.0], [37.8, 37585.0], [37.9, 37585.0], [38.0, 37585.0], [38.1, 37585.0], [38.2, 37585.0], [38.3, 37585.0], [38.4, 37585.0], [38.5, 37585.0], [38.6, 37585.0], [38.7, 37585.0], [38.8, 37585.0], [38.9, 37585.0], [39.0, 37585.0], [39.1, 37605.0], [39.2, 37605.0], [39.3, 37605.0], [39.4, 37605.0], [39.5, 37605.0], [39.6, 37605.0], [39.7, 37605.0], [39.8, 37605.0], [39.9, 37605.0], [40.0, 37605.0], [40.1, 37605.0], [40.2, 37605.0], [40.3, 37605.0], [40.4, 37605.0], [40.5, 37605.0], [40.6, 37605.0], [40.7, 37612.0], [40.8, 37612.0], [40.9, 37612.0], [41.0, 37612.0], [41.1, 37612.0], [41.2, 37612.0], [41.3, 37612.0], [41.4, 37612.0], [41.5, 37612.0], [41.6, 37612.0], [41.7, 37612.0], [41.8, 37612.0], [41.9, 37612.0], [42.0, 37612.0], [42.1, 37612.0], [42.2, 37659.0], [42.3, 37659.0], [42.4, 37659.0], [42.5, 37659.0], [42.6, 37659.0], [42.7, 37659.0], [42.8, 37659.0], [42.9, 37659.0], [43.0, 37659.0], [43.1, 37659.0], [43.2, 37659.0], [43.3, 37659.0], [43.4, 37659.0], [43.5, 37659.0], [43.6, 37659.0], [43.7, 37659.0], [43.8, 37713.0], [43.9, 37713.0], [44.0, 37713.0], [44.1, 37713.0], [44.2, 37713.0], [44.3, 37713.0], [44.4, 37713.0], [44.5, 37713.0], [44.6, 37713.0], [44.7, 37713.0], [44.8, 37713.0], [44.9, 37713.0], [45.0, 37713.0], [45.1, 37713.0], [45.2, 37713.0], [45.3, 37713.0], [45.4, 37719.0], [45.5, 37719.0], [45.6, 37719.0], [45.7, 37719.0], [45.8, 37719.0], [45.9, 37719.0], [46.0, 37719.0], [46.1, 37719.0], [46.2, 37719.0], [46.3, 37719.0], [46.4, 37719.0], [46.5, 37719.0], [46.6, 37719.0], [46.7, 37719.0], [46.8, 37719.0], [46.9, 37759.0], [47.0, 37759.0], [47.1, 37759.0], [47.2, 37759.0], [47.3, 37759.0], [47.4, 37759.0], [47.5, 37759.0], [47.6, 37759.0], [47.7, 37759.0], [47.8, 37759.0], [47.9, 37759.0], [48.0, 37759.0], [48.1, 37759.0], [48.2, 37759.0], [48.3, 37759.0], [48.4, 37759.0], [48.5, 37783.0], [48.6, 37783.0], [48.7, 37783.0], [48.8, 37783.0], [48.9, 37783.0], [49.0, 37783.0], [49.1, 37783.0], [49.2, 37783.0], [49.3, 37783.0], [49.4, 37783.0], [49.5, 37783.0], [49.6, 37783.0], [49.7, 37783.0], [49.8, 37783.0], [49.9, 37783.0], [50.0, 37807.0], [50.1, 37807.0], [50.2, 37807.0], [50.3, 37807.0], [50.4, 37807.0], [50.5, 37807.0], [50.6, 37807.0], [50.7, 37807.0], [50.8, 37807.0], [50.9, 37807.0], [51.0, 37807.0], [51.1, 37807.0], [51.2, 37807.0], [51.3, 37807.0], [51.4, 37807.0], [51.5, 37807.0], [51.6, 37816.0], [51.7, 37816.0], [51.8, 37816.0], [51.9, 37816.0], [52.0, 37816.0], [52.1, 37816.0], [52.2, 37816.0], [52.3, 37816.0], [52.4, 37816.0], [52.5, 37816.0], [52.6, 37816.0], [52.7, 37816.0], [52.8, 37816.0], [52.9, 37816.0], [53.0, 37816.0], [53.1, 37816.0], [53.2, 37828.0], [53.3, 37828.0], [53.4, 37828.0], [53.5, 37828.0], [53.6, 37828.0], [53.7, 37828.0], [53.8, 37828.0], [53.9, 37828.0], [54.0, 37828.0], [54.1, 37828.0], [54.2, 37828.0], [54.3, 37828.0], [54.4, 37828.0], [54.5, 37828.0], [54.6, 37828.0], [54.7, 37836.0], [54.8, 37836.0], [54.9, 37836.0], [55.0, 37836.0], [55.1, 37836.0], [55.2, 37836.0], [55.3, 37836.0], [55.4, 37836.0], [55.5, 37836.0], [55.6, 37836.0], [55.7, 37836.0], [55.8, 37836.0], [55.9, 37836.0], [56.0, 37836.0], [56.1, 37836.0], [56.2, 37836.0], [56.3, 37837.0], [56.4, 37837.0], [56.5, 37837.0], [56.6, 37837.0], [56.7, 37837.0], [56.8, 37837.0], [56.9, 37837.0], [57.0, 37837.0], [57.1, 37837.0], [57.2, 37837.0], [57.3, 37837.0], [57.4, 37837.0], [57.5, 37837.0], [57.6, 37837.0], [57.7, 37837.0], [57.8, 37837.0], [57.9, 37864.0], [58.0, 37864.0], [58.1, 37864.0], [58.2, 37864.0], [58.3, 37864.0], [58.4, 37864.0], [58.5, 37864.0], [58.6, 37864.0], [58.7, 37864.0], [58.8, 37864.0], [58.9, 37864.0], [59.0, 37864.0], [59.1, 37864.0], [59.2, 37864.0], [59.3, 37864.0], [59.4, 37880.0], [59.5, 37880.0], [59.6, 37880.0], [59.7, 37880.0], [59.8, 37880.0], [59.9, 37880.0], [60.0, 37880.0], [60.1, 37880.0], [60.2, 37880.0], [60.3, 37880.0], [60.4, 37880.0], [60.5, 37880.0], [60.6, 37880.0], [60.7, 37880.0], [60.8, 37880.0], [60.9, 37880.0], [61.0, 37885.0], [61.1, 37885.0], [61.2, 37885.0], [61.3, 37885.0], [61.4, 37885.0], [61.5, 37885.0], [61.6, 37885.0], [61.7, 37885.0], [61.8, 37885.0], [61.9, 37885.0], [62.0, 37885.0], [62.1, 37885.0], [62.2, 37885.0], [62.3, 37885.0], [62.4, 37885.0], [62.5, 37897.0], [62.6, 37897.0], [62.7, 37897.0], [62.8, 37897.0], [62.9, 37897.0], [63.0, 37897.0], [63.1, 37897.0], [63.2, 37897.0], [63.3, 37897.0], [63.4, 37897.0], [63.5, 37897.0], [63.6, 37897.0], [63.7, 37897.0], [63.8, 37897.0], [63.9, 37897.0], [64.0, 37897.0], [64.1, 37910.0], [64.2, 37910.0], [64.3, 37910.0], [64.4, 37910.0], [64.5, 37910.0], [64.6, 37910.0], [64.7, 37910.0], [64.8, 37910.0], [64.9, 37910.0], [65.0, 37910.0], [65.1, 37910.0], [65.2, 37910.0], [65.3, 37910.0], [65.4, 37910.0], [65.5, 37910.0], [65.6, 37910.0], [65.7, 37965.0], [65.8, 37965.0], [65.9, 37965.0], [66.0, 37965.0], [66.1, 37965.0], [66.2, 37965.0], [66.3, 37965.0], [66.4, 37965.0], [66.5, 37965.0], [66.6, 37965.0], [66.7, 37965.0], [66.8, 37965.0], [66.9, 37965.0], [67.0, 37965.0], [67.1, 37965.0], [67.2, 37968.0], [67.3, 37968.0], [67.4, 37968.0], [67.5, 37968.0], [67.6, 37968.0], [67.7, 37968.0], [67.8, 37968.0], [67.9, 37968.0], [68.0, 37968.0], [68.1, 37968.0], [68.2, 37968.0], [68.3, 37968.0], [68.4, 37968.0], [68.5, 37968.0], [68.6, 37968.0], [68.7, 37968.0], [68.8, 37981.0], [68.9, 37981.0], [69.0, 37981.0], [69.1, 37981.0], [69.2, 37981.0], [69.3, 37981.0], [69.4, 37981.0], [69.5, 37981.0], [69.6, 37981.0], [69.7, 37981.0], [69.8, 37981.0], [69.9, 37981.0], [70.0, 37981.0], [70.1, 37981.0], [70.2, 37981.0], [70.3, 37981.0], [70.4, 37988.0], [70.5, 37988.0], [70.6, 37988.0], [70.7, 37988.0], [70.8, 37988.0], [70.9, 37988.0], [71.0, 37988.0], [71.1, 37988.0], [71.2, 37988.0], [71.3, 37988.0], [71.4, 37988.0], [71.5, 37988.0], [71.6, 37988.0], [71.7, 37988.0], [71.8, 37988.0], [71.9, 37995.0], [72.0, 37995.0], [72.1, 37995.0], [72.2, 37995.0], [72.3, 37995.0], [72.4, 37995.0], [72.5, 37995.0], [72.6, 37995.0], [72.7, 37995.0], [72.8, 37995.0], [72.9, 37995.0], [73.0, 37995.0], [73.1, 37995.0], [73.2, 37995.0], [73.3, 37995.0], [73.4, 37995.0], [73.5, 38031.0], [73.6, 38031.0], [73.7, 38031.0], [73.8, 38031.0], [73.9, 38031.0], [74.0, 38031.0], [74.1, 38031.0], [74.2, 38031.0], [74.3, 38031.0], [74.4, 38031.0], [74.5, 38031.0], [74.6, 38031.0], [74.7, 38031.0], [74.8, 38031.0], [74.9, 38031.0], [75.0, 38034.0], [75.1, 38034.0], [75.2, 38034.0], [75.3, 38034.0], [75.4, 38034.0], [75.5, 38034.0], [75.6, 38034.0], [75.7, 38034.0], [75.8, 38034.0], [75.9, 38034.0], [76.0, 38034.0], [76.1, 38034.0], [76.2, 38034.0], [76.3, 38034.0], [76.4, 38034.0], [76.5, 38034.0], [76.6, 38040.0], [76.7, 38040.0], [76.8, 38040.0], [76.9, 38040.0], [77.0, 38040.0], [77.1, 38040.0], [77.2, 38040.0], [77.3, 38040.0], [77.4, 38040.0], [77.5, 38040.0], [77.6, 38040.0], [77.7, 38040.0], [77.8, 38040.0], [77.9, 38040.0], [78.0, 38040.0], [78.1, 38040.0], [78.2, 38045.0], [78.3, 38045.0], [78.4, 38045.0], [78.5, 38045.0], [78.6, 38045.0], [78.7, 38045.0], [78.8, 38045.0], [78.9, 38045.0], [79.0, 38045.0], [79.1, 38045.0], [79.2, 38045.0], [79.3, 38045.0], [79.4, 38045.0], [79.5, 38045.0], [79.6, 38045.0], [79.7, 38059.0], [79.8, 38059.0], [79.9, 38059.0], [80.0, 38059.0], [80.1, 38059.0], [80.2, 38059.0], [80.3, 38059.0], [80.4, 38059.0], [80.5, 38059.0], [80.6, 38059.0], [80.7, 38059.0], [80.8, 38059.0], [80.9, 38059.0], [81.0, 38059.0], [81.1, 38059.0], [81.2, 38059.0], [81.3, 38094.0], [81.4, 38094.0], [81.5, 38094.0], [81.6, 38094.0], [81.7, 38094.0], [81.8, 38094.0], [81.9, 38094.0], [82.0, 38094.0], [82.1, 38094.0], [82.2, 38094.0], [82.3, 38094.0], [82.4, 38094.0], [82.5, 38094.0], [82.6, 38094.0], [82.7, 38094.0], [82.8, 38094.0], [82.9, 38119.0], [83.0, 38119.0], [83.1, 38119.0], [83.2, 38119.0], [83.3, 38119.0], [83.4, 38119.0], [83.5, 38119.0], [83.6, 38119.0], [83.7, 38119.0], [83.8, 38119.0], [83.9, 38119.0], [84.0, 38119.0], [84.1, 38119.0], [84.2, 38119.0], [84.3, 38119.0], [84.4, 38119.0], [84.5, 38119.0], [84.6, 38119.0], [84.7, 38119.0], [84.8, 38119.0], [84.9, 38119.0], [85.0, 38119.0], [85.1, 38119.0], [85.2, 38119.0], [85.3, 38119.0], [85.4, 38119.0], [85.5, 38119.0], [85.6, 38119.0], [85.7, 38119.0], [85.8, 38119.0], [85.9, 38119.0], [86.0, 38150.0], [86.1, 38150.0], [86.2, 38150.0], [86.3, 38150.0], [86.4, 38150.0], [86.5, 38150.0], [86.6, 38150.0], [86.7, 38150.0], [86.8, 38150.0], [86.9, 38150.0], [87.0, 38150.0], [87.1, 38150.0], [87.2, 38150.0], [87.3, 38150.0], [87.4, 38150.0], [87.5, 38170.0], [87.6, 38170.0], [87.7, 38170.0], [87.8, 38170.0], [87.9, 38170.0], [88.0, 38170.0], [88.1, 38170.0], [88.2, 38170.0], [88.3, 38170.0], [88.4, 38170.0], [88.5, 38170.0], [88.6, 38170.0], [88.7, 38170.0], [88.8, 38170.0], [88.9, 38170.0], [89.0, 38170.0], [89.1, 38173.0], [89.2, 38173.0], [89.3, 38173.0], [89.4, 38173.0], [89.5, 38173.0], [89.6, 38173.0], [89.7, 38173.0], [89.8, 38173.0], [89.9, 38173.0], [90.0, 38173.0], [90.1, 38173.0], [90.2, 38173.0], [90.3, 38173.0], [90.4, 38173.0], [90.5, 38173.0], [90.6, 38173.0], [90.7, 38279.0], [90.8, 38279.0], [90.9, 38279.0], [91.0, 38279.0], [91.1, 38279.0], [91.2, 38279.0], [91.3, 38279.0], [91.4, 38279.0], [91.5, 38279.0], [91.6, 38279.0], [91.7, 38279.0], [91.8, 38279.0], [91.9, 38279.0], [92.0, 38279.0], [92.1, 38279.0], [92.2, 38290.0], [92.3, 38290.0], [92.4, 38290.0], [92.5, 38290.0], [92.6, 38290.0], [92.7, 38290.0], [92.8, 38290.0], [92.9, 38290.0], [93.0, 38290.0], [93.1, 38290.0], [93.2, 38290.0], [93.3, 38290.0], [93.4, 38290.0], [93.5, 38290.0], [93.6, 38290.0], [93.7, 38290.0], [93.8, 38310.0], [93.9, 38310.0], [94.0, 38310.0], [94.1, 38310.0], [94.2, 38310.0], [94.3, 38310.0], [94.4, 38310.0], [94.5, 38310.0], [94.6, 38310.0], [94.7, 38310.0], [94.8, 38310.0], [94.9, 38310.0], [95.0, 38310.0], [95.1, 38310.0], [95.2, 38310.0], [95.3, 38310.0], [95.4, 38311.0], [95.5, 38311.0], [95.6, 38311.0], [95.7, 38311.0], [95.8, 38311.0], [95.9, 38311.0], [96.0, 38311.0], [96.1, 38311.0], [96.2, 38311.0], [96.3, 38311.0], [96.4, 38311.0], [96.5, 38311.0], [96.6, 38311.0], [96.7, 38311.0], [96.8, 38311.0], [96.9, 38373.0], [97.0, 38373.0], [97.1, 38373.0], [97.2, 38373.0], [97.3, 38373.0], [97.4, 38373.0], [97.5, 38373.0], [97.6, 38373.0], [97.7, 38373.0], [97.8, 38373.0], [97.9, 38373.0], [98.0, 38373.0], [98.1, 38373.0], [98.2, 38373.0], [98.3, 38373.0], [98.4, 38373.0], [98.5, 38374.0], [98.6, 38374.0], [98.7, 38374.0], [98.8, 38374.0], [98.9, 38374.0], [99.0, 38374.0], [99.1, 38374.0], [99.2, 38374.0], [99.3, 38374.0], [99.4, 38374.0], [99.5, 38374.0], [99.6, 38374.0], [99.7, 38374.0], [99.8, 38374.0], [99.9, 38374.0]], "isOverall": false, "label": "read_governance_list", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 20300.0, "maxY": 9.0, "series": [{"data": [[20300.0, 1.0], [25400.0, 1.0], [25500.0, 1.0], [30300.0, 1.0], [30000.0, 1.0], [29700.0, 1.0], [30500.0, 3.0], [30600.0, 1.0], [31200.0, 1.0], [31700.0, 1.0], [31900.0, 1.0], [31800.0, 1.0], [32100.0, 1.0], [34800.0, 1.0], [37800.0, 9.0], [37600.0, 3.0], [37100.0, 1.0], [37300.0, 1.0], [37900.0, 6.0], [37400.0, 2.0], [37700.0, 4.0], [38000.0, 6.0], [37500.0, 5.0], [38100.0, 5.0], [38200.0, 2.0], [38300.0, 4.0]], "isOverall": false, "label": "read_governance_list", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 38300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 64.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 64.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 64.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 33.4375, "minX": 1.65909456E12, "maxY": 33.4375, "series": [{"data": [[1.65909456E12, 33.4375]], "isOverall": false, "label": "Read Governance List", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65909456E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 20327.0, "minX": 4.0, "maxY": 38186.25, "series": [{"data": [[33.0, 37713.0], [32.0, 37804.333333333336], [34.0, 37995.0], [36.0, 37709.5], [39.0, 37965.0], [38.0, 37508.0], [42.0, 37699.333333333336], [44.0, 37843.5], [47.0, 37618.333333333336], [49.0, 34814.0], [48.0, 37612.0], [51.0, 31879.0], [50.0, 32124.0], [53.0, 31997.0], [52.0, 31770.0], [55.0, 30502.0], [54.0, 31283.0], [57.0, 30524.0], [56.0, 30663.0], [58.0, 30552.0], [61.0, 30374.0], [60.0, 29904.5], [63.0, 25403.0], [62.0, 25535.0], [64.0, 20327.0], [4.0, 38186.25], [10.0, 38097.5], [17.0, 38021.28571428572], [19.0, 38150.0], [20.0, 37764.0], [21.0, 38031.0], [23.0, 37721.0], [24.0, 38173.0], [26.0, 37570.0], [27.0, 37585.0], [29.0, 38119.0]], "isOverall": false, "label": "read_governance_list", "isController": false}, {"data": [[33.4375, 35876.48437500001]], "isOverall": false, "label": "read_governance_list-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 306.1333333333333, "minX": 1.65909456E12, "maxY": 11373.866666666667, "series": [{"data": [[1.65909456E12, 11373.866666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65909456E12, 306.1333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65909456E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 35876.48437500001, "minX": 1.65909456E12, "maxY": 35876.48437500001, "series": [{"data": [[1.65909456E12, 35876.48437500001]], "isOverall": false, "label": "read_governance_list", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65909456E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 34478.75, "minX": 1.65909456E12, "maxY": 34478.75, "series": [{"data": [[1.65909456E12, 34478.75]], "isOverall": false, "label": "read_governance_list", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65909456E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1754.3125000000005, "minX": 1.65909456E12, "maxY": 1754.3125000000005, "series": [{"data": [[1.65909456E12, 1754.3125000000005]], "isOverall": false, "label": "read_governance_list", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65909456E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 20327.0, "minX": 1.65909456E12, "maxY": 38374.0, "series": [{"data": [[1.65909456E12, 38374.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65909456E12, 38226.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65909456E12, 38374.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65909456E12, 38310.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65909456E12, 20327.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65909456E12, 37795.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65909456E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 25469.0, "minX": 1.0, "maxY": 37891.0, "series": [{"data": [[1.0, 25469.0], [4.0, 30607.5], [48.0, 37891.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 25073.0, "minX": 1.0, "maxY": 36360.0, "series": [{"data": [[1.0, 25073.0], [4.0, 30215.0], [48.0, 36360.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.65909456E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.65909456E12, 1.0666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65909456E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.65909456E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.65909456E12, 1.0666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65909456E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.65909456E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.65909456E12, 1.0666666666666667]], "isOverall": false, "label": "read_governance_list-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65909456E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.65909456E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.65909456E12, 1.0666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65909456E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

