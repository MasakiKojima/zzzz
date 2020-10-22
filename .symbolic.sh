#!/bin/bash

numLine=1
cat $1 | while read line
do
  ln -nfs $line
  numLine=$((numLine + 1))
done
