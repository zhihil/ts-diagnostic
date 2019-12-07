#!/bin/bash

: '
    tsc-stats.sh

    author: Zhiheng Lu
    school: University of Waterloo

    This an automation script that determines the average compile-time of a TypeScript project. 

    Notes:
        - `tsc --diagnostics` runs the TypeScript compiler and the `--diagnostics` options outputs
            a digest containing performance info about the compilation. We can determine the 
            compile time by `egrep` for the field "Total time" and extract the numeric value.

        - tsc will produce some static .js output so we will need to clean up once a compilation
            finishes.
'

runTrials () {
    outDir=`egrep "('|\")outDir('|\"):" tsconfig.json | cut -d ':' -f 2 | sed 's/,//g' | sed 's/"//g' | sed "s/'//g"`
    echo "Found tsc --outDir: $outDir"
    totalTime=0
    for i in 0 1 2 3 4 5 6 7 8 9
    do
        trialTime=`tsc --diagnostics | egrep -o "Total time:    [0-9]+.[0-9]+s$" | cut -d ":" -f 2 | sed 's/s$//g'`
        totalTime=$(echo "scale=3; $totalTime + $trialTime" | bc)
        echo "Total time so far: $totalTime"
        rm -r $outDir;
    done

    avgTime=$(echo "scale=3; $totalTime / 10" | bc)
    echo "Average compile time: $avgTime"
}

runTrials
