#!/bin/bash

: '
    tsc-stats.sh

    author: Zhiheng Lu

    This an automation script that determines the average compile-time of a TypeScript project. 

    Notes:
        - `tsc --diagnostics` runs the TypeScript compiler and the `--diagnostics` options outputs
            a digest containing performance info about the compilation. We can determine the 
            compile time by `egrep` for the field "Total time" and extract the numeric value.

        - tsc will produce some static .js output so we will need to clean up once a compilation
            finishes.
'

echo "NOTE: Running in debug mode, check the logs/ folder for the debug output\n"

outDir=`egrep "('|\")outDir('|\"):" tsconfig.json | cut -d ':' -f 2 | sed 's/,//g' | sed 's/"//g' | sed "s/'//g"`
echo "Found tsc --outDir: $outDir"

totalTime=0
for i in 0 1 2 3 4 5 6 7 8 9
do
    trialTime=0
    if [ $# -eq 1 ] && [ $1 = '--debug' ] 
    then
      npm run compile > "./logs/ts-diagnostic-trial-$i-results.out"
      trialTime=`(egrep "Total time:" < ./logs/ts-diagnostic-trial-$i-results.out) | egrep -o "[0-9]+.[0-9]+"`
    else
      trialTime=`npm run compile | egrep "Total time:" | egrep -o "[0-9]+.[0-9]+"`
    fi

    totalTime=$(echo "scale=3; $totalTime + $trialTime" | bc)
    echo "Total compile time for trial $i: $totalTime"
    rm -r $outDir;
done

avgTime=$(echo "scale=3; $totalTime / 10" | bc)
echo "Average compile time: $avgTime"

currentTimestamp=`date +"%Y-%m-%d-%H:%M:%S"`;
outputFile="./logs/ts-diagnostic-results-${currentTimestamp}.out"
touch $outputFile
originFolder=`egrep "('|\")include('|\"):" tsconfig.json`
echo "Test was run at: $currentTimestamp" >> $outputFile
echo "The input folder specifications in tsconfig.json was: [$originFolder]" >> $outputFile
echo "Average time: ${avgTime}s" >> $outputFile
