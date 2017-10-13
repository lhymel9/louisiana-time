window.onload = function() {
    
                    const svgCont = d3.select("body").append("svg")
                                               .attr("width", 450)
                                               .attr("height", 525);
                    const lineFunction = d3.line()
                                             .x(function(d) { return d.x })
                                             .y(function(d) { return d.y; })
                                             .curve(d3.curveLinear);
    
                    const z07_data = [ { "x": 200, "y": 10 },
                                       { "x": 200, "y": 20 },
                                       { "x": 150, "y": 40 },
                                       { "x": 150, "y": 50 },
                                       { "x": 160, "y": 70 },
                                       { "x": 160, "y": 95 },
                                       { "x": 140, "y": 120},
                                       { "x": 140, "y": 150},
                                       { "x": 110, "y": 165},
                                       { "x": 110, "y": 175},
                                       { "x": 400, "y": 85 },
                                       { "x": 400, "y": 75 },
                                       { "x": 430, "y": 45 },
                                       { "x": 430, "y": 10 },
                                       { "x": 400, "y": 10 },
                                       { "x": 390, "y": 45 },
                                       { "x": 370, "y": 45 },
                                       { "x": 370, "y": 35 },
                                       { "x": 375, "y": 35 },
                                       { "x": 375, "y": 30 },
                                       { "x": 370, "y": 30 },
                                       { "x": 320, "y": 20 },
                                       { "x": 320, "y": 10 },
                                       { "x": 280, "y": 10 },
                                       { "x": 280, "y": 0  },
                                       { "x": 245, "y": 0  },
                                       { "x": 245, "y": 10 },
                                       { "x": 200, "y": 10 }, ],
                    
                         z01_data = [ {"x": 400, "y":  85}, 
                                      {"x": 405, "y": 120},
                                      {"x": 402, "y": 160},
                                      {"x": 430, "y": 200},
                                      {"x": 430, "y": 205},
                                      {"x": 380, "y": 205},
                                      {"x": 380, "y": 225},
                                      {"x": 390, "y": 230},
                                      {"x": 400, "y": 230},
                                      {"x": 400, "y": 240},
                                      {"x": 385, "y": 240},
                                      {"x": 385, "y": 250},
                                      {"x": 415, "y": 260},
                                      {"x": 420, "y": 270},
                                      {"x": 420, "y": 285},
                                      {"x": 425, "y": 285},
                                      {"x": 425, "y": 290},
                                      {"x": 385, "y": 290},
                                      {"x": 365, "y": 280},
                                      {"x": 340, "y": 290},
                                      {"x": 250, "y": 240},
                                      {"x": 230, "y": 220},
                                      {"x": 225, "y": 210},
                                      {"x": 220, "y": 190},
                                      {"x": 215, "y": 180},
                                      {"x": 200, "y": 148},
                                      {"x": 400, "y": 85 }, ],
    
                         z08_data = [ {"x": 345, "y": 288 },
                                      {"x": 370, "y": 280 },
                                      {"x": 385, "y": 290 },
                                      {"x": 370, "y": 310 },
                                      {"x": 360, "y": 310 },
                                      {"x": 360, "y": 320 },
                                      {"x": 360, "y": 330 },
                                      {"x": 375, "y": 330 },
                                      {"x": 385, "y": 345 },
                                      {"x": 380, "y": 365 },
                                      {"x": 390, "y": 370 },
                                      {"x": 370, "y": 390 },
                                      {"x": 380, "y": 405 },
                                      {"x": 400, "y": 390 },
                                      {"x": 425, "y": 425 },
                                      {"x": 410, "y": 455 },
                                      {"x": 410, "y": 470 },
                                      {"x": 400, "y": 470 },
                                      {"x": 400, "y": 480 },
                                      {"x": 390, "y": 480 },
                                      {"x": 390, "y": 460 },
                                      {"x": 380, "y": 445 },
                                      {"x": 335, "y": 485 },
                                      {"x": 345, "y": 495 },
                                      {"x": 345, "y": 500 },
                                      {"x": 335, "y": 500 },
                                      {"x": 325, "y": 495 },
                                      {"x": 305, "y": 505 },
                                      {"x": 290, "y": 495 },
                                      {"x": 285, "y": 515 },
                                      {"x": 275, "y": 515 },
                                      {"x": 275, "y": 500 },
                                      {"x": 245, "y": 495 },
                                      {"x": 245, "y": 510 },
                                      {"x": 235, "y": 510 },
                                      {"x": 195, "y": 500 },
                                      {"x": 170, "y": 480 },
                                      {"x": 180, "y": 470 },
                                      {"x": 185, "y": 450 },
                                      {"x": 180, "y": 445 },
                                      {"x": 190, "y": 430 },
                                      {"x": 190, "y": 410 },
                                      {"x": 200, "y": 380 },
                                      {"x": 220, "y": 360 },
                                      {"x": 235, "y": 355 },
                                      {"x": 255, "y": 335 },
                                      {"x": 315, "y": 300 },
                                      {"x": 345, "y": 288 }, ],
                        
                         z03_data = [ {"x": 170, "y": 480 }, 
                                      {"x": 130, "y": 460 },
                                      {"x": 120, "y": 440 },
                                      {"x": 125, "y": 420 },
                                      {"x": 125, "y": 400 },
                                      {"x": 135, "y": 365 },
                                      {"x": 155, "y": 325 },
                                      {"x": 160, "y": 310 },
                                      {"x": 180, "y": 285 },
                                      {"x": 230, "y": 255 },
                                      {"x": 250, "y": 240 },
                                      {"x": 340, "y": 290 },
                                      {"x": 325, "y": 295 },
                                      {"x": 315, "y": 300 },
                                      {"x": 255, "y": 335 },
                                      {"x": 235, "y": 355 },
                                      {"x": 220, "y": 360 },
                                      {"x": 200, "y": 380 },
                                      {"x": 190, "y": 410 },
                                      {"x": 190, "y": 430 },
                                      {"x": 180, "y": 445 },
                                      {"x": 185, "y": 450 },
                                      {"x": 180, "y": 470 },
                                      {"x": 170, "y": 480 }, ],
    
                         z06_data = [ {"x": 125, "y": 400 },
                                      {"x": 135, "y": 365 },
                                      {"x": 155, "y": 325 },
                                      {"x": 160, "y": 310 },
                                      {"x": 180, "y": 285 },
                                      {"x": 230, "y": 255 },
                                      {"x": 250, "y": 240 },
                                      {"x": 230, "y": 220 },
                                      {"x": 225, "y": 210 },
                                      {"x": 220, "y": 190 },
                                      {"x": 215, "y": 180 },
                                      {"x": 200, "y": 148 },
                                      {"x": 110, "y": 175 },
                                      {"x": 110, "y": 215 },
                                      {"x":  85, "y": 215 },
                                      {"x":  85, "y": 245 },
                                      {"x":  75, "y": 275 },
                                      {"x":  75, "y": 335 },
                                      {"x":  70, "y": 345 },
                                      {"x":  50, "y": 345 },
                                      {"x":  50, "y": 395 },
                                      {"x":  60, "y": 405 },
                                      {"x":  75, "y": 405 },
                                      {"x":  80, "y": 375 },
                                      {"x":  90, "y": 350 },
                                      {"x": 125, "y": 350 },
                                      {"x": 125, "y": 400 }, ],
    
                         z83_data = [ {"x": 110, "y": 175},
                                      {"x":  85, "y": 175},
                                      {"x":  85, "y": 215},
                                      {"x": 110, "y": 215},
                                      {"x": 110, "y": 175}, ];
    
                    const z_07 = svgCont.append("path")
                                    .attr("d", lineFunction(z07_data));
    
                                    z_07.attr("stroke-width", 2)
                                        .attr("stroke","black")
                                        .attr("class","07");
    
                    const z_01 = svgCont.append("path")
                                    .attr("d", lineFunction(z01_data));
    
                                    z_01.attr("stroke-width", 2)
                                        .attr("stroke","black")
                                        .attr("class","01")
    
                    const z_08 = svgCont.append("path")
                                    .attr("d", lineFunction(z08_data));
    
                                    z_08.attr("stroke-width", 2)
                                        .attr("stroke","black")
                                        .attr("class","08");
    
                    const z_03 = svgCont.append("path")
                                    .attr("d", lineFunction(z03_data));
    
                                    z_03.attr("stroke-width", 2)
                                        .attr("stroke","black")
                                        .attr("class","03");
    
                    const z_06 = svgCont.append("path")
                                    .attr("d", lineFunction(z06_data));
    
                                    z_06.attr("stroke-width", 2)
                                        .attr("stroke","black")
                                        .attr("class","06");
    
                    const z_83 = svgCont.append("path")
                                    .attr("d", lineFunction(z83_data));
    
                                    z_83.attr("stroke-width", 2)
                                        .attr("stroke","black")
                                        .attr("class","83");
                    
    
                    const my_arr = ["07","01","08","03","06","83"];
                    function changeColors(color) {
                        my_arr.forEach(function(id) {
                            svgCont.select("path[class='"+id+"']").style("fill",color);
                        });
                    }
    
                    function updateColors(time) {
                        my_arr.forEach(function(zip) {
                            svgCont.select("path[class='"+id+"']").style("fill","hsl(0,100%,"+time[zip]+"%)");
                        });
                    }
    
                    let perc = 99;
                    function startRender() {
                        changeColors("hsl(0,100%,"+perc.toString()+"%)");
                        perc--;
    
                        if (perc > 40) {
                            setTimeout(startRender,250)
                        }
                    };
    
                    startRender();
                }