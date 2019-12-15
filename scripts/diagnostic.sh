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

# Warning if the script is running debug mode
echo "NOTE: Running in debug mode, check the logs/ folder for the debug output\n"

# Determine the output directory for emitted .js files specified by the tsconfig.json
outDir=`egrep "('|\")outDir('|\"):" tsconfig.json | cut -d ':' -f 2 | sed 's/,//g' | sed 's/"//g' | sed "s/'//g"`
echo "Found tsc --outDir: $outDir"

# Run the build script "npm run compile" up to the number of times specified by $trials.
#   Accumulate a $totalTime value to compute the mean and a $results array to compute
#   the variance.
totalTime=0
declare -a results
trials=30
for i in {1..30}
do
    trialTime=0
    if [ $# -eq 1 ] && [ $1 = '--debug' ] 
    then
      npm run compile > "./logs/ts-diagnostic-trial-$i-results.out"
      trialTime=`(egrep "Total time:" < ./logs/ts-diagnostic-trial-$i-results.out) | egrep -o "[0-9]+.[0-9]+"`
    else
      trialTime=`npm run compile | egrep "Total time:" | egrep -o "[0-9]+.[0-9]+"`
    fi

    results+=($trialTime)
    totalTime=$(echo "scale=6; $totalTime + $trialTime" | bc)
    rm -r $outDir;
done

# Compute the average
avgTime=$(echo "scale=6; $totalTime / $trials" | bc)
echo "Average compile time: $avgTime"

# Compute the variance using the 30 trial data as a sample of the overall population.
var=0
for i in ${!results[@]}
do
  echo "results[$i] =  ${results[i]}"
  var=$(echo "scale=6; $var + (${results[i]} - $avgTime) * (${results[i]} - $avgTime)" | bc)
done
var=$(echo "scale=6; $var / ($trials - 1)" | bc)
echo "Variance: $var";

# Output to the /log folder, the results of this diagnostic
currentTimestamp=`date +"%Y-%m-%d-%H:%M:%S"`;
outputFile="./logs/ts-diagnostic-results-${currentTimestamp}.out"
touch $outputFile
originFolder=`egrep "('|\")include('|\"):" tsconfig.json`
echo "Test was run at: $currentTimestamp" >> $outputFile
echo "The input folder specifications in tsconfig.json was: [$originFolder]" >> $outputFile
echo "Average time: ${avgTime}s" >> $outputFile
echo "Variance: ${var}s" >> $outputFile
echo "--- Raw data ---" >> $outputFile
for i in ${!results[@]} 
do
  echo "Trial $i: ${results[i]}s" >> $outputFile
done

